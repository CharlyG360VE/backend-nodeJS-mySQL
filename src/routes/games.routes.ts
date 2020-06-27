import { Router } from 'express';

//Importar controlador
import { gamesController } from '../controllers/games.controllers';

class GamesRoutes {

    router: Router = Router();

    constructor () {
        this.config();
    };

    config (): void {
        this.router.get( '/', gamesController.getData );
        this.router.get( '/:id', gamesController.getOne );
        this.router.post( '/', gamesController.createGame );
        this.router.put( '/:id', gamesController.editGame );
        this.router.delete( '/:id', gamesController.deleteGame );
    };

};

const gamesRoutes = new GamesRoutes();
export default gamesRoutes.router;