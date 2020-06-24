import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';
import Note from '../infra/typeorm/entities/Note';
import INotesReposity from '../repositories/INotesReposity';

interface IRequest {
  noteId: string;
  name: string;
  content: string;
}

@injectable()
class UpdateNoteService {
  constructor(
    @inject('NotesRepository')
    private notesRepository: INotesReposity,
  ) {}

  public async execute({ noteId, name, content }: IRequest): Promise<Note> {
    const note = await this.notesRepository.findNoteById(noteId);
    if (!note) throw new AppError('note not found');

    note.name = name;
    note.content = content;

    await this.notesRepository.save(note);

    return note;
  }
}

export default UpdateNoteService;
