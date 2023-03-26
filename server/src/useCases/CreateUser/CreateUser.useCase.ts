import { User } from "../../entities/user/User";
import { IUsersRepository } from "../../repositories/IUser.repository";
import { ICreateUserRequestDTO } from "./CreateUser.tdo";

export class CreateUserUseCase {
  constructor(private userRepository: IUsersRepository) {}

  async create(data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.userRepository.findByEmail(data.email);

    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    const user = new User(data);

    this.userRepository.save();
  }
};
