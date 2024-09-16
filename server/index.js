const express = require("express");
const cors = require("cors");
// const Sequelize = require("sequelize");
const { sequelize } = require("./util/database");
const { StudyCard } = require("./models/studycard");
const { seedCards } = require("./util/seed");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5001; // Use environment port if available

const { DATABASE_URL } = process.env;

if (!DATABASE_URL) {
  console.error("DATABASE_URL is not defined in the environment variables.");
  process.exit(1);
}

sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Running on Port ${PORT}`));
});

app.post("/seed", seedCards);

app.get("/studyCards", async (req, res) => {
  const studyCards = await StudyCard.findAll();

  res.send(studyCards);
});
