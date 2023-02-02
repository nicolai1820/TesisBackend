import { Request, Response } from "express";
import Ciudad from '../models/ciudad';
import Calificacion from '../models/calificacion';
import {Op} from "sequelize";
import Usuario from '../models/usuario';
import { Sequelize } from 'sequelize';
import Proyecto from '../models/proyecto';

export const getCalificaciones = async (req: Request, res: Response) => {

    const { uid } = req.params;

    const calificacion = await Calificacion.findAll();

    if (calificacion) {
        res.json({
            calificacion: calificacion
        })
    }
    else {
        res.status(404).json({
            msg: `No existe una calificacion con el id ${uid}`
        });
    }
}

export const postCalificacion = async (req: Request, res: Response) => {
    const { uid, usuario } = req.params;
    const { 
        idProyecto, 

        idPregunta1,
        calificacion1,

        idPregunta2,
        calificacion2,

        idPregunta3,
        calificacion3,

        idPregunta4,
        calificacion4,

        idPregunta5,
        calificacion5,

        idPregunta6,
        calificacion6,

        idPregunta7,
        calificacion7,

        idPregunta8,
        calificacion8,

        idPregunta9,
        calificacion9,

        idPregunta10,
        calificacion10,

        idPregunta11,
        calificacion11,

        idPregunta12,
        calificacion12,

        idPregunta13,
        calificacion13,
        
        idPregunta14,
        calificacion14,

        idPregunta15,
        calificacion15,

        idPregunta16,
        calificacion16,

        idPregunta17,
        calificacion17,

        idPregunta18,
        calificacion18,

        idPregunta19,
        calificacion19,

        idPregunta20,
        calificacion20,

        idPregunta21,
        calificacion21,

        idPregunta22,
        calificacion22,

        idPregunta23,
        calificacion23,

        idPregunta24,
        calificacion24,

        idPregunta25,
        calificacion25,

        idPregunta26,
        calificacion26,

        idPregunta27,
        calificacion27,

        idPregunta28,
        calificacion28,

        idPregunta29,
        calificacion29,


        idPregunta30,
        calificacion30,
    
    } = req.body;
    try {

        console.log("USUARIO DATA; ", usuario.id_rol);
        const califi = await Calificacion.findAll({
            where:{[Op.and]:[
                {id_proyecto:idProyecto}, 
                {id_usuario:uid}, 
            ]},
            raw:true
        })

        if (califi.length != 0) {
            return res.status(400).json({
              errors: [{ msg: "Este usuario ya calificó este proyecto" }],
            });
          } 

        if (usuario.id_rol == 4) {
            return res.status(400).json({
              errors: [{ msg: "Este usuario no puede calificar" }],
            });
          } 

          console.log("ID PREGUNTA 5", idPregunta5);
          

        const promesa1=  await Calificacion.create({
            id_proyecto: idProyecto,
            calificacion: calificacion1,
            id_rol: usuario.id_rol,
            id_pregunta: idPregunta1,
            id_usuario: uid,
        });

         const promesa2 = await Calificacion.create({
            id_proyecto: idProyecto,
            calificacion: calificacion2,
            id_rol: usuario.id_rol,
            id_pregunta: idPregunta2,
            id_usuario: uid,
        });
        

         const promesa3 = await Calificacion.create({
            id_proyecto: idProyecto,
            calificacion: calificacion3,
            id_rol: usuario.id_rol,
            id_pregunta: idPregunta3,
            id_usuario: uid,
        });

         const promesa4 = await Calificacion.create({
            id_proyecto: idProyecto,
            calificacion: calificacion4,
            id_rol: usuario.id_rol,
            id_pregunta: idPregunta4,
            id_usuario: uid,
        });

         const promesa5 = await Calificacion.create({
            id_proyecto: idProyecto,
            calificacion: calificacion5,
            id_rol: usuario.id_rol,
            id_pregunta: idPregunta5,
            id_usuario: uid,
        });

         const promesa6 = await Calificacion.create({
            id_proyecto: idProyecto,
            calificacion: calificacion6,
            id_rol: usuario.id_rol,
            id_pregunta: idPregunta6,
            id_usuario: uid,
        });

         const promesa7 = await Calificacion.create({
            id_proyecto: idProyecto,
            calificacion: calificacion7,
            id_rol: usuario.id_rol,
            id_pregunta: idPregunta7,
            id_usuario: uid,
        });

         const promesa8 = await Calificacion.create({
            id_proyecto: idProyecto,
            calificacion: calificacion8,
            id_rol: usuario.id_rol,
            id_pregunta: idPregunta8,
            id_usuario: uid,
        });

         const promesa9 = await Calificacion.create({
            id_proyecto: idProyecto,
            calificacion: calificacion9,
            id_rol: usuario.id_rol,
            id_pregunta:idPregunta9,
            id_usuario: uid,
        });

         const promesa10 = await Calificacion.create({
            id_proyecto: idProyecto,
            calificacion: calificacion10,
            id_rol: usuario.id_rol,
            id_pregunta:idPregunta10,
            id_usuario: uid,
        });

         const promesa11 = await Calificacion.create({
            id_proyecto: idProyecto,
            calificacion: calificacion11,
            id_rol: usuario.id_rol,
            id_pregunta:idPregunta11,
            id_usuario: uid,
        });

         const promesa12 = await Calificacion.create({
            id_proyecto: idProyecto,
            calificacion: calificacion12,
            id_rol: usuario.id_rol,
            id_pregunta:idPregunta12,
            id_usuario: uid,
        });

         const promesa13 = await Calificacion.create({
            id_proyecto: idProyecto,
            calificacion: calificacion13,
            id_rol: usuario.id_rol,
            id_pregunta:idPregunta13,
            id_usuario: uid,
        });

         const promesa14 = await Calificacion.create({
            id_proyecto: idProyecto,
            calificacion: calificacion14,
            id_rol: usuario.id_rol,
            id_pregunta:idPregunta14,
            id_usuario: uid,
        });

         const promesa15 = await Calificacion.create({
            id_proyecto: idProyecto,
            calificacion: calificacion15,
            id_rol: usuario.id_rol,
            id_pregunta:idPregunta15,
            id_usuario: uid,
        });

         const promesa16 = await Calificacion.create({
            id_proyecto: idProyecto,
            calificacion: calificacion16,
            id_rol: usuario.id_rol,
            id_pregunta:idPregunta16,
            id_usuario: uid,
        });

         const promesa17 = await Calificacion.create({
            id_proyecto: idProyecto,
            calificacion: calificacion17,
            id_rol: usuario.id_rol,
            id_pregunta:idPregunta17,
            id_usuario: uid,
        });

         const promesa18 = await Calificacion.create({
            id_proyecto: idProyecto,
            calificacion: calificacion18,
            id_rol: usuario.id_rol,
            id_pregunta:idPregunta18,
            id_usuario: uid,
        });

         const promesa19 = await Calificacion.create({
            id_proyecto: idProyecto,
            calificacion: calificacion19,
            id_rol: usuario.id_rol,
            id_pregunta:idPregunta19,
            id_usuario: uid,
        });

         const promesa20 = await Calificacion.create({
            id_proyecto: idProyecto,
            calificacion: calificacion20,
            id_rol: usuario.id_rol,
            id_pregunta:idPregunta20,
            id_usuario: uid,
        });

         const promesa21 = await Calificacion.create({
            id_proyecto: idProyecto,
            calificacion: calificacion21,
            id_rol: usuario.id_rol,
            id_pregunta:idPregunta21,
            id_usuario: uid,
        });

         const promesa22 = await Calificacion.create({
            id_proyecto: idProyecto,
            calificacion: calificacion22,
            id_rol: usuario.id_rol,
            id_pregunta:idPregunta22,
            id_usuario: uid,
        });

         const promesa23 = await Calificacion.create({
            id_proyecto: idProyecto,
            calificacion: calificacion23,
            id_rol: usuario.id_rol,
            id_pregunta:idPregunta23,
            id_usuario: uid,
        });

         const promesa24 = await Calificacion.create({
            id_proyecto: idProyecto,
            calificacion: calificacion24,
            id_rol: usuario.id_rol,
            id_pregunta:idPregunta24,
            id_usuario: uid,
        });

         const promesa25= await Calificacion.create({
            id_proyecto: idProyecto,
            calificacion: calificacion25,
            id_rol: usuario.id_rol,
            id_pregunta:idPregunta25,
            id_usuario: uid,
        });

         const promesa26 = await Calificacion.create({
            id_proyecto: idProyecto,
            calificacion: calificacion26,
            id_rol: usuario.id_rol,
            id_pregunta:idPregunta26,
            id_usuario: uid,
        });

         const promesa27 = await Calificacion.create({
            id_proyecto: idProyecto,
            calificacion: calificacion27,
            id_rol: usuario.id_rol,
            id_pregunta:idPregunta27,
            id_usuario: uid,
        });

         const promesa28 = await Calificacion.create({
            id_proyecto: idProyecto,
            calificacion: calificacion28,
            id_rol: usuario.id_rol,
            id_pregunta:idPregunta28,
            id_usuario: uid,
        });

         const promesa29 = await Calificacion.create({
            id_proyecto: idProyecto,
            calificacion: calificacion29,
            id_rol: usuario.id_rol,
            id_pregunta:idPregunta29,
            id_usuario: uid,
        });

         const promesa30 = await Calificacion.create({
            id_proyecto: idProyecto,
            calificacion: calificacion30,
            id_rol: usuario.id_rol,
            id_pregunta:idPregunta30,
            id_usuario: uid,
        });

        res.json({
            calificacion:true,
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador 0002'
        })
    }
}

