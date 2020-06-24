import { injectable, inject } from 'tsyringe';
import INotesReposity from '../repositories/INotesReposity';
import Note from '../infra/typeorm/entities/Note';

interface IRequest {
  userId: string;
  categoryId: string;
}

@injectable()
class ListNotesService {
  constructor(
    @inject('NotesRepository')
    private notesRepository: INotesReposity,
  ) {}

  public async execute({ userId, categoryId }: IRequest): Promise<Note[]> {
    const categories = this.notesRepository.findAllNotes({
      userId,
      categoryId,
    });

    return categories;
  }
}

export default ListNotesService;
