process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const { 'default': makeWASocket, useMultiFileAuthState, makeInMemoryStore, DisconnectReason, WAGroupMetadata, relayWAMessage, MediaPathMap, mentionedJid, processTime, MediaType, MessageType, Presence, Mimetype, Browsers, delay, fetchLatestBaileysVersion, MessageRetryMap, extractGroupMetadata, generateWAMessageFromContent, proto, otherOpts, makeCacheableSignalKeyStore, PHONENUMBER_MCC, isJidNewsletter, isJidBroadcast, isJidStatusBroadcast } = require('baileys');

/* Módulos */
const { LoggerB, Boom, AssemblyAI, axios, fs, cheerio, crypto, util, randomBytes, emoji, P, NodeCache, linkfy, request, ms, FileType, os, ffmpeg, fetch, exec, spawn, moment, colors, readline, execSync } = require('./exports.js');

/* Funções necessárias */
const { addComandosId, deleteComandos, getComandoBlock, getComandos, addComandos, tabela, destrava, destrava2, mess, psycatgames, vyroEngine, linguagem, getInfo, writeExifImg, writeExif, countDays, timeDate, obeso, capitalizeFirstLetter, simih, TimeCount, getBuffer, fetchJson, fetchText, formatNumberDecimal, generateMessageID, convertBytes, getGroupAdmins, getMembros, isFiltered, addFilter, chyt, getExtension, getRandom, convertSticker, nit, supre, extractMetadata, addBanned, unBanned, BannedExpired, cekBannedUser, formatDateOriginal, validmove, setGame, ytdl, whatMusicAr, palavrasANA, quizanimais, enigmaArchive, garticArchives, Sticker } = require('./exports.js');

/* JSONs nescessários */
const { images, config, creds, countMessage, rgtake, sotoy, definitions, daily, muted, premium, ban, limitefll, joguinhodavelhajs, ads, joguinhodavelhajs2, grupos, aluguel, chaves, anotar, antispam, Limit_CMD, advices, tools, level2, packname, namoro1, namoro2 } = require('./exports.js');

/** Base URL das APIs da Sabrina-BOT **/
const API_URL = creds["APIs"].website;

/* Outras funções */
const { extractAcronymFromCity, DLT_FL, getFileBuffer, shuffle, sleep, sendPoll, enviarfiguUrl, listCommands, fuzzySimilarity, extractDDD, extractStateFromNumber, extractStateFromDDD, isJsonIncludes, ANT_LTR_MD_EMJ, date, hora, time, sayLog, inputLog, infoLog, successLog, errorLog, warningLog } = require('./exports.js');

var qrcode = "./arquivos/database/qr-code";
const usePairingCode = process.argv.includes('sim');

if(!usePairingCode && !fs.existsSync(`${qrcode}/creds.json`)) console.log(colors.yellow("- Aviso: Se você não estiver outro aparelho em mãos para realizar a leitura do qr-code, você usar a 2° opção seria ela ( sh start.sh sim ), sem os parenteses e você conectará com código de emparelhamento.\n") + "–");

function collectNumbers(inputString) {
   return inputString.replace(/\D/g, '');
}

const originalConsoleInfo = console.info;

console.info = function () {
    const message = util.format(...arguments);
    const forbiddenStrings = ["Closing session: SessionEntry", "Removing old closed session: SessionEntry {", "Another forbidden string", "Closing stale open session for new outgoing prekey bundle"];
    if (forbiddenStrings.some(msg => message.includes(msg))) {
        return;
    }
    originalConsoleInfo.apply(console, arguments);
};

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const question = (text) => new Promise((resolve) => rl.question(text, resolve));

const msgRetryCounterCache = new NodeCache();

