module.exports = function(app) {
	
	var mesaMap = {};
	
	mesaMap.convertToDTO = function(obj){
		var dto = {
			idMesa : obj.idMesa,
			dsMesa : obj.dsMesa
		};
		return dto;
	}
	mesaMap.convertToDTOList = function(list){
		var retList = [];
		if (list){
			list.forEach(function(element){
				retList.push(mesaMap.convertToDTO(element));
			});
		}
		return retList;
	}

	mesaMap.convertToObject = function(dto,obj){
		obj = {
			idMesa : dto.idMesa,
			dsMesa : dto.dsMesa
		}
		return obj;
	}

	mesaMap.convertToObjectList = function(list){
		var retList = [];
		if (list){
			list.forEach(function(element){
				retList.push(mesaMap.convertToObject(element));
			});
		}
		return retList;
	}


	return mesaMap;
}