import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateNoteService from '@modules/notes/services/CreateNoteService';
import ListNotesService from '@modules/notes/services/ListNotesService';
import ShowNoteService from '@modules/notes/services/ShowNoteService';
import UpdateNoteService from '@modules/notes/services/UpdateNoteService';
import DeleteNoteService from '@modules/notes/services/DeleteNoteService';

export default class NotesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const userId = request.user.id;
    const { name, content, categoryId } = request.body;

    const createCategory = container.resolve(CreateNoteService);

    const user = await createCategory.execute({
      name,
      content,
      userId,
      categoryId,
    });

    return response.json(user);
  }

  public async list(request: Request, response: Response): Promise<Response> {
    const userId = request.user.id;
    const { categoryId } = request.query;

    const listNotes = container.resolve(ListNotesService);

    const notes = await listNotes.execute({ userId, categoryId });

    return response.json(notes);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { noteId } = request.params;

    console.log(noteId);

    const showNote = container.resolve(ShowNoteService);

    const note = await showNote.execute(noteId);

    return response.json(note);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    // const userId = request.user.id;
    const { noteId } = request.params;
    const { name, content } = request.body;

    const updateNote = container.resolve(UpdateNoteService);

    const note = await updateNote.execute({ noteId, name, content });

    return response.json(note);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { noteId } = request.params;

    const deleteNote = container.resolve(DeleteNoteService);

    await deleteNote.execute(noteId);

    return response.json();
  }
}
