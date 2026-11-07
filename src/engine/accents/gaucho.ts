import type { Accent } from '../types';

export const gaucho: Accent = {
  id: 'gaucho',
  name: 'Gaúcho',
  region: 'Rio Grande do Sul',
  emoji: '🧉',
  tagline: 'Bah, tchê! Tri legal, o falar do sul que mistura português, espanhol e italiano.',
  intro: [
    'O gaúcho carrega no falar a fronteira com o Uruguai e a Argentina, a imigração italiana e alemã e a tradição campeira. O “tu” é usado no dia a dia, o “tri” vira o superlativo universal e interjeições como “bah” e “tchê” aparecem a toda hora.',
    'Existe também um vocabulário próprio: “guri” e “guria” para criança, “bergamota” no lugar de mexerica, “cacetinho” para o pão francês. O conversor aplica tudo isso e ainda sorteia as muletas gaúchas.',
  ],
  words: {
    você: 'tu', muito: 'tri', legal: 'bacana', menino: 'guri', menina: 'guria', criança: 'guri',
    crianças: 'gurizada', mexerica: 'bergamota', tangerina: 'bergamota', mandioca: 'aipim',
    macaxeira: 'aipim', cara: 'tchê', amigo: 'parceiro', caramba: 'bah', nossa: 'bah', puxa: 'bah',
    grande: 'baita', enorme: 'baita', ótimo: 'bárbaro', excelente: 'bárbaro', oi: 'e aí',
    olá: 'bah, e aí', obrigado: 'obrigadão', estou: 'tô', está: 'tá', vamos: 'vamo', para: 'pra',
    bastante: 'um monte', imagina: 'capaz',
  },
  phrases: {
    'muito legal': 'tri legal', 'muito bom': 'tri bom', 'muito bonito': 'tri bonito',
    'pão francês': 'cacetinho', 'de nada': 'capaz', 'nem pensar': 'capaz', 'de jeito nenhum': 'capaz',
    'muito frio': 'um frio de renguear cusco', 'tudo bem': 'tudo bom', 'meu deus': 'bah, meu Deus',
  },
  rules: [],
  starters: ['Bah', 'Tchê', 'Barbaridade', 'Mas bah'],
  enders: ['tchê', 'bah', 'guri', 'barbaridade'],
  glossary: [
    { term: 'Bah', meaning: 'Interjeição de espanto ou ênfase.', example: 'Bah, que frio!' },
    { term: 'Tchê', meaning: 'Vocativo, algo como “cara”.', example: 'Fala, tchê!' },
    { term: 'Tri', meaning: 'Muito, superlativo.', example: 'O jogo foi tri bom.' },
    { term: 'Guri / Guria', meaning: 'Menino / menina.', example: 'A guria tá estudando.' },
    { term: 'Bergamota', meaning: 'Mexerica ou tangerina.', example: 'Quer uma bergamota?' },
    { term: 'Cacetinho', meaning: 'Pão francês.', example: 'Comprei cacetinho na padaria.' },
    { term: 'Capaz', meaning: 'De jeito nenhum; também “imagina”.', example: 'Capaz, não precisa agradecer.' },
    { term: 'Baita', meaning: 'Grande, impressionante.', example: 'Que baita churrasco!' },
  ],
  curiosities: [
    'O chimarrão passa de mão em mão: recusar a cuia sem explicar pode ser considerado grosseria.',
    '“Tchê” pode vir do espanhol platino “che”, usado na Argentina e no Uruguai.',
    'O gaúcho conjuga “tu” com a terceira pessoa (“tu vai”), diferente de Portugal.',
  ],
};
