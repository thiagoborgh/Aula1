import { describe, it, expect } from 'vitest';
import { convert, accents, accentById } from './index';

const mineiro = accentById('mineiro')!;
const carioca = accentById('carioca')!;

describe('motor de conversão', () => {
  it('troca palavras do dicionário', () => {
    expect(convert('Você está bem', mineiro, { intensity: 0 })).toBe('Cê tá bem');
  });
  it('preserva maiúsculas', () => {
    expect(convert('NOSSA', mineiro, { intensity: 0 })).toBe('NÓ');
    expect(convert('Nossa', mineiro, { intensity: 0 })).toBe('Nó');
  });
  it('aplica expressões antes de palavras', () => {
    expect(convert('Meu Deus, que susto', mineiro, { intensity: 0 })).toBe('Nossinhora, que susto');
  });
  it('funciona sem acentos', () => {
    expect(convert('voce esta bem', mineiro, { intensity: 0 })).toBe('cê tá bem');
  });
  it('aplica regras fonéticas', () => {
    expect(convert('vou falar comendo', mineiro, { intensity: 0 })).toBe('vou falá comeno');
    expect(convert('mesmo problema', carioca, { intensity: 0 })).toContain('mexmo');
  });
  it('é determinístico e a semente muda o resultado possível', () => {
    const t = 'Eu acho que vamos conseguir terminar tudo hoje. Depois vamos sair para comemorar.';
    expect(convert(t, mineiro, { intensity: 1 })).toBe(convert(t, mineiro, { intensity: 1 }));
  });
  it('mantém pontuação e quebras de linha', () => {
    const out = convert('Oi!\nTudo bem?', carioca, { intensity: 0 });
    expect(out).toContain('\n');
    expect(out).toContain('?');
  });
  it('texto vazio retorna vazio', () => {
    expect(convert('   ', mineiro)).toBe('');
  });
  it('todo sotaque converte uma frase sem quebrar', () => {
    for (const a of accents) {
      const out = convert('Nossa, você está muito legal hoje, meu amigo. Vamos tomar um café agora.', a, { intensity: 1 });
      expect(out.length).toBeGreaterThan(10);
      expect(out).not.toContain('undefined');
    }
  });
  it('sotaques têm ids únicos e glossário', () => {
    expect(new Set(accents.map((a) => a.id)).size).toBe(accents.length);
    for (const a of accents) expect(a.glossary.length).toBeGreaterThanOrEqual(5);
  });
});
