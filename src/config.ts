// Configuração central do site. Troque aqui o nome/contato.
export const SITE = {
  name: 'Sotaquei',
  tagline: 'Conversor de sotaques brasileiros',
  description:
    'Escreva um texto normal e veja como ele soaria em mineiro, carioca, paulistano, gaúcho, baiano e outros sotaques do Brasil. Grátis e instantâneo.',
  email: 'contato@sotaquei.com.br', // TODO: trocar pelo e-mail real
  adsenseClient: import.meta.env.PUBLIC_ADSENSE_CLIENT as string | undefined, // ex: ca-pub-1234567890123456
};
