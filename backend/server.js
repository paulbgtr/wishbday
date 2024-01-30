import router from "./router.js";
import bodyParser from "koa-bodyparser";
import Koa from "koa";

const app = new Koa();

app.use(bodyParser());
app.use(router.routes());

app.listen(3000);
