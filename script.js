// script.js
const jwt = require('jsonwebtoken');

const encrypt = (payload, secret) => {
  const token = jwt.sign(payload, secret, { expiresIn: '1h' });
  return token;
};

const token = encrypt({ userId: '12345', name: 'Alice' }, 'mySecretKey');
console.log('Generated Token:', token);