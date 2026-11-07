import type { Accent } from '../types';
import { dropFinalR, gerundNo, inhoToIm } from '../rules';

export const mineiro: Accent = {
  id: 'mineiro',
  name: 'Mineiro',
  region: 'Minas Gerais',
  emoji: '🧀',
  tagline: 'Uai, sô! O jeito calmo de falar de quem engole sílaba e nunca tem pressa.',
  intro: [
    'O sotaque mineiro é famoso pelo ritmo tranquilo, pelas palavras “encurtadas” e por expressões que só quem nasceu em Minas entende de primeira. O “r” no fim dos verbos some (falar vira “falá”), o gerúndio perde o “d” (falando vira “falano”) e o diminutivo manda em tudo: cafezim, pouquim, devagarzim.',
    'Algumas palavras viraram marca registrada: “uai” para expressar surpresa, “trem” para quase qualquer coisa, “sô” como tratamento carinhoso e “bão” no lugar de bom. O conversor aplica essas trocas e ainda espalha as muletas típicas no começo e no fim das frases.',
  ],
  words: {
    você: 'cê', vocês: 'cêis', para: 'pra', estou: 'tô', está: 'tá', estão: 'tão', estava: 'tava',
    bom: 'bão', bons: 'bões', coisa: 'trem', coisas: 'trem', algo: 'um trem', devagar: 'devagarzim',
    perto: 'pertim', sozinho: 'sozim', sozinha: 'sozinha', melhor: 'mió', pior: 'pió', senhor: 'sô',
    obrigado: 'brigado', obrigada: 'brigada', café: 'cafezim', história: 'causo', conversa: 'prosa',
    conversar: 'prosear', ontem: 'onti', então: 'entonce', agora: 'agorinha', vamos: 'vamo',
    menino: 'minino', menina: 'minina', não: 'num', né: 'né não', nossa: 'nó', caramba: 'nó',
    legal: 'bão', ótimo: 'bão demais', rápido: 'ligeiro', rápida: 'ligeira', depressa: 'ligeiro',
    quase: 'quasim', pouco: 'pouquim', pouquinho: 'pouquim', mesmo: 'mêmo', gente: 'gente',
    dinheiro: 'cobre', ônibus: 'busão', bonito: 'bonitão', bonita: 'bonitona', demais: 'demais da conta',
  },
  phrases: {
    'meu deus': 'nossinhora', 'nossa senhora': 'nossinhora', 'muito bom': 'bão demais da conta',
    'muito bonito': 'bonito demais da conta', 'muito bem': 'bão demais', 'tudo bem': 'tudo bão',
    'o que é isso': 'que trem é esse', 'que coisa': 'que trem', 'um pouco': 'um tiquim',
    'por favor': 'por favorzim', 'de nada': 'de nada, sô', 'com certeza': 'com certeza, uai',
    'bom dia': 'bão dia', 'tomar café': 'tomá um cafezim', 'não sei': 'num sei',
  },
  rules: [dropFinalR, gerundNo, inhoToIm],
  starters: ['Uai', 'Ô sô', 'Nó', 'Ô trem bão'],
  enders: ['uai', 'sô', 'trem', 'ôh'],
  glossary: [
    { term: 'Uai', meaning: 'Interjeição de surpresa ou estranhamento.', example: 'Uai, cê já chegou?' },
    { term: 'Trem', meaning: 'Qualquer coisa, objeto ou situação.', example: 'Pega aquele trem pra mim.' },
    { term: 'Sô', meaning: 'Forma carinhosa de tratamento (de “senhor”).', example: 'Vem cá, sô!' },
    { term: 'Bão', meaning: 'Bom.', example: 'Esse queijo tá bão demais.' },
    { term: 'Nó', meaning: 'Expressa espanto ou admiração.', example: 'Nó, que calor!' },
    { term: 'Ocê / Cê', meaning: 'Você.', example: 'Cê vai na festa?' },
    { term: 'Causo', meaning: 'História contada, muitas vezes exagerada.', example: 'Vou te contar um causo.' },
    { term: 'Prosa', meaning: 'Conversa descontraída.', example: 'Fiquei de prosa com o vizinho.' },
  ],
  curiosities: [
    'Minas Gerais tem mais de um sotaque: o do Triângulo, o do Sul de Minas e o de BH são bem diferentes entre si.',
    '“Pão de queijo” e “café coado” são tão parte da cultura que viram sinônimo de recepção mineira.',
    'A fama de “mineiro come quieto” vem do jeito reservado e desconfiado, quase um traço cultural.',
  ],
};
