import { Request, Response } from "express";
import Ciudad from '../models/ciudad';

export const getCiudadesDashboard = async (req: Request, res: Response) => {

    const { uid } = req.params;

    const ciudad = await Ciudad.findAll();

    if (ciudad) {
        res.json({
            ciudades: ciudad
        })
    }
    else {
        res.status(404).json({
            msg: `No existe el usuario con el id ${uid}`
        });
    }
}

export const getCiudadesTrueDashboard = async (req: Request, res: Response) => {

    const { uid } = req.params;

    const ciudad = await Ciudad.findAll({where:{
        estado: true
    }});

    if (ciudad) {
        res.json({
            ciudades: ciudad
        })
    }
    else {
        res.status(404).json({
            msg: `No existe el usuario con el id ${uid}`
        });
    }
}

export const postCiudad = async (req: Request, res: Response) => {
    const { ciudad} = req.body;
    try {

        const ciudades = await Ciudad.create({
            ciudad: ciudad,
            estado: true,
        });

              
        res.json({
            ciudades,
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador 0002'
        })
    }
}

export const putCiudad = async (req: Request, res: Response) => {
    const { uid } = req.params;

    const {  id, ...body } = req.body;
    try {

        //Actualizar usuario
        const ciudad = await Ciudad.findByPk(id);
        await ciudad!.update(body);

        //Respuesta al front
        res.json({
            ciudades: ciudad
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}

export const deleteCiudad = async (req: Request, res: Response) => {
    const { uid } = req.params;
    const {  id, ...body } = req.body;


    try {

        //Actualizar usuario
        const ciudad = await Ciudad.findByPk(id);

        await ciudad!.update({
            estado:false
        });
        //Respuesta al front
        res.json({
            ciudades: ciudad
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}