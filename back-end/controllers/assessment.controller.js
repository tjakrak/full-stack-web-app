import passport from 'passport';
import { db } from '../models/index.js';

function transformJson(originalJson) {
    const transformedJson = [];
  
    originalJson.forEach(item => {
        const topTopic = item.top_topic;
        const subTopic1 = item.sub_topic_1;
        const subTopic2 = item.sub_topic_2;
        const subTopic3 = item.sub_topic_3;
        const subTopic4 = item.sub_topic_4;
        const question = item.question;
    
        // Check if the top-level summary already exists in the transformedJson array
        let topLevelItem = transformedJson.find(item => item.summary === topTopic);
        if (!topLevelItem) {
            topLevelItem = {
                summary: topTopic,
                details: 'this is ' + topTopic.toLowerCase() + ' details',
                isOpen: false,
                subTopics1: [],
            };
            transformedJson.push(topLevelItem);
        }
  
        // Check if the subTopic1 summary already exists in the topLevelItem
        let subTopic1Item = topLevelItem.subTopics1.find(item => item.summary === subTopic1);
        if (!subTopic1Item) {
            subTopic1Item = {
                summary: subTopic1,
                details: '',
                isOpen: false,
                subTopics2: [],
            };
            topLevelItem.subTopics1.push(subTopic1Item);
        }
  
        // Check if the subTopic2 summary already exists in the subTopic1Item
        let subTopic2Item = subTopic1Item.subTopics2.find(item => item.summary === subTopic2);
        if (!subTopic2Item) {
            subTopic2Item = {
                summary: subTopic2,
                details: '',
                isOpen: false,
                subTopics3: [],
            };
            subTopic1Item.subTopics2.push(subTopic2Item);
        }
        
        // Check if the subTopic3 summary already exists in the subTopic2Item
        let subTopic3Item = subTopic2Item.subTopics3.find(item => item.summary === subTopic3);
        if (!subTopic3Item) {
            subTopic3Item = {
                summary: subTopic3,
                details: '',
                isOpen: false,
                subTopics4: [],
            };
            subTopic2Item.subTopics3.push(subTopic3Item);
        }
  
        // Check if the subTopic4 summary already exists in the subTopic3Item
        let subTopic4Item = subTopic3Item.subTopics4.find(item => item.summary === subTopic4);
        if (!subTopic4Item) {
            subTopic4Item = {
                summary: subTopic4,
                details: '',
                isOpen: false,
                questions: [],
            };
            subTopic3Item.subTopics4.push(subTopic4Item);
        }

        // Check if the question already exists in the subTopic4Item
        let questionItem = subTopic4Item.questions.find(item => item.summary === question);
        if (!questionItem) {
            questionItem = {
                summary: question,
                details: '',
            };
            subTopic4Item.questions.push(questionItem);
        }
        // // Add the subTopic4 and question to the subTopic3Item
        // subTopic4Item.questions.push({
        //     summary: question,
        //     details: '',
        // });

    });
  
    return transformedJson;
}

export const addAssessment = async (req, res, next) => {
    passport.authenticate('jwt', async (err, user, info) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Server error' });
        }
    
        if (!user) {
            return res.status(400).json({ message: info.message });
        }

        try {
            let { assessment_name: assessmentName } = req.body;

            // Store all the information to the database
            await db.assessment.create({
                assessment_name: assessmentName,
                organization_id: user.organization_id
            });
    
            return res.status(200).json({ 
                message: 'You have successfully created a new assessment for your organization.', 
            });
    
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: 'Error creating assessment.' });
        }
    }) (req, res, next);
};

export const getAssessmentsByOrgId = async (req, res, next) => {
    passport.authenticate('jwt', async (err, user, info) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Server error' });
        }
    
        if (!user) {
            return res.status(400).json({ message: info.message });
        }

        try {
            // Store all the information to the database
            const assessments = await db.assessment.findAll({
                where: {
                    organization_id: user.organization_id
                }
            });

            return res.status(200).json(assessments)
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: 'Error getting assessment.' });
        }
    }) (req, res, next);
}

export const getAssessmentQuestions = async (req, res, next) => {
    passport.authenticate('jwt', async (err, user, info) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Server error' });
        }
    
        if (!user) {
            return res.status(400).json({ message: info.message });
        }

        try {
            // Store all the information to the database
            const assessmentQuestions = await db.question.findAll();

            const questions = transformJson(assessmentQuestions);
            // console.log(questions);

            return res.status(200).json(questions)
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: 'Error loading questions.' });
        }
    }) (req, res, next);
}