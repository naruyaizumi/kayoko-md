
let handler = async (m, { conn }) => {
try {
await global.loading(m, conn)
let who = m.quoted ? m.quoted.sender: m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0]: m.fromMe ? conn.user.jid: m.sender
await conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/simpcard', {
avatar: await conn.profilePictureUrl(who).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
}), 'simpcard.png', 'simp', m)
} catch (e) {
throw e
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['simpcard']
handler.tags = ['maker']
handler.premium = true
handler.register = true

handler.command = /^(simpcard)$/i

export default handler