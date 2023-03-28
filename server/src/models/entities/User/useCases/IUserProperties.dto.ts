interface HasId {
  readonly id?: string;
}

export interface IUserPropertiesDTO extends HasId {
  name: string;
  password: string;
  email: string;
};