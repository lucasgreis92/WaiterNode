module.exports = function(app) {
	
	var produtoFacade = {};
	var produtoService = app.services.v1.produtoService;
	var produtoMap = app.helpers.produtoMap;

	produtoFacade.findAll = function(req, res) {
		produtoService.findAll(function(statusCode,body){
			if (statusCode == 200) {
				res.send(produtoMap.convertToDTOList(body));		
			} else {
				res.status(statusCode).send(body)
				
			}
		});
		

	};

	produtoFacade.findAllActive = function(req, res) {
		produtoService.findAllActive(function(statusCode,body){
			if (statusCode == 200) {
				res.send(produtoMap.convertToDTOList(body));		
			} else {
				res.status(statusCode).send(body)
				
			}
		});
		

	};

	return produtoFacade;
}