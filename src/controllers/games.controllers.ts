import { Request, Response } from 'express';

//Importar base de datos
import pool from '../database';

class GamesController {
    //Obtener toda la coleccion
    async getData ( req: Request, res: Response ): Promise<any> {
        (await pool).query( 'SELECT * FROM games' )
        .then( result => {
            return res.status(200).json({
                ok: true,
                games: result,
            });
        } )
        .catch( err => {
            return res.status(500).json({
                ok: false,
                err,
            });
        } );
    };
    //obtener juego por id
    async getOne ( req: Request, res: Response ): Promise<any> {
        const { id } = req.params;
        ( await pool ).query( 'SELECT * FROM games WHERE id = ?', [ id ] )
            .then( game => {
                return res.status(200).json({
                    ok: true,
                    game,
                });
            } )
            .catch( () => {
                return res.status(400).json({
                    ok: false,
                    message: 'No se encontro un juego con los datos especificados.',
                });
            } );
    };
    //crear juego
    async createGame ( req: Request, res: Response ): Promise<any> {
        const { title } = req.body;
        ( await pool ).query( 'INSERT INTO games set ?', [req.body] )
        .then( () => {
            return res.status(200).json({
                ok: true,
                message: `Juego ${ title } creado.`,
            });
        } )
        .catch( () => {
            return res.status(500).json({
                ok: false,
                message: 'Datos invalidos.',
            })
        } )
    };
    //editar juego
    async editGame ( req: Request, res: Response ): Promise<any> {
        const { id } = req.params;
        ( await pool ).query( 'UPDATE games set ? WHERE id = ?', [ req.body, id ] )
        .then( () => {
            return res.status(200).json({
                ok: true,
                message: 'Se actualizaron los datos del juego.',
            });
        } )
        .catch( () => {
            return res.status(400).json({
                ok: false,
                message: 'No se encontro un juego con los datos especificados.',
            });
        } );
    };
    //eliminar juego
    async deleteGame ( req: Request, res: Response ): Promise<any> {
        const { id } = req.params;
        ( await pool ).query( 'DELETE FROM games WHERE id = ?', [ id ] )
        .then( () => {
            return res.status(200).json({
                ok: true,
                message: 'Juego eliminado.',
            });
        } )
        .catch( () => {
            return res.status(400).json({
                ok: false,
                message: 'No se encontro un juego con los datos especificados.',
            });
        } );
    };

};

export const gamesController = new GamesController();