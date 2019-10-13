module.exports = function(app) {
	
	var categoriaMap = {};
	
	categoriaMap.convertToDTO = function(obj){
		var dto = {
			idCategoria : obj.idCategoria,
			dsNome : obj.dsNome
		};
		return dto;
	}
	categoriaMap.convertToDTOList = function(list){
		var retList = [];
		if (list){
			list.forEach(function(element){
				retList.push(categoriaMap.convertToDTO(element));
			});
		}
		return retList;
	}

	categoriaMap.convertToObject = function(dto,obj){
		obj = {
			idCategoria : dto.idCategoria,
			dsNome : dto.dsNome
		}
		return obj;
	}

	categoriaMap.convertToObjectList = function(list){
		var retList = [];
		if (list){
			list.forEach(function(element){
				retList.push(categoriaMap.convertToObject(element));
			});
		}
		return retList;
	}


	return categoriaMap;
}