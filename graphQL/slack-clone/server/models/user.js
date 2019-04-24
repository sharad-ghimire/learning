export default (sequelize, dataType) => {
  const User = sequelize.define('user', {
    username: { type: dataType.STRING, unique: true },
    email: { type: dataType.STRING, unique: true },
    password: { type: dataType.STRING }
  });

  User.associate = (models) => {
    User.belongsToMany(models.Team, {
      through: 'member',
      foreignKey: { type: 'userId', name: 'user_id' }
    });
    // N:M
    User.belongsToMany(models.Channel, {
      through: 'channel_member',
      foreignKey: { type: 'userId', name: 'user_id' }
    });
  };

  return User;
};