export const postCalcularCalificacion = async (req: Request, res: Response) => {
    const { idProyecto } = req.body;
    try {

        const calificaciones = await Calificacion.findAll({
            attributes : [ [Sequelize.fn('AVG', Sequelize.col('Calificaciones.calificacion')),'promedio'] ],
            group: ['id_usuario'],
            where:{id_proyecto:idProyecto},
            include:[{model:Usuario, attributes:["id_rol", "id"]}],
            raw:true
        });

        console.log("tamañop calificaicoines", calificaciones.length);
        
        if (calificaciones.length != 3) {
            return res.status(404).json({
                msg: `Aun faltan calificaciones para este proyecto`
            });
        }

        let calificacionTutor =0;
        let calificacionJurado1 = 0;
        let calificacionJurado2 = 0;

        let calificacionTutorFinal =0;
        let calificacionJurado1Final = 0;
        let calificacionJurado2Final = 0;


        if (calificaciones[0]["usuario.id_rol"] == 2) {
            calificacionTutor = calificaciones[0]["promedio"] * 0.5;
            calificacionJurado1 = calificaciones[1]["promedio"] * 0.25;
            calificacionJurado2 = calificaciones[2]["promedio"] * 0.25;


            calificacionTutorFinal =calificaciones[0]["promedio"];
            calificacionJurado1Final = calificaciones[1]["promedio"];
            calificacionJurado2Final = calificaciones[2]["promedio"];

        }else if(calificaciones[1]["usuario.id_rol"] == 2){
            calificacionTutor = calificaciones[1]["promedio"] * 0.5;
            calificacionJurado1 = calificaciones[0]["promedio"] * 0.25;
            calificacionJurado2 = calificaciones[2]["promedio"] * 0.25;

            calificacionTutorFinal =calificaciones[1]["promedio"];
            calificacionJurado1Final = calificaciones[0]["promedio"];
            calificacionJurado2Final = calificaciones[2]["promedio"];
        }else if(calificaciones[2]["usuario.id_rol"] == 2){
            calificacionTutor = calificaciones[2]["promedio"] * 0.5;
            calificacionJurado1 = calificaciones[0]["promedio"] * 0.25;
            calificacionJurado2 = calificaciones[1]["promedio"] * 0.25;

            calificacionTutorFinal =calificaciones[2]["promedio"];
            calificacionJurado1Final = calificaciones[0]["promedio"];
            calificacionJurado2Final = calificaciones[1]["promedio"];
        }

        console.log("calificacion tutor", calificacionTutor);
        console.log("calificacion jurado1", calificacionJurado1);
        console.log("calificacion jurado2", calificacionJurado2);

        let notaFinal = calificacionTutor + calificacionJurado1 + calificacionJurado2

        const proyecto = await Proyecto.findByPk(idProyecto);
        await proyecto!.update({
            notaFinal:notaFinal,
            notaJurado1:calificacionJurado1Final,
            notaJurado2:calificacionJurado2Final,
            notaTutor:calificacionTutorFinal
        });
        
            
              
        res.json({
            notaFinal,
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador 0002'
        })
    }
}



