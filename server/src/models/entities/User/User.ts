import { Model } from "../../Model";
import { Properties } from "../../useCases/properties/Properties";
import { IUserPropertiesDTO } from "./useCases/IUserProperties.dto";

export class User extends Model<IUserPropertiesDTO> {
  public static buildUser(props: IUserPropertiesDTO) {
    const properties = new Properties<IUserPropertiesDTO>(props);

    return new User(properties);
  }
};

const danilo = User.buildUser({ name: "Danilo", email: "dan@gmail.com", password: "123" });