import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import path from "path";
import routes from "./routes";
import globalRouter from "./router/globalRouter";
import cookiePaser from "cookie-parser";
import { localsMiddleware } from "./middlewares";

const app = express();

app.use(morgan("dev"));
app.use(cookiePaser());
app.use(helmet());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

app.use(localsMiddleware);
app.use("/static", express.static(path.join(__dirname, "static")));

app.use(routes.home, globalRouter);

export default app;
