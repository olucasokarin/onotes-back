import FakeNoteRepository from '@modules/notes/repositories/fakes/FakeNoteRepository';
import FakeCategoryRepository from '../repositories/fakes/FakeCategoryReposity';
import ShowCategoryService from './ShowCategoryService';

let fakeCategoryRepository: FakeCategoryRepository;
let fakeNoteRepository: FakeNoteRepository;
let showCategory: ShowCategoryService;

beforeEach(() => {
  fakeCategoryRepository = new FakeCategoryRepository();
  fakeNoteRepository = new FakeNoteRepository();

  showCategory = new ShowCategoryService(fakeCategoryRepository);
});

describe('ListCategory', () => {
  it('should be able to list category from user', async () => {
    const category = await fakeCategoryRepository.create({
      name: 'categoria 1',
      userId: 'abc123',
    });

    await fakeNoteRepository.create({
      name: 'note1',
      content: 'content from note',
      userId: 'abc123',
      categoryId: category.id,
    });

    await fakeNoteRepository.create({
      name: 'note1',
      content: 'content from note',
      userId: 'abc123',
      categoryId: category.id,
    });

    await fakeNoteRepository.create({
      name: 'note1',
      content: 'content from note',
      userId: 'abc123',
      categoryId: category.id,
    });

    const response = await showCategory.execute('abc123', category.id);

    expect(response).toHaveProperty('id');
  });
});
