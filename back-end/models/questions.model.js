const question = (sequelize, Sequelize) => {
    const Question = sequelize.define("question", {
        top_topic: {
            type: Sequelize.STRING,
            // allowNull: false,
        },
        sub_topic_1: {
            type: Sequelize.STRING,
            // allowNull: false,
        },
        sub_topic_2: {
            type: Sequelize.STRING,
            // allowNull: false,
        },
        sub_topic_3: {
            type: Sequelize.STRING,
            // allowNull: false,
        },
        sub_topic_4: {
            type: Sequelize.TEXT,
            // allowNull: false,
        },
        question: {
            type: Sequelize.TEXT,
            // allowNull: false,
        }
    });
  
    return Question;
};
  
export default question;