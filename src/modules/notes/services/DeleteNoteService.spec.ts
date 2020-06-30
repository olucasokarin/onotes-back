import FakeNoteRepository from '@modules/notes/repositories/fakes/FakeNoteRepository';
import FakeCategoryRepository from '@modules/categories/repositories/fakes/FakeCategoryReposity';
import AppError from '@shared/errors/AppError';
import DeleteNoteService from './DeleteNoteService';

let fakeCategoryRepository: FakeCategoryRepository;
let fakeNoteRepository: FakeNoteRepository;
let deleteNote: DeleteNoteService;

beforeEach(() => {
  fakeCategoryRepository = new FakeCategoryRepository();
  fakeNoteRepository = new FakeNoteRepository();

  deleteNote = new DeleteNoteService(fakeNoteRepository);
});

describe('DeleteNote', () => {
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

    const response = await deleteNote.execute(note.id);
  });

  it('should not be able do show note', async () => {
    await expect(
      deleteNote.execute('non existing note id'),
    ).rejects.toBeInstanceOf(AppError);
  });
});
