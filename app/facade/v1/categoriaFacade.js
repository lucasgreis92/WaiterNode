module.exports = function(app) {
	
	var categoriaFacade = {};
	var categoriaService = app.services.v1.categoriaService;
	var categoriaMap = app.helpers.categoriaMap;

	var produtoService = app.services.v1.produtoService;
	var produtoMap = app.helpers.produtoMap;

	var produtoIngredienteService = app.services.v1.produtoIngredienteService;
	var produtoIngredienteMap = app.helpers.produtoIngredienteMap;

	categoriaFacade.findAll = function(req, res) {
		categoriaService.findAll(function(statusCode,categorias){
			if (statusCode == 200) {
				res.send(categoriaMap.convertToDTOList(categorias));		
			} else {
				res.status(statusCode).send(categorias)
				
			}
		});
		

	};

	categoriaFacade.findAllActive = function(req, res) {
		console.log('aqui');
		categoriaService.findAllActive(function(statusCode,categorias){
			if (statusCode == 200) {
				var categoriaList = categorias;
				var categoriaDTOList = categoriaMap.convertToDTOList(categorias);
				produtoService.findAllActive(function(statusCode,produtos){
					if (statusCode == 200) {
						produtoIngredienteService.findAll(function(statusCode,ingredientes){
							if (statusCode == 200) {
								var produtosList = produtos;
								produtosList.forEach(function(prod){
									ingredientes.forEach(function(ing){
										if (ing.idProduto.idProduto == prod.idProduto){
											if (prod.produtoIngredienteList){
												prod.produtoIngredienteList.push(ing);
											}else{
												prod.produtoIngredienteList = [];
												prod.produtoIngredienteList.push(ing);
											}	
										}
									});

									categoriaDTOList.forEach(function(cat){
										if (prod.idCategoria.idCategoria == cat.idCategoria){
											if (cat.produtoList){
												cat.produtoList.push(produtoMap.convertToDTO(prod));
											}else{
												cat.produtoList = [];
												cat.produtoList.push(produtoMap.convertToDTO(prod));
											}
										}
									});
								});
								res.send(categoriaDTOList);		
							} else {
								res.status(statusCode).send(categorias)
								
							}
						});
					} else {
						res.status(statusCode).send(body)
					}
				});
			} else {
				res.status(statusCode).send(body)
				
			}
		});
		

	};

	return categoriaFacade;
}