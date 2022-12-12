const expres = require("express");
const userModel = require("../model/userSchema");

const todoRouter = expres.Router();
todoRouter.get("/get", async (req, res) => {
  const todo = await userModel.find();
  res.send(todo);
});
todoRouter.post("/create", async (req, res) => {
  const payload = req.body;
  try {
    const new_todo = new userModel(payload);
    await new_todo.save();
    res.status(200).send({ msg: "TODO CREATED......" });
  } catch (error) {
    res.send({ message: error });
  }
});
//  upfdate
todoRouter.patch("/update/:noteID", async (req, res) => {
  const payload = req.body;
  const noteID = req.params.noteID;
  const userID = req.body.userID;
  const todo = await userModel.findOne({ _id: noteID });
  if (userID !== todo.noteID) {
    res.send("NOT AUTHORIZED");
  } else {
    await userModel.findByIdAndUpdate({ _id: noteID }, payload);
    res.send({ message: "Todo update" });
  }
});
todoRouter.delete("/delete/:noteID", async (req, res) => {
    const payload = req.body;
  const noteID = req.params.noteID;
  const userID = req.body.userID;
  const todo = await userModel.findOne({ _id: noteID });
  if (userID !== todo.noteID) {
    res.send("NOT AUTHORIZED");
  } else {
    await userModel.findByIdAndUpdate({ _id: noteID }, payload);
    res.send({ message: "Todo Delete " });
  }
});
module.exports = todoRouter;
