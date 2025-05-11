/**


 Copyright (C) 2025.
 Licensed under the  GPL-3.0 License;
 You may not sell this script.
 It is supplied in the hope that it may be useful.
 * @project_name : Free Bot script
 * @author : liam mtee <https://github.com/humbah2005>
 * @description : A Multi-functional whatsapp bot script.
 * @version 3.0.0
 **/


const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0FDQ1c0OHRQLzREVzlnSTNrUjc0UTJiSThsS2huR1dHdG9oVm5aKzduZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiemk5VEZzK21tMVJPc2pFeWJlVzRiaDl4enYzUnRrMW0yeTdEbzNwTklSUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNQjBKNDNHUmRxWlFpSUlzR1ViZURKSXFGZG9VWGdXQTJ0YjhyOEM2ZTBRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwTnZwY1RDekkwU3lzQVMvL3djZTRIbHBTdWc5d0tCSm9SMzdpOGVJb1g4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVPaVVWN2w5cGw1KzlObjkvK3V0MHFYWXhSNE4wSVFsU2ovMCtuNm9hSEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFyUVZSTXl6aTdkTk5WeEhsZUNIRjh3NFNFRktpaXNyYXkxQnI2dEtubWc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0FnWFhOd0tGRlIrNU5Ld250eWNjMThTRXlEeUsxS2dMVDBySU1wNkpuVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaFhnY091Y2pScEJ3QytHeXBKNldhQ0s0S1VmYWxOYUdmU2E4TWU4bFBTMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZOZHNSWi9KWUUrSVhqUVJ1NnJCR2lrKzJCRVQzZFF5WW5HQWowYXE3Zm9EUTdUMDkwZGNNeHY1VzhnQWtDYjdIZ3VaZWVmOFRyMkM2WDVZcGs1OEFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM5LCJhZHZTZWNyZXRLZXkiOiJuTjkvRmx0VEVvUzFYZkIyQmtGTU1oT0Z3Z2V4MVdYS2Iwa0V5cE52VU1BPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJUYTkyU1B3RFNDT2lQSHN3OWJCckRBIiwicGhvbmVJZCI6Ijc1MGU3ZGY3LWJiMWItNGVhNC05ZmVmLWJlM2NkZWE4OGU5YyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJISUxxcEJTdzR2dG4rRGh3TWpseHBkMjBUWkk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicys4S2JLUHlTdVJVSHpkeFE4VVlhZFlvYnB3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkJRODMyVzRHIiwibWUiOnsiaWQiOiIyNjM3ODk2Nzc2Mzk6MThAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoifkBMaWFtX19tdGVlIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKMmcyY3dGRUt6OGdzRUdHQThnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJFMHhJMThpUFV5SllkYVFaaEMwck50QTREMmZqbE1DdG80UTRhRTdxMDBFPSIsImFjY291bnRTaWduYXR1cmUiOiIrTzNYZ1hMcXVSVk9kdmJiL0U2dlR3YmhNN2lRSzJCMUR5cUQvYThFdS9KbWpSQ08zeE16SjUrYXJCUExlVXpnYWFRblNlM1RTT2xiN05UK2drNmFEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUVJFc0oxUWNvc3VlVVR5N2hIbnV2MkNaYVFiNmt6ckdvUXB0aTIzTXNGZHUzVFYwQXhXVUIwWi9EelRUZEl0aE1FN0t5SnVsMSt6QUdybEtkaldxQmc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjM3ODk2Nzc2Mzk6MThAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUk5NU05mSWoxTWlXSFdrR1lRdEt6YlFPQTluNDVUQXJhT0VPR2hPNnROQiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0Njk3NjMxM30=",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "private",
AUTO_VOICE: process.env.AUTO_VOICE || "false",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "false",
ALIVE_IMG: process.env.ALIVE_IMG || "your alive image url",
MENU_IMG: process.env.MENU_IMG || "https://files.catbox.moe/wdn1oa.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "_Hi 💁🏽 How Can I Assist You. Am alive Now._",
ANTI_LINK: process.env.ANTI_LINK || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",
PREFIX: process.env.PREFIX || ".",
FAKE_RECORDING: process.env.FAKE_RECORDING || "false",
FAKE_TYPING: process.env.FAKE_TYPING || "false",
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
CURRENT_STATUS: process.env.CURRENT_STATUS || "true",
AUTO_REACT: process.env.AUTO_REACT || "false",
HEART_REACT: process.env.HEART_REACT || "false",
OWNER_REACT: process.env.OWNER_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "『HUMBAH-MD 』",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
