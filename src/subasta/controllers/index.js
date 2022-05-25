const postCreateSubasta = require('./postCreateSubasta.controller');
const get = require('./getSubasta.controller')
const ganadorSubasta = require('./ganadorSubasta.controller')

module.exports = {
  postCreateSubasta,
	get,
	ganadorSubasta
};