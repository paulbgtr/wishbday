import Router from "koa-router";
import AuthController from "./controllers/auth.controller.js";

const router = new Router();

router.get("/hello", (ctx) => {
  ctx.body = "Hey";
});

router.post("/auth/sign-up", AuthController.signUp);
router.post("/auth/sign-in", AuthController.signIn);
router.get("/auth/sign-out", AuthController.signOut);
router.get("/auth/me", AuthController.me);

export default router;
