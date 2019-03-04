module.exports = (sequelize, DataTypes) => {
  const Criterion = sequelize.define("Criterion", {
    name: DataTypes.STRING
  });

  Criterion.associate = models => {
    Criterion.belongsToMany(models["SubjectUser"], {
      through: "CriterionUserSubject"
    });
  };

  return Criterion;
};
