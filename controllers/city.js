const express = require('express');
const City = require('../models/city');

const router = express.Router();

router.get("/", (req,res) => {
  City.find().then(cities => {
    res.json(cities);
  })
});

router.get("/:id", (req,res) => {
  City.findById(req.params.id).then((city) => {
    res.json(city);
  });
});

module.exports = router;