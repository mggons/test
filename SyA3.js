const {
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatkey,
		mentionedJid,
		processTime,
} = require('@adiwajshing/baileys')
const fs = require('fs')
const hx = require('hxz-api')
const axios = require("axios")
const crypto = require('crypto') 
const yts = require( 'yt-search')
const request = require('request')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const speed = require('performance-now')
const moment = require('moment-timezone')
const imageToBase64 = require('image-to-base64')
const { exec, spawn, execSync } = require('child_process')
const time = moment().tz('America/Bogota').format("HH:mm:ss")
const { y2mate } = require('./lib/y2mate');
const { wikiSearch } = require('./lib/wiki.js')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, fetchText } = require('./lib/fetcher')
const { y2mateA, y2mateV } = require('./lib/y2mate.js')
const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
gambar = fs.readFileSync('./media/logo2.jpg')
tamnel = fs.readFileSync('./media/logo.jpg')
td = fs.readFileSync('./media/TD.jpg')
const { Miminnya, BotName, fake, ownerNumber, targetpc, lolkey, Gopay, Dana, Pulsa} = require('./setting.json')
//const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, author, close,
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const tebakgambar = JSON.parse(fs.readFileSync('./database/tebakgambar.json'))
const { audios } = require('./lib/audio.js')
const { donasi } = require('./lib/donasi.js')
const regla = JSON.parse(fs.readFileSync('./database/reglas.json')) //lista de reglas grupales
const _bug = JSON.parse(fs.readFileSync('./database/bugs.json')) //lista de bugs
//const changes = JSON.parse(fs.readFileSync('./database/change.json')) //lista de cambios
const antilink = JSON.parse(fs.readFileSync('./lib/antilink.json'))
//const { version } = require('./lib/version')
const setting = JSON.parse(fs.readFileSync('./lib/settings.json'))
const dia = JSON.parse(fs.readFileSync('./database/horario.json'))
const bad = JSON.parse(fs.readFileSync('./database/badwords/bad.json'))
const BadWord = JSON.parse(fs.readFileSync('./database/badwords/BadWord.json'))
const google = require('google-it');
const msft = JSON.parse(fs.readFileSync('./lib/activacion.json'))
const countMessage = JSON.parse(fs.readFileSync('./database/countmsn/countmsg.json'))

nocache('./database/change.json', module => console.log(`${module} Cambios Realizados con exito`))
function nocache(module, cb = () => { }) {
  console.log('Modulo', `'${module}'`, 'ahora est?? visualizando los cambios')
  fs.watchFile(require.resolve(module), async () => {
      await uncache(require.resolve(module))
      cb(module)
  })
}
/*
nocache('./database/countmsn/countmsg.json', module => console.log(`${module} Cambios Realizados con exito`))
function nocache(module, cb = () => { }) {
  console.log('Modulo', `'${module}'`, 'ahora est?? visualizando los cambios')
  fs.watchFile(require.resolve(module), async () => {
      await uncache(require.resolve(module))
      cb(module)
  })
}
*/
function uncache(module = '.') {
  return new Promise((resolve, reject) => {
      try {
          delete require.cache[require.resolve(module)]
          resolve()
      } catch (e) {
          reject(e)
      }
  })
}
/*****************************************************/
/******************Formato de dormir******************/
/*****************************************************/

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/*****************************************************/
/******************Fecha y Hora***********************/
/*****************************************************/
var hoy = new Date();
var hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
var fecha = hoy.getDate() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getFullYear();
var fechaYHora = fecha + ' ' + hora;
const login1 = fechaYHora

/////////////////////////////////////////////////////

/*****************************************************/
/*****************************************************/

audio1 = fs.readFileSync('./media/audio3/nyz1.m4a')
var argm = null
//================================================================================//
banChats = false
offline = false
isSelf = false
isPublic = false
hit_today = []
a = ''
HardiApi = 'hardianto'
const apikey = setting.apikey 
const token_id = setting.token_id
prefix = setting.prefix
grupos = setting.grupos
dev = setting.dev
const update = setting.update
const rev = setting.rev
const webpag = setting.webpag
var meamasbot = null
/*async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}*/
//================================================================================//
           
function kyun(seconds){
            function pad(s){
            return (s < 10 ? '0' : '') + s;
            }
            var hours = Math.floor(seconds / (60*60));
            var minutes = Math.floor(seconds % (60*60) / 60);
            var seconds = Math.floor(seconds % 60);
            return `${pad(hours)}H ${pad(minutes)}M ${pad(seconds)}S`
            }
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
          if(time2 < "23:59:00"){
          var ucapanWaktu = 'GoodNigh????'
}
          if(time2 < "19:00:00"){
          var ucapanWaktu = 'GooodEvening????'
}
          if(time2 < "18:00:00"){
          var ucapanWaktu = 'GoodEvening????'
}
          if(time2 < "15:00:00"){
          var ucapanWaktu = 'GoodAfternoon????'
}
          if(time2 < "11:00:00"){
          var ucapanWaktu = 'GoodMoorning????'
}
          if(time2 < "05:00:00"){
          var ucapanWaktu = 'GoodNight????'
}
  
//================================================================================//
           
      module.exports = client = async (client, mek, _welkom) => {
	        try {
	    //const { id } = message
      
      if (!mek.hasNewMessage) return
      mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked		
		  mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
	    const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, groupInviteMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
			const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			const wita = moment.tz('America/Bogota').format("HH:mm:ss")
      const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
      const hour_now = moment().format('HH:mm:ss')
      const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		    const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
	      const args = body.trim().split(/ +/).slice(1)
	    	const isCmd = body.startsWith(prefix)
	      const q = args.join(' ')
		    const botNumber = client.user.jid
		    const botNumberss = client.user.jid + '@c.us'
		    const isGroup = from.endsWith('@g.us')
		    let delmsm = isGroup ? mek.participant : mek.key.botNumber
        let sender = isGroup ? mek.participant : mek.key.remoteJid
		    const isOwner = ownerNumber.includes(sender)
	     	const totalchat = await client.chats.all()
		    const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
		    const groupName = isGroup ? groupMetadata.subject : ''
	     	const groupId = isGroup ? groupMetadata.jid : ''
		    const groupMembers = isGroup ? groupMetadata.participants : ''
		    const groupDesc = isGroup ? groupMetadata.desc : ''
	     	const groupOwner = isGroup ? groupMetadata.owner : ''
		    const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
	     	const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		    const isGroupAdmins = groupAdmins.includes(sender) || false        
		    const isWelkom = isGroup ? _welkom.includes(from) : false
        const isAntiLink = isGroup ? antilink.includes(from) : false
        const isActivacion = isGroup ? msft.includes(from) : false
        const conts = mek.key.fromMe ? client.user.jid : client.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? client.user.name : conts.notify || conts.vname || conts.name || '-'
        if (!mek.key.fromMe && banChats === true) return    
//================================================================================//
           ///////////////////respuestas/////////////////
		mess = {
			wait: 'Por favor, espere. . .???',
      consultaG: 'Realizando tu busqueda de Google, espere. . .???',
      consultaY: 'Realizando tu busqueda de Youtube, espere. . .???',
			success: 'Successl!',
			wrongFormat: 'Wrong Format!! Please Read Menu!',
			error: {
				stick: 'This is not sticker',
				url: 'Url EROR',
			},
			only: {
				group: '[???] Este comando es solo para grupos',
				ownerG: '[???] Este comando solo puede ser utilizado por un admin del grupo',
				ownerB: '[???] Este comando solo lo usa los administradores del BOT',
				admin: '[???] Este comando solo puede ser utilizado por administradores del grupo',
				Badmin: '[???] Este comando solo se puede usar cuando el bot se convierte en administrador',
				attp: 'Calma crack estoy haciendo tu texto a sticker ????\n\n*Esto puede demorar unos minutos*\n\n',
				imgs: 'Euu flaco ????\n\n*Convirtiendo tu Sticker a Imagen ????*\n\n',
				mpcancion: 'Calmaoooo estoy procesando ????\n\n*Convirtiendo de MP4 a MP3 ????*\n\n',
				mpa: 'Euu flaco ????\n\n*Estoy decargando tu cancion ????*\n\nAguarde un momento, por favor\n\n',
				xn: 'Calmao pa ????\n\n*Estoy descargando tu video ????*\n\nAguarde un momento, por favor\n\n',
				mpv: 'Calma ???????????\n\n*Estoy descargando tu video ????*\n\nAguarde un momento, por favor\n\n',
				insta: 'Calmao ????\n\n*Estoy descargando tu post ????*\n\nAguarde un momento, por favor\n\n',
				musica: `Un momento estoy bucando tu canci??n ????\n\n*Recuerda colocar bien el nombre de la cancion o el link del video de youtube???*\n\n*Si el comando ${prefix}*play* no funciona utiliza el comando *${prefix}play2*, si no funciona utiliza el comando *${prefix}play3*`,
				activador: `Lo sentimos no podemos usar esta funcion debido a que no ha sido habilitada *(Contacte al Administrador del BOT)*`,
			}
		}
    
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))        }
        const reply = (teks) => {
            client.sendMessage(from, teks, text, {quoted:mek})
        }
        const sendMess = (hehe, teks) => {
            client.sendMessage(hehe, teks, text)
        }
        const sendVn = (teks) => {client.sendMessage(from, teks, audio, {mimetype:"audio/mp4", ptt:true, quoted:mek,contextInfo: {forwardingScore: 508, isForwarded: true}})}
        
        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }            
            
