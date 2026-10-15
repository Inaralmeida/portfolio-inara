# Portfólio — Inara Almeida

Portfólio pessoal em **Next.js, React e TypeScript**, com visual tech/dark e layout responsivo.

## Projetos
- **Nia** — produto SaaS em andamento, destaque principal.
- **Smilink** — sistema acadêmico completo, segundo case em destaque.
- **Paraweb** — site institucional.
- **Finanças Mais 2.0** — projeto didático de arquitetura, SOLID e TDD.
- DevJobs, Jogo da Forca, Pedra/Papel/Tesoura/Lagarto/Spock, ToDo Challenge, Fylo, Clipboard, Gráfico de Despesas e Somos Todos a Anastácia.

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
A branch `main` contém a versão consolidada do portfólio com hero estática, projetos em carrossel, seções e fundo azul unificado. A CI executa o build e o GitHub Pages publica a versão estática.

**Vercel:** em *Deployments*, confira o SHA do commit mostrado no log. Um deployment do commit `5ab6e86` é antigo e não representa a versão atual. Confira em *Project Settings → Git* se o repositório `Inaralmeida/portfolio-inara` e a branch de produção `main` estão conectados; em seguida publique o commit mais recente. Se houver um deployment antigo com erro, não use **Redeploy** nele: isso pode recompilar o mesmo commit antigo.

**GitHub Pages:** https://inaralmeida.github.io/portfolio-inara/

### Entrega consolidada
O último conjunto de alterações da hero, galeria de projetos, seção sobre experiência do usuário, contato e estilo global está na `main`. Evite publicar ou reutilizar builds antigos como referência do estado atual.

## Validação
O workflow CI executa `npm install` e `npm run build` em commits e pull requests para main.
