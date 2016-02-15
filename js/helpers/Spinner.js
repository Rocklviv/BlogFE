var ns = ns || {};

(function(ns) {

  var CONFIG = {
    'SPINNER_ID': 'spinner'
  };

  ns.Spinner = {};

  ns.Spinner.init = function() {
    _init();
  };

  function _init() {
    spinner_ = document.getElementById(CONFIG['SPINNER_ID']);
  }

  ns.Spinner.startSpinning = function(){
    if (spinner_ && spinner_.className) {
      ns.Dom.addClass(spinner_, 'active');
    } else {
      _init();
      ns.Spinner.startSpinning();
    }
  };

  ns.Spinner.stopSpinning = function(){
    if (spinner_ && spinner_.className) {
      ns.Dom.removeClass(spinner_, 'active');
    } else {
      _init();
      ns.Spinner.stopSpinning();
    }
  };

  /**
   * @type {Node|Element}
   */
  var spinner_ ;

}(ns));