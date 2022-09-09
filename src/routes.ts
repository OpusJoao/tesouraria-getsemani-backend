import { Router } from "express";
import { adaptRoute } from "./ adapter/expressRouterAdapter";
import { makeCreatePaymentController } from "./factory/makeCreatePaymentsController";
import { makeGetAllPaymentsController } from "./factory/makeGetAllPaymentsController";
import { makeHealthCheckController } from "./factory/makeHealthCheckController";
const router = Router()

router.get('/payments/', adaptRoute(makeGetAllPaymentsController()))
router.post('/payments/', adaptRoute(makeCreatePaymentController()))
router.get('/healthcheck/', adaptRoute(makeHealthCheckController()))

export default router