var ns = ns || {};

(function(ns){
  ns.Application = {};

  /**
   * Initializing application.
   */
  ns.Application.init = function(){
    _setEvents();
    ns.Spinner.startSpinning();
  };

  /**
   * Router method.
   * @private
   */
  function _router() {
    /** @type string */ var prop, controller, fn;
    var rq = ns.RequestLib;
    var url = rq.getRoute();

    for (prop in self_.url) {
      if (self_.url.hasOwnProperty(prop)) {
        if (prop == url[1]) {
          controller = self_.url[prop];
          fn = window[controller];
          if (typeof fn === 'function') {
            if (url[3]) {
              var ffn = new fn();
              ffn[url[2]](url[3]);
            } else {
              fn();
            }
          }
        }
      }
    }
  }

  /**
   * Sets events on URL Hash change.
   * @private
   */
  function _setEvents() {
    if (isLoaded == false) {
      window.onload = _router();
      isLoaded = true;
    } else {
      window.onhashchange = _router;
    }
  }

  /**
   * List of routes.
   * @type Object
   */
  this.url = {
    '': 'homeController',
    'home': 'homeController',
    'about': 'aboutController',
    'admin': 'adminController',
    'auth': 'authController'
  };

  var isLoaded = false;

  /**
   * @type Application
   */
  var self_ = this;
}(ns));