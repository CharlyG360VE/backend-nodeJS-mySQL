import { Router } from 'express';

//Importar controlador
import { indexController } from '../controllers/index.controllers';

class IndexRoutes {

    router: Router = Router();

    constructor () {
        this.config();
    };

    config (): void {
        this.router.get( '/', indexController.getData );
    };

};

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;