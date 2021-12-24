/* path:api/login */
const {Router}=require('express');
const { check } = require('express-validator');
const { crearUsuario, login, renewToken } = require('../controllers/auth');
const { validarCampos } = require('../midlewares/validar-campos');
const { validarJWT } = require('../midlewares/validar-jwt');

const router=Router();
router.post('/new', [
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('password','La contraseña es obligatoria').not().isEmpty(),
    check('email','El correo es obligatorio').isEmail(),
    validarCampos
], crearUsuario);

router.post('/',[
    check('password','La contraseña es obligatoria').not().isEmpty(),
    check('email','El correo es obligatorio').isEmail(),
], login);

// Validar JWT
router.get('/renew', validarJWT, renewToken);

module.exports=router;