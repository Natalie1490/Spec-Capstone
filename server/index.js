const express = require("express");
const cors = require("cors");
const Sequelize = require("sequelize");
const { QueryTypes } = require("sequelize");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());
const PORT = 5001;

const { DATABASE_URL } = process.env;

const sequelize = new Sequelize(DATABASE_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

app.listen(PORT, () => console.log(`Running on Port ${PORT}`));

app.get("/studyCards", (req, res) => {
  sequelize.query("SELECT * FROM study_cards;").then((dbRes) => {
    console.log(dbRes);
    res.send(dbRes[0]);
  });
});
