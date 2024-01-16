import type {
  HTTPRequest,
  HTTPResponse,
  IHTTPRoutes,
} from "../../../helpers/contracts.js";
import { choicesService } from "../../index.js";

export const CHOICES_ROUTE_PATH = "/choices";

class ChoicesHTTPRoutes implements IHTTPRoutes {
  execute(request: HTTPRequest, response: HTTPResponse) {
    switch (request.method) {
      case "GET": {
        return this.get(request, response);
      }
      default: {
        response.setStatus(404);
        response.setBody({
          message: "Not found",
        });
      }
    }
  }

  private async get(_: HTTPRequest, response: HTTPResponse) {
    const choices = await choicesService.get();

    response.setStatus(200);
    response.setBody({
      message: "Choices successfully fetched",
      data: choices,
    });
  }
}

const choicesHTTPRoutes = new ChoicesHTTPRoutes();

export { choicesHTTPRoutes };
