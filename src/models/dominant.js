module.exports = (sequelize, DataTypes) => {
  const Dominant = sequelize.define("Dominant", {
    name: DataTypes.STRING
  });

  Dominant.associate = models => {
    Dominant.belongsToMany(models["User"], { through: "DominantUser" });
  };

  return Dominant;
};
