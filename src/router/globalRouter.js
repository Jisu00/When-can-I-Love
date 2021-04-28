import express from "express";
import routes from "../routes";
import { home } from "../controllers/homeController";
import { result } from "../controllers/resultController";
import { question } from "../controllers/questionController";
import { loading, loadingDb } from "../controllers/loadingController";
import { onlyPublic } from "../middlewares.js";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.question, question);
globalRouter.post(routes.loading, loadingDb);
globalRouter.get(routes.result, result);

export default globalRouter;
