const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="benjaminzuze190906@gmail.com@gmail.com"
global.location="Harare/Zimbabwe."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Harare/Zimbabwe";
global.github=process.env.GITHUB|| "https://github.com/Agent-Dyke-md/Empire_Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VajVvpQIyPtUbYt3Oz0k";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VajVvpQIyPtUbYt3Oz0k" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/6ntq2i.jpg" || "https://github.com/Agent-Dyke-md/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "©by 𝐎𝐧𝐥𝐲_𝐨𝐧𝐞_🥇𝐄𝐦𝐩𝐢𝐫𝐞" 


global.devs = "263789122322" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "Agent Dyke";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348146039223";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '2'   // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://files.catbox.moe/6ntq2i.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,263xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "263xxxxxxxxx,263xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "263xxxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_36_04_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDYxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTc2LFxuICAgICAgICA5MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxODcsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDYzLFxuICAgICAgICAyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDczLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODAsXG4gICAgICAgIDExMixcbiAgICAgICAgODIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDc2LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzksXG4gICAgICAgIDExLFxuICAgICAgICAyMDMsXG4gICAgICAgIDM4LFxuICAgICAgICA2MixcbiAgICAgICAgMTQzLFxuICAgICAgICA1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTEzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDk5LFxuICAgICAgICA5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAzLFxuICAgICAgICA1MixcbiAgICAgICAgNTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDczLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDg0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDgsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDExMixcbiAgICAgICAgMjE0LFxuICAgICAgICAyNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDU2LFxuICAgICAgICA4MSxcbiAgICAgICAgOSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMyxcbiAgICAgICAgMjE3LFxuICAgICAgICA3MSxcbiAgICAgICAgMjU1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAzOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjM0LFxuICAgICAgICA2NCxcbiAgICAgICAgOSxcbiAgICAgICAgMjI2LFxuICAgICAgICA1MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDY4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjE0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTg0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0NSxcbiAgICAgICAgOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3NixcbiAgICAgICAgODUsXG4gICAgICAgIDQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDMzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMyxcbiAgICAgICAgNCxcbiAgICAgICAgMTgyLFxuICAgICAgICA5NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4NixcbiAgICAgICAgODEsXG4gICAgICAgIDU4LFxuICAgICAgICA1NixcbiAgICAgICAgMzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjcsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjEsXG4gICAgICAgIDc5LFxuICAgICAgICA3NixcbiAgICAgICAgMjksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA5NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2MixcbiAgICAgICAgNDAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjcsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNixcbiAgICAgICAgNzksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTgwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTE1LFxuICAgICAgICA3MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDc5LFxuICAgICAgICA4MixcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjE2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkdXQW9uMkVXSjl3RjBPenRIZGdqTXNocDQ3LzNTZytoZjJGZmRLUnMyVjg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImZNNnMyME00VFhPVnIyWU9XMUx3aFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTRjNzFhNTMtODFiYS00MWQ4LTgyNzQtNzBhZGIzNzRmNWQwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDcyLFxuICAgICAgMTMyLFxuICAgICAgOTEsXG4gICAgICA0LFxuICAgICAgMTcxLFxuICAgICAgMzUsXG4gICAgICAxMjMsXG4gICAgICAyMjAsXG4gICAgICAxOCxcbiAgICAgIDQ1LFxuICAgICAgMTg1LFxuICAgICAgNTQsXG4gICAgICA4NSxcbiAgICAgIDIyLFxuICAgICAgMTgxLFxuICAgICAgNDMsXG4gICAgICAyNTQsXG4gICAgICAyMDEsXG4gICAgICA4OCxcbiAgICAgIDEyM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTIsXG4gICAgICA2NSxcbiAgICAgIDI1LFxuICAgICAgNzgsXG4gICAgICA2NixcbiAgICAgIDE1MSxcbiAgICAgIDE3OSxcbiAgICAgIDIwNSxcbiAgICAgIDE0MSxcbiAgICAgIDE1MyxcbiAgICAgIDg5LFxuICAgICAgOTEsXG4gICAgICAxOTAsXG4gICAgICA4LFxuICAgICAgMTM2LFxuICAgICAgMTM0LFxuICAgICAgMjI3LFxuICAgICAgMjExLFxuICAgICAgMzAsXG4gICAgICAxNDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiM1E2OVFESFdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNDYwMzkyMjM6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJCYXl0dWwgSGlrbWFoXCIsXG4gICAgXCJsaWRcIjogXCIyMzQ2MDQ2MDI2MDk5MTA6MTFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUE9LcU04RUVJYk53TDhHR0F3Z0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJUUS9OdWFRRS9OUTg3a0NIaTBBRHZzMVF1bndEWFJpTXp5d1FhdGJ6L1ZrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjU3UElmdnluL1h2SUFaTUZ4TEhtNHZHdFQ3Sm1pL01YN3dmRTBubHRMVFlRRGFyWEdNR2x5c0lEWnp0NG1NazN4Q2JpZm40UVZINWc0bzZEVGYrSEF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkFHZGFLNWxzR0UwQXlscHFUWHpQZUkvaElLZDg1dUtXMVBabDYzMUFVUnpXSnJvYWVVUXN6SW4xeThDRisxZWt0QzkvVGJsSjczek8vOHhZeEx3dGdBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNDYwMzkyMjM6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQzNzkxNzYxXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "Agent-Dyke-md", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "©𝐎𝐧𝐥𝐲_𝐨𝐧𝐞_🥇𝐄𝐦𝐩𝐢𝐫𝐞" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ©𝐎𝐧𝐥𝐲_𝐨𝐧𝐞_🥇𝐄𝐦𝐩𝐢𝐫𝐞 』```", //*『sᴜʙsᴄʀɪʙᴇ • Empire_Md』*\n youtube.com/only_one_empire"),
 
  author : process.env.PACK_AUTHER|| "Empire_Md",
  packname: process.env.PACK_NAME || "Sticker by",
  botname : process.env.BOT_NAME  || "Xploader_Md",
  ownername:process.env.OWNER_NAME|| "Agent-Dyke",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "kUSnarK3Xxue73tRHxzrd9sb",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-c5_mjyTPg76Sl7gx6yADErKcLzUlfhs4KcNxFBFso4T3BlbkFJQpbBq0QN6CAr8ia7bqJmveKPTmentTE6guHxlLUnUA",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "Agent-Dyke"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "sk_59adeb8a55b9c60aba5ed8b8001135049f773814fb35e722";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
