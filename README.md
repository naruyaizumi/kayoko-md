# <div align='center'>Liora – WhatsApp Bot</div>

<div align='center'>

![WhatsApp BOT](https://files.cloudkuimages.guru/images/HFiLkuUz.jpg)

<!-- Project Badge -->
<p align="center">
  <a href="https://www.apache.org/licenses/LICENSE-2.0">
    <img src="https://img.shields.io/badge/License-Apache%202.0-blue.svg" alt="License"/>
  </a>
  <a href="https://nodejs.org/en">
    <img src="https://img.shields.io/badge/Node.js-v22%2B-brightgreen?logo=node.js" alt="Node.js"/>
  </a>
  <a href="https://whatsapp.com/channel/0029Vb5vz4oDjiOfUeW2Mt03">
    <img src="https://img.shields.io/badge/WhatsApp-Channel-brightgreen?logo=whatsapp" alt="WhatsApp Channel"/>
  </a>
</p>
</div>

# 🥳 Coming Soon in September
📍 **Available for Free as Full Open Source**

## 📋 Table of Contents

- [📖 Description](#-liora--whatsapp-md-script)
- [📂 Key Features](#-key-features)
- [🔥 Popular Features](#-popular-features)
- [⚙️ Technical Details](#-technical-details)
- [📞 Contact & Information](#-contact--information)
- [🧱 Project Structure](#-project-structure)
- [🔐 Setting API Key & Whitelist IP (BetaBotz)](#-setting-api-key--whitelist-ip---betabotz)
- [💝 Thanks & Credits](#-thanks--credits)
- [🌸 Arigatou Ne~](#-arigatou-ne)

# ✨ Liora – WhatsApp MD Script

🔐 **Secure. Modular. API-Powered.**
💡 Designed for developers, resellers, and advanced WhatsApp bot users who want stability, speed, and a clean code structure.

## 📁 Key Features

- **Full Source** — No encrypted or locked parts.
- **Modular** — Each feature is standalone and easy to modify.
- **Lightweight** — The size is approximately ±400MB, including dependencies.
- **Modern JavaScript** — Uses standard ES Modules (ESM).
- **Node.js v22+** — Compatible with Node.js version 22 and above.
- **Minimal Dependencies** — Optimized for deployment on low-spec VPS.
- **Easy Deployment** — Compatible with PM2 and Pterodactyl-based environments.


## 🎯 Popular Features

- Multi-platform media downloader.
- Interactive formats.
- AI tools.
- Group moderation.
- Community fun.
- Server tools.

## 🔍 Technical Details

| Info        | Value                     |
|-------------|---------------------------|
| Script Name | `Liora`          |
| Framework   | `@itsukichan/baileys`     |
| Runtime     | `Node.js v24.x.x`         |
| License     | Apache License 2.0        |

## 🔗 Contact & Information

- 🌐 **Link Bio**: [naruyaizumi](https://linkbio.co/naruyaizumi)

For technical questions, bug reports, or feedback, you can contact us directly via WhatsApp or Instagram DM.

We also have an active community group and an official updates channel 💌✨

## 📁 Project Structure

This is the main directory structure of **Liora** and its description:

| Location / File           | Description                                                                  |
|---------------------------|------------------------------------------------------------------------------|
| `lib/`                    | A collection of internal libraries: leveling, converter, logs, game tools, etc. |
| `plugins/`                | The directory for all bot commands/plugins (~800+ plugins)                   |
| `src/`                    | Additional assets such as images and fonts for media features                |
| `tmp/`                    | A folder for temporary media buffer storage                                  |
| `config.js`               | The main bot configuration (prefix, session name, etc.)                      |
| `database.json`           | A local JSON-based database file                                             |
| `handler.js`              | The main handler for loading plugins and message routing                     |
| `index.js`                | The main entry point, typically for PM2 starters                             |
| `LICENSE`                 | The project license (Apache 2.0 / Proprietary)                               |
| `main.js`                 | The initial boot file loaded before the handler                              |
| `package.json`            | Project metadata and a list of dependencies                                  |

## 🔐 Setting API Key & Whitelist IP - BetaBotz

📌 **Initial Steps:**
1. Visit: [api.betabotz.eu.org](https://api.betabotz.eu.org)
2. Log in to your account (Use the registered number + email)

### 🔑 Get Your API Key

1. Go to the **Profile** menu.
2. Copy the `Apikey` section — Example: `liora`

### 🌐 Whitelist IP (Required to Access the API)

To enable the IP address protection feature so that only specific IPs can access your API, follow these 5 easy steps:

### 🧭 Step 1 – Enter the Dashboard
![1](https://files.catbox.moe/l0j028.jpg)
Log in to your account at [Betabotz dashboard](https://betabotz.eu.org) and click the **profile logo** in the top right corner.

### 🧭 Step 2 – Open the Settings Menu
![2](https://files.catbox.moe/8rgwhf.jpg)
Scroll down, find the **Settings** section, and click the **Choose an option** dropdown.

### 🧭 Step 3 – Select “Whitelist IP”
![3](https://files.catbox.moe/o7y7xk.jpg)
From the list of options that appear, select **Whitelist IP** (it's at the bottom).

### 🧭 Step 4 – Enter Your IP Address
![4](https://files.catbox.moe/j5rj89.jpg)
Fill in the field with your VPS IP. The format must be valid, for example: `192.168.1.1`.
📌 *A maximum of 5 IP addresses can be added.*

### 🧭 Step 5 – Click "Add to Whitelist"
![5](https://files.catbox.moe/qfddyc.jpg)
Once filled, click the green **Add to Whitelist** button.
If successful, a notification will appear:
> ✅ *IP successfully added to whitelist*

✨ Tips:
- You can check your VPS IP with the command: `curl ifconfig.me`
- Maximum: **5 IP addresses**
- To add more than 5 IPs, please contact the BetaBotz admin.
- IPv4 format example: `103.145.13.42`
- If your server uses **active IPv6**, use the format:
  `2401:db00:3020:xxxx:xxxx:xxxx:xxxx:xxxx`

#### Detect your VPS IP:
```bash
# View IPv4
curl -s ipv4.icanhazip.com

# View IPv6
curl -s ipv6.icanhazip.com
```

## 📢 Tips:
Use IPv4 only if your VPS does not support IPv6.

If your VPS IP changes (e.g., after a cloud VPS restart), you will need to re-whitelist the IP.

## 💝 Thanks & Credits

The following parties have been instrumental in the development and continuity of this project:

### 🧩 Partnership & Ownership

- 🧑‍💻 **Author**: 𝑵𝒂𝒓𝒖𝒚𝒂 𝑰𝒛𝒖𝒎𝒊 — [Social Media](https://linkbio.co/naruyaizumi)  
- 🧠 **Co-Author**: 𝑺𝑿𝒁𝒏𝒊𝒈𝒉𝒕𝒎𝒂𝒓 — [WhatsApp](https://wa.me/6281398961382)

### 📦 Library & Framework

- 🧩 [`@itsukichan/baileys`](https://www.npmjs.com/package/@itsukichan/baileys)
  The main foundation for real-time communication based on the WhatsApp Web API (a modified version).

- 💡 **Base Source: `RyHar`**
  The initial modular structure and logical approach that became the bot's foundation.

- ❤️ **Open Source Dependencies**
  Thank you to all open-source communities & contributors on GitHub 🌐

### 🌐 Public API Providers

- 🔐 [BetaBotz API](https://api.betabotz.eu.org)
- 🐾 [Nekolabs API](https://nekolabs.my.id)
- 🌈 [CloudKuImages](https://cloudkuimages.guru)
- 🎯 [LolHuman API](https://api.lolhuman.xyz)
- 📚 and various other public API providers...

### 🤖 AI Assistant Integration

- 🤖 OpenAI ChatGPT
- 🌟 Google Gemini AI

Used in the debugging, refactoring, and performance optimization processes of the bot.

### 🛡️ Environment & Deployment

- 🛠️ Runtime: Node.js v24.x.x
- 📦 Package Manager: `pnpm` / `npm`
- ☁️ VPS: Hostinger, DigitalOcean, etc.
- 🧳 File Transfer: Termius (SFTP)
- 🔧 Process Manager: PM2

### ❤️ Personal Acknowledgement

A huge thank you to:

- 🙏 God Almighty — for all the ease and strength during the development process.
- 👪 Parents — for their unwavering moral support and encouragement.
- 🌍 All users, buyers, and the developer community — for their trust and contributions to the project's journey.

## 📜 License

This project is licensed under the **Apache License 2.0**.

You are permitted to use, modify, and distribute this project —
**as long as proper credit is given** to all contributors and original authors listed above.

Unauthorized resale, rebranding, or claim of ownership without permission
is strictly **prohibited** and may result in legal action.

## 🌸 Arigatou ne~!

![naruyaizumi](https://cloudkuimages.guru/uploads/images/SLmZHi1j.jpg)

You've reached the end of the documentation~
Hopefully, all the features and functions you've read about can be useful for your project~
If anything is still confusing, feel free to join the WhatsApp group to ask questions~ 🫶🏻✨

> 📖 This documentation was written out of boredom, coding enthusiasm, and a reminder to not forget to eat 🍓

📬 Developer Contact: [WhatsApp](https://wa.me/31629155460) • [Instagram](https://instagram.com/naruyaizumi)

✨ Powered by: `IZUMI` 🦄