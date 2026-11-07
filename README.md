# Sotaquei 🇧🇷

Conversor de sotaques brasileiros: escreva normal e veja como soaria em mineiro, carioca, paulistano, caipira, gaúcho, goiano, baiano, pernambucano, cearense, paraense e nordestino.

Site estático em [Astro](https://astro.build). A conversão roda 100% no navegador (sem backend).

## Rodar

```bash
npm install
npm run dev      # http://localhost:4321
npm test         # testes do motor de conversão
npm run build    # gera ./dist
```

## Como funciona

`src/engine/` contém o motor, independente da interface:

- `accents/*.ts`: um arquivo por sotaque (dicionário, expressões, regras de pronúncia, muletas, glossário e curiosidades usados nas páginas).
- `convert.ts`: tokeniza o texto, tenta expressões, depois palavras e por fim regras fonéticas; insere interjeições de forma determinística.
- `rules.ts`: regras reutilizáveis (cortar o "r" do infinitivo, "l" virando "r", chiado do "s" etc.).

### Adicionar um sotaque
1. Crie `src/engine/accents/<id>.ts` seguindo o modelo de `mineiro.ts`.
2. Registre em `src/engine/accents/index.ts`. A página `/<id>`, o sitemap e o botão do conversor são gerados sozinhos.

## Deploy (Vercel)
Importe o repositório no Vercel (preset Astro é detectado, há um `vercel.json`).

Variáveis de ambiente (Settings → Environment Variables):

| Variável | Para quê |
|---|---|
| `PUBLIC_SITE_URL` | Domínio final (sitemap/canonical). Ex.: `https://sotaquei.com.br` |
| `PUBLIC_ADSENSE_CLIENT` | ID do AdSense (`ca-pub-...`). Sem isso, nenhum anúncio é carregado |
| `PUBLIC_ADSENSE_SLOT_HOME` / `PUBLIC_ADSENSE_SLOT_ACCENT` | IDs dos blocos de anúncio |

Antes de pedir o AdSense: domínio próprio, e-mail real em `src/config.ts`, `public/ads.txt` e URL no `public/robots.txt`.
