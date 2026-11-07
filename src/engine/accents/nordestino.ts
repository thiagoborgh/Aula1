import type { Accent } from '../types';
import { dropFinalR } from '../rules';

export const nordestino: Accent = {
  id: 'nordestino',
  name: 'Nordestino (Sertanejo)',
  region: 'Sertão do Nordeste',
  emoji: '🌵',
  tagline: 'Oxente! O falar de cabra arretado do sertão nordestino.',
  intro: [
    'O falar sertanejo do Nordeste tem expressões marcantes que atravessam estados: “oxente”, “eita”, “arretado”, “cabra da peste”. Vem de uma tradição oral de cordel, repente e forró.',
    'O conversor aplica o vocabulário sertanejo mais conhecido, sem ser específico de um estado, e acrescenta as muletas do sertão.',
  ],
  words: {
    ótimo: 'arretado', legal: 'arretado', homem: 'cabra', nossa: 'eita', caramba: 'eita',
    criança: 'menino', pai: 'painho', mãe: 'mainha', apressado: 'avexado', bobo: 'abestado',
    tolo: 'abestalhado', vamos: 'bora', tchau: 'fui', estou: 'tô', está: 'tá', para: 'pra',
    não: 'num', obrigado: 'obrigadão',
  },
  phrases: {
    'muito bom': 'arretado de bom', 'meu deus': 'valha-me Deus', 'não se preocupe': 'não se avexe',
    'tudo bem': 'tudo bom, visse', 'bom dia': 'bom dia, cabra',
  },
  rules: [dropFinalR],
  starters: ['Oxente', 'Eita', 'Vixe Maria', 'Valha-me Deus'],
  enders: ['visse', 'cabra', 'oxente'],
  glossary: [
    { term: 'Oxente', meaning: 'Interjeição de surpresa.', example: 'Oxente, que susto!' },
    { term: 'Arretado', meaning: 'Excelente.', example: 'O forró tava arretado.' },
    { term: 'Cabra da peste', meaning: 'Pessoa corajosa e esperta.', example: 'Aquele cabra da peste não tem medo de nada.' },
    { term: 'Avexado', meaning: 'Apressado.', example: 'Não fica avexado.' },
    { term: 'Cordel', meaning: 'Literatura popular em versos, vendida em folhetos.', example: 'Comprei um cordel na feira.' },
    { term: 'Rapadura', meaning: 'Doce de cana, em tijolinho.', example: 'Café com rapadura é bom demais.' },
  ],
  curiosities: [
    'A literatura de cordel é reconhecida como Patrimônio Cultural Imaterial do Brasil.',
    'O sertão tem fauna e flora únicas, como a caatinga, que só existe no Brasil.',
    'Luiz Gonzaga, “o Rei do Baião”, levou o sertão para o rádio nacional.',
  ],
};
