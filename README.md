# Portfólio — Inara Almeida

Portfólio pessoal em **Next.js, React e TypeScript**, com visual tech/dark e layout responsivo.

## Projetos
- **Nia** — produto SaaS em andamento, destaque principal.
- **Smilink** — sistema acadêmico completo, segundo case em destaque.
- **Paraweb** — site institucional.
- **Finanças Mais 2.0** — projeto didático de arquitetura, SOLID e TDD.
- DevJobs, Jogo da Forca, Pedra/Papel/Tesoura/Lagarto/Spock, ToDo Challenge, Fylo, Clipboard, Gráfico de Despesas e Pokédex.

## Rodar localmente
```sh
npm install
npm run dev
```

## Política de imagens dos projetos
**Só usamos imagens capturadas de aplicações reais ou capturas comprovadamente correspondentes à implementação.**
As imagens de referência em `design/desktop-preview.jpg` dos desafios Frontend Mentor não são prints do trabalho desenvolvido. Por isso, enquanto não for possível acessar os sites e produzir capturas reais, os cards exibem um aviso neutro.

Para adicionar uma captura autêntica, salve a imagem em `public/projects/<slug>.webp` e configure `screenshot: '/projects/<slug>.webp'` no arquivo `src/data/projects.ts`.

Não adicionar capturas de sistemas autenticados que contenham dados reais, dados de pacientes ou informações empresariais.

## Publicação
Projeto pronto para ser importado na Vercel como aplicação Next.js. O ambiente público só estará disponível depois do deploy.

## Validação
O workflow CI executa `npm install` e `npm run build` em commits e pull requests para main.
