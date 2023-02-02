import express, { Application } from "express";
import * as https from "https";
import * as fs from "fs";
import path from "path";

// import usuarioRoutes from '../routers/usuario.route';
import authRoutes from "../routers/auth.route";
import usuarioRoutes from "../routers/usuario.route";
import ciudadRoutes from "../routers/ciudad.route";
import preguntaRoutes from "../routers/pregunta.route";
import proyectoRoutes from "../routers/proyecto.route";
import calificacionRoutes from "../routers/calificacion.route";

import fileUpload from "express-fileupload";

import cors from "cors";
import db from "../db/connection";
// import { crontabConstructor } from '../helpers/crontab';
import Pregunta from './pregunta';

class Server {
  private app: Application;
  private port: string;
  private sslServer: https.Server;
  private apiPaths = {
    usuarios: "/api/users",
    auth: "/api/auth",
    ciudad: "/api/ciudad",
    pregunta: "/api/pregunta",
    proyecto: "/api/proyecto",
    calificacion: "/api/calificacion",

  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8000";
    this.dbConnection();
    this.middlewares();
    // crontabConstructor();

    //INSTALAR CERTIFICADO SSL
    // this.sslServer = https.createServer({
    //   key: fs.readFileSync(path.join(__dirname, 'certified', 'key.pem')).toString(),
    //   cert: fs.readFileSync(path.join(__dirname, 'certified', 'cert.pem')).toString(),
    //   ca: [
    //     fs.readFileSync(path.join(__dirname, 'certified', 'g1_bundle.crt')),
    //     fs.readFileSync(path.join(__dirname, 'certified', 'g2_bundle.crt')),
    //     fs.readFileSync(path.join(__dirname, 'certified', 'g3_bundle.crt')),
    //   ]
    // }, this.app);

    //Definir mis rutas
    this.routes();
  }

  async dbConnection() {
    try {
      await db.authenticate();
      console.log("Db online");
    } catch (error) {
      throw new Error();
    }
  }

  middlewares() {
    // CORS
    this.app.use(cors());

    //Lectura Body
    this.app.use(express.json());

    //Carpeta Publica
    this.app.use(express.static("public"));

    //Carga de archivos
    this.app.use(
      fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp/",
        createParentPath: true,
      })
    );
  }

  routes() {
    this.app.use(this.apiPaths.auth, authRoutes);
    this.app.use(this.apiPaths.usuarios, usuarioRoutes);
    this.app.use(this.apiPaths.ciudad, ciudadRoutes);
    this.app.use(this.apiPaths.pregunta, preguntaRoutes);
    this.app.use(this.apiPaths.proyecto, proyectoRoutes);
    this.app.use(this.apiPaths.calificacion, calificacionRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puertooo" + this.port);
    });
    //   this.sslServer.listen(this.port, () => {
    //     console.log('Servidor corriendo en puerto HTTPS::  ' + this.port);
    // });
  }
}

export default Server;
