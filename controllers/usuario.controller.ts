import { raw, Request, Response } from "express";
import bcryptjs from "bcryptjs";
import Rol from '../models/rol';
import generarJWT from "../helpers/generar-jwt";
import Usuario from '../models/usuario';
const path = require("path");

export const getUsuarioDashboard = async (req: Request, res: Response) => {
  const { uid } = req.params;

  const usuarios = await Usuario.findAll({ include: Rol, raw: true });
  //   console.log("Usuario1", usuarios);

  console.log("Usuarios", usuarios);

  if (usuarios) {
    res.json({
      usuarios,
    });
  } else {
    res.status(404).json({
      msg: `No existe el usuario con el id ${uid}`,
    });
  }
};

export const postUsuario = async (req: Request, res: Response) => {
  const {
    email,
    password,
    // nombre,
    // tipoDocumento,
    // documento,
    // idCiudad,
    // telefono,
    // direccion,
    cedula,
    id_rol
  } = req.body;
  try {
    // //Encriptar password
    const dificultad = bcryptjs.genSaltSync();

    //REGISTRO USUARIO
    const usuario = await Usuario.create({
      email: email,
      password: bcryptjs.hashSync(password, dificultad),
      estado: true,
      cedula: cedula,
      id_rol: id_rol,
    });
    const user = usuario!.get({ plain: true });



    //Generar JWT
    console.log("PRINT LOGIN");
    const token = await generarJWT(user.id);
    console.log("PRINT LOGIN");
    console.log(token);

    // //Borrar password del object
    delete user.password;
    res.json({
      user,
      token,
      ok: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador 0002",
    });
  }
};

export const putUsuario = async (req: Request, res: Response) => {
  const { uid } = req.params;

  const { password, id, ...body } = req.body;
  console.log("Body", body);
  let passwordValid = "";

  try {
    if (!id) {
      return res.status(400).json({
        errors: [{ msg: "No se envio un id correcto" }],
      });
    } 
    const user = await Usuario.findByPk(id, { include: Rol, raw: true });
    if (!user) {
      return res.status(400).json({
        errors: [{ msg: "No se encontró ningun usuario con este id" }],
      });
    } 
    console.log("Password Recibido", password);

    //Actualizar usuario


    if (password && password != "") {
      console.log("Password Usuario existe", user["password"]);
      console.log("New Password", passwordValid);

      if (user["password"] != password) {
        console.log("Entró a actualizar contraseña");
        const dificultad = bcryptjs.genSaltSync();
        passwordValid = bcryptjs.hashSync(password, dificultad);
        body.password = passwordValid;
      }
    }
    console.log("Body ===", body);
    const userFinal = await Usuario.findByPk(id);
    await userFinal!.update(body);

    //Respuesta al front
    res.json({
      usuario: userFinal,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};

export const deleteUsuario = async (req: Request, res: Response) => {
  const { uid } = req.params;
  const { password, id, ...body } = req.body;

  try {
    if (!id) {
      return res.status(400).json({
        errors: [{ msg: "No se envio un id correcto" }],
      });
    }
    //Actualizar usuario
    const user = await Usuario.findByPk(id, { include: Rol });

    await user!.update({
      estado: false,
    });
    //Respuesta al front
    res.json({
      usuario: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};

