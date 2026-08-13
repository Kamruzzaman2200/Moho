# Moho

Frontend client for a gadget shop, built with React 19, Vite, Tailwind CSS + daisyUI, React Router, and Firebase.

> **Status:** early development. The routing, layout, and Firebase setup are in place; pages and product features are still being built out.

## Tech Stack

| Layer | Tool |
| --- | --- |
| Framework | React 19 |
| Build tool | Vite 8 |
| Routing | React Router DOM 7 |
| Styling | Tailwind CSS 3 + daisyUI 4 |
| Backend services | Firebase 12 |
| Linting | ESLint 10 |

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

```bash
git clone https://github.com/Kamruzzaman2200/Moho.git
cd Moho
npm install
```

### Environment variables

Firebase is configured through Vite env variables. Create a `.env.local` file in the project root:

```env
VITE_APIKEY=your_api_key
VITE_AUTHDOMAIN=your_project.firebaseapp.com
VITE_PROJECTID=your_project_id
VITE_STORAGEBUCKET=your_project.appspot.com
VITE_MESSAGINGSENDERID=your_sender_id
VITE_APPID=your_app_id
```

You can find these values in your Firebase console under **Project settings → General → Your apps**.

### Run

```bash
npm run dev
```

The app runs at `http://localhost:5173`.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server with hot module replacement |
| `npm run build` | Build for production into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

## Project Structure

```
Moho/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/              # Images and static SVGs
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── home/
│   │       └── Banner.jsx
│   ├── firebase-config/
│   │   └── firebase.js      # Firebase app initialization
│   ├── layouts/
│   │   └── Mainlayout.jsx   # Navbar + <Outlet /> + Footer
│   ├── pages/
│   │   └── Home.jsx
│   ├── routes/
│   │   └── routes.jsx       # createBrowserRouter config
│   ├── index.css
│   └── main.jsx
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── eslint.config.js
└── vite.config.js
```

## Architecture Notes

- **Routing** uses `createBrowserRouter` in `src/routes/routes.jsx`. New pages are added as children of `Mainlayout`, which renders the shared navbar and footer around an `<Outlet />`.
- **Theming** is handled by daisyUI. The active theme is set via the `data-theme` attribute on `<html>` in `index.html` (currently `light`).
- **Firebase** is initialized once in `src/firebase-config/firebase.js` and exported as `app`. Import it wherever you need Auth, Firestore, or Storage.

## Roadmap

- [ ] Product listing and detail pages
- [ ] Firebase authentication (login / register)
- [ ] Cart and checkout flow
- [ ] User dashboard and order history
- [ ] Replace placeholder navbar and banner content

## Contributing

Issues and pull requests are welcome. Please run `npm run lint` before opening a PR.

## Author

**Kamruzzaman** — [@Kamruzzaman2200](https://github.com/Kamruzzaman2200)
