import { Router } from "express";
import { adaptRoute } from "./ adapter/expressRouterAdapter";
import { makeCreatePaymentController } from "./factory/makeCreatePaymentsController";
import { makeGetAllPaymentsController } from "./factory/makeGetAllPaymentsController";
import { makeGetPaymentInfoByPaymentId } from "./factory/makeGetPaymentInfoByPaymentId";
import { makeHealthCheckController } from "./factory/makeHealthCheckController";
const router = Router()

router.get('/payments/', adaptRoute(makeGetAllPaymentsController()))
router.post('/payments/', adaptRoute(makeCreatePaymentController()))
router.get('/paymentsInfo/:paymentId', adaptRoute(makeGetPaymentInfoByPaymentId()))
router.get('/healthcheck/', adaptRoute(makeHealthCheckController()))

export default router