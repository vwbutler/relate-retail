const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Tag extends Model {}

Tag.init(
  {
    // define columns
    tag_name: {
      type: DataTypes.STRING, // Assuming the tag name is a string
      allowNull: false, // A tag name cannot be null
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "tag",
  }
);

module.exports = Tag;
