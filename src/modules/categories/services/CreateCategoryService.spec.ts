import CreateCategoryService from './CreateCategoryService';
import FakeCategoryRepository from '../repositories/fakes/FakeCategoryReposity';

let createCategoryService: CreateCategoryService;
let fakeCategoryRepository: FakeCategoryRepository;

beforeEach(() => {
  fakeCategoryRepository = new FakeCategoryRepository();
  createCategoryService = new CreateCategoryService(fakeCategoryRepository);
});

describe('CreateCategory', () => {
  it('should be able to create a new category', async () => {
    const category = await createCategoryService.execute({
      name: 'new category',
      userId: 'abc123',
    });

    expect(category).toHaveProperty('id');
    expect(category).toHaveProperty('name');
  });
});
