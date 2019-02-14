export default (sequelize, dataType) => {
  const User = sequelize.define('user', {
    username: { type: dataType.STRING, unique: true },
    email: { type: dataType.STRING, unique: true },
    password: { type: dataType.STRING }
  });

  User.associate = (models) => {
    User.belongsToMany(models.Team, {
      through: 'member',
      foreignKey: 'userId'
    });
  };

  return User;
};
