import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "연애하고싶다";
  res.locals.routes = routes;
  next();
};
