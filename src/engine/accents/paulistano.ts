import type { Accent } from '../types';

export const paulistano: Accent = {
  id: 'paulistano',
  name: 'Paulistano',
  region: 'São Paulo (capital)',
  emoji: '🏙️',
  tagline: 'Mano, meu, tipo assim: o jeito rápido e direto da maior cidade do Brasil.',
  intro: [
    'O paulistano fala rápido e direto, com um ritmo que acompanha a cidade. A língua é moldada pela mistura de imigrantes italianos, japoneses, nordestinos e tantos outros, e a gíria tem forte influência do hip hop e da periferia.',
    '“Mano”, “meu”, “mó”, “daora” e “trampo” são marcas registradas. O conversor troca esse vocabulário e adiciona as muletas “tipo”, “meu” e “mano” nos lugares onde ficariam naturais.',
  ],
  words: {
    você: 'cê', legal: 'daora', muito: 'mó', amigo: 'mano', amigos: 'manos', cara: 'mano',
    irmão: 'mano', trabalho: 'trampo', trabalhar: 'trampar', passeio: 'rolê', dinheiro: 'grana',
    mulher: 'mina', menina: 'mina', garota: 'mina', ótimo: 'top', vamos: 'bora', tchau: 'falou',
    oi: 'e aí', obrigado: 'valeu', obrigada: 'valeu', tranquilo: 'sussa', complicado: 'punk',
    pessoal: 'galera', estou: 'tô', está: 'tá', para: 'pra', né: 'né, meu', ônibus: 'busão',
    nossa: 'nossa, meu', bagunça: 'zona', engraçado: 'hilário', caramba: 'pô',
  },
  phrases: {
    'muito bom': 'mó daora', 'muito legal': 'mó daora', 'tudo bem': 'suave', 'de boa': 'de boa',
    'meu deus': 'meu, que isso', 'com certeza': 'com certeza, mano', 'o que você': 'o que cê',
    'não sei': 'sei lá, meu', 'bom dia': 'e aí, bom dia',
  },
  rules: [],
  starters: ['Tipo', 'Mano', 'Meu', 'Pô'],
  enders: ['mano', 'meu', 'tipo assim', 'tá ligado'],
  glossary: [
    { term: 'Mano', meaning: 'Amigo, parceiro.', example: 'Fala, mano!' },
    { term: 'Meu', meaning: 'Vocativo informal, tipo “cara”.', example: 'Meu, não acredito nisso.' },
    { term: 'Mó', meaning: 'Muito (“mó legal”).', example: 'Foi mó rápido.' },
    { term: 'Daora', meaning: 'Legal, bacana.', example: 'Que show daora.' },
    { term: 'Trampo', meaning: 'Trabalho.', example: 'Saio do trampo às seis.' },
    { term: 'Rolê', meaning: 'Passeio, saída.', example: 'Vamo dar um rolê no centro.' },
    { term: 'Sussa', meaning: 'Tranquilo, sem problema.', example: 'Tá sussa, relaxa.' },
    { term: 'Belê', meaning: 'Beleza, combinado.', example: 'Às sete, belê?' },
  ],
  curiosities: [
    'O paulistano troca o “r” de forma característica: o “r” em “porta” sai bem diferente do carioca.',
    'A gíria paulistana vem muito do rap e do skate dos anos 90.',
    'A mistura de imigrantes italianos deixou o ritmo de fala acelerado e expressivo.',
  ],
};
