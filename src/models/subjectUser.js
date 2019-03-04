//join between dominant and user
module.exports = (sequelize, DataTypes) => {
  const SubjectUser = sequelize.define("SubjectUser", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    progression: DataTypes.FLOAT,
    lastProgression: DataTypes.FLOAT
  });

  SubjectUser.associate = models => {
    SubjectUser.belongsToMany(models["Criterion"], {
      through: "CriterionUserSubject"
    });
    SubjectUser.hasMany(models["Event"]);
  };

  return SubjectUser;
};
