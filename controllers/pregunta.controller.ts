import { Request, Response } from "express";
import Ciudad from '../models/ciudad';
import Pregunta from '../models/pregunta';

export const getPreguntas = async (req: Request, res: Response) => {

    const { uid } = req.params;

    const pregunta = await Pregunta.findAll();

    if (pregunta) {
        res.json({
            preguntas: pregunta
        })
    }
    else {
        res.status(404).json({
            msg: `No existe preguntas con el id ${uid}`
        });
    }
}

export const putPregunta = async (req: Request, res: Response) => {
    const { uid } = req.params;

    const {  id_pregunta, alias, modulo, ...body } = req.body;
    try {

        //Actualizar usuario
        const pregunta = await Pregunta.findByPk(id_pregunta);

        if (!pregunta) {
            return res.status(400).json({
              errors: [{ msg: "No se encontró ninguna pregunta con este id" }],
            });
          } 
        await pregunta!.update(body);

        //Respuesta al front
        res.json({
            pregunta: pregunta
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}
