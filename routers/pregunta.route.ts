import { Router } from 'express';
import validarJWT from '../middlewares/validar-jwt';
import { adminRol } from '../middlewares/validar-roles';
import { getPreguntas, putPregunta } from '../controllers/pregunta.controller';
import { check } from 'express-validator';
import validarCampos from '../middlewares/validar-campos';

const router = Router();

router.get('/',[
    validarJWT, 
], getPreguntas);

router.put('/',[
    validarJWT, 
    check('id_pregunta', 'Id_pregunta es obligatorio').not().isEmpty(),
    check('pregunta', 'pregunta es obligatorio').not().isEmpty(),
    adminRol,
    validarCampos,

], putPregunta);


export default router;