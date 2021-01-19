import express from "express";
import {
  getJoin,
  postJoin,
  getLogin,
  postLogin,
  githubLogin,
  logout,
  postGithubLogIn,
} from "../controllers/userControllers";
import { home, search } from "../controllers/videoControllers";
import routes from "../routes";
import { onlyPrivate, onlyPublic } from "../middlewares";
import passport from "passport";

const globalRouter = express.Router();

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.logout, onlyPrivate, logout);
globalRouter.get(routes.search, search);

globalRouter.get(routes.github, githubLogin);
globalRouter.get(
  routes.githubCallback,
  passport.authenticate("github", { failureRedirect: "/login" }),
  postGithubLogIn
);
export default globalRouter;
