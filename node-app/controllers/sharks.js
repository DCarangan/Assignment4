const path = require('path');
const Shark = require('../models/sharks');

exports.index = (req, res) => {
  res.sendFile(path.resolve('views/sharks.html'));
};

exports.create = async (req, res) => {
  try {
    const shark = new Shark(req.body);
    await shark.save();
    res.redirect('/sharks/getshark');
  } catch (err) {
    res.status(400).send("Error saving shark");
  }
};

exports.getSharks = async (req, res) => {
  const sharks = await Shark.find();
  res.json(sharks);
};
