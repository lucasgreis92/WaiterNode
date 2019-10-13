module.exports = function(app) {
	
	var produtoFacade = app.facade.v1.produtoFacade;
	var properties = app.properties.properties;

	app.route('/'+properties.WS_URL_CONTEXT+'/services/v1/produto')
		.get(produtoFacade.findAll);
	app.route('/'+properties.WS_URL_CONTEXT+'/services/v1/produto/active')
		.get(produtoFacade.findAllActive);	
}