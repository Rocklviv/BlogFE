function homeController() {

  var CONFIG = {
    'CONTAINER_ID': 'mainPage',
    'TEMPLATE_ID': 'homePage'
  };

  /**
   *
   * @private
   */
  function _init(){
    _getData();
  }

  /**
   *
   * @private
   */
  function _render(){
    var container = document.getElementById(CONFIG['CONTAINER_ID']);
    var source = document.getElementById(CONFIG['TEMPLATE_ID']);
    var tpl = Handlebars.compile(source.innerHTML);
    console.log(data_);
    container.innerHTML += tpl(data_);
  }

  function _getData() {
    request.GET('http://localhost:5000/api/v1/posts', processData_);
  }

  function processData_(data) {
    if (data && data.status == 200) {
      /** @type {Object} */var parsedData = JSON.parse(data.response);
      /** @type {Array} */var articles = [];
      articles = JSON.parse(parsedData['result']['articles']);
      data_['articles'] = articles;
      _render();
    }
  }

  /**
   * Simple Pagination.
   * @param page String Page number.
   */
  this.page = function (page) {
    if (!page) page = 1;
    console.log(page);
  };

  /**
   * Shows article
   * @param slug
   */
  this.article = function (slug) {
    if (!slug || slug == "") {
      console.log('Error');
    } else {
      console.log(slug);
    }
  };

  /**
   * Instance of XMLHttpRequest.
   * @type {XMLHttpRequest}
   */
  var request = ns.XMLHttpRequest;

  /**
   * Variable to store data.
   * @type {Object}
   * @private
   */
  var data_ = {};

  var self_ = this;

  _init();
}
window['homeController'] = homeController;