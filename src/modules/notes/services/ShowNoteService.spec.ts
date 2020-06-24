import FakeNoteRepository from '@modules/notes/repositories/fakes/FakeNoteRepository';
import FakeCategoryRepository from '@modules/categories/repositories/fakes/FakeCategoryReposity';
import AppError from '@shared/errors/AppError';
import ShowNoteService from './ShowNoteService';

let fakeCategoryRepository: FakeCategoryRepository;
let fakeNoteRepository: FakeNoteRepository;
let showNote: ShowNoteService;

beforeEach(() => {
  fakeCategoryRepository = new FakeCategoryRepository();
  fakeNoteRepository = new FakeNoteRepository();

  showNote = new ShowNoteService(fakeNoteRepository);
});

describe('ShowNote', () => {
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

    const response = await showNote.execute(note.id);

    expect(response).toHaveProperty('id');
    expect(response.name).toBe('note');
  });

  it('should not be able do show note', async () => {
    await expect(
      showNote.execute('non existing note id'),
    ).rejects.toBeInstanceOf(AppError);
  });
});
