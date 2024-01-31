import router from "./router.js";
import bodyParser from "koa-bodyparser";
import Koa from "koa";
import cors from "@koa/cors";

const app = new Koa();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(bodyParser());
app.use(router.routes());

app.listen(3000);
