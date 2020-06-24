import ICreateNoteDTO from '../dto/ICreateNoteDTO';
import IListNotesDTO from '../dto/IListNotesDTO';
import Note from '../infra/typeorm/entities/Note';

export default interface INotesReposity {
  findNoteById(noteId: string): Promise<Note | undefined>;
  create(dataNote: ICreateNoteDTO): Promise<Note>;
  findAllNotes(dataListNote: IListNotesDTO): Promise<Note[]>;
}
