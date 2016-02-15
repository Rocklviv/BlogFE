var ns = ns || {};

(function(ns){
  ns.RequestLib = {};
  /**
   * Public method for getting routes.
   * @returns {Array}
   */
  ns.RequestLib.getRoute = function() {
    return _checkUrl();
  };

  /**
   * Gets current url and return controller, method and arguments.
   * @returns {Array}
   * @private
   */
  function _checkUrl() {
    /** @type {string} */ var url = window.location.href;
    if (!url) {
      console.log('Url is not set.');
    }
    url = url.split('/#');
    return url[1].split('/');
  }
}(ns));