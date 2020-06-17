import Category from '@modules/categories/infra/typeorm/entities/Category';
import { uuid } from 'uuidv4';
import ICreateCategoryDTO from '@modules/categories/dto/ICreateCategoryDTO';
import ICategoryReposity from '../ICategoryReposity';

class FakeCategoryRepository implements ICategoryReposity {
  private categories: Category[] = [];

  public async create(categoryData: ICreateCategoryDTO): Promise<Category> {
    const category = new Category();
    Object.assign(category, { id: uuid() }, categoryData);

    this.categories.push(category);
    return category;
  }
}

export default FakeCategoryRepository;
