import routes from "../routes.js";
import { indexCount, score, indexOrder, ability } from "./loadingController";

export const result = (req, res) => {
  res.render("result.html", {
    score: score,
    index: indexOrder,
    total: indexCount,
    ability: ability,
  });
};
