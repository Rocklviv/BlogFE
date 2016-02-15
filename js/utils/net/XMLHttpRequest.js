
var ns = ns || {};

(function(ns){

  /**
   *
   * @type {XMLHttpRequest}
   */
  ns.XMLHttpRequest = {};

  /**
   * Headers.
   * @type {Object}
   * @private
   */
  ns.XMLHttpRequest.headers_ = {};

  /**
   *
   * @param url
   * @param callback
   * @returns {!XMLHttpRequest}
   * @constructor
   */
  ns.XMLHttpRequest.GET = function(url, callback) {
    if (url.length > 255) {
      /** @type {!Array} */ var parts = url.split('?');
      return self_.POST(parts[0], callback, parts[1]);
    }
    return _sendRequest('GET', url, callback);
  };

  /**
   *
   * @param url
   * @param callback
   * @param opt_data
   * @returns {!XMLHttpRequest}
   * @constructor
   */
  ns.XMLHttpRequest.POST = function(url, callback, opt_data){
    return _sendRequest('POST', url, callback, opt_data);
  };

  /**
   *
   * @param url
   * @param callback
   * @param opt_data
   * @returns {!XMLHttpRequest}
   * @constructor
   */
  ns.XMLHttpRequest.PUT = function(url, callback, opt_data){
    return _sendRequest('PUT', url, callback, opt_data);
  };

  /**
   *
   * @param url
   * @param callback
   * @param opt_data
   * @returns {!XMLHttpRequest}
   * @constructor
   */
  ns.XMLHttpRequest.DELETE = function(url, callback, opt_data){
    return _sendRequest('DELETE', url, callback, opt_data);
  };

  /**
   * Sends XMLHttpRequest.
   *
   * @param type {string} HTTP Method.
   * @param url {string} Requested url.
   * @param callback {function(XMLHttpRequest)} Callback.
   * @param opt_data {string|Object=} Provides the request entity body.
   *     If opt_data is Object, request will be sent as application/json.
   * @return {!XMLHttpRequest} Returns instance of XMLHttpRequest.
   * @private
   */
  function _sendRequest(type, url, callback, opt_data){
    url = url.replace(/^\/+/, '/');
    url += (~url.indexOf('?') ? '&' : '?');

    /** @type {!XMLHttpRequest} */
    var req = window['XMLHttpRequest'] ?
      new XMLHttpRequest : new ActiveXObject('Microsoft.XMLHTTP');
    req.onreadystatechange = function() {
      if (4 === req.readyState) {
        callback(req);
      }
    };
    req.open(type, url, true);
    req.send(_prepareRequest(req, type, opt_data));
    return req;
  }

  /**
   * Prepares requests and sets headers.
   * @private
   */
  function _prepareRequest(request, type, opt_data){
    for (/** @type {string} */ var name in ns.XMLHttpRequest.headers_) {
      request.setRequestHeader(name, net.HttpRequest.headers_[name]);
    }

    request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

    if (opt_data && typeof opt_data == 'object') {
      request.setRequestHeader('Content-Type',
        'application/json; charset=UTF-8');
      opt_data = JSON.stringify(
        /** @type {!Object} */ (opt_data));
    } else if (type == 'POST') {
      request.setRequestHeader('Content-Type',
        'application/x-www-form-urlencoded; charset=UTF-8');
    }

    return /** @type {string} */ (opt_data);
  }


  /**
   * Instance of XMLHttpReqeust.
   */
  var self_ = this;

}(ns));