import jwt from 'jsonwebtoken';

const secretKey = process.env.secretKey ;

export function createToken(payload) {
  return jwt.sign(payload, secretKey, { expiresIn: '1h' });
}

export function verifyToken(token) { 
  console.log(secretKey ,'----secretkey--------')
  try {
    const decoded = jwt.verify(token, secretKey); 
    return decoded;
  } catch (error) {
    return null;
  }
}
