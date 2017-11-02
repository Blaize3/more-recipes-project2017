import bcrypt from 'bcrypt';
/**
 *
 *
 * @class Bicryption
 */
class Bicryption {
  /**
 *
 *
 * @static
 * @param {any} password
 * @returns {object} The identifier for ...
 * @memberof Bicryption
 */
  static encryptPassword(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  }

  /**
 *
 *
 * @static
 * @param {any} password
 * @param {any} hash
 * @returns {object} The identifier for ...
 * @memberof Bicryption
 */
  static passwordValidator(password) {
    return bcrypt.compareSync(password, this.local.password);
  }

}

export default Bicryption;
