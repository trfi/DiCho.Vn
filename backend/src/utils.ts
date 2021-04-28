const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const algorithm = 'aes-256-ctr';
const iv = crypto.randomBytes(16);
const JWT_SECRET = process.env.JWT_SECRET;


export function getTokenPayload(token) {
  return jwt.verify(token, JWT_SECRET);
};

export function getUser(req, authToken: string = null) {
  if (req) {
    const token = req?.headers?.token;
    if (!token) {
      throw new Error('No token found');
    }
    return getTokenPayload(token);
  }
  else if (authToken) {
    return getTokenPayload(authToken);
  }
  throw new Error('Not authenticated');
};

export class Crypto {
  static encrypt(text) {
    const cipher = crypto.createCipheriv(algorithm, JWT_SECRET, iv);

    const encrypted = cipher.update(text, "utf8", "hex");

    return [
        encrypted + cipher.final("hex"),
        Buffer.from(iv).toString("hex"),
    ].join(".");
  };
  
  static decrypt(hash) {
    const [encrypted, iv] = hash.split(".");
    
    if (!iv) throw new Error("IV not found");

    const decipher = crypto.createDecipheriv(algorithm, JWT_SECRET, Buffer.from(iv, 'hex'));

    return decipher.update(encrypted, "hex", "utf8") + decipher.final("utf8");
  };

  static compare(text, hashedPassword) {
    return this.decrypt(hashedPassword) == text;
  };
};

export function objectId () {  
  function hex (value: number) {
    return Math.floor(value).toString(16)
  }
  return hex(Date.now() / 1000) +
    ' '.repeat(16).replace(/./g, () => hex(Math.random() * 16))
}