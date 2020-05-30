import { Request, Response } from 'express';

export default class UsersController {
  public async show(request: Request, response: Response): Promise<Response> {
    return response.json({ message: 'ola mundo' });
  }
}
