const crypto = require('crypto');

const algorithm = 'aes-256-ctr';
const secretKey = 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3';
const iv = crypto.randomBytes(16);

const encrypt = (text) => {

    const cipher = crypto.createCipheriv(algorithm, secretKey, iv);

    const encrypted = cipher.update(text, "utf8", "hex");

    return [
        encrypted + cipher.final("hex"),
        Buffer.from(iv).toString("hex"),
    ].join("-");
};

const decrypt = (hash) => {
    const [encrypted, iv] = hash.split("-");
    
    if (!iv) throw new Error("IV not found");

    const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(iv, 'hex'));

    return decipher.update(encrypted, "hex", "utf8") + decipher.final("utf8");
};

module.exports = {
    encrypt,
    decrypt
};