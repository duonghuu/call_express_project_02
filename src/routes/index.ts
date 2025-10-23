import { callController } from "@controllers/callController";
import { Router } from "express";

const router = Router();

router.get("/call/signup_s2s", callController.signup_s2s);
router.get("/call/trigger_s2s", callController.trigger_s2s);
router.get("/call/multi_signup_s2s", callController.multi_signup_s2s);
router.get("/call/multi_trigger_s2s", callController.multi_trigger_s2s);

export default router;