module.exports = (sequelize, DataTypes) => {
  const UserSkill = sequelize.define("UserSkill", {
    progression: DataTypes.FLOAT
  });

  return UserSkill;
};
