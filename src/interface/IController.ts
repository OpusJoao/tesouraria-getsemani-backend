import HttpRequest from "./IHttpRequest";
import HttpResponse from "./IHttpResponse";

export default interface ControllerInterface{
  handle(req: HttpRequest): HttpResponse
}