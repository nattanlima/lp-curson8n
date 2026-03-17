# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Deploy em produção (GitHub Pages)

O repositório usa GitHub Actions para build e deploy automático. O site estático é gerado e publicado no GitHub Pages.

### Ativar o deploy

1. No repositório no GitHub: **Settings** → **Pages**.
2. Em **Build and deployment** → **Source**, escolha **GitHub Actions**.
3. Faça push na branch `main` (ou dispare o workflow em **Actions** → **Deploy to GitHub Pages** → **Run workflow**).

Após o primeiro deploy, o site ficará em:

- `https://<seu-usuario>.github.io/lp-curson8n/`
- Se o domínio customizado estiver configurado (CNAME: `domine-n8n.prismeapp.com.br`), use esse endereço após apontar o DNS do domínio para o GitHub Pages.