//================================================================================//
           
        const fakestatus = (teks) => {
        client.sendMessage(from, teks, text, {
        quoted: {
        key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
        },
        /*message: {
        "imageMessage": {
        "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
        "mimetype": "image/png",
        "caption": fake,
        "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
        "fileLength": "28777",
        "height": 1080,
        "width": 1079,
        "mediakey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
        "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
        "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
        "mediakeyTimestamp": "1610993486",
        "jpegThumbnail": gambar,
        "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
        }
        }*/
        }
        })
        }
        client.chatRead(from, "read")

//===============================================================================//
 //+++ || FAKE KONTAK           
           const fkontak = { 
           key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `Hallo ${pushname}\n${ucapanWaktu}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': gambar}}} 
 //+++ || FAKE TROLI         
           const troli =  {key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 2021, status: 200, thumbnail: gambar, surface: 200, message: `??? Made By ${Miminnya}\n??? Hallo ${pushname}`, orderTitle: 'LordPebri', sellerJid: '0@s.whatsapp.net'} } }                	

//=================================================//	
 
        const sendButton = async (from, context, fortext, but, mek) => {
        buttonMessages = {
        contentText: context,
        footerText: fortext,
        buttons: but,
        headerType: 1
        }
        client.sendMessage(from, buttonMessages, buttonsMessage, {
        quoted: troli
        })
        }
        const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
        const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
        };
        client.sendMessage(
        id,
        buttonMessage,
        MessageType.buttonsMessage,
        options
        );
        };
        const sendButImage = async (from, context, fortext, img, but, mek) => {
        jadinya = await client.prepareMessage(from, img, image)
        buttonMessagesI = {
        imageMessage: jadinya.message.imageMessage,
        contentText: context,
        footerText: fortext,
        buttons: but,
        headerType: 4
        }
        client.sendMessage(from, buttonMessagesI, buttonsMessage, {
        quoted: troli,
        })
        }
        async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
        const buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
        return client.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        }          
        
//===============================================================================//
        const sendMedia = async(from, url, text="", mids=[]) =>{
                if(mids.length > 0){
                text = normalizeMention(from, text, mids)
                } 
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                request.head(uri, function (err, res, body) {
                
                request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                });
                };
                download(url, filename, async function () {
                console.log('done');
                let media = fs.readFileSync(filename)
                let type = mime.split("/")[0]+"Message"
                if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
                }
                if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
                }
                client.sendMessage(from, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})                    
                    fs.unlinkSync(filename)
                });
                } 
         const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    client.sendMessage(to, media, type, { quoted: troli, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }                                 
        const sendStickerFromUrl = async(to, url) => {
        var names = Date.now() / 10000;
        var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
        });
         };
        download(url, './stik' + names + '.png', async function () {
        console.log('selesai');
        let filess = './stik' + names + '.png'
        let asw = './stik' + names + '.webp'
        exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
        let media = fs.readFileSync(asw)
        client.sendMessage(to, media, MessageType.sticker,{quoted:mek})
        fs.unlinkSync(filess)
        fs.unlinkSync(asw)
        });
        });
        }
        const sendFile = async (medya, namefile, capti, tag, vn) => {
        baper = await getBuffer(medya)
        mimi = ''
        if (namefile.includes('m4a')){
        client.sendMessage(from, baper, audio,{mimetype: 'audio/mp4',quoted: tag, filename: namefile, ptt: vn})
        }
        if (namefile.includes('mp4')){
        client.sendMessage(from, baper, video, {mimetype: 'video/mp4', quoted: tag, caption: capti, filename: namefile})
        }
        if (namefile.includes('gif')){
        client.sendMessage(from, baper, video, {mimetype: Mimetype.gif, caption: capti, quoted: tag, filename: namefile})
        } 
        if (namefile.includes('png')){
        client.sendMessage(from, baper, image, {quoted: tag, caption: capti, filename: namefile})
        }
        if (namefile.includes('webp')){
        client.sendMessage(from, baper, sticker, {quoted: tag})
        } else {
        kobe = namefile.split(`.`)[1]
        client.sendMessage(from, baper, document, {mimetype: kobe, quoted: tag, filename: namefile})
        }
        }
        const sendFileFromUrl = async(link, type, options) => {
        hasil = await getBuffer(link)
        client.sendMessage(from, hasil, type, options).catch(e => {
        fetch(link).then((hasil) => {
        client.sendMessage(from, hasil, type, options).catch(e => {
        client.sendMessage(from, { url : link }, type, options).catch(e => {
        reply('_[ ! ] Error failed to download and send media_')
        console.log(e)
       })
     })
   })
 })
}
//================================================================================//

	  colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
	  const isMedia = (type === 'imageMessage' || type === 'videoMessage')
	  const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
	  const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
	  const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
	  const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
       
      if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m ??? \x1b[1;37m]', color(pushname), 'use', color(command), 'args :', color(args.length))
      if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m ??? \x1b[1;37m]', color(pushname), 'use', color(command), 'in group', color(groupName), 'args :', color(args.length))  
      if (!mek.key.fromMe && isSelf === true) return
//=======================Contador de mensajes ========================//

const groupIdscount = []
const numbersIds = []
for(let obj of countMessage) {
groupIdscount.push(obj.groupId)
}
if(isGroup && groupIdscount.indexOf(from) >= 0) {
var ind = groupIdscount.indexOf(from)
for(let obj of countMessage[ind].numbers) {numbersIds.push(obj.jid)}
if(numbersIds.indexOf(sender) >=0) {
var indnum = numbersIds.indexOf(sender)
countMessage[ind].numbers[indnum].messages += 1
countMessage[ind].numbers[indnum].cmd_messages += isCmd ? 1 : 0
fs.writeFileSync('./database/countmsn/countmsg.json', JSON.stringify(countMessage, null, 3)+ '\n')
} else {
const messages = 1
const cmd_messages = isCmd ? 1 : 0
countMessage[ind].numbers.push({
jid: sender,
messages: messages,
cmd_messages: cmd_messages,
login: login1
})
fs.writeFileSync('./database/countmsn/countmsg.json', JSON.stringify(countMessage, null, 3) + '\n')
}
}
else if(isGroup) {
countMessage.push({
groupId: from,
numbers: [{
jid: sender,
messages: 2,
login: login1,
cmd_messages: isCmd ? 1 : 0
}]
})
fs.writeFileSync('./database/countmsn/countmsg.json', JSON.stringify(countMessage, null, 3) + '\n')
}			


//============================ Antilink ==============================//
		if (budy.includes("://chat.whatsapp.com/")){
			if (!isGroup) return
			if (!isAntiLink) return
			if (isGroupAdmins) return reply('Eres un administrador del grupo, as?? que no te prohibir?? el uso de enlaces :)')
			client.updatePresence(from, Presence.composing)
			var kic = `${sender.split("@")[0]}@s.whatsapp.net`
			reply(`Link Detectado ${sender.split("@")[0]} Usted ser?? expulsado del grupo`)
			setTimeout( () => {
				client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
			}, 0)
			setTimeout( () => {
				client.updatePresence(from, Presence.composing)
				reply("Adios mi bro")
			}, 0)
		}
//============================ Comandos Viejos ==============================//
    if (budy.includes(`${prefix}meamasbot`)){
			if (!isGroup) return
			client.updatePresence(from, Presence.composing)
			var kic = `${sender.split("@")[0]}@s.whatsapp.net`
			reply(`Lo sentimos ${sender.split("@")[0]}, tenenos que eliminarte por uso inadecuado del bot`)
			setTimeout( () => {
				client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
			}, 0)
			setTimeout( () => {
				client.updatePresence(from, Presence.composing)
				reply("Good Bye")
			}, 0)
		}

		//MEDIAFIRE - GDRIVE - MEGA
		if (budy.includes("://www.mediafire.com/")){
			if (!isGroup) return
			if (!isAntiLink) return
				client.updatePresence(from, Presence.composing)
				var usuario = `${sender.split("@")[0]}@s.whatsapp.net`
				reply(`*Si nos haces el honor puedes subirlas a el cloud*\n*usando el siguiente link:*\n*https://tiny.one/uploadfiles*\n\n*Gracias wa.me/${sender.split("@")[0]}*`)
				}
		if (budy.includes("://drive.google.com/")){
			if (!isGroup) return
			if (!isAntiLink) return
				client.updatePresence(from, Presence.composing)
				var usuario = `${sender.split("@")[0]}@s.whatsapp.net`
        reply(`*Si nos haces el honor puedes subirlas a el cloud*\n*usando el siguiente link:*\n*https://tiny.one/uploadfiles*\n\n*Gracias wa.me/${sender.split("@")[0]}*`)
				}
		if (budy.includes("://mega.nz/")){
			if (!isGroup) return
			if (!isAntiLink) return
				client.updatePresence(from, Presence.composing)
				var usuario = `${sender.split("@")[0]}@s.whatsapp.net`
				reply(`*Si nos haces el honor puedes subirlas a el cloud*\n*usando el siguiente link:*\n*https://tiny.one/uploadfiles*\n\n*Gracias wa.me/${sender.split("@")[0]}*`)
				}
	
      
//============================ Insultos ==============================//
//if (`${prefix}`,(args.length < -1)) return reply(`*Esos comandos no se encuentran disponibles*`)
//================================================================================/
//============================ A L L  C A S E  M E N U ==============================
//================================================================================/
switch (command) {  
//===== S e l e c t i o n  m e n u
case 'menu':
  if (!isGroup) return reply(mess.only.group)
      listMsg = {
      buttonText: 'Sistema Soporte y Aportes Menu\n',
      footerText: BotName + update + rev,
      description: `*Hola* @${sender.split('@')[0]},*Aqui encuentras el Menu*${'\n'}\n*Por ahora sigue en modo: ${dev}*\n*si no encuentran comandos activos es por que no han sido asignados*`,
      sections: [
      {
      rows: [
      {
        "title": "Comandos Administrador",
        "rowId": `${prefix}admincommands`
      },
      {
        "title": "Comandos Basicos",
        "rowId": `${prefix}bcommands`
      },
      {
        "title": "Nubes Privadas",
        "rowId": `${prefix}nubes`
      },
      {
          "title": "Activaciones",
          "rowId": `${prefix}activador`
        },
      {
        "title": "Chats de Grupo",
        "rowId": `${prefix}chats`
      },
      {
        "title": "Donaciones o Apoyo",
        "rowId": `${prefix}donacion`
      },
      {
        "title": "Informacion del sistema",
        "rowId": `${prefix}infosystem`
      },
      {
        "title": "Estado Del Servidor",
        "rowId": `${prefix}status`
      }
      ]
      }],
      listType: 1
      }
      client.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:mek})
      break
