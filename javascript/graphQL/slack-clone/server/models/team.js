export default (sequelize, dataType) => {
  const Team = sequelize.define('team', {
    name: { type: dataType.STRING, unique: true }
  });

  Team.associate = (models) => {
    Team.belongsToMany(models.User, {
      through: 'member',
      foreignKey: 'teamId'
    });
    Team.belongsTo(models.User, {
      foreignKey: 'owner'
    });
  };

  return Team;
};
