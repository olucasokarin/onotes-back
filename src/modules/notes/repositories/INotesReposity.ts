import ICreateNoteDTO from '../dto/ICreateNoteDTO';
import IListNotesDTO from '../dto/IListNotesDTO';
import Note from '../infra/typeorm/entities/Note';

export default interface INotesReposity {
  create(dataNote: ICreateNoteDTO): Promise<Note>;
  findAllNotes(dataListNote: IListNotesDTO): Promise<Note[]>;
}
