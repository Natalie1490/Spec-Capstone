const { DataTypes } = require("sequelize");

const { sequelize } = require("../util/database");

module.exports = {
  StudyCard: sequelize.define("study_card", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    question: DataTypes.STRING(1000),
    answer: DataTypes.STRING(1000),
  }),
};
