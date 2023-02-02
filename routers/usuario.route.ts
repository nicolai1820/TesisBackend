import { Router } from "express";
import { check } from "express-validator";
import validarJWT from '../middlewares/validar-jwt';
import { adminRol } from '../middlewares/validar-roles';
import { getUsuarioDashboard, postUsuario, putUsuario, deleteUsuario } from '../controllers/usuario.controller';
import { emailExiste } from '../helpers/db-validators';
import validarCampos from '../middlewares/validar-campos';


const router = Router();

router.get("/", [validarJWT, adminRol], getUsuarioDashboard);

router.post(
  "/",
  [
    validarJWT,
    adminRol,
    check("cedula", "La cedula es obligatoria").not().isEmpty(),
    check("id_rol", "El rol del usuario es obligatoria").not().isEmpty(),
    check("email", "El email es obligatorio").not().isEmpty(),
    check("email", "El email no es valido").isEmail(),
    check("email").custom(emailExiste),
    check("password", "El password debe tener mas de 4 caracteres").isLength({
      min: 3,
    }),

    validarCampos,
  ],
  postUsuario
);

router.put("/", [validarJWT, adminRol], putUsuario);

router.delete("/", [validarJWT, adminRol], deleteUsuario);

export default router;