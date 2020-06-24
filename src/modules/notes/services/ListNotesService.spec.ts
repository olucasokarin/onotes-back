import FakeCategoryRepository from '@modules/categories/repositories/fakes/FakeCategoryReposity';

import ListNotesService from './ListNotesService';
import FakeNoteRepository from '../repositories/fakes/FakeNoteRepository';

let listNotes: ListNotesService;
let fakeCategoryRepository: FakeCategoryRepository;
let fakeNoteRepository: FakeNoteRepository;

beforeEach(() => {
  fakeNoteRepository = new FakeNoteRepository();
  fakeCategoryRepository = new FakeCategoryRepository();

  listNotes = new ListNotesService(fakeNoteRepository);
});

describe('ListNotes', () => {
  it('should be list all notes from category and user', async () => {
    const category = await fakeCategoryRepository.create({
      name: 'category',
      userId: 'abc123',
    });

    const note1 = await fakeNoteRepository.create({
      name: 'first note',
      content: 'this is my first note',
      userId: 'abc123',
      categoryId: category.id,
    });
    const note2 = await fakeNoteRepository.create({
      name: 'second note',
      content: 'this is my second note',
      userId: 'abc123',
      categoryId: category.id,
    });

    const notes = await listNotes.execute({
      userId: 'abc123',
      categoryId: category.id,
    });

    expect(notes).toEqual([note1, note2]);
  });
});
