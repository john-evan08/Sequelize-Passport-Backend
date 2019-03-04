module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define("Event", {
    name: DataTypes.STRING,
    date: DataTypes.DATE
  });

  return Event;
};
