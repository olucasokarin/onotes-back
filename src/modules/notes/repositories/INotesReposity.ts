import ICreateNoteDTO from '../dto/ICreateNoteDTO';
import Note from '../infra/typeorm/entities/Note';

export default interface INotesReposity {
  create(dataNote: ICreateNoteDTO): Promise<Note>;
}
