# chrome-extension-template

A template for building Chrome extensions with TypeScript, Vite, Solid.js and Tailwind CSS.

## Getting started

- Clone the repo and `npm i`
- Start the dev server with `npm run dev`
  - Or, test the extension popup in the browser with hot reload using `npm run dev:browser`
- Load the unpacked extension from [chrome://extensions](chrome://extensions), selecting the `dist` folder in the repo
- After each change, the extension is automatically rebuilt, but must be reloaded by clicking on the reload icon in the extensions page

## Useful links

- [Chrome manifest file format](https://developer.chrome.com/docs/extensions/reference/manifest)
- [Chrome extension tutorial](https://www.youtube.com/watch?v=GGi7Brsf7js)

## TODO

- Find a way to write service workers in TypeScript