/*********************************************************************************/

//================================================================================/
//============================== Comandos Basicos ================================/
//================================================================================/
case 'bcommands':
  if (!isGroup) return reply(mess.only.group) 
  listMsg = {
  buttonText: 'Comandos Basicos\n',
  footerText: BotName + update + rev,
  description: `*Hola* @${sender.split('@')[0]},*Aqui encontraras los comandos basicos*${'\n'}\n*Por ahora sigue en modo: ${dev}*\n*si no encuentran comandos activos es por que no han sido asignados*`,
  sections: [
  {
  rows: [
  {
    "title": "Musica, Videos y Archivo MP3 ????",
    "rowId": `${prefix}play`
  },
  {
    "title": "Para Buscar en Youtube????",
    "rowId": `${prefix}youtube`
  },
  {
    "title": "Para Buscar en Google????",
    "rowId": `${prefix}google`
  },
  {
    "title": "Stiker Emoji ????",
    "rowId": `${prefix}emoji`
  },
  {
    "title": "Soporte Remoto ????",
    "rowId": `${prefix}remoto`
  },
  {
    "title": "Messeger Usuarios Activos ??????????????????????????",
    "rowId": `${prefix}activos`
  },
  {
    "title": "Regresar",
    "rowId": `${prefix}menu`
  }
  ]
  }],
  listType: 1
  }
  client.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:mek})
  break
           
//================================================================================/
          case 'emoji':
              if (!isGroup) return reply(mess.only.group)
              if (!q) return reply(`Y el emoji a covertir en stiker usando,\n${prefix}emoji ????`)
              qes = args.join(' ')
              reply(mess.wait)
              emoji.get(`${qes}`).then(emoji => {
              teks = `${emoji.images[4].url}`
                sendStickerFromUrl(from,`${teks}`)	
                console.log(teks)
                })
                    .catch((err) => {
              reply('Solo un emoji'); 
              })
              break
//================================================================================/
				  case 'remoto':
              if (!isGroup) return reply(mess.only.group)
              remote = await getBuffer(`https://advans.mx/wp-content/uploads/2018/11/soporte-tecnico.png`)
              teks = `*Aqui encuentras el programa usado para nuestro soporte remoto*\n*Anydesk:* https://tiny.one/remoteanydesk\n\n*Solo se usara _Teamviewer_ en caso de no funcionar el Anydesk*`
              client.sendMessage(from, remote, image, { quoted: mek, caption : teks, text} )
              break
//================================================================================/
          case 'activos':
            if (!isGroup) return reply(mess.only.group)
            let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
            let online = [...Object.keys(client.chats.get(ido).presences), client.user.jid] 
            client.sendMessage(from, `*Grupo: ${groupName}*\n\n *Messenger Usuarios Activos :* \n` + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: mek,  contextInfo: { mentionedJid: online }
            })
            break
//=================================================================================/
          case 'donacion':
            if (!isGroup) return reply(mess.only.group)
            tod = await getBuffer(`https://www.diariojuridico.com/wp-content/uploads/2021/08/donaciones-chile-diariojuridico.jpg`)
            client.sendMessage(from, tod, image, { quoted: mek, caption: '_*Tomate tu tiempo y donanos a nuestro paypal,*_\n*_te lo agradecemos con gusto_*\n\n*Donacion minima:*\n5 Dolares\n*Donacion Maxima:*\nLa que tu gustes\n\n_*-> https://www.paypal.me/malagons !!*_'})
            break     
//================================================================================/
//=========================== Informacion de Sistema =============================/
//================================================================================/

case 'infosystem':
  if (!isGroup) return reply(mess.only.group)
  listMsg = {
  buttonText: 'Informacion del Sistema\n',
  footerText: BotName + update + rev ,
  description: `Aqui encuentras la infomacion del BOT`,
  sections: [
  {
  rows: [
  {
    "title": "Estado Del Servicio",
    "rowId": `${prefix}status`
  },
  {
    "title": "Informacion de Cambios",
    "rowId": `${prefix}cambios`
  },
  {
    "title": "Reportar un error o bug's",
    "rowId": `${prefix}bugs`
  },
  {
    "title": "bug's activos",
    "rowId": `${prefix}reporte`
  }
  ]
  }],
  listType: 1
  }
  client.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:mek})
  break
//--------------------------------------------------------------------------//

 case 'bug':
  if (!isGroup) return reply(mess.only.group)
    if (args.length < 1) return reply(`Para notificar un BUG o Error usa *${prefix}bugs*,\nseguido de un espacio en blanco y escribe el problema del comando que no esta funcionando\nluego lo envias\n\n*Esto notificara automaticamente aladministrador de forma inmediata*`)
    var _in = body.slice(5)
    _bug.push(_in)
    fs.writeFileSync('./database/bugs.json', JSON.stringify(_bug))
    reply('*Enviado BUG al Administrador*')
   let lreg = `*Reporte de Bug's o Errores*\n*total* : *${_bug.length}*\n\n`
				for (let r of _bug) {
				lreg += `*->* *${r.replace(_bug)}*\n\n`}
    client.sendMessage(`573144182071@s.whatsapp.net`,`${lreg}`, MessageType.extendedText, { quoted: mek })
    break
//-------------------------------------------------------------------------//
    case 'inputchg':
      if (args.length < 1) return reply(`*Para agregar nota de los cambios al bot debes escribir,*\n\n*${prefix}inputchg* *seguido de un espacio y el texto a a??adir*`)
      var rege = body.slice(10)
      change.push(rege)
      fs.writeFileSync('./database/change.json', JSON.stringify(change))
      reply('*Enviado entrada al registro de cambios*')
      break
//-------------------------------------------------------------------------//
  /*case 'delbug': //<-Administrador, Ingresar 
  fs.writeFileSync('./database/bugs.json', JSON.stringify(''));
  teks = `Se elimino toda la lista de bug por estar solucionados`
  reply(teks)
  break*/
//-------------------------------------------------------------------------//
  case 'removechg': //<-Administrador, Ingresar 
    fs.writeFileSync('./database/change.json', JSON.stringify(''));
    teks = `Ya no hay cambios en el bot`
    reply(teks)
    break
//-------------------------------------------------------------------------//
/*  case 'cambios':
    let lrege = `*Soporte y Aportes Oficial Bot ????*\n*Ofrecida por: ${Miminnya}*\n*Compilacion:* *${compile}*\n*Revision:* *${rev}*\n*Pagina Web: ${webpag}*\n\n`
				for (let r of change) {
				lrege += `-> *${r.replace(change)}*\n`}
    client.sendMessage(from,`${lrege}`, MessageType.extendedText, { quoted: mek })
    break*/
//-------------------------------------------------------------------------//
/*case 'reporte':
    let lreg1 = `*Reporte de Bug's o Errores*\n\n`
				for (let r of bug) {
				lreg1 += `*->* *${r.replace(bug)}*\n\n`}
    client.sendMessage(from,`${lreg1}`, MessageType.extendedText, { quoted: mek })
    break*/

//-------------------------------------------------------------------------//
//-------------------------------------------------------------------------//
//-------------------------------------------------------------------------//
		  case 'd':			
				client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: false }) 
				break 
//-------------------------------------------------------------------------//

        //====== C a t a l o g  m e n u
      case 'menucatalog':
            menunya = `${ucapanWaktu} ${pushname}
            
??? *MEDIA MENU* ???
??? _${prefix}smeme <replyimg>_
??? _${prefix}textstic <addtext>_
??? _${prefix}toimg <replysticker>_
??? _${prefix}sticker <send/replyimg>_
??? _${prefix}pmeme <replyimg+text|txt>_

??? *FUN TIME* ???
??? _${prefix}truth_
??? _${prefix}dare_
??? _${prefix}darkjokes_

??? *DOWLOADER* ???
??? _${prefix}play <query>_
??? _${prefix}ytmp3 <link>_
??? _${prefix}ytaudio <link>_
??? _${prefix}ytmp4 <link>_
??? _${prefix}tiktok <link>_

??? *GAME MENU* ???
??? _${prefix}next_

??? *SEARCH MENU* ???
??? _${prefix}next_

??? *OWNER MENU* ???
??? _${prefix}welcome <on/off>_
??? _${prefix}next_`
            var imgs = await client.prepareMessage('0@c.us', gambar, image, { thumbnail: tamnel })
            var imgCatalog = imgs.message.imageMessage
            var ctlg = await client.prepareMessageFromContent(from, {
            "productMessage": {
            "product": {
            "productImage": imgCatalog,
            "productId": "4457725420906655",
            "title": `THIS IS A MENU`,
            "description": menunya,
            "footerText": `???FEBRIBOT`,
            "currencyCode": "USD",
            "priceAmount1000": "0",
            "productImageCount": 1,
            "firstImageId": 1,
            "salePriceAmount1000": "0",
            "retailerId": `Please Use prefix+command Example : ${prefix}sticker`,
            "url": "blm ada"
            },
            "businessOwnerJid": `${ownerNumber}@s.whatsapp.net`,
            }
            }, { quoted: fkontak, mimetype: 'image/jpeg' })
            client.relayWAMessage(ctlg)
            break
