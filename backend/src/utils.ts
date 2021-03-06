const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const algorithm = 'aes-256-ctr';
const iv = crypto.randomBytes(16);
const JWT_SECRET = process.env.JWT_SECRET;
import { AuthenticationError } from "apollo-server";


export function getTokenPayload(authHeader, req=null) {
  const token = authHeader.replace('Bearer ', '')
  const user = jwt.verify(token, JWT_SECRET)
  console.log(user);
  return user
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

export function slug(str, separator='') {
  str = str
    .toLowerCase()
    .replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a')
    .replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e')
    .replace(/ì|í|ị|ỉ|ĩ/g, 'i')
    .replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o')
    .replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u')
    .replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y')
    .replace(/đ/g, 'd')
    .replace(/\s+/g, ' ')
    .replace(/[^A-Za-z0-9_ ]/g, '')
    .replace(/-+/g, '-')
  if (separator) {
    if (separator == ' ') {
      console.log(str);
      return str
    }
    return str.replace(/\s/g, separator)
  }
  return str.replace(/\s/g, '-')
}