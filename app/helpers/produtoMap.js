module.exports = function(app) {
	
	var produtoMap = {};
	var categoriaMap = app.helpers.categoriaMap;
	var produtoIngredienteMap = app.helpers.produtoIngredienteMap;

	produtoMap.convertToDTO = function(obj){
		var dto = {
			idProduto : obj.idProduto,
			valor: obj.valor,
			dsNome : obj.dsNome,
			dsComplemento : obj.dsComplemento,
			idCategoria : categoriaMap.convertToDTO(obj.idCategoria),
			produtoIngredienteList: produtoIngredienteMap.convertToDTOList(obj.produtoIngredienteList)
		};
		return dto;
	}
	produtoMap.convertToDTOList = function(list){
		var retList = [];
		if (list){
			list.forEach(function(element){
				retList.push(produtoMap.convertToDTO(element));
			});
		}
		return retList;
	}

	produtoMap.convertToObject = function(dto,obj){
		var obj = {
			idProduto : dto.idProduto,
			valor: dto.valor,
			dsNome : dto.dsNome,
			dsComplemento : dto.dsComplemento,
			idCategoria : categoriaMap.convertToObject(dto.idCategoria),
			produtoIngredienteList: produtoIngredienteMap.convertToObjectList(dto.produtoIngredienteList)
		};
		return obj;
	}

	produtoMap.convertToObjectList = function(list){
		var retList = [];
		if (list){
			list.forEach(function(element){
				retList.push(produtoMap.convertToObject(element));
			});
		}
		return retList;
	}


	return produtoMap;
}