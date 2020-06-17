import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateCategoryService from '@modules/categories/services/CreateCategoryService';
import ListCategoryService from '@modules/categories/services/ListCategoryService';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const userId = request.user.id;
    const { name } = request.body;

    const createCategory = container.resolve(CreateCategoryService);

    const user = await createCategory.execute({ name, userId });

    return response.json(user);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const userId = request.user.id;

    const listCategory = container.resolve(ListCategoryService);

    const categories = await listCategory.execute(userId);

    return response.json(categories);
  }
}
