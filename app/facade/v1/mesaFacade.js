module.exports = function(app) {
	
	var mesaFacade = {};
	var mesaService = app.services.v1.mesaService;
	var mesaMap = app.helpers.mesaMap;

	mesaFacade.findAll = function(req, res) {
		mesaService.findAll(function(statusCode,mesas){
			if (statusCode == 200) {
				res.send(mesaMap.convertToDTOList(mesas));		
			} else {
				res.status(statusCode).send(mesas)
				
			}
		});
		

	};

	return mesaFacade;
}