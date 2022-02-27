const express = require("express");
const router = express.Router();
const { Clothes } = require("../models/index");

router.get("/clothes", getclothesHandler);
router.get("/clothe/:id", getClotheHandler);
router.post("/newClothe", newclotheHandler);
router.put("updateclotheInfo/:id", updateclotheInfoHandler);
router.put("deleteclothe/:id", deleteclotheHandler);

// controllers
async function getclothesHandler(req, res) {
  let item = await Clothes.findAll();
  res.status(200).json(item);
}

async function getClotheHandler(req, res) {
  let pid = parseInt(req.params.id);
  let clothe = await Clothes.findOne({ where: { id: pid } });
  res.json(clothe);
}

async function newclotheHandler(req, res) {
  let newClothe = req.body;
  let clothe = await Clothes.create(newClothe);
  res.status(201).json(clothe);
}
async function updateclotheInfoHandler(req, res) {
  let updateInfo = req.body;
  let pid = req.params.id;
  let clotheToUpdate = await Clothes.findOne({ where: { id: pid } });
  const updatedclothe = await clotheToUpdate.update(updateInfo);
  res.status(201).json(updatedclothe);
}

async function deleteclotheHandler(req, res) {
  let pid = parseInt(req.params.id);
  let clothe = await Clothes.destroy({ where: { id: pid } });
  res.status(201).json(`deleted the clothe successfully`);
}

module.exports = router;
