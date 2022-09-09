import { Router } from "express";
import HealthCheckController from "./controllers/healthcheckController";
import PaymentsController from "./controllers/paymentsController";

const router = Router()

router.get('/payments/', PaymentsController.getAll)
router.get('/healthcheck/', HealthCheckController.index)

export default router