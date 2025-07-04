const fs = require('fs');
const simih = JSON.parse(fs.readFileSync('./arquivos/database/groups/simi.json'));

async function insert(type, info) {
    let keyword = (type == 'conversation') ? info.message.conversation : (type == 'extendedTextMessage') ? info.message.extendedTextMessage.contextInfo.quotedMessage.conversation : ''
    if (keyword.length > 40) return
    if (keyword == '') return
    function check(key) {
        let found = false
        Object.keys(simih).forEach(i => {
            if (simih[i].msg == key)
            found = i
        })
        return found ? simih[found] : false
    }
    const verify = await check(keyword.toLowerCase())
    if (type == 'conversation') {
        if (verify) return 
          simih.push({msg: info.message.conversation.toLowerCase(), messages: []})
          fs.writeFileSync('./arquivos/database/groups/simi.json', JSON.stringify(simih, null, 4))
    } else if (type == 'extendedTextMessage') {
        if (verify) {
            verify.messages.push(info.message.extendedTextMessage.text.toLowerCase())
            fs.writeFileSync('./arquivos/database/groups/simi.json', JSON.stringify(simih, null, 4))
        } else {
            simih.push({msg: keyword.toLowerCase(), messages: [info.message.extendedTextMessage.text.toLowerCase()]})
            fs.writeFileSync('./arquivos/database/groups/simi.json', JSON.stringify(simih, null, 4))
        }
    }
}

async function response(key) {
    let position = false;
    Object.keys(simih).forEach(i => {
        if (simih[i].msg == key.toLowerCase())
        position = i
    })
    return position ? simih[position].messages[Math.floor(Math.random() * simih[position].messages.length)] : false;
}

module.exports = {
    response, 
    insert
};