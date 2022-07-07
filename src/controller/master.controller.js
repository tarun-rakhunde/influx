const express = require("express");
const router = express.Router();

const ItemMaster = require("../model/master.model");

router.get("", async (req, res) => {
  try {
    const product = await ItemMaster.find().lean().exec();
    return res.send(product);
  } catch (error) {
    console.log(error.message);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const product = await ItemMaster.findById(req.params.id).lean().exec();
    return res.send(product);
  } catch (error) {
    console.log(error.message);
  }
});

router.post("", async (req, res) => {
  try {
    const product = await ItemMaster.create(req.body);
    return res.send(product);
  } catch (error) {
    console.log(error.message);
  }
});
module.exports = router;