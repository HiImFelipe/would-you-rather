import { choicesService } from "../index.js";
import { GetChoiceController } from "./get.js";

const get = new GetChoiceController(choicesService);

export class ChoicesController {
  get = get;
}

const choicesController = new ChoicesController();

export { choicesController };
