module.exports = function(app) {
	
	var mesaFacade = app.facade.v1.mesaFacade;
	var properties = app.properties.properties;
	
	app.route('/'+properties.WS_URL_CONTEXT+'/services/v1/mesa')
		.get(mesaFacade.findAll);

}