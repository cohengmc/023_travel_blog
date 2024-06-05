31 May 2024
Documenting the journey

To run vite from terminal:
Navigate to directory then:
    TO CREATE (ONLY ONCE) - npm create vite@latest
EACH TIME:
    npm install
    npm run dev
    use localhost link in terminal


Put this in vite.config.js to get .JPG images to work
assetsInclude: ['**/*.JPG'],
https://stackoverflow.com/questions/78043075/why-jpg-images-cant-be-imported-in-vite-for-react

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