//====== B u t t o n. m e n u            
/*      case 'buttonmenu':
            menu = `Hola ${pushname} Aun seguimos en desarrollo y pruebas
            
Estaremos al 100% de actividad al final de mes`
            but = [
            { buttonId: `${prefix}Register`, buttonText: { displayText: 'Registro' }, type: 1 },
            { buttonId: `${prefix}rules`, buttonText: { displayText: 'Reglas' }, type: 1 },
            { buttonId: `${prefix}Contacto`, buttonText: { displayText: 'Contacto' }, type: 1 }
                 ]
            sendButLocation(from, menu, fake, tamnel, but)
            break
*/

//================================================================================/
//==============================  Nubes Privadas  ================================/
//================================================================================/
case 'nubes':
  listMsg = {
  buttonText: 'Nubes del Grupo / Cloud Group\n',
  footerText: `\n${fake}`,
  description: `En que nube deseas buscar:`,
  sections: [
  {
  rows: [
  {
  "title": "Onedrive Empresarial",
  "rowId": `${prefix}onedrive`
  },
  {
  "title": "Onedrive Empresarial Contrase??a",
  "rowId": `${prefix}onedrivepass`
  },
  {
  "title": "Google Drive Acceso",
  "rowId": `${prefix}gdrive`
  }
  ]
  }],
  listType: 1
  }      
  client.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:mek})
break
//================================================================================/
case 'onedrive':
  imgserver = await getBuffer(`https://cloudo3.com/ArticleIMG/image-0724021035369.jpg`)
  teks = `*Hola* @${sender.split('@')[0]},\n*Aqui esta el link de la nube privada del grupo*\n`
  teks += `*https://tiny.one/cloudsya*`
  client.sendMessage(from, imgserver, MessageType.image, { contextInfo: { mentionedJid: [sender]},quoted:mek, caption : teks })
  break
//================================================================================/
case 'gdrive':
  imgserver = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRWCcGXCTWPaFkA9Oxz5NeLgCGghV6WomXzl-wSdynxY3CkIOH7drb0qeeCQu91OkX7pU&usqp=CAU`)
  teks = `*Usuario* @${sender.split('@')[0]},\n*Aqui esta el link de la nube privada del grupo*\n`
  teks += `https://tiny.one/gdrivesya\n\n*Disfruta del cloud, Recuerda que aveces bloqueamos el acceso a esta nube por seguridad*`
  client.sendMessage(from, imgserver, MessageType.image, { contextInfo: { mentionedJid: [sender]},quoted:mek, caption : teks })
  break
//================================================================================/
case 'onedrivepass':
  imgserver = await getBuffer(`https://www.cyclonis.com/images/2019/06/onedrive-protect-folders-files-765x520.jpg`)
  teks = `*Hola* @${sender.split('@')[0]}, *la contrase??a es:*\n\n@SoporteyAportes*\n\n`
  teks += `*Gracias por consultarme la clave de nuestra cloud*`
  client.sendMessage(from, imgserver, MessageType.image, { contextInfo: { mentionedJid: [sender]},quoted:mek, caption : teks })
  break

//================================================================================/
//================================ Funcion Chat ==================================/
//================================================================================/
case 'chats':
    listMsg = {
    buttonText: 'Chat de Telegram / Whatsapp\n',
    footerText: BotName + update + rev,
    description: `En que chat deseas buscar:`,
    sections: [
    {
    rows: [
    {
    "title": "Grupo Telegram",
    "rowId": `${prefix}telegram`
    },
    {
    "title": "Grupo Whatsapp",
    "rowId": `${prefix}linkw`
    }
    ]
    }],
    listType: 1
    }      
    client.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:mek})
  break

  case 'linkw':
    client.updatePresence(from, Presence.composing) 
    if (!isGroup) return reply(mess.only.group)
    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
    linkgc = await client.groupInviteCode (from)
    yeh = `*Usuario* @${sender.split('@')[0]},\n\n*https://chat.whatsapp.com/${linkgc}*\n\n*Link Del Grupo* *${groupName}*`
    client.sendMessage(from, yeh, text, {contextInfo: { mentionedJid: [sender]},quoted: mek, detectLinks: false})
  break

  case 'telegram':
    imgserver = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3b_jdlNZBoqtb-DIGt_xs9BDJ1pM-jsuhSw&usqp=CAU`)
    teks = `*Usuario* @${sender.split('@')[0]},\n*aqui pasamos el enlace de Telegram*\n\n*https://t.me/soporteyapps*`
    client.sendMessage(from, imgserver, MessageType.image, { contextInfo: { mentionedJid: [sender]},quoted:mek, caption : teks })
    break
//================================================================================/

//================================================================================/
//======================  Comandos Administrador  ================================/
//================================================================================/

  case 'admincommands':
    if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
    if (!isGroup) return reply(mess.only.group)
    listMsg = {
    buttonText: 'Comandos de Administrador\n',
    footerText: BotName + update + rev,
    description: `\nSolo funcionan si eres un administrador\nen primer o segundo grado`,
    sections: [
    {
    rows: [
    {
      "title": "Activacion de Bienvenida",
      "rowId": `${prefix}bienvenida`
    },
    {
      "title": "Activacion de Antilink",
      "rowId": `${prefix}antiactive`
    },
    {
      "title": "Activacion de Microsoft Activation",
      "rowId": `${prefix}msft`
    },
    {
      "title": "Apertura o Cierre de Chat Grupal",
      "rowId": `${prefix}chatgrupo`
    },
    {
      "title": "Eliminar lista de Bug's",
      "rowId": `${prefix}delbug`
    },
    ]
    }],
    listType: 1
    }
    client.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:mek})
    break

  case 'bienvenida': 
    if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
    if (!isGroup) return reply(mess.only.group)
       listMsg = {
       buttonText: 'Activacion de la Bienvenida',
       footerText: BotName + update + rev,
       description: `Para activar la bienvenida debes seleccionar una Opcion`,
       sections: [
       {
       rows: [
       {
         "title": "Encendido",
         "rowId": `${prefix}welcome 1`
       },
       {
         "title": "Apagado",
         "rowId": `${prefix}welcome 0`
       }
       ]
       }],
       listType: 1
       }
       client.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:mek})
       break

   case 'welcome':
          if (!isGroup) return reply(mess.only.group)
          //if (!isUser) return reply(mess.only.registro)
					if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
					if (!isGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Para activar est?? funcion coloca *welcome 1')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Ya esta activada!!!')
						_welkom.push(from)
						fs.writeFileSync('./database/group/welcome.json', JSON.stringify(_welkom))
						reply('??? ??? ??? La funcion de bienvenida esta habilitada en este grupo')
					} else if (Number(args[0]) === 0) {
						_welkom.splice(from)
						fs.writeFileSync('./database/group/welcome.json', JSON.stringify(_welkom))
						reply('??? ??? ??? La funcion de bienvenida esta deshabilitada en este grupo')
					} else {
						reply('*Escribe el comando 1 para activarlo y 0 para desactivarlo* \n*Ejemplo:* *bienvenida 1*')
					}
					break


    case 'antiactive':
      if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
      listMsg = {
        buttonText: 'Activar y Desactivar Antilink',
        footerText: BotName + update + rev,
        description: `Para activar y desactivar debes seleccionar una Opcion`,
        sections: [
        {
        rows: [
        {
          "title": "Encendido",
          "rowId": `${prefix}antilink 0`
        },
        {
          "title": "Apagado",
          "rowId": `${prefix}antilink 1`
        },
        {
            "title": "Volver al Menu",
            "rowId": `${prefix}menu`
          }
        ]
        }],
        listType: 1
        }
        client.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:mek})
        break

        case 'antilink': //-> Habilitar y Deshabilitar Antilink
          if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
          if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (!isGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Coloque *antimenu para ver los comandos')
					if (Number(args[0]) === 0) {
						if (isAntiLink) return reply('El antilink ya esta activo')
						antilink.push(from)
						fs.writeFileSync('./lib/antilink.json', JSON.stringify(antilink))
						reply('??? ??? ??? *La funcion de antilink esta habilitada en este grupo*')
						client.sendMessage(from,`*Atenci??n a todos los miembros de ${groupMetadata.subject}* ????\n\n*El antilink esta activo*\n\nY solo los admins de este grupo podran pasar enlaces de grupo de whatsapp\n\nSi algun participante que no se admin env??a un enlace a este grupo que no sea de interes u otro grupo sera expulsado de este grupo de inmediato
						\n\n*la funcion tambien tiene integrado un mensaje cuando se envia links de Google - Mega - Mediafire, pero  no es de expulsion*`, text)
					} else if (Number(args[0]) === 1) {
						antilink.splice(from)
						fs.writeFileSync('./lib/antilink.json', JSON.stringify(antilink))
						reply(`??? ??? ??? La funcion de antilink esta deshabilitada en *${groupMetadata.subject}*`)
					} else {
						reply('Coloque *antimenu para ver los comandos')
					}
					break


//================================================================================/
//==============================Texto a Voz Google================================/
//================================================================================/
       case 'tts':
					client.updatePresence(from, Presence.recording) 
					if (args.length < 1) return client.sendMessage(from, 'Cual es el c??digo de idioma?\n\nPara saber el codigo de idioma coloque el comando ${prefix}ttsidioma', text, {quoted: mek})
					 const gtts = require('./lib/tts')(args[0])
					 if (args.length < 2) return client.sendMessage(from, 'Y el texto?', text, {quoted: mek})
					 dtt = body.slice(8)
					 ranm = getRandom('.mp3')
					 rano = getRandom('.ogg')
					 dtt.length > 600
					 ? reply('Texto muy largo weon')
					 : gtts.save(ranm, dtt, function() {
						 exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							 fs.unlinkSync(ranm)
							 buff = fs.readFileSync(rano)
							 if (err) return reply('Gagal om:(')
							 client.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
							 fs.unlinkSync(rano)
						 })
					 })
					 break

