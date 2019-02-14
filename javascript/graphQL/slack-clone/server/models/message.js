export default (sequelize, dataType) => {
  const Message = sequelize.define('message', {
    text: { type: dataType.STRING }
  });

  Message.associate = (models) => {
    // 1:M
    Message.belongsTo(models.Channel, {
      foreignKey: 'channelId'
    });
    Message.belongsTo(models.User, {
      foreignKey: 'userId'
    });
  };

  return Message;
};
