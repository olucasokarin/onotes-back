import Category from '../infra/typeorm/entities/Category';
import ICreateCategoryDTO from '../dto/ICreateCategoryDTO';

export default interface ICategoryReposity {
  create({ name, userId }: ICreateCategoryDTO): Promise<Category>;
  findAllCategories(userId: string): Promise<Category[]>;
  findCategory(
    userId: string,
    categoryId: string,
  ): Promise<Category | undefined>;

  save(category: Category): Promise<Category | undefined>;
  findCategoryById(categoryId: string): Promise<Category | undefined>;
  delete(categoryId: string): Promise<void>;
}
