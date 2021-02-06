import express from "express";
import routes from "../routes";
import {
  postAddComent,
  postRegisterView,
} from "../controllers/videoControllers";

const apiRouter = express.Router();

apiRouter.post(routes.registerView, postRegisterView);
apiRouter.post(routes.addComment, postAddComent);
export default apiRouter;
