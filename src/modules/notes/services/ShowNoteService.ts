import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';
import Note from '../infra/typeorm/entities/Note';
import INotesReposity from '../repositories/INotesReposity';

@injectable()
class ShowNoteService {
  constructor(
    @inject('NotesRepository')
    private notesRepository: INotesReposity,
  ) {}

  public async execute(noteId: string): Promise<Note> {
    const note = await this.notesRepository.findNoteById(noteId);
    if (!note) throw new AppError('note not found');

    return note;
  }
}

export default ShowNoteService;
