import routes from "../routes";
import Result from "../models/Result";

export let indexCount;
export let indexOrder = 1;
export let score;
export let ability;

export const loadingDb = async (req, res) => {
  try {
    const resultCount = await Result.countDocuments({}).exec();
    indexCount = resultCount + 1;
    score = req.body.SCORE;
    ability = [req.body.CA, req.body.PO, req.body.AC, req.body.AW];

    await Result.create({
      user: indexCount,
      resultScore: score,
      resultAbility: {
        "CA": ability[0],
        "PO": ability[1],
        "AC": ability[2],
        "AW": ability[3],
      },
    });

    const sortedDb = await Result.find().sort({ resultScore: -1 });
    console.log(sortedDb);
    sortedDb.some(function (item, index, _arr) {
      indexOrder = index;
      console.log(indexOrder);
      return score >= item.resultScore;
    });
    res.redirect("/result");
  } catch (error) {
    console.log(error);
  }
};
