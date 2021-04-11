const crypto = require('crypto');
const algorithm = 'aes-256-ctr';
const iv = crypto.randomBytes(16);

const encrypt = (text, secretKey) => {

    const cipher = crypto.createCipheriv(algorithm, secretKey, iv);

    const encrypted = cipher.update(text, "utf8", "hex");

    return [
        encrypted + cipher.final("hex"),
        Buffer.from(iv).toString("hex"),
    ].join("-");
};

const decrypt = (hash, secretKey) => {
    const [encrypted, iv] = hash.split("-");
    
    if (!iv) throw new Error("IV not found");

    const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(iv, 'hex'));

    return decipher.update(encrypted, "hex", "utf8") + decipher.final("utf8");
};

const compare = (text, hashedPassword, secretKey) => {
    return decrypt(hashedPassword, secretKey) == text;
}

module.exports = {
    encrypt,
    decrypt,
    compare
};