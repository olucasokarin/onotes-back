import { Router } from 'express';

import UsersController from '../controllers/UsersController';

const usersRouter = Router();
const userControler = new UsersController();

usersRouter.get('/', userControler.show);

export default usersRouter;
