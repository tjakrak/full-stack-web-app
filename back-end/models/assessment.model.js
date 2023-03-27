const assessment = (sequelize, Sequelize) => {
    const Assessment = sequelize.define("assessment", {
        assessment_name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        organization_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: 'organizations',
            referencesKey: 'id'
        }
    });
  
    return Assessment;
};
  
export default assessment;