import HttpRequest from "./IHttpRequest";
import HttpResponse from "./IHttpResponse";

export default interface ControllerInterface{
  readonly name: String
  handle(req: HttpRequest): Promise<HttpResponse> | HttpResponse
}