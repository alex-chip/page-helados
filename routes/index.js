
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Mariela' })
};
exports.clientes = function(req, res){
  res.render('clientes', { title: 'Clientes' })
};
exports.nosotros = function(req, res){
  res.render('nosotros', { title: 'Nosotros' })
};
exports.servicios = function(req, res){
  res.render('servicios', { title: 'Servicios' })
};
