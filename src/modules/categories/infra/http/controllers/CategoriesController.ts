import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateCategoryService from '@modules/categories/services/CreateCategoryService';
import ListCategoryService from '@modules/categories/services/ListCategoryService';
import ShowCategoryService from '@modules/categories/services/ShowCategoryService';
import UpdateCategoryService from '@modules/categories/services/UpdateCategoryService';
import DeleteCategoryService from '@modules/categories/services/DeleteCategoryService';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const userId = request.user.id;
    const { name } = request.body;

    const createCategory = container.resolve(CreateCategoryService);

    const user = await createCategory.execute({ name, userId });

    return response.json(user);
  }

  public async list(request: Request, response: Response): Promise<Response> {
    const userId = request.user.id;

    const listCategory = container.resolve(ListCategoryService);

    const categories = await listCategory.execute(userId);

    return response.json(categories);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const userId = request.user.id;
    const { categoryId } = request.params;

    const showCategory = container.resolve(ShowCategoryService);

    const category = await showCategory.execute(userId, categoryId);

    return response.json(category);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    // const userId = request.user.id;
    const { categoryId } = request.params;
    const { name } = request.body;

    const updateCategory = container.resolve(UpdateCategoryService);

    const category = await updateCategory.execute({ categoryId, name });

    return response.json(category);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { categoryId } = request.params;

    const deleteCategory = container.resolve(DeleteCategoryService);

    await deleteCategory.execute(categoryId);

    return response.json();
  }
}
