//join between dominant and user
module.exports = (sequelize, DataTypes) => {
  const DominantUser = sequelize.define("DominantUser", {
    progression: DataTypes.FLOAT,
    nextDeadline: DataTypes.FLOAT,
    lastProgression: DataTypes.FLOAT,
    selected: DataTypes.FLOAT //TODO : oneOf([0,1,2])
  });

  return DominantUser;
};
