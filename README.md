# The Javascript KAMI Blue Discord bot.
**This project is no longer being updated to add any major features, if you want to add something substantial**
**Please go to [bot-kt](https://github.com/kami-blue/bot-kt).**
___
[![Discord Mine](https://img.shields.io/discord/573954110454366214?label=chat&logo=discord&logoColor=white)](https://discord.gg/KfpqwZB)
[![Paypal](https://img.shields.io/badge/paypal-donate-red?color=169bd7&logo=paypal)](https://paypal.me/mik4a/5USD)
[![BTC](https://img.shields.io/badge/btc-donate-red?color=f08b16&logo=bitcoin)](https://www.blockchain.com/btc/address/19pH4aNZZMPJkqQ2826BauRokyBs1NYon7)
[![BCH](https://img.shields.io/badge/bch-donate-red?color=2db300&logo=cash-app)](https://www.blockchain.com/bch/address/19pH4aNZZMPJkqQ2826BauRokyBs1NYon7) 

## Usage

```
git clone git@github.com:kami-blue/bot-js.git
cd bot-js
./start.sh
```

Requirements: 

Make sure to also run `npm i` the first time

```
node >=12

// Linux
sudo apt-get install build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev ffmpeg
npm install pm2 -g

// Windows
npm i -g --add-python-to-path --vs2015 --production windows-build-tools
//http://blog.gregzaal.com/how-to-install-ffmpeg-on-windows/

// MacOS
xcode-select --install
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)" //if you dont have homebrew installed
brew install ffmpeg
```

`auth.json` example:
```json
{
  "token": "tokenhere",
  "githubtoken": "tokenhere"
}
```

## Thank you
[Thunderhead](https://github.com/humboldt123/the-thunderhead)  
[opus](https://github.com/discordjs/opus)  
[discord.js](https://github.com/discordjs/discord.js)  
[canvas](https://github.com/Automattic/node-canvas)  
[cat-ascii-faces](https://github.com/melaniecebula/cat-ascii-faces)  
[cat-facts](https://github.com/vadimdemedes/cat-facts)  
[...](https://github.com/kami-blue/bot-js/blob/b77edef859e942f2fb1257448d794df14e86c0eb/package.json#L12)  
