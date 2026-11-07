import type { Accent } from '../types';
import { dropFinalR } from '../rules';

export const pernambucano: Accent = {
  id: 'pernambucano',
  name: 'Pernambucano',
  region: 'Pernambuco',
  emoji: '🎺',
  tagline: 'Visse? O falar arretado de quem cresceu entre o frevo e o manguebeat.',
  intro: [
    'O pernambucano tem um vocabulário forte e cheio de energia: “arretado”, “visse”, “macho”, “eita”. O Recife ainda mantém influências de tradição holandesa e africana, e o frevo e o maracatu moldam o ritmo da fala.',
    'O conversor troca palavras comuns por equivalentes pernambucanos e finaliza muitas frases com o clássico “visse”.',
  ],
  words: {
    ótimo: 'arretado', legal: 'massa', cara: 'macho', amigo: 'macho', homem: 'cabra', mulher: 'mulé',
    nossa: 'eita', caramba: 'eita', vamos: 'bora', tchau: 'fui', obrigado: 'obrigadão',
    pai: 'painho', mãe: 'mainha', apressado: 'avexado', bobo: 'abestado', estou: 'tô', está: 'tá',
    para: 'pra', não: 'num', agora: 'agorinha',
  },
  phrases: {
    'muito bom': 'arretado', 'meu deus': 'vixe maria', 'tudo bem': 'tudo bom, visse',
    'não se preocupe': 'não se avexe', 'bom dia': 'bom dia, visse', 'de nada': 'de nada, macho',
  },
  rules: [dropFinalR],
  starters: ['Oxente', 'Eita', 'Vixe', 'Rapaz'],
  enders: ['visse', 'macho', 'oxente'],
  glossary: [
    { term: 'Arretado', meaning: 'Muito bom, excelente.', example: 'Esse bolo tá arretado!' },
    { term: 'Visse', meaning: 'Confirmação: “viu?”.', example: 'Fica aqui, visse.' },
    { term: 'Avexado', meaning: 'Apressado, nervoso.', example: 'Não fica avexado não.' },
    { term: 'Macho', meaning: 'Vocativo masculino, tipo “cara”.', example: 'Oxe, macho!' },
    { term: 'Abestado', meaning: 'Bobo, distraído.', example: 'Parou no meio da rua, abestado.' },
    { term: 'Frevo', meaning: 'Dança e ritmo típicos do carnaval pernambucano.', example: 'Fui dançar frevo em Olinda.' },
  ],
  curiosities: [
    'O frevo é Patrimônio Imaterial da Humanidade pela UNESCO.',
    'O Recife é chamado de “Veneza brasileira” pelas pontes e rios.',
    'O movimento manguebeat misturou rock, maracatu e eletrônica nos anos 90.',
  ],
};
