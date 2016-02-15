var ns = ns || {};

(function(ns){

  /**
   *
   * @type {Dom}
   */
  ns.Dom = {};

  /**
   * @construct
   */
  ns.Dom.getById = function(){};

  /**
   * @construct
   */
  ns.Dom.getByClsNm = function(){};

  ns.Dom.toggle = function (el, className) {
    if (ns.Dom.hasClass(el, className)) {
      ns.Dom.removeClass(el, className);
    }
  };

  /**
   *
   * @param {Node|Element} el
   * @param {String} className
   */
  ns.Dom.addClass = function(el, className) {
    if (el) {
      var classes = el.className.split(' ');
      el.className = '';
      for (var i = 0; i < classes.length; i++) {
        el.className += classes[i];
      }
      el.className += ' ' + className;
    }
  };

  /**
   * Remove css class from element.
   * @param {Node|Element} el Element.
   * @param {string} className Css class that should be removed from element.
   */
  ns.Dom.removeClass = function (el, className) {
    if (el) {
      /** @type {!Array.<string>} */
      var args = Array.prototype.slice.call(arguments, 1);
      ns.Dom.setClass(el, el.className.replace(
        new RegExp('\\s?\\b(' + args.join('|') + ')\\b', 'g'), ''));
    }
  };

  ns.Dom.setClass = function(el, className) {
    if (el) {
      el.className = Array.prototype.slice.call(arguments, 1).join(' ');
    }
  };

  /**
   * Checks is element or node have a class name.
   * @param {Node|Element} el
   * @param {String} className
   * @returns {boolean}
   */
  ns.Dom.hasClass = function (el, className) {
    if (el) {
      var classes = el.className.split(' ');
      for (var i = 0; i < classes.length; i++) {
        if (className == classes[i]) {
          return true;
        }
      }
    }
    return false;
  };

  /**
   * @type {!ns.Dom}
   */
  var self_ = this;

}(ns));