![Stars](https://img.shields.io/gitlab/stars/Donaswap/test-nft-dapp?style=social)
![Forks](https://img.shields.io/gitlab/forks/Donaswap/test-nft-dapp?style=social)
![GitLab contributors](https://img.shields.io/gitlab/contributors/donaswap/test-nft-dapp)
![GitLab issues](https://img.shields.io/gitlab/issues/open/Donaswap/test-nft-dapp)
![Last Commit](https://img.shields.io/gitlab/last-commit/Donaswap/test-nft-dapp)
![Discord](https://img.shields.io/discord/851473572772970527?label=Discord)
![Twitter Follow](https://img.shields.io/twitter/follow/punkknightsbsc?style=social)

# Welcome to Punks Knights ⚔️


<img src="./public/config/images/logo1.gif" alt="Punks Knights Logo" width="200px" style="height: auto;">

To find out more please visit:

[📩 Discord](https://discord.com/invite/FVaTXyNnCS)

[💬 Telegram](https://t.me/DonaSwaptg)

[🐦 Twitter](https://twitter.com/punkknightsbsc)

[🌐 Website](https://www.donaswap.com/)

# Punk Knights NFK dApp 🛡️

This repo provides a nice and easy way for linking an existing NFT smart contract to this minting dapp. There are two ways of using this repo, you can go the simple route or the more complex one.

The simple route is so simple, all you need to do is download the build folder on the release page and change the configuration to fit your needs. (Follow the video for a walk through).

The more complex route allows you to add additional functionality if you are comfortable with coding in react.js. (Follow the below instructions for a walk through).

## Installation 🛠️

If you are cloning the project then run this first, otherwise you can download the source code on the release page and skip this step.

```sh
git clone https://gitlab.com/Donaswap/punkknights-dapp.git
```

Make sure you have node.js installed so you can use npm, then run:

```sh
npm install
```

## Usage ℹ️

In order to make use of this dapp, all you need to do is change the configurations to point to your smart contract as well as update the images and theme file.

For the most part all the changes will be in the `public` folder.

To link up your existing smart contract, go to the `public/config/config.json` file and update the following fields to fit your smart contract, network and marketplace details. The publicPrice field should be in wei.

Note: this dapp is designed to work with the intended NFT smart contract, that only takes one parameter in the mint function "mintAmount". But you can change that in the App.js file if you need to use a smart contract that takes 2 params.

```json
{
  "CONTRACT_ADDRESS": "0x9caAf7E8268512aD8aA8d89bCb0DC84E8Ec22710",
  "BLOCK_EXPLORER": "https://bscscan.com/token/0x9caaf7e8268512ad8aa8d89bcb0dc84e8ec22710",
  "NETWORK": {
    "NAME": "Binance Smart Chain",
    "SYMBOL": "BNB",
    "ID": 56
  },
  "NFK_NAME": "DRAFT KNIGHTS",
  "SYMBOL": "dKNIGHT",
  "MAX_KNIGHTS": 1000,
  "BNB_AMOUNT": 75000000000000000,
  "NFK_PRICE": 0.075,
  "GAS_LIMIT": 285000,
  "MARKETPLACE": "Opeansea",
  "MARKETPLACE_LINK": "https://opensea.io/collection/punkknights",
  "SHOW_BACKGROUND": true
}
```

Make sure you copy the contract ABI from remix and paste it in the `public/config/abi.json` file.
(follow the youtube video if you struggle with this part).

Now you will need to create and change 2 images and a gif in the `public/config/images` folder, `bg.gif`, `example.gif` and `logo.png`.

Next change the theme colors to your liking in the `public/config/theme.css` file.

```css
:root {
  --primary: #ebc908;
  --primary-text: #1a1a1a;
  --secondary: #ff1dec;
  --secondary-text: #ffffff;
  --accent: #ffffff;
  --accent-text: #000000;
}
```

Now you will need to create and change the `public/favicon.ico`, `public/logo192.png`, and
`public/logo512.png` to your brand images.

Remember to update the title and description the `public/index.html` file

```html
<title>Draft Knights</title>
<meta name="description" content="Mint your Draft Knight NFT" />
```

Also remember to update the short_name and name fields in the `public/manifest.json` file

```json
{
  "short_name": "dKINGHT",
  "name": "Draft KnightS"
}
```

After all the changes you can run.

```sh
npm run start
```

Or create the build if you are ready to deploy.

```sh
npm run build
```

Now you can host the contents of the build folder on a server.

That's it! you're done.

---
## License

[![License: GPL v3.0](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

This project is licensed under the GNU General Public License v3.0. See the [LICENSE](LICENSE) file for details.