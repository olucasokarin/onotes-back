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

  public async save(note: Note): Promise<Note> {
    const findIndex = this.notes.findIndex(findNote => findNote.id === note.id);

    this.notes[findIndex] = note;

    return note;
  }

  public async findNoteById(noteId: string): Promise<Note | undefined> {
    const findNote = this.notes.find(note => note.id === noteId);

    return findNote;
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
