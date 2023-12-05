# Deltaswap Connect

Deltaswap Connect is a project to facilitate integration with the Deltaswap protocol. It is thus far comprised of 3 components: deltaswap-connect, sdk and builder. Below is a brief introduction on each, see the corresponding READMEs for more information.
It is a fork of [Wormhole Connect](https://github.com/wormhole-foundation/wormhole-connect)

### Deltaswap Connect

An app that brings all the functionality and utility of the Deltaswap token bridge right into your application and removes all of the complexity. It is built to be embedded within any application, simply copy a script tag or install the [npm package](https://www.npmjs.com/package/@deltaswap-foundation/deltaswap-connect). 

Optionally, configure a number of parameters such as supported chains/tokens and theme.

Read more [here](deltaswap-connect/README.md)

### Customizer

Customize and integrate via our no-code solution: https://connect-in-style.deltaswap.io/

### SDK

The beginning of a refactor of the existing sdk. It is written in Typescript and is built with ease-of-use in mind. It is organized into different `context` classes (i.e. evm, solana, terra, etc) which each implement the same methods with standardized parameters.

Read more [here](./sdk/README.md)

### Builder

Initially this serves as a way to test integrating deltaswap-connect. 

In the future, this will become a playground where developers can come to customize their integration by selecting the chain and tokens they would like to support as well as edit theme variables to make it blend seamlessly within their application.

Read more [here](./builder/README.md)


## Integration 

Include the deltaswap connect 

```html
<!-- include in <head> -->
<script src="https://www.unpkg.com/@deltaswap-foundation/deltaswap-connect@0.0.12/dist/main.js" defer></script>
<link rel="https://www.unpkg.com/@deltaswap-foundation/deltaswap-connect@0.0.12/dist/main.css" />

<!-- include in <body> -->
<div id="deltaswap-connect"></div>
```

OR

```javascript
import DeltaswapBridge from '@deltaswap-foundation/deltaswap-connect';
function App() {
  return (
    <DeltaswapBridge />
  );
}
```


## Contributing

Contributions are welcome! To work on deltaswap-connect locally you'll want to use `npm link` to make the changes to the SDK immediately available.

### Setup

1) Link the sdk

```bash
cd ./sdk
npm i
npm run build
npm link
cd ../deltaswap-connect
npm link @deltaswap-foundation/deltaswap-connect-sdk
```

2) Install

Run `npm i` at the root of the repo

3) Start

Start deltaswap-connect UI and view in browser at localhost:3000
```bash
# in /deltaswap-connect
npm run start # testnet
```

Start builder UI and view in browser at localhost:3000
```bash
# in /builder
npm run start
```


## Disclaimer

This SDK is an open source software SDK that leverages the Deltaswap protocol, a cross chain messaging protocol. The SDK does not process payments. THIS SDK AND THE DELTASWAP PROTOCOL ARE PROVIDED "AS IS", AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND. By using or accessing this SDK or Deltaswap, you agree that no developer or entity involved in creating, deploying, maintaining, operating this SDK or Deltaswap, or causing or supporting any of the foregoing, will be liable in any manner for any claims or damages whatsoever associated with your use, inability to use, or your interaction with other users of, this SDK or Deltaswap, or this SDK or Deltaswap themselves, including any direct, indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits, cryptocurrencies, tokens, or anything else of value. By using or accessing this SDK, you represent that you are not subject to sanctions or otherwise designated on any list of prohibited or restricted parties or excluded or denied persons, including but not limited to the lists maintained by the United States' Department of Treasury's Office of Foreign Assets Control, the United Nations Security Council, the European Union or its Member States, or any other government authority.

Deltaswap Connect is an NPM package that interacts with the Deltaswap protocol. You assume all risks associated with using the SDK, the Deltaswap Connect NPM package, the Deltaswap protocol, and digital assets and decentralized systems generally, including but not limited to, that: (a) digital assets are highly volatile; (b) using digital assets is inherently risky due to both features of such assets and the potential unauthorized acts of third parties; (c) you may not have ready access to assets; and (d) you may lose some or all of your tokens or other assets. You agree that you will have no recourse against anyone else for any losses due to the use of the SDK or Deltaswap. For example, these losses may arise from or relate to: (i) incorrect information; (ii) software or network failures; (iii) corrupted cryptocurrency wallet files; (iv) unauthorized access; (v) errors, mistakes, or inaccuracies; or (vi) third-party activities.
