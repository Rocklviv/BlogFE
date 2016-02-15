Handlebars.registerHelper('each', function(context, options) {
  var res = "";
  for(var i=0; i < context.length; i++) {
    res += options.fn(context[i]);
  }
  return res;
});

Handlebars.registerHelper('list', function(context, options) {
  var res = '';
  context.forEach(function(obj){
    var key = Object.keys(obj);
    var data = {key: key, val: obj[key]};
    res += options.fn(obj, { data: data });
  });
  return res;
});