const { Router } = require("express");
const indexRouter = Router();
const databaseController = require("../controllers/dbcrud");
indexRouter.get("/", databaseController.getusers);
indexRouter.get("/new", databaseController.addUserGet);
indexRouter.post("/new", databaseController.addUserPost);
module.exports = indexRouter;
