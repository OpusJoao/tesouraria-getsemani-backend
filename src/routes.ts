import { Router } from "express";
import HealthCheckController from "./controller/healthcheckController";
import { adaptRoute } from "./ adapter/expressRouterAdapter";
import { makeGetAllPaymentsController } from "./factory/makeGetAllPaymentsController";
const router = Router()

router.get('/payments/', adaptRoute(makeGetAllPaymentsController()))
router.get('/healthcheck/', HealthCheckController.index)

export default router