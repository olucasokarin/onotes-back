import { Router } from 'express';

import UsersController from '../controllers/UsersController';

const usersRouter = Router();
const userControler = new UsersController();

usersRouter.post('/', userControler.create);

export default usersRouter;
