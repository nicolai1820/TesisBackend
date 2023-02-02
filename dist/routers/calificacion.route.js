"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const validar_jwt_1 = __importDefault(require("../middlewares/validar-jwt"));
const validar_campos_1 = __importDefault(require("../middlewares/validar-campos"));
const calificacion_controller_1 = require("../controllers/calificacion.controller");
const router = (0, express_1.Router)();
router.get('/', [
    validar_jwt_1.default,
], calificacion_controller_1.getCalificaciones);
router.post('/calcular', [
    validar_jwt_1.default,
    (0, express_validator_1.check)('idProyecto', 'idProyecto es obligatorio').not().isEmpty(),
    validar_campos_1.default,
], calificacion_controller_1.postCalcularCalificacion);
router.post('/', [
    validar_jwt_1.default,
    (0, express_validator_1.check)('idProyecto', 'idProyecto es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('idPregunta1', 'idPregunta1 es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('calificacion1', 'calificacion1 es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('idPregunta2', 'idPregunta2 es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('calificacion2', 'calificacion2 es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('idPregunta3', 'idPregunta3 es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('calificacion3', 'calificacion3 es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('idPregunta4', 'idPregunta4 es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('calificacion4', 'calificacion4 es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('idPregunta5', 'idPregunta5 es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('calificacion5', 'calificacion5 es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('idPregunta6', 'idPregunta6 es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('calificacion6', 'calificacion6 es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('idPregunta7', 'idPregunta7 es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('calificacion7', 'calificacion7 es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('idPregunta8', 'idPregunta8 es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('calificacion8', 'calificacion8 es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('idPregunta9', 'idPregunta9 es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('calificacion9', 'calificacion9 es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('idPregunta10', 'idPregunta10 es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('calificacion10', 'calificacion10 es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('idPregunta11', 'idPregunta11 es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('calificacion11', 'calificacion11 es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('idPregunta12', 'idPregunta12 es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('calificacion12', 'calificacion12 es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('idPregunta13', 'idPregunta13 es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('calificacion13', 'calificacion13 es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('idPregunta14', 'idPregunta14 es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('calificacion14', 'calificacion14 es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('idPregunta15', 'idPregunta15 es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('calificacion15', 'calificacion15 es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('idPregunta16', 'idPregunta16 es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('calificacion16', 'calificacion16 es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('idPregunta17', 'idPregunta17 es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('calificacion17', 'calificacion17 es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('idPregunta18', 'idPregunta18 es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('calificacion18', 'calificacion18 es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('idPregunta19', 'idPregunta19 es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('calificacion19', 'calificacion19 es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('idPregunta20', 'idPregunta20 es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('calificacion20', 'calificacion20 es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('idPregunta21', 'idPregunta21 es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('calificacion21', 'calificacion21 es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('idPregunta22', 'idPregunta22 es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('calificacion22', 'calificacion22 es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('idPregunta23', 'idPregunta23 es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('calificacion23', 'calificacion23 es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('idPregunta24', 'idPregunta24 es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('calificacion24', 'calificacion24 es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('idPregunta25', 'idPregunta25 es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('calificacion25', 'calificacion25 es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('idPregunta26', 'idPregunta26 es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('calificacion26', 'calificacion26 es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('idPregunta27', 'idPregunta27 es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('calificacion27', 'calificacion27 es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('idPregunta28', 'idPregunta28 es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('calificacion28', 'calificacion28 es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('idPregunta29', 'idPregunta29 es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('calificacion29', 'calificacion29 es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('idPregunta30', 'idPregunta30 es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('calificacion30', 'calificacion30 es obligatorio').not().isEmpty(),
    validar_campos_1.default,
], calificacion_controller_1.postCalificacion);
exports.default = router;
//# sourceMappingURL=calificacion.route.js.map