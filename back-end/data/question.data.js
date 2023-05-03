import fs from 'fs';
import { parse } from 'csv-parse';
import db from '../models/index.js';

const insertQuestionsToDb = async () => {
    // Read the CSV file
    const csvData = fs.readFileSync('./data/questions.csv', 'utf8');

    // Parse the CSV data
    parse(csvData, { columns: true, skip_empty_lines: true }, async (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const existingData = await db.question.findAll();
            if (existingData.length === 0) {
                await db.question.bulkCreate(data, { ignoreDuplicates: true });
                console.log('Data inserted successfully!');
            } else {
                console.log('Data already exists in the database, skipping insertion.');
            }
        }
    });
};

export default insertQuestionsToDb;