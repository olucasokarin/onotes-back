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

  public async findByUserId(userId: string): Promise<Category[]> {
    const categories = await this.ormRepository.find({
      where: { userId },
      order: {
        updatedAt: 'DESC',
      },
    });

    return categories;
  }
}

export default CategoryRepository;
