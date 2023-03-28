import { IProperties } from "./useCases/properties/IProperties";

export class Model<T> {
  constructor (
    private properties: IProperties<T>
  ) {}

  get = this.properties.get;
  set = this.properties.set;
};