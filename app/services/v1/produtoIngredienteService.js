module.exports = function(app) {
	
	var produtoIngredienteService = {};
	var request = app.request.serviceRequest;
	produtoIngredienteService.findAll = function(callback) {
		request.get('/services/v1/produtoingrediente',{},undefined,function(error, res, body){
				callback(res.statusCode,JSON.parse(body));
		});
		
	};

	produtoIngredienteService.findAllActive = function(callback) {
		request.get('/services/v1/produtoingrediente/active',{},undefined,function(error, res, body){
				callback(res.statusCode,JSON.parse(body));
		});
		
	};

	return produtoIngredienteService;
}