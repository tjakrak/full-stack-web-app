const assessment = (sequelize, Sequelize) => {
    const Assessment = sequelize.define("assessment", {
        assessment_name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        organization_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'organizations',
                key: 'id'
            }
        },
        score: {
            type: Sequelize.DECIMAL(10, 1),
            defaultValue: 0,
        },
        status: {
            type: Sequelize.STRING,
            defaultValue: 'Not Started',
        },
    });
  
    return Assessment;
};

export default assessment;