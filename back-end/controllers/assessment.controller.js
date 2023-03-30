import passport from 'passport';
import { db } from '../models/index.js';

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

export const getAssessments = async (req, res, next) => {
    passport.authenticate('jwt', async (err, user, info) => {
        try {
            // Store all the information to the database
            const assessments = await db.assessment.findAll({
                where: {
                    organization_id: user.organization_id
                }
            });

            return res.status(200).json(assessments\)
        } catch (err) {

        }
    }) (req, res, next);
}