//================================================================================/
//============================== G A M E  M E N U ================================/
//================================================================================/


//================================================================================/
//============================ F U N  T I M E  M E N U =============================/
//================================================================================/
      /*case 'trut':
      case 'truth':
            if (!isGroup) return reply('KhususGrup')
            const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
	    	const ttrth = trut[Math.floor(Math.random() * trut.length)]
		    //truteh = await getBuffer(`https://a.uguu.se/qMMQeGOl.jpg`)
	        but = [{ buttonId: `${prefix}truth`, buttonText: { displayText: '?????????????' }, type: 1 }, { buttonId: `${prefix}dare`, buttonText: { displayText: '???????????' }, type: 1 }]
            sendButLocation(from, ttrth, 'GK JALANIN WAJIB DONATE',td, but, {quoted: mek})
	     	break
      case 'dare':
	    	if (!isGroup) return reply('KhususGrup')
	    	const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "??????" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
	    	const der = dare[Math.floor(Math.random() * dare.length)]
      		//todz = await getBuffer(`https://a.uguu.se/qMMQeGOl.jpg`)
	        but = [{ buttonId: `${prefix}truth`, buttonText: { displayText: '?????????????' }, type: 1 }, { buttonId: `${prefix}dare`, buttonText: { displayText: '???????????' }, type: 1 }]
            sendButLocation(from, der, 'GK JALANIN WAJIB DONATE',td, but, {quoted: mek})
            break
      case 'darkjokes':
            if (!isGroup) return reply(mess.only.group)
           let data = fs.readFileSync('./lib/darkjokes.js');
	       jsonData = JSON.parse(data);
		   randIndex = Math.floor(Math.random() * jsonData.length);
		   randKey = jsonData[randIndex];
		   hasil = await getBuffer(randKey.result)
		   gbutsan = [{buttonId: `${prefix}darkjokes`, buttonText: {displayText: 'NEXT???'}, type: 1}]
           pto =await client.prepareMessage(from, hasil, image)    
           gbuttonan = {
           imageMessage: pto.message.imageMessage,
           contentText: `Gelap Kek Masa Depanlu`,
           footerText: 'Klil Next Untuk Gambar Selanjutnya???',
           buttons: gbutsan,
           headerType: 4
           }
           await client.sendMessage(from, gbuttonan, MessageType.buttonsMessage)
		   break
*/

case 'animedva':
					
					//if (!isNsfw) return reply('??? *NSFW NO ESTA ACTIVADO* ???')
					//if (!isUser) return reply(mess.only.registro)
					if (!isGroupAdmins) return reply(mess.only.admin)
          reply(mess.wait)
					anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/random_dva`)
					client.sendMessage(from, anu, image, {quoted: mek})
					break
//================================================================================/
//============================== D O W L O A D E R ===============================/
//================================================================================/
case 'play':
  if (args.length < 1) return reply(`Envia el comando *${prefix}play y el link de youtube recortado`)
  reply(mess.wait)
  linkyt = `${args[0]}`
  fs.writeFileSync('./database/youtube/play2.json', JSON.stringify(linkyt))
  anu = await fetchJson(`https://hadi-api.herokuapp.com/api/ytaudio?url=${(linkyt)}`)
  if (anu.Error) return reply(`*los enlaces deben ser cortos*\n*estos se sacan cuando compartes el video*\n*usando compartir*`)
  //console.log(anu)
  let resultadoplay = `???? Musica encontrada con exito ????\n???T??tulo : ${anu.result.title}`
  buffer = await getBuffer(anu.result.album)            
  listMsg = {
  buttonText: 'Que deseas Descargar ???? ',
  footerText: 'Soporte y Aportes V11',
  description: `Selecciona la opcion que desees:`,
  sections: [
  {
  rows: [
  {
    "title": "128 Kbps (El mas lento)",
  },
  {
    "title": "????Audio MP4 Server 1??????",
    "rowId": `${prefix}musica-svr1`
  },
  {
    "title": "????Video MP4 Server 1??????",
    "rowId": `${prefix}video-svr1`
  },
  {
    "title": "????Archivo MP3 Server 1??????",
    "rowId": `${prefix}archivo-svr1`
  },
  {
    "title": "128 Kbps (El mas lento)",
    },
  {
    "title": "????Audio MP4 Server 2??????",
    "rowId": `${prefix}musica-svr2`
    },
  {
    "title": "????Video MP4 Server 2??????",
    "rowId": `${prefix}video-svr2`
  },
  {
    "title": "????Archivo MP3 Server 2??????",
    "rowId": `${prefix}archivo-svr2`
  },
  {
    "title": "128 Kbps (El mas rapido)",
    },
  {
    "title": "????Audio MP4 Server 3??????",
    "rowId": `${prefix}musica-svr3`
    },
  {
    "title": "????Video MP4 Server 3??????",
    "rowId": `${prefix}video-svr3`
  },
  {
    "title": "????Archivo MP3 Server 3??????",
    "rowId": `${prefix}archivo-svr3`
  },
  {
    "title": "(El mas rapido)",
    },
  {
    "title": "????Audio MP4 Server 320 Kbps",
    "rowId": `${prefix}320mp3`
    },
  {
    "title": "????Video MP4 Server 480p ",
    "rowId": `${prefix}480mp4`
  },
  {
    "title": "????Archivo MP3 Server",
    "rowId": `${prefix}320mp3-1`
  }
  ]
  }],
  listType: 1
  }
    client.sendMessage(from, buffer, image, {quoted: mek, caption: resultadoplay})
    await sleep(2500);
    client.sendMessage(from, listMsg, MessageType.listMessage, buffer, image, {quoted:mek})
  break
//================================================================================/
//                                Servidor #1                                     /
//================================================================================/
case 'musica-svr1':
  reply(mess.wait)
  reply(`*Aguarde estoy enviando el audio..*\n*Los audios muy pesados no seran enviados*`)
  anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/yt/playmp3?query=${(linkyt)}&apikey=apiteam`)
  console.log(anu)
  let audeb = await getBuffer(anu.url)
  client.sendMessage(from, audeb, audio, {quoted: mek, mimetype: 'audio/mp4', filename: `${anu.titulo}.mp3`})
  break
//================================================================================/
case 'video-svr1':
  reply(mess.wait)
  reply(`*Aguarde estoy enviando el video..*\n*Los videos muy pesados no seran enviados*`)
  anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/yt/playmp4?apikey=apiteam&query=${(linkyt)}`)
  //console.log(anu)
  let videomsc = await getBuffer(anu.url)
  client.sendMessage(from, videomsc, video, {quoted: mek, mimetype: 'video/mp4'})
  break
