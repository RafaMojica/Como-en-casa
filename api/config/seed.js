const products = require("../utils/fakeDataProducto");
const users = require("../utils/fakeData");
const { Cartas, Users } = require("../models");
const db = require("./db");

db.sync({ force: true })
  .then(() => {
    Cartas.bulkCreate(products);
    Users.bulkCreate(users);
  })
  .then(() => console.log("seed finalizado"))
  .catch((error) => console.error(error));
