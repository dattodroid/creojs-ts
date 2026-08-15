# CreoJS TypeScript Template Project

## Target Environment

- V8 JavaScript Engine
- ECMAScript 2018
- No browser APIs
- No Node.js APIs
- No external dependencies
- Custom type definitions provided via `.d.ts` files

## Prerequisites

1. Generate the `creojs` @type package using https://github.com/dattodroid/creojs-dts and place it in the `types/` directory.
2. Copy `browser.creojs` and `creojs.js` from:

   ```text
   <CREO_PARAMETRIC>\Common Files\apps\creojs\creojsweb
   ```

   into the `libs/` directory.

## Build and Test

- Review the TS example in `src/`.
- Build the project:

  ```bash
  npm run build
  ```

- Open `index.html` in the Creo Embedded Browser.
