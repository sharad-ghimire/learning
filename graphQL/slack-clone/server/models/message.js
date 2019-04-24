export default (sequelize, dataType) => {
  const Message = sequelize.define('message', {
    text: { type: dataType.STRING }
  });

  Message.associate = (models) => {
    // 1:M
    Message.belongsTo(models.Channel, {
      foreignKey: { name: 'channelId', field: 'channel_id' }
    });
    Message.belongsTo(models.User, {
      foreignKey: { name: 'userId', feild: 'user_id' }
    });
  };

  return Message;
};
