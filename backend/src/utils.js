const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const algorithm = 'aes-256-ctr';
const iv = crypto.randomBytes(16);

console.log(process.env.JWT_SECRET);

function getTokenPayload(token) {
  return jwt.verify(token, process.env.JWT_SECRET);
};

function getUserId(req, authToken) {
  if (req) {
    const authHeader = req.headers.token;
    if (authHeader) {
      const token = req.headers.token;
      if (!token) {
        throw new Error('No token found');
      }
      const { userId } = getTokenPayload(token);
      return userId;
    }
  } else if (authToken) {
    const { userId } = getTokenPayload(authToken);
    return userId;
  }
  throw new Error('Not authenticated');
};

class Crypto {
  static encrypt(text) {
    const cipher = crypto.createCipheriv(algorithm, process.env.JWT_SECRET, iv);

    const encrypted = cipher.update(text, "utf8", "hex");

    return [
        encrypted + cipher.final("hex"),
        Buffer.from(iv).toString("hex"),
    ].join("-");
  };
  
  static decrypt(hash) {
    const [encrypted, iv] = hash.split("-");
    
    if (!iv) throw new Error("IV not found");

    const decipher = crypto.createDecipheriv(algorithm, process.env.JWT_SECRET, Buffer.from(iv, 'hex'));

    return decipher.update(encrypted, "hex", "utf8") + decipher.final("utf8");
  };

  static compare(text, hashedPassword) {
    return this.decrypt(hashedPassword) == text;
  };
};


module.exports = {
  Crypto,
  getUserId
};
