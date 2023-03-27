import { db } from '../models/index.js';

export const register = async (req, res) => {

    let {orgName} = req.body;

    try {
        // Store all the information to the database
        await db.org.create({
            organization_name: orgName
        });

        return res.status(200).json({ 
            message: 'You have successfully registered a new org.', 
        });

      } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Error creating user.' });
      }
};