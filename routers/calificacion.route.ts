import { Router } from 'express';
import { check } from 'express-validator';
import validarJWT from '../middlewares/validar-jwt';
import { adminRol } from '../middlewares/validar-roles';
import validarCampos from '../middlewares/validar-campos';
import { getCalificaciones, postCalificacion, postCalcularCalificacion } from '../controllers/calificacion.controller';



const router = Router();

router.get('/',[
    validarJWT, 
], getCalificaciones);


router.post('/calcular',[
    validarJWT, 
    check('idProyecto', 'idProyecto es obligatorio').not().isEmpty(),
    validarCampos,
], postCalcularCalificacion);

router.post('/',[
    validarJWT, 
    check('idProyecto', 'idProyecto es obligatorio').not().isEmpty(),
    check('idPregunta1', 'idPregunta1 es obligatorio').not().isEmpty(),
    check('calificacion1', 'calificacion1 es obligatorio').not().isEmpty(),
    check('idPregunta2', 'idPregunta2 es obligatorio').not().isEmpty(),
    check('calificacion2', 'calificacion2 es obligatorio').not().isEmpty(),
    check('idPregunta3', 'idPregunta3 es obligatorio').not().isEmpty(),
    check('calificacion3', 'calificacion3 es obligatorio').not().isEmpty(),
    check('idPregunta4', 'idPregunta4 es obligatorio').not().isEmpty(),
    check('calificacion4', 'calificacion4 es obligatorio').not().isEmpty(),
    check('idPregunta5', 'idPregunta5 es obligatorio').not().isEmpty(),
    check('calificacion5', 'calificacion5 es obligatorio').not().isEmpty(),
    check('idPregunta6', 'idPregunta6 es obligatorio').not().isEmpty(),
    check('calificacion6', 'calificacion6 es obligatorio').not().isEmpty(),
    check('idPregunta7', 'idPregunta7 es obligatorio').not().isEmpty(),
    check('calificacion7', 'calificacion7 es obligatorio').not().isEmpty(),
    check('idPregunta8', 'idPregunta8 es obligatorio').not().isEmpty(),
    check('calificacion8', 'calificacion8 es obligatorio').not().isEmpty(),
    check('idPregunta9', 'idPregunta9 es obligatorio').not().isEmpty(),
    check('calificacion9', 'calificacion9 es obligatorio').not().isEmpty(),
    check('idPregunta10', 'idPregunta10 es obligatorio').not().isEmpty(),
    check('calificacion10', 'calificacion10 es obligatorio').not().isEmpty(),
    check('idPregunta11', 'idPregunta11 es obligatorio').not().isEmpty(),
    check('calificacion11', 'calificacion11 es obligatorio').not().isEmpty(),
    check('idPregunta12', 'idPregunta12 es obligatorio').not().isEmpty(),
    check('calificacion12', 'calificacion12 es obligatorio').not().isEmpty(),
    check('idPregunta13', 'idPregunta13 es obligatorio').not().isEmpty(),
    check('calificacion13', 'calificacion13 es obligatorio').not().isEmpty(),
    check('idPregunta14', 'idPregunta14 es obligatorio').not().isEmpty(),
    check('calificacion14', 'calificacion14 es obligatorio').not().isEmpty(),
    check('idPregunta15', 'idPregunta15 es obligatorio').not().isEmpty(),
    check('calificacion15', 'calificacion15 es obligatorio').not().isEmpty(),
    check('idPregunta16', 'idPregunta16 es obligatorio').not().isEmpty(),
    check('calificacion16', 'calificacion16 es obligatorio').not().isEmpty(),
    check('idPregunta17', 'idPregunta17 es obligatorio').not().isEmpty(),
    check('calificacion17', 'calificacion17 es obligatorio').not().isEmpty(),
    check('idPregunta18', 'idPregunta18 es obligatorio').not().isEmpty(),
    check('calificacion18', 'calificacion18 es obligatorio').not().isEmpty(),
    check('idPregunta19', 'idPregunta19 es obligatorio').not().isEmpty(),
    check('calificacion19', 'calificacion19 es obligatorio').not().isEmpty(),
    check('idPregunta20', 'idPregunta20 es obligatorio').not().isEmpty(),
    check('calificacion20', 'calificacion20 es obligatorio').not().isEmpty(),
    check('idPregunta21', 'idPregunta21 es obligatorio').not().isEmpty(),
    check('calificacion21', 'calificacion21 es obligatorio').not().isEmpty(),
    check('idPregunta22', 'idPregunta22 es obligatorio').not().isEmpty(),
    check('calificacion22', 'calificacion22 es obligatorio').not().isEmpty(),
    check('idPregunta23', 'idPregunta23 es obligatorio').not().isEmpty(),
    check('calificacion23', 'calificacion23 es obligatorio').not().isEmpty(),
    check('idPregunta24', 'idPregunta24 es obligatorio').not().isEmpty(),
    check('calificacion24', 'calificacion24 es obligatorio').not().isEmpty(),
    check('idPregunta25', 'idPregunta25 es obligatorio').not().isEmpty(),
    check('calificacion25', 'calificacion25 es obligatorio').not().isEmpty(),
    check('idPregunta26', 'idPregunta26 es obligatorio').not().isEmpty(),
    check('calificacion26', 'calificacion26 es obligatorio').not().isEmpty(),
    check('idPregunta27', 'idPregunta27 es obligatorio').not().isEmpty(),
    check('calificacion27', 'calificacion27 es obligatorio').not().isEmpty(),
    check('idPregunta28', 'idPregunta28 es obligatorio').not().isEmpty(),
    check('calificacion28', 'calificacion28 es obligatorio').not().isEmpty(),
    check('idPregunta29', 'idPregunta29 es obligatorio').not().isEmpty(),
    check('calificacion29', 'calificacion29 es obligatorio').not().isEmpty(),
    check('idPregunta30', 'idPregunta30 es obligatorio').not().isEmpty(),
    check('calificacion30', 'calificacion30 es obligatorio').not().isEmpty(),
    validarCampos,
], postCalificacion);


export default router;