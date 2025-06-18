const BodyForm = require('form-data');
const { fromBuffer } = require('file-type');
const fetch = require('node-fetch');
const axios = require('axios');
const crypto = require('crypto')
const { ImageUploadService } = require('node-upload-images');

class Uploader {
    getRandomFilename(extension) {
        return `${Math.floor(Math.random() * 10000)}.${extension}`;
    }

    async pixhost(imageBuffer) {
        return new Promise((resolve, reject) => {
            const service = new ImageUploadService('pixhost.to');
            service.uploadFromBinary(imageBuffer, this.getRandomFilename("png"))
            .then(({ directLink }) => {
                return resolve(directLink); // Resolve com o link direto da imagem
            }).catch((error) => {
                return reject("Error.");
            });
        });
    }

    async catbox(content) {
        return new Promise(async(resolve, reject) => {
            const { ext, mime } = (await fromBuffer(content)) || {};
            const formData = new BodyForm();
            const randomBytes = crypto.randomBytes(6).toString("hex");
            formData.append("reqtype", "fileupload");
            formData.append('fileToUpload', content, { filename: "tmp" + randomBytes + '.' + ext, contentType: mime });
            const response = await fetch("https://catbox.moe/user/api.php", {
                method: "POST",
                body: formData,
                headers: {
                    "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36",
                    //...formData.getHeaders(),
                },
            });
                if (!response.ok) {
                    return reject(`Unexpected response ${response.statusText}`);
                }
            const cUrl = await response.text();
            return resolve(cUrl);
        })
    }
    
static async github(media) {
        try {
            const fileType = await fromBuffer(media);
            if (!fileType) {
                throw new Error('Tipo de arquivo não reconhecido.');
            }
            const fileName = `file_${Date.now()}.${fileType.ext}`;
            const fileContent = media.toString('base64');
            const token = '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';
            const apiUrl = `https://api.github.com/repos/yuriXhiudy/up/contents/uploads/${fileName}`;
            const headers = {
                Authorization: `token ${token}`,
                'Content-Type': 'application/json',
            };
            const data = {
                message: `Upload de arquivo: ${fileName}`,
                content: fileContent,
            };
            const response = await axios.put(apiUrl, data, { headers });
            return response.data.content.download_url;
        } catch (error) {
            console.error('Erro ao fazer upload:', error.response ? error.response.data : error.message);
            throw new Error('Falha no upload para o GitHub.');
        }
    }
}

module.exports = Uploader;