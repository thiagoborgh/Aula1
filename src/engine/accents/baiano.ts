import type { Accent } from '../types';
import { dropFinalR } from '../rules';

export const baiano: Accent = {
  id: 'baiano',
  name: 'Baiano',
  region: 'Bahia',
  emoji: '🥁',
  tagline: 'Oxe, meu rei! O falar cantado e acolhedor da Bahia.',
  intro: [
    'O baiano tem um ritmo musical, vogais abertas e um jeito carinhoso de tratar as pessoas: “meu rei”, “minha rainha”, “painho” e “mainha”. A fala é lenta e melodiosa, bem diferente da pressa do Sudeste.',
    'Expressões como “oxe”, “barril” e “massa” viraram marca do Nordeste. O conversor troca o vocabulário e adiciona as muletas típicas da Bahia no começo e no fim das frases.',
  ],
  words: {
    legal: 'massa', ótimo: 'barril', pai: 'painho', mãe: 'mainha', amigo: 'rei', amiga: 'rainha',
    cara: 'véi', irmão: 'véi', nossa: 'oxe', caramba: 'oxe', vamos: 'bora', tchau: 'fui',
    obrigado: 'obrigadão', agora: 'agorinha', rápido: 'ligeirinho', bonito: 'lindo',
    estou: 'tô', está: 'tá', para: 'pra', não: 'num', espanto: 'oxe', homem: 'cabra',
  },
  phrases: {
    'muito bom': 'massa demais', 'muito legal': 'massa demais', 'meu deus': 'meu pai do céu',
    'tudo bem': 'tudo bem, meu rei', 'bom dia': 'bom dia, meu rei', 'de nada': 'de nada, visse',
  },
  rules: [dropFinalR],
  starters: ['Oxe', 'Vixe', 'Rapaz', 'Painho'],
  enders: ['meu rei', 'visse', 'oxe', 'véi'],
  glossary: [
    { term: 'Oxe', meaning: 'Interjeição de espanto ou estranhamento.', example: 'Oxe, tu já chegou?' },
    { term: 'Massa', meaning: 'Legal, bom.', example: 'Que show massa!' },
    { term: 'Barril', meaning: 'Excelente, ótimo.', example: 'A festa foi barril.' },
    { term: 'Mainha / Painho', meaning: 'Mãe / pai, de forma carinhosa.', example: 'Mainha fez o almoço.' },
    { term: 'Meu rei', meaning: 'Tratamento carinhoso.', example: 'Vem cá, meu rei.' },
    { term: 'Acarajé', meaning: 'Bolinho de feijão-fradinho frito no dendê.', example: 'Quero acarajé com vatapá.' },
  ],
  curiosities: [
    'Salvador foi a primeira capital do Brasil (1549–1763), por isso muitos traços do português brasileiro nasceram ali.',
    'O acarajé é patrimônio imaterial do Brasil e tem ligação com as religiões de matriz africana.',
    '“Axé” vira nome de gênero musical, mas significa energia vital no candomblé.',
  ],
};
