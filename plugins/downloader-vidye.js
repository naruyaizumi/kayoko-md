
let handler = async (m, { conn, args }) => {
if (!args[0]) return m.reply("💌 *Masukkan URL Videy!* 🌸")
let url = args[0]
if (!/^https:\/\/videy\.co\/v\?id=/i.test(url)) return m.reply("🙅‍♀️ *URL tidak valid! Kirimkan link Videy yang benar, ya.*")
try {
await global.loading(m, conn)
let response = await fetch(global.API("btz", "/api/download/videy", { url }, "apikey"))
if (!response.ok) throw new Error(`*Gagal mendapatkan data dari API. Status:* ${response.status}`)
let json = await response.json()
if (!json.status || !json.result) return m.reply("❌ *Gagal mendapatkan video. Coba cek URL-nya lagi ya!*")
let videoUrl = json.result
let caption = `
━━━━━━━━━━━━━━━━━━━
🌸 *Video Berhasil Ditemukan!*
📁 *Sumber: Videy.co*
━━━━━━━━━━━━━━━━━━━
`.trim()
await conn.sendMessage(m.chat, {
video: { url: videoUrl },
caption: caption
}, { quoted: m })
} catch (error) {
console.error(error)
m.reply("❌ *Terjadi kesalahan teknis. Coba lagi nanti ya!*")
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['videy']
handler.tags = ['downloader']
handler.command = /^(videy|vd)$/i
handler.premium = true

export default handler