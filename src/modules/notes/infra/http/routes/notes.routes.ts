import { Router } from 'express';

import ensureAuthentication from '@modules/users/infra/http/middlewares/ensureAuthentication';
import NotesController from '../controllers/NotesController';

const notesRouter = Router();
const notesController = new NotesController();

notesRouter.use(ensureAuthentication);

notesRouter.post('/', notesController.create);
notesRouter.get('/', notesController.list);
notesRouter.get('/:noteId', notesController.show);
notesRouter.put('/:noteId', notesController.update);
notesRouter.delete('/:noteId', notesController.delete);

export default notesRouter;
