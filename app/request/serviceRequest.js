var request = require('request');
var properties = require('../properties/properties');

var serviceRequest = {
	
	get: function(url,params,res,callback){
		var opt = {
			url: properties.WS_HOST + url,
			headers: {
				"content-type": "application/json",
				"accept":"application/json"
			},
			rejectUnauthorized: false,
			qs: params
		};
		request(opt, callback);
	},
	post: function(url,body,res,callback){
		var opt = {
			url: properties.WS_HOST + url,
			headers: {
				"content-type": "application/json",
				"accept":"application/json"
			},
			rejectUnauthorized: false,
			body: body
		};	
		request.post(opt, callback);
	},
	delete: function(url,params,res,callback){
		var opt = {
			url: properties.WS_HOST + url,
			headers: {
				"content-type": "application/json",
				"accept":"application/json"
			},
			rejectUnauthorized: false,
			qs: params
		};
		request.delete(opt, callback);
	}


};

module.exports = serviceRequest;