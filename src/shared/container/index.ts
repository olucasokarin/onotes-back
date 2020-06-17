import { container } from 'tsyringe';

import '@modules/users/providers';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import ICategoryRepository from '@modules/categories/repositories/ICategoryReposity';
import CategoryRepository from '@modules/categories/infra/typeorm/repositories/CategoryRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<ICategoryRepository>(
  'CategoriesRepository',
  CategoryRepository,
);
