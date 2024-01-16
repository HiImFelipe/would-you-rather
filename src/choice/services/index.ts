import { ChoiceRepository } from "../infra/repository/choice-repository.js";
import { GetChoicesService } from "./get.js";

const choiceRepository = new ChoiceRepository();
const getChoicesService = new GetChoicesService(choiceRepository);

class ChoicesService {
  get = getChoicesService.execute.bind(getChoicesService);
}

const choicesService = new ChoicesService();

export { choicesService };
