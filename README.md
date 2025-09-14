# Red Line & Blue Pressure Washing Website

This project has been migrated from Create React App to Vite for better performance, faster builds, and improved security.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode with Vite's fast HMR.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload instantly when you make changes.

### `npm run build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run preview`

Locally preview the production build.\
Open [http://localhost:4173](http://localhost:4173) to view it in your browser.

### `npm run deploy`

Deploys the built app to GitHub Pages.

## Migration to Vite

This project was successfully migrated from Create React App to Vite, which provides:

- ⚡ **Faster development** - Instant server start and lightning-fast HMR
- 🔒 **Better security** - Zero vulnerabilities (previously had multiple CRA vulnerabilities)
- 📦 **Smaller bundle size** - Better tree-shaking and optimization
- 🛠️ **Modern tooling** - Native ES modules and modern JavaScript features

### Key Changes Made

- Replaced `react-scripts` with `vite` and `@vitejs/plugin-react`
- Updated build output from `build/` to `dist/`
- Moved `index.html` to project root
- Updated scripts: `start` → `dev`, added `preview`
- Configured Vite to handle JSX in `.js` files
- Removed CRA-specific dependencies and configuration

## Technology Stack

- **React 18** - Modern React with concurrent features
- **Vite** - Next generation frontend tooling
- **React Router** - Client-side routing
- **EmailJS** - Contact form handling
- **React Scroll** - Smooth scrolling navigation

## Development

1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm run dev` to start the development server
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

The site is configured for deployment to GitHub Pages:

1. Run `npm run build` to create a production build
2. Run `npm run deploy` to deploy to GitHub Pages

The deployment will use the `dist/` folder created by Vite.
