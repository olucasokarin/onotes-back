import { injectable, inject } from 'tsyringe';
import INotesReposity from '../repositories/INotesReposity';
import Note from '../infra/typeorm/entities/Note';

interface IRequest {
  name: string;
  content: string;
  userId: string;
  categoryId: string;
}

@injectable()
class CreateNoteService {
  constructor(
    @inject('NotesRepository')
    private notesRepository: INotesReposity,
  ) {}

  public async execute({
    name,
    userId,
    content,
    categoryId,
  }: IRequest): Promise<Note> {
    const category = await this.notesRepository.create({
      name,
      content,
      userId,
      categoryId,
    });

    return category;
  }
}

export default CreateNoteService;
