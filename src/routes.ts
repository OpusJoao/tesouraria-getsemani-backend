import { Router } from "express";
import HealthCheckController from "./controller/healthcheckController";
import PaymentsController from "./controller/paymentsController";
import PaymentsService from "./service/paymentsService";
import PaymentsRepository from './database/payments'
const paymentsController = new PaymentsController(new PaymentsService(PaymentsRepository))
const router = Router()

router.get('/payments/', PaymentsController.getAll)
router.get('/healthcheck/', HealthCheckController.index)

export default router