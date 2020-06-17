import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateCategoryService from '@modules/categories/services/CreateCategoryService';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const userId = request.user.id;
    const { name } = request.body;

    const createUser = container.resolve(CreateCategoryService);

    const user = await createUser.execute({ name, userId });

    return response.json(user);
  }
}
