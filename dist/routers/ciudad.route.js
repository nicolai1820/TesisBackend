"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const validar_jwt_1 = __importDefault(require("../middlewares/validar-jwt"));
const validar_roles_1 = require("../middlewares/validar-roles");
const ciudad_controller_1 = require("../controllers/ciudad.controller");
const validar_campos_1 = __importDefault(require("../middlewares/validar-campos"));
const router = (0, express_1.Router)();
router.get('/', [
    validar_jwt_1.default,
    validar_roles_1.adminRol
], ciudad_controller_1.getCiudadesDashboard);
router.get('/activas', [
    validar_jwt_1.default,
], ciudad_controller_1.getCiudadesTrueDashboard);
router.post('/', [
    validar_jwt_1.default,
    validar_roles_1.adminRol,
    (0, express_validator_1.check)('ciudad', 'Ciudad es obligatorio').not().isEmpty(),
    validar_campos_1.default,
], ciudad_controller_1.postCiudad);
router.put('/', [
    validar_jwt_1.default,
    validar_roles_1.adminRol
], ciudad_controller_1.putCiudad);
router.delete('/', [
    validar_jwt_1.default,
    validar_roles_1.adminRol
], ciudad_controller_1.deleteCiudad);
exports.default = router;
//# sourceMappingURL=ciudad.route.js.map