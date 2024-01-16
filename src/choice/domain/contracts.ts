import { Choice } from "./choice.js";

export type GetChoiceRepositoryParams = {
  limit?: number;
  page?: number;
};

export interface IChoiceRepository {
  save(choice: Choice): Promise<void>;
  get(params?: GetChoiceRepositoryParams): Promise<Array<Choice>>;
  find(id: string): Promise<Choice | undefined>;
  update(choice: Choice): Promise<void>;
  delete(id: string): Promise<void>;
}

export interface IChoicesService {
  get: (params?: GetChoiceRepositoryParams) => Promise<Array<Choice>>;
}
