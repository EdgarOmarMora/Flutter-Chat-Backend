/* path:api/usuarios */
const {Router}=require('express');
const { validarJWT } = require('../midlewares/validar-jwt');
const {getUsuarios}=require('../controllers/usuarios');

const router=Router();

// Validar JWT
router.get('/', validarJWT, getUsuarios);

module.exports=router;