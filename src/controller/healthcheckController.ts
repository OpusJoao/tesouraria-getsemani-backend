import ControllerInterface from "../interface/IController";
import HttpRequest from "../interface/IHttpRequest";
import HttpResponse from "../interface/IHttpResponse";

export default class HealthCheckController implements ControllerInterface{
  public readonly name: string = 'HealthCheckController'
  handle(req: HttpRequest): HttpResponse{
    return {
      statusCode: 200,
      body: {
        message: 'healthy'
      }
    }
  }
}