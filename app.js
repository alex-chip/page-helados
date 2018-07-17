var express = require('express');
var routes = require('./routes');

var app = express();

  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  //app.use(express.bodyParser());
  //app.use(express.methodOverride());
  //app.use(app.router);
  app.use(express.static(__dirname + '/public'));


  app.get('/', routes.index);
  app.get('/clientes', routes.clientes);
  app.get('/nosotros', routes.nosotros);
  app.get('/servicios', routes.servicios);

var port = process.env.PORT || 5000;

app.listen(port, function(){
  console.log("Listening on " + port);
})
