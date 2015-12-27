function HomePage() {
  Application.apply(this, arguments);

  function init_() {
    render_();
  }

  function render_() {
    var template = document.getElementById('contact');
    var body = document.getElementsByTagName('BODY')[0];
    var data = Handlebars.compile(template.innerHTML);

    body.innerHTML = data();
  }

  var self_ = this;
  init_();
}
window['HomePage'] = HomePage;