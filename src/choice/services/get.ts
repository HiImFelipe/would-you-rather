import { Choice } from "../domain/choice.js";
import { IChoiceRepository } from "../domain/contracts.js";

export type GetChoicesServiceParams = {
  page?: number;
  limit?: number;
};

export class GetChoicesService {
  constructor(private choiceRepository: IChoiceRepository) {}

  async execute(params?: GetChoicesServiceParams): Promise<Array<Choice>> {
    console.log("Executing a search on choice repository");

    const choice = this.choiceRepository.get({
      limit: params?.limit,
      page: params?.page,
    });

    console.log(
      "Search executed successfully, result given: ",
      JSON.stringify(choice)
    );

    return choice;
  }
}
