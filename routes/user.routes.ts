import { Router } from "express";
import { validateIp } from "../auth/validate-ip";
import { config } from "../config/config";
import {
  getResults,
  saveResult,
  sendInvitation,
} from "../controllers/user.controller";

const router = Router();

/**
 * @swagger
 * /api/user/invitation:
 *   post:
 *    summary: Recibe un email desde App1 y lo reenvia a App2
 *    responses:
 *     200:
 *        description: Devuelve OK si Nawaiam confirma la recepcion
 *     400:
 *        description: Devuelve mensaje de error si Nawaiam devolvio error
 *     500:
 *        description: Devuelve error si hubo problema interno en el conector
 * */
router.post("/user/invitation", validateIp, sendInvitation);

/**
 * @swagger
 * /api/user/webhook/result:
 *   post:
 *    summary: Webhook que consume Nawaiam para enviar el resultado de un usuario y luego se guarda en una BD
      responses:
 *     200:
 *        description: Devuelve OK si se salvo el resultado en DB
 *     400:
 *        description: Devuelve mensaje de error si hubo algun error de negocio
 *     500:
 *        description: Devuelve error si hubo problema interno en el conector
* */

router.post("/user/webhook/result", saveResult);
router.get("/results", getResults);

export { router as userRouter };
