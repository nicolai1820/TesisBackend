"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validar_jwt_1 = __importDefault(require("../middlewares/validar-jwt"));
const validar_roles_1 = require("../middlewares/validar-roles");
const pregunta_controller_1 = require("../controllers/pregunta.controller");
const express_validator_1 = require("express-validator");
const validar_campos_1 = __importDefault(require("../middlewares/validar-campos"));
const router = (0, express_1.Router)();
router.get('/', [
    validar_jwt_1.default,
], pregunta_controller_1.getPreguntas);
router.put('/', [
    validar_jwt_1.default,
    (0, express_validator_1.check)('id_pregunta', 'Id_pregunta es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('pregunta', 'pregunta es obligatorio').not().isEmpty(),
    validar_roles_1.adminRol,
    validar_campos_1.default,
], pregunta_controller_1.putPregunta);
exports.default = router;
//# sourceMappingURL=pregunta.route.js.map