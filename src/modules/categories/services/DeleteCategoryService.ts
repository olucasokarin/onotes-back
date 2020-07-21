// import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import ICategoryReposity from '../repositories/ICategoryReposity';

@injectable()
class DeleteCategoryService {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoryReposity,
  ) {}

  public async execute(categoryId: string): Promise<void> {
    const category = await this.categoriesRepository.findCategoryById(
      categoryId,
    );
    if (!category) throw new AppError('Note not found');

    await this.categoriesRepository.delete(categoryId);
  }
}

export default DeleteCategoryService;
