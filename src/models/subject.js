module.exports = (sequelize, DataTypes) => {
  const Subject = sequelize.define("Subject", {
    name: DataTypes.STRING
  });

  Subject.associate = models => {
    Subject.belongsToMany(models["User"], { through: "SubjectUser" });
  };
  return Subject;
};
