
let handler = async (m, { args, usedPrefix, command }) => {
if (!args[0]) return m.reply(`📦 *Contoh penggunaan: ${usedPrefix + command} google.com*`)
let response = await fetch(`http://ip-api.com/json/${args[0]}`)
let res = await response.json()
if (res.status !== "success") return m.reply(`❌ IP untuk domain ${args[0]} tidak ditemukan!`)
let teks = `🌐 *Informasi IP Domain* 🌐
────────────────────
🔍 *Query: ${res.query}*
🌍 *Negara: ${res.country} (${res.countryCode})*
📍 *Wilayah: ${res.regionName} (${res.region})*
🏙️ *Kota: ${res.city}*
🏷️ *ZIP: ${res.zip}*
🧭 *Latitude: ${res.lat}*
🧭 *Longitude: ${res.lon}*
🕒 *Zona Waktu: ${res.timezone}*
🧠 *ISP: ${res.isp}*
💼 *Organisasi: ${res.org}*
📡 *AS: ${res.as}*`.trim()
await m.reply(teks)
}

handler.help = ['cekip']
handler.tags = ['tools']
handler.command = /^(cekip|ip)$/i
handler.register = true
handler.limit = true

export default handler