import FakeNoteRepository from '@modules/notes/repositories/fakes/FakeNoteRepository';
import FakeCategoryRepository from '@modules/categories/repositories/fakes/FakeCategoryReposity';
// import AppError from '@shared/errors/AppError';
import UpdateNoteService from './UpdateNoteService';

let fakeCategoryRepository: FakeCategoryRepository;
let fakeNoteRepository: FakeNoteRepository;
let updateNote: UpdateNoteService;

beforeEach(() => {
  fakeCategoryRepository = new FakeCategoryRepository();
  fakeNoteRepository = new FakeNoteRepository();

  updateNote = new UpdateNoteService(fakeNoteRepository);
});

describe('UpdateNote', () => {
  it('should be able to show note', async () => {
    const category = await fakeCategoryRepository.create({
      name: 'categoria 1',
      userId: 'abc123',
    });

    const note = await fakeNoteRepository.create({
      name: 'note',
      content: 'content from note',
      userId: 'abc123',
      categoryId: category.id,
    });

    const response = await updateNote.execute({
      noteId: note.id,
      name: 'new note',
      content: 'new content',
    });

    expect(response.name).toBe('new note');
    expect(response.content).toBe('new content');
  });
});
