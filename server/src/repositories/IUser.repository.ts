import { User } from "../entities/user/User";

export interface IUsersRepository {
  findByEmail(email: string): Promise<User>;
  save(user: User): Promisse<void>;
};
