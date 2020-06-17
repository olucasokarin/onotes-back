import { Router } from 'express';

import ensureAuthentication from '@modules/users/infra/http/middlewares/ensureAuthentication';
import CategoriesController from '../controllers/CategoriesController';

const categoriesRouter = Router();
const categoriesController = new CategoriesController();

categoriesRouter.use(ensureAuthentication);

categoriesRouter.post('/', categoriesController.create);
categoriesRouter.get('/', categoriesController.show);

export default categoriesRouter;