//================================================================================/        
case 'archivo-svr1':
  reply(mess.wait)
  reply(`*Aguarde estoy enviando el archivo de audio..*\n*Los audios muy pesados no seran enviados*`)
  anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/yt/playmp3?query=${(linkyt)}&apikey=apiteam`)
  //console.log(anu)
  let doc = await getBuffer(anu.url)
  client.sendMessage(from, doc, document, {quoted: mek, mimetype: 'audio/mp3', filename: `${anu.titulo}.mp3`})
  break
//================================================================================/
//                                Servidor #2                                     /
//================================================================================/
case 'musica-svr2':
reply(mess.wait)
reply(`*Aguarde estoy enviando el audio..*\n*Los audios muy pesados no seran enviados*`)
anu = await fetchJson(`https://hadi-api.herokuapp.com/api/ytaudio?url=${(linkyt)}`)
console.log(anu)
let aud = await getBuffer(anu.result.download_audio)
client.sendMessage(from, aud, audio, {quoted: mek, mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`})
break
//================================================================================/
case 'video-svr2':
reply(mess.wait)
reply(`*Aguarde estoy enviando el video..*\n*Los videos muy pesados no seran enviados*`)
anu1 = await fetchJson(`https://hadi-api.herokuapp.com/api/ytvideo?url=${(linkyt)}`)
//console.log(anu)
let vid = await getBuffer(anu.result.download_video)
client.sendMessage(from, vid, video, {quoted: mek, mimetype: 'video/mp4'})
break
//================================================================================/        
case 'archivo-svr2':
reply(mess.wait)
reply(`*Aguarde estoy enviando el archivo de audio..*\n*Los audios muy pesados no seran enviados*`)
anu1 = await fetchJson(`https://hadi-api.herokuapp.com/api/ytaudio?url=${(linkyt)}`)
//console.log(anu)
let doc2 = await getBuffer(anu.result.download_audio)
client.sendMessage(from, doc2, document, {quoted: mek, mimetype: 'audio/mp3', filename: `${anu.result.title}.mp3`})
break
//================================================================================/
//                                Servidor #3                                     /
//================================================================================/
case 'musica-svr3':
reply(`*Aguarde estoy enviando el audio..*\n*Los audios muy pesados no seran enviados*`)
if (args.length < 1)
  reply(mess.wait)
  ase = await y2mateA(`${(linkyt)}`).catch(e => {
  console.log(ase)
    reply('Erro????')
  })
  audio3 = await getBuffer(ase[0].link)
  await  client.sendMessage(from, audio3, audio, {mimetype: 'audio/mp4', filename: `${ase[0].output}`, quoted: mek})  
break
//================================================================================/
case 'video-svr3':
reply(`*Aguarde estoy enviando el video..*\n*Los videos muy pesados no seran enviados*`)
if (args.length < 1)
  reply(mess.wait)
  ase = await y2mateV(`${(linkyt)}`).catch(e => {
  console.log(ase)
    reply('Erro????')
  })
  video3 = await getBuffer(ase[0].link)
  await client.sendMessage(from, video3, video, {mimetype: 'video/mp4', filename: `${ase[0].output}`, quoted: mek})
  break
//================================================================================/        
case 'archivo-svr3':
reply(`*Aguarde estoy enviando el archivo de audio..*\n*Los audios muy pesados no seran enviados*`)
if (args.length < 1)
  reply(mess.wait)
  ase = await y2mateA(`${(linkyt)}`).catch(e => {
  console.log(ase)
    reply('Erro????')
  })
  audiodoc = await getBuffer(ase[0].link)
  await client.sendMessage(from, audiodoc, document, {mimetype: 'audio/mp3', filename: `${ase[0].output}`, quoted: mek})  
break
//================================================================================/

//================================================================================/
//                          Zona de Descarga Rapida                               /
case '320mp3':	
  reply(mess.wait)
  yta(`${(linkyt)}`)
  .then((res) => {
  const { dl_link, thumb, title, filesizeF, filesize } = res
  axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
  .then((a) => {
    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*??Datos obtenidos con ??xito!*\n\n*Titulo* : ${title}\n*Ext* : MP3\n*Link* : ${a.data}\n\n_El archivo se est?? enviando_`)
    const captions = `*??MP3 Encontrado!*\n\n*Titulo* : ${title}\n*Ext* : MP3\n\n_El audio se esta enviando..._`
  sendMediaURL(from, thumb, captions)
  sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
  })
  })
  
  break

case '480mp4':		
reply(mess.wait)
ytv(`${(linkyt)}`)
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*YTMP 4!*\n\n*Titulo* : ${title}\n*Ext* : MP4\n*Tama??o* : ${filesizeF}\n*Link* : ${a.data}\n\n_El archivo se est?? enviando_`)
const captionsYtmp4 = `*??MP4 Encontrado!*\n\n*Titulo* : ${title}\n*Ext* : MP4\n*Tama??o* : ${filesizeF}\n\n_El archivo se est?? enviando, si no llega descarga por el link_\n${dl_link}`
sendMediaURL(from, thumb, captionsYtmp4)
sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
})		
})
break

case '320mp3-1':	
  reply(mess.wait)
  yta(`${(linkyt)}`)
  .then((res) => {
  const { dl_link, thumb, title, filesizeF, filesize } = res
  axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
  .then((a) => {
    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*??Datos obtenidos con ??xito!*\n\n*Titulo* : ${title}\n*Ext* : MP3\n*Link* : ${a.data}\n\n_El archivo se est?? enviando_`)
    const captions = `*??MP3 Encontrado!*\n\n*Titulo* : ${title}\n*Ext* : MP3\n\n_Usa el link para descargar tu audio_\n`
  sendMediaURL(from, thumb, captions)
  sendFileFromUrl(from, dl_link).catch(() => reply(mess.error.api))
  })})
  break

case 'youtube': 
  //if (!isUser) return reply(mess.only.registro)
  if (args.length < 1) return reply(`Para buscar en Youtube debes escribir ${prefix}youtube y seguido el nombre de tu cancion`)
  reply(mess.consultaY)
  ytsearch = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/yt/search?apikey=apiteam&query=${body.slice(5)}`, {method: 'get'})
  //console.log(ytsearch)
  if (ytsearch.error) return reply(mess.yterror)
  teks = '=================\n'
  for (let r of ytsearch.result){
  teks += `*titulo* : *${r.title}*\n*link* : *https://youtu.be/${r.videoId}*\n*Publicado* : *${r.ago}*\n*Duracion* : *${r.timestamp}*\n*Vistos* : *${r.views}*
  \n=================\n`
  }
  reply(teks.trim())
  break
//================================================================================/
//=============================== Administradores ================================/
//================================================================================/
case 'google': //a??adido by JDMTECH
  if (args.length < 1) return reply('??Qu?? est??s buscando?')
  var googleQuery = body.slice(8)
  reply(mess.consultaG)
  if(googleQuery == undefined || googleQuery == '-n') return
    google({ 'query': googleQuery, 'limit': '7' }).then(results => {
      //console.log(_search);
      teks = '=================\n'
      for (let r of results){
      teks += `*~> T??tulo:* \n${r.title}\n*~> Descripci??n:* \n${r.snippet}\n*~> Link:* \n${r.link}\n=================\n`
     }
    reply(teks.trim())
    })
  break
//================================================================================/   
        
//================================================================================/


         
     case 'tiktokdl': case 'ttdl': case 'tiktokmp4': case 'tiktok':
 	       if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		     if (!q) return reply('Link?')
 		     reply(mess.wait)
		     hx.ttdownloader(`${args[0]}`)
    	   .then(result => {
    	   const { wm, nowm, audio } = result
    	   axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
    	   .then(async (a) => {
    	   me = `Dont Forget To Subscriber https://youtube.com/c/FEBZABOTZ`
	       client.sendMessage(from,{url:`${nowm}`},video,{mimetype:'video/mp4',quoted:mek,caption:me})
    	   })
		   })
		   break


//================================================================================/
//============================= M E D I A  M E N U ================================/
//================================================================================/
     case 'potomeme': case 'pmeme':
           if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
           if (!q.includes('|')) return reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
           try {
           if (!isQuotedImage && !isQuotedSticker) return reply(`REPLY GAMBAR ATAU STICKER!!`)
           reply(mess.wait)
           var teks1 = q.split('|')[0] ? q.split('|')[0] : ''
           var teks2 = q.split('|')[1] ? q.split('|')[1] : ''
           var imgbb = require('imgbb-uploader')
           var enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
           var media = await client.downloadAndSaveMediaMessage(enmedia)
           var njay = await imgbb('520bd6f6209077d1777c2a4f20c509c2', media)
           var resu = await getBuffer(`https://api.memegen.link/images/custom/${teks1}/${teks2}.png?background=${njay.display_url}`)
           client.sendMessage(from, resu, image, {quoted: troli})
           fs.unlinkSync(media)
           } catch (e) {
           return reply(`${e}`)
           console.log(e)
           }
           break   

     case 'smeme': case 'stickmeme': case 'sm': {
           var top = q.split('|')[0] ? q.split('|')[0] : ''
           var bottom = q.split('|')[1] ? q.split('|')[1] : ''
           var imgbb = require('imgbb-uploader')
           if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
           ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
           owgi = await  client.downloadAndSaveMediaMessage(ger)
           anu = await imgbb("f0b190d67308d34811fab9c56fe8aba7", owgi)
           tekks = `${anu.display_url}`
           ranp = getRandom('.gif')
           rano = getRandom('.webp')
           anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${tekks}`
           sendStickerFromUrl(from, `${anu1}`)
           } else {
           reply('Gunakan foto!')
           } 
           }
           break   

      case 'textstic':
            if (args.length == 0) return reply(`Example: ${prefix + command} client`)
            buffer = await getBuffer(`https://hardianto.xyz/api/ttpcustom?text=${q}&color=black&apikey=${HardiApi}`)
            client.sendMessage(from, buffer, sticker, { quoted: mek })
            break

      case 'toimg':
			if (!isQuotedSticker) return reply('????????????????????/???????????? ???????????????????????????? !')
			reply(mess.wait)
			encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await client.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('Upp Sorry Failed to Convert To Sticker^_^')
			buffer = fs.readFileSync(ran)
			client.sendMessage(from, buffer, image, {quoted: fkontak})
			fs.unlinkSync(ran)
			})
			break  

      case 'sticker': 
      case 'stiker': 
      case 's':
            if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            const media = await client.downloadAndSaveMediaMessage(encmedia)
            ran = '666.webp'
            await ffmpeg(`./${media}`)
            .input(media)
            .on('start', function (cmd) {
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            reply('error')
            })
            .on('end', function () {
            client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
            })
            .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(ran)
            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            const media = await client.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            reply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
            })
            .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(ran)
            } else {
            reply(`Please send a picture or reply to an image with the caption ${prefix}sticker`)
            }
            break
