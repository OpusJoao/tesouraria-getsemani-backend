import { request, Request, Response, Router } from "express";
import PaymentsController from "./controllers/paymentsController";

const router = Router()

router.get('/payments/', PaymentsController.getAll)

export default router