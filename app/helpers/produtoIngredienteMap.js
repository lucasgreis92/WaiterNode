module.exports = function(app) {
	
	var produtoIngredienteMap = {};
	
	produtoIngredienteMap.convertToDTO = function(obj){
		var dto = {
			idProdutoIngrediente : obj.idProdutoIngrediente,
			dsIngrediente : obj.dsIngrediente
		};
		return dto;
	}
	produtoIngredienteMap.convertToDTOList = function(list){
		var retList = [];
		if (list){
			list.forEach(function(element){
				retList.push(produtoIngredienteMap.convertToDTO(element));
			});
		}
		return retList;
	}

	produtoIngredienteMap.convertToObject = function(dto,obj){
		obj = {
			idProdutoIngrediente : dto.idProdutoIngrediente,
			dsIngrediente : dto.dsIngrediente
		}
		return obj;
	}

	produtoIngredienteMap.convertToObjectList = function(list){
		var retList = [];
		if (list){
			list.forEach(function(element){
				retList.push(produtoIngredienteMap.convertToObject(element));
			});
		}
		return retList;
	}


	return produtoIngredienteMap;
}