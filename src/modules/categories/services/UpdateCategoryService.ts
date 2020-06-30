import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';
import ICategoryReposity from '../repositories/ICategoryReposity';
import Category from '../infra/typeorm/entities/Category';

interface IRequest {
  categoryId: string;
  name: string;
}

@injectable()
class UpdateCategoryService {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoryReposity,
  ) {}

  public async execute({ categoryId, name }: IRequest): Promise<Category> {
    const category = await this.categoriesRepository.findCategoryById(
      categoryId,
    );
    if (!category) throw new AppError('category not found');

    category.name = name;

    await this.categoriesRepository.save(category);

    return category;
  }
}

export default UpdateCategoryService;
