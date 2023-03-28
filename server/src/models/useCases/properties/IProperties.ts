export interface IProperties<T> {
  get<K extends keyof T>(dataToGet: K): T[K];
  set(dataToSet: Partial<T>): void;
}
