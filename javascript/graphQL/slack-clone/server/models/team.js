export default (sequelize, dataType) => {
  const Team = sequelize.define('team', {
    name: { type: dataType.STRING, unique: true }
  });

  Team.associate = (models) => {
    Team.belongsToMany(models.User, {
      through: 'member',
      // teamID to match graphQL schema and team_id for sql select
      foreignKey: { name: 'teamId', field: 'team_id' }
    });
    Team.belongsTo(models.User, {
      foreignKey: 'owner'
    });
  };

  return Team;
};
