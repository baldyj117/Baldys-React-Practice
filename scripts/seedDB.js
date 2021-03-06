const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Car collection and inserts the Car below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/carmanager"
);

const carSeed = [
  {
    make: "volkswagen",
    model: "jetta",
    sypnosis: "brakes done",
    date: new Date(Date.now())
  },
];

db.Car
  .remove({})
  .then(() => db.Car.collection.insertMany(carSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });