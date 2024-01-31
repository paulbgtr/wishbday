import Router from "koa-router";
import AuthController from "./controllers/auth.controller.js";

const router = new Router();

router.get("/hello", (ctx) => {
  ctx.body = "Hey";
});

router.post("/sign-up", AuthController.signUp);
router.post("/sign-in", AuthController.signIn);

export default router;
