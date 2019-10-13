var PropertiesReader = require('properties-reader');
var prop = PropertiesReader('./config/application.properties');
var properties = {
	WS_HOST: prop.get('WS_HOST'),
	WS_URL_CONTEXT : prop.get('WS_URL_CONTEXT')
}
module.exports = properties;