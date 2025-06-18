const { downloadContentFromMessage, relayWAMessage, mentionedJid, processTime, MediaType, Browser, Presence, Mimetype, Browsers, delay, getLastMessageInChat, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, logger, makeInMemoryStore, getContentType, INativeFlowMessage, prepareWAMessageMedia } = require('baileys');

/* Módulos */
const { path, tesseract, File, creds, LoggerB, Boom, AssemblyAI, axios, fs, cheerio, crypto, util, randomBytes, emoji, P, NodeCache, linkfy, request, ms, FileType, os, ffmpeg, fetch, exec, spawn, moment, colors, readline, execSync } = require('./exports.js');

/* Funções necessárias */
const { TudoCelular, fetchBuffer, VyroEngine, DL, Shazam, RemoverFundo, uploader, addComandosId, KarloAI, deleteComandos, getComandoBlock, getComandos, addComandos, tabela, destrava, destrava2, mess, psycatgames, vyroEngine, linguagem, getInfo, writeExifImg, writeExif, countDays, timeDate, obeso, LastFM, capitalizeFirstLetter, simih, TimeCount, getBuffer, fetchJson, fetchText, formatNumberDecimal, generateMessageID, convertBytes, getGroupAdmins, getMembros, isFiltered, addFilter, chyt, getExtension, getRandom, convertSticker, upload, nit, supre, extractMetadata, arcloud, addBanned, unBanned, BannedExpired, cekBannedUser, Sticker, formatDateOriginal, validmove, setGame, palavrasANA, quizanimais, enigmaArchive, garticArchives, WebP_GIF } = require('./exports.js');

/* JSONs nescessários */
const { images, rglastfm, countMessage, rgtake, sotoy, definitions, daily, muted, premium, ban, limitefll, joguinhodavelhajs, ads, joguinhodavelhajs2, grupos, aluguel, chaves, anotar, antispam, config, Limit_CMD, advices, tools, level2, packname, namoro1, namoro2 } = require('./exports.js');

/* Outras funções */
const { extractAcronymFromCity, DLT_FL, getFileBuffer, shuffle, sleep, sendPoll, enviarfiguUrl, listCommands, fuzzySimilarity, extractDDD, extractStateFromNumber, extractStateFromDDD, VerificarJSON, ANT_LTR_MD_EMJ, NomeDoBot, ownerName, prefix, channel, date, hora, sayLog, inputLog, infoLog, successLog, errorLog, warningLog, eventLog } = require('./exports.js');

/* Formatar segundos para mm:ss */
const duration = require('format-duration-time');

/* Estilização de letras dentro do próprio aplicativo do WhatsApp */
const II = "```"; const III = "`";

/*** Localização de Erro ***/
process.on('uncaughtException', function(err) {
    errorLog((new Date).toUTCString() + ' uncaughtException: ' + err);
});

/* Proprietário → Configurações | Owner */
const numerodonos_ofc = config["OwnerNumber"].value.replace(new RegExp("[()+-/ +/]", "gi"), "");

/* Inteligência Artificial → Credentials: */
const TOKEN_GEMINI = creds["Gemini"].apikeys[Math.floor(Math.random() *creds["Gemini"].apikeys.length)];
const APP_KEY_PRODIA = creds["Prodia"].apikeys[Math.floor(Math.random() *creds["Prodia"].apikeys.length)];
const APP_KEY_KARLO = creds["KarloAI"].apikeys[Math.floor(Math.random() *creds["KarloAI"].apikeys.length)];

const numerodonos = [
  `${config["OwnerNumber"].value.replace(new RegExp("[()+-/ +/]", "gi"), "")}@s.whatsapp.net`, 
  `${config["subOwners"].dono1.replace(new RegExp("[()+-/ +/]", "gi"), "")}@s.whatsapp.net`,
  `${config["subOwners"].dono2.replace(new RegExp("[()+-/ +/]", "gi"), "")}@s.whatsapp.net`, 
  `${config["subOwners"].dono3.replace(new RegExp("[()+-/ +/]", "gi"), "")}@s.whatsapp.net`, 
  `${config["subOwners"].dono4.replace(new RegExp("[()+-/ +/]", "gi"), "")}@s.whatsapp.net`,
  `${config["subOwners"].dono5.replace(new RegExp("[()+-/ +/]", "gi"), "")}@s.whatsapp.net`
];

/* TMDB → The Movie Database | Creds: */
const API_KEY_TMDB = creds["TMDB"].apikeys[Math.floor(Math.random() *creds["TMDB"].apikeys.length)];

/* Apikey | Website - API Oficial (Maioria dos comandos dependem dessas Credentials) */
const API_KEY_YURI = creds["APIs"].apikey;
const API_URL = creds["APIs"].website || "https://api.minhabucetinha.com.br";

// ABAIXO: INÍCIO DE CONEXÃO

async function startyurizin() {
module.exports = yurizin = async(upsert, yurizin, qrcode) => {
async function upsertMessage() {
for (const info of upsert?.messages || []) {
const from = info.key.remoteJid;
const isGroup = from.endsWith('@g.us');
const isStatus = from.endsWith('@broadcast');
const VRF_JSON_GRUPO = fs.existsSync(`./arquivos/database/groups/db/${from}.json`) ? true : false;

if(VRF_JSON_GRUPO) { var jsonGp = JSON.parse(fs.readFileSync(`./arquivos/database/groups/db/${from}.json`)); };
// Dias da semana
const dayWeek = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

/* Detectar novos admins no grupo ou remoção do cargo. */
if(VRF_JSON_GRUPO && jsonGp[0].x9 && info.messageStubType) {
    switch(info.messageStubType) {
        case 21:
          await yurizin.sendMessage(from, {text: `Grupo renomeado para *“${info.messageStubParameters[0]}”* por *@${info.participant?.split('@')[0]}*.`, contextInfo: { forwardingScore: 1,  isForwarded: true, mentionedJid: [info.participant], remoteJid: info.key.remoteJid }});
        break;
        case 27:
          if(info.participant.split('@')[0]. length === 0) {
          } else {
            await yurizin.sendMessage(from, {text: `O mais novo membro *@${info.messageStubParameters[0].split('@')[0]}* teve sua entrada aceita pelo adminstrador(a): *@${info.participant.split('@')[0]}*!`, contextInfo: { forwardingScore: 1,  isForwarded: true, mentionedJid: [info.messageStubParameters[0], info.participant], remoteJid: info.key.remoteJid }});
          }
        break;
        case 28: // Membro Removido
            await yurizin.sendMessage(from, {text: `*@${info.messageStubParameters[0].split('@')[0]}* teve sua solicitação de entrada *RECUSADA* ou foi removido(a) do grupo.`,contextInfo: { forwardingScore: 1,  isForwarded: true, mentionedJid: [info.messageStubParameters[0]], remoteJid: info.key.remoteJid }})
        break;        
        case 29:
            await yurizin.sendMessage(from, { text: `O administrador *@${info.participant?.split('@')[0]}* promoveu um membro comum a administrador do grupo.\n> *@${info.messageStubParameters[0].split('@')[0]}*`, contextInfo: { forwardingScore: 1,  isForwarded: true, mentionedJid: [info.messageStubParameters[0], info.participant], remoteJid: info.key.remoteJid }});
        break;
        case 30:
            await yurizin.sendMessage(from, { text: `O adminstrador *@${info.participant?.split('@')[0]}* acaba de rebaixar um adminstrador do grupo para membro comum.\n> *@${info.messageStubParameters[0].split('@')[0]}*`, contextInfo: { forwardingScore: 1, isForwarded: true, mentionedJid: [info.messageStubParameters[0], info.participant], remoteJid: info.key.remoteJid }});
        break;               
        case 172: case 171:
            const solicitante = info.messageStubParameters[0]; 
            const acao = info.messageStubParameters[1];
            const metodo = info.messageStubParameters[2] || 'desconhecido';
            const horario = new Date(info.messageTimestamp * 1000).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })
            let texto71 = ''
            if (acao === 'revoked') {
               texto71 = `🚫 O(a) *@${solicitante.split('@')[0]}* cancelou a solicitação de entrada neste grupo...`
               texto71 += ` _Ainda bem! Ninguém queria ele(a) aqui mesmo._`
            } else if (acao === 'created') {
                texto71 = `⚠️ Atenção, administração! O(a) *@${solicitante.split('@')[0]}* enviou uma solicitação para entrar no grupo.`
                texto71 += `\n• Solicitação: *${horario}*`
                if (metodo !== 'desconhecido') {
                    let tipoEntrada = metodo === 'invite_link' ? '*Link de Grupo*' : `*${metodo}*`;
                    texto71 += `\n• Solicitou a entrada no grupo através do: ${tipoEntrada}`
                }
            }
            await yurizin.sendMessage(from, {text: texto71, contextInfo: { forwardingScore: 1, isForwarded: true, mentionedJid: [solicitante], remoteJid: from }})
        break;
        }
    }
  
if(!info.message) return;
if(upsert.type == "append") return;  
const baileys = require('baileys');
const type = baileys.getContentType(info.message);
const content = JSON.stringify(info.message);
const pushname = info.pushName ? info.pushName : '';

if(definitions.ViewMessagesChat) {
  await yurizin.readMessages([info.key]);
} else {
  if(from == "status@broadcast") return;
}

/* Conversas no WhatsApp, detectar o que está escrito nas mensagens enviadas no grupo ou no privado. */
const body = info.message?.conversation || info.message?.viewOnceMessageV2?.message?.imageMessage?.caption || info.message?.viewOnceMessageV2?.message?.videoMessage?.caption || info.message?.imageMessage?.caption || info.message?.videoMessage?.caption || info.message?.extendedTextMessage?.text || info.message?.viewOnceMessage?.message?.videoMessage?.caption || info.message?.viewOnceMessage?.message?.imageMessage?.caption || info.message?.documentWithCaptionMessage?.message?.documentMessage?.caption || info.message?.buttonsMessage?.imageMessage?.caption || info.message?.buttonsResponseMessage?.selectedButtonId || info.message?.templateButtonReplyMessage?.selectedId || info?.text || info.message?.editedMessage?.message?.protocolMessage?.editedMessage?.extendedTextMessage?.text || info.message?.editedMessage?.message?.protocolMessage?.editedMessage?.imageMessage?.caption || info.message.interactiveMessage?.body || JSON.parse(info.message?.interactiveResponseMessage?.nativeFlowResponseMessage?.paramsJson || '{}')?.id || info?.text || '';
const Procurar_String = info.message?.conversation || info.message?.viewOnceMessageV2?.message?.imageMessage?.caption || info.message?.viewOnceMessageV2?.message?.videoMessage?.caption || info.message?.imageMessage?.caption || info.message?.videoMessage?.caption || info.message?.extendedTextMessage?.text || info.message?.viewOnceMessage?.message?.videoMessage?.caption || info.message?.viewOnceMessage?.message?.imageMessage?.caption || info.message?.documentWithCaptionMessage?.message?.documentMessage?.caption || info.message?.buttonsMessage?.imageMessage?.caption || "";
const PR_String = Procurar_String.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
const args = body.trim().split(/ +/).slice(1);
const argss = body.split(/ +/g);
const arg = body.substring(body.indexOf(' ') + 1);
const budy = (type === 'conversation') ? info.message?.conversation : (type === 'extendedTextMessage') ? info.message?.extendedTextMessage?.text : '';
const budy2 = body.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
const budy3 = budy.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

/* Função responsável por detectar o campo de texto, tudo o que for colocado após um comando é um campo. */
const q = args.join(' ');
const q_2 = q.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

/* Prefixos */
if (isGroup && VRF_JSON_GRUPO) {
   if (jsonGp[0].multiprefix) {
     var prefix = jsonGp[0]?.prefixos.find(p => String(body)?.trim()?.startsWith(p)) || jsonGp[0].prefixos[0];
   } else {
     var prefix = config["Prefix"].value;
   }
} else if (!isGroup || (isGroup && !VRF_JSON_GRUPO)) {
    var prefix = config["Prefix"].value;
}
      
if(isGroup && fs.existsSync(`./arquivos/database/groups/db/${from}.json`) && !jsonGp[0].multiprefix) {
   var prefix = config["Prefix"].value
} else if(!isGroup) {
   var prefix = config["Prefix"].value
};
 
/* Diferenciar um comando de uma mensagem comum (sem prefixo). */
const isCmd = body.trim().startsWith(prefix);
const command = isCmd ? budy2.trim().slice(1).split(/ +/).shift().toLocaleLowerCase(): null;

/* Informações do Grupo */ try {var groupMetadata = isGroup ?  await yurizin.groupMetadata(from): ""} catch {return}
const groupName = isGroup ? groupMetadata.subject || '' : '';
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const somembros = isGroup ? getMembros(groupMembers) : ''

/* Localizar o ID do Usuário '@s.whatsapp.net ou informar o número que o bot está hospedado no momento. */
const sender = isGroup ? info.key.participant.includes(':') ? info.key.participant.split(':')[0] +'@s.whatsapp.net': info.key.participant : info.key.remoteJid;
const botNumber = await yurizin.user.id.split(':')[0]+'@s.whatsapp.net';

/* Funções exclusivas do BOT, não mexer nas consts, pode ocorrer erros. */
const isnit = nit.includes(sender) 
const issupre = supre.includes(sender)
const ischyt = chyt.includes(sender)

/* Proprietários da Yuri-Bot */
const nmrdn = config["OwnerNumber"].value.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` || isnit;

/* Funções do Grupo */
const dirGroup = `./arquivos/database/groups/db/${from}.json`;
if(isGroup && !fs.existsSync(dirGroup)){
var data = [{
    name: groupName,
    groupId: from, 
    x9: false, 
    antiimg: { status: false, description: "Proíbe o envio de imagens no grupo aonde está ativo, caso seja enviado o participante será removido do grupo! Use o comando [Prefixo]Antiimg", message: "0" },
    antivideo: { status: false, description: "Este tipo de anti proíbe o envio de vídeos dentro do grupo, ou seja, os membros que não participam da administração do grupo, são removidos do grupo! Para ativar o anti em seu grupo, use o comando: [Prefixo]Antivideo.", message: "0" },
    antiaudio: { status: false, description: "Este tipo de anti tem a função de remover qualquer usuário que enviar uma,mensagem que for identificada como áudio ou mensagens de voz! para ativar este anti em seu grupo, use: [Prefixo]Antiaudio." },
    antisticker: { status: false, description: "Este anti tem a função de remover o membro que enviar uma ou várias figurinhas dentro no grupo, o qual está ativado! Para ativar, use: [Prefixo]Antisticker" },    
    antidoc: { status: false, description: "Cansado de receber documentos PDF ou entre outros formatos? Este anti tem a função de remover o membro que encaminhar um documento no grupo. Para ativar este tipo de anti, use: [Prefixo]Antidoc", message: "0" },
    antictt: { status: false, description: "Este comando tem como função de remover quem enviar contatos(v-cards) no grupo, é um anti usado por motivos de travas-contatos, deve ser uma trava absoleta mas sempre tem estar precavido... Para ativar esta proteção em seu grupo, use: [Prefixo]Antictt" },
    antiloc: { status: false, description: "Uma proteção que consiste em remover quem enviar localizações em tempo real ou fixas, já ouviu falar nas travas de localizações? Este tipo de anti é útil até hoje! Para proteger seu grupo, use este comando: [Prefixo]Antiloc" },
    antilinkgp: { status: false, description: "Quer proteger seu grupo de ladrões de membros? Ative essa função, seja feliz e ainda durma tranquilo! Este comando tem a virtude de remover todos os usuários que enviarem link de grupos dentro do seu... Para ativar, use o comando: [Prefixo]Antilinkgp" },
    antilinkhard: { status: false, description: "Proteja seu grupo de todo tipo de link usando o AntiLinkHard, sendo ele do TikTok, Instagram, links enganosos ou golpe... Para ativar, use comando: [Prefixo]Antilinkhard" },
    antifake: { status: false, description: "Você quer deixar seu grupo sem números estrangeiros? É só ativar a função de AntiFake, para ativar use: [Prefixo]Antifake", message: "0" },
    antinotas: { status: false, description: "Quer proibir todos os tipos de divulgação sendo ela oferecimentos de produtos como nota fake ou qualquer que contenha emojis de moedas em seu texto? Use o comando [Prefix]Antinotas" },
    anticatalogo: { status: false, description: "Lembra das antigas travas catálogos ou usuários de contas business que ativam a funcionalidade? Você tem como remover quem usar em seu grupo e só ativar o comando [Prefixo]Anticatalogo e seja feliz!" },
    soadm: { status: false, description: "Tem a função de restringir todos os membros de utilizarem os comandos, menos o(s) proprietário(s) e administradores do grupo, para ativar use: [Prefixo]Soadm" },
    anti_enquete: { status: false, description: "Sem descrição!" },
    listanegra: [], 
    advertir: [], 
    prefixos: [`${config["Prefix"].value}`],
    advertir2: [], 
    allowedParticipant: { usus: [] },
    multiprefix: false, 
    ausentes: [], 
    ANTI_DDD: { active: false, listaProibidos: [] },
    antipalavrao: { active: false, palavras: [] },
    limitec: { active: false, quantidade: null },
    wellcome: [{
        bemvindo1: false,
        legendabv: "Olá #numerodele#, seja bem vindo (a) ao grupo: #nomedogp#",
        legendasaiu: 0
      },
      {
        bemvindo2: false,
        legendabv: "Olá #numerodele#, seja bem vindo (a) ao grupo: #nomedogp#",
        legendasaiu: 0
    }],
    simi1: false, 
    simi2: false,
    autosticker: { status: false, description: "Cria figurinhas de vídeos e imagens sem usar nenhum comando, ou seja, tudo de forma automatizada! Para ativar esta funcionalidade, use: [Prefixo]Autofigu" },
    autoresposta: false,
    jogos: false, 
    level: false,
    bangp: false, 
    isModoCoins: false
}]
fs.writeFileSync(dirGroup, JSON.stringify(data, null, 2) + '\n')
}
     
const dataGp = isGroup ? JSON.parse(fs.readFileSync(dirGroup)) : undefined;
const isButtons = definitions.buttons["status"];
      
/* Atualizar o arquivo de grupo */
async function updateGroup(fileContent){
    fs.writeFileSync(dirGroup, JSON.stringify(fileContent, null, 2) + '\n')
};
      
/* Adivinhar o Dispositivo */
const adivinha = info.key.id.length > 21 ? 'Android' : info.key.id.substring(0, 2) == '3A' ? 'iPhone' : 'WhatsApp Web';

/* Funções Globais */
const quoted = info.quoted ? info.quoted : info
const isBot = info.key.fromMe ? true : false
const SoDono = nmrdn.includes(sender) || numerodonos.includes(sender) || isBot || isnit || issupre || ischyt
const DonoOficial = config["OwnerNumber"].value + "@s.whatsapp.net";
const isPremium = premium.map(i => i.id).includes(sender) || SoDono;
const isModoAluguel = definitions.ModoAluguel;
const premiumCmd = definitions.CommandsVIP
const isBlockCmdG = definitions.blockCmdG
const isListaBrancaG = definitions.listabrancaG.includes(sender)
const isBanned = ban.includes(sender);
const isVisualizar = definitions.ViewMessagesChat
const isVerificado = definitions.Verificado;
const isAntiPv = definitions.AntiPrivado["status"];
const isAntiPv2 = definitions.AntiPrivado2["status"];
const isAntiPv3 = definitions.AntiPrivado3["status"];
const isBotoff = definitions.botOffline
const listanegraG = definitions.listanegraG;
const listabrancaG = definitions.listabrancaG;
const isAnticall = definitions.AntiCall;

/* Funções de Grupos | Ativações */
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false;
const isGroupAdmins = groupAdmins.includes(sender) || SoDono || false;
const isAllowedParticipant = isGroup ? dataGp[0].allowedParticipant.usus.map(all => all).includes(sender) : [];
const isJoguin = isGroup ? joguinhodavelhajs.includes(sender) : false
const isAntiImg = isGroup ? dataGp[0].antiimg.status : undefined;
const isLimitCmd = isGroup ? dataGp[0]?.Limitar_CMD : undefined;
const isAntiVid = isGroup ? dataGp[0].antivideo.status : undefined;
const isAntiAudio = isGroup ? dataGp[0].antiaudio.status : undefined;
const isAntiSticker = isGroup ? dataGp[0].antisticker.status : undefined;
const Antidoc = isGroup ? dataGp[0].antidoc.status : undefined;
const isAntiCtt = isGroup ? dataGp[0].antictt.status : undefined;
const Antiloc = isGroup ? dataGp[0].antiloc.status : undefined;
const isAntiDDD = isGroup ? dataGp[0].ANTI_DDD.active : undefined;
const isAntilinkgp = isGroup ? dataGp[0].antilinkgp.status : undefined;
const isAntiLinkHard = isGroup ? dataGp[0].antilinkhard.status : undefined;
const isAntiPoll = isGroup ? dataGp[0].anti_enquete.status : undefined;
const isAntifake = isGroup ? dataGp[0].antifake.status : undefined;
const So_Adm = isGroup ? dataGp[0].soadm.status : undefined;
const ADVT = isGroup ? dataGp[0].advertir: undefined;
const ADVT2 = isGroup ? dataGp[0].advertir2: undefined;
const isx9 = isGroup ? dataGp[0].x9 : undefined
const isMultiP = isGroup ? dataGp[0].multiprefix : undefined
const isAntiNotas = isGroup ? dataGp[0].antinotas.status : undefined
const isAnticatalogo = isGroup ? dataGp[0].anticatalogo.status : undefined
const isWelkom = isGroup ? dataGp[0].wellcome[0].bemvindo1 : undefined
const isWelkom2 = isGroup ? dataGp[0].wellcome[1].bemvindo2 : undefined
const isSimi = isGroup ? dataGp[0].simi1 : undefined;
const isSimi2 = isGroup ? dataGp[0].simi2 : undefined;
const isAutofigu = isGroup ? dataGp[0].autosticker.status : undefined
const isAutorepo = isGroup ? dataGp[0].autoresposta : undefined
const isModobn =  isGroup ? dataGp[0].jogos : undefined
const isLevelingOn = isGroup ? dataGp[0].level : undefined
const isBanchat = isGroup ? dataGp[0].bangp : undefined
const isPalavrao = isGroup ? dataGp[0].antipalavrao.active : undefined
const isPalavras = isGroup ? dataGp[0].antipalavrao.palavras : undefined
const isAntiFlood = isGroup ? dataGp[0].limitec.active : undefined
const isLimitec = isGroup ? dataGp[0].limitec.quantidade : undefined
const isModoRPG = isGroup ? dataGp[0].modo_rpg : undefined

/* Verificados */
const quotedLiveLocation = {key: {participant: '0@s.whatsapp.net'}, message: {liveLocationMessage: {caption: `Usuário: ${pushname}`}}};
const quotedPhoto = {key: {participant : '0@s.whatsapp.net'}, message: {imageMessage: {caption: pushname}}};
const quotedVideo = {key: {participant : '0@s.whatsapp.net'}, message: {videoMessage: {caption: pushname}}};
const quotedContact = {key: {participant : '0@s.whatsapp.net'},message: {contactMessage: {displayName: `${pushname}`}}};
const quotedDocument = {key: {participant : '0@s.whatsapp.net'}, message: {documentMessage: {caption: pushname}}};

/* Função para usar o verificado padrão que é visível à todos os dispositivos, já os QUOTEDs de mídias como localização, contato, etc são só visíveis ao Android */
if(!isVerificado) {
   var selo = quotedLiveLocation;
} else {
   var selo = info;
} 

/* Função da Marcação (@) */
const menc_prt = info.message?.extendedTextMessage?.contextInfo?.participant;
const menc_jid = args?.join(" ").replace("@", "") + "@s.whatsapp.net";
const menc_jid2 = info.message?.extendedTextMessage?.contextInfo?.mentionedJid;
const sender_ou_n = q.includes("@") ? menc_jid : sender;
const mrc_ou_numero = q.length > 6 && !q.includes("@") ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_prt;
const menc_os2 = q.includes("@") ? menc_jid : menc_prt;
const marc_tds = q.includes("@") ? menc_jid : q.length > 6 && !q.includes("@") ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_prt;
const menc_prt_nmr = q.length > 12 ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_prt;

/* Verificador de Links */
const isUrl = (url) => {
  if(linkfy.find(url)[0]) return true;
  return false;
}

/* Horário Oficial de Brasília */
const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss');
if(time2 > "00:00:00" && time2 < "05:00:00") {
    var tempo = 'Boa noite';
} if(time2 > "05:00:00" && time2 < "12:00:00") {
    var tempo = 'Bom dia';
} if(time2 > "12:00:00" && time2 < "18:00:00") {
    var tempo = 'Boa tarde'
} if(time2 > "18:00:00") {
    var tempo = 'Boa noite'
};

/* Função responsável por ignorar comandos recebidos dentro do número que o BOT está hospedado no momento. */
if(!isCmd && info.key.fromMe) return
      
async function sendUrlText(id, textCaption, title, desc, imageUrl, linkAcess, quotedThis) {
    await yurizin.sendMessage(id, {text: textCaption, contextInfo: {externalAdReply: {title: title, body: desc, thumbnail: await getBuffer(imageUrl), mediaType: 1, sourceUrl: linkAcess}}}, {quoted: quotedThis}).catch(async(error) => {
      await yurizin.sendMessage(from, {text: String(error)}, {quoted: info});
    })
}
      
yurizin.reagir = (message, emoji) => new Promise(async(resolve, reject) => {
    if (!emoji) return
    if (!('key' in message)) return
    await yurizin.sendMessage(message.key.remoteJid, {react: {text: emoji, key: message.key, senderTimestampMs: Math.round(Date.now() / 1000)}}).then(resolve).catch(reject);
});
      
const reply = async(str, ops = {}) => {
    let { reagir, id, options, trim, exec, ephemeral, quoted } = Object.assign({reagir: false, id: from, quoted: info, options: {}, trim: true, exec: true}, (typeof ops == 'object' ? ops : {}));
    if (!str) return await reply(0, {reagir: "😾", id: from, quoted: info}); 
    await yurizin.sendPresenceUpdate('available', id); 
    await yurizin.sendPresenceUpdate('composing', id);
    if (exec) { 
        try {
           str = await eval(str); 
           if (typeof str !== 'string') str = (JSON.stringify(str, null, '\t') == '{}') ? util.inspect(str) : JSON.stringify(str, null, '\t')
        } catch {
            str = trim ? str.trim() : str
        }
 } else {
   str = trim ? str.trim() : str };
   const res = await yurizin.sendMessage(id, {text: str, ...options}, {quoted: quoted});
   if (reagir && res) await yurizin.reagir(info, reagir)
}

const sendMentions = async(local, teks) => {
    memberr = []; vy = teks.includes('\n') ? teks.split('\n') : [teks]
    for(vz of vy) {for(zn of vz.split(' ')) {if(zn.includes('@')) memberr.push(parseInt(zn.split('@')[1])+'@s.whatsapp.net')}};
    await yurizin.sendMessage(local, {text: teks.trim(), mentions: memberr}, {quoted: info}).catch(async(error) => {
        await yurizin.sendMessage(from, {text: String(error)}, {quoted: info});
    });
}

      const mentions = async(teks = '', mb, id) => {
        (id == null || id == undefined || id == false) ? await yurizin.sendMessage(from, {text: teks.trim(), mentions: mb}) : await yurizin.sendMessage(from, {text: teks.trim(), mentions: mb}, {quoted: info})
      }

const mention = async(teks = '', ms = info) => {
    memberr = []; vy = teks.includes('\n') ? teks.split('\n') : [teks]
    for(vz of vy) { 
        for(zn of vz.split(' ')) {
            if(zn.includes('@')) memberr.push(parseInt(zn.split('@')[1])+'@s.whatsapp.net')
        }
    }
    await yurizin.sendMessage(from, {text: teks.trim(), mentions: memberr}, {quoted: ms}).catch(async(error) => {
        await yurizin.sendMessage(from, {text: String(error)}, {quoted: info});
    });
}
      
const mentionImage = async(teks = '', FileN, thisQuoted = info) => {
    memberr = []; vy = teks.includes('\n') ? teks.split('\n') : [teks];
    for(vz of vy) { 
        for(zn of vz.split(' ')) {
            if(zn.includes('@')) memberr.push(parseInt(zn.split('@')[1])+'@s.whatsapp.net');
        }
    }
    await yurizin.sendMessage(from, {image: {url: FileN}, caption: teks.trim(), mentions: memberr}, {quoted: thisQuoted}).catch(async(error) => {
        await yurizin.sendMessage(from, {text: String(error)}, {quoted: info});
    });
}

const mentionGif = async(teks = '', FileN, thisQuoted = info) => {
    memberr = []; vy = teks.includes('\n') ? teks.split('\n') : [teks];
    for(vz of vy) { 
        for(zn of vz.split(' ')) {
            if(zn.includes('@')) memberr.push(parseInt(zn.split('@')[1])+'@s.whatsapp.net');
        }
    }
    await yurizin.sendMessage(from, {video: {url: FileN}, caption: teks.trim(), mentions: memberr, gifPlayback: true}, {quoted: thisQuoted}).catch(async(error) => {
        await yurizin.sendMessage(from, {text: String(error)}, {quoted: info});
    });
}

/* Criação de Sticker Automática */
if(isAutofigu && isGroup) {
   async function autofiguf() {
      setTimeout(async() => {
        var sticker = new Sticker();
        if(budy.includes(`${prefix}sticker`) || budy.includes(`${prefix}s`) || budy.includes(`${prefix}stk`) || budy.includes(`${prefix}st`) || budy.includes(`${prefix}fsticker`) || budy.includes(`${prefix}f`) || budy.includes(`${prefix}fstiker`)) return;
        if(type == 'imageMessage') {
        var pack = config["stickerPack"].value
        var author2 = config["stickerAuthor"].value.replaceAll("{user}", pushname). replaceAll("{botname}", NomeDoBot).replaceAll("{time}", `${dattofc} ${hourofc}`);
        owgi = await getFileBuffer(info.message.imageMessage, 'image');
        sticker.addFile(owgi); 
        sticker.options.metadata = {
            pack: pack, author: author2, emojis: ['🤠', '🥶', '😻']
        };
        await sticker.start().then(async(d) => {
           await yurizin.sendMessage(from, {sticker: fs.readFileSync(d[0].value)}, {quoted: info});
           setTimeout(async() => { await fs.unlinkSync(data[0].value) }, 20);
        }).catch(async(error) => reply(String(error)));
      }
      if(type == 'videoMessage') {
        if((isMedia && info.message.videoMessage.seconds < 10)) {
            var pack = config["stickerPack"].value;
            var author2 = config["stickerAuthor"].value. replaceAll("{user}", pushname). replaceAll("{botname}", NomeDoBot).replaceAll("{time}", `${dattofc} ${hourofc}`);
            owgi = await getFileBuffer(info.message.videoMessage, 'video');
            sticker.addFile(owgi); 
            sticker.options.metadata = {
                pack: pack, author: author2, emojis: ['🤠', '🥶', '😻']
            };
            await sticker.start().then(async(d) => {
                await yurizin.sendMessage(from, {sticker: fs.readFileSync(d[0].value)}, {quoted: info});
                setTimeout(async() => { await fs.unlinkSync(data[0].value) }, 20);
            }).catch((error) => reply(error));
        }
      } 
   }, 1000)
}
autofiguf().catch((error) => {
   errorLog(error)
})
}

/* Reação de Mensagens */
const reagir = async(idgp, emj) => {
    await yurizin.sendMessage(idgp, {react: {text: emj, key: info.key}});
}

/* Detectar uso de marcações invisíveis que só pode usar em um WA Modder*/
if(isGroup && isBotGroupAdmins && !isGroupAdmins && !SoDono && !info.key.fromMe) {
    if(menc_jid2?.length >= groupMembers.length - 1) { 
        await yurizin.sendMessage(from, {text: mess.markingAllMember()}, {quoted: info});
        setTimeout(async() => {
            await yurizin.sendMessage(from, {delete: {remoteJid: from, fromMe: false, id: info.key.id, participant: sender}});
        }, 500);
        await yurizin.groupParticipantsUpdate(from, [sender], "remove");
    }
}

// ======== || JSON-FUNÇÕES || ======== \\
const { addVotoDuelo, delVotoDuelo } = require('./arquivos/system/voting/votoduelo.js')
const votacaoduelo = JSON.parse(fs.readFileSync('./arquivos/system/voting/db/votacaoduelo.json'))
const isVotoDuelo = isGroup ? votacaoduelo.includes(from) : false;

if(isGroup) {
    if (budy.toLowerCase() === 'um'){
       voto = JSON.parse(fs.readFileSync(`./arquivos/system/voting/db/p2_votos/${from}.json`));
       _votos = JSON.parse(fs.readFileSync(`./arquivos/system/voting/db/p1_votos/${from}.json`));
       filtro = voto.map(v => v.participante);
       id_voto = sender ? sender : '0@s.whatsapp.net'
       if(filtro.includes(id_voto)) {
          return mentions('Olá '+'@' + sender.split('@')[0] + '\n~ Não é possível votar duas vezes.', filtro, true);
       } else {
          voto.push({
            participante: id_voto,
            votacao: '1'
          });
          fs.writeFileSync(`./arquivos/system/voting/db/p2_votos/${from}.json`,JSON.stringify(voto));
          _p = []
          _voto = `*VOTAÇÃO*\n\nParticipante 1: @${_votos[0].votos.split('@')[0]}\nParticipante 2: @${_votos[0].votos2.split('@')[0]}\nMotivo da votação: ${_votos[0].razao}\nTotal de votos: ${voto.length}.\nDuração: ${_votos[0].duracao} minuto(s).`
          for(let i = 0; i < voto.length; i++) {
            _voto +=  `Membro [@${voto[i].participante.split('@')[0]}] votou em: ${voto[i].votacao}`;
            _p.push(voto[i].participante);
          }
          _p.push(_votos[0].votos, _votos[0].votos2);
          mentions(_voto,_p,true)
        }
       } else if (budy.toLowerCase() === 'dois') {
         voto = JSON.parse(fs.readFileSync(`./arquivos/system/voting/db/p2_votos/${from}.json`))
         _votos = JSON.parse(fs.readFileSync(`./arquivos/system/voting/db/p1_votos/${from}.json`))
         filtro = voto.map(v => v.participante)
         id_voto = sender ? sender : '0@s.whatsapp.net'
         if(filtro.includes(id_voto)) {
            return mentions('Olá '+'@' + sender.split('@')[0] + '\n~ Não é possivel votar duas vezes.', filtro, true)
         } else {
            voto.push({
               participante: id_voto,
               votacao: '2'
            })
            fs.writeFileSync(`./arquivos/system/voting/db/p2_votos/${from}.json`,JSON.stringify(voto))
            _p = []
            _voto = `*VOTAÇÃO*\n\nParticipante 1: @${_votos[0].votos.split('@')[0]}\nParticipante 2: @${_votos[0].votos2.split('@')[0]}\nMotivo da votação: ${_votos[0].razao}\nTotal de votos: ${voto.length}.\nDuração: ${_votos[0].duracao} minuto(s).`
            for(let i = 0; i < voto.length; i++) {
               _voto +=  `Membro [@${voto[i].participante.split('@')[0]}] votou em: ${voto[i].votacao}`
                _p.push(voto[i].participante)
            }
            _p.push(_votos[0].votos, _votos[0].votos2)
            mentions(_voto,_p,true)
         }
       }
    }	

if(isBotGroupAdmins && isGroupAdmins && body === "apaga") {
    if(!menc_prt) return;
    await yurizin.sendMessage(from, {delete: { remoteJid: from, fromMe: false, id: info.message.extendedTextMessage.contextInfo.stanzaId, participant: menc_prt}});
}

if(isGroup && fs.existsSync(`./arquivos/database/func/afk/afk-@${config["OwnerNumber"].value.replace(new RegExp("[()+-/ +/]", "gi"), "")}.json`)) {
    let ower = config["OwnerNumber"].value.replace(new RegExp("[()+-/ +/]", "gi"), "");
    let tabelin = JSON.parse(fs.readFileSync(`./arquivos/database/func/afk/afk-@${ower}.json`)); // JSON TABELA
    if(budy.includes(ower)) {
        await mention(`🤖⌛ ${tempo}, *@${sender.split("@")[0]}*! Sinto em informar que o(a) meu/minha comandante está ausente desde ${tabelin.hora}.\n▢ Mensagem de ausência:\n> ${tabelin.msg}\n–\n• Por favor, aguarde pacientemente. Já notifiquei para ele(a) que você precisa da presença dele(a).`); 
        await yurizin.reagir(info, "⏳️");
    }
}

if(isGroup && dataGp[0].ausentes?.length > 0 && menc_jid2?.length > 0 && JSON.stringify(dataGp[0].ausentes).includes(menc_jid2)) {
    blue = []; big = []; blr = []; 
    for (i of menc_jid2) {
       if(groupAdmins.indexOf(String(i)) != -1) blue.push(groupAdmins.indexOf(String(i))) 
    }; 
    if(blue.length == 0) return
    for (i of blue) {
       big.push(groupAdmins[i])
    }; 
    for (i = 0; i < big.length; i++) {
       blr.push(dataGp[0].ausentes[dataGp[0].ausentes.map(i => i.id).indexOf(big[i])]) 
    };
    for (i of blr) {
       var blak = i 
    };
    await mention(`🤖⌛ ${tempo}, *@${sender.split("@")[0]}*! Sinto em informar que o(a) @${blak.id.split("@")[0]} está ausente no momento.\n▢ Mensagem de ausência:\n> ${blak.msg}\n–\n• Por favor, aguarde pacientemente. Já notifiquei para ele(a) que você precisa da presença dele(a).`);
    await yurizin.sendMessage(blak.id, {text: `Necessitando da sua presença! Clique acima para visualizar a mensagem.`}, {quoted: info});
}

/* --------- [ IFs | Premium & Global ] ---------- */
if(!isPremium && definitions.CommandsVIP.includes(command)) return reply(mess.onlyPremiumUser(), {reagir: "❌"});
if(isGroup && isCmd && isBanchat && !SoDono) return;
if(isGroup && isCmd && So_Adm && !SoDono && !isGroupAdmins) return;
if(isBotoff && !SoDono) return;

const sendStickerFromUrl = async(to, url) => {
    try {
       var names = Date.now() / 10000;
       var download = function (uri, filename,callback) { request.head(uri, function (err, res, body) { request(uri).pipe(fs.createWriteStream(filename)).on('close', callback) }) };
       download(url, './sticker' + names + '.png', async function () {
        let filess = './sticker' + names + '.png'
        let asw = './sticker' + names + '.webp'
        exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${asw}`, async(err) => {
           let media = fs.readFileSync(asw)
           await yurizin.sendMessage(to, {sticker: media}, {sendEphemeral: true, contextInfo: { forwardingScore: 50, isForwarded: true}, quoted: selo}).catch(async(error) => { return })
           DLT_FL(filess); DLT_FL(asw)
        });
      });
    } catch { return }
}

/* -Verificação de Mídia */
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage' || type == "viewOnceMessage" || type == "viewOnceMessageV2");

/* Tipos de QuotedMessage ]  */
const isQuotedMsg = type === 'extendedTextMessage' && content.includes('conversation');
const isQuotedMsg2 = type === 'extendedTextMessage' && content.includes('text');
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage');
const isQuotedVisuU = type === 'extendedTextMessage' && content.includes('viewOnceMessage');
const isQuotedVisuU2 = type === 'extendedTextMessage' && content.includes('viewOnceMessageV2');
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage');
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage');
const isQuotedDocW = type === 'extendedTextMessage' && content.includes('documentWithCaptionMessage');
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage');
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage');
const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage');
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage');
const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage');
            
/* Array | DDDs Brasileiros 🇧🇷 */
const arrayDDDs = [11, 12 ,13 ,14 ,15, 16, 17, 18, 19, 21, 22, 24 , 27, 28, 31, 32, 33, 34, 35, 37, 38, 41, 42, 43, 44, 45, 46, 47, 48, 49, 51, 53, 54, 55,61, 62, 63, 64, 65, 66, 67, 68, 69, 71, 73, 74,75, 77, 79, 81, 82, 83, 84, 85, 86, 87, 88, 89,91, 93, 94, 95, 96, 97, 98, 99];

/* Bloqueio de Comandos (Grupo) */
if(isGroup) {
   const checar = getComandos(from)
   if(checar === undefined) addComandosId(from)
}
if(isGroup && isCmd && !SoDono && !isnit && getComandoBlock(from).includes(command)) return reply(mess.cmdBlockGroup(), { reagir: "❌" });

/* Bloqueio de Comandos (Global) */
if(isBlockCmdG.includes(command) && !SoDono) return reply(mess.cmdBlockGlobal(), { reagir: "❌" });

/* Data & Hora (Horário de Brasília) */
const dattofc = moment.tz('America/Sao_Paulo').format('DD/MM/YYYY');
const hourofc = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

/* Tipo de Mensagens Enviadas */
const MessageType = type == 'audioMessage' ? 'Áudio' : type == 'stickerMessage' ? 'Figurinha' : type == 'imageMessage' ? 'Imagem' : type == 'videoMessage' ? 'Vídeo' : type == 'documentMessage' ? 'Documento' : type == 'contactMessage' ? 'Contato' : type == 'locationMessage' ? 'Localização' : info.message?.reactionMessage?.text ? `Reação '${info.message.reactionMessage.text}'` : 'Texto';

/* Console: Comandos & Mensagens */
if(!isGroup && isCmd) eventLog('Comando', {user: pushname, group: '', isGroup: false, messageType: MessageType, date: dattofc, time: hourofc, content: prefix + command, messageType: MessageType});
if(!isGroup && !isCmd && !info.key.fromMe) eventLog('Mensagem', {user: pushname, group: '', isGroup: false, date: dattofc, time: hourofc, content: (body.length > 20 ? body.slice(0, 20) + "..." : body).replaceAll("\n", " "), messageType: MessageType});
if (!isCmd && isGroup && !info.key.fromMe) eventLog('Mensagem', {user: pushname, group: groupName, isGroup: true, date: dattofc, time: hourofc, content: (body.length > 20 ? body.slice(0, 20) + "..." : body).replaceAll("\n", " "), messageType: MessageType});
if (isCmd && isGroup) eventLog('Comando', {user: pushname, group: groupName, isGroup: true, date: dattofc, time: hourofc, content: prefix + command, messageType: MessageType});

/* Jogo da Velha */
async function startJogoDaVelha() {
   if(joguinhodavelhajs2.includes(from) || joguinhodavelhajs.includes(sender)) {
     const cmde = budy.toLowerCase().split(" ")[0] || "";
     let arrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
     if(fs.existsSync(`./arquivos/database/groups/games/tictactoe/db/${from}.json`)) {
       const boardnow = setGame(`${from}`);
       if(budy == "Cex") return reply("why");
       if(budy.toLowerCase() == "s" || budy.toLowerCase() == "sim" || budy.toLowerCase() == "ok") {
        if(boardnow.O == sender.replace("@s.whatsapp.net", "")) {
            if(boardnow.status) return;
            const matrix = boardnow._matrix;
            boardnow.status = true;
            fs.writeFileSync(`./arquivos/database/groups/games/tictactoe/db/${from}.json`, JSON.stringify(boardnow, null, 2));
            const chatAccept = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*\n—\n🚨 Explicação: _O(a) jogador '@${boardnow.X}' está denominada com emoji 'X', já o 2° jogador(a) que seria o(a) '@${boardnow.O}' está denominado(a) o emoji de círculo._\n• Começou a disputa! Quem irá decidir a primeira jogada é você: *'@${boardnow.turn == "X" ? boardnow.X : boardnow.O}*'\n—\n${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}\n${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}\n${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}`;
            mention(chatAccept);
        }
     } else if(budy.toLowerCase() == "n" || budy.toLowerCase() == "não" || budy.toLowerCase() == "no") {
        if(boardnow.O == sender.replace("@s.whatsapp.net", "")) {
        if(boardnow.status) return reply(`O jogo começou ou já existe uma partida aberta neste grupo! Por favor, caso ninguém esteja jogando ou houve um erro desconhecido na função, entre em contato com o criador ou solicite à um adm para usar o  comando '${prefix}resetvelha' no grupo.`);
        DLT_FL(`./arquivos/database/groups/games/tictactoe/db/${from}.json`);
        mention(`Nossa @${boardnow.X}, infelizmente o seu oponente não aceitou seu desafio!, ❌😕`);
        joguinhodavelhajs.splice([]);
        fs.writeFileSync('./arquivos/database/groups/games/tictactoe/ttt-player1.json', JSON.stringify(joguinhodavelhajs))
        joguinhodavelhajs2.splice([]);
        fs.writeFileSync('./arquivos/database/groups/games/tictactoe/ttt-player2.json', JSON.stringify(joguinhodavelhajs2));
     }
   }
}

if(arrNum.includes(cmde)) {
   const boardnow = setGame(`${from}`);
   if(!boardnow.status) return await reply(`Parece que seu oponente não aceitou o desafio ainda.`)
   if((boardnow.turn == "X" ? boardnow.X : boardnow.O) != sender.replace("@s.whatsapp.net", "")) return;
   const moving = validmove(Number(budy), `${from}`);
   const matrix = moving._matrix;
   if(moving.isWin) {
     if(moving.winner == "SERI") {
        await reply(`Ocorreu um empate! 😨 Os dois ganharam, meus parabéns! Porque vocês não iniciam outra partida para tirar a limpo, quem é o melhor?`);
        await DLT_FL(`./arquivos/database/groups/games/tictactoe/db/${from}.json`);
        joguinhodavelhajs.splice([])
        fs.writeFileSync('./arquivos/database/groups/games/tictactoe/ttt-player1.json', JSON.stringify(joguinhodavelhajs)) 
        joguinhodavelhajs2.splice([])
        fs.writeFileSync('./arquivos/database/groups/games/tictactoe/ttt-player2.json', JSON.stringify(joguinhodavelhajs2))
        return;
     }
     const abt = Math.ceil(Math.random() + 4000);
     const winnerJID = moving.winner == "O" ? moving.O : moving.X;
     const looseJID = moving.winner == "O" ? moving.X : moving.O;
     setTimeout(() => {
        if(fs.existsSync("./arquivos/database/groups/games/tictactoe/db/" + from + ".json")) {
            DLT_FL("./arquivos/database/groups/games/tictactoe/db/" + from + ".json");
            reply(`O *jogo da velha* foi cancelado por falta de movimentação no tabuleiro ou o desafiado não aceitou no prazo de 5 minutos.`);
        } else {
          console.log(colors.red(time2), colors.magenta("[JOGO DA VELHA - EXPIRADO]"), colors.red(`ID: ${from}`));
        }
        joguinhodavelhajs.splice([])
        fs.writeFileSync('./arquivos/database/groups/games/tictactoe/ttt-player1.json', JSON.stringify(joguinhodavelhajs))
        joguinhodavelhajs2.splice([])
        fs.writeFileSync('./arquivos/database/groups/games/tictactoe/ttt-player2.json', JSON.stringify(joguinhodavelhajs2))
     }, 300000) // 5 minutos após...
     await mention(`Parabéns *@${winnerJID}*, você ganhou a partida do jogo da velha! 😍 Mas, parabéns aos ambos jogadores, vocês foram bem, mas perder não é o fim, perder é um começo de uma vitória em sua vida.. Não desista por uma pequena derrota! 💜🎯`)   
     DLT_FL(`./arquivos/database/groups/games/tictactoe/db/${from}.json`);
     joguinhodavelhajs.splice([])
     fs.writeFileSync('./arquivos/database/groups/games/tictactoe/db/ttt-player1.json', JSON.stringify(joguinhodavelhajs)) 
     joguinhodavelhajs2.splice([])
     fs.writeFileSync('./arquivos/database/groups/games/tictactoe/db/ttt-player2.json', JSON.stringify(joguinhodavelhajs2))
   } else {
     mention(`*『 🎮 Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸ 🕹️ 』*\n—\n*@${boardnow.X}* VS @${boardnow.O}\n• Agora é a vez do jogador(a): @${moving.turn == "X" ? moving.X : moving.O}\n—\n${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}\n${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}\n${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}`);
  }
} 
} 
}

startJogoDaVelha() /* Jogo da Velha */

/* Matrimônio / Namoro */
if(budy2.toLowerCase() === "s" || budy2.toLowerCase() === "sim") {
   if(JSON.stringify(namoro2).includes(sender) && namoro2[namoro2.map(i => i.id).indexOf(sender)].idgp == from && isGroup) {
     C14 = namoro2.map(i => i.id).indexOf(sender);
     C12 = namoro1.map(i => i.usu1).indexOf(namoro2[C14].pedido + "@s.whatsapp.net");
     namoro1[C12].namorados = true;
     fs.writeFileSync("./arquivos/database/func/namoro1.json", JSON.stringify(namoro1, null, 2));
     namoro1.push({usu1: sender, usu2: namoro2[C14].pedido, namorados: true, idgp: from, hora: hourofc, data: dattofc});
     fs.writeFileSync("./arquivos/database/func/namoro1.json", JSON.stringify(namoro1, null, 2));
     namoro2.splice(C14, 1),
     fs.writeFileSync("./arquivos/database/func/namoro2.json", JSON.stringify(namoro2));
     mention(`🥳 Felicitações @${namoro1[C12].usu1.split('@')[0]}! O (a) seu grande amor, @${sender.split('@')[0]}, aceitou o seu pedido de namoro.\nSeu par pode ser consultado no comando: ${prefix}minhadupla`);
   }
}

if(budy2.toLowerCase() === "n" || budy2.toLowerCase().replace("ã", "a") === "nao") {
    if(JSON.stringify(namoro2).includes(sender) && namoro2[namoro2.map(i => i.id).indexOf(sender)].idgp == from && isGroup) {
        C14 = namoro2.map(i => i.id).indexOf(sender);
        C12 = namoro1.map(i => i.usu1).indexOf(`${namoro2[C14].pedido}@s.whatsapp.net`);
        mention(`Sinto muito @${namoro1[C12].usu1.split('@')[0]}! O (a) @${sender.split('@')[0]} não te ama, deve está confuso(a) ou não preparado(a) e por isso não aceitou o seu pedido de namoro. 😦`);
        namoro1.splice(C12, 1);
        fs.writeFileSync("./arquivos/database/func/namoro1.json", JSON.stringify(namoro1, null, 2));
        namoro2.splice(C14, 1);
        fs.writeFileSync("./arquivos/database/func/namoro2.json", JSON.stringify(namoro2));
    }
}

/* Mutar (proibir o participante de enviar mensagem e remover) */
if(!muted.some(i => i.grupo === from) && isGroup) {
    muted.push({grupo: from, usus: []});
    fs.writeFileSync("./arquivos/database/groups/muted.json", JSON.stringify(muted, null, 2));
}
  
if(isGroup && muted[muted.map(i => i.grupo).indexOf(from)].usus.includes(sender)) {
    await yurizin.sendMessage(from, {text: `🤫 Hmm @${sender.split("@")[0]}, achou que ia passar despercebido? Achou errado lindo(a)! Você está sendo removido por enviar mensagem, sendo que você está mutado neste grupo.`, mentions: [sender]}, {quoted: info});
    await yurizin.sendMessage(from, {delete: {remoteJid: from, fromMe: false, id: info.key.id, participant: sender}});
    await yurizin.groupParticipantsUpdate(from, [sender], 'remove');
    /* Após a remoção do participante mutado, automaticamente ele vai ser removido da lista de usuários mutados do grupo. 🌟 */
    muted[muted.map(i => i.grupo).indexOf(from)].usus.splice(sender);
    fs.writeFileSync("./arquivos/database/groups/muted.json", JSON.stringify(muted, null, 2));
}

/* Contador de Mensagens */
const groupIdscount = [];
for(let obj of countMessage) {   groupIdscount.push(obj.groupId) };
var numbersIds = []
if(isGroup && groupIdscount.indexOf(from) >= 0) {
    var ind = groupIdscount.indexOf(from)
    for(let obj of countMessage[ind].numbers) { numbersIds.push(obj.id) };
    if(numbersIds.indexOf(sender) >=0) {
       var indnum = numbersIds.indexOf(sender);
       var RSM_CN = countMessage[ind].numbers[indnum];
       type == "stickerMessage" ? "" : RSM_CN.messages += isCmd ? 0 : 1;
       type == "stickerMessage" ? "" : RSM_CN.cmd_messages += isCmd ? 1 : 0;
       type == "stickerMessage" ? "" : RSM_CN.aparelho = adivinha;
       RSM_CN.figus += type == "stickerMessage" ? 1 : 0;
       fs.writeFileSync('./settings/media/countmsg.json', JSON.stringify(countMessage, null, 2)+ '\n');
    } else {
       const messages = isCmd ? 0 : 1;
       const cmd_messages = isCmd ? 1 : 0;
       var figus = type == "stickerMessage" ? 1 : 0;
       countMessage[ind].numbers.push({ id: sender, messages: messages,cmd_messages: cmd_messages, aparelho: adivinha, figus: figus });
       fs.writeFileSync('./settings/media/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n');
    }
} else if(isGroup) {
    countMessage.push({ groupId: from, numbers: [{ id: sender, messages: 2, figus: 0, cmd_messages: isCmd ? 1 : 0, aparelho: adivinha }] })
    fs.writeFileSync('./settings/media/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n');
}

/* Limpar os membros que já saíram ou não participam mais do grupo: */
async function ClearMembersInactive() {
    var RD_CNT = countMessage[countMessage.map(i => i.groupId).indexOf(from)].numbers;
    CNT1 = [];
    for (i of groupMembers) {
        CNT1.push(i.id)
    }; 
    CNT = [];
    for (i of RD_CNT) {
        if(!CNT1.includes(i.id)) CNT.push(i)}
            for (i of CNT) {
               RD_CNT.splice(RD_CNT.map(i => i.id).indexOf(i.id), 1);
            }
            fs.writeFileSync("./settings/media/countmsg.json", JSON.stringify(countMessage, null, 2));
}

/* Lista de Comandos */
const listCases = () => {
    const fileContent = fs.readFileSync("index.js").toString();
    const caseNames = fileContent.match(/case\s+'(.+?)'/g);
    if (caseNames) {
       return caseNames.map((caseName, index) => `${index + 1}. ${caseName.match(/'(.+?)'/)[1]}`).join('\n');
    } else {
       return "Nenhuma case encontrada."
    }
}

/* -Nescessita de um uso de uma Array ('[]') e escolhe um de forma aleatória. */
const pickRandom = (string) => string[Math.floor(Math.random() * string.length)];

/* Execuções dentro da Source, somente os proprietários podem usar. Observação: Esta parte de execução só roda códigos sem async, ou seja, await etc... */
if(budy.startsWith('>')){
   try {
     if(info.key.fromMe) return;
     if(!SoDono && !isnit && !issupre && !ischyt && !issupre && !ischyt) return;
     return yurizin.sendMessage(from, {text: JSON.stringify(eval(budy.slice(2)),null,'\t')}, {quoted: info})
      .catch((errorMessage) => {
        return reply(String(errorMessage));
      })
   } catch(errorMessage) {
     return reply(String(errorMessage));
   }
}

// Observação: Neste código você pode optar o uso do async(await) ou não...
if(budy.startsWith('(>')){
   try {
     if(info.key.fromMe) return   ;
     if(!SoDono && !isnit && !issupre && !ischyt && !issupre && !ischyt) return;
     var konsol = budy.slice(3);
     Return = (sul) => {
        var sat = JSON.stringify(sul, null, 2);
        bang = util.format(sat);
        if(sat == undefined) {
           bang = util.format(sul);
        }
        return yurizin.sendMessage(from, {text: bang}, {quoted: info})
     }
     yurizin.sendMessage(from, {text: util.format(eval(`(async () => { ${konsol} })()`))}, {quoted: info}).catch((error) => { 
        return reply(error);
     })
   } catch(errorMessage) {
     return reply(errorMessage);
   }
}

/* Execute dentro do Terminal, sem a nescessidade de desligar a Source. */
if(body.startsWith('$')) {
   if(info.key.fromMe) return 
   if(!SoDono && !isnit) return 
   exec(q, (err, stdout) => {
      if(err) return reply(`${err}`)
      if(stdout) {
        reply(stdout)
      }
   })
}

/*  Anti Imagem */
if(isAntiImg && isBotGroupAdmins && type == 'imageMessage') {
   if(info.key.fromMe) return;
   if(isGroupAdmins) return;
   if(isAllowedParticipant) return;
   if(dataGp[0].antiimg?.message != "0") {
     await yurizin.sendMessage(from, { text: dataGp[0].antiimg?.message }, {quoted: info});
   }
   setTimeout(async() => {
     await yurizin.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}});
   }, 500);
   if(!JSON.stringify(groupMembers).includes(sender)) return  
   await yurizin.groupParticipantsUpdate(from, [sender], 'remove');
}

/* Anti Sticker */
if(isAntiSticker && isBotGroupAdmins && type == 'stickerMessage') {
   if(info.key.fromMe) return
   if(isGroupAdmins) return;
   if(isAllowedParticipant) return;
   await yurizin.sendMessage(from, {text: mess.messageProhibitedDetUser()}, {quoted: info});
   setTimeout(async() => {
     await yurizin.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}});
   }, 500)
   if(!JSON.stringify(groupMembers).includes(sender)) return;
   await yurizin.groupParticipantsUpdate(from, [sender], 'remove');
}

/* Anti Documento */
if(Antidoc && isBotGroupAdmins && type == 'documentMessage') {
   if(info.key.fromMe) return
   if(isGroupAdmins) return;
   if(isAllowedParticipant) return;
   if(dataGp[0].antidoc.message != "0") {
     await yurizin.sendMessage(from, {text: dataGp[0].antidoc.message}, {quoted: info});
   }
   setTimeout(async() => {
     await yurizin.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
   }, 500);
   if(!JSON.stringify(groupMembers).includes(sender)) return;
   await yurizin.groupParticipantsUpdate(from, [sender], 'remove');
}

let isTrueFalse = Array('tiktok', 'facebook','instagram','twitter','ytmp3','ytmp4','play', 'kwai', 'playdoc', 'playvid').some(item => item === command)

/* Anti Enquete */
if(isAntiPoll && isBotGroupAdmins && type == 'pollCreationMessageV3') {
   if(info.key.fromMe) return;
   if(isGroupAdmins) return;
   await mention(mess.pollMessageDetect(sender));
   setTimeout(async() => {
     await yurizin.sendMessage(from, {delete: {remoteJid: from, fromMe: false, id: info.key.id, participant: sender}});
   }, 500);
}

/* Anti Links */
if(isUrl(PR_String) && isAntiLinkHard && isGroup && isBotGroupAdmins) {
   if(info.key.fromMe) return;
   if(isGroupAdmins) return;
   if(isAllowedParticipant) return;
   if(Procurar_String.includes("chat.whatsapp.com")) {
     if(Procurar_String.match(await yurizin.groupInviteCode(from))) return await mention(`⚠ ️O URL encaminhado pelo(a) participante *[@${sender.split("@")[0]}]* é o link do nosso grupo, então ele não será removido. Caso seja outro URL, ele não passará ileso da punição.`);
   }
   setTimeout(async() => {
     await yurizin.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
   }, 500)
   if(!JSON.stringify(groupMembers).includes(sender)) return;
   await yurizin.groupParticipantsUpdate(from, [sender], 'remove');
}

if(isUrl(PR_String) && isAntilinkgp && isGroup && isBotGroupAdmins) {
    if(Procurar_String.includes("chat.whatsapp.com/")){
        if(isBot) return;
        if(isGroupAdmins) return;
        if(isAllowedParticipant) return;
        if(Procurar_String.match(await yurizin.groupInviteCode(from))) return await mention(`⚠ ️O URL encaminhado pelo(a) participante *[@${sender.split("@")[0]}]* é o link do nosso grupo, então ele não será removido. Caso seja outro URL, ele não passará ileso da punição.`);
        setTimeout(async() => {
          await yurizin.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}});
        }, 500);
        if(!JSON.stringify(groupMembers).includes(sender)) return;
        await yurizin.groupParticipantsUpdate(from, [sender], 'remove');
   }
}

/* Anti Notas */
if(isAntiNotas && budy2.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi) && isBotGroupAdmins && !isGroupAdmins && !SoDono && !info.message?.reactionMessage?.text && budy2.length > 20) {
   if(isAllowedParticipant) return;
   let verificar = budy2.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi);
   if(verificar && budy.length < 100) return  
   setTimeout(async() => {
     await yurizin.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}});
   }, 500);
   if(!JSON.stringify(groupMembers).includes(sender)) return  
   await yurizin.groupParticipantsUpdate(from, [sender], 'remove');
}

/* Anti Vídeo */
if(isAntiVid && isBotGroupAdmins && type == 'videoMessage') {
   if(isGroupAdmins) return;
   if(isAllowedParticipant) return;
   if(dataGp[0].antivideo.message == "0") {
     await yurizin.sendMessage(from, {text: mess.messageProhibitedDetUser()}, {quoted: info});
   } else {
     await yurizin.sendMessage(from, {text: dataGp[0].antivideo.message}, {quoted: info});
   }
   setTimeout(async() => {
     await yurizin.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}});
   }, 500);
   if(!JSON.stringify(groupMembers).includes(sender)) return;
   await yurizin.groupParticipantsUpdate(from, [sender], 'remove');
}

/* Anti Áudio */
if(isAntiAudio && isBotGroupAdmins && type == 'audioMessage') {
   if(isGroupAdmins) return;
   if(isAllowedParticipant) return;
   await yurizin.sendMessage(from, {text: mess.messageProhibitedDetUser()}, {quoted: info});
   setTimeout(async() => {
     await yurizin.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}});
   }, 500);
   if(!JSON.stringify(groupMembers).includes(sender)) return
   await yurizin.groupParticipantsUpdate(from, [sender], 'remove');
}

/* Anti Ligações */
if(!isGroup && isAnticall) {
  yurizin.ws.on('CB:call', async (B) => {
  var msgcallblock = `./arquivos/database/func/call-msg_block-${sender}.json`  
  if(!fs.existsSync(msgcallblock)) {
    fs.writeFileSync(msgcallblock, JSON.stringify(mess.antiCalls(), null, 2));
    var msgcallbl = JSON.parse(fs.readFileSync(msgcallblock));
    if(B.content[0].tag == 'offer') {
       await yurizin.sendMessage(B.content[0].attrs['call-creator'], { text: msgcallbl }).then(async() => { 
         await yurizin.updateBlockStatus(B.content[0].attrs['call-creator'], "block");
         DLT_FL(msgcallblock);
       })
    }}
  })
}

/* Proibição de uso de comandos em conversas privadas no WhatsApp */
var USUARIOS_BLOQ = []
if(isAntiPv && !USUARIOS_BLOQ.includes(sender)) {
   if(!isGroup && !SoDono && !isnit && !isPremium) {
     await sleep(2500);
     reply(definitions.AntiPrivado["message"].replace('#nome#', pushname));
     setTimeout(async () => { 
        await yurizin.updateBlockStatus(sender, 'block')
     }, 2000);
   }
   USUARIOS_BLOQ.push(sender);
} 

var MSG_ANTPV2_ENC = []
if(!isGroup && !isPremium && !SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe && isAntiPv2 && !MSG_ANTPV2_ENC.includes(sender)) {
    MSG_ANTPV2_ENC.push(sender);
    return reply(definitions.AntiPrivado2["message"])
}

if(!isGroup && !isPremium && !SoDono && !info.key.fromMe && isAntiPv3) return

/* Sistema de Leveling */
if(body != undefined && !info.message?.reactionMessage?.text && !JSON.stringify(level2).includes(sender) && isGroup) {
   level2.push({id: sender, nick: pushname, level: 1, contador: 0});
   fs.writeFileSync("./arquivos/database/func/users/leveling.json", JSON.stringify(level2));
}

if(body != undefined && !info.message?.reactionMessage?.text && JSON.stringify(level2).includes(sender) && isGroup && isLevelingOn) {
AB = level2.map(i => i.id).indexOf(sender);
level2[AB].contador += 1
level2[AB].nick = pushname
fs.writeFileSync("./arquivos/database/func/users/leveling.json", JSON.stringify(level2))
switch(level2[AB].contador) {
case 100: case 200: case 300: case 400: case 500: case 600: case 700: case 800: case 900: case 1200: case 1500: case 1800: case 2100: case 2700: case 3300: case 3900: case 4500: case 5000: case 5500: case 6500: case 7500: case 9000: case 10500: case 12000: case 13500: case 15000: case 20000: case 25000: case 30000: case 35000: case 40000: case 50000: case 60000: case 70000: case 80000: case 90000: case 100000: case 150000: case 200000: case 300000: case 400000: case 500000: case 1000000: case 1500000: case 2000000: case 5000000:
var newlevel = level2[AB].contador + 1
if(newlevel < 100) newpatente = "Bronze I"
if(newlevel >= 100 && newlevel < 200) newpatente = "Bronze II"
if(newlevel >= 200 && newlevel < 300) newpatente = "Bronze III"
if(newlevel >= 300 && newlevel < 400) newpatente = "Prata I"
if(newlevel >= 400 && newlevel < 500) newpatente = "Prata II"
if(newlevel >= 500 && newlevel < 600) newpatente = "Prata III"
if(newlevel >= 600 && newlevel < 700) newpatente = "Ouro I"
if(newlevel >= 700 && newlevel < 800) newpatente = "Ouro II"
if(newlevel >= 800 && newlevel < 900) newpatente = "Ouro III"
if(newlevel >= 900 && newlevel < 1200) newpatente = "Ouro IV"
if(newlevel >= 1200 && newlevel < 1500) newpatente = "Platina I"
if(newlevel >= 1500 && newlevel < 1800) newpatente = "Platina II"
if(newlevel >= 1800 && newlevel < 2100) newpatente = "Platina III"
if(newlevel >= 2100 && newlevel < 2700) newpatente = "Platina IV"
if(newlevel >= 2700 && newlevel < 3300) newpatente = "Diamante I"
if(newlevel >= 3300 && newlevel < 3900) newpatente = "Diamante II"
if(newlevel >= 3900 && newlevel < 4500) newpatente = "Diamante III"
if(newlevel >= 4500 && newlevel < 5000) newpatente = "Diamante IV"
if(newlevel >= 5000 && newlevel < 5500) newpatente = "Paladino I"
if(newlevel >= 5500 && newlevel < 6500) newpatente = "Paladino II"
if(newlevel >= 6500 && newlevel < 7500) newpatente = "Paladino III"
if(newlevel >= 7500 && newlevel < 9000) newpatente = "Paladino IV"
if(newlevel >= 9000 && newlevel < 10500) newpatente = "Mestre I️‍"
if(newlevel >= 10500 && newlevel < 12000) newpatente = "Mestre II"
if(newlevel >= 12000 && newlevel < 13500) newpatente = "Mestre III️‍"
if(newlevel >= 13500 && newlevel < 15000) newpatente = "Mestre IV️"
if(newlevel >= 15000 && newlevel < 20000) newpatente = "Mestre V️‍"
if(newlevel >= 20000 && newlevel < 25000) newpatente = "Desafiante I"
if(newlevel >= 25000 && newlevel < 30000) newpatente = "Desafiante II"
if(newlevel >= 30000 && newlevel < 35000) newpatente = "Desafiante III"
if(newlevel >= 35000 && newlevel < 40000) newpatente = "Desafiante IV"
if(newlevel >= 40000 && newlevel < 50000) newpatente = "Desafiante V"
if(newlevel >= 50000 && newlevel < 60000) newpatente = "Usuário Superior I"
if(newlevel >= 60000 && newlevel < 70000) newpatente = "Usuário Superior II"
if(newlevel >= 70000 && newlevel < 80000) newpatente = "Mestre Supremo I"
if(newlevel >= 80000 && newlevel < 90000) newpatente = "Mestre Supremo II"
if(newlevel >= 90000 && newlevel < 100000) newpatente = "Mestre Supremo III"
if(newlevel >= 100000 && newlevel < 150000) newpatente = "Conquistador I️"
if(newlevel >= 150000 && newlevel < 200000) newpatente = "Conquistador II️"
if(newlevel >= 200000 && newlevel < 300000) newpatente = "Conquistador III️"
if(newlevel >= 300000 && newlevel < 400000) newpatente = "Desbravador I️"
if(newlevel >= 400000 && newlevel < 500000) newpatente = "Desbravador II️"
if(newlevel >= 500000 && newlevel < 1000000) newpatente = "Desbravador III️"
if(newlevel >= 1000000 && newlevel < 1500000) newpatente = "Grande Mestre I"
if(newlevel >= 1500000 && newlevel < 2000000) newpatente = "Grande Mestre II"
if(newlevel >= 2000000 && newlevel < 5000000) newpatente = "Grande Mestre III"
if(newlevel >= 5000000 && newlevel < 10000000) newpatente = "Supremacy X"
if(newlevel >= 10000000) newpatente = "Veterano"
level2[AB].level += 1
fs.writeFileSync("./arquivos/database/func/users/leveling.json", JSON.stringify(level2));
try {u = await yurizin.profilePictureUrl(sender)} catch(erro) {pr = await axios.get(`https://tinyurl.com/api-create.php?url=${images['defaultProfile'].value}`); u = pr.data}
gerarBuffer = await getBuffer(u); photoUser = await new uploader().pixhost(gerarBuffer)
anu = await axios.get(`https://tinyurl.com/api-create.php?url=${images['Level'].value}`)
await yurizin.sendMessage(from, {image: {url: API_URL+`/api/photomod/levelup?foto=${photoUser}&nome=${pushname}&lvb=${level2[level2.map(i => i.id).indexOf(sender)].level - 1}&lva=${level2[level2.map(i => i.id).indexOf(sender)].level}&fundo=${anu.data}`}, caption: `🎉 Parabéns *@${sender.split("@")[0]}*, você acaba de subir de level.\n• Novo level foi alcançado por completar *${level2[AB].contador} XP.*\nNova patente desbloqueada, você agora é *${newpatente}*`, mentions: [sender]}, {quoted: info});
break
case 10000000:
BC = level2.map(i => i.id).indexOf(sender)
level2[BC].level += 1
fs.writeFileSync("./arquivos/database/func/users/leveling.json", JSON.stringify(level2))
try {u2 = await yurizin.profilePictureUrl(sender)} catch(erro) {pr = await axios.get(`https://tinyurl.com/api-create.php?url=${images['defaultProfile'].value}`); u2 = pr.data}
gerarBuffer2 = await getBuffer(u2); photoUser2 = await new uploader().pixhost(gerarBuffer2)
anu = await axios.get(`https://tinyurl.com/api-create.php?url=${images['Level'].value}`)
await yurizin.sendMessage(from, {image: {url: API_URL+`/api/photomod/levelup?foto=${photoUser2}&nome=${pushname}&lvb=${level2[level2.map(i => i.id).indexOf(sender)].level - 1}&lva=${level2[level2.map(i => i.id).indexOf(sender)].level}&fundo=${anu.data}`}, caption: `🎉 Parabéns *@${sender.split("@")[0]}*, você completou com sucesso 10M de XP, possuindo assim o título de *Veterano 🎩*\n–\n• Todos os níveis daqui pra frente serão contados a cada 1M de XP... Nossa equipe se orgulha de coroar você, depois de tanto esforço e desempenho, após muito tempo de uso de nosso sistemas. ${tempo}!`, mentions: [sender]}, {quoted: info});
break
case 10000000: case 11000000: case 12000000: case 13000000: case 14000000: case 15000000: case 16000000: case 17000000: case 18000000: case 19000000: case 20000000: case 21000000: case 22000000: case 23000000: case 24000000: case 25000000: case 26000000: case 27000000: case 28000000: case 29000000: case 30000000:
CD = level2.map(i => i.id).indexOf(sender)
level2[CD].level += 1
fs.writeFileSync("./arquivos/database/func/users/leveling.json", JSON.stringify(level2))
try {u3 = await yurizin.profilePictureUrl(sender)} catch(erro) {pr = await axios.get(`https://tinyurl.com/api-create.php?url=${images['defaultProfile'].value}`); u3 = pr.data}
gerarBuffer3 = await getBuffer(u3); photoUser3 = await new uploader().pixhost(gerarBuffer3)
anu = await axios.get(`https://tinyurl.com/api-create.php?url=${images['Level'].value}`)
await yurizin.sendMessage(from, {image: {url: API_URL+`/api/photomod/levelup?foto=${photoUser3}&nome=${pushname}&lvb=${level2[level2.map(i => i.id).indexOf(sender)].level - 1}&lva=${level2[level2.map(i => i.id).indexOf(sender)].level}&fundo=${anu.data}`}, caption: `*🎉 SUPREME LEVEL UP! 🎖️*\nMeus parabéns querido usuário veterano *@${sender.split("@")[0]}*.\n• Sua experiência acaba de levar a quantidade total de XP à triplicar. Agora você tem *${level2[CD].contador} XP*\n–\n*Obs:* Sua patente atual continua sendo a mesma, pois você chegou à maior.`, mentions: [sender]}, {quoted: info});
break
}
}

/* Sistemas que pertencem ao RG_SCOINS */
const RG_SCOINS = JSON.parse(fs.readFileSync("./arquivos/database/func/coins.json"));
const isModoCoins = isGroup ? dataGp[0].isModoCoins : undefined
const ID_G_COINS = RG_SCOINS.findIndex(i => i.grupo === from)
const ID_USU_COINS = RG_SCOINS[ID_G_COINS]?.usus?.findIndex(i => i.id === sender);

function CoinsUpdate(index){fs.writeFileSync("./arquivos/database/func/coins.json", JSON.stringify(index, null, 2) + "\n")}

const SYSTEM_COIN = {
  
  AdicionarCoins: async function(user, quant) {
    CoinsUser_ = RG_SCOINS[ID_G_COINS].usus.find(i => i.id === user);
    if(!CoinsUser_) return reply("O(a) usuário(a) nunca enviou uma mensagem neste grupo! Então não é possível adicionar ou transferir coins à um membro que não possuí registro!");
    CoinsUser_["coins"] += quant;
    CoinsUpdate(RG_SCOINS);
  },
  
  transferCoins: async function(transferidor, recebidor, quantidade) {
    DM_ = RG_SCOINS[ID_G_COINS].usus.find(i => i.id === transferidor)
    DM_2 = RG_SCOINS[ID_G_COINS].usus.find(i => i.id === recebidor)
    if((DM_?.coins || 0) < quantidade) return mention(`A quantidade que você tem é inferior a que você deseja transferir ao usuário: @${recebidor.split("@")[0]}`)
    if(!DM_2) return mention(`O(a) usuário(a) '@${recebidor.split("@")[0]}' nunca enviou uma mensagem neste grupo! Então não é possível adicionar ou transferir coins à um usuário não registrado no meu sistema!`);
    DM_["coins"] -= quantidade;
    DM_2["coins"] += quantidade;
    CoinsUpdate(RG_SCOINS);
  },
  
  Adicionar_2: async function(A, Q, X, X2) {
    DM_ = RG_SCOINS[ID_G_COINS].usus.find(i => i.id === A);
    if(!DM_) return reply("O(a) usuário(a) nunca enviou uma mensagem neste grupo! Então não é possível atualizar a carteira!");
    DM_["coins"] += Q;
    DM_[X] = X2
    CoinsUpdate(RG_SCOINS);
  },
  
  RemoverCoins: async function(user, quant) {
    CoinsUser = RG_SCOINS[ID_G_COINS].usus.find(i => i.id === user)
    if(!CoinsUser) return reply("O(a) usuário(a) nunca enviou uma mensagem neste grupo! Então não é possível remover coins de membro inativo que não possuí registro!");
    if((CoinsUser?.coins || 0) < quant) return reply(`O usuário possuí '${CoinsUser?.coins} S-Coins', este valor não é suficiente para realizar a transação de remoção de ${quant}.`);
     CoinsUser["coins"] -= quant;
     CoinsUpdate(RG_SCOINS);
  },
  
  VerificarCampo: function(user, parameter) {
     return RG_SCOINS[ID_G_COINS].usus.find(i => i.id === user)[parameter] || null;
  }

}
  
  if(isModoCoins && isGroup && isBotGroupAdmins && VRF_JSON_GRUPO && !info.key.fromMe) {
  
  if(!RG_SCOINS.some(i => i.grupo === from)) {
    RG_SCOINS.push({grupo: from, usus: [{id: sender, coins: 0, data: 0, chances: {cassino: 0, minerar: 0, bet: 0}}]})
  CoinsUpdate(RG_SCOINS);
  } else if(RG_SCOINS.some(i => i.grupo === from) && !RG_SCOINS[ID_G_COINS]?.usus?.some(i => i?.id === sender)) {
    RG_SCOINS[ID_G_COINS].usus.push({id: sender, coins: 0, data: 0, chances: {cassino: 0, minerar: 0, bet: 0}})
    CoinsUpdate(RG_SCOINS);
  }
  
if(isCmd && !info.message?.reactionMessage?.text && dattofc != SYSTEM_COIN.VerificarCampo(sender, "data")) {
    await mention(`${tempo}, usuário(a): @${sender.split('@')[0]}! Você ganhou *35 S-Coins* com a sua primeira interação do dia comigo! Você tem diversas chances de se divertir no grupo. 🌟💰`);
    SYSTEM_COIN.Adicionar_2(sender, 35, "data", dattofc);
       RG_US = RG_SCOINS[ID_G_COINS].usus.find(i => i.id === sender);
       Object.assign(RG_US.chances, {"cassino": 0, "minerar": 0, "bet": 0});
       CoinsUpdate(RG_SCOINS);
  }
}

  if(isGroup && fs.existsSync(`./arquivos/database/groups/games/anagrama/${from}.json`)){
    let dataA = JSON.parse(fs.readFileSync(`./arquivos/database/groups/games/anagrama/${from}.json`))
    if(budy.slice(0,4).toUpperCase() == dataA.palavraOriginal.slice(0,4).toUpperCase() && budy.toUpperCase() != dataA.palavraOriginal) return reply('Está perto...', {reagir: "💭"})
    if(budy.toUpperCase() == dataA.palavraOriginal) {
    
    await yurizin.sendMessage(from, {text: `🎉 Parabéns *${pushname}*, você acertou o anagrama apresentado, como recompensa você acaba de ganhar 5 S-Coins.\nA palavra original era: *${dataA.resposta}*. Estou iniciando o próximo jogo em 5s!`}, {"mentionedJid": [sender]}, {quoted: info})
    await SYSTEM_COIN.AdicionarCoins(sender, 5);
    fs.unlinkSync(`./arquivos/database/groups/games/anagrama/${from}.json`)		
    setTimeout(async() => {
    fs.writeFileSync(`./arquivos/database/groups/games/anagrama/${from}.json`, `${JSON.stringify(palavrasANA[Math.floor(Math.random() * palavrasANA.length)])}`)
    dataAB = JSON.parse(fs.readFileSync(`./arquivos/database/groups/games/anagrama/${from}.json`))
    yurizin.sendMessage(from, {text: `🌟😲 Decifre a palavra embaralhada abaixo, qual será a ordem correta?\n—\n• Anagrama: *${shuffle(dataAB.palavraOriginal)}*\n• Dica: ${dataAB.dica}`}, {quoted: selo})
    }, 5000)
    }}
    
    if(isGroup && fs.existsSync(`./arquivos/database/groups/games/quiz-animais/${from}.json`)){
    let dQ = JSON.parse(fs.readFileSync(`./arquivos/database/groups/games/quiz-animais/${from}.json`))
    if(budy.slice(0,4).toUpperCase() == dQ.original.slice(0,4).toUpperCase() && budy.toUpperCase() != dQ.original) return reply('está perto')
    if(budy.toUpperCase() == dQ.original) { 
    await yurizin.sendMessage(from,{text: `🎉 Parabéns *${pushname}*, você acertou, como recompensa você acaba de ganhar 5 S-Coins! O animal era: *${dQ.resposta}*.\n• Estou iniciando o próximo jogo em 5s!`}, {"mentionedJid": [sender]}, {quoted: info}) 
    await SYSTEM_COIN.AdicionarCoins(sender, 5);
    fs.unlinkSync(`./arquivos/database/groups/games/quiz-animais/${from}.json`)		
    setTimeout(async() => {
    fs.writeFileSync(`./arquivos/database/groups/games/quiz-animais/${from}.json`, `${JSON.stringify(quizanimais[Math.floor(Math.random() * quizanimais.length)])}`)
    dataQA = JSON.parse(fs.readFileSync(`./arquivos/database/groups/games/quiz-animais/${from}.json`))
    wew = await getBuffer(dataQA.foto)
    await yurizin.sendMessage(from, {image: wew, caption: `🤔 Pergunta: ${dataQA.question}`}, {quoted: info})
    }, 5000)
    }
    }
    
    if(isGroup && fs.existsSync(`./arquivos/database/groups/games/gartic/${from}.json`)){
    let perg_gartic = JSON.parse(fs.readFileSync(`./arquivos/database/groups/games/gartic/${from}.json`))
    if(budy.slice(0,4).toUpperCase() == perg_gartic.resposta.slice(0,4).toUpperCase() && budy.toUpperCase() != perg_gartic.resposta) return reply('Está perto!')
    if(budy.toUpperCase() == perg_gartic.resposta) { 
    await yurizin.sendMessage(from,{text: `*DESCOBERTO!* Parabéns ${pushname} como recompensa você acaba de ganhar 5 S-Coins. Iniciando o próximo jogo em 5 segundos.`}, {"mentionedJid": [sender]}, {quoted: info}); 
    await SYSTEM_COIN.AdicionarCoins(sender, 5);
    fs.unlinkSync(`./arquivos/database/groups/games/gartic/${from}.json`);
    setTimeout(async() => {
    fs.writeFileSync(`./arquivos/database/groups/games/gartic/${from}.json`, `${JSON.stringify(garticArchives[Math.floor(Math.random() * garticArchives.length)])}`)
    let dataGartic2 = JSON.parse(fs.readFileSync(`./arquivos/database/groups/games/gartic/${from}.json`))
    garticText = `👩🏼‍🏫 - A resposta é representada por um(a): ${dataGartic2.pergunta}\n📜 - A resposta supostamente começa com a(s) letra(s): "${dataGartic2.letra_inicial}"\n🤔 - Hmmm, contém traços? ${dataGartic2.contem_traços}\n–\n❓️ - *Não sabe a resposta?* _Peça ao adm do grupo para usar o comando *${prefix}revelargartic* para revelar a resposta correta da afirmação._`
    wew = await getBuffer(`${dataGartic2.imagem}`)
    await yurizin.sendMessage(from, {image: wew, caption: garticText}, {quoted: selo})
    }, 5000)
    }
    }
    
    if(isGroup && fs.existsSync(`./arquivos/database/groups/games/enigma/${from}.json`)){
    let enigmaData = JSON.parse(fs.readFileSync(`./arquivos/database/groups/games/enigma/${from}.json`))
    if(budy.slice(0,4).toUpperCase() == enigmaData.respostaEne.slice(0,4).toUpperCase() && budy.toUpperCase() != enigmaData.respostaEne) return reply('Está perto!')
    if(budy.toUpperCase() == enigmaData.respostaEne) { 
    yurizin.sendMessage(from,{text: `*ENIGMA RESOLVIDO!* Parabéns ${pushname}, como recompensa você acaba de ganhar 5 S-Coins.Iniciando o próximo jogo em 5 segundos.`}, {"mentionedJid": [sender]}, {quoted: info})
    await SYSTEM_COIN.AdicionarCoins(sender, 5);
    fs.unlinkSync(`./arquivos/database/groups/games/enigma/${from}.json`)	
    setTimeout(async() => {
    fs.writeFileSync(`./arquivos/database/groups/games/enigma/${from}.json`, `${JSON.stringify(enigmaArchive[Math.floor(Math.random() * enigmaArchive.length)])}`)
    enigmaD = JSON.parse(fs.readFileSync(`./arquivos/database/groups/games/enigma/${from}.json`))
    await yurizin.sendMessage(from, {text: `📜 - ${enigmaD.charada}\n–\n❓️ - *Não sabe a resposta?* _Peça ao adm do grupo para usar o comando *${prefix}revelarenigma* para revelar a resposta correta da enigma._`})
    }, 5000)
    }
    }
    
/* Detectar a fixação de Mensagens */
if (isx9 && type === "pinInChatMessage") {
    duration = info.message?.messageContextInfo?.messageAddOnDurationInSecs;
    fixedTime = (duration) => (duration === 0) ? "0" : (duration >= 30 * 24 * 60 * 60) ? "30 dias" : (duration >= 7 * 24 * 60 * 60) ? "7 dias" : (duration >= 24 * 60 * 60) ? "24 horas" : duration;
    action = fixedTime(duration) === "0" ? 'desfixar uma mensagem' : `fixar uma mensagem por *${fixedTime(duration)}*`;
    await yurizin.sendMessage(from, {text: `O(a) adminstrador(a) *@${sender.split("@")[0]}* acabou de ${action}.`, contextInfo: {forwardingScore: 50000, isForwarded: true, mentionedJid: [sender], remoteJid: info.key.remoteJid}});
}

if(isCmd && isBanned) return reply(mess.bannedUser())

/* --------- [ Limitação de Comandos ] --------- */
if (isGroup && isCmd && !isGroupAdmins && !SoDono && !isPremium && dataGp[0]?.Limitar_CMD) {
var TEMPO_A = Math.floor(Date.now() / 1000) 
var ID_G = Limit_CMD.findIndex(i => i.idgp === from)
var ID_U = Limit_CMD[ID_G]?.ids.findIndex(i => i.id === sender)
if(!JSON.stringify(Limit_CMD).includes(from) || ID_G < 0 && ID_U < 0) {
Limit_CMD.push({idgp: from, ids: [{id: sender, tempo: TEMPO_A}]})
fs.writeFileSync("./arquivos/database/func/limitarcmd.json", JSON.stringify(Limit_CMD, null, 2));
} else if(ID_G >= 0 && ID_U < 0) {
Limit_CMD[ID_G].ids.push({id: sender, tempo: TEMPO_A})
fs.writeFileSync("./arquivos/database/func/limitarcmd.json", JSON.stringify(Limit_CMD, null, 2));
}

if(ID_G >= 0 && ID_U >= 0) {
var TEMPO_D = Limit_CMD[ID_G].ids[ID_U].tempo;
var TEMPO_M = TEMPO_A - TEMPO_D
var TEMPO_D2 = parseInt(dataGp[0]?.Limit_tempo) || 60
if(TEMPO_M < TEMPO_D2) {
return reply(definitions['LimitCommand'].message.replaceAll("{rtime}", TimeCount(TEMPO_M)));
} else {
Limit_CMD[ID_G].ids[ID_U].tempo = TEMPO_A
fs.writeFileSync("./arquivos/database/func/limitarcmd.json", JSON.stringify(Limit_CMD, null, 2));
}
}
}

/* ----- [ Definições próprias do BOT criadas a partir das funções dada pela Baileys ] ---- */
yurizin.sendImageAsSticker = async (jid, path, options = {}) => {
    let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
    let buffer
        if (options && (options.packname || options.author)) {
         buffer = await writeExifImg(buff, options)
            } else {
         buffer = await imageToWebp(buff)
        }
    await yurizin.sendMessage(jid, { sticker: { url: buffer }, ...options})
    return buffer
}

/* ----------- [ Sistema de Aluguel ] ----------- */
let isCodeKey = Array('aluguel', 'alugueis', 'alugar', 'alugarbot', 'loja', 'dono').some(i => i === command);

if(isGroup && isModoAluguel && isCmd && !SoDono && !isCodeKey) {
if(!JSON.stringify(grupos).includes("Yuri-Bot-oficial")) {
grupos.push({id: "Yuri-Bot-oficial", gps: []})
fs.writeFileSync("./arquivos/database/groups/aluguel/grupos.json", JSON.stringify(grupos, null, 2))}
if(!JSON.stringify(grupos).includes(from)) {
grupos.push({id: from, limite: 5, validado: false})
fs.writeFileSync("./arquivos/database/groups/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
}
AB = grupos.map(i => i.id).indexOf(from)
if(grupos[AB].validado == false) {
if(grupos[AB].limite <= 1) {
grupos.splice(AB, 1)
fs.writeFileSync("./arquivos/database/groups/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
reply(`"⌛✨ O prazo de espera expirou! Como não houve interesse em adquirir uma chave de acesso, estou saindo do grupo...`)
await sleep(3000)
return await yurizin.groupLeave(from)
} else {
grupos[AB].limite -= 1
fs.writeFileSync("./arquivos/database/groups/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
return await mention(`"🔍🔒 Não localizei este grupo em meus registros! Se deseja obter acesso ou mais informações, por favor, entre em contato com o responsável: *@${nmrdn.split('@')[0]}*`)
}}}

if(chaves.length > 0) {caixa = []
for(k of chaves) {
if(budy2.toUpperCase() === k.key) {
caixa.push(k.key)
}
}
if(VerificarJSON(chaves, caixa[0])) {
AD = chaves.map(i => i.key).indexOf(caixa[0])
timeday = chaves[AD].dias
pessoa = chaves[AD].cliente
infinity = chaves[AD].dias > 0 ? false : true
if(!VerificarJSON(grupos, "Yuri-Bot-oficial")) {
grupos.push({id: "Yuri-Bot-oficial", gps: []})
fs.writeFileSync("./arquivos/database/groups/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
}
if(!VerificarJSON(grupos, from)) {
grupos.push({id: from, limite: 5, validado: true})
fs.writeFileSync("./arquivos/database/groups/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
} else {
GP = grupos.map(i => i.id).indexOf(from)
grupos[GP].validado = true
fs.writeFileSync("./arquivos/database/groups/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
}
if(infinity == false) {
if(chaves[AD].tipo == 1 && isGroup) {
if(!VerificarJSON(aluguel, from)) {
aluguel.push({id: from, nome: groupName, tempo: timeday, totalRent: timeday, cliente: pessoa, save: Number(moment.tz('America/Sao_Paulo').format('DD')), cortesia: false})
fs.writeFileSync("./arquivos/database/groups/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
chaves.splice(AD, 1)
fs.writeFileSync("./arquivos/database/groups/aluguel/chaves.json", JSON.stringify(chaves, null, 2))
reply(`✨🔑 O grupo foi oficialmente vinculado ao aluguel! *Para esclarecimentos, favor contatar meu proprietário.*`)
await sleep(2000)
await yurizin.sendMessage(nmrdn, {text: `⚠️🛒 Código de aluguel foi validado no grupo com sucesso! Registrado no nome de *@${pessoa.split('@')[0]}*\n• Grupo registrado: *${groupName}*`, mentions: [pessoa]})
} else {
AB = aluguel.map(i => i.id).indexOf(from)
aluguel[AB].cortesia = false
aluguel[AB].nome = groupName
aluguel[AB].totalRent = aluguel[AB].tempo + timeday
aluguel[AB].tempo += timeday
fs.writeFileSync("./arquivos/database/groups/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
chaves.splice(AD, 1)
fs.writeFileSync("./arquivos/database/groups/aluguel/chaves.json", JSON.stringify(chaves, null, 2))
reply(`+${timeday} dia${Number(timeday) > 1 ? 's' : ''} adicionado${Number(timeday) > 1 ? 's' : ''} para o grupo em meu banco de /.`)
await sleep(2000)
await yurizin.sendMessage(nmrdn, {text: `🔑 - O código de aluguel foi verificado com sucesso para este grupo! Registrado em nome de *@${pessoa.split('@')[0]}*, representante do grupo: *${groupName}*`, mentions: [pessoa]})
}
}
        
if(chaves[AD].tipo == 2 && isGroup) {
CD = grupos.map(i => i.id).indexOf("Yuri-Bot-oficial")
if(!VerificarJSON(grupos[CD].gps, from)) {
if(!VerificarJSON(aluguel, from)) {
grupos[CD].gps.push({id: from})
fs.writeFileSync("./arquivos/database/groups/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
aluguel.push({id: from, nome: groupName, tempo: 24, totalRent: 24, cliente: sender, save: Number(moment.tz('America/Sao_Paulo').format('mm')), cortesia: true})
fs.writeFileSync("./arquivos/database/groups/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
reply(`✅️🌟 Código Card Cortesia validado com sucesso! 24h liberadas neste grupo contando a partir de agora.`)
await sleep(2000)              
await yurizin.sendMessage(nmrdn, {text: `⚠️🌟️ Código *Card Cortesia* foi validado no grupo, registrado no nome de *@${pessoa.split('@')[0]}*.\n• Grupo registrado: *${groupName}*`, mentions: [pessoa]})
} else reply("[!] Este grupo já está registrado em meu banco de dados.")
} else reply("[!] Já foi validado neste mês uma cortesia neste grupo.")
}
} else {
if(chaves[AD].tipo == 1 && isGroup) {
chaves.splice(AD, 1)
fs.writeFileSync("./arquivos/database/groups/aluguel/chaves.json", JSON.stringify(chaves, null, 2))
reply(`[!] O grupo foi salvo no meu banco de dados com sucesso!`)
}}}}

/* ----- [ Começo das Cases | Comandos ] ----- */
switch(command) {

case 'stickerinfo': case 'stmetadata': 
if(!isQuotedSticker) return reply('Por favor, é nescessário mencionar um sticker para obter sucesso à execução do comando.');
try {
  extractBuffer = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
  stickerMetadata = await extractMetadata(extractBuffer);
  await yurizin.sendMessage(from, {image: extractBuffer, caption: `• Emojis: *${stickerMetadata?.emojis?.join(' ') || '❌'}*\n• ID do Pacote: *${stickerMetadata['sticker-pack-id'] || '❌'}*\n• Nome do Pacote: *${stickerMetadata['sticker-pack-name'] || '❌'}*\n• Autor do Pacote:  *${stickerMetadata['sticker-pack-publisher'] || stickerMetadata['sticker-author-name'] || '❌'}*\n• Sticker Maker _(Android)_: *${stickerMetadata['android-app-store-link'] || '❌'}*\n• Sticker Maker _(iOS)_: *${stickerMetadata['ios-app-store-link']|| '❌'}*`}, {quoted: info});
} catch(error) {
  return reply('[#] Ocorreu um erro ao obter a metadata do sticker, tente com outro...')
};
break

case 'savegp':
if(!SoDono) return reply(mess.onlyOwner())
if(!isGroup) return reply(mess.onlyGroup())
if(!VerificarJSON(grupos, from)) {
grupos.push({id: from, limite: 5, validado: true})
fs.writeFileSync("./arquivos/database/groups/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
reply(`Grupo *"${groupName}"* acaba de ser salvo em meu banco de dados...`)
} else {
GP = grupos.map(i => i.id).indexOf(from)
grupos[GP].validado = true
fs.writeFileSync("./arquivos/database/groups/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
reply(`Grupo *"${groupName}"* já foi salvo em meu banco de dados, então só irei ativar o recurso de validado senhor(a)...️`)
}
break

case 'addrent': case 'rgrent':
if(!SoDono) return reply(mess.onlyOwner())
if(!isGroup) return reply(mess.onlyGroup())
if(!VerificarJSON(grupos, from)) {
grupos.push({id: from, limite: 5, validado: true})
fs.writeFileSync("./arquivos/database/groups/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
} else {
GP = grupos.map(i => i.id).indexOf(from)
grupos[GP].validado = true
fs.writeFileSync("./arquivos/database/groups/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
}
if(!JSON.stringify(aluguel).includes(from)) {
if(!q.includes('/')) return reply(`Você vai colocar o número da pessoa que alugou e após isso uma barra ( / ). Após a barra, coloque a quantidade de dias que este alugou para seu grupo.\n- Ex: ${prefix+command} ${nmrdn.split('@')[0]}/30`)
barra = q.replace(" /", "/").replace("/ ", "/").replace(" / ", "/")
var [nmr, dias] = barra.split('/')
if(!Number(dias)) return reply(`Apenas números pfvr`)
matheuzinho = nmr.includes('@') ? nmr.split('@')[1].replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net" : nmr.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
const [checkwpp] = await yurizin.onWhatsApp(matheuzinho.split('@')[0])
if(checkwpp == undefined) {
return reply(`O número ${matheuzinho.split('@')[0]} não é válido no whatsapp...`)
}
if(Number(dias) <= 0) return reply(`É necessário ao menos 1 dia de aluguel né.`);
if(dias.includes('.')) return reply("Não use números decimais.");
aluguel.push({id: from, nome: groupName, tempo: Number(dias) + 1, totalRent: Number(dias) + 1, cliente: matheuzinho, save: Number(moment.tz('America/Sao_Paulo').format('DD')), cortesia: false});
fs.writeFileSync("./arquivos/database/groups/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2));
reply(`Grupo adicionado ao aluguel com sucesso.`);
} else {
if(!Number(args[0])) return reply(`Coloque quantos dias mais serão adicionados ao aluguel deste grupo!`);
hehe = Number(args[0])
AB = aluguel.map(i => i.id).indexOf(from)
aluguel[AB].cortesia = false
aluguel[AB].nome = groupName
aluguel[AB].totalRent = aluguel[AB].tempo + hehe
aluguel[AB].tempo += hehe
fs.writeFileSync("./arquivos/database/groups/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2));
reply(`+${args[0]} dia${Number(args[0]) > 1 ? 's' : ''} adicionado${Number(args[0]) > 1 ? 's' : ''} para este grupo.`);
}
break

case 'tirarrent':
if(!SoDono) return reply(mess.onlyOwner())
if(!isGroup) return reply(mess.onlyGroup())
if(!Number(args[0])) return reply("Apenas números.");
if(!JSON.stringify(aluguel).includes(from)) return reply("ID inexistente.");
AB = aluguel.map(i => i.id).indexOf(from)
aluguel[AB].cortesia = false
aluguel[AB].nome = groupName
aluguel[AB].tempo -= Number(args[0])
fs.writeFileSync("./arquivos/database/groups/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
reply(`${args[0]} dia${Number(args[0]) > 1 ? 's' : ''} fo${Number(args[0]) > 1 ? 'ram' : 'i'} retirado${Number(args[0]) > 1 ? 's' : ''} deste grupo.`)
break

case 'delrent': case 'rmrent':
if(!SoDono) return reply(mess.onlyOwner())
if(!isGroup) return reply(mess.onlyGroup())
if(!q) {
if(!JSON.stringify(aluguel).includes(from)) return reply(`ID inexistente`)
GP = grupos.map(i => i.id).indexOf(from)
grupos.splice(GP, 1)
fs.writeFileSync("./arquivos/database/groups/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
AB = aluguel.map(i => i.id).indexOf(from)
aluguel.splice(AB, 1)
fs.writeFileSync("./arquivos/database/groups/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
reply(`O registro desse grupo foi deletado com sucesso do meu banco de dados.`)
} else {
if(!Number(args[0]) || Number(args[0]) < 0 || Number(args[0]) > Number(aluguel.length + 1)) return reply(`Retorne um número válido... Olhe na ${prefix}listrent e veja o número`)
BC = Number(args[0]) - 1
GP = grupos.map(i => i.id).indexOf(aluguel[BC].id)
grupos.splice(GP, 1)
fs.writeFileSync("./arquivos/database/groups/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
aluguel.splice(BC, 1)
fs.writeFileSync("./arquivos/database/groups/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
reply(`O registro desse grupo foi deletado com sucesso do meu banco de dados.`)
}
break

case 'cortesia24':
if(!SoDono) return reply(mess.onlyOwner())
if(!isGroup) return reply(mess.onlyGroup())
if(JSON.stringify(aluguel).includes(from)) return reply(`Grupo já registrado...`)
if(!JSON.stringify(grupos).includes(from)) {
  grupos.push({id: from, limite: 5, validado: true})
  fs.writeFileSync("./arquivos/database/groups/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
}
aluguel.push({id: from, nome: groupName, tempo: 24, totalRent: 24, cliente: nmrdn, save: Number(moment.tz('America/Sao_Paulo').format('mm')), cortesia: true})
fs.writeFileSync("./arquivos/database/groups/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
reply(`💳 Cartão verde validado! 24h liberadas neste grupo contando a partir de agora.`)
break

case 'listrent': case 'lista-aluguel':
if(!SoDono) return reply(mess.onlyGroup())
if(aluguel.length > 0) {
var getGroups = await yurizin.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var ingfoo = groups.map(v => v)
ingfoo.sort((a, b) => (a[0] < b.length))
for (g = 0; g < ingfoo.length; g++){
if(JSON.stringify(aluguel).includes(ingfoo[g].id)) {
matheuzinho = aluguel.map(m => m.id).indexOf(ingfoo[g].id)
aluguel[matheuzinho].nome = ingfoo[g].subject
fs.writeFileSync("./arquivos/database/groups/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
}
}
txt = `[Total: *${aluguel.length}*] - Lista dos grupos alugados:\n—\n`
for(i = 0; i < aluguel.length; i++) {
hmm = aluguel[i].tempo
txt += `*[${i + 1}]* Grupo: *${aluguel[i].nome}*\n`
if(aluguel[i].cortesia == false) {
txt += `• Tempo Restante: *${hmm} dia${hmm > 1 ? 's' : ''}*\n• Cliente: *wa.me/${aluguel[i].cliente.split('@')[0]}*\n—\n`
} else {
txt += `_O grupo está usando o cartão cortesia, ou seja, 24h de uso foram liberadas._\n—\n`
}
}
reply(txt)
} else {
reply(`Não existe nenhum grupo registrado em aluguel senhor(a).`)
}
break

case 'lastrent':
if(!SoDono) return reply(mess.onlyOwner())
if(aluguel.length > 0) {
matheuzinho = aluguel.map(i => i)
rank = matheuzinho.sort((a, b) => (a.tempo < b.tempo) ? -1 : 0)
txt = "• Top 3 grupos com o aluguel mais próximo de acabar:\n—\n"
for(i = 0; i < 3; i++) {
if(rank[i].cortesia == false) {
hmm = rank[i].tempo
txt += `*[${i + 1}]* Grupo: *${rank[i].nome}*\n• Tempo Restante: ${hmm} dia${hmm > 1 ? 's' : ''}\n• Cliente: *wa.me/${rank[i].cliente.split('@')[0]}*\n—\n`
}
}
reply(txt)
} else {
reply(`Não existe nenhum grupo registrado em aluguel senhor(a).`)
}
break

case 'calendario':
case 'dados':
setTimeout(() => {reagir(from, "📅")}, 300)
var getGroups = await yurizin.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var ingfoo = groups.map(v => v)
ingfoo.sort((a, b) => (a[0] < b.length))
hora16 = moment.tz('America/Sao_Paulo').format('HH:MM:SS')
date16 = moment.tz('America/Sao_Paulo').format('DD/MM/YYYY')
day = `${tempo}, ${pushname}!\n• Grupo: *${isGroup ? groupName : "Privado"}*\n• Data & Hora: *${date16} ${hora16}*\n• Nome do Bot: *${NomeDoBot}*\n• Proprietário: *${ownerName}*\n• Estou operando atualmente em *${ingfoo.length}* grupos.`
if(JSON.stringify(aluguel).includes(from)) {
AB = aluguel.map(i => i.id).indexOf(from)
numsei = aluguel[AB].tempo / aluguel[AB].totalRent * 100
if(numsei < 10) matheuzinho = `${numsei.toFixed(0)}%〘▒▒▒▒▒▒▒▒▒▒〙`
if(numsei >= 10) matheuzinho = `${numsei.toFixed(0)}%〘█▒▒▒▒▒▒▒▒▒〙`
if(numsei >= 20) matheuzinho = `${numsei.toFixed(0)}%〘██▒▒▒▒▒▒▒▒〙`
if(numsei >= 30) matheuzinho = `${numsei.toFixed(0)}%〘███▒▒▒▒▒▒▒〙`
if(numsei >= 40) matheuzinho = `${numsei.toFixed(0)}%〘████▒▒▒▒▒▒〙`
if(numsei >= 50) matheuzinho = `${numsei.toFixed(0)}%〘█████▒▒▒▒▒〙`
if(numsei >= 60) matheuzinho = `${numsei.toFixed(0)}%〘██████▒▒▒▒〙`
if(numsei >= 70) matheuzinho = `${numsei.toFixed(0)}%〘███████▒▒▒〙`
if(numsei >= 80) matheuzinho = `${numsei.toFixed(0)}%〘████████▒▒〙`
if(numsei >= 90) matheuzinho = `${numsei.toFixed(0)}%〘█████████▒〙`
if(numsei >= 95) matheuzinho = `${numsei.toFixed(0)}%〘██████████〙`
hmm = aluguel[AB].tempo
if(aluguel[AB].cliente == sender || SoDono) {
  matheusSabe = `• `
  if(aluguel[AB].cortesia == false) {
matheusSabe += `${hmm} dia${hmm > 1 ? 's' : ''} restantes`} else {matheusSabe += hmm > 1 ? `${hmm} horas` : `Alguns minutos`}
matheusSabe += ` até o fim do contrato.`
} else {matheusSabe = ``}
day += `\n——\n🔋 *Bateria restante para uso:*\n${matheuzinho} ${matheusSabe}`};
reply(`${day}`);
break

case 'aluguel': case 'alugueis': case 'alugar': case 'alugarbot': case 'loja':
await reagir(from, "🛒")
reply(`Digite *${prefix}dono* para entrar em contato com meu proprietário e liberar o acesso em seu grupo.\n• Os valores são passados por ele, não tenho nenhuma informação registrada sobre isso.`)
break

case 'mycoderent': //by matheuzinho
txt = `🔑 Suas chaves de ativação:\n—\n`
nmr = 0
for(i of chaves) {if(i.cliente == sender) {txt += `\n• ${i.key}`; nmr += 1}}
if(nmr <= 0) return reply("Você não possui nenhuma chave de ativação.");
reply(isGroup ? "Por segurança lhe enviei em seu privado o que foi solicitado." : "Aguarde, estou enviando o que foi solicitado...");
await yurizin.sendMessage(from, {text: txt}, {quoted: info});
break

case 'codelistrent'://by matheuzinho
if(!SoDono) return reply(mess.onlyOwner())
txt = `[Total: *${i.chaves}*] - Lista de Códigos registrado(s) para aluguel:`
caixa = []
for(i of chaves) {
txt += `\n—\n• Chave: *${i.key}*\n• Cliente que realizou a solicitação: *@${i.cliente.split('@')[0]}*\n• Expiração: ${nmr > 0 ? `${i.dias} dia${i.dias > 1 ? 's' : ''}` : `Não contém dias para a expiração, é infinito.`}`
caixa.push(i.cliente)
}
if(caixa <= 0) return reply("Não existe nenhuma chave registrada em meu banco de dados.")
reply(isGroup ? "Por motivos de segurança, enviei em seu privado..." : "Aguarde, estou enviando o que foi solicitado!")
await yurizin.sendMessage(sender, {text: txt, mentions: caixa})
break

case 'gerarcoderent':
if(!SoDono) return reply(mess.onlyOwner())
barra = q.replace(' /', '/').replace('/ ', '/').replace(' / ', '/')
var [v1, v2] = barra.split('/')
if(!q.includes('/')) return reply(`Você vai colocar o número da pessoa que alugou e após isso uma barra ( / ). Após a barra, coloque a quantidade de dias que este alugou para seu grupo.\n• Exemplo: *${prefix+command} ${nmrdn.split('@')[0]}/30*`)
matheuzinho = v1.toLowerCase() == "me" ? sender : v1.includes('@') ? v1.split('@')[1].replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net" : v1.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
const [checkkeygp] = await yurizin.onWhatsApp(matheuzinho.split('@')[0])
if(checkkeygp == undefined) {
return reply(`O número *${matheuzinho.split('@')[0]}* não é válido no whatsapp.`)
}
nmr = Number(v2) > 0 ? Number(v2) : 0
idks = `G${v2}-`
idks += `${Number(from.replace("-", "").slice(2, 8)) * Number(matheuzinho.slice(2, 8))}`
idks += `M${nmr}H-${Number(moment.tz('America/Sao_Paulo').format('DDMMYY')) + Number(moment.tz('America/Sao_Paulo').format('HHmmss'))}B`
chaves.push({key: idks, tipo: 1, dias: nmr, cliente: matheuzinho, valor: 0})//tipo 1 = aluguel de grupo
fs.writeFileSync("./arquivos/database/groups/aluguel/chaves.json", JSON.stringify(chaves, null, 2))
await mention(`🔑🌟 Código de ativação do serviço gerado com sucesso! Segue abaixo a chave:\n-> *${idks}*\n——\n• Quantidade de dias: *${nmr > 0 ? `${nmr} dia${nmr > 1 ? 's' : ''}` : `∞ INFINITO`}*\n• Usuário(a) que alugou: *@${matheuzinho.split('@')[0]}*`)
break

case 'gerarcodecort'://by matheuzinho
if(!SoDono) return reply(mess.onlyOwner())
reagir(from, "😀")
cort = 24 
idks = `G${cort}-`
idks += `${Number(from.replace("-", "").slice(2, 8)) * Number(sender.slice(2, 8))}`
idks += `E${Number(cort/2).toFixed(0)}R-${Number(moment.tz('America/Sao_Paulo').format('DDMMYY')) + Number(moment.tz('America/Sao_Paulo').format('HHmmss'))}A`
chaves.push({key: idks, tipo: 2, dias: 24, cliente: sender, valor: 0})//tipo 3 = cortesia
fs.writeFileSync("./arquivos/database/groups/aluguel/chaves.json", JSON.stringify(chaves, null, 2))
reply(`🛒🌟 O código cortesia foi gerado com sucesso! Segue abaixo a chave de ativação do mesmo:\n-> *${idks}*`)
break

case 'delcoderent':
if(!SoDono) return reply(mess.onlyOwner())
if(!JSON.stringify(chaves).includes("Yuri-Bot-oficial")) return reply(`Não há chaves registradas.`)
if(!q) return reply(`Cadê o código de aluguel que você deseja apagar?`)
if(!JSON.stringify(chaves).includes(q)) return reply("O código não foi encontrado em nosso banco de dados, é inexistente!")
AD = chaves.map(i => i.key).indexOf(q)
chaves.splice(AD, 1)
fs.writeFileSync("./arquivos/database/groups/aluguel/chaves.json", JSON.stringify(chaves, null, 2))
reply(`[!] O código *${q}* foi deletado do sistema com sucesso.`)
break

case 'iddogrupo':
if(!SoDono) return reply(mess.onlyOwner())
reply(from)
break

//=========== [ ÍNICIO JOGOS ] ========= //

case 'quando':  
if (args.length < 1) return reply('Digite a pergunta!')
const meupirul = ['Hoje', 'Amanhã', 'Nunca', 'dia', 'semana', 'mês', 'ano']
const meupirul2 = ['dias', 'semanas', 'meses', 'anos']
randomm = meupirul[Math.floor(Math.random() * meupirul.length)]
random2 = `${Math.floor(Math.random() * 11) + 1}`
if (randomm == 'Hoje' || randomm == 'Amanhã' || randomm == 'Nunca') {
texto = `Pergunta: ${body.slice(1)}\nResposta: ${randomm}`
} else if (random2 == 1) {
texto = `Pergunta: ${body.slice(1)}\nResposta:  1 ${randomm}`
} else {
random3 = meupirul2[Math.floor(Math.random() * meupirul2.length)]
texto = `Pergunta: ${body.slice(1)}\nResposta: ${random2} ${random3}`
}
reply(texto)
break

//=========== [ FINAL JOGOS ] ========= //

case 'dddcitieslist': case 'ddd':
if(q.length < 1) return reply(`O campo de texto está vázio no momento! Coloque um código de um estado (DDD) de sua preferência. Como por exemplo o estado de Alagoas, você iria colocar 82.`);
try {
data = await fetchJson(API_URL + `/api/outros/lista-ddd?ddd=${q}&apikey=`+API_KEY_YURI);
listOfCities = `[Total: *${data.resultado.cities.length}*] - Lista de cidades que pertecem ao estado de ${extractAcronymFromCity(data.resultado.state)}:\n—\n`;
listOfCities += data.resultado["cities"].map((v, index) => `*${index+1}.* ${v}`).join("\n");
await reply(listOfCities)
} catch(error) {
await reply(mess.error());
}
break

case 'limpar_mortos-cnt':
if(!SoDono) return reply(mess.onlyOwner())
if(!isGroup) return reply(mess.onlyOwner())
bla = [] 
var CNT_RS = countMessage[countMessage.map(i => i.groupId).indexOf(from)].numbers
for ( i = 0; i < CNT_RS.map( i => i.id).length; i++) { bla.push(CNT_RS.map( i => i.id)[i])};
for ( i of groupMembers) {bla.splice(bla.indexOf(i.id), 1)};
for ( i of bla) {CNT_RS.splice(CNT_RS.indexOf(i), 1)};
fs.writeFileSync("./settings/media/countmsg.json", JSON.stringify(countMessage))
reply("Usuários que já foi removido, ou saiu do grupo, foi tirado do contador de mensagens..")
break

case 'tirar_docnt':
if(!SoDono) return reply(mess.onlyOwner())
if(!isGroup) return reply(mess.onlyGroup())
var i2 = countMessage.map(i => i.groupId).indexOf(from) 
var i = countMessage[i2].numbers.map(i => i.id).indexOf(q.trim()+"@s.whatsapp.net")  
countMessage[i2].numbers.splice(i,1)
fs.writeFileSync("./settings/media/countmsg.json", JSON.stringify(countMessage))
reply("Usuário tirado do contador de mensagens com sucesso...")
break

case 'anotar':
case 'tirar_nota':
case 'rmnota':
if(!isGroup) return reply(`Só em grupo pode utilizar este comando.`)
if(!isGroupAdmins) return reply(`Só adm pode utilizar este tipo de comando.`)
if(command == "anotar") {
var [q5, q10] = q.trim().split("|")
if(!q5 || !q10 || !q.includes("|")) return reply(`Digite o título da anotação e o texto que deseja anotar..\nExemplo: ${prefix}anotar Cachorro|Cachorros são bom pra comer na Venezuela...`)
if(JSON.stringify(anotar).includes(from)) {  
var i2 = anotar.map(i => i.grupo).indexOf(from)  
if(JSON.stringify(anotar[i2].puxar).includes(q5)) {
var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q5)  
if(anotar[i2].puxar[i3].nota == q5) return reply(`Esta anotação já está inclusa, utilize outro título.. Ou você pode tirar com\n${prefix}tirar_nota ${q5}`)
}
}
if(!JSON.stringify(anotar).includes(from)) {
anotar.push({grupo: from, puxar: [{nota: q5, anotacao: q10}]})
fs.writeFileSync("./arquivos/database/func/anotar.json", JSON.stringify(anotar))
reply("Anotação registrada com sucesso...")
} else {
anotar[i2].puxar.push({nota: q5, anotacao: q10})
fs.writeFileSync("./arquivos/database/func/anotar.json", JSON.stringify(anotar))
reply("Anotação registrada com sucesso...")  
}
} else {
if(!q) return reply("Digite qual anotação deseja tirar pelo título..")
if(JSON.stringify(anotar).includes(from)) {  
var i2 = anotar.map(i => i.grupo).indexOf(from)  
if(JSON.stringify(anotar[i2].puxar).includes(q)) {
var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q)  
}
}
if(0 > anotar[i2].puxar.map(i => i.nota).indexOf(q)) return reply("Esta nota não está inclusa, verifique com atenção...")
anotar[i2].puxar.splice(i3, 1)
fs.writeFileSync("./arquivos/database/func/anotar.json", JSON.stringify(anotar))
reply(`Anotação ${q} tirada com sucesso...`)
}
break

case 'anotacao':
case 'anotacoes':  
case 'nota':
case 'notas':
if(!isGroup) return reply(`Só em grupo pode utilizar este comando.`)
if(command == "anotacao" || command == "nota") {
if(!q) return reply("Digite o título da anotação que deseja puxar..")
if(!JSON.stringify(anotar).includes(from)) return reply("Este grupo não tem nenhuma anotação...")
var i2 = anotar.map(i => i.grupo).indexOf(from)  
if(!JSON.stringify(anotar[i2].puxar).includes(q)) return reply("Não contém nenhuma anotação com este título.")
var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q)  
mentions(`〈 ${anotar[i2].puxar[i3].anotacao} 〉`)
} else {
var i2 = anotar.map(i => i.grupo).indexOf(from)    
if(anotar[i2].puxar.length == 0) return reply("Este grupo não tem nenhuma anotação...")    
var i2 = anotar.map(i => i.grupo).indexOf(from) 
var antr = anotar[i2].puxar 
txtin = `Aqui está todas as anotações registradas em minha database do grupo: *[ ${groupName} ]*\n`
for ( i = 0; i < antr.length; i++) {
txtin += `\n↝ Anotação: ⟮ ${anotar[i2].puxar[i].nota} ⟯ - 〈 ${anotar[i2].puxar[i].anotacao} 〉\n`
}
txtin += ""
reply(txtin)
}
break

case 'verificado-global': 
if(!SoDono) return reply(mess.onlyOwner())
if(!isVerificado) {
definitions.Verificado = true
fs.writeFileSync('./settings/definitions.json', JSON.stringify(definitions, null, 2))
reply("O verificado foi desativado com sucesso, ou seja, o selo foi retirado de todos os meus comandos! *Para reativar é só digitar o comando novamente.*")
} else if(isVerificado) {
definitions.Verificado = false
fs.writeFileSync('./settings/definitions.json', JSON.stringify(definitions, null, 2))
reply(`O verificado foi ativado, ou seja, o selo foi colocado em todos os meus comandos! *Para remover o verificado dos comandos, use o comando novamente.*`) 
}
break

case 'menu':
await reagir(from, "🍅");
await yurizin.sendMessage(from, {image: {url: images["Main"].value}, caption: linguagem.menu(prefix, NomeDoBot, sender, ownerName, packname), mentions: [sender]}, {quoted: selo})
break 

case 'menu-completo':
await reagir(from, "🍅");
await yurizin.sendMessage(from, {image: {url: images["Main"].value}, caption: linguagem.menu(prefix, NomeDoBot, sender, ownerName, packname), mentions: [sender]}, {quoted: selo})
break

case 'logos': case 'menulogo': case 'menulogos':  
await reagir(from, "🎨");
await yurizin.sendMessage(from, {image: {url: images["Main"].value}, caption: linguagem.menulogos(prefix, NomeDoBot, sender, ownerName, packname), mentions: [sender]}, {quoted: selo})
break 

case 'menuadm': case 'menuadms': case 'adm':  
await reagir(from, "⚔️");
await yurizin.sendMessage(from, {image: {url: images["Main"].value}, caption: linguagem.adms(prefix, NomeDoBot, sender, ownerName, packname), mentions: [sender]}, {quoted: selo})
break 

case 'menudono': case 'donomenu':  
await reagir(from, "👑");
await yurizin.sendMessage(from, {image: {url: images["Main"].value}, caption: linguagem.menudono(prefix, NomeDoBot, sender, ownerName, packname), mentions: [sender]}, {quoted: selo})
break 

case 'efeitosimg': case 'efeitos': case 'efeitoimg': case 'efeitosmarcar':
await reagir(from, "🖼️");
await yurizin.sendMessage(from, {image: {url: images["Main"].value}, caption: linguagem.efeitos(prefix, NomeDoBot, sender, ownerName, packname), mentions: [sender]}, {quoted: selo})
break

case 'menusabcity': 
case 'menurpg':
case 'menucoins':
await reagir(from, "🪙");
await yurizin.sendMessage(from, {image: {url: images["Main"].value}, caption: linguagem.menusabcity(prefix, NomeDoBot, sender, ownerName, packname), mentions: [sender]}, {quoted: selo})
break

case 'alteradores':
await reagir(from, "🎤");
await yurizin.sendMessage(from, {image: {url: images["Main"].value}, caption: linguagem.alteradores(prefix, NomeDoBot, sender, ownerName, packname), mentions: [sender]}, {quoted: selo})
break 

case 'brincadeiras':
case 'brincadeira':
if(!isModobn) return reply(mess.onlyGroupFun(prefix))  
await reagir(from, "😂");
await yurizin.sendMessage(from, {image: {url: images["Main"].value}, caption: linguagem.brincadeiras(prefix, NomeDoBot, sender, ownerName, packname), mentions: [sender]}, {quoted: selo})
break 

case 'menupremium':
case 'menuprem': 
if(premiumCmd.length == 0) return reply(`Atualmente meu/minha dono(a), não adicionou nenhum comando à este menu.\n- Caso você seja o(a) dono(a), visualize o comando: ${prefix}infocmdprem, para entender como funciona esta nova funcionalidade do bot.`)
await reagir(from, "💎");
await yurizin.sendMessage(from, {image: {url: images["Main"].value}, caption: linguagem.menuprem(premiumCmd, prefix, NomeDoBot, sender, ownerName, packname, capitalizeFirstLetter), mentions: [sender]}, {quoted: selo})
break 

case 'owner': case 'odono': case 'dono': case 'infodono':  
await reagir(from, "📇");
numerodn = numerodonos_ofc
await yurizin.sendMessage(from, {image: {url: images["Main"].value}, caption: getInfo.infoOwner(prefix, ownerName, numerodn, NomeDoBot, sender), mentions: [sender]}, {quoted: selo})
break 

case 'tutorial': case 'infobot':
await yurizin.sendMessage(from, {text: getInfo.tutorialBasic(prefix), contextInfo: {externalAdReply: {title: `Bot: ${NomeDoBot}`, body: `Olá ${pushname}, aqui está o tutorial de como usar o bot.`, thumbnail: await getBuffer(images['defaultProfile'].value), mediaType: 1, sourceUrl: API_URL}}, mentions: [sender]}, {quoted: info}) 
break

case 'criador': case 'suporte-dono':
await reagir(from, "🧑‍💻");
let vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'N:;Yuri Modz;;;\n' + 'FN:Yuri Modz\n' + 'item1.TEL;waid=556593065507:+55 65 9306-5507\n' + 'item1.X-ABLabel:Celular\n' + 'END:VCARD'
await yurizin.sendMessage(from, {contacts: {displayName: 'Yuri Modz', contacts: [{vcard}]}})
reply(`O contato dele caso você use imune: https://wa.me/556593065507`);
break

case 'configurar-bot':
await yurizin.sendMessage(from, {text: getInfo.configbot(prefix)}, {quoted: selo})
break

case 'infoaluguel': case 'inforent': case 'info_aluguel':
await yurizin.sendMessage(from, {text: getInfo.infoRent(prefix)}, {quoted: selo})
break

case 'infopremium': case 'info_premium':
await yurizin.sendMessage(from, {text: getInfo.infoPremium(prefix)}, {quoted: selo})
break

case 'infocmdprem': case 'infocmdpremium':
await yurizin.sendMessage(from, {text: getInfo.infoCmdPremium(prefix)}, {quoted: selo})
break

case 'idiomas': case 'idioma':
await yurizin.sendMessage(from, {text: getInfo.listLanguages(prefix)}, {quoted: selo})
break

case 'infobv': case 'infowelcome': case 'infobemvindo':
await yurizin.sendMessage(from, {text: getInfo.bemvindo(prefix)}, {quoted: selo})
break
case 'destrava':
await reagir(from, "🧩");
await yurizin.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
break 

case 'perfil':
await reagir(from, "👤");
try {
ppimg = await yurizin.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch {
pr = await axios.get(`https://tinyurl.com/api-create.php?url=${images['defaultProfile'].value}`);
ppimg = pr.data
}
try {
var status = (await yurizin.fetchStatus(sender)).status
} catch {
var status = "Não foi possível obter a biografia."
}
const nivelgado = ['1','2','3','4','5','6','7','8','9']
const nivelgado2 = ['1','2','3','4','5','6','7','8','9'] 
const nivelgador = nivelgado[Math.floor(Math.random() * (nivelgado.length))]
const nivelgado2r = nivelgado2[Math.floor(Math.random() * (nivelgado2.length))] 
const puta = ['1','2','3','4','5','6','7','8','9']
const puta2 = ['1','2','3','4','5','6','7','8','9'] 
const putar = puta[Math.floor(Math.random() * (puta.length))]
const putar2 = puta2[Math.floor(Math.random() * (puta2.length))] 
const gostosura = ['1','2','3','4','5','6','7','8','9']
const gostosura2 = ['1','2','3','4','5','6','7','8','9'] 
const gostosurar = gostosura[Math.floor(Math.random() * (gostosura.length))]
const gostosurar2 = gostosura2[Math.floor(Math.random() * (gostosura2.length))] 
gadop = `${Math.floor(Math.random() * 100)}`
const programa = Math.ceil(Math.random() * 10000)
await yurizin.sendMessage(from, {image: {url: ppimg}, caption: mess.profileInformation(pushname, sender, info, putar, putar2, gostosurar, gostosurar2, nivelgador, nivelgado2r, programa, status), mentions: [sender]}, {quoted: selo})
break

/*
case 'rch': {
 if (!q) {
 return reply(`Precido de um link da mensagem, exemplo::\n${prefix}rch https://whatsapp.com/channel/xxxx palor`);}
 if (!q.startsWith("https://whatsapp.com/channel/")) {
 return reply("Link inválido!");}
 const hurufGaya = {
 a: '🅐', b: '🅑', c: '🅒', d: '🅓', e: '🅔', f: '🅕', g: '🅖',
 h: '🅗', i: '🅘', j: '🅙', k: '🅚', l: '🅛', m: '🅜', n: '🅝',
 o: '🅞', p: '🅟', q: '🅠', r: '🅡', s: '🅢', t: '🅣', u: '🅤',
 v: '🅥', w: '🅦', x: '🅧', y: '🅨', z: '🅩',
 '0': '⓿', '1': '➊', '2': '➋', '3': '➌', '4': '➍',
 '5': '➎', '6': '➏', '7': '➐', '8': '➑', '9': '➒' };
 const emojiInput = args.slice(1).join(' ').toLowerCase();
 const emoji = emojiInput.split('').map(c => {
 if (c === ' ') return '―';
 return hurufGaya[c] || c;
 }).join('');
 try {
 const link = args[0];
 const channelId = link.split('/')[4];
 const messageId = link.split('/')[5];
 const res = await yurizin.newsletterMetadata("invite", channelId);
 await yurizin.newsletterReactMessage(res.id, messageId, emoji);
 return reply(`Enviou reação *${emoji}* para a mensagem no canal *${res.name}.*`);
 } catch (e) {
 console.error(e);
 return reply("Falha ao enviar reação. Certifique-se de que o link e o emoji são válidos.");
 }}
break
*/

case 'tabela':
await yurizin.sendMessage(from, {text: tabela(prefix, NomeDoBot)}, {quoted: selo})
break 

case 'destrava2':
await yurizin.sendMessage(from, {text: destrava2 (prefix)}, {quoted: selo})
break 

case 'getquoted': case 'get': case 'mek': 
await reply(info, {reagir: "📷", exec: true});
break

case 'get-txt':  
message = info.message.extendedTextMessage.contextInfo.quotedMessage.conversation
await reply(message, {reagir: '✏️', eval: true});
break

case 'gerarcpf':
mCPF = `${Math.floor(Math.random() * 300) + 600}.${Math.floor(Math.random() * 300) + 600}.${Math.floor(Math.random() * 300) + 600}-${Math.floor(Math.random() * 30) + 60}`;
yurizin.sendMessage(from, {text: `• CPF gerado com sucesso: ${mCPF}`}, {quoted: selo});
break

case 'calculadora': case 'calcular': case 'calc':
ARST = q.replace("x", "*").replace('"', ":").replace(new RegExp("[()abcdefghijklmnopqrstwuvxyz]", "gi"), "").replace("÷", "/");
await reply(JSON.stringify(eval(ARST, null,'\t')));
break 

case 'nomegp':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
await yurizin.groupUpdateSubject(from, `${q}`)
await yurizin.sendMessage(from, {text: 'Sucesso, alterou o nome do grupo.'}, {quoted: selo})
break

case 'descgp':
case 'descriçãogp':  
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyAdmins())
await yurizin.groupUpdateDescription(from, `${q}`)
await yurizin.sendMessage(from, {text: 'Sucesso, alterou a descrição do grupo'}, {quoted: selo})
break

case 'setfotogp':
case 'fotogp':  
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(!isQuotedImage) return reply(`Use: ${prefix + command} <Marque uma foto>`)
ftgp = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(ftgp.mimetype))
buffimg = await getFileBuffer(ftgp, 'image')
fs.writeFileSync(rane, buffimg)
medipp = rane 
yurizin.updateProfilePicture(from, {url: medipp})
reply(`Foto do grupo alterada com sucesso`) 
break

case 'linkgp':
case 'linkgroup':
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isGroup) return reply(mess.onlyGroup())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
linkgc = await yurizin.groupInviteCode(from)
reply('https://chat.whatsapp.com/'+linkgc)
break

case 'recrutar':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(!q) return reply("Cadê o número do usuário que você deseja convidar.")
try {
photoG = await yurizin.profilePictureUrl(from, 'image') // Pegar a foto do grupo aonde foi solicitado o comando de recrutamento.
} catch {
photoG = images['defaultProfile'].value // Vai colocar a img que está na definição, caso esteja sem foto.
}
rcrt = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
linkgc = await yurizin.groupInviteCode(from)
await yurizin.sendMessage(rcrt, {text: "*Olá, tudo bem?* Você foi convidado(a) pelo(a) adminstrador(a) do grupo.\nPara entrar no grupo, clique acima!", contextInfo: {externalAdReply: {title: groupName, thumbnail: await getBuffer(photoG), mediaType: 1, sourceUrl: "https://chat.whatsapp.com/"+linkgc}}})
reply("Convite de recrutamento, foi enviado para o privado dele com sucesso...");
break

case 'listatm':
if(!SoDono) return reply(mess.onlyOwner())
rgp = JSON.parse(fs.readFileSync("./arquivos/database/func/tmgroup.json"))
if(rgp.length == 0) return reply(`Não contém nenhum registro de transmissão, utilize ${prefix}rgtm no grupo que deseja que ele receba as transmissões do bot..`)
bl = "";
for ( i = 0; i < rgp.length; i++) {
bl += `( ${i+1} ) - ID: ${rgp[i].id}\n• Nome do Usuário(a) ou Grupo: ${rgp[i].infonome}\n-\n`
}
reply(bl)
break

case 'rgtm':
if(!SoDono) return reply(mess.onlyOwner())
rgp = JSON.parse(fs.readFileSync("./arquivos/database/func/tmgroup.json"))
if(JSON.stringify(rgp).includes(from)) return reply("Este grupo/usuário já está registrado na lista de transmissão") 
rgp.push({id: from, infonome: `${isGroup ? groupName: pushname}`})
fs.writeFileSync("./arquivos/database/func/tmgroup.json", JSON.stringify(rgp))
reply("Registrado com sucesso, quando for realizada as transmissões, esse grupo/usuário estará na lista.")
break

case 'tirardatm':
if(!SoDono) return reply(mess.onlyOwner())
rgp = JSON.parse(fs.readFileSync("./arquivos/database/func/tmgroup.json"))
if(!JSON.stringify(rgp).includes(from)) return reply("Este grupo/usuário não está registrado para ser tirado da lista de transmissão") 
if(q.trim().length > 4) {
var ustm = rgp.map(i => i.id).indexOf(q.trim())
} else {
var ustm = rgp.map(i => i.id).indexOf(from)
}
rgp.splice(ustm, 1)
fs.writeFileSync("./arquivos/database/func/tmgroup.json", JSON.stringify(rgp))
reply("Grupo/Usuário tirado da lista de transmissão com sucesso")
break

case 'fazertm':
if(!SoDono) return reply(mess.onlyOwner())
var rgp = JSON.parse(fs.readFileSync("./arquivos/database/func/tmgroup.json"))
if(rgp.lengh == 0) return reply("Não contém nenhum grupo registrado para realizar transmissão") 
await sleep(1000);
var DFC = "";
var rsm = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var pink = isQuotedImage ? rsm?.imageMessage: info.message?.imageMessage
var blue = isQuotedVideo ? rsm?.videoMessage: info.message?.videoMessage
var red = isQuotedMsg ? rsm?.textMessage: info.message?.textMessage
var purple = isQuotedDocument ? rsm?.documentMessage: info.message?.documentMessage
var yellow = isQuotedDocW ? rsm?.documentWithCaptionMessage?.message?.documentMessage: info.message?.documentWithCaptionMessage?.message?.documentMessage
var aud_d = isQuotedAudio ? rsm.audioMessage : ""
var figu_d = isQuotedSticker ? rsm.stickerMessage : ""
var red = isQuotedMsg && !aud_d &&!figu_d && !pink && !blue&& !purple && !yellow? "Transmissão do Proprietário: "+rsm.conversation: info.message?.conversation
var green = isQuotedMsg2 && !aud_d &&!figu_d && !red && !pink && !blue && !purple && !yellow ? "Transmissão do Proprietário: "+rsm.extendedTextMessage?.text : info?.message?.extendedTextMessage?.text
if(pink) {
var DFC = pink
pink.caption = q.length > 1 ? "Transmissão do Proprietário: "+q : pink.caption.replace(new RegExp(prefix+command, "gi"), `Transmissão do Proprietário: ${ownerName}\n\n`)
pink.image = {url: pink.url}
} else if(blue) {
var DFC = blue  
blue.caption = q.length > 1 ? "Transmissão do Proprietário: "+q : blue.caption.replace(new RegExp(prefix+command, "gi"), `Transmissão do Proprietário: ${ownerName}\n\n`)
blue.video = {url: blue.url}
} else if(red) {
black = {}
black.text = red.replace(new RegExp(prefix+command, "gi"), `Transmissão do Proprietário: ${ownerName}\n\n`)
var DFC = black
} else if(!aud_d && !figu_d && green) {
brown = {}
brown.text = green.replace(new RegExp(prefix+command, "gi"), `Transmissão do Proprietário: ${ownerName}\n\n`)
var DFC = brown
} else if(purple) {
var DFC = purple
purple.document = {url: purple.url} 
} else if(yellow) {
var DFC = yellow 
yellow.caption = q.length > 1 ? "Transmissão do Proprietário: "+q : yellow.caption.replace(new RegExp(prefix+command, "gi"), `Transmissão do Proprietário: ${ownerName}\n\n`)
yellow.document = {url: yellow.url}  
} else if(figu_d) {
var DFC = figu_d
figu_d.sticker = {url: figu_d.url}
} else if(aud_d) {
var DFC = aud_d
aud_d.audio = {url: aud_d.url}
}
for (i = 0; i < rgp.length; i++) {
await yurizin.sendMessage(rgp[i].id, DFC)}
break

case 'grupo': 
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins());
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
if(args.length < 1) return reply(`🤔 Hmm, você parece que está usando de forma errada senhor(a)!\n- Saiba o uso detalhado, através do argumento: _${prefix}grupo *--help*_`);
groupI = await yurizin.groupMetadata(from);
if(args[0] === '--help') return await mention(mess.helpGroupSettings(prefix, sender));
if (args[0] === '-open' || args[0] === 'a') {
if(groupI.announce == false) return await reply('O grupo já está aberto, não é possível solicitar para abrir o que já aberto.', {reagir: "✅"});
await reply('O grupo acaba de ser aberto com êxito na execução do pedido...', {reagir: "🔓"});
await yurizin.groupSettingUpdate(from, 'not_announcement');
} else if(args[0] === '-close' || args[0] === 'f') {
if(groupI.announce == true) return reply('O grupo já está fechado, não é possível solicitar para fechar o que já se encontra fechado...');
await reply('O grupo acaba de ser fechado com êxito na execução do pedido...', {reagir: "🔒"});
await yurizin.groupSettingUpdate(from, 'announcement');
} else if(args[0] === '-livre') {
if (groupI.restrict == false) return await reply('O grupo não possuí nenhuma restrição de alteração nos dados, ou seja, todos podem alterar.', {reagir: "✅"});
await reply('A partir de agora, todos os membros tem a permissão de editar as configurações do grupo.', {reagir: "✅"});
await yurizin.groupSettingUpdate(from, 'unlocked');
} else if(args[0] === '-private') {
if (groupI.restrict == true) return await reply('O grupo já possuí a restrição aos administradores! Então, não tem como ativar duas vezes.', {reagir: "✅"});
await reply('A partir de agora, somente os administradores do barzinho tem a permissão de editar os configurações do grupo.', {reagir: "✅"});
await yurizin.groupSettingUpdate(from, 'locked');
}
break 

case 'grupoinfo':
case 'infogrupo':
case 'infogp':  
case 'gpinfo':  
case 'regras':  
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
try { 
   var ppUrl = await yurizin.profilePictureUrl(from, 'image') 
} catch { 
    var ppUrl = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH8bC8B5Cwle4BcA3o9Pk-3_fzYrUMTvgF6A&s` 
};
var puxarInfo = await yurizin.groupMetadata(from)
var returnAnnounce = puxarInfo.announce === false ? "Sim" : puxarInfo.announce === true ? "Não" : undefined;
var returnRestrict = puxarInfo.restrict === false ? "Sim" : puxarInfo.restrict === true ? "Não" : undefined;
var memberAddMode = puxarInfo.memberAddMode === false ? "Não" : puxarInfo.memberAddMode === true ? "Sim" : undefined;
var infoCreator = puxarInfo.subjectOwner || "Não encontrado"
infoGroup = `• Nome: *${puxarInfo.subject}*\n• ID: *${puxarInfo.id}*\n• Proprietário(a): *@${infoCreator.replace("@s.whatsapp.net", "")}*\n• Criação: *${moment(`${puxarInfo.creation}` * 1000).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss')}*\n—\n• *${groupAdmins.length}* admins, *${somembros.length}* membros no grupo, no total contém *${puxarInfo.participants.length}* participantes.\n—\n• Todos os participantes podem enviar mensagens? *${returnAnnounce}*\n• Edição livre de informações do grupo _(nome, desc. e etc)_: *${returnRestrict}*\n• Membro pode adicionar outro membro no grupo? *${memberAddMode}*\n—\n• Descrição:\n\`\`\`${puxarInfo?.desc || 'Sem descrição no grupo.'}\`\`\``
await yurizin.sendMessage(from, {image: {url: ppUrl}, caption: infoGroup, mentions: [infoCreator]}, {quoted: selo})
break 

case 'marcar':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
async function marcac() {
bla = []
blad = `• Mencionando os membros comuns do grupo ou de uma comunidade. ${!q ? "" : `\n*Mensagem:* ${q}`}\n\n`
for( let i of somembros ) {
blad += `» @${i.split("@")[0]}\n`
bla.push(i)
}
blam = JSON.stringify(somembros)
if(blam.length == 2) return reply(`❌️ Olá *${pushname}* - Não contém nenhum membro comum no grupo, é sim apenas administradores. `)
await mentions(blad, bla, true)  
}
marcac().catch((error) => {
console.log(error)
})
break

case 'marcar2':
try {
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())  
if(q.includes(`${prefix}`)) return reply("Não pode utilizar comandos nesse comando.")
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += ''
for (let mem of groupMembers) {
teks += `╠➥ @${mem.id.split('@')[0]}\n`
members_id.push(mem.id)
}
reply(teks)
} catch {
reply('Erro ao mencionar.')
}
break

case 'marcarwa':
try {
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())  
if(q.includes(`${prefix}`)) return reply("Não pode utilizar comandos nesse comando")
members_id = []
teks = (args.length > 1) ? body.slice(10).trim() : ''
teks += ''
for (let mem of groupMembers) {
teks += `╠➥ https://wa.me/${mem.id.split('@')[0]}\n`
members_id.push(mem.id)
}
await yurizin.sendMessage(from, {text: teks}, {quoted: selo})
} catch {
reply('Erro ao mencionar.')
}
break

case 'reviverqr':
if(!SoDono) return reply(mess.onlyOwner())
exec(`cd ${qrcode} && rm -rf pre-key* sender* session*`);
setTimeout(async () => {
    await reply("Reiniciando...")
    setTimeout(async () => {
        process.exit()
    }, 1200)
}, 1000)
break

case 'ptvmsg':
if (!isQuotedVideo && !info.message.videoMessage) return reply('Marque um vídeo/gif que você deseja converter para mensagem de vídeo.');
await yurizin.relayMessage(from, {ptvMessage: isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage }, {})
break

case 'reviver':
if(!isGroup) return reply(mess.onlyGroup())
if(!SoDono) return reply(mess.onlyOwner())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque uma mensagem do alvo!')
await sleep(5000)
response2 = await yurizin.groupParticipantsUpdate(from, [menc_prt], "add" )
reply('Usuario adicionado de volta ao grupo.')
break

case 'sairgp':
if(isGroup && !SoDono && !info.key.fromMe) return reply("Este comando só o bot ou o dono pode executar..")
try {
await yurizin.groupLeave(from)
} catch(erro) {
reply(String(erro))
}
break

case 'seradm':
if(!SoDono) return reply(mess.onlyOwner());
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
await mentions(`@${sender.split("@")[0]} Pronto - Agora você é um administrador..`, [sender], true)
await yurizin.groupParticipantsUpdate(from, [sender], "promote");
break

case 'sermembro':
if(!SoDono) return reply(mess.onlyOwner());
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
await mentions(`@${sender.split("@")[0]} Pronto - Agora você é um membro comum novamente..`, [sender], true)
await yurizin.groupParticipantsUpdate(from, [sender], "demote")
break

case 'advertir':
case 'adverter': 
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(menc_os2 == botNumber) return reply("Não pode advertir o próprio bot.");
if(menc_os2 == nmrdn) return reply("Não pode advertir o próprio dono do bot.");
if(groupAdmins.includes(menc_os2)) return reply("Não é possível advertir adminstrador do grupo.");
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("Não tem como advertir um usuário que não se encontra mais no grupo.")
ADVT.push(menc_os2); updateGroup(dataGp)  
setTimeout(async() => {
var dfqn = ADVT.filter(x => x == menc_os2).length
var dfntxt = mess.warningAdvertencia(menc_os2, dfqn)
if(!dfntxt.includes("3/3")) {
if(!JSON.stringify(ADVT).includes(sender)) {
await sleep(1500); 
await mentions(dfntxt, [menc_os2])
} else if(dfqn == 2) {
await sleep(1500); 
await mentions(dfntxt, [menc_os2])
}} else {
await yurizin.sendMessage(from, {text: mess.finishAdvertencia(menc_os2), mentions: [menc_os2]}, {quoted: info})
await sleep(1500)
await yurizin.groupParticipantsUpdate(from, [menc_os2], "remove")
var i = ADVT.indexOf(menc_os2); 
ADVT.splice(i, 3); updateGroup(dataGp)}}, 3000)
break

case 'rmadv':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!marc_tds) return reply("Você esqueceu de mencionar o alvo após o comando.")
adv = dataGp[0].advertir.map(i => i).indexOf(marc_tds)
if(adv < 0) return reply("Este usuário não contém nenhuma advertência no grupo.")
dataGp[0].advertir.splice(adv, 1)
updateGroup(dataGp)
reply("A advertência do usuário neste grupo foi retirada com sucesso!")
break

//======≠(INFOS/EXECUÇÃO/DONO)≠=========\\

case 'sairdogp':
if(!SoDono) return reply(mess.onlyOwner())  
if(!q) return reply(`Você deve visualizar o comando ${prefix}listagp e olhar de qual o grupo quer sair, e veja a numeração dele, e só digitar\nExemplo: ${prefix}sairdogp 0\nesse comando é para o bot sair do grupo que deseja..`)
var getGroups = await yurizin.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var ingfoo = groups.map(v => v)
try {
await yurizin.sendMessage(ingfoo[q].id, {text: "Irei sair do grupo, por ordem do meu dono, adeus..."}) 
setTimeout(async() => {
await yurizin.groupLeave(ingfoo[q].id)
}, 5000)
} catch(erro) {
reply(String(erro))
}
reply("Pronto meu dono, sair do grupo que você queria, em caso de dúvidas acione o comando listagp pra verificar..")
break

case 'listagp':
if(!SoDono && !isnit && !info.key.fromMe) return reply(mess.onlyOwner())
var getGroups = await yurizin.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var ingfoo = groups.map(v => v)
ingfoo.sort((a, b) => (a[0] < b.length))
teks1 = `[Total: *${ingfoo.length}*] - Lista de Grupos e comunidades que estou atualmente:\n—\n`
for (let i = 0; i < ingfoo.length; i++) {
var metadt = await yurizin.groupMetadata(ingfoo[i].id);
try {
var linkdogp = await yurizin.groupInviteCode(ingfoo[i].id)
} catch {
var linkdogp = "Não foi possivel puxar o link."
}
teks1 += `( ${i+1} ) - Nome do Grupo: ${ingfoo[i].subject}\nID: ${ingfoo[i].id}\nLink do Grupo: https://chat.whatsapp.com/${linkdogp}\nCriado por: ${metadt.subjectOwner}\nCriado em: ${moment(`${ingfoo[i].creation}` * 1000).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss')}\nTotal de Participantes: ${ingfoo[i].participants.length}\n—\n`
}
reply(teks1)
break

case 'atividade':
case 'atividades':
try{
if(!isGroupAdmins && !issupre && !ischyt) return reply(mess.onlyAdmins())
if(isGroup && JSON.stringify(countMessage).includes(from)) {
var i6 = countMessage.map(i => i.groupId).indexOf(from)
if(countMessage[i6].numbers.length == 0) return
teks = `*Atividade dos membros do grupo:*\n–\n`
for(i = 0; i < countMessage[i6].numbers.length; i++) {
var i8 = countMessage[i6].numbers.map(i => i.id).indexOf(countMessage[i6].numbers[i].id)  
var uscnt = countMessage[i6].numbers[i]
teks += `• Participante: *@${uscnt.id.split('@')[0]}*\n• Quantidade de comandos usados pelo(a) participante no grupo: *${uscnt.cmd_messages}*\n• Quantidade de mensagens enviadas pelo(a) participante: *${uscnt.messages}*\n• O participante no momento está conectado em: *${uscnt.aparelho}*\n• Quantidade de figurinhas enviadas no grupo: *${uscnt.figus}*\n–\n`
}
await mention(teks)
} else return reply('*Nada foi encontrado*')
} catch(error) {
console.log(error)
}
break

case 'inativos':
case 'inativo':  
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(q.match(/[a-z]/i) || !q) return reply(`Exemplo: ${prefix+command} 0\nIsso mostrará quantas pessoas tem 0 mensagens no grupo, e se usar 5, vai mostrar quantos usuários tem 5 mensagens ou menos..`)
await ClearMembersInactive()
var i2 = countMessage?.map(x => x.groupId)?.indexOf(from)
blue = []; for (i of countMessage[i2].numbers) {
if(i.messages <= q.trim())
if(i.figus <= q.trim())
if(i.cmd_messages <= q.trim())
if(!groupAdmins.includes(i.id))
if(!numerodonos.includes(i.id))
if(i.id != botNumber)
if(groupMembers.map(i => i.id).includes(i.id))
blue.push(i.id)}; for ( i of countMessage[i2].numbers) {
if(!groupMembers.map(i => i.id).includes(i.id))
if(i.id.length > 5)
blue.push(i.id)}
if(blue.length == 0) return reply(`Não tem pessoas com ${q} mensagens..`)
bli = `Usuários com *${q.trim()}* mensagem(ns) pra baixo estão listados abaixo, verifique:\n–\n`
for (ac = 0; ac < blue.length; ac++) {
bli += `*${ac+1}.* @${blue[ac].split("@")[0]}\n`
}
await mention(bli)
break

case 'banghost':
if(!isGroup) return reply(mess.onlyGroup())  
if(!SoDono) return reply(mess.onlyOwner())
if(q.match(/[a-z]/i) || !q || q.length > 3) return reply(`Digite a partir de quantas mensagens pra baixo você deseja remover (que não interaje no grupo).\nExemplo: ${prefix+command} 0`)
var i2 = countMessage?.map(x => x.groupId)?.indexOf(from)
blue = []; for (i of countMessage[i2].numbers) {
if(i.messages <= Number(q.trim()))
if(i.figus <= Number(q.trim()))
if(i.cmd_messages <= Number(q.trim()))
if(!groupAdmins.includes(i.id))
if(!numerodonos.includes(i.id))
if(i.id != botNumber)
if(groupMembers.map(i => i.id).includes(i.id))
blue.push(i.id)}; for ( i of countMessage[i2].numbers) {
if(!groupMembers.map(i => i.id).includes(i.id))
if(i.id.length > 5)
blue.push(i.id)}
if(blue.length == 0) return reply(`Não tem mais pessoas com ${q.trim()} mensagem(ns) para eu remover..`)
for ( i = 0; i < blue.length; i++) {
await sleep(1000)
await yurizin.groupParticipantsUpdate(from, [blue[i]], "remove")}
break

case 'totag': case 'cita': case 'hidetag':
if(!isGroup) return reply(mess.onlyGroup());
if(!isGroupAdmins) return reply(mess.onlyAdmins());
var options = "";
var imageMessage = isQuotedImage ? info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.imageMessage : info.message?.imageMessage;
var videoMessage = isQuotedVideo ? info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.videoMessage : info.message?.videoMessage;
var documentMessageNoCaption = isQuotedDocument ? info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.documentMessage : info.message?.documentMessage;
var documentMessageWCaption = isQuotedDocW ? info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.documentWithCaptionMessage?.message?.documentMessage : info.message?.documentWithCaptionMessage?.message?.documentMessage;
var audioMessage = isQuotedAudio ? info.message?.extendedTextMessage?.contextInfo?.quotedMessage.audioMessage : "";
var stickerMessage = isQuotedSticker ? info.message?.extendedTextMessage?.contextInfo?.quotedMessage.stickerMessage : "";
var conversation = isQuotedMsg && !audioMessage && !stickerMessage && !imageMessage && !videoMessage && !documentMessageNoCaption && !documentMessageWCaption ? info.message?.extendedTextMessage?.contextInfo?.quotedMessage.conversation : info.message?.conversation;
var extendedTextMessage = info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.extendedTextMessage?.text || info?.message?.extendedTextMessage?.text;
var MRC_TD = groupMembers.map(i => i.id);
  if (imageMessage && !audioMessage && !documentMessageNoCaption) {
    var options = {image: await getFileBuffer(imageMessage, 'image'), caption: q.length > 1 ? q.trim() : imageMessage.caption.replace(`${prefix+command}`, "").trim(), contextInfo: {forwardingScore: 50000, isForwarded: true, mentionedJid: MRC_TD, remoteJid: info.key.remoteJid}};
  } else if (videoMessage && !audioMessage && !documentMessageNoCaption) {
    var options = {video: await getFileBuffer(videoMessage, 'video'), caption: q.length > 1 ? q.trim() : videoMessage.caption.replace(`${prefix+command}`, "").trim(), contextInfo: {forwardingScore: 50000, isForwarded: true, mentionedJid: MRC_TD, remoteJid: info.key.remoteJid}};
  } else if (conversation && !audioMessage && !documentMessageNoCaption) {
    var options = {text: q.length > 1 ? q.trim() : conversation.replace(`${prefix+command}`, "").trim(), contextInfo: {forwardingScore: 50000, isForwarded: true, mentionedJid: MRC_TD, remoteJid: info.key.remoteJid}};
  } else if (!audioMessage && !stickerMessage && extendedTextMessage && !documentMessageNoCaption) {
    var options = {text: q.length > 1 ? q.trim() : extendedTextMessage.replace(`${prefix+command}`, "").trim(), contextInfo: {forwardingScore: 50000, isForwarded: true, mentionedJid: MRC_TD, remoteJid: info.key.remoteJid}};
  } else if (documentMessageNoCaption) {
     var options = {document: await getFileBuffer(documentMessageNoCaption, 'document'), caption: q.length > 1 ? q.trim() : documentMessageNoCaption.caption.replace(`${prefix+command}`, "").trim(), mimetype: documentMessageNoCaption.mimetype, fileName: documentMessageNoCaption.fileName, contextInfo: {forwardingScore: 50000, isForwarded: true, mentionedJid: MRC_TD, remoteJid: info.key.remoteJid}};
  } else if (documentMessageWCaption && !audioMessage) {
    var options = {document: await getFileBuffer(documentMessageWCaption, 'document'), caption: q.length > 1 ? q.trim() : documentMessageWCaption.caption.replace(`${prefix+command}`, "").trim(), mimetype: documentMessageWCaption.mimetype, fileName: documentMessageWCaption.fileName, contextInfo: {forwardingScore: 50000, isForwarded: true, mentionedJid: MRC_TD, remoteJid: info.key.remoteJid}};
  } else if (stickerMessage && !audioMessage) {
    var options = {sticker: await getFileBuffer(stickerMessage, 'sticker'), contextInfo: {forwardingScore: 50000, isForwarded: true, mentionedJid: MRC_TD, remoteJid: info.key.remoteJid}};
  } else if (audioMessage) {
    var options = {audio: await getFileBuffer(audioMessage, 'audio'), ptt: true, contextInfo: {forwardingScore: 50000, isForwarded: true, mentionedJid: MRC_TD, remoteJid: info.key.remoteJid}};
  }
await yurizin.sendMessage(from, options).catch(() => reply('Erro! Não foi possível mencionar os participantes, talvez a mensagem que foi atribuída ao comando pode ter ocorrido um erro na leitura. Tente com outra mídia, caso o erro persista entre em contato com o proprietário do BOT e solucione!'));
break

case 'correio':
txt = args.join(" ")
if(!txt) return reply(mess.syntaxAnonymousMail(prefix))
let txt1 = txt.split("/")[0].replace(/\D/g,''); let txt2 = txt.split("/")[1];
if(!txt1) return reply('*Cadê o número do destinatário?*')
if(!txt2) return reply('*Cadê a mensagem para ser enviada ao destinatário?*')
let [result] = await yurizin.onWhatsApp(txt1)
if(!result) return reply(`O número fornecido está indisponível no WhatsApp! Verifique por favor.`)
await reagir(from, "💌️")
reply(mess.sucessAnonymousMail())
await yurizin.sendMessage(result.jid, {text: mess.anonymousMail(txt2)}).catch(async(error) => {
return reply("Error ao encaminhar a mensagem, tente novamente mais tarde!")
})
break

case 'nome-bot':
if(!SoDono  && !isnit && !info.key.fromMe) return reply(mess.onlyOwner())  
config["botName"].value = q.trim()
fs.writeFileSync('./settings/config.json', JSON.stringify(config, null, 2))
reply(`O nome do bot foi alterado com sucesso para: ${config["botName"].value}`)
break

case 'nick-dono':
if(!SoDono  && !isnit && !info.key.fromMe) return reply(mess.onlyOwner()) 
config["nameOwner"].value = q.trim()
fs.writeFileSync('./settings/config.json', JSON.stringify(config, null, 2))
reply(`O nick do dono foi configurado para: ${config["nameOwner"].value}`)
break

case 'numero-dono':
if(!SoDono && !isnit && !info.key.fromMe) return reply(mess.onlyOwner())  
if(q.match(/[a-z]/i)) return reply("Apenas números.")
config["OwnerNumber"].value = q.trim().replace(new RegExp("[()+-/ +/]", "gi"), "");
fs.writeFileSync('./settings/config.json', JSON.stringify(config, null, 2))
reply(`O número dono foi configurado com sucesso para: ${config["OwnerNumber"].value}`)
break

case 'prefixo-bot': case 'setprefix':
if(args.length < 1) return
if(!SoDono && !isnit && !info.key.fromMe) return reply(mess.onlyOwner());
config["Prefix"].value = q.trim()
fs.writeFileSync('./settings/config.json', JSON.stringify(config, null, 2))
reply(`O prefixo foi alterado com sucesso para: ${config["Prefix"].value}`)
break

case 'fotomenu':
case 'fundomenu':
if(!SoDono) return reply(mess.onlyOwner())
if(!isQuotedImage) return reply("Marque uma imagem")
if((isMedia && !info.message.videoMessage || isQuotedImage) && !q.length <= 1) { 
reply(`Calma ae amigo(a), já estou trocando a foto do menu para você..`)
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
owgi = await getFileBuffer(boij, 'image')
res = await new uploader().pixhost(owgi)
setTimeout(async() => {
images["Main"].value = res;
fs.writeFileSync('./settings/images.json', JSON.stringify(images, null, 2))
reply(`A foto do menu foi alterada com sucesso para: *${images["Main"].value}*`)
}, 1200)
} else {
reply(`Mande uma imagem com o comando ${prefix + command} para trocar a foto de todos menu..`)
}
break

case 'wprivacyph':
if(!SoDono) return reply(mess.onlyOwner())
if(args.length < 1) return reply(`🤔 Hmm, você parece que está usando de forma errada senhor(a)!\n- Saiba o uso detalhado, através do argumento: _${prefix}wprivacyph *--help*_`);
if (args[0] === '--help') return await mention(mess.helpPhotoPrivacy(prefix, sender));
if (args[0] === '-all') {
reply(`A minha foto do perfil agora está visível à todos.`);
await yurizin.updateProfilePicturePrivacy('all')
} else if (args[0] === '-cntt') {
reply(`A minha foto do perfil agora está visível somente aos meus contatos.`);
await yurizin.updateProfilePicturePrivacy('contacts')
} else if (args[0] === '-noall') {
reply(`A foto do meu perfil está privada a todos, até mesmo ao senhor mestre.`);
await yurizin.updateProfilePicturePrivacy('none')
} else {
reply(`🤔 Hmm, você parece que está usando de forma errada senhor(a)!\n- Saiba o uso detalhado, através do argumento: _${prefix}wprivacyph *--help*_`);
}
break

case 'wprivacygp':
if(!SoDono) return reply(mess.onlyOwner())
if(args.length < 1) return reply(`🤔 Hmm, você parece que está usando de forma errada senhor(a)!\n- Saiba o uso detalhado, através do argumento: _${prefix}wprivacygp *--help*_`);
if (args[0] === '--help') return await mention(mess.helpGroupPrivacy(prefix, sender));
if (args[0] === '-all') {
reply(`Pronto, agora todos pode me adicionar em grupo normalmente.`)
await yurizin.updateGroupsAddPrivacy(`all`)
} else if (args[0] === '-cntt') {
reply(`Agora somente meus contatos, pode me adicionar em grupo.`)
await yurizin.updateGroupsAddPrivacy(`contacts`)
} else if (args[0] === '-noall') {
reply(`Agora ninguém pode ousar me adicionar em grupo, pois será negado.`)
await yurizin.updateGroupsAddPrivacy('none')
} else {
reply(`🤔 Hmm, você parece que está usando de forma errada senhor(a)!\n- Saiba o uso detalhado, através do argumento: _${prefix}wprivacygp *--help*_`);
}
break

case 'nomegp':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
await yurizin.groupUpdateSubject(from, q);
await yurizin.sendMessage(from, {text: 'Sucesso, alterou o nome do grupo.'}, {quoted: selo})
break

case 'envmsg':
if(!SoDono && !isnit) return reply(mess.onlyOwner())
var [tx1, tx2] = q.split("/")
await yurizin.sendMessage(tx1, {text: tx2})
break

case 'admins':
case 'listadmins':  
case 'listaadmins':   
if(!isGroup) return reply(mess.onlyGroup())
ytb = `Lista de admins do grupo *${groupMetadata.subject}*\n*Total de Adminstradores:* ${groupAdmins.length}\n-\n`
no = 0
for (let admon of groupAdmins) {
no += 1
ytb += `( ${no.toString()} ) - @${admon.split('@')[0]}\n`
}
await mentions(ytb, groupAdmins, true)
break

case 'ativo': case 'on': case 'voltei':
if(!isGroupAdmins && !SoDono) return await reply("Este comando só pode ser usado por membros superiores (são meus donos) e administradores do barzinho! Então, vaza daqui, camponês! 🌾🤬", {reagir: "🤬"});
if(DonoOficial === sender) {
  if(fs.existsSync("./arquivos/database/func/afk/afk-@" + numerodonos_ofc + ".json")) {  
    await DLT_FL("./arquivos/database/func/afk/afk-@" + numerodonos_ofc + ".json");
    await reply("Bem vindo(a) de volta, meu comandante supremo(a)! 🎉🫡 Agora você está online novamente, juízo hein.")
  } else {
    await reply(`🤥 Você ainda não registrou nenhuma mensagem de ausência, caso queira registrar sua ausência comandante, use o comando: ${prefix}Ausente.`, {reagir: "❌️"})
  }
} else if(isGroupAdmins) {
  if(!JSON.stringify(dataGp[0].ausentes).includes(sender)) return reply("🤣 Você ainda não registrou nenhuma mensagem de ausência! Como quer voltar a trabalhar no barzinho, se você no momento está trabalhando?")
  dataGp[0].ausentes.splice(dataGp[0].ausentes.map(x => x.id).indexOf(sender), 1)
  updateGroup(dataGp);
  await reply("Registro de ausência removido com sucesso, adminstrador! Bem vindo de volta ao seu posto, soldado! 🫡")
}
break

case 'ausente': case 'off': case 'afk':
if(!isGroupAdmins && !SoDono) return await reply("Este comando só pode ser usado por membros superiores (são meus donos) e administradores do barzinho! Então, vaza daqui, camponês! 🌾🤬", {reagir: "🤬"});
if(!q.trim()) return reply(`Digite uma mensagem de ausência após o comando, por exemplo: ${prefix+command} Estou tomando banho!`)
if(DonoOficial === sender) {
    fs.writeFileSync("./arquivos/database/func/afk/afk-@" + numerodonos_ofc + ".json", JSON.stringify({ hora: moment.tz('America/Sao_Paulo').format('HH:mm:ss'), data: moment.tz('America/Sao_Paulo').format('DD/MM/YYYY'), msg: q?.trim() }, null, 2));
    await reply(`🫡 Mensagem de ausência criada com sucesso, comandante! Caso desejar voltar, use o comando: *${prefix}Ativo*`)
} else if(isGroupAdmins) {
    if(!JSON.stringify(dataGp[0].ausentes).includes(sender)) {
        dataGp[0].ausentes.push({id: sender, msg: q.trim()}); await updateGroup(dataGp);
        await reply(`🫡 Mensagem de ausência criada com sucesso, soldado(a)! Caso desejar desativar a mensagem de ausência, use o comando: *${prefix}ativo*`);
    } else {
        dataGp[0].ausentes[dataGp[0].ausentes.map(i => i.id).indexOf(sender)].msg = q.trim();
        await updateGroup(dataGp)
        await reply(`🫡 Mensagem de ausência foi alterada com sucesso, soldado(a)! Caso desejar desativar a mensagem de ausência, use o comando: *${prefix}ativo*`);
    }
}
break

case 'subdono1':
if(args.length < 1) return
if(!SoDono && !isnit && !issupre && !ischyt) return await reply(mess.onlyOwner());
config["subOwners"].dono1 = q.trim().replaceAll("@", "")
fs.writeFileSync('./settings/config.json', JSON.stringify(config, null, 2))
reply(`Agora contém um primeiro sub dono(a) foi alterado com sucesso para: ${q}`)
break

case 'subdono2':
if(args.length < 1) return
if(!SoDono && !isnit && !issupre && !ischyt) return await reply(mess.onlyOwner());
config["subOwners"].dono2 = q.trim().replaceAll("@", "")
fs.writeFileSync('./settings/config.json', JSON.stringify(config, null, 2))
reply(`Agora contém um segundo sub dono(a) foi alterado com sucesso para: ${q}`)
break

case 'subdono3':
if(args.length < 1) return
if(!SoDono && !isnit && !issupre && !ischyt) return await reply(mess.onlyOwner());
config["subOwners"].dono3 = q.trim().replaceAll("@", "");
fs.writeFileSync('./settings/config.json', JSON.stringify(config, null, 2))
reply(`Agora contém um terceiro sub dono(a) foi alterado com sucesso para: ${q}`)
break

case 'subdono4':
if(args.length < 1) return
if(!SoDono && !isnit && !issupre && !ischyt) return await reply(mess.onlyOwner());
config["subOwners"].dono4 = q.trim().replaceAll("@", "");
fs.writeFileSync('./settings/config.json', JSON.stringify(config, null, 2))
reply(`Agora contém um quarto sub dono(a) foi alterado com sucesso para: ${q}`)
break

case 'subdono5':
if(args.length < 1) return
if(!SoDono && !isnit && !issupre && !ischyt) return await reply(mess.onlyOwner());
config["subOwners"].dono5 = q.trim().replaceAll("@", "");
fs.writeFileSync('./settings/config.json', JSON.stringify(config, null, 2))
reply(`Agora contém um quinto sub dono(a) foi alterado com sucesso para: ${q}`)
break

case 'addpremium': 
if(!SoDono) return reply(mess.onlyOwner())
barra = q.replace(" /", "/").replace("/ ", "/").replace(" / ", "/")
var [nmr, tempo50] = barra.split('/')
if(!nmr || !tempo50) return await mention(`Você esqueceu de colocar o número do indivíduo e a quantidade de dias que o(a) usuário(a) como premium.\n• Segue o exemplo de uso correto do comando: *${prefix+command} @${nmrdn.split('@')[0]}/30*\n–––\n• Para colocar o usuário sem duração de expiração do premium, você usa o *0* como quantidade de dias.`)
usur = nmr.includes('@') ? nmr.split('@')[1] + "@s.whatsapp.net" : nmr + "@s.whatsapp.net"
mega = Number(tempo50) > 0 ? false : true
dvip = moment.tz('America/Sao_Paulo').format('DD')
bla = JSON.stringify(premium).includes(usur)
if(bla) {
AB = premium.map(i => i.id).indexOf(usur)
if(premium[AB].infinito == true) return reply(`Não é possível adicionar + dias ao usuário, por motivos que ele contém o premium infinito.`)
premium[AB].dias += Number(tempo50)
fs.writeFileSync('./arquivos/database/func/users/premium.json', JSON.stringify(premium))
await yurizin.sendMessage(from, {text: `${tempo50} dia${Number(tempo50) > 1 ? `s` : ``} fo${Number(tempo50) > 1 ? `ram` : `i`} adicionado${Number(tempo50) > 1 ? `s` : ``} ao usuário @${usur.split("@")[0]}`, mentions: [usur]}, {quoted: info})
} else {
premium.push({id: usur, dias: Number(tempo50), save: Number(dvip), infinito: mega})
fs.writeFileSync('./arquivos/database/func/users/premium.json', JSON.stringify(premium))
await yurizin.sendMessage(from, {text: `${Number(tempo50) > 0 ? `@${usur.split("@")[0]} foi adicionado à lista premium com sucesso!` : `@${usur.split("@")[0]} foi agraciado com o benefício do premium infinito!`}`, mentions: [usur]}, {quoted: info})
}
break

case 'delpremium':
if(!SoDono) return reply(mess.onlyOwner())
if(!marc_tds) return reply(`Marque o usuário que deseja remover da lista premium.️`)
if(!JSON.stringify(premium).includes(marc_tds)) return reply("Este número não está incluso atualmente na lista de usuários premium(ns)..")
AB = premium.map(i => i.id).indexOf(marc_tds)
premium.splice(AB, 1)
fs.writeFileSync('./arquivos/database/func/users/premium.json', JSON.stringify(premium))
await yurizin.sendMessage(from, {text: `@${marc_tds.split("@")[0]} foi removido da lista premium com sucesso!`, mentions: [marc_tds]}, {quoted: info})
break

case 'consultar_premium':
if(!JSON.stringify(premium).includes(sender)) return reply("Você não está incluso atualmente na lista de usuários premium(ns)..")
AB = premium.map(i => i.id).indexOf(sender)
await mention(`Usuário: @${premium[AB].id.split('@')[0]}\n• Expiração: ${premium[AAB].infinito == false ? `*Seu premium irá expirar em ${premium[AB].dias} dia${premium[AB].dias > 1 ? `s` : ``}.*` : `*Não existe um dia de expiração do seu premium.*`}`)
break

case 'premiumlist':
if(premium.length == 0) return reply(`Existe *0* user(s) premium(ns), ou seja, não existe ninguém.`)
tkks = `[Total: *${premium.length}*] - Lista de usuário(s) premium temporário(s)/infinito(s):\n–\n`
tkks += premium.map((v, index) =>  `*[${index+1}]* - Usuário: @${v.id.split('@')[0]}\n• Expiração: ${v.infinito == false ? `*O premium do usuário expira em ${v.dias} dia${v.dias > 1 ? `s` : ``}.*` : `*Não existe um dia de expiração do premium do usuário.*`}`).join('\n––\n')
await mention(tkks)
break

case 'limpar':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
await yurizin.sendMessage(from, {text: clear}, {quoted: selo, contextInfo : { forwardingScore: 500, isForwarded:true}})
break

case 'd_':
await yurizin.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.message.buttonsResponseMessage.contextInfo.stanzaId, participant: botNumber}})
break

case 'doc':
case 'docfake':
try {
sprd = "|"
if(!q) return reply(`${prefix + command} exemplo${sprd}500${sprd}apk\n-\nOs tipos aceitos por enquanto são: pdf > xml > zip > jpg > ppt > apk > txt > aac > pptx > aac > m4a > mp4 > mp3 > svg > png`)
kls = args.join(' ')
let nomedoc = kls.split(sprd)[0] || `${NomeDoBot}`
let peso = kls.split(sprd)[1] * 1000000 || '1000000'
let mimetyp = kls.split(sprd)[2].replace(" ", "") || 'gif'
let thumbc = kls.split(sprd)[3] || 'https://google.com/'
if(mimetyp.toLowerCase() == 'pdf') mimetyp = 'application/pdf'
if(mimetyp.toLowerCase() == 'apk') mimetyp = 'application/vnd.android.package-archive'
if(mimetyp.toLowerCase() == 'aac') mimetyp = 'audio/aac'
if(mimetyp.toLowerCase() == 'xml') mimetyp = 'application/xml'
if(mimetyp.toLowerCase() == 'zip') mimetyp = 'application/zip'
if(mimetyp.toLowerCase() == 'jpg') mimetyp = 'image/jpeg'
if(mimetyp.toLowerCase() == 'ppt') mimetyp = 'application/vnd.ms-powerpoint'
if(mimetyp.toLowerCase() == 'pptx') mimetyp = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
if(mimetyp.toLowerCase() == 'mp4') mimetyp = 'video/mp4'
if(mimetyp.toLowerCase() == 'm4a') mimetyp = 'audio/mpeg'
if(mimetyp.toLowerCase() == 'mp3') mimetyp = 'audio/mpeg'
if(mimetyp.toLowerCase() == 'gif') mimetyp = 'image/gif'
if(mimetyp.toLowerCase() == 'png') mimetyp = 'image/png'
if(mimetyp.toLowerCase() == 'svg') mimetyp = 'image/svg+xml'
if(mimetyp.toLowerCase() == 'txt') mimetyp = 'text/plain'
_fileSync = fs.readFileSync('./arquivos/database/assets/document/document.txt'); 
await yurizin.sendMessage(from, {document: _fileSync, mimetype: mimetyp, jpegThumbnail: await getBuffer(thumbc), fileName: nomedoc, fileLength: peso, headerType: 4, contextInfo: { forwardingScore:999, isForwarded:true}}, {quoted: selo})
} catch (err) {
await reply(mess.error(), {reagir: "❌"})
}
break

case 'deletar': case 'delete': case 'del':  case 'd':
if(!menc_prt) return reply("Marque a mensagem do usuário que deseja apagar, do bot ou de alguém.")
await yurizin.sendMessage(from, {delete: { remoteJid: from, fromMe: false, id: info.message.extendedTextMessage.contextInfo.stanzaId, participant: menc_prt}})
break

case 'dell':
if(!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
try {
yurizin.sendMessage(from, {delete: {remoteJid: from, fromMe: false, id: info.message.extendedTextMessage.contextInfo.stanzaId, participant: menc_prt}});
await yurizin.groupParticipantsUpdate(from, [menc_os2], "remove");
} catch(error) {
console.log(error)}
break

case 'rvisu':case 'open':case 'revelar': try {
 await reagir(from, "👀");
  var RSMM = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
  var boij22 = RSMM?.imageMessage || info.message?.imageMessage || RSMM?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || RSMM?.viewOnceMessage?.message?.imageMessage;
  var boijj = RSMM?.videoMessage || info.message?.videoMessage || RSMM?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || RSMM?.viewOnceMessage?.message?.videoMessage;
  var boij33 = RSMM?.audioMessage || info.message?.audioMessage || RSMM?.viewOnceMessageV2?.message?.audioMessage || info.message?.viewOnceMessageV2?.message?.audioMessage || info.message?.viewOnceMessage?.message?.audioMessage || RSMM?.viewOnceMessage?.message?.audioMessage;
  if(boijj) {
  var px = boijj;
  px.viewOnce = false;
  px.video = {url: px.url};
  await yurizin.sendMessage(from,px,{quoted:info});
  } else if(boij22) {
  var px = boij22;
  px.viewOnce = false;
  px.image = {url: px.url};
  await yurizin.sendMessage(from,px,{quoted:info});
  } else if(boij33) {
  var px = boij33;
  px.viewOnce = false;
  px.audio = {url: px.url};
  await yurizin.sendMessage(from,px,{quoted:info});
  } else {
  return reply('Por favor, *mencione uma imagem, video ou áudio em visualização única* para executar o comando.');
  };
  } catch(e) {
  console.error(e);
  await reply(mess.error());
  };
  break

case 'fundobemvindo':
case 'fundobv':  
if(!SoDono && !isnit && !info.key.fromMe) return reply(mess.onlyOwner())
if(!isQuotedImage) return reply("Marque uma imagem..")
reply('Você deve marcar uma imagem com esse comando, se não for de primeira, tente novamente, ok? ')
if((isMedia && !info.message.videoMessage || isQuotedImage || isQuotedVideo ) && !q.length <= 1) {
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
owgi = await getFileBuffer(boij, 'image')
res = await new uploader().pixhost(owgi)
images['Welcome'].Enter = res;
fs.writeFileSync("./settings/images.json", JSON.stringify(images, null, 2));
reply(`A imagem de bem vindo foi alterado com sucesso para: ${res}`)
}
break

case 'fundosaiu':
if(!SoDono && !isnit && !info.key.fromMe) return reply(mess.onlyOwner())
if(!isQuotedImage) return reply("Marque uma imagem..")
reply('Você deve marcar uma imagem com esse comando, se não for de primeira, tente novamente, ok? ')
if((isMedia && !info.message.videoMessage || isQuotedImage || isQuotedVideo) && !q.length <= 1) {
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
owgi = await getFileBuffer(boij, 'image')
res = await new uploader().pixhost(owgi)
images['Welcome'].Left = res;
fs.writeFileSync("./settings/images.json", JSON.stringify(images, null, 2));
reply(`A imagem de saiu foi alterado com sucesso para: ${res.resultado}`)
}
break

case 'fundolevel':
if(!SoDono && !isnit && !info.key.fromMe) return reply(mess.onlyOwner())
if(!isQuotedImage) return reply("Marque uma imagem..")
reply('Você deve marcar uma imagem com esse comando, se não for de primeira, tente novamente, ok? ')
if((isMedia && !info.message.videoMessage || isQuotedImage || isQuotedVideo ) && !q.length <= 1) {
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
owgi = await getFileBuffer(boij, 'image')
res = await new uploader().pixhost(owgi)
images['Level'].value = res;
fs.writeFileSync("./settings/images.json", JSON.stringify(images, null, 2));
reply(`A imagem de fundo-level foi alterado com sucesso para: ${res.resultado}`)
}
break

case 'antiligar':
case 'antiligacao':  
case 'antiligação':  
if(!SoDono) return reply(mess.onlyOwner())
if(!isAnticall) {
definitions.AntiCall = true
fs.writeFileSync('./settings/definitions.json', JSON.stringify(definitions, null, 2))
reply(`O anti ligação foi ativado com sucesso. Caso alguém efetue uma ligação para o bot será bloqueado.`)
} else if(isAnticall) {
definitions.AntiCall = false
fs.writeFileSync('./settings/definitions.json', JSON.stringify(definitions, null, 2))
reply('O anti ligação foi desativado com sucesso.')
}
break

case 'antipv':  
if(!SoDono) return reply(mess.onlyOwner())
if(!isAntiPv) {
definitions.AntiPrivado["status"] = true
fs.writeFileSync('./settings/definitions.json', JSON.stringify(definitions, null, 2))
reply(`Você acabou de ativar o anti mensagem no privado (ANTI-PV), agora quem enviar qualquer tipo de mensagem o bot irá bloquear de forma automática! Agora somente só poderá ser usado em grupos.`);
} else if(isAntiPv) {
definitions.AntiPrivado["status"] = false
fs.writeFileSync('./settings/definitions.json', JSON.stringify(definitions, null, 2))
reply('A função antipv foi desabilitada com sucesso, agora todos podem me usar no pv.')
}
break

case 'antipv2':
if(!SoDono) return reply(mess.onlyOwner())
if(!isAntiPv2) {
definitions.AntiPrivado2["status"] = true
fs.writeFileSync('./settings/definitions.json', JSON.stringify(definitions, null, 2))
reply("Antipv2 ativado com sucesso, o pv pode ser usado, mas não bloquearei, só irei flodar a cada mensagem que ele enviar avisando..");
} else if(isAntiPv2) {
definitions.AntiPrivado2["status"] = false
fs.writeFileSync('./settings/definitions.json', JSON.stringify(definitions, null, 2))
reply("Antipv2 desativado com sucesso, agora o meu pv está totalmente liberado.")
}
break

case 'antipv3':
if(!SoDono) return reply(mess.onlyOwner())
if(!isAntiPv3) {
definitions.AntiPrivado3["status"] = true
fs.writeFileSync('./settings/definitions.json', JSON.stringify(definitions, null, 2))
reply("Antipv3 ativado com sucesso, irei ignorar todas as mensagens recebidas no pv, exceto: donos e usuários premium..")
} else if(isAntiPv3) {
definitions.AntiPrivado3["status"] = false
fs.writeFileSync('./settings/definitions.json', JSON.stringify(definitions, null, 2))
reply("Antipv3 desativado com sucesso, agora responderei todos sem preferência!")
}
break

case 'limitarcmd': case 'limitarcomando': case 'limitecmd':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
dataGp[0].Limitar_CMD = !dataGp[0].Limitar_CMD
updateGroup(dataGp);
reply(dataGp[0]?.Limitar_CMD ? "Limitador de comandos ativado com sucesso no grupo: " + groupName : "Limitador de comandos desativado no grupo: " + groupName);
break

case 'tempocmd':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!q.trim()) return reply(`Exemplo: ${prefix+command} 120\n60 = 1 minuto\nExemplo que coloquei, com o : ${prefix}limitarcmd ativo, só podera usar comandos a cada 2 minutos\nBoa sorte.`)
dataGp[0].Limit_tempo = q.trim()
updateGroup(dataGp)
reply(`Tempo limite definido para: ${TimeCount(q.trim())} a cada comando.`)
break

case 'blockuser':
if(!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(mess.onlyOwner())
if(!q.length > 6) return reply("Marque o @ do usuário que deseja bloquear de ele utilizar os comandos, ou o número da fórma que copiar...")
var blcp = q.replace(new RegExp("[()+-/ @+/]", "gi"), "")+"@s.whatsapp.net"
var numblc = ban.indexOf(blcp)
if(numblc >= 0) return reply('*Esse número já esta incluso na lista de bloqueio.*')
ban.push(blcp)
fs.writeFileSync('./arquivos/database/func/users/banned.json', JSON.stringify(ban))
await yurizin.sendMessage(from, {text: mess.bannedMessage(blcp), mentions: [blcp]})
break

case 'unblockuser':
if(!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(mess.onlyOwner())
if(!q.length > 6) return reply("Marque o @ do usuário que deseja desbloquear pra ele utilizar os comandos, ou o número da fórma que copiar...")
var blcp = q.replace(new RegExp("[()+-/ @+/]", "gi"), "")+"@s.whatsapp.net"
var numbl = ban.indexOf(blcp)
if(numbl < 0) return reply('*Esse número não está incluso na lista de bloqueados.*')
pesquisar = blcp
processo = ban.indexOf(pesquisar)
while(processo >= 0){
ban.splice(processo, 1)
processo = ban.indexOf(pesquisar)
}
fs.writeFileSync('./arquivos/database/func/users/banned.json', JSON.stringify(ban))
await yurizin.sendMessage(from, {text: mess.unbannedMessage(blcp), mentions: [blcp]})
break


case 'acess':
if(!SoDono && !isnit && !issupre && !ischyt) return reply(mess.onlyOwner())
teks = body.slice(7)
await exec(teks, async(err, stdout) => {
if(err) return await yurizin.sendMessage(from, {text: `root@SabOficial:~ ${err}`}, {quoted: selo})
if(stdout) return await yurizin.sendMessage(from, {text: stdout})
})
break

case 'execut':
if(!SoDono  && !isnit && !issupre && !ischyt) return reply(mess.onlyOwner())
try {
return eval(`(async() => { ${args.join(' ')}})()`)
} catch(error) {
await yurizin.sendMessage(from, {text: `${error}`}, {quoted: info})
}
break

case 'exec':
if(!SoDono  && !isnit && !issupre && !ischyt) return
try{
paramsQuoted = info.message.extendedTextMessage.contextInfo.quotedMessage.conversation || info.message.extendedTextMessage.contextInfo.quotedMessage.extendedTextMessage.text;	
return await eval(`${paramsQuoted}`)
console.log(`[EXEC]~> ${paramsQuoted}`)
}catch(e){
reply(e)
}
break

case 'sender':
bla = isGroup ? info.key.participant : info.key.remoteJid
reply(bla)
break

case 'ping': 
await yurizin.sendMessage(from, {react: {text: `🏃🏻‍♀️`, key: info.key}})
const speedConverted = (Date.now() / 1000) - info.messageTimestamp;
yurizin.sendMessage(from, {text: mess.speed(speedConverted, os, TimeCount)}, {quoted: selo});
break                 
                  
case 'gtts':
try {
if (args.length < 1) return await yurizin.sendMessage(from,{text: `Cade o texto?, digite algo Exemplo:\n${prefix}gtts PT Oi`}, {quoted: selo})
const gtts = require('./arquivos/funcoes/gtts')(args[0])
if (args.length < 2) return await yurizin.sendMessage(from, {text: 'Falta colocar o código do idioma!'}, {quoted: selo})
dtt = body.slice(8)
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
if(dtt.length > 200) return reply('Para reduzir spam o máximo de letras permitidas são 200!')
gtts.save(ranm, dtt, async function() {
await exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, async(err) => {
await yurizin.sendMessage(from, {audio: fs.readFileSync(ranm), ptt:true, mimetype: "audio/mpeg"}, {quoted: selo}).catch(async(error) => {
return reply(mess.error())
})
DLT_FL(ranm); DLT_FL(rano)
})
})
} catch(error) {
return reply(mess.error())
}
break

case 'tagme':
const tagme = `@${sender.split("@")[0]} ✔️`
await mentions(tagme, [sender], true)
break

case 'avalie':
if(q.length < 1) return reply(`Exemplo: *${prefix}avalie* _“Bot muito bom, parabéns.”_`);
if(q.length > 400) return reply(`Você *utrapassou* o máximo de 400 caracteres.`);
await sendMentions(nmrdn, `📚🌟 *[Avaliação]* - Recebi uma avaliação do(a) usuário(a): *@${sender.split("@")[0]}*\n- Detalhes: _“${q}”_`);
await sendMentions(from, `Olá *@${sender.split("@")[0]}*, enviei sua avaliação para um dos meus superiores! Agradeço pelo uso contínuo de mim e pela avaliação, vamos melhorar a cada dia sempre! 🌟🤖`);
break

case 'bug':
if(q.length < 1) return reply('Campo vázio? Por favor, descreva o erro ocorrido para ser solucionado pela minha equipe!');
if(q.length > 800) return reply(`Você *utrapassou* o máximo de 800 caracteres.`);
await sendMentions(nmrdn, `🤖❌️ [ERROR] - O(a) usuário(a) *@${sender.split("@")[0]}* relatou a ocorrência de um erro ao utilizar um comando.\n- Detalhes: _“${q}”_`);
reply('Mensagem enviada ao meu superior, se enviar muitas mensagens repetida por zueiras, você será banido(a) de usar os comandos do bot.');
break

case 'sugestão': case 'sugestao':
if(q.length < 1) return reply(`Exemplo: *${prefix}sugestao* _“Opa, crie um comando tal, que ele funcione de tal maneira, isso será muito bom, não só pra mim, mas pra vários fazer isso..”_`)
if(q.length > 800) return reply(`Você *utrapassou* o máximo de 800 caracteres.`);
await sendMentions(nmrdn, `📮🌟 *[Sugestões]* - Sugestões de novos comandos, enviado pelo(a) usuário(a): *@${sender.split("@")[0]}*\n- Detalhes recebidos: _“${q}”_`);
reply("Mensagem enviada ao meu dono, obrigado pela sugestão, tentar ouvir o máximo possível de sugestões.");
break

case 'modoaluguel': case 'aluguel': case 'modorent':
if(!isGroup) return reply(mess.onlyGroup())
if(!SoDono) return reply(mess.onlyOwner())
if(args.length < 1) return reply('Aviso: 1 para ativar, 0 para desativar este recurso de forma global.')
if(Number(args[0]) === 1) {
if(isModoAluguel) return reply('Atualmente este modo já está ativado de forma global...')
definitions.ModoAluguel = true
fs.writeFileSync('./settings/definitions.json', JSON.stringify(definitions, null, 2))
reply('Ativou com sucesso o modo aluguel global, agora todos os grupos que o bot está devem ser registrados para o bot funcionar perfeitamente para todos os participantes/adms do grupo, com meus proprietários não haverá nenhuma restrição de uso.')
} else if(Number(args[0]) === 0) {
if(!isModoAluguel) return reply('O modo aluguel global não está ativo na configuração.')
definitions.ModoAluguel = false
fs.writeFileSync('./settings/definitions.json', JSON.stringify(definitions, null, 2))
reply('O modo aluguel foi desativado com sucesso, agora todos os comandos estarão funcionando para todos os participantes e adminstradores do grupo, sem a precisão de registrar o grupo no aluguel.')
} else {
reply('Aviso: 1 para ativar, 0 para desativar este recurso de forma global.')
}
break

case 'addcmdprem':
if(!SoDono) return reply(mess.onlyOwner())
tp = args.join(" ")
if(!args[0]) return reply(`Qual é o comando você vai adicionar na lista de uso exclusivo Premium? Por favor, especifique qual é ele após o comando.`);
if(tp.includes("addcmdprem addcmdprem") || (tp.includes("addcmdprem  addcmdprem"))) return reply(`Não tem como adicionar o mesmo comando à lista né veyr.`)
if(definitions.CommandsVIP.includes(args[0])) return reply('Este comando já está incluso na lista de comandos premium, verifique.')
if(!listCases().includes(args[0])) return reply("Comando inexistente...")
definitions.CommandsVIP.push(args[0])
fs.writeFileSync('./settings/definitions.json', JSON.stringify(definitions, null, 2))
reply(`O comando *${args[0]}* foi adicionado na lista de comandos premium.`)
break

case 'delcmdprem':
if(!SoDono) return reply(mess.onlyOwner())
if(!args[0]) return reply(`Qual é o comando você vai remover para uso exclusivo Premium e tornar uso público? Por favor, especifique qual após o comando.`);
tp = args.join(" ")
if(tp.includes("delcmdprem delcmdprem") || (tp.includes("delcmdprem  delcmdprem"))) return reply(`Não tem como adicionar o mesmo comando à lista né veyr.`)  
if(!premiumCmd.includes(args[0])) return reply('Este comando já está excluído da lista de comandos premium.')
var i = premiumCmd.indexOf(args[0])
definitions.CommandsVIP.splice(i, 1)
fs.writeFileSync('./settings/definitions.json', JSON.stringify(definitions, null, 2))
reply(`O comando *${args[0]}* foi tirado da lista de comandos premium.`)
break

case 'listacmdprem': case 'cmdpremlist':
if(premiumCmd.length == 0) return reply(`Existe *0* comando(s) adicionado(s) na lista de uso exclusivo, ou seja, não existe nenhum.`)
tkks = `[Total: *${premiumCmd.length}*] - Comandos que foram adicionados para uso Premium:\n–\n`
tkks += premiumCmd.map((v, index) =>  `\t• [ *N° ${index+1}* ] - Comando: ${prefix+v}`).join('\n–\n')
await yurizin.sendMessage(from, {text: tkks.trim()}, {quoted: selo})
break

case 'blocklist':
if(ban.length == 0) return reply(`Existe *0* user(s) bloqueado(s), ou seja, não existe ninguém.`)
tkks = `[Total: *${ban.length}*] - Lista de Usuários bloqueados pelo julgamento do(s) donos(as):\n–\n`
tkks += ban.map((v, index) =>  `\t• [ *N° ${index+1}* ] - Usuário: @${v.split('@')[0]}`).join('\n–\n')
await yurizin.sendMessage(from, {text: tkks.trim(), mentions: ban}, {quoted: selo})
break

case 'blockcmdgp':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
tp = args.join(" ")
if(tp.includes("blockcmd blockcmd") || (tp.includes("blockcmd  blockcmd"))) return reply(`Tá louco maluco?, Quer banir o comando de bloquear comando?`)
if(getComandoBlock(from).includes(args[0]))return reply('Este comando já está bloqueado.')
await addComandos(from, args[0])
reply(`O comando *${args[0]}* foi bloqueado no grupo com sucesso.`)
break

case 'unblockcmdgp':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
tp = args.join(" ")
if(tp.includes("blockcmd unblockcmd") || (tp.includes("blockcmd  unblockcmd"))) return reply(`Tá louco maluco?, Quer banir o comando de desbloquear comando?`)  
if(!getComandoBlock(from).includes(args[0])) return reply('Este comando já está desbloqueado.')
await deleteComandos(from, args[0])
reply(`O comando *${args[0]}* foi desbloqueado com sucesso no grupo.`)
break

case 'listblockcmdgp': case 'listbcmdgp':
if(!isGroup) return reply(mess.onlyGroup());
if(getComandoBlock(from).length == 0) return reply("Não existe ainda nenhum *comando bloqueado* neste grupo.");
tkks = `[Total: *${getComandoBlock(from).length}*] - Comandos bloqueados pelo adminstrador(s) do grupo:\n–\n`
tkks += getComandoBlock(from).map((v, index) =>  `\t• [ *N° ${index+1}* ] - Comando: ${prefix + getComandoBlock(from)[v]}`).join('\n–\n')
await yurizin.sendMessage(from, {text: tkks.trim()}, {quoted: selo})
break

case 'blockcmdg':
if(!SoDono) return reply(mess.onlyOwner())
tp = args.join(" ")
if(tp.includes("blockcmdg blockcmdg") || (tp.includes("blockcmdg  blockcmdg"))) return reply(`Tá louco maluco? Não tem como adicionar o mesmo comando.`)
if(isBlockCmdG.includes(args[0])) return reply('Este comando já está incluso na lista de *comandos bloqueados global*.')
isBlockCmdG.push(args[0])
fs.writeFileSync('./settings/definitions.json', JSON.stringify(definitions, null, 2))
reply(`O comando *${args[0]}* foi adicionado na lista de comandos bloqueados global.`)
break

case 'unblockcmdg':
if(!SoDono) return reply(mess.onlyOwner())
tp = args.join(" ")
if(tp.includes("unblockcmdg unblockcmdg") || (tp.includes("unblockcmdg  unblockcmdg"))) return reply(`Tá louco maluco? Não tem como desbloquear o mesmo comando.`)  
if(!isBlockCmdG.includes(args[0])) return reply('Este comando não está incluso na lista de *cmds bloqueados global*.')
var ab = isBlockCmdG.indexOf(args[0])
isBlockCmdG.splice(ab, 1)
fs.writeFileSync('./settings/definitions.json', JSON.stringify(definitions, null, 2))
reply(`O comando *${args[0]}* foi tirado da lista de cmds bloqueados global.`)
break

case 'listbcmdglobal':
if(isBlockCmdG.length == 0) return reply("Não existe nenhum *comando bloqueado* na lista.")
tkks = `[Total: *${isBlockCmdG.length}*] - Lista de comandos bloqueados pelo(s) meus proprietários:\n–\n`
tkks += isBlockCmdG.map((v, index) =>  `\t• [ *N° ${index+1}* ] - Comando: ${prefix+v}`).join('\n–\n')
await yurizin.sendMessage(from, {text: tkks.trim()}, {quoted: selo})
break

case 'gimage':
if(!q) return reply(mess.noArgs() + `Exemplo: ${prefix + command} Neymar`)
try {
reply(mess.wait());
data = await fetchJson(API_URL+`/api/pesquisa/googleimage?query=${q}&apikey=`+API_KEY_YURI);
returnData = pickRandom(data.resultado); /* Cria um random no resultado, retornando só 1. */
await yurizin.sendMessage(from, {image: {url: returnData.url}, caption: mess.googleImage(returnData)}, {quoted: selo});
} catch (error) {
reply(mess.error());
}
break

case 'pinterest': 
if(!q) return reply(mess.noArgsSearch() + `Exemplo: ${prefix + command} Gato`);
try {
await reply(mess.wait())
data = await fetchJson(API_URL + `/api/pesquisa/pinterest?query=${q}&apikey=` + API_KEY_YURI);
await yurizin.sendMessage(from, {image: { url: data.resultado[0]?.image }, caption: mess. pinterest(data, formatNumberDecimal) }, {quoted: selo});
} catch(error) {
await reply(mess.error(), {reagir: "❌"})
}
break

case 'wallpaper': case 'papeldeparede':
if(!q) return reply(mess.noArgsSearch() + `Exemplo: ${prefix + command} Neymar`);
try {
await reply(mess.wait(), {reagir: "✅️"})
data = await fetchJson(API_URL+`/api/pesquisa/wallpaper?query=${q}&apikey=`+API_KEY_YURI);
r = Math.floor(Math.random() * data.resultado.length);
await yurizin.sendMessage(from, {image: { url: data.resultado[r]?.downloadLinks[0] }, caption: mess.wallpaper(data)}, {quoted: selo});
} catch(error) {
await reply(mess.error, {reagir: "❌"})
}
break

case 'google': case 'googlesrc': 
if(!q) return reply(mess.noArgsSearch() + `Exemplo: ${prefix+command} Neymar`);
try {
reply(mess.wait());
data = await fetchJson(API_URL+`/api/pesquisa/google?query=${q}&apikey=`+API_KEY_YURI);
await yurizin.sendMessage(from, {text: data.resultado.map(v =>  `• Título: *${v.title}*\n• Descrição: *${v.snippet}*\n• URL: *${v.link}*`).join('\n–\n'), contextInfo: {externalAdReply: {title: data.resultado[0].title, body: data.resultado[0].snippet, mediaType: 2, sourceUrl: data.resultado[0].link}}}, {quoted: info});
} catch(error) {
return reply(mess.error())
}
break

case 'uptodown':
if(!q) return reply(mess.noArgsSearch() + `Exemplo: ${prefix+command} Minecraft`);
try {
reply(mess.wait());
data = await fetchJson(API_URL+`/api/pesquisa/uptodown?query=${q}&apikey=`+API_KEY_YURI);
await yurizin.sendMessage(from, {text: data.resultado.map(v =>  `• Título: *${v.title}*\n• Descrição: *${v.desc || 'Sem descrição'}*\n• URL: *${v.url}*`).join('\n—\n') }, {quoted: info});
} catch(error) {
return reply(mess.error())
}
break

case 'screenshotweb': case 'printsite': case 'ssweb':
if(!q) return reply(`Cadê o link do site o qual você deseja visualizar?`)
try {
await reply(mess.wait(), {reagir: "✅️"})
startReq = Date.now() /* Marcar o início da requisição para calcular o PING! */
response = await axios.get("https://api.apilight.com/screenshot/get", {params: {url: q?.trim(), base64: 1, width: 1366, height: 1024}, headers: {'x-api-key': 'j1gIaMwfU545P2ymFWA0gan7yHr7Yla05CJnMheL'}});
endReq = Date.now() /* Marcar o início da requisição para calcular o PING! */
yurizin.sendMessage(from, {image: Buffer.from(response.data, 'base64'), caption: `• Ping (Cálculo da velocidade para carregar a página): *${((endReq - startReq) / 1000).toFixed(3)}s*`}, {quoted: info});
} catch(error) {
return await reply(mess.error(), {reagir: "❌"});
}
break

case 'noticias': case 'getnoticias':
try {
if (!q) return reply(`Informe um tema para realizar a pesquisa de suas notícias!`)
theNews = await axios.get(`https://newsapi.org/v2/everything?q=${encodeURIComponent(q)}&sortBy=publishedAt&language=pt&apiKey=9dc1dde158804756ae9b33dd8d71f7a1`);
d = await pickRandom(theNews.data.articles)
reply(`> *${d.title}* - ${d.author} [${d.source.name}]\n–\n• Descrição: *${d.description}*\n• Postagem: *${d.publishedAt.split('T').join(' - ').split('Z')[0]}*\n• URL: *${d.url}*`)
} catch (error) {
return reply(mess.error())
}
break

case 'g1noticias': 
try {
data = await fetchJson(API_URL + `/api/noticias/globo?apikey=` + API_KEY_YURI);
await reply('> 📰 G1 Notícias:\n' + data.resultado.map((v, index) => `*${index+1}.* ${v.noticia} - [${v.postado}] - ${v.categoria}\n• Descrição: *${v.desc || "Sem descrição."}*\n• URL: *${v.link}*`).join('\n—\n'), {reagir: "✅️"});
} catch(error) {
return await reply(mess.error(), {reagir: '❌'})
}
break

case 'lyrics': case 'letramusica':
if(!q) return reply(`Você esqueceu de colocar após o comando o nome da música...`);
await reply(mess.wait())
try {
data = await fetchJson(API_URL+`/api/pesquisa/lyrics?query=${q.normalize('NFD').replace(/[\u0300-\u036f]/g, "")}&apikey=`+API_KEY_YURI);
resultado = data.resultado[Math.floor(Math.random() * data.resultado.length)];
if(!resultado.lyrics) return await reply(mess.error(), {reagir: "🖖🏻"});
await yurizin.sendMessage(from, {text:  `• Música: *${resultado.txt}${resultado.extra_txt}*\n• Artista(s): *${resultado.art}*\n• Gênero: *${resultado.g.split(/\s*,\s*/).map((v) => v).join(', ') || "—"}*\n• URL: *${resultado.url}*\n• Pontuação (Score): *${resultado.score}*\n*—*\n• Letra (Original):\n${II}${resultado.lyrics}${II}`, contextInfo: {externalAdReply: {title: `${resultado.txt}${resultado.extra_txt}`, body: `• Artista: ${resultado.art}`, thumbnail: await getBuffer(resultado.img), mediaType: 2, sourceUrl: resultado.url}}}, {quoted: info});
} catch(error) {
  return await reply(mess.error(), {reagir: "❌"})
};
break

case 'tradutor': case 'traduzir':
if(!q) return reply(`Exemplo: ${prefix}tradutor pt|Dog`)
try {
txt = q.replace(" |", "|").replace("| ", "|").replace(" | ", "|")
var [idioma, texto] = txt.split("|")
if(!q.includes("|")) return reply(`Está faltando a |, *use como exemplo:* ${prefix}tradutor pt|Dog`)
data = await fetchJson(API_URL+`/api/outros/translate?text=${encodeURI(texto)}&language=${encodeURI(idioma)}&apikey=`+API_KEY_YURI)
reply(mess.translator(data)).catch(async(error) => {
reply(mess.error())
})
} catch(error) {
reply(mess.error())
}
break

case 'download-link':
if(q.includes("video") || q.includes("mp4")) {
await yurizin.sendMessage(from, {video: {url: q}, mimetype: 'video/mp4'}, {quoted: selo}).catch(async(e) => {
reply("Erro, visualize se este link é válido...")
})
} else if(q.includes("webp") || q.includes("jpg")) {
await yurizin.sendMessage(from, {image: {url: q}}, {quoted: selo}).catch(async(e) => {
reply("Erro, visualize se este link é válido...")
})
}
break

case 'signo':
if(!q) return reply(`Digite seu signo após o comando e receba a previsão do dia e demais informações sobre o mesmo.`);
try {
signos = ["aries", "touro", "gemeos", "cancer", "leao", "virgem", "libra", "escorpiao", "sagitario", "capricornio", "aquario", "peixes"];
if(!signos.includes(q_2)) return reply("Este signo não existe no Horoscopo! Por favor, verifique se tem algum erro ortográfico na escrita.");
ABC = await fetchJson(API_URL+`/api/pesquisa/horoscopo?signo=${q_2}&apikey=`+API_KEY_YURI)
await reply(mess.horoscopo(ABC), {reagir: "🔮"})
} catch(error) {
  return await reply(mess.error(), {reagir: "❌️"});
}
break

case 'grupos':
try {
data = await fetchJson(API_URL + `/api/pesquisa/gerar-grupos?apikey=` + API_KEY_YURI);
groupTable = data.resultado.map((v, index) => {
  rulesGroup = v.rules.map((v, index) => `\t${index + 1}. ${v}`).join('\n');
  return `*${index + 1}.* Nome: ${v.name}\n• Categoria: ${v.category}\n• Acessos: ${v.accessCount}\n• Regras:\n${rulesGroup}\n• URL: ${v.groupUrl}`;
}).join('\n–\n')
await yurizin.sendMessage(from, {image: {url: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcexCXk1jkQQhgno5_sj_rv0JVcdXr2Fw33A&usqp=CAU`}, caption: 'Listagem de grupos para você:\n–\n' + groupTable}, {quoted: info})
} catch(error) {
  return await reply(error, {reagir: "❌️"});
}
break

case 'dicionario': case 'dicio':
if(!q) return await reply(mess.noArgsSearch() + `Exemplo: ${prefix+command} Amor`)
try {
await reply(mess.wait(), {reagir: "✅️"});
data = await fetchJson(API_URL + `/api/pesquisa/dicionario?apikey=${API_KEY_YURI}&query=1${q.toLowerCase()}`);
dataDicio = await fetchJson(API_URL + `/api/pesquisa/dicionario/get?apikey=${API_KEY_YURI}&query=${data.resultado[0].url}`);
await yurizin.sendMessage(from, {image: {url: `https://s.dicio.com.br/${data.resultado[0].url.split('/').filter(segmento => segmento).pop()}.jpg`}, caption: mess.dicionario(data, dataDicio, capitalizeFirstLetter, III)}, {quoted: info});
} catch(error) { 
  return await reply(error, {reagir: "❌️"});
}
break

case 'cases':
if(!SoDono) return reply(mess.onlyOwner())
try {
await yurizin.sendMessage(from, {text: listCases()}, { quoted: selo});
} catch(e) {
await reply(mess.error(), {reagir: "❌"})
}
break

case 'gerarlink': 
try {
if((isMedia && !info.message.videoMessage || isQuotedImage) && !q.length <= 1) {    
await reagir(from, "✅"); /* Reação para aguadar o sucesso da solicitação... '✅' */
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage;
owgi = await getFileBuffer(boij, 'image');
UploadServer = await new uploader().catbox(owgi)
await reply(`• Mídia convertida para URL com sucesso, aqui está: *${UploadServer}*`, {reagir: "✅️"})
} else if((isMedia && info.message.videoMessage.seconds < 30 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 60) && !q.length <= 1) { 
await reagir(from, "✅"); /* Reação para aguadar o sucesso da solicitação... '✅' */
boij = isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.videoMessage : info.message.videoMessage;
owgi = await getFileBuffer(boij, 'video');
UploadServer = await new uploader().catbox(owgi)
await reply(`• Mídia convertida para URL com sucesso, aqui está: *${UploadServer}*`, {reagir: "✅️"})
} else {
reply(`Envie ou responda uma *imagem* ou um *vídeo* com o comando *${prefix+command}* - Faz upload da mídia para o servidor e após a solicitação retorna o URL!`, {reagir: "❌"});
}
} catch(error) {
await reply(mess.error(), {reagir: "❌️"});
}
break

case 'gerarlink2': 
try {
if((isMedia && !info.message.videoMessage || isQuotedImage) && !q.length <= 1) {
await reagir(from, "🕓");
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage;
owgi = await getFileBuffer(boij, 'image');
UploadServer = await uploader.github(owgi)
await reply(`• Mídia convertida para URL com sucesso, aqui está:
*${UploadServer}*`, {reagir: "✅️"})
} else if((isMedia && info.message.videoMessage.seconds < 30 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 60) && !q.length <= 1) { 
await reagir(from, "😸");
boij = isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.videoMessage : info.message.videoMessage;
owgi = await getFileBuffer(boij, 'video');
UploadServer = await uploader.github(owgi)
await reply(`• Mídia convertida para URL com sucesso, aqui está: *${UploadServer}*`, {reagir: "✅️"})
} else {
reply(`Envie ou responda uma *imagem* ou um *vídeo* com o comando *${prefix+command}* - Faz upload da mídia para o servidor e após a solicitação retorna o URL!`, {reagir: "❌"});
};
} catch(error) {
await reply(mess.error(), {reagir: "❌️"});
}
break
                
case 'amazon': case 'amazonsearch':
if(q.trim().length < 4) return reply(`NaN, você esqueceu de colocar o nome do produto após o comando.`)
reply(mess.wait());
try {
ABC = await fetchJson(API_URL+`/api/lojas/amazon?nome=${q}&apikey=`+API_KEY_YURI);
MAP_MAP_RESULT = ABC.resultado.map((v, index) => `*${index+1}.* Produto: *${v.titulo}*\n• Valor do Produto: *${v.valor}*\n• Link: *${v.link}*`).join('\n–\n');
await yurizin.sendMessage(from, {text: `> 𝐀𝐦𝐚𝐳𝐨𝐧 - 𝐒𝐭𝐨𝐫𝐞\n–\n${MAP_MAP_RESULT}`, contextInfo: {externalAdReply: {title: ABC.resultado[0].titulo, thumbnail: await getBuffer(ABC.resultado[0].imagem), mediaType: 2, sourceUrl: ABC.resultado[0].link}}}, {quoted: selo});
} catch(error) {
return reply(mess.error());
}
break

case 'agendage': case 'agenda_futebol':
try {
data = await fetchJson(API_URL + `/api/soccer/agenda_jogos?apikey=` + API_KEY_YURI);
get = data.resultado.map((v, index) => {
  subEvent = v.subEvent.map((v1, index1) => `\t• Nome: *${v1.name}*\n\t• Data & Horário: *${new Date(v1.startDate).toLocaleString("pt-BR")}*\n\t• Localização: *${v1.location.name}*`).join(`\n\t—\n`)
  return `> Liga: *${v.name}* (${v.sport})\n• Data - Início: *${new Date(v.startDate).toLocaleString("pt-BR")}*\n• Eventos (Jogos):\n${subEvent}`;
}).join('\n—\n')
await reply('> Agenda de Jogos *(GE) - Futebol*:\n—\n' + get, {reagir: "✅"});
} catch(error) {
 return await reply(mess.error(), {reagir: "❌"})
}
break

case 'ultimos_jogos':
if(!q) return await reply(`Como deseja obter as últimas partidas do time, se você nem colocou nenhum time após o comando?`);
timeMap = { "São Paulo": "sao-paulo", "América-MG": "america-mg", "Atlético-MG": "atletico-mg" };
qModified = Object.keys(timeMap).reduce((acc, word) => acc.replace(new RegExp(word, "ig"), timeMap[word]), q.toLowerCase());
try {
dt  = await fetchJson(API_URL+`/api/soccer/ultimos_jogos?time=${qModified}&apikey=`+API_KEY_YURI);
resultFormatted = dt.resultado.map((v, index) => {
// Função para determinar o vencedor da partida de futebol (Código feito pelo GPT).
let determinarResultado = () => {
    const placar = v.placar.trim().split("-").map((valor) => parseInt(valor.trim(), 10));
  if (placar.length !== 2 || isNaN(placar[0]) || isNaN(placar[1])) {
    throw new Error("O placar fornecido está em um formato inválido.");
  }
  if (placar[0] > placar[1]) { return { vencedor: v.timeCasa, perdedor: v.timeVisitante };
  } else if (placar[1] > placar[0]) { return { vencedor: v.timeVisitante, perdedor: v.timeCasa };
  } else { return { vencedor: "EMPATE", perdedor: "EMPATE" } }
};
return `• Liga: *${v.liga}*\n• Placar: *${v.timeCasa} [${v.placar.split("-")[0].trim()}] × [${v.placar.split("-")[1].trim()}] ${v.timeVisitante}*\n• Ganhador da Partida: *${determinarResultado().vencedor}*\n• Dia de Transmissão: *${v.data}*`
}).join('\n—\n');
reply(`> Últimos jogos do _'${q.toUpperCase()}'_:\n–\n` + resultFormatted)
} catch(error) {
return await reply(mess.error(), {reagir: "❌"});
}
break

case 'prox_jogos':
if(!q) return await reply(`Como deseja obter as próximas partidas do time, se você nem colocou nenhum time após o comando?`);
timeMap = { "São Paulo": "sao-paulo", "América-MG": "america-mg", "Atlético-MG": "atletico-mg" };
qModified = Object.keys(timeMap).reduce((acc, word) => acc.replace(new RegExp(word, "ig"), timeMap[word]), q.toLowerCase());
try {
dt  = await fetchJson(API_URL+`/api/soccer/proximo_jogo?time=${qModified}&apikey=`+API_KEY_YURI);
resultFormatted = dt.resultado.map((v, index) => `*${index+1}.* ${v.timeCasa} × ${v.timeVisitante}\n\t• Data & Hora: *${v.data.toUpperCase()}*\n\t• Liga: *${v.liga}*`).join('\n—\n');
reply(`> Próximos jogos do _'${q.toUpperCase()}'_:\n–\n` + resultFormatted);
} catch(error) {
return await reply(mess.error(), {reagir: "❌"});
}
break

case 'brasileirao':
try {
 switch(q.toLowerCase()) {
    case 'a':
        data = await fetchJson(API_URL + `/api/soccer/tabela-brasileirao?apikey=${API_KEY_YURI}&serie=a`);
        get = data.resultado.classificacao.map((v, index) => `*${index+1}.* Time: *${v.nome_popular} [${v.sigla}]* - ID: ${v.equipe_id}\n• Aproveitamento (%): *${v.aproveitamento}%* \n• Empates cometidos: *${v.empates} empates.*\n• Número de vitórias: *${v.vitorias} vitórias.*\n• Número de pontos: *${v.pontos} pontos.*\n• Número de gols contra: *${v.gols_contra} gols.*\n• Média de gols pró: *${v.gols_pro} gols.*\n• Número de derrotas: *${v.derrotas} derrotas.*\n• Número de partidas jogadas: *${v.jogos}*`).join('\n———\n');
        reply('> Classificação 2024 - Série A:\n—\n' + get);
    break
    case 'b':
        data = await fetchJson(API_URL + `/api/soccer/tabela-brasileirao?apikey=${API_KEY_YURI}&serie=b`);
        get = data.resultado.classificacao.map((v, index) => `*${index+1}.* Time: *${v.nome_popular} [${v.sigla}]* - ID: ${v.equipe_id}\n• Aproveitamento (%): *${v.aproveitamento}%* \n• Empates cometidos: *${v.empates} empates.*\n• Número de vitórias: *${v.vitorias} vitórias.*\n• Número de pontos: *${v.pontos} pontos.*\n• Número de gols contra: *${v.gols_contra} gols.*\n• Média de gols pró: *${v.gols_pro} gols.*\n• Número de derrotas: *${v.derrotas} derrotas.*\n• Número de partidas jogadas: *${v.jogos}*`).join('\n———\n');
        reply('> Classificação 2024 - Série B:\n—\n' + get);
    break
    case 'c':
        data = await fetchJson(API_URL + `/api/soccer/tabela-brasileirao?apikey=${API_KEY_YURI}&serie=c`);
        get = data.resultado.classificacao.map((v, index) => `*${index+1}.* Time: *${v.nome_popular} [${v.sigla}]* - ID: ${v.equipe_id}\n• Aproveitamento (%): *${v.aproveitamento}%* \n• Empates cometidos: *${v.empates} empates.*\n• Número de vitórias: *${v.vitorias} vitórias.*\n• Número de pontos: *${v.pontos} pontos.*\n• Número de gols contra: *${v.gols_contra} gols.*\n• Média de gols pró: *${v.gols_pro} gols.*\n• Número de derrotas: *${v.derrotas} derrotas.*\n• Número de partidas jogadas: *${v.jogos}*`).join('\n———\n');
        reply('> Classificação 2024 - Série C:\n—\n' + get);
    break
    case 'd':
        data = await fetchJson(API_URL + `/api/soccer/tabela-brasileirao?apikey=${API_KEY_YURI}&serie=d`);
        get = data.resultado.classificacao.map((v, index) => `*${index+1}.* Time: *${v.nome_popular} [${v.sigla}]* - ID: ${v.equipe_id}\n• Aproveitamento (%): *${v.aproveitamento}%* \n• Empates cometidos: *${v.empates} empates.*\n• Número de vitórias: *${v.vitorias} vitórias.*\n• Número de pontos: *${v.pontos} pontos.*\n• Número de gols contra: *${v.gols_contra} gols.*\n• Média de gols pró: *${v.gols_pro} gols.*\n• Número de derrotas: *${v.derrotas} derrotas.*\n• Número de partidas jogadas: *${v.jogos}*`).join('\n———\n');
        reply('> Classificação 2024 - Série D:\n—\n' + get);
    break
    default: await reply(`• Objetivo: Este comando tem o objetivo de retornar a tabela de classificação dos times no *Campeonato Brasileiro 2024* através de série, temos diversas séries de classificação, mas o comando só retorna as séries *A, B, C e D*.\n–\n• Por favor, não insista em colocar palavras ou séries que não estão registradas em meu código ainda.\n—\n• Coloque após o comando a série que você deseja puxar a tabela`)
 }
} catch(error) {
 return await reply(mess.error(), {reagir: "❌"})
}
break

case 'placares':
try {
 data = await fetchJson(API_URL + `/api/soccer/placares?apikey=` + API_KEY_YURI);
 get = data.resultado.map((v, index) => {
 return `*${index+1}.* ${v.timeCasa} × ${v.timeVisitante}\n• Liga: *${v.liga}*\n• Placar (última atualização): *${v.placar.replace(/\s+/g, '').split('x')[0] ? v.placar.replace(/\s+/g, '').split('x')[0] : "0"} - ${v.placar.replace(/\s+/g, '').split('x')[1] ? v.placar.replace(/\s+/g, '').split('x')[1] : "0"}*\n• Status: *${v.status}* - (Tempo, status ou até mesmo horário).`
}).join('\n——\n')
 await reply(`> Placares:\n—\n` + get)
} catch(error) {
 return await reply(mess.error(), {reagir: "❌"})
}
break

case 'receita': case 'revenue': 
if (!q) return reply(`NaN, você esqueceu de digitar após o comando.`)
try {
data = await fetchJson(API_URL+`/api/pesquisa/cybercook?query=${q}&apikey=`+API_KEY_YURI)
if (data.resultado.length == 0) return reply(mess.noresult())
RST = "> 𝐂𝐲𝐛𝐞𝐫𝐂𝐨𝐨𝐤 - 𝐑𝐞𝐜𝐞𝐢𝐭𝐚𝐬\n—\n"
RST += data.resultado.map((v, index) => `*${index+1}.* Título: *Receita de ${v.title}*\n• Avaliação: *${v.assessment.starEmoji} (${v.assessment.star})*\n• Enviado(a) por: *${v.by}*\n• URL: *${v.url}*`).join('\n—\n')
await yurizin.sendMessage(from, {text: RST, contextInfo: {externalAdReply: {title: `Receita de ${data.resultado[0].title} - Enviada por: '${data.resultado[0].by}'`, body: `Encontre as melhores receitas culinárias no CyberCook, clique aqui!`, thumbnail: await getBuffer(data.resultado[0].image), mediaType: 2, sourceUrl: data.resultado[0].url}}}, {quoted: info});
} catch(error) {
return reply(mess.error())
}
break

case 'playstore':
if (!q) return reply(`NaN, você esqueceu de digitar após o comando.`)
try {
AB = await fetchJson(API_URL+`/api/pesquisa/playstore?nome=${q}&apikey=`+API_KEY_YURI)
if (AB.pesquisa.resultado.length == 0) return reply(mess.noresult())
ABC = `> 𝐏𝐥𝐚𝐲𝐒𝐭𝐨𝐫𝐞 𝐀𝐩𝐩𝐬 - 𝐒𝐞𝐚𝐫𝐜𝐡\n–\n`
ABC += `${AB.pesquisa.resultado.map((v, index) =>  `*${index+1}.* Nome: *${v.nome}*\n• Desenvolvedor: *${v.desenvolvedor}*\n• Avaliação dos usuários do aplicativo: *${v.estrelas} Estrelas*\n• Url: *${v.link}*`).join('\n–\n')}`
await yurizin.sendMessage(from, {text: ABC, contextInfo: {externalAdReply: {title: AB.pesquisa.resultado[0].nome, body: `Avaliação: ${AB.pesquisa.resultado[0].estrelas} • Desenvolvedor: ${AB.pesquisa.resultado[0].desenvolvedor}`, thumbnail: await getBuffer(AB.pesquisa.resultado[0].imagem), mediaType: 2, sourceUrl: AB.pesquisa.resultado[0].link}}}) 
} catch(error) {
return reply(mess.error());
}
break

case 'autorizar':
case 'autoriza':
if (!isGroup) return reply(mess.onlyAdmins());
if (!isGroupAdmins) return reply(mess.onlyGroup());
const solAll = await yurizin.groupRequestParticipantsList(from);
if (solAll == false) return reply('Sem solicitações pendentes.');
let formattedString = solAll.map(item => `• Usuário: *@${item.jid.replace('@s.whatsapp.net', '')}*\n• Método de Requisição: *${item.request_method}*\n• Tempo: *${moment.unix(item.request_time).format('LLL')}*`).join('\n———\n');
mention(`[⚠️] - *SOLICITAÇÕES PENDENTES:*\n${formattedString}\n–\n• Argumentações nescessárias do comando: _SIM - NÃO - ALL - NOALL_\n• Opção: _"SIM"_ -> Aprovar a solicitação do usuário(a) no grupo.\n• Opção: _"NÃO"_ -> Rejeite todos os usuários sem aprovação.\n• Opção: _"ALL"_ -> Aprovar todos os solitantes da requisição no grupo.\n• Opção: _"NOALL"_ -> Rejeite todos os solitantes de uma vez.`);
break;

case 'rastrear':
if (!q) return reply(mess.syntaxTrackParcels(prefix))
if (q.length < 13) return reply(mess.invalidCodeRastrear())
try {
data = await fetchJson(API_URL+`/api/outros/rastreio-encomendas?code=${q}&apikey=`+API_KEY_YURI)
await yurizin.sendMessage(from, {text: mess.rastrearEncomenda(data, q)}, {quoted:info});
} catch(error) {
return await reply(mess.error());
}
break

case 'imdb':
if (!q) return reply(`• Para realizar a pesquisa do filme no *IMDb* é necessário conter pelo menos um gênero ou nome do filme.\n      • Exemplo: *${prefix}imdb Ação*\n–\n🔍 Saber mais informações sobre o filme pesquisado? Use: *${prefix}imdbinfo [link]*\n\t• Lembrando que o *link do filme* para ser usado ele é apresentado na pesquisa, *se obter sucesso.*\n\t\t• Exemplo: *https://m.imdb.com/title/tt6495770/?ref_=fn_al_tt_5*`)
try {
AB = await fetchJson(API_URL+`/api/pesquisa/imdb?query=${q}&apikey=`+API_KEY_YURI)
ABC = `• 𝐈𝐌𝐃𝐛 𝐏𝐄𝐒𝐐𝐔𝐈𝐒𝐀\n\t• *Nota:* Para ver as informações do filme de uma forma detalhada, use o comando: *${prefix}imdbinfo [link do filme]*\n\t\tExemplo: *${prefix}imdbinfo ${AB.resultado[0].url}*\n–\n${AB.resultado.map((v, index) => `*${index+1}.* Título: *${v.title}*\n• Ano de Lançamento: *${v.release}*\n• Créditos principais: *${v.topCredits[0]} e ${v.topCredits[1]}*\n• Link: *${v.url}*`).join('\n–\n')}`
await yurizin.sendMessage(from, {text: ABC, contextInfo: {externalAdReply: {title: `IMDb - ${AB.resultado[0].title} (${AB.resultado[0].release}) ⭐`, body: `• Créditos principais: ${AB.resultado[0].topCredits[0]} e ${AB.resultado[0].topCredits[1]}`, mediaType: 2, sourceUrl: AB.resultado[0].url}}}, {quoted: info});
} catch(error) {
return reply(mess.error());
}
break

case 'imdbinfo':
if(!q.includes("m.imdb.com")) return reply("Coloque o link do filme que você deseja puxar informações.")
try {
RST = await fetchJson(API_URL+`/api/pesquisa/imdb-info-filme?url=${q}&apikey=`+API_KEY_YURI)
ABC = `• Título em Português: *${RST.resultado.titulo}*\n• Título Original: *${RST.resultado.tituloOriginal}*\n–\n• Sinopse: *${RST.resultado.trama}*\n–\n• Status do filme: *${RST.resultado.status}*\n• Data de lançamento: *${RST.resultado.dataLancamento.dia}.${RST.resultado.dataLancamento.mes}.${RST.resultado.dataLancamento.ano}*\n• Duração do filme: *${RST.resultado.duracao}*\n• Classificação de Idade: *${RST.resultado.certificado || "Livre"}*\n–\n• Avaliação total de usuários: *${formatNumberDecimal(RST.resultado.avaliacaoTotalUsers)}*\n• Total de críticas: *${formatNumberDecimal(RST.resultado.criticaTotal)}*\n–\n• Valor orçamentário: *$ ${formatNumberDecimal(RST.resultado.dinheiro.orcamento.valor)}*\n• Valor bruto por países: *$ ${formatNumberDecimal(RST.resultado.dinheiro.brutoPaises.valor)}*\n• Valor semanal: *$ ${formatNumberDecimal(RST.resultado.dinheiro.semana.valor)}*\n• Valor bruto pelo mundo: *$ ${formatNumberDecimal(RST.resultado.dinheiro.brutoMundial.valor)}*\n–\n• Prêmios: *${RST.resultado.avaliado.vitorias} vitória(s) e ${RST.resultado.avaliado.indicacoes} indicação(s)*\n• Disputando no rank em: *${RST.resultado.avaliado.rank}° lugar*\n–`
ABC += `\n• Mixagens: *${RST.resultado.mixagens.map(v => `${v}`).join(', ')}*\n`
ABC += `• Produção: *${RST.resultado.producao.map(v => `${v}`).join(', ')}*\n–\n`
ABC += `• Gênero(s): *${RST.resultado.genero.map(v => `${v}`).join(', ')}*\n–\n`
ABC += `• *Elenco* - Atrizes e atores participantes do elenco principal do filme:\n–\n${RST.resultado.elencoPrincipal.map(v => `\t\t• Nome: ${v.nome} - ( ${v.categoria} )\n\t\t• Personagem(ns): *${v.personagem}*`).join('\n–\n')}\n–\n`
ABC += `• *Créditos principais:*\n${RST.resultado.creditosPrincipais.map(v => `\t\t• ${v.categoria}: *${v.creditos}*`).join('\n')}`
reply(ABC)
} catch(error) {
return reply(mess.error())
}
break

case 'tekmods': 
if(!q) return await reply('Você esqueceu de colocar o nome do app que você deseja pesquisar. Por favor, coloque após o comando!', {reagir: "😾"});
try {
data = await fetchJson(API_URL + `/api/pesquisa/tekmods?query=${q}&apikey=` + API_KEY_YURI);
if(data.resultado.length == 0) return await reply('Sem resultados!', {reagir: "❌️"});
await reply(`> 𝐓𝐞𝐤𝐌𝐨𝐝𝐬 - 𝐏𝐞𝐬𝐪𝐮𝐢𝐬𝐚:\n—\n` + data.resultado.map((response, index) => `*[${index+1}]* • Título: ${response.titulo}\n• URL do Aplicativo: *${response.link}*`).join('\n—\n'), {reagir: "✅", eval: true});
} catch(error) {
return await reply(mess.error(), {reagir: "❌"})
}
break

case 'cinema':
try {
response = await fetchJson(API_URL + `/api/outros/cinema?apikey=` + API_KEY_YURI);
if(response.resultado.length == 0) return await reply('Sem resultados!', {reagir: "❌️"});
await reply(`> 🎬 𝐂𝐢𝐧𝐞𝐦𝐚:\n—\n` + response.resultado.map((v, index) => `• *Título:* ${v.title}\n• *Data:* ${v.releaseDate}\n• *Avaliação | Nota:* ${v.rating}/5.0\n• *Direção:* ${v.directors}\n• *Personagens:* ${v.cast || 'Sem informação'}\n• *Sinopse:* ${v.synopsis}`).join('\n—\n'), {reagir: "✅"});
} catch(error) {
return await reply(mess.error(), {reagir: "❌"});
} 
break

case 'mlsearch': case 'mercadolivre':
if(q.trim().length < 4) return await reply(`NaN, você esqueceu de colocar o nome do produto após o comando.`, {reagir: "❌"});
try {
response = await fetchJson(API_URL + `/api/lojas/mercadolivre?query=${q}&apikey=` + API_KEY_YURI);
if(response.resultado.length == 0) return await reply('Sem resultados!', {reagir: "❌️"});
await reply(`> 🛍 𝐌𝐞𝐫𝐜𝐚𝐝𝐨𝐋𝐢𝐯𝐫𝐞 - 𝐒𝐞𝐚𝐫𝐜𝐡:\n—\n` + response.resultado.map((v, index) => `*[${index+1}]* • Produto: *${v.produto}*\n• URL: *${v.link}*`).join(`\n—\n`), {reagir: "✅"});
} catch(error) {
return await reply(mess.error(), {reagir: "❌"})
}
break

case 'frases': case 'pensador':
if(!q) return reply(mess.noArgsSearch()+`Exemplo: *${prefix+command} Amor`);
try {
  AB = await fetchJson(API_URL+`/api/pesquisa/pensador?query=${q}&apikey=`+API_KEY_YURI)
  await yurizin.sendMessage(from, {text: AB.resultado.map((v, index) => `*${index+1}.* “${v}”`).join('\n——\n')}, {quoted: info});
} catch(error) {
  return reply(mess.error(), {reagir: "❌"});
}
break

case 'megadl':
if (!q.includes("mega.nz")) return reply(`Você esqueceu de colocar um link do *mega.nz* após o comando.`);
try {
const fileListINFO = await File.fromURL(q);
await fileListINFO.loadAttributes(); // Rodar a função para executar o resultado.
if (fileListINFO.size >= 300000000) return reply(`❌ Infelizmente, não foi possível concluir a ação, *pois o tamanho do arquivo excede o limite máximo de 300MB.*`, {reagir: "❌"});
await reply(mess.wait(), {reagir: "✅"})
const dataFileBuffer = await fileListINFO.downloadBuffer();
var { mime } = await FileType.fromBuffer(dataFileBuffer);
await yurizin.sendMessage(from, {document: dataFileBuffer, caption: `Download Completo! Obrigado por esperar *${pushname}*...`, mimetype: mime, fileName: fileListINFO.name}, {quoted: selo});
} catch (error) {
await reply(mess.error(), {reagir: '❌'});
}
break

case 'encurtalink': case 'tinyurl':
if(args.length < 1) return reply(`❌️ *Forma incorreta, use está como exemplo:* ${prefix + command} https://instagram.com/Yuribot.wpp`)
anu = await axios.get(`https://tinyurl.com/api-create.php?url=${q}`)
reply(`Link encurtado com sucesso, aqui está: ${anu.data}`).catch(async(error) => {
reply(mess.error())
})
break

case 'encurtarlink2': case 'cuttly':
if(args.length < 1) return reply(`❌️ *Forma incorreta, use está como exemplo:* ${prefix + command} https://instagram.com/Yuribot.wpp`)
anu = await axios.get(API_URL+`/api/shortener/cuttly?link=${q}&apikey=`+API_KEY_YURI)
reply(`Link encurtado com sucesso, aqui está: ${anu.data.resultado}`).catch(async(error) => {
reply(mess.error())
})
break

case 'horariospg': case 'horarios-pagantes':
if(!isGroup) return await reply(mess.onlyGroup());
try {
  dataPG = await fetchJson(API_URL + `/api/outros/horarios-pagantes?apikey=${API_KEY_YURI}`);
  //console.log(dataPG.resultado?.schedules);
  schedulesResult = dataPG.resultado?.schedules?.map((v, index) => {
    return `${v.name}\n${v.times?.map((vv, iindex) => `\t${vv}`).join('\n')}`;
  }).join('\n—\n');
  await yurizin.sendMessage(from, {image: {url: `https://files.catbox.moe/tt3q2q.jpg`}, caption: `> ⏰️ *HORÁRIOS PAGANTES* 💰\n⚠️ Aviso: _${dataPG.resultado?.alert}_\n💡 Sugestão: _${dataPG.resultado?.suggestion}_\n—\n${schedulesResult}`}, {quoted: selo});
} catch(error) {
  return await reply(mess.error());
}
break

case 'encurtarlink3': case 'bitly':
if(args.length < 1) return reply(`❌️ *Forma incorreta, use está como exemplo:* ${prefix + command} https://instagram.com/Yuribot.wpp`)
anu = await axios.get(API_URL+`/api/shortener/bitly?link=${q}&apikey=`+API_KEY_YURI)
reply(`Link encurtado com sucesso, aqui está: ${anu.data.resultado}`).catch(async(error) => {
reply(mess.error())
})
break

case 'spotify':
if(!q) return reply("O campo e texto está vazio. Por favor, insira do URL do Spotify.")
if(!q.startsWith('https://')) return reply(`Este comando não permite pesquisa, entre no aplicativo e pegue um URL de uma música no Spotify e envie ao lado do comando. Desde já, agradeço sua compreensão!`);
await reply(mess.wait(), {reagir: "✅"})
try {
data = await fetchJson(API_URL+`/api/download/spotify?url=${q}&apikey=`+API_KEY_YURI);
await yurizin.sendMessage(from, {audio: {url: data.resultado?.dl_link}, fileName: data.resultado?.name + '.mp3', mimetype: "audio/mpeg", headerType: 4, contextInfo: {externalAdReply: {title: `${data.resultado?.name}`, body: `${data.resultado?.artists} · ${data.resultado?.albumName} · Song · ${data.resultado?.releaseDate.split('-')[0]}`, showAdAttribution: true, thumbnail: await getBuffer(data?.resultado?.thumbnail), mediaType: 2, mediaUrl: data.resultado?.url, sourceUrl: data.resultado?.url}}}, {quoted: info});
} catch(e) {
return await reply(mess.error(), {reagir: "❌"});
}
break

case 'ytsearch': case 'pesquisa-ytb':
if(q.trim().length < 4) return reply(`Você esqueceu de colocar algum texto após o comando.`);
try {
ABC = await fetchJson(API_URL+`/api/pesquisa/youtube?query=${q}&apikey=`+API_KEY_YURI);
RST = ABC.resultado.map((v, index) => `*${index+1}.* Título: *${v.title || 'Não encontrado'}*\n• Descrição: *${v.description || 'Não encontrado'}*\n• Duração: *${v.duration.timestamp || 'Não encontrado'}*\n• Link: *${v.url || 'Não encontrado'}*`).join('\n–\n')
reply(`> YouTube Search:\n–\n` + RST);
} catch(error) {
return reply(mess.error())
}
break

case 'ytshorts':
if(!q) return reply('Você esqueceu de colocar um URL do YouTube Shorts.', {reagir: "🙄"})
if (!q.includes("/shorts/")) return reply(`O URL não pertence ao YouTube ou não é um Shorts. Por favor, insira um URL válido para este comando!`, {reagir: "❌"});
await reply(mess.wait())
try {
dataVideo = await fetchJson(API_URL+`/api/download/play_video?nome_url=${q}&apikey=`+API_KEY_YURI);
await yurizin.sendMessage(from, {video: {url: dataVideo.resultado.dl_link }, caption: `• Título: *${dataVideo.resultado.title}*\n• Duração: *${dataVideo.resultado.timestamp}*\n• Vídeo URL: *${dataVideo.resultado.externalUrls.video}*`, mimetype: "video/mp4"}, {quoted: info});
await yurizin.reagir(info, "✅");
} catch(error) {
return await reply(mess.error(), {reagir: "❌"});
}
break

case 'play': case 'p': case 'playaudio':
if(!q) return reply(mess.ytSyntax(prefix));
try {
   if(isUrl(q)) {
    data = await fetchJson(API_URL+`/api/download/play_audio?nome_url=${q}&apikey=`+API_KEY_YURI);
     await yurizin.sendMessage(from, {image: {url: data.resultado.thumbnails[0]}, caption: mess.ytPlayURL(data)}, {quoted: selo}).then(async(sendMess) => {
        await yurizin.sendMessage(from, {audio: {url: data.resultado.dl_link }, fileName: data.resultado.title + '.mp3', mimetype: "audio/mpeg"}, {quoted: sendMess}); await yurizin.reagir(info, "✅")
     });
   } else {
     data = await fetchJson(API_URL+`/api/pesquisa/youtube?query=${q}&apikey=`+API_KEY_YURI);
     if(data.resultado[0]?.timestamp?.length >= 7) return await reply(mess.ytLimitDL(), {reagir: "❌"});
     dataAudio = await fetchJson(API_URL+`/api/download/play_audio?nome_url=${data.resultado[0].url}&apikey=`+API_KEY_YURI);
     await yurizin.sendMessage(from, { image: {url: data.resultado[0].image}, caption: mess.ytPlayQuery(data, formatNumberDecimal) }, {quoted: info}).then(async(sendMess) => {
        await yurizin.sendMessage(from, {audio: {url: dataAudio.resultado.dl_link }, fileName: dataAudio.resultado.title + '.mp3', mimetype: "audio/mpeg"}, {quoted: sendMess}); await yurizin.reagir(info, "✅");
     })
   }
} catch(error) {
  await reply(mess.error(), {reagir: "❌"});
  console.error(error);
}
break

case 'pdoc': case 'playdoc':
if(!q) return reply(mess.ytSyntax(prefix));
try {
   if(isUrl(q)) {
    data = await fetchJson(API_URL+`/api/download/play_audio?nome_url=${q}&apikey=`+API_KEY_YURI);
     await yurizin.sendMessage(from, {image: {url: data.resultado.thumbnails[0]}, caption: mess.ytPlayURL(data)}, {quoted: selo}).then(async(sendMess) => {
        await yurizin.sendMessage(from, {document: {url: data.resultado.dl_link }, fileName: data.resultado.title + '.mp3', mimetype: "audio/mpeg"}, {quoted: sendMess}); await yurizin.reagir(info, "✅")
     });
   } else {
     data = await fetchJson(API_URL+`/api/pesquisa/youtube?query=${q}&apikey=`+API_KEY_YURI);
     if(data.resultado[0]?.timestamp?.length >= 7) return await reply(mess.ytLimitDL(), {reagir: "❌"});
     dataAudio = await fetchJson(API_URL+`/api/download/play_audio?nome_url=${data.resultado[0].url}&apikey=`+API_KEY_YURI);
     await yurizin.sendMessage(from, { image: {url: data.resultado[0].image}, caption: mess.ytPlayQuery(data, formatNumberDecimal) }, {quoted: info}).then(async(sendMess) => {
        await yurizin.sendMessage(from, {document: {url: dataAudio.resultado.dl_link }, fileName: dataAudio.resultado.title + '.mp3', mimetype: "audio/mpeg"}, {quoted: sendMess}); await yurizin.reagir(info, "✅");
     })
   }
} catch(error) {
  return reply(mess.error(), {reagir: "❌"});
}
break

case 'playvid': case 'pvid': case 'playvideo':
if(!q) return reply(mess.ytSyntax(prefix));
try {
   if(isUrl(q)) {
    data = await fetchJson(API_URL+`/api/download/play_video?nome_url=${q}&apikey=`+API_KEY_YURI);
     await yurizin.sendMessage(from, {image: {url: data.resultado.thumbnails[0]}, caption: mess.ytPlayURL(data)}, {quoted: selo}).then(async(sendMess) => {
        await yurizin.sendMessage(from, {video: {url: data.resultado.dl_link }, fileName: data.resultado.title + '.mp4', mimetype: "video/mp4"}, {quoted: info}); 
        await yurizin.reagir(info, "✅");
     });
   } else {
     data = await fetchJson(API_URL+`/api/pesquisa/youtube?query=${q}&apikey=`+API_KEY_YURI);
     if(data.resultado[0]?.timestamp?.length >= 7) return await reply(mess.ytLimitDL(), {reagir: "❌"});
     dataVideo = await fetchJson(API_URL+`/api/download/play_video?nome_url=${data.resultado[0].url}&apikey=`+API_KEY_YURI);
     await yurizin.sendMessage(from, { image: {url: data.resultado[0].image}, caption: mess.ytPlayQuery(data, formatNumberDecimal) }, {quoted: info}).then(async(sendMess) => {
        await yurizin.sendMessage(from, {video: {url: dataVideo.resultado.dl_link }, fileName: dataVideo.resultado.title + '.mp4', mimetype: "video/mp4"}, {quoted: sendMess}); await yurizin.reagir(info, "✅");
     })
   }
} catch(error) {
  return reply(mess.error(), {reagir: "❌"});
}
break

case 'play2': case 'p2': case 'playaudio2':
if(!q) return reply(mess.syntaxDownloadMusic());
try {
await yurizin.reagir(info, '⏳️');
dataAudio = await fetchJson(API_URL+`/api/download/play_audio/v2?nome_url=${q}&apikey=`+API_KEY_YURI);
await yurizin.sendMessage(from, { image: {url: dataAudio.resultado?.thumbnails[0] }, caption: mess.ytp2(dataAudio) }, {quoted: info}).then(async(sendMess) => {
    await yurizin.sendMessage(from, {audio: {url: dataAudio.resultado?.dl_link }, fileName: dataAudio.resultado?.title + '.mp3', mimetype: "audio/mpeg"}, {quoted: sendMess});
    await yurizin.reagir(info, "✅");
})
} catch(error) {

  return await reply(error, {reagir: "❌"});
}
break

case 'playdoc2': case 'pdoc2':
if(!q) return reply(mess.syntaxDownloadMusic());
try {
await yurizin.reagir(info, '⏳️');
dataAudio = await fetchJson(API_URL+`/api/download/play_audio/v2?nome_url=${q}&apikey=`+API_KEY_YURI);
await yurizin.sendMessage(from, { image: {url: dataAudio.resultado?.thumbnails[0] }, caption: mess.ytp2(dataAudio) }, {quoted: info}).then(async(sendMess) => {
    await yurizin.sendMessage(from, {document: {url: dataAudio.resultado?.dl_link }, fileName: dataAudio.resultado?.title + '.mp3', mimetype: "audio/mpeg"}, {quoted: sendMess});
    await yurizin.reagir(info, "✅");
})
} catch(error) {
return await reply(mess.error(), {reagir: "❌"});
}
break

case 'playv2': case 'playvideo2': case 'pvid2':
if(!q) return reply(mess.syntaxDownloadMusic());
try {
await yurizin.reagir(info, '⏳️');
dataVideo = await fetchJson(API_URL+`/api/download/play_video/v2?nome_url=${q}&apikey=`+API_KEY_YURI);
await yurizin.sendMessage(from, { image: {url: dataVideo.resultado?.thumbnails[0] }, caption: mess.ytpvid2(dataVideo) }, {quoted: info}).then(async(sendMess) => {
    await yurizin.sendMessage(from, {video: {url: dataVideo.resultado?.dl_link }, fileName: dataVideo.resultado?.title + '.mp4', mimetype: "video/mp4"}, {quoted: sendMess});
    await yurizin.reagir(info, "✅");
})
} catch(error) {
return await reply(mess.error(), {reagir: "❌"});
}
break

case 'tc': case 'celular':
if(!q) return await reply('Você esqueceu de colocar após o comando qual é o nome do celular que você deseja pesquisar.', {reagir: "❌"});
await reply(mess.wait());
try {
  let listPhones = await TudoCelular.search(q);
  if(listPhones.length == 0) return await reply('Ops! 💩 Não consegui encontrar nenhum smartphone que pode ser correspondente a pesquisa.', {reagir: "💩"});
  let detailsPhone = await TudoCelular.info(listPhones[0].url); // Requisições sobre as especificações do celular.
  yurizin.sendMessage(from, {image: {url: listPhones[0].image}, caption: mess.smartphoneInfo(listPhones, detailsPhone)}, {quoted: info});
} catch(error) {
  return await reply(mess.error(), {reagir: "❌"})
}
break

case 'playlist':
if(!q) return await reply(`• Coloque um URL de uma playlist do YT, após o comando.\n→ Observação:\n\t• O limite pra baixar as mídias *100 (Premium)* e *10 (não Premium)*.\n\t• Tempo de mídia para o premium: *20min* para o não premium: *10min*.\n\t• Caso seja uma playlist privada, não insista em realizar o download.\n> ${NomeDoBot}`);
if(!isUrl(q)) return await reply("O que foi preenchido no campo de texto não é uma URL!");
if(q.includes("/playlist/")) return await reply("O URL preenchido não é uma playlist, por favor, insira um link de uma Playlist.");
const y = new DL({query: q, localFile: './arquivos/libraries/plugins/dl/tmp/', format: "mp3", downloadFile: true, limitPlayList: (isPremium ? 100 : 10), limitSeconds: (isPremium ? 1200 : 900), type: 'youtube'});
await y.downloadZip().then(async(v) => {
await yurizin.sendMessage(from, {document: fs.readFileSync(v.zip), caption: `• Playlist: *${v.playlist} - YouTube*\n• Conclusão: *${v.success.length} música(s) foram baixadas com sucesso, enquanto ${v.unsuccessfully.length} delas não tiveram sucessso.*\n• Total de Músicas: *${v.success.length + v.unsuccessfully.length}*`, mimetype: "application/zip", fileName: v.playlist + ".zip"}, {quoted: selo})
}).catch(async(error) => await reply(error));
break 

case 'shazam': 
// 2024 © Copyright by Yuri-Bot
if(!isQuotedAudio) return await reply('Você esqueceu de mencionar um áudio com um trecho de uma música para fazer o upload ao servidor e retornar o possível nome da música.', {reagir: "❌"});
dataMedia = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage, 'audio');
try {
  const sh = new Shazam();
  _shazamResult = await sh.start(dataMedia);
  await reply(mess.shazam(_shazamResult), {reagir: "✅"});
} catch(error) {
  return await reply(error?.message, {reagir: "❌"});
};
break

case 'audiomeme': case 'playmeme':
if(!q) return reply(`NaN, você não digitou nada... Exemplo: *${prefix+command} Lula*`);
await reagir(from, "✅")
try {
dataInstants = await fetchJson(API_URL+`/api/pesquisa/myinstants?query=${q}&apikey=`+API_KEY_YURI)
randomAudio = await pickRandom(dataInstants.resultado);
await yurizin.sendMessage(from, {audio: { url: randomAudio }, mimetype: "audio/mpeg", ptt: true}, {quoted: selo});
} catch(error) {
reply(mess.error());
}
break

case 'audiomeme2': case 'playmeme2':
if(!q) return reply(`NaN, você não digitou nada... Exemplo: *${prefix+command} Lula*`);
await reagir(from, "✅")
try {
dataTuna = await fetchJson(API_URL+`/api/pesquisa/tuna?query=${q}&apikey=`+API_KEY_YURI)
randomAudio = pickRandom(dataTuna.resultado)
await yurizin.sendMessage(from, {audio: { url: randomAudio }, mimetype: "audio/mpeg", ptt: true}, {quoted: selo})
} catch(error) {
await reply(mess.error());
}
break

case 'enhance': case 'dehaze': case 'recolor':
// © Yuri-Bot
if((isMedia && !info.message.videoMessage || isQuotedImage)) {
MediaMenc = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage;
downloadContent = await downloadContentFromMessage(MediaMenc, 'image');
let base64 = Buffer.from([]);
for await (const send of downloadContent) { base64 = Buffer.concat([base64, send]) };
try {
const vyro = new VyroEngine({operation: command, media: base64});
await yurizin.sendMessage(from, {image: await vyro.start()}, {quoted: selo});
} catch(error) {
await reply(mess.error(), {reagir: '❌️'});
}
} else return await reply(`*‐* Responda uma imagem ou adicione na legenda da imagem o comando, para atribuir o efeito '${command}' à foto`, {reagir: '😾️'});
break

case 'mistral':
if(!q) return await reply("Você esqueceu de perguntar ao lado do comando.", {reagir: '❌️'});
var { key } = await yurizin.sendMessage(from, {text: `Estou processando a resposta de sua pergunta, *isso pode levar alguns segundos*! Aguarde...️`}, {quoted: info});
try {
data = await fetchJson(API_URL+`/api/ia/mistral?prompt=${q}&apikey=`+API_KEY_YURI);
await yurizin.sendMessage(from, {text: data.resultado.resposta, edit: key});
} catch(e) {
await yurizin.sendMessage(from, {text: 'Sem resposta!', edit: key});
}
break

case 'llama':
if(!q) return await reply("Você esqueceu de perguntar ao lado do comando.", {reagir: '❌️'});
var { key } = await yurizin.sendMessage(from, {text: `Estou processando a resposta de sua pergunta, *isso pode levar alguns segundos*! Aguarde...️`}, {quoted: info});
try {
data = await fetchJson(API_URL+`/api/ia/llama?prompt=${q}&apikey=`+API_KEY_YURI);
await yurizin.sendMessage(from, {text: data.resultado.resposta, edit: key});
} catch(e) {
await yurizin.sendMessage(from, {text: 'Sem resposta!', edit: key});
}
break

case 'openai': case 'gpt': case 'chatgpt':
if(!q) return await reply("Você esqueceu de perguntar ao lado do comando.", {reagir: '❌️'});
var { key } = await yurizin.sendMessage(from, {text: `Estou processando a resposta de sua pergunta, *isso pode levar alguns segundos*! Aguarde...️`}, {quoted: info});
try {
data = await fetchJson(API_URL+`/api/ia/openai-gpt?prompt=${q}&apikey=`+API_KEY_YURI);
await yurizin.sendMessage(from, {text: data.resultado.resposta, edit: key});
} catch(e) {
await yurizin.sendMessage(from, {text: 'Sem resposta!', edit: key});
}
break

case 'ghibli': 
if(!isQuotedImage) return await reply(`Marque uma imagem ou adiciona na legenda da mesma o comando por favor.`, {reagir: "😑"});
try {
  dataMedia = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage;
   await reply(mess.wait());
   media = await getFileBuffer(dataMedia, "image");
   base64 = media.toString("base64");  
   var { data } = await axios.post("https://ghibliai-worker.ghibli-ai-prod-worker-v2-8x9f3.workers.dev/generate", {
     imageUrl: `data:image/jpeg;base64,${base64}`
   },
   {
    headers: {
      'authority': 'https://ghibliai-worker.ghibli-ai-prod-worker-v2-8x9f3.workers.dev',
      'accept': '*/*',
      'content-type': 'application/json',
      'origin': 'https://ghibliai.com',
      'priority': 'u=1, i',
      'referer': 'https://ghibliai.com/',
      'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36'
    }
   });  
   let buffer = Buffer.from(data.result.replace(/^data:image\/\w+;base64,/, ""), "base64");   
   await yurizin.sendMessage(from, { image: buffer }, { quoted: info });
} catch(error) {
   return await reply(mess.error(), {reagir: '❌'});
}
break

case 'gemini':
if(!q) return await reply("Você esqueceu de perguntar ao lado do comando.", {reagir: '❌️'});
var { key } = await yurizin.sendMessage(from, {text: `Estou processando a resposta de sua pergunta, *isso pode levar alguns segundos*! Aguarde...️`}, {quoted: info});
try {
data = await fetchJson(API_URL+`/api/ia/geminichat?prompt=${q}&apikey=`+API_KEY_YURI);
await yurizin.sendMessage(from, {text: data.resultado.resposta, edit: key});
} catch(e) {
await yurizin.sendMessage(from, {text: 'Sem resposta!', edit: key});
}
break

case 'deepseek':
if(!q) return await reply("Você esqueceu de perguntar ao lado do comando.", {reagir: '❌️'});
var { key } = await yurizin.sendMessage(from, {text: `Estou processando a resposta de sua pergunta, *isso pode levar alguns segundos*! Aguarde...️`}, {quoted: info});
try {
data = await fetchJson(API_URL+`/api/ia/deepseek?prompt=${q}&apikey=`+API_KEY_YURI);
await yurizin.sendMessage(from, {text: data.resultado.resposta, edit: key});
} catch(e) {
await yurizin.sendMessage(from, {text: 'Sem resposta!', edit: key});
}
break

case 'freebox':
if(!q) return await reply("Você esqueceu de perguntar ao lado do comando.", {reagir: '❌️'});
try {
await reply(mess.wait(), {reagir: "🌟"});
data = await fetchJson(API_URL + `/api/ia/ai-freebox?type=ai-photo-generator&prompt=${q}&apikey=` + API_KEY_YURI);
await yurizin.sendMessage(from, {image: {url: data.resultado?.imageUrl}}, {quoted: selo});
} catch(error) {
await reply(mess.error(), {reagir: "🤦‍♂️"});
}
break

case 'fluxfast':
if(!q) return await reply("Você esqueceu de perguntar ao lado do comando.", {reagir: '❌️'});
try {
await reply(mess.wait(), {reagir: "🌟"});
data = await fetchJson(API_URL + `/api/ia/ai-flux-fast?prompt=${q}&apikey=` + API_KEY_YURI);
await yurizin.sendMessage(from, {image: {url: data.resultado?.imageUrl}}, {quoted: selo});
} catch(error) {
await reply(mess.error(), {reagir: "🤦‍♂️"});
}
break

case 'writecream':
if(!q) return await reply("Você esqueceu de perguntar ao lado do comando.", {reagir: '❌️'});
try {
await reply(mess.wait(), {reagir: "🌟"});
data = await fetchJson(API_URL + `/api/ia/ai-write-cream?prompt=${q}&apikey=` + API_KEY_YURI);
await yurizin.sendMessage(from, {image: {url: data.resultado?.image_link }}, {quoted: selo});
} catch(error) {
await reply(mess.error(), {reagir: "🤦‍♂️"});
}
break

case 'movie':
if (args.length == 0) return reply(`Cadê o nome do filme o qual você deseja ver informações?`);
movieInfo = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY_TMDB}&query=${encodeURIComponent(q)}&language=pt`);
if (movieInfo.data.total_results == 0) return reply(mess.noresult());
var ImageMovieLink = `https://image.tmdb.org/t/p/original${movieInfo.data.results[0].backdrop_path}`;
var fotoFilme = await getBuffer(ImageMovieLink);
await yurizin.sendMessage(from, {image: fotoFilme, caption: mess.movies(movieInfo)}, {quoted: selo}).catch(async(error) => {
return reply(mess.error());
})
break

case 'myname': 
if(!q) return reply('Qual é o nome que você deseja saber o significado? Adicione após o comando...');
try {
data = await fetchJson(API_URL+`/api/pesquisa/myname?query=${q}&apikey=`+ API_KEY_YURI);
await reagir(from, '✅');
await yurizin.sendMessage(from, {image: {url: data.resultado.imageUrl}, caption: `• Origem do Nome: *${data.resultado.origem}*\n• Derivações: *${data.resultado.derivacoes ? data.resultado.derivacoes : "Não possuí nenhum tipo de derivação."}*\n• Gênero: *${capitalizeFirstLetter(data.resultado.genero.split('nome ')[1] || "Gênero não identificado.")}*\n• Lugares ou referências com relação ao nome: *${data.resultado.locaisComNome || 'Sem resultado.'}*\n• Relacionados: *${data.resultado.nomesRelacionados || 'Sem resultado.'}*`}, {quoted: selo});
} catch(error) {
return await reply(mess.error(), {reagir: '❌'});
}
break

case 'retro':
try {
var [TXT1, TXT2, TXT3] = q.split("|");
if(!q.includes("|")) return await reply(`Você esqueceu de adicionar os 3 textos para criar a logo! Para dividir os textos, use *|*, por exemplo:\n> Ex: *${prefix+command} Yuri|BOT|Oficial*`, {reagir: "❌"});
await reply(mess.wait(), {reagir: "✅"});
await yurizin.sendMessage(from, { image: {url: API_URL + `/api/ephoto/retro?apikey=${API_KEY_YURI}&text=${TXT1?.trim()}&text2=${TXT2?.trim()}&text3=${TXT3?.trim()}` }}, {quoted: info});
await yurizin.reagir(info, "✅");
} catch (e) {
return await reply(mess.error(), {reagir: "❌"});
}
break

case 'captain': case 'graffitiwall': case 'phlogo': case 'blackpink': case 'deadpool': case 'glitter': case 'vintage3d':
try {
var [TXT1, TXT2] = q.split("|");
if(!q.includes("|")) return await reply(`Você esqueceu de adicionar os 2 textos para criar a logo! Para dividir os textos, use *|*, por exemplo:\n> Ex: *${prefix+command} Yuri|BOT*`, {reagir: "❌"});
await reply(mess.wait(), {reagir: "✅"});
await yurizin.sendMessage(from, { image: {url: API_URL + `/api/ephoto/${command}?apikey=${API_KEY_YURI}&text=${TXT1?.trim()}&text2=${TXT2?.trim()}` }}, {quoted: info});
await yurizin.reagir(info, "✅");
} catch (e) {
return await reply(mess.error(), {reagir: "❌"});
}
break

case 'galaxy-light': case 'galaxy': case 'glitch': case 'graffiti': case 'metallic': case 'glossy': case 'mascote': case 'dragonfire': case 'goldpink': case 'pubgavatar': case 'ffavatar': case 'amongus': case 'comics': case 'lolavatar': case 'cemiterio': case 'blood': case 'hallobat': case 'titanium': case 'eraser': case 'halloween': case 'snow': case 'america': case 'mascoteneon': case 'doubleexposure': case 'metal': case '3dcrack': case 'colorful': case 'ballon': case 'multicolor': case 'graffitipaint': case 'graffitistyle': case 'frozen': case 'ligatures': case 'watercolor': case 'summerbeach': case 'cloudsky': case 'techstyle': case 'royal': case 'firework': case 'mascotemetal':
try {
if(!q) return await reply(`Você esqueceu de adicionar um texto para criar a logo! Por exemplo:\n> Ex: *${prefix+command} Yuri*`, {reagir: "❌"});
await reply(mess.wait(), {reagir: "✅"});
await yurizin.sendMessage(from, { image: {url: API_URL + `/api/ephoto/${command}?apikey=${API_KEY_YURI}&text=${q?.trim()}` }}, {quoted: info});
await yurizin.reagir(info, "✅");
} catch (e) {
return await reply(mess.error(), {reagir: "❌"});
}
break

case 'fluffy-logo': 
case 'lava-logo': 
case 'cool-logo':
case 'comic-logo':
case 'fire-logo':
case 'water-logo':
case 'ice-logo':
case 'elegant-logo':
case 'gold-logo':
case 'fortune-logo':
case 'blue-logo': 
case 'silver-logo':
case 'neon-logo':
case 'skate-name':
case 'retro-logo':
case 'candy-logo':
case 'glossy-logo':
if(!q) return await reply(`Você esqueceu de adicionar um texto para criar a logo! Por exemplo:\n> Ex.: *${prefix+command} Yuri*`, {reagir: "❌"});
try {
await reply(mess.wait(), {reagir: "✅"});
await yurizin.sendMessage(from, {image: {url: API_URL + `/api/flamingtext?command=${command}&text=${q}&apikey=` + API_KEY_YURI}}, {quoted: selo})
} catch(error) {
return await reply(mess.error(), {reagir: '❌'});
}
break

case 'spoiler': case 'morechat':
var [text1_a, text2_b] = q.split("/"); // Separador
if (!text1_a) text1_a = ""; // Caso o texto1 esteja vazio, vai retornar vázio o parâmetro.
if (!text2_b) text2_b = ""; // Caso o texto2 esteja vazio, vai retornar vázio o parâmetro.
reply(text1_a + String.fromCharCode(8206).repeat(4001) + text2_b); // Enviar o spoiler.
break

case 'obesidade': case 'obeso':
if(!q.includes("/")) return reply(`Ex.: *${prefix+command} peso/altura*`)
var [peso, altura] = q.split("/");
var resultado = await obeso(peso, altura)
if (resultado <= 17 || resultado <= 18.4) { 
    return await reply(`• Seu índice de massa corporal é de: *${resultado}* -> Você está abaixo do peso.`, {reagir: '✅'});
} else if (resultado <= 18.5 || resultado <= 24.9) {
   return await reply(`• Seu índice de massa corporal é: *${resultado}* -> Você está no peso ideal.`, {reagir: '👍'});
} else if (resultado <= 25 || resultado <= 29.9) {
   return await reply(`• Seu índice de massa corporal é: *${resultado}* -> Você está com sobrepeso.`, {reagir: '🫤'});
} else if (resultado <= 30 || resultado <= 39.9) {
   return await reply(`• Seu índice de massa corporal é: *${resultado}* -> Em situção de Obesidade.`, {reagir: '🤨'});
} else if (resultado > 40) {
   return await reply(`• Seu índice de massa corporal é: *${resultado}* -> Obesidade mórbida!`, {reagir: `😵`});
}
break

case 'contardias': case 'countdays':
if(!q.includes("/")) return reply(`Você esqueceu da */* para separar os campos.. Exemplo: *31/03/2024*`);
if(q.length < 10) return reply(`Deve conter a data completa *(dia/mês/ano)* após o comando!\n• Exemplo: *${prefix+command} 31/03/2024*`);
try {
var tomp = await timeDate('DD/MM/YYYY');
var countDay = await countDays(q.split("/"), tomp.split("/"));
reply(`*${countDay}* dia(s).`);
} catch(error) {
return reply(mess.error())
}
break

case 'serie':
if (args.length == 0) return reply(`Cadê o nome da serie o qual você deseja ver informações?`)
serieInfo = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${API_KEY_TMDB}&query=${encodeURIComponent(q)}&language=pt`);
if (serieInfo.data.total_results == 0) return reply(mess.noresult());
await yurizin.sendMessage(from, {image: {url: `https://image.tmdb.org/t/p/original${serieInfo.data.results[0].backdrop_path}`}, caption: mess.series(serieInfo)}, {quoted: selo})
.catch(async(error) => {
return reply(mess.error())
})
break

case 'aptoide':
if (args.length == 0) return reply(`Cadê o nome do app? *Use como exemplo:* ${prefix+command} WhatsApp.`)
try {
const aptoide = await axios.get(`https://ws75.aptoide.com/api/7/apps/search?query=${encodeURIComponent(q)}&trusted=true`);
if (aptoide.data.datalist.total == 0) return reply(mess.noresult());
phAptoide = await(await fetch(aptoide.data.datalist.list[0].graphic)).buffer();
lnDown = await axios.get(`https://tinyurl.com/api-create.php?url=${aptoide.data.datalist.list[0].file.path_alt}`);
await yurizin.sendMessage(from, {image: phAptoide, caption: mess.aptoide(aptoide.data.datalist.list[0], (aptoide.data.datalist.list[0].size / 1048576).toFixed(1), lnDown)}, {quoted: selo}); 
await yurizin.sendMessage(from, {document: {url: aptoide.data.datalist.list[0].file.path}, mimetype: "application/vnd.android.package-archive", fileName: `${aptoide.data.datalist.list[0].name}.apk`, caption: "Download Completo!"}, {quoted: selo})
} catch(error) {
return reply(mess.error())
}
break

case 'scpesquisa': case 'scsearch': case 'pes-sc':
if(!q) return await reply(`Por favor, coloque após o comando o que você deseja buscar no SoundCloud.`, {reagir: "❌"});
try {
data = await fetchJson(API_URL + `/api/pesquisa/soundcloud?query=${q}&apikey=` + API_KEY_YURI);
await reply('> 𝐒𝐨𝐮𝐧𝐝𝐂𝐥𝐨𝐮𝐝 𝐏𝐞𝐬𝐪𝐮𝐢𝐬𝐚\n–\n' + data.resultado.map((v, index) => `*${index + 1}.* Título: *${v.title}*\n• Duração: *${v.time} segundos.*\n• Artista: *${v.artist_name}*\n• Perfil: *${v.artist_url}*\n• URL: *${v.url}*`).join("\n—\n"), {reagir: "✅"});
} catch(error) {
return await reply(mess.error(), {reagir: "❌"})
}
break

case 'applesearch':
if(!q) return await reply(`Por favor, coloque após o comando uma música que você deseja pesquisar no Apple Music, por exemplo: _${prefix+command} Observando essa salada_`);
try {
data = await fetchJson(API_URL + `/api/pesquisa/apple-music?query=${q}&apikey=` + API_KEY_YURI);
await reply('> 𝐀𝐩𝐩𝐥𝐞 𝐌𝐮𝐬𝐢𝐜 𝐏𝐞𝐬𝐪𝐮𝐢𝐬𝐚\n–\n' + data.resultado.map((v, index) => `*${index + 1}.* Título: *${v.title}*\n• Artista: *${v.artistInfo?.name}*\n• Perfil: *${v.artistInfo?.url}*\n• URL: *${v.songUrl}*`).join("\n—\n"), {reagir: "✅"}); 
} catch(error) {
return await reply(mess.error(), {reagir: "❌"})
}
break

case 'soundcloud': case 'scdl':
if(!q) return await reply(`Você esqueceu de colocar após o comando um URL de uma música do SoundCloud.`, {reagir: "😾"})
try {
await yurizin.reagir(info, "⏳️");
data = await fetchJson(API_URL+`/api/download/soundcloud?url=${q}&apikey=`+API_KEY_YURI)
await yurizin.sendMessage(from, {image: {url: API_URL + `/api/photomod/musicard/v3?thumbnail=${data.resultado.imageURL}&music_name=${data.resultado.title}&artist_name=${data.resultado.author.first_name.trim() || "Artista não disponível"}`}, caption: mess.SoundCloud(data, formatNumberDecimal) }, {quoted: selo});
await yurizin.sendMessage(from, {audio: {url: data.resultado.url}, mimetype: "audio/mpeg", fileName: data.resultado.title + '.mp3'}, {quoted: selo})
await yurizin.reagir(info, "✅");
} catch(e) {
return await reply(mess.error(), {reagir: "❌"})
}
break 

case 'kwai':
if(!q) return await reply(`O campo de texto está vazio. Por favor, insira uma URL, nome de usuário (@) ou pesquise um vídeo.`);
if(q.includes('kwai.com')) {
  // Download de Vídeos //
  data = await fetchJson(API_URL+`/api/download/kwai?query=${q}&apikey=`+API_KEY_YURI);
    captionTextDownload = "> 𝐊𝐰𝐚𝐢 - 𝐃𝐋\n—\n";
    captionTextDownload += `• Criador(a):\n\t• Nome: *${data.resultado.profile.name}* | @${data.resultado.profile.user}\n\t• Total de Publicações: *${data.resultado.profile.publications}*\n\t• Seguidores: *${data.resultado.profile.follow}*\n\t• Curtidas: *${data.resultado.profile.like}*\n\t• URL: *${data.resultado.profile.url}*\n—\n• Vídeo:\n\t• Likes: *${data.resultado.like}*\n\t• Visualizações: *${data.resultado.watch}*\n\t• Comentários: *${data.resultado.comments}*\n\t• Compartilhamentos: *${data.resultado.share}*\n\t• Descrição: *${data.resultado.description}*\n\t• Áudio:\n\t\t• Nome: *${data.resultado.audioName}*\n\t\t• Autor: *${data.resultado.audioAuthor}*`;
        await yurizin.sendMessage(from, {video: {url: data.resultado.dl}, caption: captionTextDownload}, {quoted: info});
  } else if(q.startsWith('@')) {
  // Stalkear Perfis do Kwai //
  try {
    data = await fetchJson(API_URL+`/api/download/kwai?query=${q}&apikey=`+API_KEY_YURI);
        await sendUrlText(from, `> 𝐊𝐰𝐚𝐢 - 𝐒𝐭𝐚𝐥𝐤𝐞𝐫\n—\n• Nome: *${data.resultado.name}* | @${data.resultado.user}\n• Total de Curtidas: *${data.resultado.like}*\n• Seguidores: *${data.resultado.follow}*\n• Total de Publicações: *${data.resultado.publications}*\n• Ícone: *${data.resultado.icon}*\n• URL: *${data.resultado.url}*`, `${data.resultado.name} (@${data.resultado.user})`, 'Clique aqui e acompanhe todo contéudo do perfil no Kwai.', data.resultado.icon, data.resultado.url, info);
  } catch(error) {
        await reply(mess.error());
  }
  } else {
  // Pesquisa Kwai - Vídeos //
  try {
    data = await fetchJson(API_URL+`/api/download/kwai?query=${q}&apikey=`+API_KEY_YURI);
    captionTextSearch = "> 𝐊𝐰𝐚𝐢 - 𝐒𝐞𝐚𝐫𝐜𝐡\n—\n";
    captionTextSearch += data.resultado.map((v, index) => `• Nome: *${v.name || 'Sem nome'}* | @${v.user}\n• Descrição: *${v.caption}*\n• Vídeo:\n\t• ${v.likes} Curtidas | ${v.comments} Comentários | ${v.sharing} Compartilhamentos\n\t• Visualizações: ${v.views}\t\n• URL: ${v.url}`).join('\n—\n');
       await reply(captionTextSearch);
   } catch(e) {
        await reply(mess.error());
   }
}
break

case 'instagram': case 'igdl': case 'igaudio': case 'insta_audio': case 'instaaudio': 
if(q.length < 5) return await reply(`Por favor, adicione um link do Instagram post/reel.\n–\n→ Observações: (Sobre o uso da TAG no comando é opcional!):\n• Para baixar o áudio da mídia, use a tag *-a* ou como segunda opção você pode optar usar o comando *insta_audio* ao invés de TAGs.\n– Método 1: ${prefix}instagram [URL da publicação no Instagram] -a\n– Método 2: ${prefix}insta_audio [URL da publicação no Instagram]\n• Sem o uso das TAGs, vai baixar o vídeo ou imagem sem observações.\n–\n• Comandos: instagram | igdl | igaudio | insta_audio | instaaudio`, {reagir: "😾"});
try {
await reply(mess.wait())
if(command === 'igaudio' || command === 'insta_audio' || command === 'instaaudio' || args.includes("-audio") || args.includes("-a")) {
data = await fetchJson(API_URL + `/api/download/instagram?url=${q.replaceAll("-a ", "").replaceAll(" -audio", "").replaceAll("-audio", "").replaceAll("-a", "").replaceAll(" -a", "")?.trim()}&apikey=` + API_KEY_YURI)
if(!data.resultado.media_details[0].type === 'video') return reply(`Desculpe, ocorreu um erro! A mídia não é um vídeo, ou seja, para baixar o áudio, a mídia por padrão deve ser um vídeo! Muito obrigado pela atenção.`, {reagir: "❌"});
await yurizin.sendMessage(from, {audio: {url: data.resultado.media_details[0].url }, mimetype: "audio/mpeg"}, {quoted: selo});
} else {
data = await fetchJson(API_URL + `/api/download/instagram?apikey=${API_KEY_YURI}&url=${q.replaceAll("-a ", "").replaceAll(" -audio", "").replaceAll("-audio", "").replaceAll("-a", "").replaceAll(" -a", "").replaceAll("-video ", "").replaceAll(" -video", "").replaceAll("-video", "").replaceAll("-v", "").replaceAll(" -v", "")?.trim()}`);
await reply(`*Segue as informações do perfil e sobre a publicação baixada:*\n• Usuário: *@${data.resultado?.post_info.owner_username}*\n• Nome: *${data.resultado?.post_info.owner_fullname || "Desconhecido."}*\n• Usuário verificado: *${data.resultado.post_info.is_verified === true ? "Sim" : data.resultado.post_info.is_verified === false ? "Não️" : "Não️"}*\n• Conta privada: *${data.resultado.post_info.is_private === true ? "Sim" : data.resultado.post_info.is_private === false ? "Não️" : "Não"}*\n• Legenda da postagem _(Descrição)_:\n\`\`\`${data.resultado?.post_info.caption}\`\`\`\n• Quantidade de Mídias: *${data.resultado?.media_details.length}*`);
for (let numberPost = 0; numberPost < data.resultado.media_details.length; numberPost++) {
mimety = data.resultado.media_details[numberPost].type === "video" ? "video/mp4" : data.resultado.media_details[numberPost].type === "webp" ? "image/webp" : data.resultado.media_details[numberPost].type === "image" ? "image/jpeg" : data.resultado.media_details[numberPost].type === "audio" ? "audio/mpeg" : "video/mp4";
await yurizin.sendMessage(from, {[mimety.split("/")[0]]: {url: data.resultado.media_details[numberPost].url}, mimetype: mimety}, {quoted: info})
}
}
} catch(error) {
return await reply(error + `\n• Use como uma segunda opção, o comando: ${prefix}Instagram2.`, {reagir: "❌"})
}
break

case 'instagram2': case 'igdl2': case 'igaudio2': case 'insta_audio2': case 'instaaudio2': 
if(q.length < 5) return await reply(`Por favor, adicione um link do Instagram post/reel.\n–\n→ Observações: (Sobre o uso da TAG no comando é opcional!):\n• Para baixar o áudio da mídia, use a tag *-a* ou como segunda opção você pode optar usar o comando *insta_audio* ao invés de TAGs.\n– Método 1: ${prefix}instagram2 [URL da publicação no Instagram] -a\n– Método 2: ${prefix}insta_audio2 [URL da publicação no Instagram]\n• Sem o uso das TAGs, vai baixar o vídeo ou imagem sem observações.\n–\n• Comandos: instagram2 | igdl2 | igaudio2 | insta_audio2 | instaaudio2`, {reagir: "😾"});
try {
await reply(mess.wait())
if(command === 'igaudio2' || command === 'insta_audio2' || command === 'instaaudio2' || args.includes("-audio") || args.includes("-a")) {
data = await fetchJson(API_URL + `/api/download/instagram/v2?url=${q.replaceAll("-a ", "").replaceAll(" -audio", "").replaceAll("-audio", "").replaceAll("-a", "").replaceAll(" -a", "")?.trim()}&apikey=` + API_KEY_YURI)
buffer = await fetchBuffer(data.resultado[0].url);
if(!buffer.mimetype.includes("application")) return reply(`Desculpe, ocorreu um erro! A mídia não é um vídeo, ou seja, para baixar o áudio, a mídia por padrão deve ser um vídeo! Muito obrigado pela atenção.`, {reagir: "❌"});
await yurizin.sendMessage(from, {audio: buffer.result, mimetype: "audio/mpeg"}, {quoted: selo});
} else {
data = await fetchJson(API_URL + `/api/download/instagram/v2?url=${q.replaceAll("-a ", "").replaceAll(" -audio", "").replaceAll("-audio", "").replaceAll("-a", "").replaceAll(" -a", "").replaceAll("-video ", "").replaceAll(" -video", "").replaceAll("-video", "").replaceAll("-v", "").replaceAll(" -v", "")?.trim()}&apikey=` + API_KEY_YURI)
for (let i = 0; i < data.resultado.length; i++) {
buffer = await fetchBuffer(data.resultado[i].url);
if(buffer.mimetype === "application/octet-stream") {
await yurizin.sendMessage(from, {video: buffer.result, mimetype: "video/mp4"}, {quoted: info})
} else if(buffer.mimetype === "image/jpeg") {
await yurizin.sendMessage(from, {image: buffer.result, mimetype: buffer.mimetype}, {quoted: info})
}
}
}
} catch(error) {
return await reply(error, {reagir: "❌"})
}
break

case 'tiktok': case 'tkaudio': case 'tkvideo': case 'tiktok_video': case 'tiktok_audio': case 'tiktokaudio': case 'tiktokvideo':
if(q.length < 5) return await reply(`Você esqueceu de adicionar um URL do TikTok.\n–\n→ Observações: (Sobre o uso da TAG no comando é opcional!):\n• Para baixar o áudio da mídia, use a tag *-a* ou como segunda opção você pode optar usar o comando *tiktok_audio* ao invés de TAGs.\n– Método 1: ${prefix}tiktok [URL da foto ou vídeo do Tiktok] -a\n– Método 2: ${prefix}tiktok_audio [URL da foto ou vídeo do Tiktok]\n• Sem o uso das TAGs, vai baixar o vídeo ou imagem sem observações.\n–\n• Comandos: tiktok | tiktok_video | tkaudio | tkvideo | tiktokaudio | tiktok_video | tiktokvideo`, {reagir: "😾"});
try {
if(command === 'tiktokaudio' || command === 'tiktok_audio' || command === 'tkaudio' || args.includes("-a") || args.includes("-audio")) {
data = await fetchJson(API_URL + `/api/download/tiktok?url=${q.replaceAll("-a ", "").replaceAll(" -audio", "").replaceAll("-audio", "").replaceAll("-a", "").replaceAll(" -a", "")?.trim()}&apikey=` + API_KEY_YURI);
  await yurizin.sendMessage(from, {document: {url: data.resultado?.music.playUrl[0]}, mimetype: "audio/mpeg", fileName: `${data.resultado?.music.title} - ${data.resultado?.music.author}.mp3`, caption: mess.tiktokMusic(data) }, {quoted: selo});
} else if(command === 'tiktokvideo' || command === 'tiktok_video' || command === 'tkvideo' || args.includes("-v") || args.includes("-video")) {
data = await fetchJson(API_URL + `/api/download/tiktok?url=${q.replaceAll("-video ", "").replaceAll(" -video", "").replaceAll("-video", "").replaceAll("-v", "").replaceAll(" -v", "")?.trim()}&apikey=` + API_KEY_YURI);
if(data.resultado?.type === 'video') {
  await yurizin.sendMessage(from, {video: {url: data.resultado?.video.playAddr[0]}, caption: mess.tiktok(data)}, {quoted: selo});
} else { return await reply("Sem resultado!", {reagir: "❌"}); }
} else { 
data = await fetchJson(API_URL + `/api/download/tiktok?url=${q.replaceAll("-a ", "").replaceAll(" -audio", "").replaceAll("-audio", "").replaceAll("-a", "").replaceAll(" -a", "").replaceAll("-video ", "").replaceAll(" -video", "").replaceAll("-video", "").replaceAll("-v", "").replaceAll(" -v", "")?.trim()}&apikey=` + API_KEY_YURI);
if(data.resultado?.type === 'video') {
    await yurizin.sendMessage(from, {video: {url: data.resultado?.video.playAddr[0]}, caption: mess.tiktok(data)}, {quoted: selo});
} else if(data.resultado?.type === 'image') {
for (let i = 0; i < data.resultado?.images.length; i++) { 
  await yurizin.sendMessage(from, {image: {url: data.resultado?.images[i]}}, {quoted: info})
}
} else { return await reply("Sem resultado!", {reagir: "❌"}); }
}
} catch(error) {
 return await reply(mess.error(), {reagir: "❌"})
}
break

case 'threads': case 'thdl':
if(q.length < 5) return reply('Por favor, adicione um link do Threads post/reel.');
try {
reply(mess.wait())
data = await fetchJson(API_URL+`/api/download/threads?url=${q}&apikey=`+API_KEY_YURI)
for (let i = 0; i < data.resultado.resultado.length; i++) {
let dmt = data.resultado.resultado[i].type;
mimety = dmt === "video" ? "video/mp4" : dmt === "webp" ? "image/webp" : dmt === "imagem" ? "image/jpeg" : dmt === "audio" ? "audio/mpeg" : "video/mp4"
await yurizin.sendMessage(from, {[mimety.split("/")[0]]: {url: data.resultado.resultado[i].link}, mimetype: mimety}, {quoted: info})
}
} catch(error) {
return reply(mess.error())
}
break

case 'multidl': case 'pocbi':
if(q.length < 5) return reply('Por favor, adicione um link de uma rede social de mídia. (Ex.: Tiktok, insta, threads, etc...)');
try {
data = await fetchJson(API_URL+`/api/download/multi-download?url=${q}&apikey=`+API_KEY_YURI);
for (let i = 0; i < data.resultado.medias.length; i++) {
let dmt = data.resultado.medias[i].extension
mimety = dmt === "mp4" ? "video/mp4" : dmt === "webp" ? "image/webp" : dmt === "jpg" ? "image/jpeg" : dmt === "mp3" ? "audio/mpeg" : "video/mp4"
await yurizin.sendMessage(from, {[mimety.split("/")[0]]: {url: data.resultado.medias[i].url}, mimetype: mimety}, {quoted: info})
}
} catch(error) {
return reply(mess.error())
}
break

case 'igstory':
case 'instastorys':
case 'instastory':
if (!q) return reply(`Cadê o *usuário da pessoa* que você deseja baixar os storys?\n     • Exemplo: *${prefix+command} @jaoferreira*`);
if (!q.includes("@")) return reply(`Coloque o *@* na frente do usuário para obter um resultado positivo.\n📌 Exemplo: *${prefix+command} @jaoferreira*\n\t• *Não use links de perfil*, coloque o @. Caso apresente um link o resultado será negativo.\n\t• Este comando só baixa storys, *para baixar reels ou entre outras variedades*, use: *${prefix}igdl [link do post/reels]*`);
try {
reply(`Buscando stories do usuário: *${q}*, aguarde o retorno...`)
data = await fetchJson(API_URL+`/api/download/instagram-story?usuario=${q.replace("@", "")}&apikey=`+API_KEY_YURI)
for (let i = 0; i < data.resultado.length; i++) {
let dmt = data.resultado[i].type
mimety = dmt === "video" ? "video/mp4" : dmt === "sticker" ? "image/webp" : dmt === "imagem" ? "image/jpeg" : dmt === "audio" ? "audio/mpeg" : "video/mp4"
await yurizin.sendMessage(from, {[mimety.split("/")[0]]: {url: data.resultado[i].link}, mimetype: mimety}, {quoted: info})
}
} catch(error) {
return reply(mess.error())
}
break

case 'tiktokstalker': case 'tksh':
if(!q) return reply(`Cadê o *usuário da pessoa* que você deseja stalkear?\n📌 Exemplo: *${prefix+command} @alex10ofc*\n\t• *Não use links de perfil*, coloque o @. Caso apresente um link o resultado será negativo.`);
if(!q.includes("@")) return reply(`Coloque o *@* na frente do usuário para obter um resultado positivo.\n📌 Exemplo: *${prefix+command} @jaoferreira*\n\t• *Não use links de perfil*, coloque o @. Caso apresente um link o resultado será negativo.`)
try {
data = await fetchJson(API_URL+`/api/stalker/tiktok-stalker?usuario=${q}&apikey=`+API_KEY_YURI);
await sendUrlText(from, mess.TiktokStalker(data, formatNumberDecimal), `${data.resultado.users.nickname} (@${data.resultado.users.username})`, `${formatNumberDecimal(data.resultado.stats.followerCount)} Seguidores | ${formatNumberDecimal(data.resultado.stats.followingCount)} Seguindo | ${formatNumberDecimal(data.resultado.stats.heartCount)} Curtidas`, data.resultado.users.avatarLarger || images["Main"].value, `https://tiktok.com/@${data.resultado.users.username}`, info);
} catch(error) {
await reply(mess.error());
console.log(error)
}
break

case 'igsh': case 'igstalker': case 'instastalk': case 'instastalker':
if(!q.includes("@")) return reply(`Coloque após este comando com o @ da pessoa que você deseja stalkear *_(perseguir)_*. Contendo o @ na frente, por favor!\n📌 *Exemplo:* _${prefix+command} @anitta_\n–\n→ Dados a serem retornados: *Registro das 7 últimas publicações postadas com o link do site do Dumpor, uma plataforma de Stalker, estatísticas do Perfil e biografia.*\n→ _Caso não coloque o @ da pessoa correto não irá funcionar, se a conta existir vai retornar informações de outro perfil e não o desejado, se não existir irá retornar uma mensagem de erro ao processar tal solicitação._`, {reagir: "🤫"});
try {
data = await fetchJson(API_URL+`/api/stalker/insta-stalker?usuario=${q.replace("@", "")}&apikey=`+API_KEY_YURI)
await yurizin.sendMessage(from, {text: mess.InstaStalker(data), contextInfo: {externalAdReply: {title: `${data.resultado.name || "Usuário do Instagram"} (${data.resultado.username}) • Fotos e vídeos do Instagram.`, body: `${data.resultado.statistic.followersCount} seguidores, ${data.resultado.statistic.followingCount} seguindo, ${data.resultado.statistic.postsCount} publicações.`, thumbnail: await getBuffer(data.resultado.avatarUrl), mediaType: 2, sourceUrl: `https://instagram.com/${data.resultado.username.split("@")[0]}`}}}, {quoted: selo});
} catch(error) {
return await reply(mess.error(), {reagir: "❌"});
}
break

case 'ffstalker':
if(!q) return await reply('Coloque após o comando o id da conta do Free Fire para retornar informações sobre.');
try {
  data = await fetchJson(API_URL + `/api/stalker/freefire-stalker?apikey=${API_KEY_YURI}&id=${q}`);
  await  yurizin.sendMessage(from, {image: {url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6dWeC1Otks55F-YljtioduFDxluJLF8n_jL_BVz9itL90wqhy-gflWqHW&s=10'}, caption: mess.FreeFireStalker(data) }, {quoted: selo});
} catch(error) {
  return await reply(mess.error());
}
break

case 'applemusic':
if(!q) return await reply(`Coloque após o comando o nome da música para pesquisar no Apple Music e fazer o download da música.\n• Ex.: *${prefix}applemusic Observando essa salada*`, { reagir: "❌" });
try {
data = await fetchJson(API_URL + `/api/pesquisa/apple-music?apikey=${API_KEY_YURI}&query=${q}`);
dataMusic = await fetchJson(API_URL + `/api/download/apple-music?apikey=${API_KEY_YURI}&url=${data.resultado[0]?.songUrl}`);
//console.log(dataMusic);
await yurizin.sendMessage(from, {image: await getBuffer(data.resultado[0]?.thumbnail), caption: `• Título: *${data.resultado[0]?.title}*\n• URL da Música: *${data.resultado[0]?.songUrl}*\n• Artista(s)/Cantor(es): *${data.resultado[0]?.artistInfo.name}*\n• URL Perfil do Artista: *${data.resultado[0]?.artistInfo.url}*\n• Nome do Album: *${dataMusic?.resultado.metadata?.album}*`}, {quoted: selo});
await yurizin.sendMessage(from, {audio: {url: dataMusic?.resultado.dl_link}, mimetype: "audio/mpeg"}, {quoted: selo});
} catch(error) {
return await reply(mess.error(), {reagir: "❌"});
}
break

case 'mediafire':
if(!q) return reply(`Você não colocou nenhum URL após o comando, *o que deseja baixar?*`)
if(!q.includes("mediafire.com")) return reply("O URL depositado após o comando, não é válido para o mediafire. Por favor, preencha com um URL válido!\n→ Observação: Não use encurtadores de LINK ( bit.ly | cutt.ly | etc), use o  original disponibilizado pelo MediaFire, ele começa com mediafire.com.");
try {
await reply(mess.wait(), {reagir: "✅️"})
data = await fetchJson(API_URL+`/api/download/mediafire?url=${q}&apikey=`+API_KEY_YURI)
await yurizin.sendMessage(from, {document: {url: data.resultado["URL"]}, caption: mess.MediaFire(data), mimetype: data.resultado.mimetype, fileName: data.resultado.fileName}, {quoted: selo})
} catch(error) {
return reply(mess.error(), {reagir: "❌"})  
}
break

case 'gdrive': case 'googledrive':
if(!q.includes("drive.google.com")) return reply("Faltando o link do google drive para download do arquivo, cade?");
try {
await reply(mess.wait(), {reagir: "✅️"})
var { resultado } = await fetchJson(API_URL+`/api/download/google-drive?url=${q}&apikey=`+API_KEY_YURI)
await yurizin.sendMessage(from, {document: {url: resultado["downloadUrl"]}, mimetype: resultado["mimetype"], fileName: resultado["fileName"]}, {quoted: info});
} catch(error) {
return reply(mess.error(), {reagir: "❌"})  
}
break

case 'gitclone':
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (!q) return reply(`Exemplo: ${prefix}gitclone https://github.com/whiskeysockets/baileys`);
reply(mess.wait())
let [user, repo] = args[0].match(regex1) || []
repo = repo.replace(/.git$/, '')
let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
await yurizin.sendMessage(from, {document: {url: `https://api.github.com/repos/${user}/${repo}/zipball`}, fileName: filename+'.zip', mimetype: 'application/zip' }, {quoted: selo}).catch(async(error) => {
return reply(mess.error());
})
break

case 'antiimg':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(args.length < 1) return reply(`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix+command} 1, caso seja desativar e só trocar o 1 pelo 0.`)
if(Number(args[0]) === 1) {
if(isAntiImg) return reply('O recurso de anti imagem já está ativado.')
dataGp[0].antiimg.status = true
updateGroup(dataGp)
reply('Ativou com sucesso o recurso de anti imagem neste grupo.️')
} else if(Number(args[0]) === 0) {
if(!isAntiImg) return reply('O recurso de anti imagem já está desativado.')
dataGp[0].antiimg.status = false
updateGroup(dataGp)
reply('Desativou com sucesso o recurso de anti imagem neste grupo.')
} else {
reply('1 para ativar, 0 para desativar.')
}
break

case 'antivideo':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(args.length < 1) return reply(`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix+command} 1, caso seja desativar e só trocar o 1 pelo 0.`)
if(Number(args[0]) === 1) {
if(isAntiVid) return reply('O recurso de anti vídeo já está ativado.')
dataGp[0].antivideo = true
updateGroup(dataGp)
reply('Ativou com sucesso o recurso de anti video neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isAntiVid) return reply('O recurso de anti vídeo já está desativado.')
dataGp[0].antivideo = false
updateGroup(dataGp)
reply('Desativou com sucesso o recurso de anti video neste grupo.')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antiaudio':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(args.length < 1) return reply(`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix+command} 1, caso seja desativar e só trocar o 1 pelo 0.`)
if(Number(args[0]) === 1) {
if(isAntiAudio) return reply('O recurso de anti áudio já está ativado.')
dataGp[0].antiaudio.status = true
updateGroup(dataGp)
reply('Ativou com sucesso o recurso de anti audio neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isAntiAudio) return reply('O recurso de anti áudio já está desativado.')  
dataGp[0].antiaudio.status = false
updateGroup(dataGp)
reply('Desativou com sucesso o recurso de anti audio neste grupo.')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antisticker':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(args.length < 1) return reply(`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix+command} 1, caso seja desativar e só trocar o 1 pelo 0.`)
if(Number(args[0]) === 1) {
if(isAntiSticker) return reply('O recurso de anti sticker já está ativado.')
dataGp[0].antisticker.status = true
updateGroup(dataGp)
reply('Ativou com sucesso o recurso de anti sticker neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isAntiSticker) return reply('O recurso de anti sticker já está desativado.')
dataGp[0].antisticker.status = false
updateGroup(dataGp)
reply('Desativou com sucesso o recurso de anti sticker neste grupo.')
} else {
reply('1 para ativar, 0 para desativar.')
}
break

case 'antidocumento':
case 'antidoc':
if(!isGroup) return reply(mess.onlyGroup());
if(!isGroupAdmins) return reply(mess.onlyAdmins());
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
if(args.length < 1) return reply(`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix+command} 1, caso seja desativar e só trocar o 1 pelo 0.`)
if(Number(args[0]) === 1) {
if(Antidoc) return reply('O recurso de anti documento já está ativado.')
dataGp[0].antidoc.status = true
updateGroup(dataGp)
reply('Ativou com sucesso o recurso de anti documento neste grupo.')
} else if(Number(args[0]) === 0) {
if(!Antidoc) return reply('O recurso de anti documento já está desativado.')
dataGp[0].antidoc.status = false
updateGroup(dataGp)
reply('Desativou com sucesso o recurso de anti documento neste grupo.')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antictt':
case 'anticontato':  
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(args.length < 1) return reply(`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix+command} 1, caso seja desativar e só trocar o 1 pelo 0.`)
if(Number(args[0]) === 1) {
if(isAntiCtt) return reply('O recurso de anti contato já está ativado.')
dataGp[0].antictt.status = true
updateGroup(dataGp)
reply('Ativou com sucesso o recurso de anti contato neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isAntiCtt) return reply('O recurso de anti contato já está desativado.')
dataGp[0].antictt.status = false
updateGroup(dataGp)
reply('️Desativou com sucesso o recurso de anticontato neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antiloc':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())								
if(args.length < 1) return reply(`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix+command} 1, caso seja desativar e só trocar o 1 pelo 0.`)
if(Number(args[0]) === 1) {
if(Antiloc) return reply('O recurso de anti loc já está ativado.')
dataGp[0].antiloc.status = true
updateGroup(dataGp)
reply('Ativou com sucesso o recurso de anti loc neste grupo.')
} else if(Number(args[0]) === 0) {
if(!Antiloc) return reply('O recurso de anti loc já está desativado.')
dataGp[0].antiloc.status = false
updateGroup(dataGp)
reply('Desativou com sucesso o recurso de anti loc neste grupo.')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antiddd': case 'anti_ddd': case 'anti-ddd':
if(!isGroup) return await reply(mess.onlyGroup())
if(!isGroupAdmins) return await reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return await reply(mess.onlyBotAdmin())
if(args.length < 1) return await reply(`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix+command} 1, caso seja desativar e só trocar o 1 pelo 0.`)
if(Number(args[0]) === 1) {
if(isAntiDDD) return await reply('Este recurso já está ativado atualmente senhor(a)!');
dataGp[0].ANTI_DDD.active = true
updateGroup(dataGp)
await reply('(🌟) O recurso de remoção de números com DDD adicionado à lista, foi ativado com sucesso!');
} else if(Number(args[0]) === 0) {
if(!isAntiDDD) return await reply('Este recurso já está desativado atualmente senhor(a)!');
dataGp[0].ANTI_DDD.active = false
updateGroup(dataGp)
await reply('(🌟) O recurso de remoção de números com DDD adicionado à lista, foi desativado com sucesso!');
} else {
await reply('1 para ativar, 0 para desativar.');
}
break

case 'antiddd-list':
if(!isGroup) return await reply(mess.onlyGroup())
if(!isAntiDDD) return await reply(`Para usar este comando, você deve ativar o comando: antiddd\nExemplo: ${prefix}antiddd 1.`)
if(dataGp[0].ANTI_DDD.listaProibidos.length < 1) return await reply(`[!] Não existe nenhum ddd proibido neste grupo. Para adicionar à lista, use: ${prefix}add_ddd 21, por exemplo.`);
await reply(`Aqui está a lista de DDD proibidos no grupo: '${groupName}':\n• *[Total: ${dataGp[0].ANTI_DDD.listaProibidos.length}]* - ${dataGp[0].ANTI_DDD.listaProibidos.map((v, index) => v).join(", ")}`);
break

case 'add_ddd':
if(!isGroup) return await reply(mess.onlyGroup())
if(!isGroupAdmins) return await reply(mess.onlyAdmins())
if(!isAntiDDD) return await reply(`Para usar este comando, você deve ativar o comando: antiddd\nExemplo: ${prefix}antiddd 1.`)
if(!q.trim()) return await reply("Determine o DDD que você deseja adicionar na lista, não pode conter espaço vázio.")
if(q.trim() === 2) return await reply(`Um DDD possuí 2 dígitos numéricos, por exemplo: 81 (Este DDD pertence à Pernambuco).`)
if(dataGp[0].ANTI_DDD.listaProibidos.indexOf(q.trim()) >= 0) return await reply(`Esse DDD já se encontra incluso, procure ver na lista dos DDDs banidos no grupo, use: '${prefix}antiddd-list'`)
if(arrayDDDs.indexOf(q.trim()) >= 0) return await reply('O DDD preenchido é inválido, não existe nenhum número com este DDD atualmente.');
dataGp[0].ANTI_DDD.listaProibidos.push(q.trim())
updateGroup(dataGp)
await reply(`• O DDD '${q.trim()}' foi adicionado com sucesso à blacklist, agora os números que tiver o DDD de ${extractStateFromDDD(q.trim())} será imediatamente banido do grupo.`)
break

case 'delete_ddd': case 'del_ddd': case 'rm_ddd':
if(!isGroup) return await reply(mess.onlyGroup())
if(!isGroupAdmins) return await reply(mess.onlyAdmins())
if(!isAntiDDD) return await reply(`Para usar este comando, você deve ativar o comando: antiddd\nExemplo: ${prefix}antiddd 1.`) 
if(!q.trim()) return await reply("Determine o DDD que você deseja remover da lista, não pode conter espaço vázio.")
if(q.trim() === 2) return await reply(`Calma, só pode ser removido um DDD por vez.\n• Exemplo: ${prefix+command} 84, aí o bot não vai mais remover os DDDs pertencentes à Rio Grande do Sul.`)
if(dataGp[0].ANTI_DDD.listaProibidos.indexOf(q.trim()) < 0) return await reply(`Este DDD não está incluso, procure ver na lista dos DDDs excluídos para este grupo. Use: ${prefix}antiddd-list`)
if(dataGp[0].ANTI_DDD.listaProibidos.length == 0) return await reply("A lista atualmente está vázia, então não tem como remover nenhum DDD, adicione pelo menos um.")
dataGp[0].ANTI_DDD.listaProibidos.splice(dataGp[0].ANTI_DDD.listaProibidos.indexOf(q.trim()), 1)
updateGroup(dataGp)
await reply(`O DDD '${q.trim()}' tirado com sucesso da lista de DDDs excluídos do grupo com sucesso, agora o bot não irá mais impedir à entrada deles.`);
break

case 'antilinkgp':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(args.length < 1) return reply(`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix+command} 1, caso seja desativar e só trocar o 1 pelo 0.`)
if(Number(args[0]) === 1) {
if(isAntilinkgp) return reply('O recurso de antilink de grupo já está ativado.')
dataGp[0].antilinkgp.status = true
updateGroup(dataGp)
reply('Ativou com sucesso o recurso de antilink de grupo.')
} else if(Number(args[0]) === 0) {
if(!isAntilinkgp) return reply('O recurso de antilink de grupo já está desativado.')
dataGp[0].antilinkgp.status = false
updateGroup(dataGp)
reply('Desativou com sucesso o recurso de antilink de grupo.')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antipoll': case 'anti_enquete': case 'antienquete': case 'polldetect':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(args.length < 1) return reply(`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix+command} 1, caso seja desativar e só trocar o 1 pelo 0.`)
if(Number(args[0]) === 1) {
if(isAntiPoll) return await reply('O recurso de anti enquetes neste grupo já está ativado no momento. Para desativar, use 0 como argumento na hora de executar o comando.');
dataGp[0].anti_enquete.status = true
updateGroup(dataGp)
reply('Ativou com sucesso o recurso de anti enquetes neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isAntiPoll) return reply('O recurso de anti enquetes neste grupo já se encontra desativado no momento. Para habilitar, use 1 como argumento na hora de executar.');
dataGp[0].anti_enquete.status = false
updateGroup(dataGp)
reply('Desativou com sucesso o recurso de anti enquetes neste grupo.');
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antilinkhard':
case 'antilink':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(args.length < 1) return reply(`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix+command} 1, caso seja desativar e só trocar o 1 pelo 0.`)
if(Number(args[0]) === 1) {
if(isAntiLinkHard) return reply('O recurso de antilink hardcore já está ativado.')
dataGp[0].antilinkhard.status = true
updateGroup(dataGp)
reply('Ativou com sucesso o recurso de antilink hardcore neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isAntiLinkHard) return reply('O recurso de antilink hardcore já está desativado.')
dataGp[0].antilinkhard.status = false
updateGroup(dataGp)
reply('Desativou com sucesso o recurso de antilink harcore neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'x9':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(args.length < 1) return reply(`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix+command} 1, caso seja desativar e só trocar o 1 pelo 0.`)
if(Number(args[0]) === 1) {
if(isx9) return reply('O recurso de x9 já está ativado.')
dataGp[0].x9 = true
updateGroup(dataGp)
reply('Ativou com sucesso o recurso de x9 neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isx9) return reply('O recurso de x9 já está desativado.')
dataGp[0].x9 = false
updateGroup(dataGp)
reply('Desativou com sucesso o recurso de x9 neste grupo.')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'visualizarmsg':
if(!SoDono) return reply(mess.onlyOwner())
if(!isVisualizar) {
definitions.ViewMessagesChat = true
fs.writeFileSync('./settings/definitions.json', JSON.stringify(definitions, null, 2))
reply('Ativou com sucesso o recurso de visualizar todas as mensagens enviada em grupos e privado.')
} else if(isVisualizar) {
definitions.ViewMessagesChat = false
fs.writeFileSync('./settings/definitions.json', JSON.stringify(definitions, null, 2))
reply('Desativou com sucesso o recurso de visualizar todas as mensagens enviada em grupos e privado.')
}
break

case 'so_adm':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(args.length < 1) return reply(`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix+command} 1, caso seja desativar e só trocar o 1 pelo 0.`)
if(Number(args[0]) === 1) {
if(So_Adm) return reply('O modo para somente adminstradores usarem o bot, já se encontra ativo no grupo senhor(a)!')
dataGp[0].soadm.status = true
updateGroup(dataGp)
reply('Ativou com sucesso o recurso de só adm utilizar comandos neste grupo.')
} else if(Number(args[0]) === 0) {
if(!So_Adm) return reply('O modo para somente adminstradores usarem o bot atualmente já está desativado no grupo.')
dataGp[0].soadm.status = false
updateGroup(dataGp)
reply('Desativou o recurso de só adm utilizar comandos neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antifake':
if(!isGroup) return reply(mess.onlyGroup())
if(!SoDono) return reply(mess.onlyOwner())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(args.length < 1) return reply(`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix+command} 1, caso seja desativar e só trocar o 1 pelo 0.`)
if(Number(args[0]) === 1) {
if(isAntifake) return reply('O recurso de antifake neste grupo já está ativado.')
dataGp[0].antifake.status = true
updateGroup(dataGp)
reply('Ativou com sucesso o recurso de antifake neste grupo!')
} else if(Number(args[0]) === 0) {
if(!isAntifake) return reply('O recurso de antifake neste grupo já está desativado.')
dataGp[0].antifake.status = false
updateGroup(dataGp)
reply('Desativou com sucesso o recurso de antifake neste grupo!')
} else {
reply('1 para ativar, 0 para desativar.')
}
break

case 'prefixos':
if(!isGroup) return reply(mess.onlyGroup())
if(!isMultiP) return reply(`Para usar este comando, você deve ativar o comando, multiprefix\nExemplo: ${prefix}multiprefixo`)
if(dataGp[0].prefixos.length < 1) return reply("Não contem nenhum prefixo a mais adicionado neste grupo.")
reply(`Lista de prefixos para uso do bot, no Grupo: *${groupName}*:\n• *[Total: ${dataGp[0].prefixos.length}]* - ${dataGp[0].prefixos.map((v, index) => `( ${v} )`).join(", ")}`)
break

case 'add_prefixo':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isMultiP) return reply(`Para usar este comando, você deve ativar o comando, multiprefix\nExemplo: ${prefix}multiprefixo`)
if(ANT_LTR_MD_EMJ(q)) return reply("Não pode letra modificada, nem emoji..")
if(!q.trim()) return reply("Determine o novo prefixo, não pode espaço vazio...")
if(q.trim() > 1) return reply(`Calma, o prefixo só pode ser um\nExemplo: ${prefix+command} _\nAe o bot vai passar á responder _ como prefixo do bot..`)
if(dataGp[0].prefixos.indexOf(q.trim()) >= 0) return reply(`Esse prefixo já se encontra incluso, procure ver na lista dos prefixos\nExemplo: ${prefix}prefixos`)
dataGp[0].prefixos.push(q.trim())
updateGroup(dataGp)
reply(`Prefixo ${q.trim()} foi adicionado com sucesso na lista de prefixos para uso do bot, neste grupo...`)
break

case 'tirar_prefixo':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isMultiP) return reply(`Para usar este comando, você deve ativar o comando, multiprefix\nExemplo: ${prefix}multiprefixo`)  
if(ANT_LTR_MD_EMJ(q)) return reply("Não pode letra modificada, nem emoji..")
if(!q.trim()) return reply("Determine o prefixo que deseja tirar, não pode espaço vazio...")
if(q.trim() > 1) return reply(`Calma, o prefixo só pode ser tirado um por vez..\nExemplo: ${prefix+command} _\nAe o bot não vai responder mais com _`)
if(dataGp[0].prefixos.indexOf(q.trim()) < 0) return reply(`Esse prefixo não está incluso, procure ver na lista dos prefixos. Veja: ${prefix}prefixos`)
if(dataGp[0].prefixos.length == 1) return reply("Adicione um prefixo para pode tirar este, tem que ter pelo menos 1 prefixo já incluso dentro do sistema para tirar outro.")
dataGp[0].prefixos.splice(dataGp[0].prefixos.indexOf(q.trim()), 1)
updateGroup(dataGp)
reply(`Prefixo ${q.trim()} tirado com sucesso da lista de prefixos de uso deste grupo..`)
break

case 'multiprefixo': case 'multiprefix':  
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins())
if(!isMultiP) {
dataGp[0].multiprefix = true
updateGroup(dataGp)
reply('Ativou com sucesso o recurso de multi prefixos neste grupo.')
}
if(isMultiP) {
dataGp[0].multiprefix = false
updateGroup(dataGp)
reply('Desativou com sucesso o recurso de multi prefixos neste grupo.')
}
break

case 'ephemeral': case 'msgtemp':
if (!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
getInfoG = await yurizin.groupMetadata(from); /* Pegar as informações total do grupo! */
if (getInfoG.ephemeralDuration == undefined) {
reply(`As mensagens temporárias no grupo foram ativadas com sucesso.`)
await yurizin.sendMessage(from, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL})
} else if (getInfoG.ephemeralDuration > 1) {
reply(`As mensagens temporárias no grupo foram desativadas com sucesso.`)
await yurizin.sendMessage(from, { disappearingMessagesInChat: false})
}
break

case 'rmphotogp': case 'rmfotogroup':
if (!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
reply(`A foto do grupo foi removida com sucesso.`)
await yurizin.removeProfilePicture(from)
break

case 'antinotas':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(args.length < 1) return reply(`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix+command} 1, caso seja desativar e só trocar o 1 pelo 0.`)
if(Number(args[0]) === 1) {
if(isAntiNotas) return reply('O recurso de anti notas já está ativado no grupo.')
dataGp[0].antinotas.status = true
updateGroup(dataGp)
reply('Ativou com sucesso o recurso de anti notas neste grupo.️')
} else if(Number(args[0]) === 0) {
if(!isAntiNotas) return reply('O recurso de anti notas já está desativado no grupo.')
dataGp[0].antinotas.status = false
updateGroup(dataGp)
reply('Desativou com sucesso o recurso de anti notas neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'anticatalogo':
case 'anticatalg':  
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(args.length < 1) return reply(`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix+command} 1, caso seja desativar e só trocar o 1 pelo 0.`)
if(Number(args[0]) === 1) {
if(isAnticatalogo) return reply('O recurso de anti catálogos já se encontra ativo no grupo atualmente.')
dataGp[0].anticatalogo.status = true
updateGroup(dataGp)
reply('Ativou com sucesso o recurso de anticatalogo neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isAnticatalogo) return reply('O recurso atualmente se encontra desativado no grupo.')
dataGp[0].anticatalogo.status = false
updateGroup(dataGp)
reply('Desativou com sucesso o recurso de anticatalogo neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'bemvindo':
case 'welcome':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(args.length < 1) return reply(`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix+command} 1, caso seja desativar e só trocar o 1 pelo 0.`)
if(Number(args[0]) === 1) {
if(isWelkom) return reply('O recurso de boas vindas já está ativo neste grupo.')
dataGp[0].wellcome[0].bemvindo1 = true
updateGroup(dataGp)
reply('Ativou com sucesso o recurso de bem vindo neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isWelkom) return reply('O recuso de boas vindas já está desativado neste grupo.')
dataGp[0].wellcome[0].bemvindo1 = false
updateGroup(dataGp)
reply('Desativou com sucesso o recurso de bemvindo neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'bemvindo2':  
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix + command} 1 para ativar `)
if(Number(args[0]) === 1) {
if(isWelkom2) return reply('O recurso já está ativado no grupo.')
dataGp[0].wellcome[1].bemvindo2 = true
updateGroup(dataGp)
reply('O recurso foi ativado.')
} else if(Number(args[0]) === 0) {
if(!isWelkom2) return reply('O recurso não está ativado no grupo.')
dataGp[0].wellcome[1].bemvindo2 = false
updateGroup(dataGp)
reply('O recurso foi desativado.')
} else {
reply(`Digite da forma correta, ${prefix + command} 1, para ativar e 0 para desativar`)
}
break

case 'legendabv':  
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(args.length < 1) return reply('*Escreva a mensagem de boas-vindas*')
teks = body.slice(11)
if(isWelkom) {
dataGp[0].wellcome[0].legendabv = teks
updateGroup(dataGp)
reply('*Mensagem de boas vindas definida com sucesso!*')
} else {
reply(`Ative o ${prefix}bemvindo 1`)
}
break

case 'legendabv2':  
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(args.length < 1) return reply('*Escreva a mensagem de boas-vindas*')
teks = body.slice(12)
if(isWelkom2) {
dataGp[0].wellcome[1].legendabv = teks
updateGroup(dataGp)
reply('*Mensagem de boas vindas2 definida com sucesso!*')
} else {
reply(`Ative o ${prefix}bemvindo2 1`)
}
break

case 'legendasaiu':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(args.length < 1) return reply("Escreva a mensagem de saída ou para desativar, use: 0")
teks = body.slice(13)
if(isWelkom) {
dataGp[0].wellcome[0].legendasaiu = Number(teks) === 0 ? 0 : teks
updateGroup(dataGp)
reply('Mensagem de saída do bemvindo foi definida com sucesso!')
} else {
reply(`Ative o ${prefix}bemvindo para o recurso de edição de mensagem.`)
}
break

case 'legendasaiu2':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(q.length < 1) return reply('Escreva a mensagem de saída ou para desativar, use: 0')
if(isWelkom2) {
dataGp[0].wellcome[1].legendasaiu = Number(teks) === 0 ? 0 : q
updateGroup(dataGp)
reply('Mensagem de saída do bemvindo2 foi definida com sucesso!')
} else {
reply(`Ative o ${prefix}bemvindo2 para o recurso de edição de mensagem.`)
}
break

case 'legenda_estrangeiro':
case 'legenda_estrangeiros': 
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(args.length < 1) return reply('*Escreva a mensagem de remoção de estrangeiros*')
if(isAntifake) {
dataGp[0].antifake.message = q
updateGroup(dataGp)
reply('*Mensagem de remoção de estrangeiros definida com sucesso!*')
} else {
reply(`Ative o antifake primeiro para definir uma legenda, com: ${prefix}antifake 1`)
}
break

case 'legenda_video': 
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(args.length < 1) return reply('*Escreva a mensagem de remoção no antivideo*')
if(isAntiVid) {
dataGp[0].antivideo.message = q
updateGroup(dataGp)
reply('*Mensagem de remoção de video definida com sucesso!*')
} else {
reply(`Ative o antivideo primeiro para definir uma legenda, com: ${prefix}antivideo`)
}
break

case 'legenda_imagem': 
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(args.length < 1) return reply('*Escreva a mensagem de remoção no antiimg*')
if(isAntiImg) {
dataGp[0].antiimg.message = q
updateGroup(dataGp)
reply('*Mensagem de remoção de imagem definida com sucesso!*')
} else {
reply(`Ative o anti-imagem primeiro para definir uma legenda, com: ${prefix}antiimg`)
}
break

case 'legenda_documento': 
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(args.length < 1) return reply('*Escreva a mensagem de remoção no antidoc*')
if(Antidoc) {
dataGp[0].antidoc.message = q
updateGroup(dataGp)
reply('*Mensagem de remoção de documento definida com sucesso!*')
} else {
reply(`Ative o antidoc primeiro para definir uma legenda, com: ${prefix}antidoc 1`)
}
break

case 'addautorm':
case 'addautoban':
case 'listanegra':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins && !SoDono) return reply('Para usar este comando, você deve ser dono ou administrador do grupo.')
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
if(!mrc_ou_numero) return reply("Marque a mensagem do usuário com o comando ou utilize o comando com o número do usuário que deseja adicionar na lista negra..")
if(dataGp[0].listanegra.includes(mrc_ou_numero)) return reply('*Esse Número ja esta incluso*')
dataGp[0].listanegra.push(mrc_ou_numero)
updateGroup(dataGp)
reply(`*Número adicionado a lista de autoban*`)
break

case 'autobang':
case 'listanegrag':
if(!SoDono) return reply(mess.onlyOwner())
if(!mrc_ou_numero) return reply("Marque a mensagem do usuário com o comando ou utilize o comando com o número do usuário que deseja adicionar na lista negra Global..")
if(listanegraG.includes(mrc_ou_numero)) return reply('*Esse Número ja esta incluso*')
listanegraG.push(mrc_ou_numero)
fs.writeFileSync('./settings/definitions.json', JSON.stringify(definitions, null, 2))
reply(`*Número adicionado a lista de autoban*`)
break

case 'tirardalistag':
if(!SoDono) return reply(mess.onlyOwner())
if(!mrc_ou_numero) return reply("Marque a mensagem do usuário com o comando ou utilize o comando com o número do usuário que deseja tirar da lista negra..")
if(!listanegraG.includes(mrc_ou_numero)) return reply('*Esse Número não esta incluso*')
var i = listanegraG.indexOf(mrc_ou_numero)
listanegraG.splice(i, 1)
fs.writeFileSync('./settings/definitions.json', JSON.stringify(definitions, null, 2))
reply(`*Número foi removido da lista negra*`)
break

case 'delremover':
case 'delautorm':  
case 'delautoban': 
case 'tirardalista':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(!mrc_ou_numero) return reply("Marque a mensagem do usuário com o comando ou utilize o comando com o número do usuário que deseja tirar da lista negra..")
if(!dataGp[0].listanegra.includes(mrc_ou_numero)) return reply('*Esse Número não esta incluso*')
var i = dataGp[0].listanegra.indexOf(mrc_ou_numero)
dataGp[0].listanegra.splice(i, 1)
updateGroup(dataGp)
reply(`*Número foi removido da lista de autoban*`)
break

case 'del_allowed': case 'remlistabranca':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(!menc_os2) return reply("Marque a mensagem do usuário ou utilize o comando usando o @ do usuário, após o comando.");
if(!dataGp[0].allowedParticipant.usus.includes(menc_os2)) return reply('Este número não está incluso!')
var i = dataGp[0].allowedParticipant.usus.indexOf(menc_os2)
dataGp[0].allowedParticipant.usus.splice(i, 1)
await updateGroup(dataGp);
await mention(`@${menc_os2.split("@")[0]} foi removido com sucesso à lista branca.`);
break

case 'add_allowed': case 'addlistabranca':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins && !SoDono) return reply('Para usar este comando, você deve ser dono ou administrador(a) do grupo.');
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
if(!menc_os2) return reply("Marque a mensagem do usuário ou utilize o comando usando o @ do usuário, após o comando.");
if(dataGp[0].allowedParticipant.usus.includes(menc_os2)) return reply('Este número já está incluso!')
dataGp[0].allowedParticipant.usus.push(menc_os2)
await updateGroup(dataGp);
await mention(`@${menc_os2.split("@")[0]} foi adicionado com sucesso à lista branca.`);
break

case 'listabranca':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(dataGp[0].allowedParticipant.usus.length < 1) return reply(`Nenhum número foi adicionado à lista! Para adicionar ou remover, use os comandos: ${prefix}addlistabranca, ${prefix}remlistabranca`);
teks = `– Lista Branca *[Usuários Permitidos]*\n• Os usuários(as) abaixo estão permitidos de enviar links e as demais mídias que são proibidas, ou seja, tudo que for ativado sendo antis e as demais proteções, este usuário estará imune à minhas punições`;
teks += `\n—\n${dataGp[0].allowedParticipant.usus.map(a => `@${a.split("@")[0]}`).join(" ")}`;
await mention(teks)
break

case 'listban':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(dataGp[0].listanegra.length < 1) return reply('*Nenhum Número não foi adicionado*')
teks = '*Números que vou moer na porrada se voltar:*\n'
for(i=0;i<dataGp[0].listanegra.length;++i) {teks += `➤ *${dataGp[0].listanegra[i].split('@')[0]}*\n`}
teks += '*Esses ai vou descer meu martelo do ban.*'
reply(teks)
break

case 'mute': case 'mutar':
if(!isGroup) return reply(mess.onlyGroup());
if(!isGroupAdmins) return reply(mess.onlyAdmins());
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
if(!menc_os2) return reply(`🎯 Por favor, mencione o usuário ou marque a mensagem do alvo que você deseja mutar.`);
if(menc_os2 == botNumber) return reply("❌️️ Não é possível mutar o bot! Você é louco?");
if(menc_os2 == nmrdn) return reply("Quem você pensa que é, para mutar meu proprietário(a)?");
if(premium.map(i => i.id).includes(menc_os2)) return reply("❌️️ Não é possível mutar usuários que contém premium no bot!");
if(groupAdmins.includes(menc_os2)) return reply("❌️ Não é possível mutar um(a) adminstrador(a) do grupo.");
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("❌ ️Não é possível mutar uma pessoa que atualmente não participa mais deste grupo.");
if(muted[muted.map(i => i.grupo).indexOf(from)].usus.includes(menc_os2)) return mention(`O participante: '@${menc_os2.split("@")[0]}' já está na lista de mutados, para desmutar o usuário, use: ${prefix}desmute.`);
//// ADICIONA O USUÁRIO À LISTA:
mention(`O participante '@${menc_os2.split("@")[0]}' foi mutado pelo administrador: '@${sender.split("@")[0]}'. Se ele(a) falar alguma coisa, será removido do grupo!`);
muted[muted.map(i => i.grupo).indexOf(from)].usus.push(menc_os2)
fs.writeFileSync("./arquivos/database/groups/muted.json", JSON.stringify(muted, null, 2));
break

case 'desmute': case 'desmutar':
if(!isGroup) return reply(mess.onlyGroup());
if(!isGroupAdmins) return reply(mess.onlyAdmins());
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
if(!menc_os2) return reply(`🎯 Por favor, mencione o usuário ou marque a mensagem do alvo que você deseja desmutar.`);
if(!muted[muted.map(i => i.grupo).indexOf(from)].usus.includes(menc_os2)) return mention(`O participante: '@${menc_os2.split("@")[0]}' não está na lista de mutados do grupo.`);
//// REMOVE O USUÁRIO DA LISTA:
mention(`O participante '@${menc_os2.split("@")[0]}' foi desmutado com sucesso pelo adminstrador(a): '@${sender.split("@")[0]}'.`);
muted[muted.map(i => i.grupo).indexOf(from)].usus.splice(menc_os2);
fs.writeFileSync("./arquivos/database/func/users/muted.json", JSON.stringify(muted, null, 2));
break 

case 'mutelist': case 'listamutados':
if(muted[muted.map(i => i.grupo).indexOf(from)].usus.length == 0) return reply(`Não existe nenhum usuário mutado neste grupo.`);
usus__ = `[Total: *${muted[muted.map(i => i.grupo).indexOf(from)].usus.length}*] - Lista de participantes mutados no grupo:\n–\n`;
usus__ += muted[muted.map(i => i.grupo).indexOf(from)].usus.map((v, index) =>  `• *[${index+1}]* - @${v.split('@')[0]}`).join('\n');
await mention(usus__);
break

case 'roletarussa':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
TAMBOR = ["na perna.","na cabeça.","no pescoço.","no peito.","no olho.","no estômago.","na boca.","na perna.","na testa.","no braço."]
C2 = somembros[Math.floor(Math.random() * somembros.length)]
if(somembros.length == 0) return reply("Não existe *membros comuns* no grupo, somente admins.")
if(C2 === sender || C2 === botNumber) return mentions(`Escolhi *@${C2.split('@')[0]}*, mas conseguiu escapar...`, [C2], true)
if(C2 === sender || C2 === numerodonos[0]) return mentions(`Escolhi *@${C2.split('@')[0]}*, mas conseguiu escapar...`, [C2], true)		
reply(`A escolha é minha! 1 membro irá morrer, que os jogos comecem...`)
setTimeout(async() => { 
await mentions(`Que pena... você não sobreviveu ao meu jogo *@${C2.split('@')[0]}*, hora de enterrar o cadáver, infelizmente morreu com tiro ${TAMBOR[Math.floor(Math.random() * (TAMBOR.length))]}`, [C2], true) 
}, 5000)	 
setTimeout(async() => {
await yurizin.groupParticipantsUpdate(from, [C2], "remove")
}, 6000)
break

case 'totext': case 'transcrever':
if(!isQuotedAudio) return reply("Você esqueceu de atribuir o áudio à mensagem! Mencione o áudio que você deseja transcrever para texto.");
if(info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage["seconds"] > 1200) return reply("Você excedeu o limite do tamanho do áudio que eu posso transcrever! Envie um áudio com menos de 20 minutos para a transcrição ocorrer bem sucedida.");
try {
startReq = Date.now() /* Marcar o início da requisição para calcular o PING! */
let getBufferAudio = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage, 'audio')
let { key } = await yurizin.sendMessage(from, {text: `⏱️ Transcrevendo o áudio...`}, {quoted: info});
fileName = crypto.randomBytes(10).toString('hex');
fs.writeFileSync(`./arquivos/database/assets/audio/tmp/${fileName}.mp3`, getBufferAudio);
client = new AssemblyAI({apiKey: "41201d7fa5654110b991a2c4fb010729"});
data = await client.transcripts.create({audio_url: `./arquivos/database/assets/audio/tmp/${fileName}.mp3`, language_code: "pt"});
if (data.status === 'error') return await yurizin.sendMessage(from, {text: "Encontrei um possível erro ao realizar a transcrição do áudio, o que será? Tente outro áudio se encaminhar a mesma mensagem que essa, entre em contato com suporte técnico.", edit: key});
if (data.words.length == 0) return await yurizin.sendMessage(from, {text: "Não encontrei nenhuma voz para transcrever, será que ouve um bug na gravação ou um erro interno em minhas configurações?", edit: key});
endReq = Date.now() /* Marcar o fim da requisição para calcular o PING! */
console.log(JSON.stringify(data, null, 2));
await yurizin.sendMessage(from, {text: `✅️ Sucesso na transcrição do áudio! Confira as informações e o texto.\n• Observação: _Às vezes, não é possível entender o áudio completo, então a transcrição pode ficar incompleta ou com palavras fora do conteúdo do áudio. Desde já, agradeço a compreensão!_\n—\n• Tempo de resposta → _${((endReq - startReq) / 1000).toFixed(3)}s_\n• Modelo IA → _${data?.language_model}_\n• Duração do Áudio → _${data?.audio_duration}s_\n—\n✏️ Transcrição → _${data.text}_`, edit: key});
await DLT_FL(`./arquivos/database/assets/audio/tmp/${fileName}.mp3`) /* Deletar a mídia */
} catch(error) {
reply(error)
}
break

case 'wikipedia': case 'wiki':
try {
if(!q) return reply(`Exemplo: ${prefix+command} JavaScript`)
reply(`Aguarde, pesquisando sobre o que está perguntando..`)
wikip = await axios.get(`https://pt.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${encodeURIComponent(q)}&prop=info&inprop=url`);
wikis = await axios.get(`https://pt.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&pageids=${wikip.data.query.search[0].pageid}`);
reply(mess.wikiResposta(wikis))
} catch(error) {
reply(mess.error())
}
break

case 'nasa':
try {
if (!q) return reply(`*Exemplo:* ${prefix}${command} 19-10-2007`)
apodResult = await fetchJson(API_URL+`/api/pesquisa/nasa_apod?data=${q}&apikey=`+API_KEY_YURI)
resultExp = await fetchJson(API_URL+`/api/outros/translate?text=${apodResult.nasa.explanation?.replaceAll("A new APOD RSS feed is available here, or from the link line below.", "")?.trim()}&language=pt&apikey=`+API_KEY_YURI);
await yurizin.sendMessage(from, {image: {url: apodResult.nasa.hdurl }, caption: mess.result_APOD(apodResult, resultExp)}, {quoted: selo});
} catch(error) {
return await reply(mess.error(), {reagir: "❌"});
}
break

case 'flagpedia':
if(!q) return await reply(`Por favor, coloque após o comando o nome do País que você deseja obter informações da bandeira, informações geográficas e entre outros...\nEx.: *${prefix}flagpedia Estados Unidos*`, {reagir: "❌"});
try {
data = await fetchJson(API_URL + `/api/pesquisa/flagpedia?query=${q}&apikey=` + API_KEY_YURI);
await yurizin.sendMessage(from, {image: {url: data.resultado?.image_url}, caption: mess.flagpedia(data) }, {quoted: selo})
} catch(error) {
return await reply(mess.error(), {reagir: "❌"});
}
break

case 'clima':
if (args.length == 0) return reply(`*Exemplo:* ${prefix}Clima Maceió`)
try {
const wttrin = (await axios.get(`https://pt.wttr.in/${encodeURIComponent(q)}?format=j1`)).data;
var wttrImage = await getBuffer(`https://wttr.in/${encodeURIComponent(q)}.png`);
await yurizin.sendMessage(from, {text: mess.clima(wttrin)}, {quoted: selo});
} catch(error) {
reply(mess.error())
}
break

case 'simi':
if(!isGroup) return reply(mess.onlyGroup())
try {
datasimi = await fetchJson(`https://api.simsimi.vn/v1/simtalk`, {
  method: 'POST', 
  headers: {
    'content-type': "application/x-www-form-urlencoded"
  }, 
  body: "text=" + q?.trim() + "&lc=pt"
});
await reply(datasimi.message);
} catch (e) {
await reply("Resposta não encontrada..");
}
break

case 'simih':
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(args.length < 1) return reply(`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix+command} 1, caso seja desativar e só trocar o 1 pelo 0.`)
if(Number(args[0]) === 1) {
if(isSimi) return reply('O modo simih já se encontra ativo neste grupo.')
dataGp[0].simi1 = true
updateGroup(dataGp)
reply('Ativado com sucesso o modo simi neste grupo..')
} else if(Number(args[0]) === 0) {
if(!isSimi) return reply('O modo simih já se encontra desativado neste grupo.')
dataGp[0].simi1 = false
updateGroup(dataGp)
reply('Desativando o modo simi com sucesso neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar.')
}
break

case 'simih2':
if(!isGroupAdmins) return reply(mess.onlyAdmins());
if(args.length < 1) return reply(`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix+command} 1, caso seja desativar e só trocar o 1 pelo 0.`);
if(Number(args[0]) === 1) {
if(isSimi2) return reply('O modo simi2 está ativo')
dataGp[0].simi2 = true
await updateGroup(dataGp)
await reply('Ativado com sucesso o modo simi 2 neste grupo...')
} else if(Number(args[0]) === 0) {
if(!isSimi2) return reply('O modo simi2 está desativado.');
dataGp[0].simi2 = false;
await updateGroup(dataGp);
await reply('Desativando o modo simi com sucesso neste grupo.️');
} else {
reply('1 para ativar, 0 para desativar, lerdao vc emkkkk')
}
break

case 'autofigu': case 'autosticker':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(args.length < 1) return reply(`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix+command} 1, caso seja desativar e só trocar o 1 pelo 0.`)
if(Number(args[0]) === 1) {
if(isAutofigu) return reply('O recurso de criar stickers forma automática já se encontra ativo neste grupo senhor(a).') 
dataGp[0].autosticker.status = true
updateGroup(dataGp)
reply('Ativou com sucesso o recurso de auto figurinhas neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isAutofigu) return reply('O recurso de criar stickers forma automática já se encontra desativado neste grupo senhor(a).')
dataGp[0].autosticker.status = false
updateGroup(dataGp)
reply('Desativou com sucesso o recurso de auto figurinhas neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'autorepo':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(args.length < 1) return reply(`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix+command} 1, caso seja desativar e só trocar o 1 pelo 0.`)
if(Number(args[0]) === 1) {
if(isAutorepo) return reply('O modo auto resposta já se encontra ativo no grupo.')
dataGp[0].autoresposta = true
updateGroup(dataGp)
reply('Ativou com sucesso o recurso de auto resposta neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isAutorepo) return reply('O modo auto resposta já esta desativado no grupo.');
dataGp[0].autoresposta = false
updateGroup(dataGp)
reply('Desativou com sucesso o recurso de auto resposta neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'modobrincadeira':
case 'modobrincadeiras':  
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(args.length < 1) return reply(`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix+command} 1, caso seja desativar e só trocar o 1 pelo 0.`)
if(Number(args[0]) === 1) {
if(isModobn) return reply('O modo brincadeira já está ativo.')
dataGp[0].jogos = true
updateGroup(dataGp)
reply('Ativou com sucesso o recurso de Modo brincadeira neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isModobn) return reply('O modo brincadeira já está desativado.')
dataGp[0].jogos = false
updateGroup(dataGp)
reply('Desativou com sucesso o recurso de Modo brincadeira neste grupo.')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'leveling':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(args.length < 1) return reply(`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix+command} 1, caso seja desativar e só trocar o 1 pelo 0.`)
if(Number(args[0]) === 1) {
if(isLevelingOn) return reply('O recurso de nível já estava ativo antes nesse grupo.')
dataGp[0].level = true
updateGroup(dataGp)
reply('Leveling ativado com sucesso.') 
} else if(Number(args[0]) === 0) {
if(!isLevelingOn) return reply(`O recurso de level já está desativado neste grupo.`)
dataGp[0].level = false
updateGroup(dataGp)
reply('Leveling desativado com sucesso.')
} else {
reply('Adicionar parâmetro 1 ou 0 ao lado do comando por favor senhor(a)!')
}
break

case 'bangp':
case 'unbangp':
if(!isGroup) return reply(mess.onlyGroup())
if(!SoDono) return reply(mess.onlyOwner())
if(command == 'bangp'){
if(isBanchat) return reply(`Este grupo já está banido.`)
dataGp[0].bangp = true
updateGroup(dataGp)
reply(`Grupo banido com sucesso.`)
} else {
if(!isBanchat) return reply(`Este grupo não está mais banido.`)
dataGp[0].bangp = false
updateGroup(dataGp)
reply(`Grupo desbanido...`)
}
break

case 'boton':
case 'botoff':
if(!SoDono) return reply(mess.onlyOwner())
if(!isBotoff) {
definitions.botOffline = true
fs.writeFileSync('./settings/definitions.json', JSON.stringify(definitions, null, 2))
reply('Desativando funções e parando a execução de comandos por membros com sucesso...')
} else if(isBotoff) {
definitions.botOffline = false
fs.writeFileSync('./settings/definitions.json', JSON.stringify(definitions, null, 2))
reply(`Ativando todos os funcionamentos do bot novamente...`)
}
break

case 'antipalavrão':
case 'antipalavrao':  
case 'antipalavra':    
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(args.length < 1) return reply(`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix+command} 1, caso seja desativar e só trocar o 1 pelo 0.`)
if(Number(args[0]) === 1) {
if(isPalavrao) return reply('O recurso de anti palavrões hardcore já se encontra ativo atualmente no grupo senhor(a)!')
dataGp[0].antipalavrao.active = true
updateGroup(dataGp)
reply('Ativou com sucesso o recurso de anti palavras hardcore neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isPalavrao) return reply('O recurso de anti palavrões hardcore já se encontra desativado atualmente no grupo senhor(a)!')
dataGp[0].antipalavrao.active = false
updateGroup(dataGp)
reply('Desativou com sucesso o recurso de anti palavra harcore neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'addpalavra':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isPalavrao) return reply('Anti palavrão desativado!')
if(args.length < 1) return reply(`Use assim: ${prefix + command} [palavrão]. Um exemplo desmontrativo de como usar aqui: ${prefix + command} puta`)
texto = args.join(' ').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
if(isPalavras.includes(texto)) return reply('A palavra já foi adicionada na lista de proibições. do anti palavra, verifique...')
dataGp[0].antipalavrao.palavras.push(texto)
updateGroup(dataGp)
reply(`Palavrão adicionado com sucesso! Consulte a lista, usando: ${prefix+command}`)
break

case 'delpalavra':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isPalavrao) return reply('Anti palavrão desativado!')
if(args.length < 1) return reply(`Use assim: ${prefix + command} [palavrão]. Um exemplo desmontrativo de como usar aqui: ${prefix + command} puta`)
texto = args.join(' ').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
if(!isPalavras.includes(texto)) return reply('A palavra já foi removida ou nunca esteve na lista de proibições do recurso...')
var i = dataGp[0].antipalavrao.palavras.indexOf(texto)
dataGp[0].antipalavrao.palavras.splice(i, 1)
updateGroup(dataGp)
reply(`Palavrão removido com sucesso da lista. Para verificar se foi removido mesmo, use o comando: ${prefix+command}`)
break

case 'listapalavrão': case 'listapalavra': case 'listpalavra':
if(!isPalavrao) return reply('Anti palavrão desativado!')
if(isPalavras.length < 0) return reply(`Não existe nenhum palavra proibida na lista.`)
reply(`• [Total: *${isPalavras.length}*] - Lista de palavrões adicionados no grupo:\n–\n${isPalavras.map((v, index) => `*${index+1}.* ➸  ${v}`).join('\n')}`)
break

case 'limitecaracteres':
case 'limiteflood':  
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(args.length < 1) return reply(`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix+command} 1, caso seja desativar e só trocar o 1 pelo 0.`)
if(Number(args[0]) === 1) {
if(isAntiFlood) return reply(`O recurso limite de caracteres já está ativo no grupo.`)
dataGp[0].limitec.active = true
updateGroup(dataGp)
reply(`O recurso limite de caracteres foi ativado nesse grupo.`)
} else if(Number(args[0]) === 0) {
if(!isAntiFlood) return reply('O recurso limite de caracteres não está ativado no grupo.')
dataGp[0].limitec.active = false
updateGroup(dataGp)
reply('O recurso limite de caracteres foi desativado nesse grupo.️')
} else {
reply(`Digite ${prefix + command} 1 para ativar, 0 para desativar o recurso`)
}
break

case 'limitec_global':
case 'limitec':
if(!SoDono && !isnit && !ischyt) return reply(mess.onlyOwner())
if(!isAntiFlood) return reply(`Ative este recurso primeiro ${prefix}limiteflood 1`)
if(!q) return reply(`Cade a quantidade? Ex: ${prefix + command} 5000`)
if(isNaN(q) == true) return reply('Digite apenas números.')
if(command == 'limitec'){
dataGp[0].limitec.quantidade = q
updateGroup(dataGp)
reply(`Foi alterado o limite de caracteres para: ${q}`)
} else {
fs.writeFileSync('./arquivos/database/func/users/flood.json', JSON.stringify({limitefl: q}, null, '\t'))
await reply(`Foi adicionado um limite global de caracteres de: ${q}`)
}
break

case 'status':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins && !SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(mess.onlyAdmins())
reply(mess.statusBot(isAnticall, isAntiPv, isAntiPv2, isAntiPv3, isAntiImg, isAntiVid, isAntiAudio, isAntiSticker, isAntiDDD, Antidoc, isAntiCtt, Antiloc, isAntilinkgp, isAntiLinkHard, isAntifake, isAntiNotas, isAnticatalogo, isPalavrao, isAntiFlood, isWelkom, isWelkom2, isSimi, isAutofigu, isAutorepo, isModobn, isModoAluguel, isLevelingOn))
break

case 'reiniciar':
if(!SoDono) return reply(mess.onlyOwner())
reply("Reiniciando o sistema, em segundos já estarei de volta senhor(a) as suas ordens!")
setTimeout(async() => {process.exit()}, 1200)
break

case 'novoqr':
if(!SoDono) return reply(mess.onlyOwner());
reply("Será apagado o qrcode, e irá gerar um novo, fique atento no terminal para ler novamente..");
setTimeout(async() => {fs.rmdirSync(qrcode, {recursive: true})}, 1500);
break

case 'semoji': 
if(!q) return reply('Por favor, coloque um emoji após o comando, por exemplo: 💰');
try {
data = await fetchJson(API_URL + `/api/pesquisa/emojigraph?emoji=${q}&apikey=` + API_KEY_YURI);
await yurizin.sendMessage(from, {image: {url: data.resultado?.platforms[0].media}, caption: mess.emojiGraph(data)}, {quoted: info});
} catch(error) {
return await reply(mess.error(), {reagir: "❌"});
}
break

case 'emoji-mix':
case 'emojimix':
txt = q.replace(" +", "+").replace("+ ", "+").replace(" + ", "+")
var [emj1, emj2] = txt.split("+")
if(!q.includes("+")) return reply(`• Você está usando o comando de forma errada.\n→ Exemplo (Sintaxe de Uso):\n\t• ${prefix+capitalizeFirstLetter(command)} *Emoji 1 + Emoji 2*\n→ Demonstração de Uso:\n\t• ${prefix+capitalizeFirstLetter(command)} *😅 + 😍*\n→ Observação:\n\t• Lembre-se que alguns emojis não é possível criar um mix entre eles, então quando retornar a mensagem de erro às vezes, pode ser que o MIX não foi criado por motivo que não teve combinação entre eles.\n\t• Não use emojis de paisagens ou objetos, pois irá ocorrer erro.\n> ${NomeDoBot}`);
try {
await sendStickerFromUrl(from, API_URL+`/api/outros/emojimix?emoji1=${encodeURI(emj1)}&emoji2=${encodeURI(emj2)}&apikey=`+API_KEY_YURI);
} catch(error) {
await reply(mess.error())
}
break

case 'duelo':
if (!isGroup) return reply('O comando só pode ser usado em Grupos.')
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if (q.length === 0) return reply(`Modo de usar...\n\n${prefix}duelo @tag/@tag2/1 (1 = 1 Minuto)`)
txt = args.join(' ')
nmr = txt.split('/')[0].replace('@' ,  '').replace(' ', '').replace(' ', '').replace(' ', '')
nmr2 = txt.split('/')[1].replace('@' ,  '').replace(' ', '').replace(' ', '').replace(' ', '')
pergunta = 'Qual dos dois duelou melhor ou deu as melhores respostas?'
tempo = txt.split('/')[2]
if(!Number(tempo)) return reply('Ops, insira os minutos\n\n1 = 1 Minuto')
await mentions(`⚔️*Duelo de Stickers*⚔️\n\n@${nmr}  Vs  @${nmr2}\n\nPergunta:  ${pergunta}\n\nDigite:  um = Para votar em:  @${nmr}\nDigite:  dois = Para votar em:  @${nmr2}\n\n⚠️ *Atenção*: só é permitido votar 1 única vez, portanto preste atenção em quem vai votar, pois não é possível alterar o voto.\n\n❗ _Não vote por afinidade, vote pela qualidade das respostas, assim você ajuda a melhorar a qualidade dos duelos..._`, [nmr+'@s.whatsapp.net', nmr2+'@s.whatsapp.net'], true);
addVotoDuelo(from , pergunta , nmr , nmr2 , tempo , reply)
break

case 'ssf': case 'sfundo': // © Yuri Modz 
try {
if((isMedia && !info.message.videoMessage || isQuotedImage) && !q.length <= 1) {  
var propertyMessage  = info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.imageMessage || info.message?.imageMessage || info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.viewOnceMessage?.message?.imageMessage;
await reply('*-* Removendo o fundo da imagem e transformando em Sticker...', {reagir: "✅"});
owgi = await getFileBuffer(propertyMessage, 'image');
var sticker = new Sticker(); // Sticker
resultadoFundo = await RemoverFundo(owgi)
sticker.addFile(resultadoFundo.resultado); 
sticker.options.metadata = {author: `📌 Criado(a) por: ${NomeDoBot}`, emojis: ['🤠', '🥶', '😻']};
resultadoSt = await sticker.start();
await yurizin.sendMessage(from, {sticker: fs.readFileSync(resultadoSt[0].value)}, {quoted: info})
setTimeout(async() => { await reagir(from, "✅️"); await fs.unlinkSync(resultadoSt[0].value) }, 20);
} else {
return await reply("*‐* Responda uma imagem ou adicione na legenda da imagem o comando, lembre-se, o efeito de remoção de fundo só funciona em imagens.", {reagir: "😾"});
}
} catch(error) {
await reply(mess.error(), {reagir: "❌"});
}
break

case 'qc':
if(!q) return reply('Insira o texto ou responda o texto que você deseja citar.', {reagir: "❌"});
if (q.length > 30) return await reply('Você atingiu ou passou do limite de caracteres, _a quantidade máxima de caracteres é 30 por citação._', {reagir: "❌"});
try {
await reply(mess.wait(), {reagir: "✅️"});
var randomColor = ['#FFFFFF', "#000000"];
var color = randomColor[Math.floor(Math.random() * randomColor.length)];
var pp = await yurizin.profilePictureUrl(sender, 'image').catch(_ => images['defaultProfile'].value);
var json = await axios.post('https://btzqc.betabotz.eu.org/generate', {"type": "quote", "format": "png", "backgroundColor": color, "width": 512, "height": 768, "scale": 2, "messages": [{"entities": [], "avatar": true, "from": {"id": 1, "name": pushname, "photo": {"url": pp}}, "text": q, "replyMessage": {}}]}, {headers: {'Content-Type': 'application/json'}});
var buffer = Buffer.from(json.data.result.image, 'base64');   
var sticker = new Sticker(); // Sticker
sticker.addFile(buffer); 
sticker.options.metadata = {author: `📌 Criado(a) por: ${NomeDoBot}`, emojis: ['🤠', '🥶', '😻']};
var resultadoSt = await sticker.start();
await yurizin.sendMessage(from, {sticker: fs.readFileSync(resultadoSt[0].value)}, {quoted: info})
setTimeout(async() => { await reagir(from, "✅️"); await fs.unlinkSync(resultadoSt[0].value) }, 20);
} catch(error) {
  return reply(error, {reagir: "❌"});
}
break

case 'brat':
if(!q) return reply('Você esqueceu de colocar um texto após o comando.', {reagir: "❌"});
try {
await reply(mess.wait(), {reagir: "✅️"});
var sticker = new Sticker(); // Sticker
data = await getBuffer(`https://brat.caliphdev.com/api/brat?text=${encodeURIComponent(q)}`);
sticker.addFile(data); 
sticker.options.metadata = {author: `📌 Criado(a) por: ${NomeDoBot}`, emojis: ['🤠', '🥶', '😻']};
resultadoSt = await sticker.start();
await yurizin.sendMessage(from, {sticker: fs.readFileSync(resultadoSt[0].value)}, {quoted: info})
setTimeout(async() => { await reagir(from, "✅️"); await fs.unlinkSync(resultadoSt[0].value) }, 20);
} catch(error) {
  return reply(mess.error(), {reagir: "❌"});
}
break

case 'bratvideo':
if (!q) return await reply(`Exemplo: ${prefix + command} Hello world`, {reagir: "😑"});
if (q > 250) return await reply(`Limite de caracteres excedido, máximo 250!`);
let words = q.split(" ");
let tempDir = path.join(process.cwd(), 'temp');
if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir);
let framePaths = [];
try {
  for (let i = 0; i < words.length; i++) {
    currentText = words.slice(0, i + 1).join(" ");
    resBuffer = await getBuffer(`https://brat.caliphdev.com/api/brat?text=${encodeURIComponent(currentText)}`);
    framePath = path.join(tempDir, `frame${i}.mp4`);
    fs.writeFileSync(framePath, resBuffer);
    framePaths.push(framePath);
  }
  fileListPath = path.join(tempDir, "filelist.txt");
  fileListContent = "";
  for (let i = 0; i < framePaths.length; i++) {
    fileListContent += `file '${framePaths[i]}'\n`;
    fileListContent += `duration 0.7\n`;
  }
  fileListContent += `file '${framePaths[framePaths.length - 1]}'\n`;
  fileListContent += `duration 2\n`;
  fs.writeFileSync(fileListPath, fileListContent);
  const outputVideoPath = path.join(tempDir, "output.mp4");
  execSync(`ffmpeg -y -f concat -safe 0 -i ${fileListPath} -vf "fps=30" -c:v libx264 -preset ultrafast -pix_fmt yuv420p ${outputVideoPath}`);
  var sticker = new Sticker(); // Sticker
  sticker.addFile(outputVideoPath);
  sticker.options.metadata = {author: `📌 Criado(a) por: ${NomeDoBot}`, emojis: ['🤠', '🥶', '😻']};
  resultadoSt = await sticker.start();
  await yurizin.sendMessage(from, {sticker: fs.readFileSync(resultadoSt[0].value)}, {quoted: info})
  setTimeout(async() => {
    await reagir(from, "✅️"); 
    await fs.unlinkSync(resultadoSt[0].value);
    framePaths.forEach((frame) => {
      if (fs.existsSync(frame)) fs.unlinkSync(frame);
    });
    if (fs.existsSync(fileListPath)) fs.unlinkSync(fileListPath);
    if (fs.existsSync(outputVideoPath)) fs.unlinkSync(outputVideoPath);
  }, 20);
} catch(error) {
  return reply(error);
}
break

case 'snome': case 'rename': case 'swm':
if(!isQuotedSticker) return await reply(`Responda um *STICKER* com *${prefix+command}* pack/autor - Renomeia o nome do pack e do autor do sticker.`, {reagir: "😾"});
try {
let [pack, autor] = q.split('/');
if(!pack || !autor) return await reply(`Responda um *STICKER* com *${prefix+command}* pack/autor - Renomeia o nome do pack e do autor do sticker.`, {reagir: "❌"})
zzbuffer = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker');
var sticker = new Sticker(); // Sticker
sticker.addFile(zzbuffer); 
sticker.options.metadata = {pack: pack, author: autor, emojis: ['🤠', '🥶', '😻']};
resultadoSt = await sticker.start();
await yurizin.sendMessage(from, {sticker: fs.readFileSync(resultadoSt[0].value)}, {quoted: info})
setTimeout(async() => { await reagir(from, "✅️"); await fs.unlinkSync(resultadoSt[0].value) }, 20);
} catch(error) {
await reply(error, {reagir: "❌"});
}
break

case 'st': case 'stk': case 'sticker': case 's':
var auc = info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.imageMessage || info.message?.imageMessage || info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.viewOnceMessage?.message?.imageMessage;
var aoc = info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.videoMessage || info.message?.videoMessage || info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.viewOnceMessage?.message?.videoMessage;
if(auc && args.length == 0) {
var fileBuffer = await getFileBuffer(auc, 'image');
var sticker = new Sticker(); // Sticker
sticker.addFile(fileBuffer); 
sticker.options.metadata = {
    pack: config["stickerPack"].value, 
    author: config["stickerAuthor"].value. replaceAll("{user}", pushname). replaceAll("{botname}", NomeDoBot).replaceAll("{time}", `${dattofc} ${hourofc}`), 
    emojis: ['🤠', '🥶', '😻']
};
await sticker.start().then(async(data) => {
 await yurizin.sendMessage(from, {sticker: fs.readFileSync(data[0].value)}, {quoted: info})
setTimeout(async() => { await reagir(from, "✅️"); await fs.unlinkSync(data[0].value) }, 20);
}).catch(async(error) => reply(String(error)));
} else if(aoc && aoc.seconds < 20) {
var sticker = new Sticker(); // Sticker
var fileBuffer = await getFileBuffer(aoc, 'video')
sticker.addFile(fileBuffer); 
sticker.options.metadata = {pack: config["stickerPack"].value, author: config["stickerPack"].value, author: config["stickerAuthor"].value. replaceAll("{user}", pushname). replaceAll("{botname}", NomeDoBot).replaceAll("{time}", `${dattofc} ${hourofc}`), emojis: ['🤠', '🥶', '😻']};
await sticker.start().then(async(data) => {
 await yurizin.sendMessage(from, {sticker: fs.readFileSync(data[0].value)}, {quoted: info})
setTimeout(async() => { await reagir(from, "✅️"); await fs.unlinkSync(data[0].value) }, 20);
}).catch(async(error) => reply(String(error)));
} else {
return reply(`Mencione ou adicione uma legenda à *uma imagem ou um vídeo de até 20s*.`)
}
break

case 'toimg':
if(!isQuotedSticker) return reply('Por favor, *mencione um sticker* para executar o comando.')
try {
  buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
  await yurizin.sendMessage(from, {image: buff}, {quoted: selo})
} catch(error) {
  return await reply(mess.error());
}
break

case 'metadinha': 
try {
await reagir(from, "💑️")
anuData = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let selectRandom = anuData[Math.floor(Math.random() * anuData.length)]
await yurizin.sendMessage(from, {image: {url: selectRandom.male}, caption: "• Perfil Masculino"}, {quoted: selo})
await yurizin.sendMessage(from, {image: {url: selectRandom.female}, caption: `• Perfil Feminino`}, {quoted: selo})
} catch(e) {
reply(mess.error());
}
break

case 'bnw':
case 'blur':
case 'circle':
case 'invert':
case 'pixelate':
case 'rotate':
case 'toanime':
case 'tozombie':
case 'togta':
try {
if((isMedia && !info.message.videoMessage || isQuotedImage)) {
await reagir(from, "🖼"); /* Reação para aguadar o sucesso da solicitação... '🖼' */
reply(mess.wait());
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
buffer = await getFileBuffer(post, "image");
uploadServer = await new uploader().pixhost(buffer)
await yurizin.sendMessage(from, {image: {url: API_URL+`/api/imageeffect/${command}?link=${uploadServer}&apikey=`+API_KEY_YURI}}, {quoted: selo});
await reagir(from, "✅️"); /* Sucesso? Vai reagir a mensagem com o emoji '✅️' */
} else {
reply(`*‐* Responda uma imagem ou adicione na legenda da imagem o comando, para atribuir o efeito '${command}' à foto.`, {reagir: "😾"});
}
} catch(error) {
await reagir(from, "❌"); /* Triste? Não mencionou nada ou não seguiu as diretrizes... */
reply(mess.error())
}
break

case 'comunismo':
case 'bolsonaro':
case 'affect':
case 'beautiful':
case 'del':
case 'hither':
case 'facepalm':
case 'magik':
case 'rip':
case 'jail':
case 'trash':
case 'sepia':
case 'wanted':
case 'wasted':
case 'lgbt':
case 'karaba':
try {
if((isMedia && !info.message.videoMessage || isQuotedImage)) {
await reagir(from, "🖼"); /* Reação para aguadar o sucesso da solicitação... '🖼' */
reply(mess.wait());
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
buffer = await getFileBuffer(post, "image");
uploadServer = await new uploader().pixhost(buffer)
await yurizin.sendMessage(from, {image: {url: API_URL+`/api/montagem/${command}?link=${uploadServer}&apikey=`+API_KEY_YURI}}, {quoted: selo});
await reagir(from, "✅️"); /* Sucesso? Vai reagir a mensagem com o emoji '✅️' */
} else {
reply(`*‐* Responda uma imagem ou adicione na legenda da imagem o comando, para atribuir o efeito '${command}' à foto.`, {reagir: "😾"});
}
} catch(error) {
await reagir(from, "❌"); /* Triste? Não mencionou nada ou não seguiu as diretrizes... */
reply(mess.error())
}
break

case 'substituir':
if(!SoDono && !isnit) return reply(mess.onlyOwner())
 if(isMedia && !info.message.videoMessage || isQuotedDocument) {
media = isQuotedDocument ? info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : info.message.documentMessage
rane = getRandom('.'+await getExtension(media.mimetype))
doc = await getFileBuffer(media, 'document')
fs.writeFileSync(q, doc)
await yurizin.sendMessage(from, {text:'O arquivo foi substituído para outro local com sucesso.'}, {quoted: info})
} else {
reply('Marque o documento ou arquivo..')
}
break

case 'index-bot':
if(!SoDono)return reply(mess.onlyOwner())
if(isMedia && !info.message.videoMessage || isQuotedDocument) {
media = isQuotedDocument ? info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : info.message.documentMessage
rane = getRandom('.'+await getExtension(media.mimetype))
doc = await getFileBuffer(media, 'document')
fs.writeFileSync('./index.js', doc)
await yurizin.sendMessage(from, {text: "O arquivo './index.js' foi atualizado com sucesso."}, {quoted: info})
} else {
reply('Marque o documento ou o arquivo que deseja enviar pra determinar pasta ou substituir..')
}
break

case 'getcase':
case 'puxarcase':
try{
if (!SoDono) return reply(mess.onlyOwner())
reply('Seu perdido é uma ordem! Aguarde um pouco mestre! <3')
const getCase = (cases) => {
return 'case '+`'${cases}'`+fs.readFileSync("./index.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
await sleep(500)
reply(`${getCase(q)}`)
} catch(error) {
reply('A case não foi encontrada, você deve ter escrito errado...')
}
break

case 'add': case 'unkick':
if(!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
if(!q && info.message.extendedTextMessage === null) return reply('Mencione a mensagem do(a) usuário(a) caso ele já tiver alguma presença neste bar ou digite o número de quem você quer adicionar adminstrador(a)!');
try {
useradd = `${args.join(" ").replace(/\D/g,'')}` ? `${args.join(" ").replace(/\D/g,'')}` : info.message.extendedTextMessage.contextInfo.participant
let id = `${useradd.replace(/\D/g,'')}`
if(!id) return reply(`O número está inválido, você digitou o número corretamente mesmo?`);
let [result] = await yurizin.onWhatsApp(id);
if(!result) return reply(`O número informado não está no WhatsApp ou está incorreto, preciso que verifique dígito por dígito informado!`);
response = await yurizin.groupParticipantsUpdate(from, [result.jid], "add")
if(response[0].status == "409") {
await yurizin.sendMessage(from, {text: `Eita excelência, como que eu vou adicionar alguém que já está presente no barzinho? Você deve ter confudido o número, será? 🤔`, mentions: [result.jid, sender]}, {quoted: info});
} else if(response[0].status == "403") {
await yurizin.sendMessage(from, {text: `😵‍ Não consegui adicionar o(a) novo(a) tripulante do barzinho [@${result.jid.split("@")[0]}] porque ele possuí a restrição de pessoas que podem adicionar ele(a) em grupos.`, mentions: [result.jid, sender]}, {quoted: info});
} else if(response[0].status == "408") {
await yurizin.sendMessage(from, {text: `️Não consegui realizar a ação de adicionar, o(a) [@${result.jid.split("@")[0]}] porque ele saiu recentemente ou foi removido do barzinho. O que será que ele(a) aprontou aqui? 🤔`, mentions: [result.jid, sender]}, {quoted: info});
} else if(response[0].status == "401") {
await yurizin.sendMessage(from, {text: `😔 Não consegui adicionar o(a) @${result.jid.split("@")[0]} porque ele me bloqueou. Será que ele(a) me odeia?`, mentions: [result.jid, sender]}, {quoted: info});
} else if(response[0].status == "200") {
await yurizin.sendMessage(from, {text: `😃 Prontinho, o(a) @${result.jid.split("@")[0]} foi adicionado no grupo como vossa excelência solicitou! Estou sempre ao seu comando e de todos os adminstadores do grupo!`, mentions: [result.jid, sender]}, {quoted: info});
} else {
await yurizin.sendMessage(from, {text: `Ocorreu um erro ao adicionar o(a) *@${result.jid.split("@")[0]}* no grupo.`, mentions: [result.jid, sender]}, {quoted: info});
}
} catch(error) {
reply(mess.error())
}
break

case 'ban': case 'banir': case 'kick': case 'avadakedavra':
if(!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
try {
if(!menc_os2 || menc_jid2[1]) return reply("Mencione a mensagem do(a) usuário(a) ou marque o @ do mesmo, lembre-se que só pode marcar somente 1 usuário por vez!");
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("😨 - O(a) participante não foi encontrado no grupo, talvez ele já foi removido ou saiu do grupo.");
if(botNumber.includes(menc_os2)) return reply('😵 - Como você vai remover gerente do barzinho? Não sou besta de me sabotar, acha que eu vou remover eu mesmo(a)? ');
if(JSON.stringify(numerodonos).indexOf(menc_os2) >= 0) return reply('Nossa, um adminstrador de quinta categoria quer remover um dos meus donos? É isso que eu tô vendo mesmo, tenho miopia! 🙁');
await yurizin.sendMessage(from, {text: ` O(a) camponês do barzinho *@${menc_os2.split("@")[0]}*, acaba de ser removido do grupo por motivos justos. 😅☠️`, contextInfo: {forwardingScore: 50000, isForwarded: true, mentionedJid: [menc_os2], remoteJid: info.key.remoteJid}});
await yurizin.groupParticipantsUpdate(from, [menc_os2], "remove");
} catch(error) {
console.log(error)
}
break

case 'promover': 
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(!menc_os2 || menc_jid2[1]) return reply("Mencione a mensagem do(a) usuário(a) ou marque o @ do mesmo, lembre-se que só pode marcar somente 1 usuário por vez!");
if(JSON.stringify(groupAdmins).includes(menc_os2)) return await mention(`🚨🤔 Ei @${sender.split("@")[0]}! Presta a atenção, o membro que você está pensando em promover ao cargo de administrador, já se encontra como administrador do bar.`);
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("Este membro comum foi removido do grupo ou saiu. Então, não será possível promover!");
await yurizin.sendMessage(from, {text: mess.promoteUser(menc_os2), contextInfo: {forwardingScore: 50000, isForwarded: true, mentionedJid: [sender, menc_os2], remoteJid: info.key.remoteJid}});
await yurizin.groupParticipantsUpdate(from, [menc_os2], "promote")  
break

case 'rebaixar': 
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(!menc_os2 || menc_jid2[1]) return reply("-")
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("O adminstrador não está mais presente neste grupo. Então, não será possível rebaixar o mesmo de cargo neste barzinho falido! 😅🍻")
if(JSON.stringify(groupAdmins).includes(menc_os2)) return await mention(`O ${menc_os2.split("@")[0]} nem é administrador do grupo! Como é que você quer tirar o cargo de quem não tem? 🙄`);
await yurizin.sendMessage(from, {text: mess.rebaixarUser(menc_os2), contextInfo: {forwardingScore: 50000, isForwarded: true, mentionedJid: [menc_os2], remoteJid: info.key.remoteJid}});
await yurizin.groupParticipantsUpdate(from, [menc_os2], "demote");
break

case 'sorteio':
if(!isGroup) return reply(mess.onlyGroup());
if(!isGroupAdmins) return reply(mess.onlyAdmins());
if(!q) return reply(`Coloque algo após o comando, por exemplo: *${prefix}sorteio* _de 100 R$_`);
try {
await mention(`🤖🎉 Parabéns *@${groupMembers[Math.floor(Math.random() * groupMetadata.participants.length)].id.split('@')[0]}*, você acaba de ser contemplado(a) como o(a) ganhador(a) do sorteio...\n–\n• Para mais informações entre em contato com o(a) adm responsável pelo sorteio: _“${q}”_.`);
} catch(error) {
reply('Deu erro, tente novamente :/')
}
break

case 'sorteionumero':
case 'sorteionumeros':  
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!args.length > 1) return reply(`Coloque algo após o comando, por exemplo: *${prefix}sorteio* _de 100 R$_`);
try {
reply(`🤖🎉 Parabéns ao sortudo(a) do número *${Math.floor(Math.random() * groupMetadata.participants.length)}*, por ganhar o sorteio!\n–\n• Para mais informações entre em contato com o(a) adm responsável pelo sorteio: _“${q}”_.`)
} catch(error) {
reply('Deu erro, tente novamente :/')
}
break

case 'nuke': case 'arquivargp':
if(!SoDono && !isnit) return reply("Só dono pode utilizar este comando...");
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
if(info.key.fromMe) return 
blup = [];
for (i of groupMembers) {if(!numerodonos.includes(i.id)) blup.push(i.id)};
blup.splice(blup.indexOf(botNumber), 1);
for (i = 0; i < blup.length; i++) {
await sleep(500);
await yurizin.groupParticipantsUpdate(from, [blup[i]], 'remove');
} 
break

case 'ttp':
if (!q) return reply(`Coloque o texto que você quiser após o comando, por exemplo: *${prefix + command}* _Eu me amo_`);
await reply(mess.wait())
await yurizin.sendMessage(from, {sticker: {url: API_URL+`/api/ttp/ttp?texto=${q}&apikey=`+API_KEY_YURI}}, {quoted: selo})
.catch(async(error) => {
return reply(mess.error())  
})
break

case 'togif': case 'tomp4': case 'tovideo':
if((isMedia && !info.message.videoMessage || isQuotedSticker) && !q.length <= 1) {
reply(`Conversão do Sticker para GIF está em processamento. Aguarde um pouco, pequeno gafanhoto...`, {reagir: "🕒️"});
try {
MediaWebP = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, "sticker");
fileName = crypto.randomBytes(10).toString('hex');
fs.writeFileSync(`./arquivos/database/assets/webp/tmp/${fileName}.webp`, MediaWebP); // Cria um arquvo WebP para converter a mídia.
outputFile = `./arquivos/database/assets/webp/tmp/${fileName}.webp`;
resultadoGIF = await WebP_GIF(outputFile);
await yurizin.sendMessage(from, {video: {url: resultadoGIF.resultado}, caption: `🤖🎉 Sucesso na conversão! ✅`, gifPlayback: true}, {quoted: info}).catch(() => reply(mess.error()));
setTimeout(async() => { await reagir(from, "✅️"); await fs.unlinkSync(outputFile) }, 1000)
} catch(error) { 
 return await reply(mess.error(), {reagir: "❌"});
}
} else {
 return await reply(`Responda um *STICKER* com o comando *${prefix+command}* - Faz a conversão do Sticker para GIF ou vídeo.`);
}
break

case 'attp':
if (!q) return await reply(`Coloque *uma frase ou um texto* que você quiser após o comando, por exemplo: *${prefix+command} Eu amo o Yuri!*`, {reagir: "😅"});
try {
await reply(mess.wait(), {reagir: "🕜"});
bufferSt = await getBuffer(API_URL+`/api/ttp/attp?texto=${q}&apikey=`+API_KEY_YURI);
var sticker = new Sticker(); // Sticker
sticker.addFile(bufferSt); /* Adicionar a mídia para fazer a figurinha. */
sticker.options.metadata = {author: "Yuri-Bot ©", emojis: ['🤠', '🥶', '😻']};
await sticker.start().then(async(data) => {
 await yurizin.sendMessage(from, {sticker: fs.readFileSync(data[0].value)}, {quoted: info})
setTimeout(async() => { await reagir(from, "✅️"); await fs.unlinkSync(data[0].value) }, 20);
}).catch(async(error) => reply(error, {reagir: "❌"}));
} catch(error) {
  return await reply(mess.error(), {reagir: "❌"});
}
break

case 'nick': case 'gerarnick': case 'fazernick': case 'estilizar':
if(!q) return reply(`Escreva um texto para eu enviar ele com letras modificadas, por exemplo: *${prefix+command} Yuri*`);
if(ANT_LTR_MD_EMJ(q)) return reply("Ao realizar a solicitação de criação foi detectada letras modificadas ou emojis, ou seja, não se pode conter emojis e letras modificadas.");
try {
DATABC = await fetchJson(API_URL+`/api/outros/styletext?nome=${q}&apikey=`+API_KEY_YURI);
reply(`• [Total: *${DATABC.length}*] - Estilos aplicados com sucesso ao texto: “${q}”\n——\n` + DATABC.resultado.map((m, index) => `${index+1}. ${m}`).join("\n—\n"), {reagir: "✅"});
} catch(error) {
await reply(mess.error());
}
break

case 'chance':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))  
if(args.length < 1) return reply(`Você precisa digitar da forma correta... Por exemplo: *${prefix}chance* _do jubileu ser gay_`)
await yurizin.sendMessage(from, {text: `😵‍💫🌟 - A chance _“${q}”_ é de: *${Math.floor(Math.random() * 100)}%*. Eai, foi o que a probabilidade que esperava jovem?`, mentions: [sender]}, {quoted: selo});
break

case 'namorar': case 'pediremnamoro': 
if(!isGroup) return reply(mess.onlyGroup());
if(!menc_os2) return reply('Marque a mensagem ou o @ que queira pedir ela em namoro. Se você tomar um fora, juízo!');
if(botNumber.includes(menc_os2)) return reply("Não é possível pedir o bot em namoro, seu baitola. 🙄");
if(JSON.stringify(namoro2).includes(menc_os2)) return reply(`Este usuário já foi pedido em namoro...`);
if(JSON.stringify(namoro1).includes(menc_os2) && namoro1[namoro1.map(i => i.usu1).indexOf(menc_os2)].namorados == false) return reply(`Essa pessoa já pediu alguém em namoro... Sinto muito! 😕`);
if(JSON.stringify(namoro1).includes(menc_os2) && namoro1[namoro1.map(i => i.usu1).indexOf(menc_os2)].namorados == true) return reply(`Não será possível pedir essa pessoa em namoro, pois a mesma já está com outro(a). 🌚`);
if(JSON.stringify(namoro1).includes(sender) && namoro1[namoro1.map(i => i.usu1).indexOf(sender)].namorados == false) return await mention(`Você já pediu para namorar com o (a) *@${namoro1[namoro1.map(i => i.usu1).indexOf(sender)].usu2}*. Não brinque com os sentimentos dos outros! Se decida logo ou digite: *${prefix}cancelarpedido*.`);
if(JSON.stringify(namoro1).includes(sender) && namoro1[namoro1.map(i => i.usu1).indexOf(sender)].namorados == true) return await mention(`Você já está namorando com o (a) *@${namoro1[namoro1.map(i => i.usu1).indexOf(sender)].usu2}*...`);
await reagir(from, "💍");
namoro1.push({usu1: sender, usu2: menc_os2.split('@')[0], namorados: false, idgp: from, hora: hourofc, data: dattofc});
fs.writeFileSync("./arquivos/database/func/namoro1.json", JSON.stringify(namoro1, null, 2));
namoro2.push({id: menc_os2, pedido: sender.split('@')[0], idgp: from});
fs.writeFileSync("./arquivos/database/func/namoro2.json", JSON.stringify(namoro2));
await mention(`🌟🥳 Psiu *@${menc_os2.split('@')[0]}*! Você acaba de ser pedido em namoro por *@${sender.split('@')[0]}*.\nEai você aceita o pedido, *sim ou não?*`);
break

case 'cancelarpedido':
if(!isGroup) return reply(mess.onlyGroup());
if(!JSON.stringify(namoro1).includes(sender)) return reply("Não há pedido de namoro para cancelar.");
if(namoro1[namoro1.map(i => i.usu1).indexOf(sender)].namorados == true) return reply("Não é possível cancelar o pedido de namoro depois de aceito.");
namoro1.splice(namoro1.map(i => i.usu1).indexOf(sender), 1);
fs.writeFileSync("./arquivos/database/func/namoro1.json", JSON.stringify(namoro1, null, 2));
namoro2.splice(namoro2.map(i => i.id).indexOf(namoro1[namoro1.map(i => i.usu1).indexOf(sender)].usu2+"@s.whatsapp.net"), 1)
fs.writeFileSync("./arquivos/database/func/namoro2.json", JSON.stringify(namoro2));
reply("Pedido de namoro cancelado com sucesso.");
break

case 'terminar_namoro':
if(!JSON.stringify(namoro1).includes(sender)) return reply(`Você não está namorando com ninguém. Sinto muito!`)
D1 = namoro1.map(i => i.usu1).indexOf(sender)
D2 = namoro1.map(a => a.usu1).indexOf(`${namoro1[D1].usu2}@s.whatsapp.net`); 
namoro1[D2].namorados = false;
reply(`Agora você está totalmente solteiro, notifiquei a(o) sua/seu parceiro sobre o término.`);
await yurizin.sendMessage(`${namoro1[D1].usu2}@s.whatsapp.net`, {text: `Tenho uma notícia ruim sobre seu namoro, ele(a) acaba de terminar.\n–\n• Seja feliz e lembre dos todos os bons momentos que vocês tiveram juntos.`}, {quoted: info});
namoro1.splice(D2, 1);
fs.writeFileSync("./arquivos/database/func/namoro1.json", JSON.stringify(namoro1, null, 2));
namoro1.splice(D1, 1);
fs.writeFileSync("./arquivos/database/func/namoro1.json", JSON.stringify(namoro1, null, 2));
break

case 'rglfm': case 'reg': case 'rgfm':
if(!q) return await reply(mess.registerUserLFM(prefix), {reagir: "❌"})
if(rglastfm.map(i => i.number).includes(sender)) return reply(`Não é possível registrar dois ou mais usuários em um número! Caso desejar atualizar o user, use: ${prefix}ruserfm`, {reagir: "✅"});
// Usar o método de buscar informações:
var configLastFM = new LastFM({auth: "0e10d190ad06fd4b23d5c57bc220b684", user: q, method: "user.getInfo"
});
response = await configLastFM.start();
if(response.error == 6) {
  return await reply(`Usuário não encontrado! O usuário está correto? Por favor, verifique no site do Last.fm como está seu user.`, {reagir: "😮", eval: true, id: from});
} else if(response.error) {
  return await reply(mess.error(), {reagir: "❌", eval: true, id: from});
} else { // Iniciar o código, caso não aconteça nenhum erro.
rglastfm.push({ number: sender, user: q });
fs.writeFileSync("./arquivos/database/func/lastfm.json", JSON.stringify(rglastfm))
await reply(`🎉 Parabéns! Seu usuário acaba de ser registrado em nossa database! Agora você pode conferir o TOP de artistas, músicas, albuns e até mesmo a última música escutada pelo WhatsApp, incrível né?\n—\n• *Lembrete:* Faça a sincronização do seu usuário a sua conta com o Spotify diretamente pelo aplicativo ou site do LastFM, para obter êxito nas funções, não se esqueça de sincronizar amigo(a)!`, {reagir: "😍"})
}
break

case 'lt':
if(!rglastfm.map(i => i.number).includes(sender)) return reply(`Por favor, registre seu username antes de usar este comando. Use o comando ${prefix}rgfm <seu username>.`, {reagir: "✅"});
try {
var configLastFM = new LastFM({auth: "0e10d190ad06fd4b23d5c57bc220b684", user: rglastfm[rglastfm.map(i => i.number).indexOf(sender)].user, method: "user.getRecentTracks", limit: 1});
response = await configLastFM.start();
data = 
yurizin.sendMessage(from, {image: {url: `${API_URL}/api/photomod/musicard/v3?thumbnail=${response.recenttracks.track[0].image[3]["#text"]}&music_name=${response.recenttracks.track[0].name}&artist_name=${response.recenttracks.track[0].artist['#text']}`}, caption: `@${rglastfm[rglastfm.map(i => i.number).indexOf(sender)].number.split("@")[0]} aqui está a última música escutada por você:\n————\n• Música: *${response.recenttracks.track[0].name}*\n• Artista: *${response.recenttracks.track[0].artist['#text']}*\n• Album: *${response.recenttracks.track[0].album['#text']}*`, mentions: [rglastfm[rglastfm.map(i => i.number).indexOf(sender)].number]}, {quoted: selo});
} catch(error) {
return await reply(mess.error(), {reagir: "❌"});
}
break

case 'topart':
if(!rglastfm.map(i => i.number).includes(sender)) return reply(`Por favor, registre seu username antes de usar este comando. Use o comando ${prefix}rgfm <seu username>.`, {reagir: "✅"});
try {
var configLastFM = new LastFM({auth: "0e10d190ad06fd4b23d5c57bc220b684", user: rglastfm[rglastfm.map(i => i.number).indexOf(sender)].user, method: "user.getTopArtists", limit: 5});
response = await configLastFM.start();
mention(`Este é o top 5 artistas mais escutados por: @${rglastfm[rglastfm.map(i => i.number).indexOf(sender)].number.split("@")[0]}\n—\n` + response.topartists.artist.map((v, index) => `*${index + 1}.* \`${v.name}\`\n\t• Scrobbles (Reproduções): *${v.playcount}*`).join('\n'))
} catch(error) {
return await reply(mess.error(), {reagir: "❌"});
}
break

case 'toptrack':
if(!rglastfm.map(i => i.number).includes(sender)) return reply(`Por favor, registre seu username antes de usar este comando. Use o comando ${prefix}rgfm <seu username>.`, {reagir: "✅"});
try {
var configLastFM = new LastFM({auth: "0e10d190ad06fd4b23d5c57bc220b684", user: rglastfm[rglastfm.map(i => i.number).indexOf(sender)].user, method: "user.getTopTracks", limit: 5});
response = await configLastFM.start();
await mention(`Este é o top 5 músicas mais escutadas por: @${rglastfm[rglastfm.map(i => i.number).indexOf(sender)].number.split("@")[0]}\n—\n` + response.toptracks.track.map((v, index) => `*${index+1}.* \`${v.name}\`\n\t• Compositor(a): *${v.artist.name}* • Tempo: *${v.duration + "s"}* • Scrobbles: *${v.playcount}*`).join('\n—\n'));
} catch(error) {
return await reply(mess.error(), {reagir: "❌"});
}
break

case 'topalb': 
if(!rglastfm.map(i => i.number).includes(sender)) return reply(`Por favor, registre seu username antes de usar este comando. Use o comando ${prefix}rgfm <seu username>.`, {reagir: "✅"});
try {
var configLastFM = new LastFM({auth: "0e10d190ad06fd4b23d5c57bc220b684", user: rglastfm[rglastfm.map(i => i.number).indexOf(sender)].user, method: "user.getTopAlbums", limit: 5});
response = await configLastFM.start();
await mention(`Este é o top 5 álbuns mais escutados por: @${rglastfm[rglastfm.map(i => i.number).indexOf(sender)].number.split("@")[0]}\n—\n` + response.topalbums.album.map((v, index) => `*${index+1}.* \`${v.name}\`\n\t• Dono(a) da Coleção de gravações de áudio (Album): *${v.artist.name}*\n\t• Scrobbles (Reproduções): *${v.playcount}* `).join('\n—\n'))
} catch(error) {
return await reply(mess.error(), {reagir: "❌"});
}
break

case 'minhadupla': case 'dupla':
if(!isGroup) return reply(mess.onlyGroup());
if(!JSON.stringify(namoro1).includes(sender)) return reply(`Você não está namorando com ninguém. Sinto muito!`);
await reagir(from, "❤️‍🩹");
D1 = namoro1.map(i => i.usu1).indexOf(sender)
if(namoro1[D1].namorados == false) return reply(`A pessoa que você pediu em namoro não aceitou o pedido ainda. Portanto, não é possível consultar os dados da dupla.️`);
await mention(`@${namoro1[D1].usu1.split('@')[0]} namora com @${namoro1[D1].usu2}\n–\n• O pedido de namoro ocorreu às ${namoro1[D1].hora} do dia ${namoro1[D1].data}.\n–\n• Para realizar o término do namoro é fácil, use o comando: *${prefix}terminar_namoro*`);
break

case 'nazista':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await yurizin.sendMessage(from, {text: `Pesquisando a sua ficha de nazista: *@${sender_ou_n.split("@")[0]}* aguarde...`, mentions: [sender_ou_n]}, {quoted: info})
setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
await yurizin.sendMessage(from, {image: {url: images['Brincadeiras']['Cards'].Nazista}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa nazista?\n• Porcentagem de chance de ser uma pessoa nazista: *${random}%.* `, mentions: [sender_ou_n]}, {quoted: selo})
}, 7000)
break 

case 'gay':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await yurizin.sendMessage(from, {text: `Pesquisando a sua ficha de gay: @${sender_ou_n.split("@")[0]} aguarde...`, mentions: [sender_ou_n]}, {quoted: info})
setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
feio = random; boiola = random
if(boiola < 20 ) {var bo = 'hmm... você é hetero...'} else if(boiola == 21 ) {var bo = '+/- boiola'} else if(boiola == 23 ) {var bo = '+/- boiola'} else if(boiola == 24 ) {var bo = '+/- boiola'} else if(boiola == 25 ) {var bo = '+/- boiola'} else if(boiola == 26 ) {var bo = '+/- boiola'} else if(boiola == 27 ) {var bo = '+/- boiola'} else if(boiola == 2 ) {var bo = '+/- boiola'} else if(boiola == 29 ) {var bo = '+/- boiola'} else if(boiola == 30 ) {var bo = '+/- boiola'} else if(boiola == 31 ) {var bo = 'tenho minha desconfiança...'} else if(boiola == 32 ) {var bo = 'tenho minha desconfiança...'} else if(boiola == 33 ) {var bo = 'tenho minha desconfiança...'} else if(boiola == 34 ) {var bo = 'tenho minha desconfiança...'} else if(boiola == 35 ) {var bo = 'tenho minha desconfiança...'} else if(boiola == 36 ) {var bo = 'tenho minha desconfiança...'} else if(boiola == 37 ) {var bo = 'tenho minha desconfiança...'} else if(boiola == 3 ) {var bo = 'tenho minha desconfiança...'} else if(boiola == 39 ) {var bo = 'tenho minha desconfiança...'} else if(boiola == 40 ) {var bo = 'tenho minha desconfiança...'} else if(boiola == 41 ) {var bo = 'você é né?'} else if(boiola == 42 ) {var bo = 'você é né?'} else if(boiola == 43 ) {var bo = 'você é né?'} else if(boiola == 44 ) {var bo = 'você é né?'} else if(boiola == 45 ) {var bo = 'você é né?'} else if(boiola == 46 ) {var bo = 'você é né?'} else if(boiola == 47 ) {var bo = 'você é né?'} else if(boiola == 4 ) {var bo = 'você é né?'} else if(boiola == 49 ) {var bo = 'você é né?'} else if(boiola == 50 ) {var bo = 'você é ou não?'} else if(boiola > 51) {var bo = 'você é gay...'
}
await yurizin.sendMessage(from, {image: {url: images['Brincadeiras']['Cards'].Gay}, caption: `Qual é a porcentagem de chance do(a) *@${sender_ou_n.split("@")[0]}* ser gay?\n• *${random}% homossexual*, ${bo}`, mentions: [sender_ou_n], thumbnail:null}, {quoted: selo})
}, 7000)
break

case 'feio':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await yurizin.sendMessage(from, {text: `Pesquisando a sua ficha de feio: *@${sender_ou_n.split("@")[0]}* aguarde...`, mentions: [sender_ou_n]}, {quoted: info})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
feio = random
if(feio < 20 ) {var bo = 'É não é feio'} else if(feio == 21 ) {var bo = '+/- feio'} else if(feio == 23 ) {var bo = '+/- feio'} else if(feio == 24 ) {var bo = '+/- feio'} else if(feio == 25 ) {var bo = '+/- feio'} else if(feio == 26 ) {var bo = '+/- feio'} else if(feio == 27 ) {var bo = '+/- feio'} else if(feio == 2 ) {var bo = '+/- feio'} else if(feio == 29 ) {var bo = '+/- feio'} else if(feio == 30 ) {var bo = '+/- feio'} else if(feio == 31 ) {var bo = 'ainda tá na média'} else if(feio == 32 ) {var bo = 'dá pra pegar umas(ns) novinha(o) ainda'} else if(feio == 33 ) {var bo = 'Da pra pegar umas(ns) novinha(o) ainda'} else if(feio == 34 ) {var bo = 'é fein, mas tem baum coração'} else if(feio == 35 ) {var bo = 'tá na média, mas não deixa de ser feii'} else if(feio == 36 ) {var bo = 'bonitin mas é feio com orgulho'} else if(feio == 37 ) {var bo = 'feio e preguiçoso(a), vai se arrumar praga feia'} else if(feio == 3 ) {var bo = 'tenho '} else if(feio == 39 ) {var bo = 'feio, mas um banho e se arrumar, deve resolver'} else if(feio == 40 ) {var bo = 'fein,  mas não existe gente feia, existe gente que não conhece os produtos jequity'} else if(feio == 41 ) {var bo = 'você é Feio, mas é legal, continue assim'} else if(feio == 42 ) {var bo = 'Nada que uma maquiagem e se arrumar, que não resolva.'} else if(feio == 43 ) {var bo = 'Feio que dói de ver, compra uma máscara que melhora'} else if(feio == 44 ) {var bo = 'Feio mas nada que um saco na cabeça não resolva né!?'} else if(feio == 45 ) {var bo = 'você é feio, mas tem bom gosto'} else if(feio == 46 ) {var bo = 'feio mas tem muitos amigos'} else if(feio == 47 ) {var bo = 'é feio mas tem lábia pra pegar várias novinha'} else if(feio == 4 ) {var bo = 'feio e ainda não sabe se vestir, vixi'} else if(feio == 49 ) {var bo = 'feiooo dms vey.'} else if(feio == 50 ) {var bo = 'você é feio, mas não se encherga.'} else if(feio > 51) {var bo = 'você é feio demais bixo.'}
await yurizin.sendMessage(from, {image: {url: images['Brincadeiras']['Cards'].Feio}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa feia?\n• A porcentagem de chance é *${random}%*, ${bo}`, mentions: [sender_ou_n], thumbnail:null}, {quoted: selo})
}, 7000)
break 

case 'corno':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await yurizin.sendMessage(from, {text:`Pesquisando a ficha de corno @${sender_ou_n.split("@")[0]}, aguarde...`, mentions: [sender_ou_n]}, {quoted: info})
setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
await yurizin.sendMessage(from, {image: {url: images['Brincadeiras']['Cards'].Corno}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa chifruda?\n• A porcentagem de chance é *${random}%*`, mentions: [sender_ou_n]}, {quoted: selo})
}, 7000)
break

case 'sorte':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
await yurizin.sendMessage(from, {text: `A sorte do usuário(a) @${sender_ou_n.split("@")[0]}*, está agora é de: *${random}%*.`, mentions: [sender_ou_n]}, {quoted: selo})
}, 7000)
break

case 'vesgo':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix));
await yurizin.sendMessage(from, {text:`Pesquisando a ficha de vesgo @${sender_ou_n.split("@")[0]}, aguarde...`, mentions: [sender_ou_n]}, {quoted: info})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
await yurizin.sendMessage(from, {image: {url: images['Brincadeiras']['Cards'].Vesgo}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa vesga?\n• A porcentagem de chance é *${random}%*`, mentions: [sender_ou_n]}, {quoted: selo})
}, 7000)
break 

case 'bebado':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await yurizin.sendMessage(from, {text:`Pesquisando a ficha de bebado(a) @${sender_ou_n.split("@")[0]}, aguarde...`, mentions: [sender_ou_n]}, {quoted: info})
setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
await yurizin.sendMessage(from, {image: {url: images['Brincadeiras']['Cards'].Bebado}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa bêbada?\n• A porcentagem de chance é *${random}%*`, mentions: [sender_ou_n]}, {quoted: selo})
}, 7000)
break 

case 'gado':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await yurizin.sendMessage(from, {text:`Pesquisando a ficha de gado @${sender_ou_n.split("@")[0]}, aguarde...`, mentions: [sender_ou_n]}, {quoted: info})
setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
await yurizin.sendMessage(from, {image: {url: images['Brincadeiras']['Cards'].Gado}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser um gado?\n• A porcentagem de chance é *${random}%*`, mentions: [sender_ou_n]}, {quoted: selo})
}, 7000)
break 

case 'gostoso':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await yurizin.sendMessage(from, {text:`Pesquisando a sua ficha de gostoso @${sender_ou_n.split("@")[0]} aguarde...`, mentions: [sender_ou_n]}, {quoted: info})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
await yurizin.sendMessage(from, {image: {url: images['Brincadeiras']['Cards'].Gostoso}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa gostosa?\n• A porcentagem de chance é *${random}%*`, gifPlayback: true, mentions: [sender_ou_n]}, {quoted: selo})
}, 7000)
break 


case 'gostosa':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await yurizin.sendMessage(from, {text:`Pesquisando a sua ficha de gostosa @${sender_ou_n.split("@")[0]} aguarde...`, mentions: [sender_ou_n]}, {quoted: info})
setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
await yurizin.sendMessage(from, {image: {url: images['Brincadeiras']['Cards'].Gostosa}, caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa gostosa?\n• A porcentagem de chance é *${random}%*`, gifPlayback: true, mentions: [sender_ou_n]}, {quoted: selo})
}, 7000)
break 

case 'morte': case 'death':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if (args.length == 0) return reply(`Está faltando o nome da pessoa! Por exemplo: ${prefix+command} Yuri`)
predea = await axios.get(`https://api.agify.io/?name=${encodeURIComponent(args[0])}`);
if (predea.data.age == null) return reply(`Você inseriu um nome invalido, certifique-se de inserir um sem acentos, emojis, números e outros.`);
await yurizin.sendMessage(from, {text: `Pessoas com este nome citado “${predea.data.name}” tendem a morrer aos ${predea.data.age} anos.`, mentions: [sender]}, {quoted: selo});
break				
				
case 'matar': case 'mata':  
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if(!menc_os2 || menc_jid2[1]) return reply('marque o alvo que você quer matar, a mensagem ou o @')
yurizin.sendMessage(from, {video: {url: images['Brincadeiras']['Cards'].Matar}, gifPlayback: true, caption: `Você acabou de matar o(a) *@${menc_os2.split('@')[0]}*, seu... 😵‍💫💅🏻`, mentions: [menc_os2]}, {quoted: selo})
break 

case 'beijo':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if(!menc_os2 || menc_jid2[1]) return reply('Marque a pessoa que você quer beijar, a mensagem ou o @');
await yurizin.sendMessage(from, {video: {url: images['Brincadeiras']['Cards'].Kisses}, gifPlayback: true, caption: `Você acabou de mandar um beijo gostoso para o(a) *@${menc_os2.split('@')[0]}*!` , mentions: [menc_os2]}, {quoted: selo})
break

case 'tapa':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if(!menc_os2 || menc_jid2[1]) return reply('Marque o alvo que você quer da um tapa, a mensagem ou o @.')
await yurizin.sendMessage(from, {video: {url: images['Brincadeiras']['Cards'].Tapa}, gifPlayback: true, caption: `Você acabou de da um tapa na raba da *@${menc_os2.split('@')[0]}*. ✅`, mentions: [menc_os2]}, {quoted: selo})
break

case 'chute':
case 'chutar':  
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix));
if(!menc_os2 || menc_jid2[1]) return reply('Marque o alvo que você quer da um chute, a mensagem ou o @')
await yurizin.sendMessage(from, {video: {url: images['Brincadeiras']['Cards'].Chute}, gifPlayback: true, caption: `Você acabou de dar um chute em *@${menc_os2.split('@')[0]}*.`, mentions: [menc_os2]}, {quoted: selo})
break 

case 'dogolpe':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if(!menc_os2 || menc_jid2[1]) return reply('Marque a mensagem com o comando ou marque o @ do usuário..')
randomF = ["em iludir pessoas", "em ferir os sentimentos", "em dar chifre"]
await yurizin.sendMessage(from, {text: `🌟☠️ *@${menc_os2.split("@")[0]}* é especialista *${randomF[Math.floor(Math.random() * randomF.length)]}*.`, mentions: [menc_os2]}, {quoted: selo})
break

case 'shipo':
if(!isGroup) return reply(mess.onlyGroup());
if(!isModobn) return reply(mess.onlyGroupFun(prefix));
if(!menc_os2) return reply('Marque uma pessoa do grupo para encontrar o par dela.');
await mention(`🌟 Eu shipo *@${groupMembers[Math.floor(Math.random() * groupMembers.length)].id.split('@')[0]} & @${menc_os2.split("@")[0]}* com uma porcentagem de *${Math.floor(Math.random() * 100)+"%"}*.`);
break

case 'casal':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await mention(`🌟👩🏼‍❤️‍💋‍👨🏻 - Sinto uma química muito forte entre *@${groupMembers[Math.floor(Math.random() * groupMembers.length)].id.split('@')[0]} & @${groupMembers[Math.floor(Math.random() * groupMembers.length)].id.split('@')[0]}*, com uma chance de dar certo: *${Math.floor(Math.random() * 100)+"%"}*.`)
break

case 'rank': case 'ranklevel': case 'rankpatente':
if(!isGroup) return reply(mess.onlyAdmins())
if(!isLevelingOn) return reply(`Para usar o comando, primeiro o(s) admin(s) do grupo deve ativar o sistema de level.\n• Solicite a 1 do(s) administrador(es) para ativar o comando. Usar: ${prefix}leveling`)
if(level2.length > 4) {
cortGG = level2.map(i => i)
rank = cortGG.sort((a, b) => (a.contador < b.contador) ? 0 : -1)
if(level2.length > 10) {var totalR = 10} else {var totalR = level2.length}
tc = `🎖️ Rank Level - [Type: *Global*]\n–`
for ( i = 0; i < totalR; i++) {
  if(i != null) {
var newlevel = rank[i].contador
if(newlevel < 100){var newpatente = "Bronze I 🥉"}; if(newlevel >= 100 && newlevel < 200){var newpatente = "Bronze II 🥉"}; if(newlevel >= 200 && newlevel < 300){var newpatente = "Bronze III 🥉"}; if(newlevel >= 300 && newlevel < 400){var newpatente = "Prata I 🥈"}; if(newlevel >= 400 && newlevel < 500){var newpatente = "Prata II 🥈"}; if(newlevel >= 500 && newlevel < 600){var newpatente = "Prata III 🥈"}; if(newlevel >= 600 && newlevel < 700){var newpatente = "Ouro I 🥇"}; if(newlevel >= 700 && newlevel < 800){var newpatente = "Ouro II 🥇"}; if(newlevel >= 800 && newlevel < 900){var newpatente = "Ouro III 🥇"}; if(newlevel >= 900 && newlevel < 1200){var newpatente = "Ouro IV 🥇"}; if(newlevel >= 1200 && newlevel < 1500){var newpatente = "Platina I 🌀"}; if(newlevel >= 1500 && newlevel < 1800){var newpatente = "Platina II 🌀"}; if(newlevel >= 1800 && newlevel < 2100){var newpatente = "Platina III 🌀"}; if(newlevel >= 2100 && newlevel < 2700){var newpatente = "Platina IV 🌀"}; if(newlevel >= 2700 && newlevel < 3300){var newpatente = "Diamante I 💎"}; if(newlevel >= 3300 && newlevel < 3900){var newpatente = "Diamante II 💎"}; if(newlevel >= 3900 && newlevel < 4500){var newpatente = "Diamante III 💎"}; if(newlevel >= 4500 && newlevel < 5000){var newpatente = "Diamante IV 💎"}; if(newlevel >= 5000 && newlevel < 5500){var newpatente = "Paladino I 🔮"}; if(newlevel >= 5500 && newlevel < 6500){var newpatente = "Paladino II 🔮"}; if(newlevel >= 6500 && newlevel < 7500){var newpatente = "Paladino III 🔮"}; if(newlevel >= 7500 && newlevel < 9000){var newpatente = "Paladino IV 🔮"}; if(newlevel >= 9000 && newlevel < 10500){var newpatente = "Mestre I ❤️‍🔥"}; if(newlevel >= 10500 && newlevel < 12000){var newpatente = "Mestre II ❤️‍🔥"}; if(newlevel >= 12000 && newlevel < 13500){var newpatente = "Mestre III ❤️‍🔥"}; if(newlevel >= 13500 && newlevel < 15000){var newpatente = "Mestre IV ❤️‍🔥"}; if(newlevel >= 15000 && newlevel < 20000){var newpatente = "Mestre V ❤️‍🔥"}; if(newlevel >= 20000 && newlevel < 25000){var newpatente = "Desafiante I 👑"}; if(newlevel >= 25000 && newlevel < 30000){var newpatente = "Desafiante II 👑"}; if(newlevel >= 30000 && newlevel < 35000){var newpatente = "Desafiante III 👑"}; if(newlevel >= 35000 && newlevel < 40000){var newpatente = "Desafiante IV 👑"}; if(newlevel >= 40000 && newlevel < 50000){var newpatente = "Desafiante V 👑"}; if(newlevel >= 50000 && newlevel < 60000){var newpatente = "Usuário Superior I 🎓"}; if(newlevel >= 60000 && newlevel < 70000){var newpatente = "Usuário Superior II 🎓"}; if(newlevel >= 70000 && newlevel < 80000){var newpatente = "Mestre Supremo I 🪄"}; if(newlevel >= 80000 && newlevel < 90000){var newpatente = "Mestre Supremo II 🪄"}; if(newlevel >= 90000 && newlevel < 100000){var newpatente = "Mestre Supremo III 🪄"}; if(newlevel >= 100000 && newlevel < 150000){var newpatente = "Conquistador I ⚒️"}; if(newlevel >= 150000 && newlevel < 200000){var newpatente = "Conquistador II ⚒️"}; if(newlevel >= 200000 && newlevel < 300000){var newpatente = "Conquistador III ⚒️"}; if(newlevel >= 300000 && newlevel < 400000){var newpatente = "Desbravador I 🛰️"}; if(newlevel >= 400000 && newlevel < 500000){var newpatente = "Desbravador II 🛰️"}; if(newlevel >= 500000 && newlevel < 1000000){var newpatente = "Desbravador III 🛰️"}; if(newlevel >= 1000000 && newlevel < 1500000){var newpatente = "Grande Mestre I 🪩"}; if(newlevel >= 1500000 && newlevel < 2000000){var newpatente = "Grande Mestre II 🪩"}; if(newlevel >= 2000000 && newlevel < 5000000){var newpatente = "Grande Mestre III 🪩"}; if(newlevel >= 5000000 && newlevel < 10000000){var newpatente = "Supremacy X ⚜️"}; if(newlevel >= 10000000){var newpatente = "Veterano 🎩🏼‍♂️"}
tc += `\n*${i+1}°.* • Usuário(a): *${rank[i].nick}*\n• Usuário ID: *wa.me/${rank[i].id.split('@')[0]}*\n• Quantidade Total de XP: *${rank[i].contador}*\n• Atualmente a pessoa está no patente *${newpatente}*, no level: *${rank[i].level}*\n————`
}
}
reply(tc)
} else { 
reply(`Nenhum dado(s) foi retornado, tente novamente mais tarde️!`)
}
break

case 'patente':
case 'level':
if(!isGroup) return reply(mess.onlyAdmins())
if(!isLevelingOn) return reply(`Para usar o comando, primeiro o(s) admin(s) do grupo deve ativar o sistema de level.\n• Solicite a 1 do(s) administrador(es) para ativar o comando. Usar: ${prefix}leveling`)
if(JSON.stringify(level2).includes(sender)) {
levelstts = level2.map(i => i.id).indexOf(sender)
var newlevel = level2[levelstts].contador
if(newlevel < 100) newpatente = "Bronze I"
if(newlevel >= 100 && newlevel < 200) newpatente = "Bronze II"
if(newlevel >= 200 && newlevel < 300) newpatente = "Bronze III"
if(newlevel >= 300 && newlevel < 400) newpatente = "Prata I"
if(newlevel >= 400 && newlevel < 500) newpatente = "Prata II"
if(newlevel >= 500 && newlevel < 600) newpatente = "Prata III"
if(newlevel >= 600 && newlevel < 700) newpatente = "Ouro I"
if(newlevel >= 700 && newlevel < 800) newpatente = "Ouro II"
if(newlevel >= 800 && newlevel < 900) newpatente = "Ouro III"
if(newlevel >= 900 && newlevel < 1200) newpatente = "Ouro IV"
if(newlevel >= 1200 && newlevel < 1500) newpatente = "Platina I"
if(newlevel >= 1500 && newlevel < 1800) newpatente = "Platina II"
if(newlevel >= 1800 && newlevel < 2100) newpatente = "Platina III"
if(newlevel >= 2100 && newlevel < 2700) newpatente = "Platina IV"
if(newlevel >= 2700 && newlevel < 3300) newpatente = "Diamante I"
if(newlevel >= 3300 && newlevel < 3900) newpatente = "Diamante II"
if(newlevel >= 3900 && newlevel < 4500) newpatente = "Diamante III"
if(newlevel >= 4500 && newlevel < 5000) newpatente = "Diamante IV"
if(newlevel >= 5000 && newlevel < 5500) newpatente = "Paladino I"
if(newlevel >= 5500 && newlevel < 6500) newpatente = "Paladino II"
if(newlevel >= 6500 && newlevel < 7500) newpatente = "Paladino III"
if(newlevel >= 7500 && newlevel < 9000) newpatente = "Paladino IV"
if(newlevel >= 9000 && newlevel < 10500) newpatente = "Mestre I️‍"
if(newlevel >= 10500 && newlevel < 12000) newpatente = "Mestre II️‍"
if(newlevel >= 12000 && newlevel < 13500) newpatente = "Mestre III"
if(newlevel >= 13500 && newlevel < 15000) newpatente = "Mestre IV️‍"
if(newlevel >= 15000 && newlevel < 20000) newpatente = "Mestre V️‍"
if(newlevel >= 20000 && newlevel < 25000) newpatente = "Desafiante I"
if(newlevel >= 25000 && newlevel < 30000) newpatente = "Desafiante II"
if(newlevel >= 30000 && newlevel < 35000) newpatente = "Desafiante III"
if(newlevel >= 35000 && newlevel < 40000) newpatente = "Desafiante IV"
if(newlevel >= 40000 && newlevel < 50000) newpatente = "Desafiante V"
if(newlevel >= 50000 && newlevel < 60000) newpatente = "Usuário Superior I"
if(newlevel >= 60000 && newlevel < 70000) newpatente = "Usuário Superior II"
if(newlevel >= 70000 && newlevel < 80000) newpatente = "Mestre Supremo I"
if(newlevel >= 80000 && newlevel < 90000) newpatente = "Mestre Supremo II"
if(newlevel >= 90000 && newlevel < 100000) newpatente = "Mestre Supremo III"
if(newlevel >= 100000 && newlevel < 150000) newpatente = "Conquistador I️"
if(newlevel >= 150000 && newlevel < 200000) newpatente = "Conquistador II️"
if(newlevel >= 200000 && newlevel < 300000) newpatente = "Conquistador III️"
if(newlevel >= 300000 && newlevel < 400000) newpatente = "Desbravador I"
if(newlevel >= 400000 && newlevel < 500000) newpatente = "Desbravador II️"
if(newlevel >= 500000 && newlevel < 1000000) newpatente = "Desbravador III️"
if(newlevel >= 1000000 && newlevel < 1500000) newpatente = "Grande Mestre I"
if(newlevel >= 1500000 && newlevel < 2000000) newpatente = "Grande Mestre II"
if(newlevel >= 2000000 && newlevel < 5000000) newpatente = "Grande Mestre III"
if(newlevel >= 5000000 && newlevel < 10000000) newpatente = "Supremacy X"
if(newlevel >= 10000000) newpatente = "Veterano"
// É usado na barra apresentada na msg, que vai ser encaminhada pelo bot quando Usuário executar o cmd 'level' ou 'patente'.
if(newpatente == "Bronze I") {newcont = 100; newtt = 0}
if(newpatente == "Bronze II") {newcont = 200; newtt = 100}
if(newpatente == "Bronze III") {newcont = 300; newtt = 200}
if(newpatente == "Prata I") {newcont = 400; newtt = 300}
if(newpatente == "Prata II") {newcont = 500; newtt = 400}
if(newpatente == "Prata III") {newcont = 600; newtt = 500}
if(newpatente == "Ouro I") {newcont = 700; newtt = 600}
if(newpatente == "Ouro II") {newcont = 800; newtt = 700}
if(newpatente == "Ouro III") {newcont = 900; newtt = 800}
if(newpatente == "Ouro IV") {newcont = 1200; newtt = 900}
if(newpatente == "Platina I") {newcont = 1500; newtt = 1200}
if(newpatente == "Platina II") {newcont = 1800; newtt = 1500}
if(newpatente == "Platina III") {newcont = 2100; newtt = 1800}
if(newpatente == "Platina IV") {newcont = 2700; newtt = 2100}
if(newpatente == "Diamante I") {newcont = 3300; newtt = 2700}
if(newpatente == "Diamante II") {newcont = 3900; newtt = 3300}
if(newpatente == "Diamante III") {newcont = 4500; newtt = 3900}
if(newpatente == "Diamante IV") {newcont = 5000; newtt = 4500}
if(newpatente == "Paladino I") {newcont = 5500; newtt = 5000}
if(newpatente == "Paladino II") {newcont = 6500; newtt = 5500}
if(newpatente == "Paladino III") {newcont = 7500; newtt = 6500}
if(newpatente == "Paladino IV") {newcont = 9000; newtt = 7500}
if(newpatente == "Mestre I️‍") {newcont = 10500; newtt = 9000}
if(newpatente == "Mestre II") {newcont = 12000; newtt = 10500}
if(newpatente == "Mestre III️‍") {newcont = 13500; newtt = 12000}
if(newpatente == "Mestre IV️‍") {newcont = 15000; newtt = 13500}
if(newpatente == "Mestre V️‍") {newcont = 20000; newtt = 15000}
if(newpatente == "Desafiante I") {newcont = 25000; newtt = 20000}
if(newpatente == "Desafiante II") {newcont = 30000; newtt = 25000}
if(newpatente == "Desafiante III") {newcont = 35000; newtt = 30000}
if(newpatente == "Desafiante IV") {newcont = 40000; newtt = 35000}
if(newpatente == "Desafiante V") {newcont = 50000; newtt = 40000}
if(newpatente == "Usuário Superior I") {newcont = 60000; newtt = 50000}
if(newpatente == "Usuário Superior II") {newcont = 70000; newtt = 60000}
if(newpatente == "Mestre Supremo I") {newcont = 80000; newtt = 70000}
if(newpatente == "Mestre Supremo II") {newcont = 90000; newtt = 80000}
if(newpatente == "Mestre Supremo III") {newcont = 100000; newtt = 90000}
if(newpatente == "Conquistador I️") {newcont = 150000; newtt = 100000}
if(newpatente == "Conquistador II") {newcont = 200000; newtt = 150000}
if(newpatente == "Conquistador III️") {newcont = 300000; newtt = 200000}
if(newpatente == "Desbravador I️") {newcont = 400000; newtt = 300000}
if(newpatente == "Desbravador II️") {newcont = 500000; newtt = 400000}
if(newpatente == "Desbravador III️") {newcont = 1000000; newtt = 500000}
if(newpatente == "Grande Mestre I") {newcont = 1500000; newtt = 1000000}
if(newpatente == "Grande Mestre II") {newcont = 2000000; newtt = 1500000}
if(newpatente == "Grande Mestre III") {newcont = 5000000; newtt = 2000000}
if(newpatente == "Supremacy X️") {newcont = 10000000; newtt = 5000000}
// Barra de quanto falta para alcançar o próximo nível.
if(newlevel < 10000000) {
  sabPor = Number(Number(newlevel - newtt) / Number(newcont - newtt) * 100).toFixed(1)
  sabibis = newcont - newlevel
if(sabPor == 100) sabPor = `〘██████████〙${sabPor}%`
if(sabPor < 100) returnP = `〘█████████▒〙${sabPor}%`
if(sabPor < 90) returnP = `〘████████▒▒〙${sabPor}%`
if(sabPor < 80) returnP = `〘███████▒▒▒〙${sabPor}%`
if(sabPor < 70) returnP = `〘██████▒▒▒▒〙${sabPor}%`
if(sabPor < 60) returnP = `〘█████▒▒▒▒▒〙${sabPor}%`
if(sabPor < 50) returnP = `〘████▒▒▒▒▒▒〙${sabPor}%`
if(sabPor < 40) returnP = `〘███▒▒▒▒▒▒▒〙${sabPor}%`
if(sabPor < 30) returnP = `〘██▒▒▒▒▒▒▒▒〙${sabPor}%`
if(sabPor < 20) returnP = `〘█▒▒▒▒▒▒▒▒▒〙${sabPor}%`
if(sabPor < 10) returnP = `〘▒▒▒▒▒▒▒▒▒▒〙${sabPor}%`
} else {
returnP = ``
}
leveltxt = `• Usuário: *@${sender.split("@")[0]}*\n• Você está atualmente no level *${level2[levelstts].level}* e no patente *${newpatente}*\n• Sua quantidade de XP é: *${level2[levelstts].contador}*\n\t[•] -> ${newlevel < 10000000 ? `*${returnP}*` : ``}\n–\n${newlevel < 10000000 ? `${newlevel < 10000000 ? `• Para subir para o próximo level, alcance essa quantidade: *${newcont}*.` : ``}\n• Falta${Number(sabibis) > 1 ? `m` : ``} apenas *${sabibis} XP* para você upar para o próximo level.` : `Você já alcançou a patente máxima, ou seja, está muito a frente de todos.`}`
localeL = level2.map(i => i).sort((a, b) => (a.contador < b.contador) ? 0 : -1)
try {uk = await yurizin.profilePictureUrl(sender)} catch(erro) { pr = await axios.get(`https://tinyurl.com/api-create.php?url=${images['defaultProfile'].value}`); uk = pr.data }
gerarBufferLV = await getBuffer(uk); photoULV = await new uploader().pixhost(gerarBufferLV)
anu = await axios.get(`https://tinyurl.com/api-create.php?url=${images['Level'].value}`)
await yurizin.sendMessage(from, {image: {url: API_URL+`/api/photomod/levelcard?foto=${photoULV}&nome=${pushname}&xp_before=${level2[levelstts].contador}&xp_after=${newcont}&level=${level2[levelstts].level}&ranking=${localeL.map(i => i.id).indexOf(sender) + 1}&fundo=${anu.data}`}, caption: leveltxt, mentions: [sender]}, {quoted: selo})
} else {
reply(`Nenhuma informação foi obtida sobre seu level/patente atual em sua solicitação.\n• *Tente novamente mais tarde!* Caso seja uma falha técnica entre em contato com o(a) dono(a) do bot.`)
}
break

case 'addlevel':
if(!SoDono) return reply(mess.onlyOwner())
if(!q) return reply("Digite a quantidade de level que deseja adicionar...")
if(!Number(args[0])) return reply(args[0] + " não é número...")
if(Number(args[0]) < 1) return reply("Tem que adicionar ao menos 1 level.")
if(q.includes(".")) return reply("Não pode número decimal.")
AB = level2.map(i => i.id).indexOf(menc_prt ? menc_prt : sender)
level2[AB].level += Number(args[0])
fs.writeFileSync("./arquivos/database/func/users/leveling.json", JSON.stringify(level2))
reply(`${args[0]} leve${Number(args[0]) > 1 ? `is` : `l`} adicionado${Number(args[0]) > 1 ? `s` : ``} a este usuário...`)
break

case 'tirarlevel':
if(!SoDono) return reply(mess.onlyOwner())
if(!q) return reply("Digite a quantidade de level que deseja remover")
if(!Number(args[0])) return reply(args[0] + " não é número...")
if(Number(args[0]) < 1) return reply("Tem que tirar ao menos 1 level.");
if(q.includes(".")) return reply("Não pode número decimal.");
AB = level2.map(i => i.id).indexOf(menc_prt ? menc_prt : sender)
level2[AB].level -= Number(args[0]);
fs.writeFileSync("./arquivos/database/func/users/leveling.json", JSON.stringify(level2))
reply(`${args[0]} leve${Number(args[0]) > 1 ? `is` : `l`} retirado${Number(args[0]) > 1 ? `s` : ``} deste usuário...`);
break

case 'addxp':
if(!SoDono) return reply(mess.onlyOwner())
if(!q) return reply("Digite a quantidade de XP que deseja adicionar")
if(!Number(args[0])) return reply(args[0] + " não é número...")
if(Number(args[0]) < 1) return reply("Tem que add ao menos 1 de XP")
if(q.includes(".")) return reply("Não pode número decimal")
AB = level2.map(i => i.id).indexOf(menc_prt ? menc_prt : sender)
level2[AB].contador += Number(args[0])
fs.writeFileSync("./arquivos/database/func/users/leveling.json", JSON.stringify(level2))
reply(`${args[0]} experiência${Number(args[0]) > 1 ? `s` : ``} fo${Number(args[0]) > 1 ? `ram` : `i`} adicionada${Number(args[0]) > 1 ? `s` : ``} a este usuário...`)
break

case 'tirarxp':
if(!SoDono) return reply(mess.onlyOwner())
if(!q) return reply("Digite a quantidade de XP que deseja retirar")
if(!Number(args[0])) return reply(args[0] + " não é número...")
if(Number(args[0]) < 1) return reply("Tem que tirar ao menos 1 de XP")
if(q.includes(".")) return reply("Não pode número decimal")
AB = level2.map(i => i.id).indexOf(menc_prt ? menc_prt : sender)
level2[AB].contador -= Number(args[0])
fs.writeFileSync("./arquivos/database/func/users/leveling.json", JSON.stringify(level2))
reply(`${args[0]} experiência${Number(args[0]) > 1 ? `s` : ``} fo${Number(args[0]) > 1 ? `ram` : `i`} retirada${Number(args[0]) > 1 ? `s` : ``} deste usuário...`);
break

case 'rmlevel':
if(!SoDono) return reply(mess.onlyOwner())
if(!q && !menc_os2) return reply("Marque a pessoa que deseja apagar do contador.")
var qp = menc_os2 ? menc_os2 : q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
if(!JSON.stringify(level2).includes(qp)) return reply("O usuário mencionado não está registrado no contador.")
AB = level2.map(i => i.id).indexOf(qp)
level2.splice(AB, 1)
fs.writeFileSync("./arquivos/database/func/users/leveling.json", JSON.stringify(level2))
reply("Usuário apagado foi contador com sucesso como o(a) senhor(a) pediu...")
break

case 'rankativos': 
case 'rankativo':   
if(!isGroup) return reply(mess.onlyGroup())
var i3 = countMessage.map(i => i.groupId).indexOf(from)
var blue = countMessage[i3].numbers.map(i => i)
blue.sort((a, b) => ((a.figus == undefined ? a.figus = 0 : a.figus + a.messages + a.cmd_messages) < (b.figus == undefined ? b.figus = 0 : b.figus + b.cmd_messages + b.messages)) ? 0 : -1)
menc = [] 
blad = `*🏆 Rank dos mais ativos no grupo:* ${groupName}\n`
for ( i = 0; i < (blue.length < 5 ? blue.length : 5); i++) {
if (i != null) blad += `–\n*${i + 1}º* → @${blue[i].id.split('@')[0]}\n• Contagem de mensagens enviadas no grupo pelo usuário(a): *${blue[i].messages}*\n• Total de comandos usados pelo usuário(a) no grupo: *${blue[i].cmd_messages}*\n• Contagem de figurinhas enviadas no grupo pelo usuário(a): *${blue[i].figus}*\n`
menc.push(blue[i].id)
}
await mentions(blad, menc, true)
break

case 'rankinativo':
case 'rankinativos':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
await ClearMembersInactive()
bule = []; bule2 = []; mentioned_jid = []
for(cag of countMessage[ind].numbers){
bule2.push(cag.id)
if(cag.messages <= 1){bule.push(cag)}}
bule.sort((a, b) => ((a.messages + a.cmd_messages) < (b.cmd_messages + b.messages)) ? 0 : -1)
boardi = `🗑 *Rank dos mais inativos do grupo:* ${groupName}\n-\n`
if(bule.length == 0) boardi += '❌ Nenhum usuário inativo foi encontrado neste grupo.️'
for ( i = 0; i < (bule.length < 5 ? bule.length : 5); i++) {
if (i != null) boardi += `\n*${i + 1}º* → @${bule[i].id.split('@')[0]}\n• Contagem de mensagens enviadas no grupo pelo usuário(a): *${bule[i].messages}*\n• Total de comandos usados pelo usuário(a) no grupo: *${bule[i].cmd_messages}*\n• Contagem de figurinhas enviadas no grupo pelo usuário(a): *${bule[i].figus}*\n`
mentioned_jid.push(bule[i].id)
} 
await mentions(boardi, mentioned_jid, true);
break

case 'checkativo':
if(!isGroup) return reply(mess.onlyGroup())
if(groupIdscount.indexOf(from) < 0) return reply('O bot não tem ainda dados sobre o grupo')
var ind = groupIdscount.indexOf(from)
if(!menc_os2 || menc_jid2[1]) return reply('Marque o @ de quem deseja puxar a atividade / Só pode um por vez..')
if(numbersIds.indexOf(menc_os2) >= 0) {
var indnum = numbersIds.indexOf(menc_os2)
var RSM_CN = countMessage[ind].numbers[indnum]
await mentions(`Consulta individual da atividade do usuário @${menc_os2.split('@')[0]}\n–\n• Quantidade de mensagens enviadas pelo usuário(a): *${RSM_CN.messages}*\n• Quantidade de comandos executados pelo usuário(a): *${RSM_CN.cmd_messages}*\n• Usuário está conectado em um dispositivo: *${RSM_CN.aparelho}*\n• Figurinhas encaminhadas pelo usuário(a) no grupo: *${RSM_CN.figus}*\n–\n〘 *${groupName}* 〙`, [menc_os2], true)
} else {
await mentions(`Não tenho nenhuma informação no grupo sobre o *@${menc_os2.split('@')[0]}*.`, [menc_os2], true)
}
break

case 'vab': case 'vcprefere': case 'voceprefere':
if(!isGroup) return reply(mess.onlyGroup());
if(!isModobn) return reply(mess.onlyGroupFun(prefix));
await reagir(from, '✅'); /* Reação à mensagem, quando solicitar a execução do comando. */
await psycatgames().then(async(array) => {
const { nsfw, questions } = array[Math.floor(Math.random() * array.length)];
const { pergunta1, pergunta2 } = questions[Math.floor(Math.random() * questions.length)];
await sendPoll(yurizin, from, "Você prefere...", [pergunta1, pergunta2]); /* Enviar a enquete com as preferências sorteadas. */
}).catch(async(error) => {
await reply(mess.error(), {reagir: '❌'});
});
break

case 'eununca':
if(!isGroup) return reply(mess.onlyGroup());
if(!isModobn) return reply(mess.onlyGroupFun(prefix));
await reagir(from, '🤔'); /* Reação à mensagem, quando solicitar a execução do comando. */
await sendPoll(yurizin, from, tools.iNever[Math.floor(Math.random() * tools.iNever.length)], ["Eu nunca", "Eu já"]).catch(async(error) => {
await reply(mess.error(), {reagir: '😭'});
});
break

case 'conselhobiblico': case 'conselhosbiblico': case 'conselhosb': case 'conselhob':
await reply(advices.biblicalAdvice[Math.floor(Math.random() * advices.biblicalAdvice.length)], {reagir: '🤩'}).catch(async(error) => {
await reply(mess.error(), {reagir: '❌'});
});
break

case 'conselhos': case 'conselho':
await reply(advices.commonAdvices[Math.floor(Math.random() * advices.commonAdvices.length)], {reagir: "✅"}).catch(async(error) => {
await reply(mess.error(), {reagir: '❌'});
});
break
 
case 'cantadas': case 'cantada':
await reply(tools.Cantadas[Math.floor(Math.random() * tools.Cantadas.length)], {reagir: '✅'})
.catch(async(error) => {
await reply(mess.error(), {reagir: '❌'});
});
break

case 'fatos': case 'curiosidades':
await reply(tools.curiousFacts[Math.floor(Math.random() * tools.curiousFacts.length)], {reagir: '🙀'}).catch(async(error) => {
await reply(mess.error(), {reagir: '❌'});
});
break

case 'rankgay': case 'rankgays':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
ABC = `🏳️‍🌈 *RANK DOS 5 MAIS GAYS DO GRUPO!*\n—\n`
TMGAYS = ["Esse aí gosta de cheirar banana até umas horas kakak", "Gosta de ser dominado e chicoteado.", "Viadinho gente boa, nada contra os veados.","Esse aí roda mais que roda de caminhão.", "Mapoa é você meu amor?", "Esse aí ainda tá no armário, a franga tá presa!", "Profissional na garganta profunda!", "Essa bicha é finíssima!", "Essa aí precisa sair do closet ainda!", "Vixi esse aí e vitaminado!", "Vixi um gay vulgo irene!", "Poc fechosa, amo tu mona!"]
for (var i = 0; i < 5; i++) {
ABC += `• ${i+1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]} -> ( ${TMGAYS[Math.floor(Math.random() * TMGAYS.length)]} )\n`
}
await mentionImage(ABC, images['Brincadeiras']['Cards'].RankGay);
break

case 'rankgado': case 'rankgados':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
ABC = `🐂 *RANK DOS 5 MAIS GADO DO GRUPO:*\n—\n`
for (var i = 0; i < 5; i++) {
ABC += `• ${i+1}° *[${Math.floor(Math.random() * 100)}%]* @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
await mentionImage(ABC, images['Brincadeiras']['Cards'].RankGado);
break

case 'rankcorno': case 'rankcornos':
if(!isGroup) return reply(mess.onlyGroup());
if(!isModobn) return reply(mess.onlyGroupFun(prefix));
ABC = `🐂 *RANK DOS 5 MAIS CORNOS DO GRUPO!*\n—\n`
TMCRN = ["Familiar, leva até chifre com os parentes!", "Masoquista, leva chifre mas não larga a mulher!", "Atéu, leva chifre e não acredita!", "Político, só faz promessa e não cumpre o que fala!", "Esse é que leva chifres, vai embora e volta por causa das crianças.", "Xuxa, o que não larga a mulher por causa dos baixinhos.", "Famoso, aquele que por onde passa é reconhecido como tal.", "Inflação, a cada dia que passa o chifre aumenta."]
for (var i = 0; i < 5; i++) {
ABC += `• ${i+1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]} -> ( ${TMCRN[Math.floor(Math.random() * TMCRN.length)]} )\n`
}
await mentionImage(ABC, images['Brincadeiras']['Cards'].RankCorno);
break

case 'surubao': case 'suruba':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if (!q) return reply(`Eita, coloque o número de pessoas após o comando.`)
if (Number(q) > 5) return reply("Coloque um número menor, ou seja, abaixo de *5*.")
emojiskk = ["🥵", "😈", "🫣", "😏"];
emojis = emojiskk[Math.floor(Math.random() * emojiskk.length)];
frasekk = [`tá querendo relações sexuais a ${q}, topa?`, `quer que *${q}* pessoas venham de *chicote, algema e corda de alpinista*.`, `quer que ${q} pessoas der tapa na cara, lhe chame de cachorra e fud3r bem gostosinho...`]
context = frasekk[Math.floor(Math.random() * frasekk.length)]  
ABC = `${emojis} @${sender.split('@')[0]} ${context}\n\n`
for (var i = 0; i < q; i++) {
ABC += `@${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
await mentionGif(ABC, "");
break

case 'rankgostosos': case 'rankgostoso':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
ABC = `*RANK DOS 5 MAIS GOSTOSOS DO GRUPO* 😏🔥\n—\n`
TMGSTS = ["Você tá olhando para um semi Deus!", "Mds, me apaixonei! Passa o insta gatinho?", "Ei ei gatinhas, o gostosão do grupo chegou!", "Gostoso? É, pena que é homem galinha!", "Não sei se comparo esse gostoso com o Ares Ridalgo!", "Cruz credo, porque tu tá aqui? Tu é feio desgraça!"]
for (var i = 0; i < 5; i++) {
ABC += `• ${i+1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]} -> ( ${TMGSTS[Math.floor(Math.random() * TMGSTS.length)]} )\n`
}
await mentionImage(ABC, images['Brincadeiras']['Cards'].RankGostoso);
break

case 'ranknazista': case 'ranknazistas':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
ABC = `*💂‍♂RANK DOS 5 MAIS NAZISTAS DO GRUPO 卐🤡*\n—\n`
TMNZTS = ["Soldado nazista, marcha com estilo.‍", "Comandante implacável, lidera com rigor.️", "Nazista estrategista, conquista territórios.️", "Mestre da ordem, disciplina em primeiro lugar.", "Soldado de elite, Nazista hardcore.", "General invencível, domina as batalhas.", "Nazista disciplinado, fiel à causa.", "Líder autoritário, impõe respeito.️", "Soldado feroz, nazismo no coração.", "Mestre da propaganda, convence com palavras.️", "Nazista moderno, tecnologia na guerra.", "Máquina de guerra, implacável e eficiente.️","Comandante supremo, nazismo eterno.", "Soldado leal, marcha em nome da ideologia.", "Nazista clássico, revive o passado.", "General poderoso, Nazista do século XXI.", "Comandante inabalável, Nazista de honra.", "Soldado devoto, nazismo no sangue.", "Mestre da retórica nazista, convence a todos.", "Nazista visionário, futuro sob a suástica."];
for (var i = 0; i < 5; i++) {
ABC += `• ${i+1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]} -> ( ${TMNZTS[Math.floor(Math.random() * TMNZTS.length)]} )\n`
}
await mentionImage(ABC, images['Brincadeiras']['Cards'].RankNazista);
break

case 'rankotaku': case 'rankotakus':
if(!isGroup) return reply(mess.onlyGroup());
if(!isModobn) return reply(mess.onlyGroupFun(prefix));
ABC = `*㊙ RANK DOS 5 MAIS OTAKU DO GRUPO ( ˶•̀ _•́ ˶)*\n—\n`
for (var i = 0; i < 5; i++) {
ABC += `• ${i+1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
await mentionImage(ABC, images['Brincadeiras']['Cards'].RankOtaku);
break

case 'rankpau':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
ABC = `*RANK DOS 5 PAU MAIOR DO GRUPO 📏*\n—\n`
TMPAU = ["Pequeno pra cact, se mata maluco", `Pequenininho chega ser até fofo`, `Menor que meu dedo mindinho pequeno demais`, `Até que dá sentir, tá na média`, `Até que é grandinho`, `Grande até!`, `Gigantesco igual meu braço`, `Enorme quase chega no útero`, `Grandão demais em, e uii`, `Vara de pegar manga, grande demais, como sai na rua assim??`, "Que grandão em, nasceu metade animal"]
for (var i = 0; i < 5; i++) {
ABC += `• *${i+1}°* @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]} -> ( ${TMPAU[Math.floor(Math.random() * TMPAU.length)]} )\n`
}
await mentionImage(ABC, images['Brincadeiras']['Cards'].RankPau);
break

case 'mencionar':
if (!q) return reply(`Você usou o comando de forma incorreta, use a correta: ${prefix}mencionar corno`);
if (!isGroup) return reply(`Esta brincadeira só funciona em grupos.`);
if(!isModobn) return reply(mess.onlyGroupFun(prefix));
await mention(`Estou mencionando o *${q}* do grupo: *@${groupMembers[Math.floor(Math.random() * groupMetadata.participants.length)].id.split('@')[0]}*`);
break

case 'jogodavelha':
if(!isGroup) return reply(mess.onlyGroup());
if(!menc_jid2) return reply("Marque junto com o comando, o @ do usuário que deseja desafiar..");
joguinhodavelhajs.push(sender)
fs.writeFileSync('./arquivos/database/groups/games/tictactoe/ttt-player1.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.push(from)
fs.writeFileSync('./arquivos/database/groups/games/tictactoe/ttt-player2.json', JSON.stringify(joguinhodavelhajs2))
if(fs.existsSync(`./arquivos/database/groups/games/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
const matrix = boardnow._matrix;
await mention( `『 *🎮 Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸ 🕹️* 』\n—\n💢 Alguém está jogando o *jogo da velha* no momento! Por favor, aguarde o término da partida para iniciar a próxima.\n—\n• Atualmente está ocorrendo uma disputa entre os jogadores: ''@${boardnow.X} VS @${boardnow.O}'. Quem será que ganha? Tire seus palpites!`)
}
if(argss.length === 1) return reply(`Jogue com alguém, para inicar a partida : ${prefix + command} @membro.`);
const boardnow = setGame(`${from}`);
console.log(colors.magenta("[ JOGO DA VELHA ]"), colors.white(`Iniciado - Sessão: ${boardnow.session}`));
boardnow.status = false;
boardnow.X = sender.replace("@s.whatsapp.net", "");
boardnow.O = argss[1].replace("@", "");
var blabord = [`${boardnow.X}`, `${boardnow.O}`]
fs.writeFileSync(`./arquivos/database/groups/games/tictactoe/db/${from}.json`,
JSON.stringify(boardnow, null, 2)
);
await mentions( `『 *📌 ᎬՏᏢᎬᎡᎪΝᎠϴ ϴ ϴᏢϴΝᎬΝͲᎬ ⚔️* 』\n—\n@${sender.replace("@s.whatsapp.net", "")} está te desafiando para uma partida de jogo da velha...\n[${argss[1]}], use *'S'* para aceitar ou *'N'* para não aceitar...\n—\n• Em caso de problemas, marque algum administrador para resetar o jogo com o comando ${prefix}rv`, [sender, menc_jid], true);
break

case 'resetarvelha':
case 'resetavelha':  
case 'resetarv':
case 'resetav': 
case 'resetvelha':
case 'rv': 
if(!isJoguin && !isGroupAdmins) return reply(`Fale com quem iniciou o jogo, só ele pode resetar, ou então algum admin.`)
if(fs.existsSync("./arquivos/database/groups/games/tictactoe/db/" + from + ".json")) {
DLT_FL("./arquivos/database/groups/games/tictactoe/db/" + from + ".json");
reply(`Jogo da velha resetado com sucesso nesse grupo!`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./arquivos/database/groups/games/tictactoe/ttt-player1.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./arquivos/database/groups/games/tictactoe/ttt-player2.json', JSON.stringify(joguinhodavelhajs2))
} else {
reply(`Não a nenhuma sessão em andamento...`);
}
break

case "ppt":
if(args.length < 1) return reply(`Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`);
ppt = ["pedra", "papel", "tesoura"];
ppy = ppt[Math.floor(Math.random() * ppt.length)];
ppg = Math.floor(Math.random() * 1) + 10
pptb = ppy
if((pptb == "pedra" && args == "papel") ||
(pptb == "papel" && args == "tesoura") ||
(pptb == "tesoura" && args == "pedra")) {
var vit = "vitoria"
} else if((pptb == "pedra" && args == "tesoura") ||
(pptb == "papel" && args == "pedra") ||
(pptb == "tesoura" && args == "papel")) {
var vit = "derrota"
} else if((pptb == "pedra" && args == "pedra") ||
(pptb == "papel" && args == "papel") ||
(pptb == "tesoura" && args == "tesoura")) {
var vit = "empate"
} else if(vit = "undefined") {
return reply(`Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`)
}
if(vit == "vitoria") {var tes = "Vitória do jogador"}
if(vit == "derrota") {var tes = "A vitória é do BOT"} 
if(vit == "empate") {var tes = "O jogo terminou em empate"}
reply(`*${NomeDoBot}* jogou ${pptb}, o jogador jogou: ${args} -> *${tes}*`);
break

case 'icms':
txt = q.replace(" |", "|").replace("| ", "|").replace(" | ", "|");
var [result1, result2] = txt.split("|");
if(!q.includes("|")) return reply(mess.syntaxIcms(prefix));
data = await fetchJson(API_URL+`/api/outros/icms?valor=${encodeURIComponent(result1)}&ddd=${encodeURIComponent(result2)}&apikey=`+API_KEY_YURI);
await yurizin.sendMessage(from, {text: mess.icmsResult(data)}, {quoted: selo}).catch(async(error) => {
return reply(mess.error())
})
break

case 'bot':
soundft = await fetch(qviado).then(v => v.buffer());
await yurizin.sendMessage(from, {audio: soundft, mimetype: 'audio/mpeg', ptt: true}, {quoted: selo});
break

case 'videocontrario':
case 'reversevid':
if((isMedia && info.message.videoMessage || !isQuotedImage) && !q.length <= 1) { 
reply(mess.wait())
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, async(err) => {
await DLT_FL(media)
if(err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
await yurizin.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: selo})
DLT_FL(ran)
})
} else {
reply("Marque um vídeo..")
}
break 

case 'videolento':
case 'slowvid':  
if((isMedia && info.message.videoMessage || !isQuotedImage) && !q.length <= 1) {
reply(mess.wait()) 
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, async(err) => {
await DLT_FL(media)
if(err) return reply(`Error: ${err}`)
buffer453 = fs.readFileSync(ran)
await yurizin.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: selo})
await DLT_FL(ran)
})
} else {
reply("Marque um vídeo..")
}
break

case 'videorapido':
case 'fastvid':  
if((isMedia && info.message.videoMessage || !isQuotedImage) && !q.length <= 1) {
reply(mess.wait())
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, async(err) => {
await DLT_FL(media)
if(err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
await yurizin.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: selo })
await DLT_FL(ran)
})	
} else {
reply("Marque o vídeo..")
}
break

case 'grave2':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(mess.wait())
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, async(err, stderr, stdout) => {
await DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
await yurizin.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: selo})
await DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'grave':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(mess.wait())
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, async(err, stderr, stdout) => {
await DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
await yurizin.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: selo})
await DLT_FL(ran)
})
} else {
reply("Marque o áudio..");
}
break

case 'adolesc':
case 'vozmenino':  
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(mess.wait())
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, async(err, stderr, stdout) => {
await DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.');
hah = fs.readFileSync(ran)
await yurizin.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: selo})
await DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break  

case 'tomp3':
if((isMedia && !info.message.imageMessage || isQuotedVideo)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.videoMessage
reply(mess.wait())
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane 
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, async(err) => { 
await DLT_FL(media)
if(err) return reply('Ocorreu uma falha ao fazer a conversão do vídeo para mp3.')
buffer = fs.readFileSync(ran)
await yurizin.sendMessage(from, {audio: buffer, mimetype: 'audio/mpeg'}, {quoted: selo})
await DLT_FL(ran)
})
} else {
reply("Marque o vídeo para transformar em áudio por favor...")
}
break

case 'bass3':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(mess.wait())
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, async(err, stderr, stdout) => {
await DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
await yurizin.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: selo})
await DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'bass': 
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(mess.wait())
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, async(err, stderr, stdout) => {
await DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
await yurizin.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: selo})
await DLT_FL(ran)
})
} else {
reply("Marque o áudio...")
}
break

case 'bass2': 
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(mess.wait())
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, async(err, stderr, stdout) => {
await DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
await yurizin.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: selo})
await DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'estourar': 
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(mess.wait());
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=90:width_type=o:width=2:g=30 ${ran}`, async(err, stderr, stdout) => {
await DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
await yurizin.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: selo})
await DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'fast':
case 'audiorapido':  
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(mess.wait())
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, async(err, stderr, stdout) => {
await DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
await yurizin.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: selo})
await DLT_FL(ran)
})
} else {
reply("Marque o áudio...");
}
break

case 'esquilo':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(mess.wait())
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.7,asetrate=65100" ${ran}`, async(err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
await yurizin.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: selo})
await DLT_FL(ran)
})
} else {
reply("Marque o áudio...");
}
break

case 'audiolento': 
case 'slow':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(mess.wait());
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, async(err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.');
hah = fs.readFileSync(ran)
await yurizin.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: selo})
await DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'convite':
if(!budy.includes("chat.whatsapp.com")) return reply("Cadê o link do grupo que você deseja que eu entre?")  
cnvt = args.join(" ")
reply(`O convite para o bot entrar em seu grupo, foi enviado, espere o dono aceitar..`)
await yurizin.sendMessage(nmrdn, {text: mess.groupInvitation(sender, cnvt, prefix)}, {quoted: info})
break

case 'recusar':
if(!SoDono) return reply(mess.onlyOwner());
await yurizin.sendMessage(`${q}@s.whatsapp.net`, {text: `Olá amigo(a), sinto muito dizer, mas seu convite foi recusado.`}, {quoted: info});
break

case 'join': case 'entrar':
if(!SoDono) return reply(mess.onlyOwner())
string = args.join(' ')
if(!string) return reply('Insira um link de convite ao lado do comando.')
if(string.includes('chat.whatsapp.com')) return reply('Ops, verifique o link que você inseriu.');
link = string.split('app.com/')[1]
try {
await yurizin.groupAcceptInvite(`${link}`)
} catch(erro) {
if(String(erro).includes('resource-limit')) return reply('O grupo já está com o alcance de 1mil membros.');
if(String(erro).includes('not-authorized')) return reply('Não foi possível entrar no grupo por motivo que você foi banido por um adm.');
}
break

case 'sip': case 'ip': 
if (!q) return reply(`Informe o ip que você deseja! *Exemplo:* ${prefix+command} 8.8.8.8`)
try {
ip = await axios.get(`https://ipwhois.app/json/${encodeURIComponent(q)}`);
await yurizin.sendMessage(from, {image: {url: `https://maps.googleapis.com/maps/api/streetview?size=1400x1400&location=${ip.data.latitude},%20${ip.data.longitude}&sensor=false&key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg`}, caption: mess.searchIpAdress(ip)}, {quoted: info});
await yurizin.sendMessage(from, {location: {degreesLatitude: ip.data.latitude,degreesLongitude: ip.data.longitude, addrees: ''}}, {quoted: info});
} catch(error) {
reply(mess.error())
}
break

case 'cep': case 'scep': 
if (!q) return reply(`Cadê o cep?`)
try {
res = await fetchJson(API_URL+`/api/outros/cep?code=${q}&apikey=`+API_KEY_YURI)
await reply(mess.searchCep(res))
} catch(error) {
await reply(mess.error())
}
break

case 'cassino': case 'slot':
if(!isGroup) return reply(mess.onlyGroup());
if(!isModoCoins) return reply(`Este comando só pode ser utilizado quando o sistema ${prefix}modocoins está ativado no grupo.`)
if(RG_SCOINS[ID_G_COINS].usus[ID_USU_COINS].chances.cassino > 4) return reply(`Bye-bye, volte amanhã amiguinho(a)! Você consumiu todas suas 5 chances do cassino de hoje.`);
if(RG_SCOINS[ID_G_COINS].usus[ID_USU_COINS].coins < 29) return reply('Saldo insuficiente! Para usar os comandos de Coins, você deve ter pelo menos 30 S-Coins em sua carteira.');
!RG_SCOINS[ID_G_COINS].usus[ID_USU_COINS] ? RG_SCOINS[ID_G_COINS].usus[ID_USU_COINS].chances.cassino = 1 : RG_SCOINS[ID_G_COINS].usus[ID_USU_COINS].chances.cassino += 1;
CoinsUpdate(RG_SCOINS);
var getResultSlot = ["🍓", "🍒", "🍎", "🍉"];
V_ = [0, 1, 2];
V_.forEach(function(one, two, three) {
    V_[two] = getResultSlot[Math.floor(Math.random() * getResultSlot.length)]
})
async function slot_(text) {
reply(`${text}\n[${V_[0]} | ${V_[1]} | ${V_[2]}] - Você possuí *${RG_SCOINS[ID_G_COINS].usus[ID_USU_COINS].chances.cassino}/5* chances no cassino por hoje.`);
}
if (V_[0] === V_[1] && V_[1] === V_[2] && V_[0] === V_[2]) {
await SYSTEM_COIN.AdicionarCoins(sender, 65);
slotMess = ['Parece que a sorte estava esperando por você! Você acaba de levantar 65 S-Coins, aproveite você é digno de ganhar. 💰🌟', 'Que reviravolta! Você saiu do cassino com 65 S-Coins no bolso! Quem disse que os jogos de azar não valem a pena? 🌟💰', 'Surpreendente! A sorte sorriu para você esta noite no cassino, você ganhou 65 S-Coins como recompensa! 🎰✨'];
slot_(slotMess[Math.floor(Math.random() * slotMess.length)]);
} else {
await SYSTEM_COIN.RemoverCoins(sender, 5);
slotLoss = ['Que pena! Você perdeu, o que resultará na perda de 5 S-Coins. Mas não fique triste, na próxima você ganha! 🙏🏼🌟', 'Você perdeu, o que resultará a perda de 5 S-Coins! Com o tempo você recuperará e ultrapassará o valor perdido. 😇🌟', 'Hoje a sorte não estava de bom humor com sua pessoa, você perdeu, o que vai resultar a perda de 5 S-Coins. 🥱☠️'];
slot_(slotLoss[Math.floor(Math.random() * slotLoss.length)])
}
break

case 'coins': case 'estatisticas': 
if(!isGroup) return reply(mess.onlyGroup());
if(!isModoCoins) return reply(`Este comando só pode ser utilizado quando o sistema ${prefix}modocoins está ativado no grupo.`);
await mention(`${tempo}, @${sender.split("@")[0]}, aqui está suas estatísticas:\n\t• Saldo atual: '${RG_SCOINS[ID_G_COINS]?.usus[ID_USU_COINS]?.coins || 0} S-Coins'.\n—\n💰🌟 Chances:\n\t• Chances restantes para usar na _mineração de itens_: *${RG_SCOINS[ID_G_COINS]?.usus[ID_USU_COINS]?.chances.minerar || 0}/6.*\n\t• Chances restantes para usar no _cassino fictício_: *${RG_SCOINS[ID_G_COINS]?.usus[ID_USU_COINS]?.chances.cassino || 0}/5.*\n\t• Chances restantes na Sab's Bet _(plataforma de apostas)_: *${RG_SCOINS[ID_G_COINS]?.usus[ID_USU_COINS]?.chances.bet || 0}/6.*`);
break

case 'sorteiocoins': case 'sortcoins':
if(!isGroup) return reply(mess.onlyGroup());
if(!isModoCoins) return reply(`Este comando só pode ser utilizado quando o sistema ${prefix}modocoins está ativado no grupo.`);
if(!SoDono) return reply(mess.onlyOwner());
if(!q) return reply("️️😭🌟 Cadê o valor?");
if(q.match(/[a-z]/i)) return reply("️️😭🌟 Ô chefe(a), assim você me quebra colocando letras invés de ser somente números. Por favor, um valor numérico justo para sortear...");
var LuckyUser = RG_SCOINS[ID_G_COINS].usus[Math.floor(Math.random() * RG_SCOINS[ID_G_COINS].usus.length)].id;
await mention(`🎉🌟 Parabéns @${LuckyUser.split("@")[0]}, você acaba de ganhar: ${q.trim()} S-Coins. *Gaste com moderação!*`);
SYSTEM_COIN.AdicionarCoins(LuckyUser, Math.floor(q.trim()));
break

case 'dadoapostado':
if(!isGroup) return reply(mess.onlyGroup());
if(!isModoCoins) return reply(`Este comando só pode ser utilizado quando o sistema ${prefix}modocoins está ativado no grupo.`);
var [numberDado, amountBet] = q.split('/');
if(!numberDado) return await reply(`Hmm, não sabe como jogar o Dado Apostado? Leia o tutorial abaixo:\n\t*1° PASSO* → Escolha um número do dado de 1 à 6, por favor;\n\t*2° PASSO* → Escolha um valor para apostar em sua sorte;\n\t*3° PASSO* → Digite o comando usado com o número do dado e o valor apostado, primeiro você coloca o número do dado e depois o valor que você escolheu para apostar.\n—\n📌 Exemplo: _${prefix+command} Número do dado/Valor que deseja apostar._\n⚠️ Observação: _Caso o bot ganhar a aposta, você perderá o valor que apostou, se você ganhar vice-versa._`);
if(!amountBet) return reply(`Você esqueceu de colocar o valor que você deseja apostar...`);
if(SYSTEM_COIN.VerificarCampo(sender, "coins") < parseInt(amountBet)) return reply(`Ops, você não tem essa quantidade de Coins para apostar.\n• Verifique seu saldo usando:  '${prefix}coins' e depois volte para apostar!`);
if(!Number(numberDado)) return reply(`${numberDado} não é número.`);
if(!Number(amountBet)) return reply(`${amountBet} não é número.`);
if(Number(amountBet) > 500) return reply(`Não é possível apostar mais de 500 S-Coins.`);
if(Number(numberDado) < 1 || Number(numberDado) > 6) return reply(`O número está inválido, pois não existe um dado com a quantidade de '${numberDado}'. Por favor, informe um número de 1 à 6!`);
await reagir(from, "🎲");
await reply(`Sorteando dado(s)! 🌟⏳️`);
drawQuantity = Math.floor(Math.random() * 5) + 1;
await yurizin.sendMessage(from, {sticker: {url: `./arquivos/database/assets/webp/dados/${drawQuantity}.webp`}}, {quoted: info});
if(Number(drawQuantity) === Number(numberDado)) {
setTimeout(async() => {
WINN = [`🎲🌟 Parabéns @${sender.split('@')[0]}, você acaba de ganhar ${parseInt(amountBet)} S-Coins, por ter acertado a previsão do dado.`, `🎉💰 Parabéns @${sender.split('@')[0]}, você ganhou ${parseInt(amountBet)} S-Coins, por acertar a previsão do dado.`];
await mention(WINN[Math.floor(Math.random() * WINN.length)]);
await SYSTEM_COIN.AdicionarCoins(sender, parseInt(amountBet));
}, 5000)
} else {
setTimeout(async() => {
PERDA = [`🤧 Dessa vez *@${sender.split("@")[0]}*, você não conseguiu acertar a previsão! Foi descontado de sua carteira: *${parseInt(amountBet)} S-Coins*!`, `❌😨 Infelizmente *@${sender.split("@")[0]}*, você acaba de perder *${parseInt(amountBet)} S-Coins* por errar a previsão do dado.`];
await mention(PERDA[Math.floor(Math.random() * PERDA.length)]);
await SYSTEM_COIN.RemoverCoins(sender, parseInt(amountBet));
}, 5000);
}
break

case 'minerar': case 'minerarcoins':
if(!isGroup) return reply(mess.onlyGroup());
if(!isModoCoins) return reply(`Este comando só pode ser utilizado quando o sistema ${prefix}modocoins está ativado no grupo.`);
if(RG_SCOINS[ID_G_COINS].usus[ID_USU_COINS].chances.minerar > 5) return reply(`Sinto muito, você não tem mais chance para minerar hoje, porque você completou: 6/6.`);
!RG_SCOINS[ID_G_COINS].usus[ID_USU_COINS] ? RG_SCOINS[ID_G_COINS].usus[ID_USU_COINS].chances.minerar = 1 : RG_SCOINS[ID_G_COINS].usus[ID_USU_COINS].chances.minerar += 1;
CoinsUpdate(RG_SCOINS); 
aleatValor = Math.floor(Math.random() * 2);
rndg = Math.floor(Math.random() * 300);
if(aleatValor == 0) {
randomMining = [
  `Você estava minerando nas ilhas savitas e encontrou em seu caminho ${Number(rndg)} S-Coins em minerais preciosos! 💰`, 
  `🗣💰 Você invadiu uma mina proibida e quando estava fazendo a mineração achou ${Number(rndg)} S-Coins em troca de ouro!`, 
  `💎👷🏻‍♀️ Você invadiu uma mina de diamantes proibida, enquanto você estava fazendo a mineração, encontrou 2 diamantes equivalentes à ${Number(rndg)} S-Coins.`, 
  `⛏️👷🏻‍♀️ Você escavou uma mina de ouro subterrânea em Minas Gerais e encontrou ${Number(rndg)} S-Coins!`, 
  `🛫 Em uma de suas viagens para o interior da Flórida, você embarcou uma busca ao tesouro perdido e encontrou em seu caminho um cordão de ouro perdido avaliado em ${Number(rndg)} S-Coins.`, 
  `😱🌟 Você invadiu a casa do vizinho e encontrou ${Number(rndg)} S-Coins escavando o quintal dele.`, 
  `⛏️👷🏻‍♀️✨️ Você acaba de invadir em uma mina de esmeraldas desconhecida e encontrou ${Number(rndg)} S-Coins`, 
  `🛥️💰 Você encontrou nas profundezas do oceanos, um tesouro em um navio antigo equivalente à ${Number(rndg)} S-Coins.`, 
  `🌟 Você foi chamado para trabalhar na mina e encontrou milhares de resíduos! Como recompensa, você acaba de ganhar ${Number(rndg)} S-Coins. ✅`, 
  `Você foi chamado para trabalhar na mina e encontrou muitos tesouros perdidos!👷🏼🌟 Como recompensa, você acaba de ganhar ${Number(rndg)} S-Coins.`
];
await reply(randomMining[Math.floor(Math.random() * randomMining.length)]);
await SYSTEM_COIN.AdicionarCoins(sender, rndg)
} else if(aleatValor != 0) {
miningFailureRX = [
  "😥 Em sua tentativa de mineração, não foi possível evidenciar nenhum mineral valioso!",
   "❌ Em sua tentativa de mineração, não foi possível evidenciar nenhuma joia valiosa em sua caçada misteriosa! 🌟", 
   "⛏️💎 Em sua tentativa de mineração em Minas Gerais no Brasil, um estado particularmente rico em diamantes, mas você não deu sorte em sua escavação.", 
   "❌🌟 Em sua tentativa de mineração, não foi possível evidenciar nenhum minério validoso.", 
   "Particularmente, dessa vez você não deu sorte em sua mineração! Mas não desista, você pode ter muitas chances de sucssso ainda hoje. Ouça meus conselhos! 🌟",
   "A sorte virou sua inimiga por hoje! Você não conseguiu obter nenhum minério em sua caçada misteriosa."
];
miningFailure = miningFailureRX[Math.floor(Math.random() * miningFailureRX.length)];
miningFailure += RG_SCOINS[ID_G_COINS].usus[ID_USU_COINS].chances.minerar >= 5 ? "\n> Essa foi sua última chance, até amanhã amiguinho! Bye, bye!" : `\n> Ainda lhe resta ${RG_SCOINS[ID_G_COINS].usus[ID_USU_COINS].chances.minerar}/6 para obter Coins por hoje.`;
await reply(miningFailure);
}
break

case 'sb_bet':
if(!isGroup) return reply(mess.onlyGroup());
if(!isModoCoins) return reply(`Este comando só pode ser utilizado quando o sistema ${prefix}modocoins está ativado no grupo.`);
if(RG_SCOINS[ID_G_COINS].usus[ID_USU_COINS].chances.bet > 5) return reply(`Sinto muito, você não tem mais chance para bet hoje, porque você completou: 6/6.`);
!RG_SCOINS[ID_G_COINS].usus[ID_USU_COINS] ? RG_SCOINS[ID_G_COINS].usus[ID_USU_COINS].chances.bet = 1 : RG_SCOINS[ID_G_COINS].usus[ID_USU_COINS].chances.bet += 1;
CoinsUpdate(RG_SCOINS); 
aleatValor = Math.floor(Math.random() * 2);
rndg = Math.floor(Math.random() * 300);
const JogosAleatory = [`São Paulo`, `Corinthians`, `Santos`, `Palmeiras`, `Bragantino`, `Cuiabá`, `Atlético-GO`, `Criciúma`, `Athletico-PR`, `Atlético-Mineiro`]
const JogosAleatory2 = [`Fluminense`, `Juventude`, `Grêmio`, `Vitória`, `Vasco`, `Cruzeiro`, `Bahia`, `Fortaleza`, `Internacional`, `Flamengo`, `Botafogo`]
const TimesIngleses = [`Liverpool`, `Chelsea`, `Arsenal`, `City`, `Brighton`, `Fulham`, `Nottingham Forest`, `Aston Vila`, `Bournemouth`, `Tottenham`]
const TimesIngleses2 = [`Brentford`, `NewCastle`, `Manchester United`, `West Ham`, `Everton`, `Leicester City`, `Crystal Palace`, `Ipswich Town`, `Wolves`, `Southampton`]
if(aleatValor == 0) {
randomMining = [
  `Você estava em sua sala quando aposta no _${JogosAleatory[Math.floor(Math.random() * JogosAleatory.length)]} vs ${JogosAleatory2[Math.floor(Math.random() * JogosAleatory2.length)]}_ pelo brasileirão. Você decide apostar e ganha ${Number(rndg)}. Parabéns! 💰`, 
  `🗣💰 Você decidiu ir assistir a um jogo inglês em sua sala de jantar, você estava assistindo a _${TimesIngleses[Math.floor(Math.random() * TimesIngleses.length)]} vs ${TimesIngleses2[Math.floor(Math.random() * TimesIngleses2.length)]}_. O resultado foi ${Math.floor(Math.random() * 5)} A ${Math.floor(Math.random() * 4)} para o time escolhido, ganhando no total: ${Number(rndg)}.`,
  `🎮 Você estava na sua sala jogando videogame quando decidiu apostar no jogo _${JogosAleatory[Math.floor(Math.random() * JogosAleatory.length)]} vs ${JogosAleatory2[Math.floor(Math.random() * JogosAleatory2.length)]}_. Seu palpite estava certo e você ganhou ${Number(rndg)}! Parabéns pela vitória! 💰`,
  `📺 Enquanto assistia à final do brasileirão na TV da sua sala, decidiu apostar em _${JogosAleatory[Math.floor(Math.random() * JogosAleatory.length)]} vs ${JogosAleatory2[Math.floor(Math.random() * JogosAleatory2.length)]}_. Com o placar a seu favor, você faturou ${Number(rndg)}! Que sorte! 🔥💰`,
  `🛋 Relaxando no sofá, você fez sua aposta em _${JogosAleatory[Math.floor(Math.random() * JogosAleatory.length)]} vs ${JogosAleatory2[Math.floor(Math.random() * JogosAleatory2.length)]}_. O time escolhido venceu, e você ganhou ${Number(rndg)}! Excelente escolha! ⚽💸`,
  `🍴 Durante o almoço, você decidiu arriscar no jogo _${TimesIngleses[Math.floor(Math.random() * TimesIngleses.length)]} vs ${TimesIngleses2[Math.floor(Math.random() * TimesIngleses2.length)]}_. O placar foi ${Math.floor(Math.random() * 4)} A ${Math.floor(Math.random() * 4)}, e sua aposta rendeu incríveis ${Number(rndg)}! 🤑`,
  `🏠 Estava na varanda pensando nos jogos da rodada quando resolveu apostar em _${TimesIngleses[Math.floor(Math.random() * TimesIngleses.length)]} vs ${TimesIngleses2[Math.floor(Math.random() * TimesIngleses2.length)]}_. O jogo foi emocionante e você faturou ${Number(rndg)}! Parabéns! 🌟⚽`,
  `🎉 Você estava animado para assistir ao clássico _${JogosAleatory[Math.floor(Math.random() * JogosAleatory.length)]} vs ${JogosAleatory2[Math.floor(Math.random() * JogosAleatory2.length)]}_. Com um palpite certeiro, você ganhou ${Number(rndg)} e comemorou muito! 💵⚡`,
  `📱 Durante uma pausa no trabalho, você apostou em _${TimesIngleses[Math.floor(Math.random() * TimesIngleses.length)]} vs ${TimesIngleses2[Math.floor(Math.random() * TimesIngleses2.length)]}_. O resultado foi ${Math.floor(Math.random() * 3)} A ${Math.floor(Math.random() * 2)}, e você faturou ${Number(rndg)}! Sensacional! 💰⚽`,
  `🏟 Você acompanhava o brasileirão ao vivo quando decidiu apostar em _${JogosAleatory[Math.floor(Math.random() * JogosAleatory.length)]} vs️ ${JogosAleatory2[Math.floor(Math.random() * JogosAleatory2.length)]}_. A vitória veio e, junto com ela, ${Number(rndg)} para sua conta! 🔥💰`,
  `🍹 Enquanto relaxava com um suco na cozinha, você apostou em _${TimesIngleses[Math.floor(Math.random() * TimesIngleses.length)]} vs️ ${TimesIngleses2[Math.floor(Math.random() * TimesIngleses2.length)]}_. Com o placar de ${Math.floor(Math.random() * 5)} A ${Math.floor(Math.random() * 4)}, você ganhou ${Number(rndg)}! Que sorte! 🤑`,
  `🏡 No conforto de casa, você decidiu apostar em _${JogosAleatory[Math.floor(Math.random() * JogosAleatory.length)]} vs ${JogosAleatory2[Math.floor(Math.random() * JogosAleatory2.length)]}_. O resultado foi uma vitória para o seu time e ${Number(rndg)} na sua conta! Parabéns! ⚽💸`
];
await reply(randomMining[Math.floor(Math.random() * randomMining.length)]);
await SYSTEM_COIN.AdicionarCoins(sender, rndg)
} else if(aleatValor != 0) {
miningFailureRX = [
  "⚽ Hoje a sorte não brilhou no seu jogo, nenhum gol foi encontrado! Mas mantenha o foco, a próxima partida pode ser sua vez de vencer!",
  "Infelizmente, a rede não balançou para você dessa vez! Continue tentando, o próximo gol pode ser seu! ⚽",
  "🤔 Nada de gols válidos nesta tentativa, mas lembre-se: o jogo só acaba quando você decide parar de jogar! ⚡",
  "😥 Essa partida passou em branco, mas não desista! Ainda há muito jogo pela frente para mudar sua sorte! ⚽💪",
  "Hoje os gols não vieram, mas amanhã é um novo dia para virar o placar! Não perca a confiança! 🌟⚡",
  "A rede não balançou desta vez, mas o próximo chute pode ser decisivo! Continue firme! ⚽",
  "Hoje os gols ficaram só na imaginação, mas não desista! O jogo sempre oferece novas oportunidades! 🌟",
  "Nenhum gol válido nesta tentativa, mas grandes vitórias começam com persistência! Vamos lá! ⚽💪",
  "A partida não foi favorável, mas o próximo jogo pode ser o seu momento de brilhar! Não pare agora! ⚡",
  "Mesmo sem gols hoje, a emoção do jogo continua! Confie no seu potencial e siga em frente! 🚀⚽",
  "A sorte tirou um dia de folga, mas ela sempre volta para quem não desiste! Continue jogando! ⚽",
  "💼 Nada de gols por enquanto, mas lembre-se: grandes resultados vêm para quem persiste! 🌟",
  "Hoje não foi sua rodada de sorte, mas o próximo gol pode mudar tudo! Mantenha o espírito esportivo! ⚽✨",
  "Os gols escaparam desta vez, mas cada tentativa é um passo para a vitória! Continue confiante! ⚡",
  "Mesmo sem sucesso neste jogo, nunca subestime o poder da próxima jogada! Acredite em você! 🌟"
];
miningFailure = miningFailureRX[Math.floor(Math.random() * miningFailureRX.length)];
miningFailure += RG_SCOINS[ID_G_COINS].usus[ID_USU_COINS]?.chances.bet >= 5 ? "\n> Essa foi sua última chance, até amanhã amiguinho! Bye, bye!" : `\n> Ainda lhe resta ${RG_SCOINS[ID_G_COINS].usus[ID_USU_COINS].chances.bet}/6 para obter Coins por hoje.`;
await reply(miningFailure);
}
break

case 'modocoins':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(args.length < 1) return reply(`Use 1 pra ativar ou 0 pra desativar. Caso deseja ativar, use essa forma: ${prefix+command} 1, caso seja desativar e só trocar o 1 pelo 0.`)
if(Number(args[0]) === 1) {
if(isModoCoins) return await mention(`'@${sender.split("@")[0]}' o sistema de Moedas já está ativado neste grupo atualmente, para desativar troque o 1 por 0.`);
dataGp[0].isModoCoins = true
updateGroup(dataGp)
await mention(`O sistema de Moedas neste grupo foi ativado com sucesso pelo administrador(a): '@${sender.split("@")[0]}'.`);
} else if(Number(args[0]) === 0) {
if(!isModoCoins) return await mention(`'@${sender.split("@")[0]}' o sistema de Moedas já está desativado neste grupo atualmente, para desativar troque o 0 por 1.`);
dataGp[0].isModoCoins = false
updateGroup(dataGp)
await mention(`O sistema de Moedas neste grupo foi desativado com êxito pelo administrador(a): '@${sender.split("@")[0]}'.`);
} else {
await reply('Use 0 para desativar a função e 1 para ativar a função em seu grupo.');
}
break

case 'revelargartic':  
if (!isGroupAdmins) return reply('Somente adms podem ver a(s) resposta(s) do jogos!')
if(!fs.existsSync(`./arquivos/database/groups/games/gartic/${from}.json`)) return reply("Não existe nenhuma partida atual do jogo neste grupo.")
let dataAnagramaa = JSON.parse(fs.readFileSync(`./arquivos/database/groups/games/gartic/${from}.json`))
reply(`• Olá *${pushname}*, a resposta correta da afirmação era: ${II}${dataAnagramaa.resposta}${II}\n• Envie a resposta apresentada acima para passar a próxima..`)
break

case 'revelarenigma':
if (!isGroupAdmins) return reply('Somente adms podem ver a(s) resposta(s) do jogos!');
if(!fs.existsSync(`./arquivos/database/groups/games/enigma/${from}.json`)) return reply("Não existe nenhuma partida atual do jogo neste grupo.");
let eni1 = JSON.parse(fs.readFileSync(`./arquivos/database/groups/games/enigma/${from}.json`))
reply(`• Olá *${pushname}*, a resposta correta do enigma era: ${II}${eni1.respostaEne}${II}\n• Envie a resposta apresentada acima para passar a próxima..`)
break

case 'anagrama':
if (!isGroup) return reply(mess.onlyGroup()) 
if (!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isModoCoins) return reply(`Este comando só pode ser utilizado quando o sistema ${prefix}modocoins está ativado no grupo.`);
const anaaleatorio = Math.floor(Math.random() * palavrasANA.length)
if(args.length == 0) return reply('Use 1 para ativar o jogo do anagrama, ou seja, para desativar utilize o valor numérico 0')
if (args.join(' ') === '1') {
if(fs.existsSync(`./arquivos/database/groups/games/anagrama/${from}.json`)) {
an = JSON.parse(fs.readFileSync(`./arquivos/database/groups/games/anagrama/${from}.json`))
reply(`• Já existe um registro da ativação do anagrama aqui no grupo, resolva abaixo, caso desejar resetar ou desativar, use: *${prefix}anagrama 1/0*\n—\n⭐️ Qual é a ordem correta da palavra? Resolva: *${an.embaralhada}*\n• Dica: ${an.dica}`)
} else {
fs.writeFileSync(`./arquivos/database/groups/games/anagrama/${from}.json`, `${JSON.stringify(palavrasANA[anaaleatorio])}`)
await yurizin.sendMessage(from, {text: `🌟😲 Decifre a palavra embaralhada abaixo, qual será a ordem correta das letras?\n—\n• Palavra: *${shuffle(palavrasANA[anaaleatorio].palavraOriginal)}*\n• Dica: ${palavrasANA[anaaleatorio].dica}`}, {quoted: selo})
}
} else if (args.join(' ') ==='0') {
if(!fs.existsSync(`./arquivos/database/groups/games/anagrama/${from}.json`)) return reply('Não tem como desativar o jogo do anagrama pôs ele não foi ativado...')
fs.unlinkSync(`./arquivos/database/groups/games/anagrama/${from}.json`)
reply("Desativado com sucesso.")
}
break

case 'quizanimais':
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if(!isModoCoins) return reply(`Este comando só pode ser utilizado quando o sistema ${prefix}modocoins está ativado no grupo.`);
const animaisquiz = Math.floor(Math.random() * quizanimais.length)
if(args.length == 0) return reply('Use 1 para ativar o quiz animais, ou seja, para desativar utilize o valor numérico 0')
if (args.join(' ') === '1') {
if(fs.existsSync(`./arquivos/database/groups/games/quiz-animais/${from}.json`)) {
superrttrr = JSON.parse(fs.readFileSync(`./arquivos/database/groups/games/quiz-animais/${from}.json`))
imagemtexto = `• Existe um jogo existente, aqui no grupo! Resolva a pergunta abaixo:\n—\n🤔 Pergunta: ${superrttrr.question}`
wew = await getBuffer(`${superrttrr.foto}`)   
await yurizin.sendMessage(from, {image: wew, caption: imagemtexto}, {quoted: selo})
} else {
fs.writeFileSync(`./arquivos/database/groups/games/quiz-animais/${from}.json`, `${JSON.stringify(quizanimais[animaisquiz])}`)
wew = await getBuffer(`${quizanimais[animaisquiz].foto}`)  
await yurizin.sendMessage(from, {image: wew, caption: `🤔 Pergunta: ${quizanimais[animaisquiz].question}`}, {quoted: selo})
}
} else if (args.join(' ') ==='0') {
if(!fs.existsSync(`./arquivos/database/groups/games/quiz-animais/${from}.json`)) return reply('Não tem como desativar o jogo pôs ele não foi ativado')
fs.unlinkSync(`./arquivos/database/groups/games/quiz-animais/${from}.json`)
reply("Desativado com sucesso.")
}
break

case 'gartic':
if (!isGroup) return reply(mess.onlyGroup()) 
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if(!isModoCoins) return reply(`Este comando só pode ser utilizado quando o sistema ${prefix}modocoins está ativado no grupo.`);
const garticquiz = Math.floor(Math.random() * garticArchives.length)
if(args.length == 0) return reply('Use 1 para ativar o gartic, ou seja, para desativar utilize o valor numérico 0')
if (args.join(' ') === '1') {
if(fs.existsSync(`./arquivos/database/groups/games/gartic/${from}.json`)) {
dataGartic2 = JSON.parse(fs.readFileSync(`./arquivos/database/groups/games/gartic/${from}.json`))
await yurizin.sendMessage(from, {image: {url: `${dataGartic2.imagem}`}, caption: `👩🏼‍🏫 - A resposta é representada por um(a): ${dataGartic2.pergunta}\n📜 - A resposta supostamente começa com a(s) letra(s): "${dataGartic2.letra_inicial}"\n🤔 - Hmmm, contém traços? ${dataGartic2.contem_traços}\n–\n❓️ - *Não sabe a resposta?* _Peça ao adm do grupo para usar o comando *${prefix}revelargartic* para revelar a resposta correta da afirmação._`}, {quoted: selo});
} else {
fs.writeFileSync(`./arquivos/database/groups/games/gartic/${from}.json`, `${JSON.stringify(garticArchives[garticquiz])}`)
await yurizin.sendMessage(from, {image: {url: `${garticArchives[garticquiz].imagem}`}, caption: `👩🏼‍🏫 - A resposta é representada por um(a): ${garticArchives[garticquiz].pergunta}\n📜 - A resposta supostamente começa com a(s) letra(s): "${garticArchives[garticquiz].letra_inicial}"\n🤔 - Hmmm, contém traços? ${garticArchives[garticquiz].contem_traços}\n–\n❓️ - *Não sabe a resposta?* _Peça ao adm do grupo para usar o comando *${prefix}revelargartic* para revelar a resposta correta da afirmação._`}, {quoted: selo});
}
} else if (args.join(' ') ==='0') {
if(!fs.existsSync(`./arquivos/database/groups/games/gartic/${from}.json`)) return reply('Não tem como desativar o gartic pôs ele não foi ativado.');
fs.unlinkSync(`./arquivos/database/groups/games/gartic/${from}.json`)
reply("Desativado com sucesso.")
}
break

case 'enigma':
if (!isGroup) return reply(mess.onlyGroup()) 
if (!isGroupAdmins) return reply('Somente adms!')
if(!isModoCoins) return reply(`Este comando só pode ser utilizado quando o sistema ${prefix}modocoins está ativado no grupo.`);
const engimaSolu = Math.floor(Math.random() * enigmaArchive.length)
if(args.length == 0) return reply('Use 1 para ativar o enigma, ou seja, para desativar utilize o valor numérico 0')
if (args.join(' ') === '1') {
if(fs.existsSync(`./arquivos/database/groups/games/enigma/${from}.json`)) {
SAB_SAB_ENI = JSON.parse(fs.readFileSync(`./arquivos/database/groups/games/enigma/${from}.json`))
await yurizin.sendMessage(from, {text: `📜 - ${SAB_SAB_ENI.charada}\n–\n❓️ - *Não sabe a resposta?* _Peça ao adm do grupo para usar o comando *${prefix}revelarenigma* para revelar a resposta correta da enigma._`});
} else {
fs.writeFileSync(`./arquivos/database/groups/games/enigma/${from}.json`, `${JSON.stringify(enigmaArchive[engimaSolu])}`)
await yurizin.sendMessage(from, {text: `📜 - ${enigmaArchive[engimaSolu].charada}\n–\n❓️ - *Não sabe a resposta?* _Peça ao adm do grupo para usar o comando *${prefix}revelarenigma* para revelar a resposta correta da enigma._`});
}
} else if (args.join(' ') ==='0') {
if(!fs.existsSync(`./arquivos/database/groups/games/enigma/${from}.json`)) return reply('Não tem como desativar o enigma pôs ele não foi ativado.');
fs.unlinkSync(`./arquivos/database/groups/games/enigma/${from}.json`)
reply("Desativado com sucesso.");
}
break

/****** Início das cases de anúncio *******/
/****** Fim dos sistema de anúncio ******/
default:

// IF DOS ANTIs - (LOCALIZAÇÃO - CONTATO - CATALOGO)
if(isGroup && isBotGroupAdmins && !isGroupAdmins) {
if(isAntiCtt || Antiloc || isAnticatalogo) {
if(type === 'contactMessage' || type === 'contactsArrayMessage' || type === 'locationMessage' || type === 'productMessage') {
if(isGroupAdmins) return await yurizin.sendMessage(from, {text: mess.antisRandomMessage()}, {quoted: info})
setTimeout(async() => {
await yurizin.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
if(!JSON.stringify(groupMembers).includes(sender)) return
await yurizin.groupParticipantsUpdate(from, [sender], 'remove')
await yurizin.sendMessage(from, {text: `🗑${"\n".repeat(255)}🗑️\n✅️ A limpeza de chat foi concluída com sucesso.`, contextInfo: {forwardingScore: 500, isForwarded:true}});
await yurizin.sendMessage(from, {text: 'Por favor, reporte aos adminstradores do grupo sobre o ocorrido.', mentions: groupAdmins})
}
}
}

if(isGroup && isAntiFlood && !SoDono && !isPremium && !isnit && isBotGroupAdmins && !isGroupAdmins && !isBot) { 
if(isLimitec == null){var limitefl = limitefll.limitefl} else {var limitefl = isLimitec};
if(budy.length >= limitefl){
setTimeout(async() => {
  reply(mess.charactersAnti());
      warningLog(`Spam detectado no grupo: ${groupName} (${hourofc} ${dattofc})`);
    }, 100);
setTimeout(async() => {
    setTimeout(async() => {
        yurizin.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
      }, 500);
 if(!JSON.stringify(groupMembers).includes(sender)) return  
 await yurizin.groupParticipantsUpdate(from, [sender], 'remove')
 }, 1000)
}
}

if(isAutorepo) 
{
  
if(budy2.includes("boa madrugada")) {
setTimeout(async() => {
if(hora >= '06:00:00' && hora <= '12:59:59') {
var dia = [ "Ué mas está de dia. ☀️", "bom dia! o sol já nasceu lá na fazendinha.", "ainda está de dia.  kkk 😂" ]
dia = dia[Math.floor(Math.random() * dia.length)]
reply(dia)
} else if(hora >= '13:00:00' && hora <= '17:59:59') {
var tarde = [ "Ué mas está de tarde. 😽", "tá de tarde. kkk 😂", "ainda tá de tarde. 🫤" ]
tarde = tarde[Math.floor(Math.random() * tarde.length)]
reply(tarde)
} else if(hora >= '18:00:00' && hora <= '23:59:59') {
var noite = [ "Ué mas está de noite. 🥱", "Ainda é de madrugada. 😅", "Ainda é de madrugada. 😂" ]
noite = noite[Math.floor(Math.random() * noite.length)]
reply(noite)
} else if(hora >= '00:00:00' && hora <= '05:59:59') {
reagir(from, "💤")
var madrugada = [ "Boa madrugada zumbi 😂", "Boa madrugada 💘", "Boa madrugada 💙" ]
madrugada = madrugada[Math.floor(Math.random() * madrugada.length)]
reply(madrugada)
}
}, 300)
}

if(budy2.includes("boa noite")) {
setTimeout(async() => {
if(hora >= '06:00:00' && hora <= '12:59:59') {
var dia = [ "Ué mas está de dia. ☀️", " Esta de dia, bom dia!", "ainda está de dia.  kkk 😂" ]
dia = dia[Math.floor(Math.random() * dia.length)]
reply(dia)
} else if(hora >= '13:00:00' && hora <= '17:59:59') {
var tarde = [ "Ué mas está de tarde. 😽", "tá de tarde. kkk 😂", "ainda tá de tarde. 🫤" ]
tarde = tarde[Math.floor(Math.random() * tarde.length)]
reply(tarde)
} else if(hora >= '00:00:00' && hora <= '05:59:59') {
var noite = [ "Ué mas está de madrugada aliás você não dorme não? 😴", "É de noite ainda. 😴", "Ainda está de noite. 😂" ]
noite = noite[Math.floor(Math.random() * noite.length)]
reply(noite)
} else if(hora >= '18:00:00' && hora <= '23:59:59') {
reagir(from, "💤")
var madrugada = [ "Vai dormir você 🫵 é corno não morcego, boa noite.", "O unico japa que você 🫵 vai ter é o japacama, boa noite. 🥱", "Boa noite. ❤️" ]
madrugada = madrugada[Math.floor(Math.random() * madrugada.length)]
reply(madrugada)
}
}, 300)
}

if(budy2.includes("boa tarde")) {
setTimeout(async() => {
if(hora >= '06:00:00' && hora <= '12:59:59') {
var dia = [ "Ué mas está de dia. ☀️", "bom dia! o sol já nasceu. 😂🫵", "Ainda está de dia.  kkk 😂🫵" ]
dia = dia[Math.floor(Math.random() * dia.length)]
reply(dia)
} else if(hora >= '13:00:00' && hora <= '17:59:59') {
reagir(from, "🍃")
var noite = [ "Booa tarde!", "Booa tarde!", "Boa tarde!" ]
noite = noite[Math.floor(Math.random() * noite.length)]
} else if(hora >= '18:00:00' && hora <= '23:59:59') {
var noite = [ "Ué mas está de noite. 🥱", "É de noite ainda. 😴", "Ainda está de noite. 😂" ]
noite = noite[Math.floor(Math.random() * noite.length)]
reply(noite)
} else if(hora >= '00:00:00' && hora <= '05:59:59') {
var madrugada = [ "Ué mas está de madrugada aliás você não dorme não? 😴", "ainda é de madrugada. 😅", "Ainda é de madrugada. 😘" ]
madrugada = madrugada[Math.floor(Math.random() * madrugada.length)]
reply(madrugada)
}
}, 300)
}

if(budy2.includes("bom dia")) {
setTimeout(async() => {
if(hora >= '06:00:00' && hora <= '12:59:59') {
var dia = [ "Boom dia. ☀️", "bom dia!", "Boom diaa." ]
dia = dia[Math.floor(Math.random() * dia.length)]
reply(dia)
} else if(hora >= '13:00:00' && hora <= '17:59:59') {
var tarde = [ "Ué mas está de tarde. 😽", "tá de tarde. kk 😂", "Ainda tá de tarde. 🫤" ]
tarde = tarde[Math.floor(Math.random() * tarde.length)]
reply(tarde)
} else if(hora >= '18:00:00' && hora <= '23:59:59') {
var noite = [ "Ué mas está de noite. 🥱", "É de noite ainda. 😴", "Ainda está de noite. 😂" ]
noite = noite[Math.floor(Math.random() * noite.length)]
reply(noite)
} else if(hora >= '00:00:00' && hora <= '05:59:59') {
var madrugada = [ "Ué mas está de madrugada aliás você não dorme não? 😴", "Ainda é de madrugada. 😅", "Ainda é de madrugada. 😘" ]
madrugada = madrugada[Math.floor(Math.random() * madrugada.length)]
reply(madrugada)
}
}, 300)
}

} // fechamento do auto reposta

if(budy2.toLowerCase().includes("kkk")) {
await yurizin.sendMessage(from, { react: { text: "😂", key: info.key } });
}

if(budy2.toLowerCase().includes("amor")) {
await yurizin.sendMessage(from, { react: { text: "🐂", key: info.key } });
}

if(budy2.toLowerCase().startsWith("dell")) {
if(!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins());
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
try {
await yurizin.sendMessage(from, {
delete: {
remoteJid: from,
fromMe: false,
id: info.message.extendedTextMessage.contextInfo.stanzaId,
participant: menc_prt
}
});
await yurizin.groupParticipantsUpdate(from, [menc_os2], "remove");
} catch (error) {
console.log(error);
}
}

/* --- [ ANTI PALAVRAS - (🤖) - GRUPOS ] --- */
if(isGroup && isPalavrao && isBotGroupAdmins && !SoDono && !isGroupAdmins) {
if(dataGp[0].antipalavrao.palavras.some(i => budy2.includes(i.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")))) {
setTimeout(() => {
if(!JSON.stringify(groupMembers).includes(sender)) return 
yurizin.groupParticipantsUpdate(from, [sender], 'remove');
setTimeout(() => {yurizin.sendMessage(from, {delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})}, 500)
}, 2000);
yurizin.sendMessage(from, {text: mess.permissionDenied_rUser()}, {quoted: info});
}
}

/* ------ [ Simih - Simsimi Brasil ] ------- */
if (isGroup && isSimi && budy != undefined) {
if(type == 'imageMessage') return 
if(type == 'audioMessage') return 
if(type == 'stickerMessage') return   
if(info.key.fromMe) return 
emojisList = ['🤠', '💅🏻', '🦸‍♀️', '👮‍♀️', '😹', '✅'];
await reagir(from, emojisList[Math.floor(Math.random() * emojisList.length)]);
muehe = await simih(budy);
await yurizin.sendMessage(from, {text: muehe}, {quoted: info}).catch(async(e) => {
reply(mess.errorResponseSimi());
});
}

if (isSimi2 && !isCmd && isGroup) {
if (type == 'conversation' || type == 'extendedTextMessage') {
var { insert, response } = require('./arquivos/libraries/simi.js');
if (info.key.fromMe) return
if (type == 'extendedTextMessage' && prefix.includes(info.message.extendedTextMessage.contextInfo.quotedMessage.conversation[0])) return
insert(type, info)
const sami = await response(budy) 
if (sami) yurizin.sendMessage(from, {text: sami}, {quoted: info})
}
}

/* ------- [ Comandos + Similaridade ] ------- */
if(isCmd) {
const cmdSimilarity = listCommands(command);
similarityCommands = cmdSimilarity.similarity > 40 ? `Tenho uma possível semelhança de *${cmdSimilarity.similarity || '0'}%* entre o comando *'${prefix + cmdSimilarity.command || '0'}'*.` : `Não foi encontrado nenhum comando semelhante com o que você usou.`;
await reply(`❌ → Não encontrei o comando *'${command || '-'}'* na lista! Utilize o *'${prefix}menu'* para visualizar todos os comandos existentes.\n_→_ ${similarityCommands}`, {reagir: "❌"});
}

}
}
}

const nmrdn = config["OwnerNumber"].value.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`;

async function premiumTemp() {
if(premium.length > 0) {
for (y of premium) {
if(y.save != Number(moment.tz('America/Sao_Paulo').format('DD'))) {
y.save = Number(moment.tz('America/Sao_Paulo').format('DD'));
fs.writeFileSync("./arquivos/database/func/users/premium.json", JSON.stringify(premium));
if(y.infinito == false) {
if(y.dias > 1) {
y.dias -= 1;
fs.writeFileSync("./arquivos/database/func/users/premium.json", JSON.stringify(premium));
} else {
AB = premium.map(b => b.id).indexOf(y.id);
premium.splice(AB, 1);
fs.writeFileSync("./arquivos/database/func/users/premium.json", JSON.stringify(premium));
}}}}}}

async function timeRentOficial() {
if(aluguel.length > 0) {
for(x of aluguel) {
if(x.save != Number(moment.tz('America/Sao_Paulo').format('DD')) && x.cortesia == false) {
if(x.tempo > 1) {
if(Number(x.tempo) === 8 || Number(x.tempo) === 4 || Number(x.tempo) === 3 || Number(x.tempo) === 2) {
rMessageClient = `Olá *@${x.cliente.split("@")[0]}*, acabo de verificar que nosso contrato no grupo: *'${aluguel[aluguel.map(m => m.id).indexOf(x.id)].nome}'* termina em ${Number(x.tempo) === 8 ? `uma semana` : Number(x.tempo) !== 2 ? `alguns ${x.tempo - 1} dias` : `apenas 24 horas`}.`;
yurizin.sendMessage(x.cliente, {text: rMessageClient, mentions: [x.cliente]});
}
x.save = Number(moment.tz('America/Sao_Paulo').format('DD'))
x.tempo -= 1
fs.writeFileSync("./arquivos/database/groups/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
} else {
yurizin.sendMessage(x.id, {text: `Conforme combinado com meu/minha proprietário(a) e o contratante dos serviços, o contrato está encerrado, *o que significa que todas as funcionalidades neste grupo serão suspensas* até que o(a)(s) responsável(s) efetue o pagamento.\n• Durante o *período de pendências*, irei ignorar todos os comandos executados do grupo.\n–\n> Atenciosamente, ${NomeDoBot}`}, {});
await sleep(200)
yurizin.sendMessage(nmrdn, {text: `Só passando pra avisar que o tempo limite do grupo *'${x.nome}'* expirou agora... Visto que o(a) *'@${x.cliente.split('@')[0]}'* não renovou o contrato, eu saí do grupo dele(a) e apaguei os registros! 🌟`, mentions: [x.cliente]});
findGroupRG = grupos.map(i => i.id).indexOf(x.id);
grupos.splice(findGroupRG, 1)
fs.writeFileSync("./arquivos/database/groups/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
findGroupRent = aluguel.map(i => i.id).indexOf(x.id);
aluguel.splice(findGroupRent, 1);
fs.writeFileSync("./arquivos/database/groups/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
}}}}}

async function forRentCourtesy() {
if(aluguel.length > 0) {for(x of aluguel) {
if(x.save != Number(moment.tz('America/Sao_Paulo').format('HH')) && x.cortesia == true) {
if(x.tempo > 0) {
x.save = Number(moment.tz('America/Sao_Paulo').format('HH'));
x.tempo -= 1
fs.writeFileSync("./arquivos/database/groups/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2));
} else {
yurizin.sendMessage(x.id, {text: `🌟💳 *O cartão cortesia 24h deste grupo expirou!* Caso se veja interessado em nossos serviços, favor entrar em contato com meu dono: *wa.me/${config["OwnerNumber"].value}*`})
yurizin.sendMessage(nmrdn, {text: `🤓🗑️Só passando pra avisar que o cartão cortesia do grupo *${x.nome}* expirou agora... Visto que não houve alteração em meus registros, eu saí do grupo e apaguei os dados! 🌟`});
grupos.splice(grupos.map(i => i.id).indexOf(x.id), 1);
fs.writeFileSync("./arquivos/database/groups/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
aluguel.splice(aluguel.map(i => i.id).indexOf(x.id), 1);
fs.writeFileSync("./arquivos/database/groups/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2));
await sleep(4000);
await yurizin.groupLeave(x.id);
}}}}}

/* -------- [ Execuções de Funções ] -------- */
forRentCourtesy(); timeRentOficial(); premiumTemp();

/* ------- [ Inicialização dos Comandos ] ------- */
upsertMessage().catch(async(error) => {
if(JSON.stringify(error).includes(API_KEY_YURI)) {
// ❗️ Quando abrir uma solicitação de erro e esteja se referindo a APIKey não vai ser mostrado no console do terminal.
} else if(String(error).includes("Erro: aborted")) {
delete require.cache[require.resolve("./arquivos/connect.js")];
    require(require.resolve("./arquivos/connect.js"));
} else { 
return errorLog(error);
}
})
}
}

/* ----- [ Detectar alterações e salvar as modificações sem reiniciar a conexão ] ----- */
fs.watchFile(require.resolve(__filename), () => {
  fs.unwatchFile(require.resolve(__filename));
  warningLog("Alteração no arquivo: '" + __filename + "'")
  delete require.cache[require.resolve(__filename)]
  require(require.resolve(__filename))
});

/* --------- [ Exportação da Função ] --------- */
module.exports = startyurizin;