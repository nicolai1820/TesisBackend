"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const auth_controller_1 = require("../controllers/auth.controller");
const validar_campos_1 = __importDefault(require("../middlewares/validar-campos"));
const validar_jwt_1 = __importDefault(require("../middlewares/validar-jwt"));
const router = (0, express_1.Router)();
router.post("/login", [
    (0, express_validator_1.check)("email", "El email es obligatorio").isEmail(),
    (0, express_validator_1.check)("password", "El password es obligatorio").not().isEmpty(),
    validar_campos_1.default,
], auth_controller_1.login);
router.get("/renew", [validar_jwt_1.default], auth_controller_1.renewToken);
// router.post(
//   "/register",
//   [
//     check("email", "El email es obligatorio").isEmail(),
//     check("password", "El password es obligatorio").not().isEmpty(),
//     validarCampos,
//   ],
//   registerUsuario
// );
exports.default = router;
//# sourceMappingURL=auth.route.js.map