import AppError from '@shared/errors/AppError';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import AuthenticateUserService from './AuthenticateUserService';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let authenticateUser: AuthenticateUserService;

beforeEach(() => {
  fakeUsersRepository = new FakeUsersRepository();
  fakeHashProvider = new FakeHashProvider();
  authenticateUser = new AuthenticateUserService(
    fakeUsersRepository,
    fakeHashProvider,
  );
});
describe('AutheticateUSer', () => {
  it('should be able to authenticate a user', async () => {
    const user = await fakeUsersRepository.create({
      email: 'a@a.com',
      password: '123456',
    });

    const response = await authenticateUser.execute({
      email: 'a@a.com',
      password: '123456',
    });

    expect(response).toHaveProperty('token');
    expect(response.user).toEqual(user);
  });

  it('should not be able to authenticate with a wrong password', async () => {
    await fakeUsersRepository.create({
      email: 'a@a.com',
      password: '123456',
    });

    await expect(
      authenticateUser.execute({
        email: 'a@a.com',
        password: '126',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to authenticate with non existing user', async () => {
    await expect(
      authenticateUser.execute({
        email: 'a@a.com',
        password: '126',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
