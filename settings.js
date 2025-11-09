const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text && text.trim().toLowerCase() === fault.toLowerCase();
}

function stringToBool(str) {
    return str.toLowerCase() === 'true';
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUtlNkFZM1FmcTR1VjhFeUFocDZabzVNSWJZNW5xRzJ4Q2pWY3N4cXcyaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicnE2UWI1N2xLazExbnZxUjMxbTNaSnd4cDRRSkd2UmZhaWxieHRmVmFsRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3Rkh2cE9xU0ZxRDVDTVp1OTBYMjMybmRkcUFlU3dnVWk2a0lUd00vMzJVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlcWUvOFNjeEJveXE1eTBYdXhCUjE4Mkg4dFpuMUM0M1E0ZnZQbkRrb3c0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllNZ3JNdStWRzRyYkJlbDkxU0V1NVNpRUhlbXQ0UHFSOU5aWWVBQkEzV009In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVBVHNoYnJtRUtZcFVvZHpEeDRnakFwUlROUitDOFdXOGZIakQ1VXl1WDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEFxTWZpZjFQVEVDYU54cmVZZEVtcnRGSnBtQ2N6Y1lIUDl2UUk2VzJHOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUJkYkVobTBqTzBuZnNEbnV6UnJzdHlUcThGdlpuWS9yTWNnWlZaZnhWcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVOREdkK1Y0VktzNlhBbGlPMDV2eWdDZmZoaHhyQXErcVluYy9ZeGFBSnRGSGl2cHdiZUJqOU9nZG1IbGhQaEJWdnlIQmZ0MUttdE9JTkh1VEQ3RUN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzAsImFkdlNlY3JldEtleSI6ImhheXFlWlQrSXdrd21LWWhsZEg0a1hFVHVjZ0xwd2JCQ1pkV21yS0R4SXM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMzQ2Mzk4NDA0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDNTc2QjZBOUYwNEYyOEIwM0FERjlGNEZCNDAxQTNFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjI3MjM3NjN9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlRIM0ZtRUphU3c2bWdWX1RxcG9UQnciLCJwaG9uZUlkIjoiYzMwN2I2ZWYtNGRjZC00MmE5LWFiYzItZGIyZmRhMTE2YjMyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRqSnc4NHVydlRPVVIwSHVNR29mZEVYSEZ0VT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVdVVrRkx3VFlqVVFXOVVjNVZWVlFpU2hLTzQ9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiR0JRREtGVzEiLCJtZSI6eyJpZCI6IjkyMzM0NjM5ODQwNDo3QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjU5MTcxOTE2MjM0Nzk5OjdAbGlkIiwibmFtZSI6IkN1dGllIPCfpbAifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BPTG5PTURFS1NQeE1nR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlppUU1mQ1JDWDRaeFRrMWRtRHFOU2o4UDZpWUE0VWdna1ozK3dJVTV2Z0U9IiwiYWNjb3VudFNpZ25hdHVyZSI6InFrNDQvalZxclZOZ3lqWUlLczFGaTMxbmNISmQxUVZFWEdza09sQkxpRmZLWHl4Qm1hNHMvdVlkOGJubWxGbUVSUVA0TEU4NmV2MzM2anZzVitNZkFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJNWFFMYXJhcTNxZDAwcmlJRHA3dS83K1c2T1lGdlo2MTlDd1VxVTdPdFhELzVYUXZJK0NINW4yQWEvRVF1QTBEbysybEd5K2J3eWhYM21sQUxjN1FEQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzM0NjM5ODQwNDo3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldZa0RId2tRbCtHY1U1TlhaZzZqVW8vRCtvbUFPRklJSkdkL3NDRk9iNEIifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlEUWdJIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc2MjcyMzc2MSwibGFzdFByb3BIYXNoIjoiM1I5WjM5IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFOTUgifQ==",

    DELETE_LINKS: stringToBool(process.env.DELETE_LINKS || "true"),

    LINK_WHITELIST: "youtube.com,github.com",

    LINK_WARN_LIMIT: 3, // Number of warnings before action

    LINK_ACTION: "kick", // "kick", "mute", or "none"

    chatbotEnabled: stringToBool(process.env.chatbotEnabled || "true"),

    PREFIX: process.env.PREFIX || ".",

    BOT_NAME: process.env.BOT_NAME || "✦ᴍᴀʟᴠɪɴ xᴅ v3✦",

    MODE: process.env.MODE || "public",

    CUSTOM_REACT: stringToBool(process.env.CUSTOM_REACT || "false"),

    STICKER_NAME: process.env.STICKER_NAME || "✦MALVIN-XD✦",

    CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🔥,❤️‍🩹,❤️,🩷,🧡,💛,💚,💙,🩵,💜,🤎,🖤,🩶,🤍",

    OWNER_NUMBER: process.env.OWNER_NUMBER || "263714757857",

    OWNER_NAME: process.env.OWNER_NAME || "✦ᴍᴀʟᴠɪɴ ᴋɪɴɢ✦",

    king: process.env.king || "ᴍᴀʟᴠɪɴ ᴋɪɴɢ",

    DESCRIPTION: process.env.DESCRIPTION || "> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴋɪɴɢ ᴛᴇᴄʜ 🇿🇼*",

    ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/2prjby.jpg",

    LIVE_MSG: process.env.LIVE_MSG || "> ʙᴏᴛ ɪs sᴘᴀʀᴋɪɴɢ ᴀᴄᴛɪᴠᴇ ᴀɴᴅ ᴀʟɪᴠᴇ\n\n\nᴋᴇᴇᴘ ᴜsɪɴɢ ✦ᴍᴀʟᴠɪɴ xᴅ✦ ғʀᴏᴍ ᴍᴀʟᴠɪɴ ᴛᴇᴄʜ ɪɴᴄ⚡\n\n\n*© ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ\n\n> ɢɪᴛʜᴜʙ :* github.com/XdKing2/MALVIN-XD",

    READ_MESSAGE: stringToBool(process.env.READ_MESSAGE || "false"),

    AUTO_REACT: stringToBool(process.env.AUTO_REACT || "false"),

    ANTI_BAD: stringToBool(process.env.ANTI_BAD || "false"),

    AUTO_STATUS_SEEN: stringToBool(process.env.AUTO_STATUS_SEEN || "true"),

    AUTO_STATUS_REPLY: stringToBool(process.env.AUTO_STATUS_REPLY || "false"),

    AUTO_STATUS_REACT: stringToBool(process.env.AUTO_STATUS_REACT || "true"),

    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*🎉👀 Status Seen by ✦ᴍᴀʟᴠɪɴ xᴅ v2🚀🔥✦*",

    ANTI_LINK: stringToBool(process.env.ANTI_LINK || "true"),

    ANTI_BOT: stringToBool(process.env.ANTI_BOT || "true"),

    ANTI_DELETE: stringToBool(process.env.ANTI_DELETE || "true"),

    AUTO_VOICE: stringToBool(process.env.AUTO_VOICE || "false"),

    AUTO_STICKER: stringToBool(process.env.AUTO_STICKER || "false"),

    AUTO_REPLY: stringToBool(process.env.AUTO_REPLY || "false"),

    HEART_REACT: stringToBool(process.env.HEART_REACT || "false"),

    OWNER_REACT: stringToBool(process.env.OWNER_REACT || "true"),

    ALWAYS_ONLINE: stringToBool(process.env.ALWAYS_ONLINE || "true"),

    PUBLIC_MODE: stringToBool(process.env.PUBLIC_MODE || "true"),

    AUTO_TYPING: stringToBool(process.env.AUTO_TYPING || "true"),

    AUTO_RECORDING: stringToBool(process.env.AUTO_RECORDING || "false"),

    FAKE_RECORDING: stringToBool(process.env.FAKE_RECORDING || "false"),

    FAKE_TYPING: stringToBool(process.env.FAKE_TYPING || "false"),

    READ_CMD: stringToBool(process.env.READ_CMD || "false"),

    DEV: process.env.DEV || "263714757857",

    ANTI_VV: stringToBool(process.env.ANTI_VV || "true"),

    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log",

    CURRENT_STATUS: stringToBool(process.env.CURRENT_STATUS || "true"),

    version: process.env.version || "4.0.0",

    START_MSG: process.env.START_MSG || `*Hᴇʟʟᴏ ᴛʜᴇʀᴇ ᴍᴀʟᴠɪɴ xᴅ ᴄᴏɴɴᴇᴄᴛᴇᴅ! 👋🏻* 

    *ᴋᴇᴇᴘ ᴏɴ ᴜsɪɴɢ ᴍᴀʟᴠɪɴ ᴍᴏᴅs🚩* 

    > Joɪɴ ᴡʜᴀᴛsᴀᴘᴘ ᴄʜᴀɴɴᴇʟ (ᴀ ᴍᴜsᴛ): ⤵️  
    https://whatsapp.com/channel/0029VbA6MSYJUM2TVOzCSb2A

    > sᴜʙsᴄʀɪʙᴇ ʏᴛ ᴄʜᴀɴɴᴇʟ ғᴏʀ ᴛᴜᴛᴏʀɪᴀʟs
    https://youtube.com/@malvintech2

    - *ʏᴏᴜʀ ʙᴏᴛ ᴘʀᴇғɪx: ➡️[ . ]*
    > - ʏᴏᴜ ᴄᴀɴ ᴄʜᴀɴɢᴇ ᴜʀ ᴘʀᴇғɪx ᴜsɪɴɢ ᴛʜᴇ .ᴘʀᴇғɪx ᴄᴏᴍᴍᴀɴᴅ

    > ᴅᴏɴᴛ ғᴏʀɢᴇᴛ ᴛᴏ sʜᴀʀᴇ, sᴛᴀʀ &ғᴏʀᴋ ᴛʜᴇ ʀᴇᴘᴏ ⬇️ 
    https://github.com/XdKing2/MALVIN-XD

    > © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴋɪɴɢ 🇿🇼`
};
