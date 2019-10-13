module.exports = function(app) {
	
	var produtoService = {};
	var request = app.request.serviceRequest;
	produtoService.findAll = function(callback) {
		request.get('/services/v1/produto',{},undefined,function(error, res, body){
				callback(res.statusCode,JSON.parse(body));
		});
		
	};

	produtoService.findAllActive = function(callback) {
		request.get('/services/v1/produto/active',{},undefined,function(error, res, body){
				callback(res.statusCode,JSON.parse(body));
		});
		
	};

	return produtoService;
}