import { uuid } from 'uuidv4';
import Note from '@modules/notes/infra/typeorm/entities/Note';
import ICreateNoteDTO from '@modules/notes/dto/ICreateNoteDTO';
import IListNotesDTO from '@modules/notes/dto/IListNotesDTO';
import INotesReposity from '../INotesReposity';

class FakeNoteRepository implements INotesReposity {
  private notes: Note[] = [];

  public async create(noteData: ICreateNoteDTO): Promise<Note> {
    const note = new Note();
    Object.assign(note, { id: uuid() }, noteData);

    this.notes.push(note);
    return note;
  }

  public async findAllNotes({
    userId,
    categoryId,
  }: IListNotesDTO): Promise<Note[]> {
    const findAllNotes = this.notes.filter(
      note => note.categoryId === categoryId && note.userId === userId,
    );

    return findAllNotes;
  }
}

export default FakeNoteRepository;
