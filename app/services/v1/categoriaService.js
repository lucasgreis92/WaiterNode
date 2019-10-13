module.exports = function(app) {
	
	var categoriaService = {};
	var request = app.request.serviceRequest;
	categoriaService.findAll = function(callback) {
		request.get('/services/v1/categoria',{},undefined,function(error, res, body){
				callback(res.statusCode,JSON.parse(body));
		});
		
	};

	categoriaService.findAllActive = function(callback) {
		request.get('/services/v1/categoria/active',{},undefined,function(error, res, body){
			if (res.statusCode == 200) {
				var categoriaList = JSON.parse(body);
					categoriaList.sort(function(cat1,cat2){
						if (cat1.nrOrdem == cat2.nrOrdem){
							return 0;
						}else if (cat1.nrOrdem >= cat2.nrOrdem){
							return 1;
						}else {
							return -1;
						}
					});
					callback(res.statusCode,categoriaList);

			}else{
				callback(res.statusCode,JSON.parse(body));
			}
		});
		
	};

	return categoriaService;
}