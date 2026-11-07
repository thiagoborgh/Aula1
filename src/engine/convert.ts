import type { Accent } from './types';

export interface ConvertOptions {
  /** muda as muletas escolhidas; 0 é o padrão */
  seed?: number;
  /** 0 a 1: frequência de interjeições/muletas. Padrão 0.5 */
  intensity?: number;
}

const strip = (s: string) => s.normalize('NFD').replace(/\p{M}/gu, '');

function hash(str: string): number {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function mulberry32(a: number) {
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function matchCase(original: string, replacement: string): string {
  if (!replacement) return replacement;
  if (original.length > 1 && original === original.toUpperCase()) return replacement.toUpperCase();
  const first = original[0];
  if (first !== first.toLowerCase()) return replacement[0].toUpperCase() + replacement.slice(1);
  return replacement;
}

interface Index {
  words: Map<string, string>;
  fallback: Map<string, string>; // chaves sem acento (só quando não ambíguas)
  phrases: Map<string, string>;
  maxPhrase: number;
}

const cache = new WeakMap<Accent, Index>();

function indexOf(accent: Accent): Index {
  let idx = cache.get(accent);
  if (idx) return idx;
  const words = new Map(Object.entries(accent.words));
  const fallback = new Map<string, string>();
  for (const [k, v] of words) {
    const s = strip(k);
    if (k.length > 2 && s !== k && !words.has(s)) fallback.set(s, v);
  }
  const phrases = new Map<string, string>();
  let maxPhrase = 1;
  for (const [k, v] of Object.entries(accent.phrases)) {
    phrases.set(strip(k), v);
    maxPhrase = Math.max(maxPhrase, k.split(' ').length);
  }
  idx = { words, fallback, phrases, maxPhrase };
  cache.set(accent, idx);
  return idx;
}

function applyRules(word: string, accent: Accent): string {
  let w = word;
  for (const [re, rep] of accent.rules) {
    w = w.replace(re, rep as string);
  }
  return w;
}

const TOKEN = /(\p{L}+(?:['’-]\p{L}+)*)|([^\p{L}]+)/gu;

export function convert(text: string, accent: Accent, opts: ConvertOptions = {}): string {
  if (!text.trim()) return '';
  const { seed = 0, intensity = 0.5 } = opts;
  const idx = indexOf(accent);
  const tokens = [...text.matchAll(TOKEN)].map((m) => ({ word: !!m[1], text: m[0] }));

  const out: string[] = [];
  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i];
    if (!t.word) {
      out.push(t.text);
      continue;
    }
    // 1) tenta expressões, da mais longa para a mais curta
    let matched = false;
    for (let n = Math.min(idx.maxPhrase, 4); n >= 2 && !matched; n--) {
      const parts: string[] = [];
      let j = i;
      while (parts.length < n && j < tokens.length) {
        if (tokens[j].word) parts.push(tokens[j].text);
        else if (!/^[ \t]+$/.test(tokens[j].text)) break;
        j++;
      }
      if (parts.length < n) continue;
      const rep = idx.phrases.get(strip(parts.join(' ').toLowerCase()));
      if (rep !== undefined) {
        out.push(matchCase(t.text, rep));
        i = j - 1;
        matched = true;
      }
    }
    if (matched) continue;
    // 2) dicionário, 3) regras fonéticas
    const lower = t.text.toLowerCase();
    const hit = idx.words.get(lower) ?? idx.fallback.get(lower);
    if (hit !== undefined) out.push(matchCase(t.text, hit));
    else if (t.text.length === 1) out.push(t.text);
    else out.push(matchCase(t.text, applyRules(lower, accent)));
  }

  return addFillers(out.join(''), accent, hash(`${accent.id}|${seed}|${text}`), intensity);
}

function addFillers(text: string, accent: Accent, h: number, intensity: number): string {
  const rand = mulberry32(h);
  const pEnd = 0.6 * intensity;
  const pStart = 0.4 * intensity;
  const pickEnd = () => accent.enders[Math.floor(rand() * accent.enders.length)];
  const pickStart = () => accent.starters[Math.floor(rand() * accent.starters.length)];

  return text.replace(/([^.!?\n]*[^.!?\s\n])([.!?]*)/g, (full, body: string, punct: string) => {
    const lead = body.match(/^\s*/)![0];
    let core = body.slice(lead.length);
    const nWords = core.split(/\s+/).length;
    if (nWords < 5) return full;
    const rEnd = rand();
    const rStart = rand();
    const e = pickEnd();
    const s = pickStart();
    if (rStart < pStart && !/^[A-ZÀ-Ú]{2,}/.test(core) && !core.toLowerCase().includes(s.toLowerCase())) {
      const head = core[0];
      const lowered = /\p{Lu}/u.test(core[1] ?? '') ? head : head.toLowerCase();
      core = `${s}, ${lowered}${core.slice(1)}`;
    }
    if (rEnd < pEnd && !core.toLowerCase().includes(e.toLowerCase())) {
      core = `${core}, ${e}`;
    }
    return lead + core + punct;
  });
}
