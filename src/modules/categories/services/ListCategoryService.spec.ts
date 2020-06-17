import FakeCategoryRepository from '../repositories/fakes/FakeCategoryReposity';
import ListCategoryService from './ListCategoryService';

let fakeCategoryRepository: FakeCategoryRepository;
let listCategory: ListCategoryService;

beforeEach(() => {
  fakeCategoryRepository = new FakeCategoryRepository();

  listCategory = new ListCategoryService(fakeCategoryRepository);
});

describe('ListCategory', () => {
  it('should be able to list category from user', async () => {
    const category1 = await fakeCategoryRepository.create({
      name: 'categoria 1',
      userId: 'abc123',
    });
    const category2 = await fakeCategoryRepository.create({
      name: 'categoria 2',
      userId: 'abc123',
    });
    const category3 = await fakeCategoryRepository.create({
      name: 'categoria 3',
      userId: 'abc123',
    });

    const categories = await listCategory.execute('abc123');

    expect(categories).toEqual([category1, category2, category3]);
  });
});
