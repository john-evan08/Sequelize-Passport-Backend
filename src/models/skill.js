module.exports = (sequelize, DataTypes) => {
  const Skill = sequelize.define("Skill", {
    name: DataTypes.STRING,
    imageSrc: DataTypes.STRING //TODO : how to store images
  });

  Skill.associate = models => {
    Skill.belongsToMany(models["User"], { through: "UserSkill" });
  };
  return Skill;
};
