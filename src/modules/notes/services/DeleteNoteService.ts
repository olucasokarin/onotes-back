// import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';
// import Note from '../infra/typeorm/entities/Note';
import AppError from '@shared/errors/AppError';
import INotesReposity from '../repositories/INotesReposity';

@injectable()
class DeleteNoteService {
  constructor(
    @inject('NotesRepository')
    private notesRepository: INotesReposity,
  ) {}

  public async execute(noteId: string): Promise<void> {
    const note = await this.notesRepository.findNoteById(noteId);
    if (!note) throw new AppError('Note not found');

    await this.notesRepository.delete(noteId);
  }
}

export default DeleteNoteService;