async function startConnect() {

const { state, saveCreds } = await useMultiFileAuthState(qrcode);
const { version, isLatest } = await fetchLatestBaileysVersion();

const yurizin = makeWASocket({
  version,
  logger: P({ level: "silent" }),
  printQRInTerminal: !usePairingCode,
  auth: state,
  browser: ['Ubuntu', 'Edge', '110.0.1587.56'],
  generateHighQualityLinkPreview: true,
  patchMessageBeforeSending: (message) => {
    const requiresPatch = !!(message?.interactiveMessage);
    if (requiresPatch) {
        message = {viewOnceMessage: {message: {messageContextInfo: {deviceListMetadataVersion: 2, deviceListMetadata: {}}, ...message}}};
    };
    return message;
  },
  keepAliveIntervalMs: 60 * 1000,
  shouldSyncHistoryMessage: () => false
})

if(usePairingCode && !yurizin.authState.creds.registered) {
    await infoLog('Informe o seu número de telefone (exemplo: "+55 13 98218-9399"):');
    const phoneNumber = await question("Informe o seu número de telefone: ");
    if (!phoneNumber) {
        await errorLog('Número de telefone inválido! Faça uma nova tentativa executando o comando "npm start".');
        await process.exit(0);
    }
    let numerosColetados = collectNumbers(phoneNumber);
    const code = await yurizin.requestPairingCode(numerosColetados)
    await sayLog(`Código de pareamento: ${code}`);
    rl.close();
}

yurizin.ev.process(async(events) => {

if(events["group-participants.update"]){
    try {
      var sab2 = events["group-participants.update"];
      if(!fs.existsSync(`./arquivos/database/groups/db/${sab2.id}.json`)) return
      var jsonGp = JSON.parse(fs.readFileSync(`./arquivos/database/groups/db/${sab2.id}.json`));
      if(sab2.participants[0].startsWith(yurizin.user.id.split(':')[0])) return;
      try {var grpmdt = await yurizin.groupMetadata(sab2.id)} catch(e) {return}
      const isGroup2 = grpmdt.id.endsWith('@g.us');
      try {
        var GroupMetadata_ = isGroup2 ? await yurizin.groupMetadata(sab2.id): ""} catch (e) {return}
        const membros_ = isGroup2 ? GroupMetadata_.participants : '';
        const groupAdmins_ = isGroup2 ? getGroupAdmins(membros_) : '';
        if(sab2.action == 'add') {
            num = sab2.participants[0];
            if(definitions.listanegraG.includes(num)){
            yurizin.sendMessage(GroupMetadata_.id,{text: mess.blackList(GroupMetadata_, sab2), mentions: sab2.participants});
            yurizin.groupParticipantsUpdate(GroupMetadata_.id, [sab2.participants[0]], 'remove');
        }
      }

      if(sab2.action == 'add' && jsonGp[0].listanegra.includes(sab2.participants[0])) {
        await yurizin.sendMessage(GroupMetadata_.id,{text: mess.blackList(GroupMetadata_, sab2), mentions: sab2.participants});
        await yurizin.groupParticipantsUpdate(GroupMetadata_.id, [sab2.participants[0]], 'remove');
      }

      if(jsonGp[0].antifake.status && sab2.action === 'add' && !sab2.participants[0].startsWith(55)) {
        if(jsonGp[0].antifake.message != "0") {
            yurizin.sendMessage(GroupMetadata_.id, {text: jsonGp[0].antifake.message});
        }
        setTimeout(async() => { await yurizin.groupParticipantsUpdate(GroupMetadata_.id, [sab2.participants[0]], 'remove') }, 1000);
      }
      
      if(jsonGp[0].ANTI_DDD.active && sab2.action == 'add' && jsonGp[0].ANTI_DDD.listaProibidos.includes(extractDDD(sab2.participants[0].split('@')[0]))) {
        yurizin.sendMessage(GroupMetadata_.id,{text: mess.forbiddenStateFromDDD(sab2.participants[0], extractStateFromDDD, extractDDD), mentions: sab2.participants});
        setTimeout(async() => { yurizin.groupParticipantsUpdate(GroupMetadata_.id, [sab2.participants[0]], 'remove') }, 1000);
      }

      if(!jsonGp[0].wellcome[1].bemvindo2 && !jsonGp[0].wellcome[0].bemvindo1) return;
      try {var mdata_2 = isGroup2 ? await yurizin.groupMetadata(sab2.id): ""} catch {return};
      const isWelcomed = jsonGp[0].wellcome[0].legendabv != null ? true : false;
      const isByed = jsonGp[0].wellcome[0].legendasaiu != 0 ? true : false;
      const isWelcomed2 = jsonGp[0].wellcome[1].legendabv != null ? true : false;
      const isByed2 = jsonGp[0].wellcome[1].legendasaiu != 0 ? true : false;
      const groupDesc = await mdata_2.desc;
      if(jsonGp[0].antifake.status == true && !sab2.participants[0].startsWith(55)) return;
      if(jsonGp[0].wellcome[0].bemvindo1 == true) { 
        try {ppimg = await yurizin.profilePictureUrl(sab2.participants[0])} catch(e) {ppimg = images['defaultProfile'].value}
        shortpc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppimg}`);
        if(sab2.action === 'add') {
            if(isWelcomed) {
                teks = jsonGp[0].wellcome[0].legendabv.replace('#hora#', time).replace('#nomedogp#', mdata_2.subject).replace('#numerodele#', '@'+sab2.participants[0].split('@')[0]).replace('#numerobot#', yurizin.user.id).replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : config["Prefix"].value).replace('#descrição#', groupDesc).replace('#estado#', extractStateFromNumber(sab2.participants[0].split('@')[0]))
            } else {
                teks = welcome(sab2.participants[0].split('@')[0], mdata_2.subject);
            };
            welcomeEnter = await axios.get(`https://tinyurl.com/api-create.php?url=${images['Welcome'].Enter}`);
            await yurizin.sendMessage(mdata_2.id, {image: {url: API_URL + `/api/photomod/welcome?titulo=Bem-vindo(a)!&perfil=${shortpc.data}&fundo=${welcomeEnter.data}&desc=${mess.phrasesWelcome(mdata_2, sab2, encodeURIComponent)}`}, mentions: sab2.participants, caption: teks});
        } else if(sab2.action === 'remove') {
            mem = sab2.participants[0]
            try { ppimg = await yurizin.profilePictureUrl(`${mem.split('@')[0]}@c.us`)} catch(e){ppimg = images['defaultProfile'].value}
            if(isByed) {
                teks = jsonGp[0].wellcome[0].legendasaiu.replace('#hora#', time).replace('#nomedogp#', mdata_2.subject).replace('#numerodele#', sab2.participants[0].split('@')[0]).replace('#numerobot#', yurizin.user.id).replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : config["Prefix"].value).replace('#descrição#', groupDesc).replace('#estado#', extractStateFromNumber(sab2.participants[0].split('@')[0]))
            } else {
                teks = bye(sab2.participants[0].split('@')[0])
            }
            welcomeLeft = await axios.get(`https://tinyurl.com/api-create.php?url=${images['Welcome'].Left}`);
            await yurizin.sendMessage(mdata_2.id, {image: {url: API_URL + `/api/photomod/welcome?titulo=Adeus!&perfil=${shortpc.data}&fundo=${welcomeLeft}&desc=${mess.phrasesLeft(sab2, encodeURIComponent)}`}, caption: teks, mentions: sab2.participants})
        }
      }

      if(jsonGp[0].wellcome[1].bemvindo2 == true) {
        if(sab2.action === 'add') {
            if(isWelcomed2) {
                teks = jsonGp[0].wellcome[1].legendabv.replace('#hora#', time).replace('#nomedogp#', mdata_2.subject).replace('#numerodele#', sab2.participants[0].split('@')[0]).replace('#numerobot#', yurizin.user.id).replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : config["Prefix"].value).replace('#descrição#', groupDesc).replace('#estado#', extractStateFromNumber(sab2.participants[0].split('@')[0]))
            } else {
                teks = welcome2(sab2.participants[0].split('@')[0], mdata_2.subject)
            }
            yurizin.sendMessage(mdata_2.id, {text: teks, mentions: sab2.participants})
        } else if(sab2.action === 'remove') {
            var mem = sab2.participants[0]
            if(isByed2) {
                teks = jsonGp[0].wellcome[1].legendasaiu.replace('#hora#', time).replace('#nomedogp#', mdata_2.subject).replace('#numerodele#', mem.split('@')[0]).replace('#numerobot#', yurizin.user.id).replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : config["Prefix"].value).replace('#descrição#', groupDesc).replace('#estado#', extractStateFromNumber(sab2.participants[0].split('@')[0]))
            } else {
                teks = bye2(mem.split('@')[0])
            }
            yurizin.sendMessage(mdata_2.id, {text: teks, mentions: sab2.participants})
        }
      }
    } catch (error) {
        if(String(error).includes("bye2 is not defined")) {
            warningLog("Mensagem de saiu do bem vindo [2] não definida, mas não precisa definir, qualquer dúvida dúvida digita: [Prefixo]Infobemvindo no WhatsApp...");
        } else if(String(error).includes("welcome2 is not defined")) {
            warningLog("Mensagem do bem vindo [2] não definida, qualquer dúvida digite: [Prefixo]Infobemvindo no WhatsApp...");
        } else if(String(error).includes("bye is not defined")) {
            warningLog("Mensagem de saiu do bem vindo não definida, mas não precisa definir, qualquer dúvida dúvida digita: [Prefixo]Infobemvindo no WhatsApp...");
        } else if(String(error).includes("welcome is not defined")) {
            warningLog("Mensagem do bem vindo não definida, qualquer dúvida digite: [Prefixo]Infobemvindo no WhatsApp...");
        } else {
            errorLog(error);
        }
    }
}

