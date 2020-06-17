import { uuid } from 'uuidv4';
import Note from '@modules/notes/infra/typeorm/entities/Note';
import ICreateNoteDTO from '@modules/notes/dto/ICreateNoteDTO';
import INotesReposity from '../INotesReposity';

class FakeNoteRepository implements INotesReposity {
  private notes: Note[] = [];

  public async create(noteData: ICreateNoteDTO): Promise<Note> {
    const note = new Note();
    Object.assign(note, { id: uuid() }, noteData);

    this.notes.push(note);
    return note;
  }
}

export default FakeNoteRepository;
