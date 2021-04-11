const { encrypt, decrypt } = require('./crypto');
const bcrypt = require('bcrypt');


const password = 'Tt147369@'
const hashedPassword = bcrypt.hashSync(password, 8);


const hash = encrypt(password);


console.time('crypto')
const text = decrypt(hash);
const cryptoMatch = text == password
console.timeEnd('crypto')


console.time('bcrypt');
const passwordMatch = bcrypt.compareSync(password, hashedPassword);
console.timeEnd('bcrypt');


console.log(cryptoMatch);
console.log(passwordMatch);
console.log(hashedPassword);
console.log(hash);
console.log(text); // Hello World!
