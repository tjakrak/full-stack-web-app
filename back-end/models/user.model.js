const user = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        user_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
  
    return User;
};
  
export default user;