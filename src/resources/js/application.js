/**
 *
 * @constructor
 */
function Application() {

  /**
   *
   * @type {Object}
   */
  var CONFIG = {
    version: 1.0,
    routes: [
      {
        'home': '!#/',
        'contact': '!#/contact'
      }
    ]
  };

  /**
   *
   * @param key
   * @returns {*}
   */
  this.get = function(key) {
    if (typeof key == 'string' || typeof key == 'object') {
      return CONFIG[key];
    } else {
      throw 'Key should be string or object.';
    }
  };

  /**
   *
   * @type {Application}
   * @private
   */
  var self_ = this;
}
window['Application'] = Application;