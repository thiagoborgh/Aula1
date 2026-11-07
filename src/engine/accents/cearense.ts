import type { Accent } from '../types';
import { dropFinalR } from '../rules';

export const cearense: Accent = {
  id: 'cearense',
  name: 'Cearense',
  region: 'Ceará',
  emoji: '☀️',
  tagline: 'Ave Maria! O jeito de falar sol, humor e muito “tu” de Fortaleza.',
  intro: [
    'O cearense é famoso pelo humor e pela fala expressiva. Em Fortaleza o “tu” é regra, o “mermo” (mesmo) aparece a toda hora e expressões como “ave maria”, “brabo” e “danado” mostram assombro e admiração.',
    'O conversor troca o vocabulário comum por equivalentes cearenses e adiciona as muletas locais no começo e no fim das frases.',
  ],
  words: {
    você: 'tu', mesmo: 'mermo', ótimo: 'brabo', legal: 'massa', homem: 'cabra', nossa: 'ave maria',
    caramba: 'ave maria', vamos: 'bora', tchau: 'fui', obrigado: 'obrigadão', estou: 'tô', está: 'tá',
    para: 'pra', não: 'num', bobo: 'abestado', mulher: 'mulé', cara: 'macho', amigo: 'macho',
  },
  phrases: {
    'muito bom': 'brabo demais', 'meu deus': 'ave maria', 'tudo bem': 'tudo certo, viu',
    'bom dia': 'bom dia, viu', 'de nada': 'de nada, macho',
  },
  rules: [dropFinalR],
  starters: ['Ave Maria', 'Oxente', 'Mas rapaz', 'Eita'],
  enders: ['viu', 'macho', 'visse'],
  glossary: [
    { term: 'Ave Maria', meaning: 'Interjeição de espanto.', example: 'Ave Maria, que calor!' },
    { term: 'Brabo', meaning: 'Muito bom, intenso.', example: 'Esse forró tá brabo.' },
    { term: 'Mermo', meaning: 'Mesmo.', example: 'Foi isso mermo.' },
    { term: 'Danado', meaning: 'Esperto, ou admirado.', example: 'Esse menino é danado.' },
    { term: 'Tu', meaning: 'Você; muito usado em Fortaleza.', example: 'Tu vai na praia?' },
    { term: 'Forró', meaning: 'Dança e música típica do Nordeste.', example: 'Saímos pra dançar forró.' },
  ],
  curiosities: [
    'Fortaleza é conhecida pelo humor dos cearenses, que se espalhou pelo país com comediantes como Tom Cavalcante e Chico Anysio.',
    'O Ceará tem mais de 570 km de litoral.',
    'A rapadura é símbolo gastronômico do sertão cearense.',
  ],
};
