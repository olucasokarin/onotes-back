import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateNoteService from '@modules/notes/services/CreateNoteService';

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

  // public async show(request: Request, response: Response): Promise<Response> {
  //   const userId = request.user.id;

  //   const listCategory = container.resolve(ListCategoryService);

  //   const categories = await listCategory.execute(userId);

  //   return response.json(categories);
  // }
}
