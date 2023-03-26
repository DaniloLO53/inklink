import { User } from "../../entities/user/User";
import { IMailProvider } from "../../providers/IMail.provider";
import { IUsersRepository } from "../../repositories/IUser.repository";
import { ICreateUserRequestDTO } from "./CreateUser.tdo";

export class CreateUserUseCase {
  constructor(
    private userRepository: IUsersRepository,
    private mail: IMailProvider
  ) {}

  async create(data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.userRepository.findByEmail(data.email);

    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    const user = new User(data);
    const mail = {
      to: {
        name: data.name,
        email: data.email,
      },
      from: {
        name: 'Equipe Inklink',
        email: 'inklink@gmail.com',
      },
      subject: 'Thank!',
      body: 'Thanks for join us!'
    }

    await this.userRepository.save(user);
    this.mail.sendMail(mail);
  }
};
