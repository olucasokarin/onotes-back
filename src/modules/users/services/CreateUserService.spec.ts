import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import CreateUserService from './CreateUserService';

let fakeUsersRepository: FakeUsersRepository;
let createUser: CreateUserService;

beforeEach(() => {
  fakeUsersRepository = new FakeUsersRepository();
  createUser = new CreateUserService(fakeUsersRepository);
});
describe('CreateUser', () => {
  it('should be able to create a new user', async () => {
    const user = await createUser.execute({
      email: 'a@a.com',
      password: '123456',
    });

    expect(user).toHaveProperty('id');
  });
});
