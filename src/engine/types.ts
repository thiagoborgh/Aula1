export type RuleReplacer = string | ((match: string, ...groups: string[]) => string);
/** Regra fonética aplicada (em minúsculas) a palavras que não estão no dicionário. */
export type Rule = [RegExp, RuleReplacer];

export interface GlossaryItem {
  term: string;
  meaning: string;
  example: string;
}

export interface Accent {
  id: string; // slug da URL
  name: string; // "Mineiro"
  region: string; // "Minas Gerais"
  emoji: string;
  tagline: string;
  intro: string[]; // parágrafos para a página do sotaque
  /** palavra -> substituição (chaves em minúsculas, com acento) */
  words: Record<string, string>;
  /** expressões de 2 a 4 palavras -> substituição */
  phrases: Record<string, string>;
  rules: Rule[];
  /** interjeições no começo da frase */
  starters: string[];
  /** vocativos/muletas no fim da frase */
  enders: string[];
  glossary: GlossaryItem[];
  curiosities: string[];
}
