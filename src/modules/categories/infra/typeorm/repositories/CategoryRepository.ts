import ICategoryReposity from '@modules/categories/repositories/ICategoryReposity';
import ICreateCategoryDTO from '@modules/categories/dto/ICreateCategoryDTO';
import { Repository, getRepository } from 'typeorm';
import Category from '../entities/Category';

class CategoryRepository implements ICategoryReposity {
  private ormRepository: Repository<Category>;

  constructor() {
    this.ormRepository = getRepository(Category);
  }

  public async create({ name, userId }: ICreateCategoryDTO): Promise<Category> {
    const category = this.ormRepository.create({
      name,
      userId,
    });

    await this.ormRepository.save(category);

    return category;
  }

  public async save(category: Category): Promise<Category> {
    return this.ormRepository.save(category);
  }

  public async findCategoryById(
    categoryId: string,
  ): Promise<Category | undefined> {
    const findCategory = this.ormRepository.findOne(categoryId);

    return findCategory;
  }

  public async findAllCategories(userId: string): Promise<Category[]> {
    const categories = await this.ormRepository.find({
      where: { userId },
      order: {
        updatedAt: 'DESC',
      },
    });

    return categories;
  }

  public async findCategory(
    userId: string,
    categoryId: string,
  ): Promise<Category | undefined> {
    const findCategory = this.ormRepository.findOne({
      where: { userId, id: categoryId },
      // relations: ['notes'],
    });

    return findCategory;
  }

  public async delete(categoryId: string): Promise<void> {
    await this.ormRepository.delete(categoryId);
  }
}

export default CategoryRepository;
