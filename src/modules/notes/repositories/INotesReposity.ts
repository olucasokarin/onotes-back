import ICreateNoteDTO from '../dto/ICreateNoteDTO';
import IListNotesDTO from '../dto/IListNotesDTO';
import Note from '../infra/typeorm/entities/Note';

export default interface INotesReposity {
  save(note: Note): Promise<Note | undefined>;
  findNoteById(noteId: string): Promise<Note | undefined>;
  create(dataNote: ICreateNoteDTO): Promise<Note>;
  findAllNotes(dataListNote: IListNotesDTO): Promise<Note[]>;
}