if(events["connection.update"]) {
const update = events["connection.update"]; 
const { connection, lastDisconnect } = update;
const shouldReconnect = new Boom(lastDisconnect?.error)?.output.statusCode

switch (connection) {

case 'close':
    if(shouldReconnect) {
        if(shouldReconnect == 401) {
            response = ["Houve uma desconexão, re-escaneie o QR, se preciso... Estou reiniciando!", "Minha sessão desconectou, pode reconectar e escanear o QR novamente? Gerando qr-code!", "Você me desconectou? A sessão precisa ser escaneada novamente... Estou reiniciando!"];
            await errorLog(response[Math.floor(Math.random() * response.length)]);
            await fs.remove(qrcode);
        } else if(shouldReconnect == 408) {
            response = ["A sessão sofreu um timeout, recarregando...", "O tempo de resposta esgotou, recarregando...", "Recarregando a sessão por conta de um timeout..."];
            warningLog(response[Math.floor(Math.random() * response.length)]);
        } else if(shouldReconnect == 411) {
            response = ["A sessão salva não bate com a conexão salva, reiniciando sua sessão...", "O arquivo de sessão parece incorreto, estou tentando recarregar...", "Falha ao conectar, pois a sessão parece incorreta, recarregando..."]
            warningLog(response[Math.floor(Math.random() * response.length)]);
        } else if(shouldReconnect == 428) {
            response = ["A conexão fechou, sua internet pode ter caído? Tentando reconectar...", "Não foi possível manter a conexão com o WhatsApp, tentando de novo...", "Sua conexão com o WhatsApp parece ter caído, reconectando..."];
            warningLog(response[Math.floor(Math.random() * response.length)]);
        } else if(shouldReconnect == 440) {
            response = ["Outra sessão do WhatsApp Web foi aberta no meu número, feche-a...", "Você possui outra sessão do WhatsApp no meu número? Fecha para usar...", "Existem muitas sessões do WhatsApp conectadas no meu número, feche-as..."];
            warningLog(response[Math.floor(Math.random() * response.length)]);
        } else if(shouldReconnect == 500) {
            response = ["A sessão parece mal configurada, estarei tentando reconectar...", "Uma reconexão será feita, pois a sessão foi considerada incorreta...", "A sessão parece incorreta, a conexão estará sendo reinicializada..."];
            warningLog(response[Math.floor(Math.random() * response.length)]);
        } else if(shouldReconnect == 503) {
            return errorLog("Erro desconhecido!");
        } else if(shouldReconnect == 515) {
            response = ["Estou reiniciando, pois a sessão pediu que fosse atualizada...", "O sistema pediu para reiniciar, estou fazendo isso automaticamente...", "Meu código será reinicializado para estabilizar a conexão..."]
            warningLog(response[Math.floor(Math.random() * response.length)]);
    } else {
        errorLog(`Conexão fechada por motivo do erro: ${lastDisconnect?.error}`);
    }
    startConnect();
}
break;

case 'connecting':
    rl.close()
    infoLog('🤖 Versão: 3.0.0 (01-06-2025)');
    infoLog(`WhatsApp-Web: ${version}`);
    infoLog(`👨🏻‍💻 Criador: Celo`);
    console.log(require('cfonts').render((`Celo|@`), {font: 'block', align: "center", gradient: ['red', 'magenta']}).string); 
    response = ["Estamos estabelecendo uma nova conexão com o servidor! Aguarde um pouco.", "Atualizando a sessão para garantir o funcionamento correto do sistema."]
    warningLog(response[Math.floor(Math.random() * response.length)]);
break;

case 'open':
    response = ["Conexão completa! Agora estou totalmente pronta para uso.", "Sessão conectada com êxito! Estamos prontos para avançar.", "Conectado com sucesso!"];
    successLog(response[Math.floor(Math.random() * response.length)]);
break;

default:
break
}
}

if(events["messages.upsert"]) {
    var upsert = events["messages.upsert"];
    const startyurizin = require('./index.js');
    startyurizin(upsert, yurizin, qrcode).then(() => {}).catch((error) => errorLog(error));
}

if(events["creds.update"]) {
    await saveCreds();
}

})
}

startConnect().catch(async(errorMessage) => errorLog(errorMessage))