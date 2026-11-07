import type { Accent } from '../types';

export const paraense: Accent = {
  id: 'paraense',
  name: 'Paraense',
  region: 'Pará (Belém)',
  emoji: '🌳',
  tagline: 'Égua! O sotaque amazônico de Belém, onde tudo que é bom é “pai d’égua”.',
  intro: [
    'O paraense, em especial o belenense, tem um vocabulário muito particular. A interjeição “égua” aparece em tudo: surpresa, espanto, ênfase. Quem fala usa “tu” e trata o amigo por “mano” ou “maninho”.',
    'O conversor troca o vocabulário comum por expressões paraenses e adiciona as muletas locais. Tudo que é muito bom vira “pai d’égua”.',
  ],
  words: {
    você: 'tu', legal: "pai d'égua", ótimo: "pai d'égua", cara: 'mano', amigo: 'mano', irmão: 'mano',
    nossa: 'égua', caramba: 'égua', puxa: 'égua', vamos: 'bora', tchau: 'fui', obrigado: 'obrigadão',
    estou: 'tô', está: 'tá', para: 'pra', não: 'num', excelente: "pai d'égua",
  },
  phrases: {
    'muito bom': "pai d'égua", 'muito legal': "pai d'égua", 'meu deus': 'égua do céu',
    'tudo bem': 'tudo certo', 'bom dia': 'bom dia, mano', 'de nada': 'de nada, mano',
  },
  rules: [],
  starters: ['Égua', 'Mano', 'Ôh égua'],
  enders: ['mano', 'égua', 'maninho'],
  glossary: [
    { term: 'Égua', meaning: 'Interjeição de surpresa ou ênfase.', example: 'Égua, que chuva!' },
    { term: "Pai d'égua", meaning: 'Excelente, ótimo.', example: "Esse açaí tá pai d'égua." },
    { term: 'Mano / Maninho', meaning: 'Amigo, irmão.', example: 'Fala, maninho!' },
    { term: 'Tacacá', meaning: 'Caldo amarelo com tucupi, jambu e camarão.', example: 'Vou tomar um tacacá no fim da tarde.' },
    { term: 'Açaí', meaning: 'Fruto amazônico, comido com farinha e peixe.', example: 'Almoço com açaí e peixe frito.' },
    { term: 'Círio', meaning: 'Maior procissão religiosa do Pará, em outubro.', example: 'Esse ano vou ao Círio de Nazaré.' },
  ],
  curiosities: [
    'O Círio de Nazaré, em Belém, reúne mais de dois milhões de pessoas.',
    'O açaí no Pará é comido salgado, com peixe e farinha de mandioca.',
    'Belém é conhecida como “cidade das mangueiras” pelas árvores que cobrem as ruas.',
  ],
};
