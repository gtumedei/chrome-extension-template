# chrome-extension-template

A template for building Chrome extensions with Deno, TypeScript, Vite, Solid.js, and Tailwind CSS. For a Node-based version, check out the [node](https://github.com/gtumedei/chrome-extension-template/tree/node) branch.

## Getting started

- Clone the repo and `deno install`
- Start the dev server with `deno task dev`
  - Or, test the extension popup a dedicated browser tab with hot reload using `deno task dev:browser`
- Load the unpacked extension from [chrome://extensions](chrome://extensions), selecting the `dist` folder in the repo
- The extension is automatically rebuilt upon saving a file, but must be reloaded by clicking on the reload icon in the extensions page. Any tabs where the extension is used must also be reloaded after each change.

## Useful links

- [Chrome manifest documentation](https://developer.chrome.com/docs/extensions/reference/manifest)
- [Chrome extension tutorial](https://www.youtube.com/watch?v=GGi7Brsf7js) (Based on Node.js)
