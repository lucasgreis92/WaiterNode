module.exports = function(app) {
	
	var mesaService = {};
	var request = app.request.serviceRequest;
	mesaService.findAll = function(callback) {
		request.get('/services/v1/mesa',{},undefined,function(error, res, body){
				callback(res.statusCode,JSON.parse(body));
		});
		
	};

	return mesaService;
}