

function authController() {

  var CONFIG = {
    'CONTAINER_ID': 'mainPage',
    'TEMPLATE_ID': 'authPage',
    'AUTH_BUTTON_ID': 'doAuth',
    'AUTH_USERNAME_INPUT_ID': 'username',
    'AUTH_PASSWORD_INPUT_ID': 'password',
    'AUTH_STATUS_MESSAGE_BL_ID': 'message-block',
    'AUTH_STATUS_MESSAGE_ID': 'message'
  };

  function _init() {
    var container = document.getElementById(CONFIG['CONTAINER_ID']);
    var source = document.getElementById(CONFIG['TEMPLATE_ID']);
    var tpl = Handlebars.compile(source.innerHTML);
    container.innerHTML = tpl();

    _setEvents();
  }

  /**
   * Sets events on elements.
   * @private
   */
  function _setEvents() {
    /** @type {Node|Element} */var btn = document.getElementById(CONFIG['AUTH_BUTTON_ID']);
    /** @type {Node|Element} */var username = document.getElementById(CONFIG['AUTH_USERNAME_INPUT_ID']);
    /** @type {Node|Element} */var password = document.getElementById(CONFIG['AUTH_PASSWORD_INPUT_ID']);
    /** @type {Object} */var data = {};

    if (btn && btn != 'undefined') {
      btn.onclick = function (e) {
        e.preventDefault();
        if (username && password) {
          data = {'username': username.innerText, 'password': password.innerText};
          request_.POST('http://localhost:5000/api/v1/users', _processResult, data);
        }
      }
    }
  }

  function _processResult(response) {
    /** @type {Node|Element} */var message = document.getElementById(CONFIG['AUTH_STATUS_MESSAGE_ID']);
    /** @type {Node|Element} */var msgBlock = document.getElementById(CONFIG['AUTH_STATUS_MESSAGE_BL_ID']);
    console.log(response);
    if (response && response.readyState == 4) {
      var resp = JSON.parse(response.response);
      if (response.status == 403) {
        message.innerText = resp.message;
        ns.Dom.removeClass(msgBlock, 'disabled');
      }
    }
  }

  /**
   * Instance of XMLHttpRequest.
   * @type {XMLHttpRequest}
   * @private
   */
  var request_ = ns.XMLHttpRequest;

  /**
   * Instance of authController.
   * @type {authController}
   * @private
   */
  var self_ = this;

  _init();
}
window['authController'] = authController;