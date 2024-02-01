import { inscription, login } from "../controllers/userController";
const userRouter = require("express").Router();

userRouter.post("/inscription", inscription);
userRouter.post("/login", login);

export default userRouter;
