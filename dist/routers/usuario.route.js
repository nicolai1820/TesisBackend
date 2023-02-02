"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const validar_jwt_1 = __importDefault(require("../middlewares/validar-jwt"));
const validar_roles_1 = require("../middlewares/validar-roles");
const usuario_controller_1 = require("../controllers/usuario.controller");
const db_validators_1 = require("../helpers/db-validators");
const validar_campos_1 = __importDefault(require("../middlewares/validar-campos"));
const router = (0, express_1.Router)();
router.get("/", [validar_jwt_1.default, validar_roles_1.adminRol], usuario_controller_1.getUsuarioDashboard);
router.post("/", [
    validar_jwt_1.default,
    validar_roles_1.adminRol,
    (0, express_validator_1.check)("cedula", "La cedula es obligatoria").not().isEmpty(),
    (0, express_validator_1.check)("id_rol", "El rol del usuario es obligatoria").not().isEmpty(),
    (0, express_validator_1.check)("email", "El email es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("email", "El email no es valido").isEmail(),
    (0, express_validator_1.check)("email").custom(db_validators_1.emailExiste),
    (0, express_validator_1.check)("password", "El password debe tener mas de 4 caracteres").isLength({
        min: 3,
    }),
    validar_campos_1.default,
], usuario_controller_1.postUsuario);
router.put("/", [validar_jwt_1.default, validar_roles_1.adminRol], usuario_controller_1.putUsuario);
router.delete("/", [validar_jwt_1.default, validar_roles_1.adminRol], usuario_controller_1.deleteUsuario);
exports.default = router;
//# sourceMappingURL=usuario.route.js.map