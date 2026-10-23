# Shahzaib Techx — 3D Developer Portfolio

Interactive 3D portfolio built with **React, TypeScript, Vite, Three.js and GSAP**, with an AI chat assistant powered by a serverless API route (Groq).

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Environment variables

Copy `.env.example` to `.env` and add your key (never commit `.env`):

```
GROQ_API_KEY=your_groq_api_key_here
```

On Vercel, add the same `GROQ_API_KEY` under Project Settings → Environment Variables.

## Deploy

Deployed on **Vercel** (`vercel.json` and the `api/chat.js` serverless function are already set up).

## License

MIT — see [LICENSE](LICENSE).
