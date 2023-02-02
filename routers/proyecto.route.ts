import { Router } from "express";
import { check } from "express-validator";
import validarJWT from '../middlewares/validar-jwt';
import { adminRol } from '../middlewares/validar-roles';
import { getUsuarioDashboard, postUsuario, putUsuario, deleteUsuario } from '../controllers/usuario.controller';
import { emailExiste } from '../helpers/db-validators';
import validarCampos from '../middlewares/validar-campos';
import { postProyecto, getProyectos, getActaGrado, getActaGradoEstudiante } from '../controllers/proyecto.controller';


const router = Router();

router.get("/", [validarJWT], getProyectos);

router.post(
  "/",
  [
    validarJWT,
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("descripcion", "La descripcion es obligatorio").not().isEmpty(),
    check("id_estudiante_1", "El id_estudiante_1 es obligatorio").not().isEmpty(),
    check("id_estudiante_2", "El id_estudiante_2 es obligatorio").not().isEmpty(),
    check("id_jurado_1", "El id_jurado_1 es obligatorio").not().isEmpty(),
    check("id_jurado_2", "El id_jurado_2 es obligatorio").not().isEmpty(),
    check("id_tutor", "El id_tutor es obligatorio").not().isEmpty(),
    check("id_ciudad", "El id_ciudad es obligatorio").not().isEmpty(),

    validarCampos,
  ],
  postProyecto
);

router.put("/", [validarJWT, adminRol], putUsuario);

router.delete("/", [validarJWT, adminRol], deleteUsuario);


router.get("/acta/:idProyecto", [], getActaGrado);
router.get("/actaEstudiante/:idUsuario", [], getActaGradoEstudiante);

export default router;