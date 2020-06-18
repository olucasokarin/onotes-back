import { injectable, inject } from 'tsyringe';
import ICategoryReposity from '../repositories/ICategoryReposity';
import Category from '../infra/typeorm/entities/Category';

@injectable()
class ListCategoryService {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoryReposity,
  ) {}

  public async execute(userId: string): Promise<Category[]> {
    const categories = this.categoriesRepository.findAllCategories(userId);

    return categories;
  }
}

export default ListCategoryService;
