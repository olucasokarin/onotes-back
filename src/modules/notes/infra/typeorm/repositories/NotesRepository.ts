import { Repository, getRepository } from 'typeorm';
import ICreateNoteDTO from '@modules/notes/dto/ICreateNoteDTO';
import INotesReposity from '@modules/notes/repositories/INotesReposity';
import IListNotesDTO from '@modules/notes/dto/IListNotesDTO';
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

  public async save(note: Note): Promise<Note> {
    return this.ormRepository.save(note);
  }

  public async findNoteById(noteId: string): Promise<Note | undefined> {
    const findNote = this.ormRepository.findOne(noteId);

    return findNote;
  }

  public async findAllNotes({
    userId,
    categoryId,
  }: IListNotesDTO): Promise<Note[]> {
    const notes = this.ormRepository.find({
      where: {
        userId,
        categoryId,
      },
      order: {
        updatedAt: 'DESC',
      },
    });

    return notes;
  }

  public async delete(noteId: string): Promise<void> {
    await this.ormRepository.delete(noteId);
  }
}

export default NotesRepository;
