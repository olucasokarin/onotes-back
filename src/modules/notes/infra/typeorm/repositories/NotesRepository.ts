import { Repository, getRepository } from 'typeorm';
import ICreateNoteDTO from '@modules/notes/dto/ICreateNoteDTO';
import INotesReposity from '@modules/notes/repositories/INotesReposity';
import Note from '../entities/Note';

class NotesRepository implements INotesReposity {
  private ormRepository: Repository<Note>;

  constructor() {
    this.ormRepository = getRepository(Note);
  }

  public async create(noteData: ICreateNoteDTO): Promise<Note> {
    const note = this.ormRepository.create(noteData);

    await this.ormRepository.save(note);

    return note;
  }
}

export default NotesRepository;
