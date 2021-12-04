# parcel2-ssr

Please run `yarn start` to see a Parcel 2 server-rendering bug.

Parcel transforms code like this
```js
const isBrowser = typeof window !== 'undefined' &&
  typeof window.document !== 'undefined'

// This code needs to render in the browser and Node, we don't want to load CSS in Node
if (isBrowser) {
  import('normalize.css')
}
```

into this
```js
var $abz4F$normalizecss = require("normalize.css");

const $84cfad4eff4197ad$var$isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';

if ($84cfad4eff4197ad$var$isBrowser) $abz4F$normalizecss;
```

When you run this in node with `node dist/server/index.js`, you get this error
```
/home/vlady/code/parcel2-ssr/node_modules/normalize.css/normalize.css:11
html {
     ^

SyntaxError: Unexpected token '{'
    at wrapSafe (internal/modules/cjs/loader.js:1001:16)
    at Module._compile (internal/modules/cjs/loader.js:1049:27)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1114:10)
    at Module.load (internal/modules/cjs/loader.js:950:32)
    at Function.Module._load (internal/modules/cjs/loader.js:790:14)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:92:18)
    at Object.<anonymous> (/home/vlady/code/parcel2-ssr/dist/server/index.js:5:27)
    at Module._compile (internal/modules/cjs/loader.js:1085:14)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1114:10)
error Command failed with exit code 1.
```

The Parcel docs say to [avoid conditional imports](https://parceljs.org/features/scope-hoisting/#avoid-conditional-require()) but it's not clear how you'd do server rendering otherwise. How would you solve this?
