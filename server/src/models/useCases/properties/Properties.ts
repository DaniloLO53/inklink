import { uuid } from "uuidv4";

interface HasId {
  readonly id?: string;
}

export class Properties<T extends HasId> {
  constructor (
    private data: T
  ) {
    if (!this.data.id) this.set({ id: uuid() } as Partial<T>);
  }

  get<K extends keyof T>(dataToGet: K): T[K] {
    return this.data[dataToGet];
  }

  set(dataToSet: Partial<T>): void {
    this.data = { ...this.data, dataToSet };
  }
};