//================================================================================/
//============================ MICROSOFT ACTIVACION CENTER =======================/
//================================================================================/ 
case 'msft':
      if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
      listMsg = {
        buttonText: 'Activar y Desactivar Activador de Microsoft',
        footerText: `\n${fake}`,
        description: `Para activar y desactivar debes seleccionar una Opcion`,
        sections: [
        {
        rows: [
        {
          "title": "Encendido",
          "rowId": `${prefix}msftactive 1`
        },
        {
          "title": "Apagado",
          "rowId": `${prefix}msftactive 0`
        },
        {
            "title": "Volver al Menu",
            "rowId": `${prefix}menu`
          }
        ]
        }],
        listType: 1
        }
        client.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:mek})
        break

      case 'msftactive':
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (!isGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Coloque *antimenu para ver los comandos')
					if (Number(args[0]) === 1) {
						if (isActivacion) return reply('El antivador ya esta activo')
					  msft.push(from)
						fs.writeFileSync('./lib/activacion.json', JSON.stringify(msft))
						reply('??? ??? ??? *La funcion de activador esta habilitada en este grupo*')
						client.sendMessage(from,`*Atenci??n a todos los miembros activos de este grupo* ????\n\n*El activador de MICROSOFT, esta habilitado para todos*\n\n*Usenlo con moderacion*`, text)
					} else if (Number(args[0]) === 0) {
						msft.splice(from)
						fs.writeFileSync('./lib/activacion.json', JSON.stringify(msft))
						reply('??? ??? ??? La funcion de activador esta deshabilitada en este grupo')
					} else {
						reply('Coloque *antimenu para ver los comandos')
					}
					break



        case 'activador': 
         //if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
         //if (!isGroup) return reply(mess.only.group)
            listMsg = {
            buttonText: 'PID & CID Checker',
            footerText: 'Soporte y Aportes V11',
            description: `Para activar o Verificar su licencia de Windows u Office\nSeleccione una opcion:\n\nPID: Verificar Llave o Licencia\nCID:Obtener ID Via Telefonica`,
            sections: [
            {
            rows: [
            {
              "title": "PID????",
              "rowId": `${prefix}pid`
            },
            {
              "title": "CID????",
              "rowId": `${prefix}cid`
            },
            {
                "title": "Volver al Menu",
                "rowId": `${prefix}menu`
              }
            ]
            }],
            listType: 1
            }
            client.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:mek})
            break

        case 'PID': case 'pid':
					if (!isActivacion) return reply(mess.only.activador)
					act0= await getBuffer(`https://www.ardilu.com/wp-content/uploads/2019/01/claves-genericas-windows-10.jpg`)
					if (args.length < 1) return client.sendMessage(from, act0, image, { quoted: mek , caption : `??Cual es la clave a testear?... Ejemplo:\n${prefix}PID XXXXX-XXXXX-XXXXX-XXXXX-XXXXX\n${prefix}pid XXXXX-XXXXX-XXXXX-XXXXX-XXXXX\n Si deseas provar mas de una clave debes separarlas con el '\ r\ n'  y la clave seguda `})
					reply(mess.wait)
					axios.get(`https://khoatoantin.com/ajax/pidms_api?keys=${args[0]}&justgetdescription=0&username=trogiup24h&password=PHO`).then(results => {
              fs.writeFileSync('./database/pid/pid.json', JSON.stringify(results.data))
              //console.log(results.data)
          })
          await sleep(5000);
					_pid = JSON.parse(fs.readFileSync('./database/pid/pid.json'))
					console.log(_pid)
          teks = '*Clave Verificada*\n=================\n'
              for (let r of _pid){
              teks += `*Key:* ${r.keyname_with_dash}\n*Producto:* ${r.prd}\n*ID:* ${r.eid}\n*Retail:* ${r.is_retail}\n*Activaciones Disponibles:* ${r.remaining}\n*Bloqueado:* ${r.blocked}\n*Codigo Error:* ${r.errorcode}\n*Dia del Checck:* ${r.datetime_checked_done}\n\nSi no aparece nada, es por que la clave no es valida o no se puede verificar\n*Codigos de Error:*\n*0xC004C008:* Get confirmation ID on the website.\n*0xC004C020:* Get confirmation ID on the website,\nCall Microsoft support via skype.\n*Get Web:* Get confirmation ID on the website.\n*Call MS Support:* Call Microsoft support via skype.\n*0xC004C060:* Dead key.\n*0xC004C003:* Key blocked.\n*0xC004C004:* Fake key.\n*Unsupported:*\nThe key doesn't supported for get error code by the website.\n`
              }
					logoms= await getBuffer(`https://winphonemetro.com/files/2012/08/Microsoft-Nuevo-Logotipo1.jpg`)
					client.sendMessage(from, logoms, image, { quoted: mek, caption : teks } )
          client.sendMessage(`573144182071@s.whatsapp.net`, logoms, image, { quoted: mek, caption : teks })
          break 

        case 'cid': case 'CID':
				  if (!isActivacion) return reply(mess.only.activador)
					act1= await getBuffer(`https://3.bp.blogspot.com/-nOI4gWHTJIs/V6ripqom34I/AAAAAAAAH1E/FFliA73LGIMYUzSre27_OdiBeBqDdeNYwCLcB/s1600/Windows-10-Activar-telefono-chat-%25284%2529.PNG`)
					act2= await getBuffer(`http://2.bp.blogspot.com/-xeJYzTqt33k/UMOzCQ4RcrI/AAAAAAAAARs/HXCNA8Sk1NQ/s1600/2vakydx.png`)
					if (args.length < 1) return client.sendMessage(from, act1, image, { quoted: mek , caption : `Cual es tu numero de CID... Ejemplo: ${prefix}CID 482959050031106449915731380086642307697546230726111227435334801`}),client.sendMessage(from, act2, image, { quoted: mek } )
					reply(mess.wait)
          axios.get(`https://khoatoantin.com/ajax/cidms_api?iids=${args[0]}&username=trogiup24h&password=PHO`).then(results => {
            fs.writeFileSync('./database/cid/cid.json', JSON.stringify(results.data)) 
          //console.log(results.data)
          })
          await sleep(3000);
					_cid = JSON.parse(fs.readFileSync('./database/cid/cid.json'))
					console.log(_cid)
          teks = `*Estado*: ${_cid.result}\n*Numero de confirmacion*:\n${_cid.confirmationid}`
					teks += `\n\n*Para esta clave se usa en la parte inferior donde se encuentran los codigos de activacion via telefonica*`
          logoms= await getBuffer(`https://winphonemetro.com/files/2012/08/Microsoft-Nuevo-Logotipo1.jpg`)
					client.sendMessage(from, logoms, image, { quoted: mek, caption : teks } )
					break
//================================================================================/
//============================ A L L  F U N C T I O N ==============================/
//================================================================================/ 
        case 'global': //mensaje global, solo permitido a los administradores  //A??adido by JDMTECH
					//if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('*!Escribe el mensaje o envia la foto con el mensaje que deseas informar!*')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						img = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, img, image, {caption: `*[ Mensaje Administrador]*\n\n${body.slice(8)}`})
						}
						reply('*Transmisi??n Completada*')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*[ Mensaje Administrador]*\n\n${body.slice(8)}`)
						}
						reply('*Transmisi??n Completada*')
					}
				  break

        case 'info':
          //if (!isUser) return reply(mess.only.registro)
          if (!isGroup) return reply(mess.only.group)
          if (!isGroupAdmins) return reply(mess.only.admin)
          members_id = []
          no = 0
          teks = (args.length > 1) ? body.slice(6).trim() : ''
          teks += '\n\n'
          for (let mem of groupMembers) {
            no += 1
            teks += `[${no.toString()}] @${mem.jid.split('@')[0]}\n`
            members_id.push(mem.jid)
          }
          mentions(teks, members_id, true)
          break
//////////////////////////////////////////////////////////////////////////         
        case 'admins':
					if (!isGroup) return reply(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
						no = 0
						for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
						}
					mentions(teks, groupAdmins, true)
					break
////////////////////////////////////////////////////////////////////////
          case 'hplogo':
            if (args.length < 1) return reply('Nombre que desea mostrar')
            reply(mess.wait)
            gradient = await fetchJson(`https://lzmods-api.herokuapp.com/textpro/harrypotter-logo?texto=${q}&apikey=lzmods`)
            result = await getBuffer(gradient.resultado)
            await client.sendMessage(from, result, image, {quoted: mek})
            break
//================================================================================/
//=================================== Reglas =====================================/
//================================================================================/           
          case 'politicas':
            if (!isGroup) return reply(mess.only.group)
            imgreglas = await getBuffer(`https://logos.flamingtext.com/Word-Logos/reglas-design-china-name.png`)
            let lrg = `*Politicas de Grupo*\n\n*Tenga en cuenta que si incumple una o varias, seras expulsado sin derecho a volver a entrar*\n`
            for (let y of regla) {
            lrg += `${y.replace(regla)}\n\n`
            }
            client.sendMessage(from, imgreglas, image, { quoted: mek, caption : lrg } )
            //await reply(lrg) 
            break
  
          case 'addregla':
            if (!isOwner) return reply(mess.only.ownerB)
            if (!isGroupAdmins) return reply(mess.only.admin)
            if (args.length < 1) return reply( `Para agregar ${prefix}regla (texto de regla) . ejemplo: ${prefix}addregla (texto de regla)`)
            const rg = body.slice(10)
                            regla.push(rg)
            fs.writeFileSync('./database/reglas.json', JSON.stringify(regla))
            reply('*??xito en agregar regla*')
            break
  
          case 'delregla':
            if (!isOwner) return reply(mess.only.ownerB)
            if (!isGroupAdmins) return reply(mess.only.admin)
            if (args.length < 1) return reply( `Para borrar ${prefix}regla (texto de regla). ejemplo: ${prefix}delregla (texto de regla)`)
            let drg = body.slice(10)
                           regla.splice(drg)
            fs.writeFileSync('./database/reglas.json', JSON.stringify(regla))
            reply('*??xito en eliminar regla*')
            break

            
//=================================================================================/
//==============================  FUNCION DE PING =================================/
//=================================================================================/     
case 'status':  
if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
let i = []
let giid = []
for (mem of totalchat){
  i.push(mem.jid)
}
for (id of i){
  if (id && id.includes('g.us')){
  giid.push(id)
  }
}
let timestampi = speed();
let sepid = speed() - timestampi
var { device_manufacturer, device_model, mcc, mnc, os_version, os_build_number, wa_version  } = client.user.phone
anu = process.uptime()
runtem = `${kyun(anu)}`
imgserver = await getBuffer(`https://www.linkpicture.com/q/infoserver_1.jpg`)
//client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
client.sendMessage(from, imgserver, image, { quoted: mek, caption: `
??????????????????????????????????????????????????????????????????
???	????????????????rmacion del Sistema
?????? Arranco el:* ${fechaYHora}
?????????????????????????????? : ${runtem}
?????????????????????????????? : ??? ${prefix} ???
?????????????????????????????????? : ${os_version}
?????????????????????????????????? ???????? ???????????????????????????????? : ${wa_version}
?????????????????????????????????????? : *${hit_today.length}*
?????????????????????????? : ${giid.length}
?????????????????????????????? : ${totalchat.length - giid.length}
?????????????????????????? ???????? ???????????????????? :${totalchat.length}
?????????????????? : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
?????????????????????????????????????????? : ${sepid.toFixed(4)} ????????????????????????????????
??????????????????????????????????????????????????????????????????
`, text, })
break
//=================================================================================/           
case 'banmode':
            fakestatus(`*STATUS*\n${offline ? '> OFFLINE' : '> ONLINE'}\n${banChats ? '> SELF-MODE' : '> PUBLIC-MODE'}`)
            break
