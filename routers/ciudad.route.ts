import { Router } from 'express';
import { check } from 'express-validator';
import validarJWT from '../middlewares/validar-jwt';
import { adminRol } from '../middlewares/validar-roles';
import { getCiudadesDashboard, postCiudad, putCiudad, deleteCiudad, getCiudadesTrueDashboard } from '../controllers/ciudad.controller';
import validarCampos from '../middlewares/validar-campos';



const router = Router();

router.get('/',[
    validarJWT, 
    adminRol
], getCiudadesDashboard);

router.get('/activas',[
    validarJWT, 
], getCiudadesTrueDashboard);

router.post('/',[
    validarJWT, 
    adminRol,
    check('ciudad', 'Ciudad es obligatorio').not().isEmpty(),
    validarCampos,
], postCiudad);

router.put('/',[
    validarJWT, 
    adminRol
], putCiudad);

router.delete('/',[
    validarJWT, 
    adminRol
], deleteCiudad);



export default router;