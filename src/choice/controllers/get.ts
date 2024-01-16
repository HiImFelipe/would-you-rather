import { IChoicesService } from "../index.js";

export class GetChoiceController {
  constructor(private readonly choiceService: IChoicesService) {}

  async execute() {
    const choice = await this.choiceService.get({});

    return choice;
  }
}
