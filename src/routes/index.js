const { home_page, login_page, login, private_page, logout } = require('../controllers/main.controller');
const hasSession = require('../middlewares/hasSession');
const validarSession = require('../middlewares/validarSession');

const router = require('express').Router();

router.get('/', home_page)

router.get('/login', hasSession, login_page)

router.post('/login', login)
router.get('/logout', logout)

router.get('/private', validarSession,  private_page)

module.exports = router;