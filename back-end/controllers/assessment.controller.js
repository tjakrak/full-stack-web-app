import { db } from '../models/index.js';

export const add = async (req, res) => {

    let {assessmentName, orgId} = req.body;

    try {
        // Store all the information to the database
        await db.org.create({
            assessment_name: orgName,
            organization_id: orgId
        });

        return res.status(200).json({ 
            message: 'You have successfully registered a new org.', 
        });

      } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Error creating user.' });
      }
};