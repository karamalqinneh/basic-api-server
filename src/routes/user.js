const express = require("express");
const { User } = require("../models/index");
const router = express.Router();
// console.log(User);

router.get("/users", getUsersHandler);
router.get("/user/:id", getSingleUsersHandler);
router.post("/newUser", newUserHandler);
router.put("/updateUserInfo/:id", updateUserInfoHandler);
router.delete("/deleteUser/:id", deleteUserHandler);

// controllers
async function getUsersHandler(req, res) {
  let people = await User.findAll();
  res.status(200).json(people);
}

async function getSingleUsersHandler(req, res) {
  let pid = parseInt(req.params.id);
  let user = await User.findOne({ where: { id: pid } });
  res.json(user);
}

async function newUserHandler(req, res) {
  let newUser = req.body;
  //   console.log(newUser);
  let user = await User.create(newUser);
  res.status(201).json(user);
}
async function updateUserInfoHandler(req, res) {
  let updateInfo = req.body;
  let pid = req.params.id;
  let userToUpdate = await User.findOne({ where: { id: pid } });
  const updatedUser = await userToUpdate.update(updateInfo);
  res.status(201).json(updatedUser);
}

async function deleteUserHandler(req, res) {
  let pid = parseInt(req.params.id);
  console.log(pid);
  let user = await User.destroy({ where: { id: pid } });
  res.status(201).json(user);
}

module.exports = router;
