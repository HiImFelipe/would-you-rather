import { Choice } from "../../domain/choice.js";
import { GetChoiceRepositoryParams } from "../../domain/contracts.js";

export class ChoiceRepository {
  private choices: Array<Choice> = [];

  async save(choice: Choice): Promise<void> {
    this.choices.push(choice);
  }

  async get(params?: GetChoiceRepositoryParams): Promise<Array<Choice>> {
    const DEFAULT_LIMIT = 10;
    const DEFAULT_PAGE = 1;

    const limit = params?.limit || DEFAULT_LIMIT;
    const page = params?.page || DEFAULT_PAGE;

    const offset = (page - 1) * limit;
    return this.choices.slice(offset, offset + limit);
  }

  async find(id: string): Promise<Choice | undefined> {
    return this.choices.find((choice) => choice.id === id);
  }

  async update(choice: Choice): Promise<void> {
    const choiceIndex = this.choices.findIndex((item) => item.id === choice.id);

    this.choices[choiceIndex] = choice;
  }

  async delete(id: string): Promise<void> {
    const choiceIndex = this.choices.findIndex((item) => item.id === id);

    this.choices.splice(choiceIndex, 1);
  }
}
