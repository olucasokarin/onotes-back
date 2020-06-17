import FakeCategoryRepository from '@modules/categories/repositories/fakes/FakeCategoryReposity';

import CreateNoteService from './CreateNoteService';
import FakeNoteRepository from '../repositories/fakes/FakeNoteRepository';

let createNote: CreateNoteService;
let fakeCategoryRepository: FakeCategoryRepository;
let fakeNoteRepository: FakeNoteRepository;

beforeEach(() => {
  fakeNoteRepository = new FakeNoteRepository();
  fakeCategoryRepository = new FakeCategoryRepository();

  createNote = new CreateNoteService(fakeNoteRepository);
});

describe('CreateNote', () => {
  it('should be able to create a new note', async () => {
    const category = await fakeCategoryRepository.create({
      name: 'category',
      userId: 'abc123',
    });

    const note = await createNote.execute({
      name: 'first note',
      content: 'this is my first note',
      userId: 'abc123',
      categoryId: category.id,
    });

    expect(note).toHaveProperty('id');
    expect(note).toHaveProperty('name');
  });
});
