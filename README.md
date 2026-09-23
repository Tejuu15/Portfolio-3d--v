# K M Tejamurthy — React Portfolio

A React portfolio built with Vite for an Artificial Intelligence and Machine
Learning engineering student. The page preserves the original portfolio's
responsive layout, abstract hero art, project cards, mobile navigation, and
cursor glow while replacing standalone DOM scripting with React state and
effects.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite, usually `http://localhost:5173`.

## Validate the project

```bash
npm run lint
npm run build
```

## React structure

- `src/main.jsx` mounts the React application.
- `src/App.jsx` contains the portfolio UI and reusable project rendering.
- `src/index.css` contains global browser and font setup.
- `src/App.css` imports the portfolio visual stylesheet.
- `styles.css` contains the responsive design and visual system.

The menu state and cursor glow are managed with React state and effects instead
of standalone DOM event listeners.
