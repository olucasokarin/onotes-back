import { injectable, inject } from 'tsyringe';

import ICategoryReposity from '../repositories/ICategoryReposity';
import Category from '../infra/typeorm/entities/Category';

interface IRequest {
  name: string;
  userId: string;
}

@injectable()
class CreateCategoryService {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoryReposity,
  ) {}

  public async execute({ name, userId }: IRequest): Promise<Category> {
    const category = await this.categoriesRepository.create({ name, userId });

    return category;
  }
}

export default CreateCategoryService;
