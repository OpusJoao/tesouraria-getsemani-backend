import { Router } from "express";
import { adaptRoute } from "./ adapter/expressRouterAdapter";
import { makeGetAllPaymentsController } from "./factory/makeGetAllPaymentsController";
import { makeHealthCheckController } from "./factory/makeHealthCheckController";
const router = Router()

router.get('/payments/', adaptRoute(makeGetAllPaymentsController()))
router.get('/healthcheck/', adaptRoute(makeHealthCheckController()))

export default router