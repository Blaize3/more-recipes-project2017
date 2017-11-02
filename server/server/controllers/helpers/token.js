import jwt from 'jsonwebtoken';
import secret from '../../../../config';


export default {
  // generate the JWT
  generateToken(payLoad) {
    const token = jwt.sign(payLoad, secret.secret);
    return token;
  }
};

