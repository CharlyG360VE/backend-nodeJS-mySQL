import { Request, Response } from 'express';

class IndexController {

    public getData ( req: Request, res: Response ) {
        return res.status(200).json({
            message: 'Ruta funcionando',
        });
    };

};

export const indexController = new IndexController();