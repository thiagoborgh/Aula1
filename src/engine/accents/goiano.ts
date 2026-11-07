import type { Accent } from '../types';
import { lToR, dropFinalR, gerundNo } from '../rules';

export const goiano: Accent = {
  id: 'goiano',
  name: 'Goiano',
  region: 'Goiás',
  emoji: '🌾',
  tagline: 'Uai, trem bão! Sotaque do Cerrado, parente próximo do mineiro e do caipira.',
  intro: [
    'O goiano fala com o “r” puxado herdado do caipira e divide com os mineiros expressões como “uai” e “trem”. É um jeito de falar acolhedor, devagar e cheio de diminutivos.',
    'Pequi, empadão e pamonha fazem parte do vocabulário tanto quanto as gírias. O conversor aplica as trocas típicas e as muletas do Cerrado.',
  ],
  words: {
    você: 'ocê', vocês: 'ocêis', bom: 'bão', coisa: 'trem', coisas: 'trem', legal: 'bão demais',
    amigo: 'cumpadre', obrigado: 'brigado', obrigada: 'brigada', dinheiro: 'cobre', festa: 'festança',
    conversa: 'prosa', nossa: 'uai', caramba: 'uai', melhor: 'mió', pior: 'pió', para: 'pra',
    estou: 'tô', está: 'tá', vamos: 'vamo', não: 'num', ótimo: 'bão demais', menino: 'minino',
    menina: 'minina', mesmo: 'mêmo', depressa: 'ligeiro', rápido: 'ligeiro',
  },
  phrases: {
    'muito bom': 'bão demais da conta', 'tudo bem': 'tudo bão', 'meu deus': 'nossa sinhora',
    'o que é isso': 'que trem é esse', 'bom dia': 'bão dia',
  },
  rules: [lToR, dropFinalR, gerundNo],
  starters: ['Uai', 'Ô', 'Nossa sinhora'],
  enders: ['uai', 'sô', 'trem bão'],
  glossary: [
    { term: 'Uai', meaning: 'Interjeição de surpresa, igual ao mineiro.', example: 'Uai, cê chegou cedo!' },
    { term: 'Trem', meaning: 'Qualquer coisa.', example: 'Que trem é esse?' },
    { term: 'Pequi', meaning: 'Fruto do Cerrado, símbolo da culinária goiana.', example: 'Arroz com pequi é o prato do dia.' },
    { term: 'Ocê', meaning: 'Você.', example: 'Ocê vai?' },
    { term: 'Empadão', meaning: 'Torta de massa recheada, típica de Goiás.', example: 'Fiz empadão goiano.' },
    { term: 'Cumpadre', meaning: 'Amigo próximo.', example: 'Ô cumpadre, entra!' },
  ],
  curiosities: [
    'O pequi é amado e temido: quem come precisa tomar cuidado com os espinhos do caroço.',
    'Goiânia é uma capital planejada e abriga um dos maiores festivais de música sertaneja do país.',
    'A música sertaneja universitária nasceu em grande parte no Centro-Oeste.',
  ],
};
