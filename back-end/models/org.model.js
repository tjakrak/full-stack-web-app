const org = (sequelize, Sequelize) => {
    const Org = sequelize.define("organization", {
        organization_name: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    });
  
    return Org;
};
  
export default org;