import type { Rule } from './types';

/** falar -> falá, comer -> comê, partir -> partí (palavras com 4+ letras) */
export const dropFinalR: Rule = [
  /^(\p{L}{2,})([aei])r$/u,
  (_m, stem, v) => stem + ({ a: 'á', e: 'ê', i: 'í' } as Record<string, string>)[v],
];

/** falando -> falano, comendo -> comeno */
export const gerundNo: Rule = [/^(\p{L}{2,}[aei])ndo$/u, '$1no'];

/** l antes de consoante vira r: calma -> carma, volta -> vorta */
export const lToR: Rule = [/([aeiou])l(?=[bcdfgjkmnpqrstvxz])/gu, '$1r'];

/** lh vira i: trabalhar -> trabaiar, orelha -> oreia */
export const lhToI: Rule = [/lh/gu, 'i'];

/** -inho vira -im: pouquinho -> pouquim */
export const inhoToIm: Rule = [/inho$/u, 'im'];

/** chiado carioca: s antes de consoante vira x (mesmo -> mexmo) */
export const chiado: Rule = [/s(?=[bcdfgjklmnpqrtvz])/gu, 'x'];
