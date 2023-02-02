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
const validar_campos_1 = __importDefault(require("../middlewares/validar-campos"));
const proyecto_controller_1 = require("../controllers/proyecto.controller");
const router = (0, express_1.Router)();
router.get("/", [validar_jwt_1.default], proyecto_controller_1.getProyectos);
router.post("/", [
    validar_jwt_1.default,
    (0, express_validator_1.check)("nombre", "El nombre es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("descripcion", "La descripcion es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("id_estudiante_1", "El id_estudiante_1 es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("id_estudiante_2", "El id_estudiante_2 es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("id_jurado_1", "El id_jurado_1 es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("id_jurado_2", "El id_jurado_2 es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("id_tutor", "El id_tutor es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("id_ciudad", "El id_ciudad es obligatorio").not().isEmpty(),
    validar_campos_1.default,
], proyecto_controller_1.postProyecto);
router.put("/", [validar_jwt_1.default, validar_roles_1.adminRol], usuario_controller_1.putUsuario);
router.delete("/", [validar_jwt_1.default, validar_roles_1.adminRol], usuario_controller_1.deleteUsuario);
router.get("/acta/:idProyecto", [], proyecto_controller_1.getActaGrado);
router.get("/actaEstudiante/:idUsuario", [], proyecto_controller_1.getActaGradoEstudiante);
exports.default = router;
//# sourceMappingURL=proyecto.route.js.map