import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdm } from "./middlewares/ensureAdm";
import { AuthUserController } from "./controllers/AuthUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAuth } from "./middlewares/ensureAuth";
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiveComplimentsController";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController()
const authUserController = new AuthUserController()
const createComplimentController = new CreateComplimentController()
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController()
const listUserSendComplimentsController = new ListUserSendComplimentsController()

router.post("/tags",ensureAuth,ensureAdm,createTagController.handle)
router.post("/users",createUserController.handle)
router.post("/login",authUserController.handle)
router.post("/compliments",ensureAuth,createComplimentController.handle)

router.get("/users/compliments/send",ensureAuth,listUserSendComplimentsController.handle)
router.get("/users/compliments/receive",ensureAuth,listUserReceiveComplimentsController.handle)

export{router}