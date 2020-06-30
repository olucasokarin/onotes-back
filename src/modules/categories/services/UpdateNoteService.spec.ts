import FakeCategoryRepository from '@modules/categories/repositories/fakes/FakeCategoryReposity';
import AppError from '@shared/errors/AppError';
import UpdateCategoryService from './UpdateCategoryService';

let fakeCategoryRepository: FakeCategoryRepository;
let updateCategory: UpdateCategoryService;

beforeEach(() => {
  fakeCategoryRepository = new FakeCategoryRepository();

  updateCategory = new UpdateCategoryService(fakeCategoryRepository);
});

describe('UpdateCategory', () => {
  it('should be able to update category', async () => {
    const category = await fakeCategoryRepository.create({
      name: 'categoria 1',
      userId: 'abc123',
    });

    const response = await updateCategory.execute({
      name: 'nova categoria',
      categoryId: category.id,
    });

    expect(response.name).toBe('nova categoria');
  });

  it('should not be able do update category', async () => {
    await expect(
      updateCategory.execute({
        categoryId: 'non existing note id',
        name: 'new category',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
