import { inject, injectable } from 'tsyringe';
import ICategoryReposity from '../repositories/ICategoryReposity';
import Category from '../infra/typeorm/entities/Category';

@injectable()
class ShowCategoryService {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoryReposity,
  ) {}

  public async execute(
    userId: string,
    categoryId: string,
  ): Promise<Category | undefined> {
    const category = this.categoriesRepository.findCategory(userId, categoryId);

    return category;
  }
}

export default ShowCategoryService;
