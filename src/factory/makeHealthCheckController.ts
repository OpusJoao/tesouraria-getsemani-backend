import HealthCheckController from "../controller/healthcheckController"

export const makeHealthCheckController = () => {
  return new HealthCheckController()
}