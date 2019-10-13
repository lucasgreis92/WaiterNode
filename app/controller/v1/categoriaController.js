module.exports = function(app) {
	
	var categoriaFacade = app.facade.v1.categoriaFacade;
	var properties = app.properties.properties;
	
	app.route('/'+properties.WS_URL_CONTEXT+'/services/v1/categoria')
		.get(categoriaFacade.findAll);

	app.route('/'+properties.WS_URL_CONTEXT+'/services/v1/categoria/active')
		.get(categoriaFacade.findAllActive);	
}