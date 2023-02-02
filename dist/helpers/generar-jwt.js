"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generarJWT = (uid) => {
    return new Promise((resolve, reject) => {
        console.log("=================");
        console.log(uid);
        console.log("=================");
        const payload = { uid };
        console.log("=================");
        console.log(process.env.SECRETORPRIVATEKEY);
        console.log("=================");
        jsonwebtoken_1.default.sign(payload, process.env.SECRETORPRIVATEKEY, {
            expiresIn: '365d'
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject("No se pudo generar el token");
            }
            else {
                resolve(token);
            }
        });
    });
};
exports.default = generarJWT;
//# sourceMappingURL=generar-jwt.js.map