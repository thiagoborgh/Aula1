import type { Accent } from '../types';
import { lToR, lhToI, dropFinalR, gerundNo } from '../rules';

export const caipira: Accent = {
  id: 'caipira',
  name: 'Caipira',
  region: 'Interior de São Paulo',
  emoji: '🌽',
  tagline: 'O “r” bem puxado e o falar da roça que virou patrimônio cultural.',
  intro: [
    'O sotaque caipira vem do interior paulista, de Minas, do Paraná e do Centro-Oeste. É marcado pelo “r” retroflexo (aquele “r” bem puxado), pela troca de “l” por “r” (calma vira “carma”) e pelo “lh” soando como “i” (trabalhar vira “trabaiá”).',
    'Também tem vocabulário próprio, como “causo”, “cumpadre” e “pobrema”. Foi eternizado pela música sertaneja de raiz e por personagens como Jeca Tatu e Chico Bento.',
  ],
  words: {
    nós: 'nóis', vocês: 'ocêis', você: 'ocê', senhor: 'sinhô', senhora: 'sinhá', com: 'cum',
    para: 'pra', porque: 'purque', amigo: 'cumpadre', amiga: 'cumadre', história: 'causo',
    problema: 'pobrema', vamos: 'vamo', mulher: 'muié', filho: 'fio', filha: 'fia', olho: 'oio',
    vez: 'veiz', mês: 'mêis', três: 'trêis', cachaça: 'pinga', campo: 'roça', ainda: 'inda',
    alguém: 'arguém', algum: 'argum', alguma: 'arguma', algo: 'argo', melhor: 'mió', pior: 'pió',
    pequeno: 'piqueno', menino: 'minino', menina: 'minina', mesmo: 'mêmo', muito: 'munto',
    legal: 'bão', obrigado: 'brigado', obrigada: 'brigada', não: 'num', bom: 'bão', rápido: 'ligeiro',
    estou: 'tô', está: 'tá', velho: 'veio', mil: 'mir', milho: 'mio',
  },
  phrases: {
    'tudo bem': 'tudo bão', 'meu deus': 'nossa sinhora', 'muito bom': 'bão demais da conta',
    'de nada': 'de nada, sinhô', 'não sei': 'num sei', 'bom dia': 'bão dia',
  },
  rules: [lhToI, lToR, dropFinalR, gerundNo],
  starters: ['Ô', 'Pois é', 'Ó só'],
  enders: ['sô', 'cumpadre', 'viu'],
  glossary: [
    { term: 'Causo', meaning: 'História contada, geralmente exagerada.', example: 'Vou contá um causo da roça.' },
    { term: 'Cumpadre', meaning: 'Amigo próximo; compadre.', example: 'Ô cumpadre, passa aqui!' },
    { term: 'Pobrema', meaning: 'Problema.', example: 'Sem pobrema, sinhô.' },
    { term: 'Nóis', meaning: 'Nós.', example: 'Nóis vai na festa.' },
    { term: 'Ocê', meaning: 'Você.', example: 'Ocê já viu isso?' },
    { term: 'Pinga', meaning: 'Cachaça.', example: 'Uma pinga pra esquentá.' },
    { term: 'Roça', meaning: 'Zona rural, plantação.', example: 'Nasci e criei na roça.' },
    { term: 'Mió', meaning: 'Melhor.', example: 'Isso é mió que aquilo.' },
  ],
  curiosities: [
    'O dialeto caipira foi estudado por Amadeu Amaral em 1920 no livro “O Dialeto Caipira”.',
    'O “r” retroflexo, aquele puxado, é a marca mais forte e a mais fácil de identificar.',
    'Chico Bento, de Maurício de Sousa, ajudou a espalhar o sotaque para milhões de leitores.',
  ],
};
