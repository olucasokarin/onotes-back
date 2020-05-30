import AppError from '@shared/errors/AppError';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import CreateUserService from './CreateUserService';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';

let fakeUsersRepository: FakeUsersRepository;
let createUser: CreateUserService;
let fakeHashProvider: FakeHashProvider;

beforeEach(() => {
  fakeUsersRepository = new FakeUsersRepository();
  fakeHashProvider = new FakeHashProvider();
  createUser = new CreateUserService(fakeUsersRepository, fakeHashProvider);
});
describe('CreateUser', () => {
  it('should be able to create a new user', async () => {
    const user = await createUser.execute({
      email: 'a@a.com',
      password: '123456',
    });

    expect(user).toHaveProperty('id');
  });

  it('should not be able to create a new user with same email from another', async () => {
    await createUser.execute({
      email: 'a@a.com',
      password: '123456',
    });

    await expect(
      createUser.execute({
        email: 'a@a.com',
        password: '1223',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
