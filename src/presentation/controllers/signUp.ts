import { MissingParamError } from "../errors/missing-param-error";
import { HttpRequest, HttpResponse } from "../protocols/http";
import { BadRequest } from "../helpers/httpHelper";

export class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse {

    const requiredFields = ["name", "email"];
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return BadRequest(new MissingParamError(field));
      }
    }
  }
}
