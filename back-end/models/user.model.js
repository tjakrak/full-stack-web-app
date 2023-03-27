const user = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        email: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        first_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        last_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        company_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        organization_id: {
            type: Sequelize.INTEGER,
            references: 'organizations',
            referencesKey: 'id'
        }
    });
  
    return User;
};
  
export default user;