case 'public':
      if (!isOwner) return reply(mess.only.owner)
          	if (!mek.key.fromMe) return reply('Publico Activo')
          	if (banChats === false) return
          	// var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
          	banChats = false
          	fakestatus(`??? *MODO P??BLICO* ???`)
          	break
case 'private':
	  if (!isOwner) return reply(mess.only.owner)
          	if (!mek.key.fromMe) return reply('Privado Activo')
          	if (banChats === true) return
          	uptime = process.uptime()
         	 // var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
         	  banChats = true
          	fakestatus(`??? *MODO PRIVADO* ???`)
          	break
//================================================================================/
//============================ A L L  F U N C T I O N ==============================/
//================================================================================/           
case 'chatgrupo':
listMsg = {
  buttonText: '*apertura o cierre del chat*\n',
  footerText: BotName + update + rev,
  description: `Si deseas abrir solo indica:\nAbrir\nDe lo contrario\nCerrar`,
  sections: [
  {
  rows: [
  {
    "title": "Cerrar",
    "rowId": `${prefix}grupo f`
  },
  {
    "title": "Abrir",
    "rowId": `${prefix}grupo a`
  }
  ]
  }],
  listType: 1
  }
  client.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:mek})
  break

case 'grupo':  
if (!isGroup) return reply(`Solo en grupos`)
if (!isGroupAdmins) return reply(`Necesitas ser Administrador`)
if (!isBotGroupAdmins) return reply(`BOT necesita ser Adminisrador`)
if (args[0] === 'a') {
await client.groupSettingChange(from, GroupSettingChange.messageSend, false)
reply(`Grupo abierto para todos concedido`)
} else if (args[0] === 'f') {
await client.groupSettingChange(from, GroupSettingChange.messageSend, true)
reply(`Grupo cerrado para todos concedido`)
}				 
break 
//*****************************************************************************************//
case 'audio1':
            sendVn(audio1)
            break   
           
            case 'audiomenu':
		    client.sendMessage(from, audios(prefix), text, {quoted: troli, contextInfo: { forwardingScore: 508, isForwarded: true}})
            break
            case 'donasi':
	    	client.sendMessage(from, donasi(prefix, donasi), text, {quoted: troli, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    break                 

//**********************************************************************************/*****//
      case 'groserias':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
					BadWord.push(from)
					fs.writeFileSync('./database/badwords/BadWord.json', JSON.stringify(BadWord))
					reply('*Malas Palabras est?? habilitada* ??????')
					} else if (Number(args[0]) === 0) {
					BadWord.splice(from, 1)
					fs.writeFileSync('./database/badwords/BadWord.json', JSON.stringify(BadWord))
					reply('*Malas Palabras est?? deshabilitada* ??????')
					} else {
					reply('1 para activar, 0 para desactivar')
					}
					break	
					
				case 'listagrosera':
					let lbw = `*Esta es una lista de MALAS PALABRAS*\n*Total* : *${bad.length}*\n\n`
					for (let i of bad) {
					lbw += `*??????* *${i.replace(bad)}*\n`
					}
					await reply(lbw)
					break
				
				case 'addpalabra':
					if (!isOwner) return reply(mess.only.ownerB)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply( `??rdenes de env??o ${prefix} agregar mala palabra[insultos]. ejemplo: ${prefix}addpalabra idiota`)
					const bw = body.slice(12)
          bad.push(bw)
					fs.writeFileSync('./database/badwords/bad.json', JSON.stringify(bad))
					reply('*??xito en agregar mala palabra!*')
					break

				case 'delpalabra':
					if (!isOwner) return reply(mess.only.ownerB)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply( `??rdenes de env??o ${prefix}delpalabra [insultos]. ejemplo: ${prefix}delpalabra idiota`)
					let dbw = body.slice(12)
                    bad.splice(dbw)
					fs.writeFileSync('./database/badwords/bad.json', JSON.stringify(bad))
					reply('*??xito en eliminar mala palabra!*')
					break
//================================================================================/
//============================ Funciones de Chats EXP ============================/
//================================================================================/ 

          case 'checkactividad': 
             if (!isOwner) if (!isGroupAdmins) return reply (mess.only.admin);
            if (!isGroup) return reply(`${say.only.group}`)
            if(groupIdscount.indexOf(from) < 0) return reply('El bot a??n no tiene datos sobre el grupo.')
            var ind = groupIdscount.indexOf(from)
            if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Marca el n??mero al que quieres tirar de la actividad')
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            if(numbersIds.indexOf(mentioned[0]) >= 0) {
            var indnum = numbersIds.indexOf(mentioned[0])
            mentions(`??? *Estadisticas de uso del BOT*\n\n *Usuario* @${mentioned[0].split('@')[0]}\n\n??? *Mensajes enviados*: ${countMessage[ind].numbers[indnum].messages}\n??? *Comandos usados*: ${countMessage[ind].numbers[indnum].cmd_messages}`, mentioned, true)
            }
            else {
            mentions(`??? *Estadisticas de uso del BOT*\n\n *Usuario* @${mentioned[0].split('@')[0]}\n\n??? Mensajes enviados: 0\n??? Comandos: 0`, mentioned, true)
            }
            break
            
          case 'ranking':
            if (!isOwner) if (!isGroupAdmins) return reply (mess.only.admin);
            if (!isGroup) return reply(`${say.only.group}`)
            if(groupIdscount.indexOf(from) < 0) return reply('El bot a??n no tiene datos sobre el grupo.')
            var ind = groupIdscount.indexOf(from)
            if(countMessage[ind].numbers.length < 3) return reply('Necesita do registro de 3 usuarios')
            countMessage[ind].numbers.sort((a, b) => (a.messages < b.messages) ? 1 : -1)
            mentioned_jid = []
            boardi = '????*Ranking de los miembros mas activos*:\n\n*Felicidades a los miembros de la lista*\n\n'
            try {
            for (let i = 0; i < 3; i++) {
            if (i == 0) boardi += `${i + 1}?? ???? : @${countMessage[ind].numbers[i].jid.split('@')[0]}\n*Cantidad de mensajes*: ${countMessage[ind].numbers[i].messages}\n*Cantidad de comandos*: ${countMessage[ind].numbers[i].cmd_messages}\n\n`
            else if (i == 1) boardi += `${i + 1}?? ???? : @${countMessage[ind].numbers[i].jid.split('@')[0]}\n*Cantidad de mensajes*: ${countMessage[ind].numbers[i].messages}\n*Cantidad de comandos*: ${countMessage[ind].numbers[i].cmd_messages}\n\n`
            else if (i == 2) boardi += `${i + 1}?? ???? : @${countMessage[ind].numbers[i].jid.split('@')[0]}\n*Cantidad de mensajes*: ${countMessage[ind].numbers[i].messages}\n*Cantidad de comandos*: ${countMessage[ind].numbers[i].cmd_messages}\n\n`
                    
            mentioned_jid.push(countMessage[ind].numbers[i].jid)
            } 
            mentions(boardi, mentioned_jid, true)
            } catch (err) {
                  console.log(err)
            await client.sendMessage(from, `Se necesitan 3 miembros para construir una clasificaci??n`, text, {quoted: selocont})
            }
            break
            
          case 'infochats': 
            try{
            if (!isOwner) if (!isGroupAdmins) return reply (mess.only.admin);
            if(isGroup && groupIdscount.indexOf(from) >= 0) {
            var ind = groupIdscount.indexOf(from)
            teks = `*Contadores de los miembros del grupo:*\n\n`
            mem = []
            for(let obj of groupMembers) {
            if(numbersIds.indexOf(obj.jid) >=0) {
            var indnum = numbersIds.indexOf(obj.jid)
            teks += `@${countMessage[ind].numbers[indnum].jid.split('@')[0]}\nMensajes: ${countMessage[ind].numbers[indnum].messages}\nComandos: ${countMessage[ind].numbers[indnum].cmd_messages}\n\n`
            } else {
            teks += `@${obj.jid.split('@')[0]}\nMensajes: 0\nComandos: 0\n\n`
            }
            mem.push(obj.jid)
            }
            reply ('Se envio con exito')
            client.sendMessage(ownerNumber, teks, extendedText, {quoted: mek, thumbnail:null, contextInfo:{mentionedJid: mem}})
            } else return reply('*No se encontr?? nada*')
            } catch (e){
            console.log(e)
            }
            break 

          case 'countrevoke':
            if (!isOwner) return reply ('Eliminacion Completa Admin');
            if (!isGroup) return reply ('Solo administrador general tiene acceso a este recurso')
            fs.writeFileaSync('./database/countmsn/countmsg.json', JSON.stringify([]))
            break
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

default:

	/*if (budy.startsWith('>')) {
console.log(color('[EVAL1]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
				   try {
					let evaled = await eval(budy.slice(2))
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					reply(`${evaled}`)
			    	} catch (err) {
					reply(`${err}`)
				    }
		        	} else if (budy.startsWith('x')) {
console.log(color('[EVAL2]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
			    	try {
					return client.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: mek })
				    } catch (err) {
					e = String(err)
					reply(e)
				}
			}*/
		}
		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Error : %s', color(e, 'red'))
        }
	}
}