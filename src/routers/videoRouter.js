import express from "express";
import routes from "./routes.js";
import {
  getUpload,
  postUpload,
  videoDetail,
  getEditVideo,
  deleteVideo,
  postEditVideo,
} from "../controllers/videoControllers";
import { uploadVideo } from "../../middlewares.js";

const videoRouter = express.Router();

//Upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

//video Detail
videoRouter.get(routes.videoDetail(), videoDetail);

//Edit Video
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);
//delete Video
videoRouter.get(routes.deleteVideo(), deleteVideo);

export default videoRouter;
