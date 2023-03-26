import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUser.useCase";

export class CreateUserController {
  constructor(private useCase: CreateUserUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    try {
      await this.useCase.create({name, email, password});

      return response.status(201).send();
    } catch (error: any) {
      return response.status(400).json({
        message: error.message || 'Unexpected error'
      })
    }

  }
};
