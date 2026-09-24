# Portfolio 3D

A React portfolio built with Vite. The current page is a React conversion of the
original static portfolio and preserves its responsive layout, abstract hero art,
project cards, mobile navigation, and cursor glow.

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
