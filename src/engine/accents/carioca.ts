import type { Accent } from '../types';
import { chiado } from '../rules';

export const carioca: Accent = {
  id: 'carioca',
  name: 'Carioca',
  region: 'Rio de Janeiro',
  emoji: '🏖️',
  tagline: 'Caraca, mermão! O chiado do S e a gíria que atravessou o Brasil.',
  intro: [
    'O sotaque carioca é reconhecido pelo chiado no “s” (mesmo vira “mêxmo”, pasta vira “paxta”), pelo ritmo cantado e por uma enxurrada de gírias que o Rio exporta para o resto do país por meio da TV, da música e do futebol.',
    'Aqui o “tu” convive com o “você”, o amigo é “mermão” e tudo que é muito bom é “maneiro”, “irado” ou “sinistro”. O conversor troca o vocabulário e aplica o chiado nas palavras fora do dicionário.',
  ],
  words: {
    você: 'tu', legal: 'maneiro', legais: 'maneiros', amigo: 'parceiro', amigos: 'parceiros',
    cara: 'mermão', irmão: 'mermão', caramba: 'caraca', nossa: 'caraca', dinheiro: 'grana',
    ônibus: 'busão', festa: 'balada', ótimo: 'show', obrigado: 'valeu', obrigada: 'valeu',
    oi: 'e aí', olá: 'e aí', tchau: 'falou', menino: 'moleque', menina: 'garota',
    mulher: 'mina', preocupado: 'grilado', preocupação: 'grilo', preocupar: 'grilar',
    vamos: 'bora', difícil: 'complicado', bonito: 'lindão', bonita: 'lindona',
    estou: 'tô', está: 'tá', para: 'pra', ok: 'fechou', certo: 'fechado', calor: 'calorão',
    não: 'num', né: 'né não',
  },
  phrases: {
    'muito bom': 'sinistro', 'muito legal': 'irado', 'tudo bem': 'tudo em cima',
    'tudo certo': 'tudo em cima', 'o que você': 'que que tu', 'você está': 'tu tá',
    'meu deus': 'meu Deus do céu', 'com certeza': 'na moral', 'sem dúvida': 'sem dúvida, mermão',
    'bom dia': 'bom dia, parceiro', 'o que foi': 'que que foi',
  },
  rules: [chiado],
  starters: ['Pô', 'Caraca', 'Mermão', 'Cara'],
  enders: ['mermão', 'pô', 'tá ligado', 'parceiro'],
  glossary: [
    { term: 'Mermão', meaning: 'Meu irmão; tratamento entre amigos.', example: 'Fala, mermão!' },
    { term: 'Caraca', meaning: 'Interjeição de espanto.', example: 'Caraca, olha o tamanho disso!' },
    { term: 'Maneiro', meaning: 'Legal, bacana.', example: 'Que camisa maneira.' },
    { term: 'Coroa', meaning: 'Pessoa mais velha, tom carinhoso.', example: 'Meu coroa vem pro jantar.' },
    { term: 'Balada', meaning: 'Festa noturna.', example: 'Vamo pra balada hoje?' },
    { term: 'Grilado', meaning: 'Preocupado ou desconfiado.', example: 'Fiquei grilado com isso.' },
    { term: 'Tá ligado', meaning: 'Entendeu? Sabe como é?', example: 'Foi daquele jeito, tá ligado.' },
    { term: 'Fechou', meaning: 'Combinado, de acordo.', example: 'Às oito, então. Fechou!' },
  ],
  curiosities: [
    'O chiado do “s” veio da corte portuguesa, que se mudou para o Rio em 1808.',
    'Muitas gírias cariocas se espalham pelo país pela novela e pela música, como “maneiro” e “mermão”.',
    '“Carioca” vem do tupi e significa algo como “casa do branco”.',
  ],
};
