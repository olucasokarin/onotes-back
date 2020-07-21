import FakeCategoryRepository from '@modules/categories/repositories/fakes/FakeCategoryReposity';
import AppError from '@shared/errors/AppError';
import DeleteCategoryService from './DeleteCategoryService';

let fakeCategoryRepository: FakeCategoryRepository;
let deleteCategory: DeleteCategoryService;

beforeEach(() => {
  fakeCategoryRepository = new FakeCategoryRepository();

  deleteCategory = new DeleteCategoryService(fakeCategoryRepository);
});

describe('Deletecategory', () => {
  it('should be able to delete category', async () => {
    const category = await fakeCategoryRepository.create({
      name: 'categoria 1',
      userId: 'abc123',
    });

    await deleteCategory.execute(category.id);
  });

  it('should not be able do show category', async () => {
    await expect(
      deleteCategory.execute('non existing category id'),
    ).rejects.toBeInstanceOf(AppError);
  });
});
