module.exports = (sequelize, DataTypes) => {
  const CriterionUserSubject = sequelize.define("CriterionUserSubject", {
    selected: DataTypes.BOOLEAN,
    value: DataTypes.FLOAT
  });

  return CriterionUserSubject;
};
