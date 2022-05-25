const { Router } = require('express');
const { postCreateSubasta, get, ganadorSubasta } = require('./controllers');
const isAuth = require('../middleware/auth')
const subastaRouter = Router();

subastaRouter.post('/crear',isAuth, postCreateSubasta)
subastaRouter.get('/get/:id', get )
subastaRouter.post('/ganar', isAuth, ganadorSubasta)

module.exports = subastaRouter