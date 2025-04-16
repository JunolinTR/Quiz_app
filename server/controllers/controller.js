import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import questions, { answers } from '../database/data.js';

/** Get all questions */
export async function getQuestions(req, res) {
    try {
        const q = await Questions.find();
        res.status(200).json(q); // Send a 200 status code with data
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ error: 'Error retrieving questions' });
    }
}

/** Insert all questions */
export async function insertQuestions(req, res) {
    try {
        const insertedQuestions = await Questions.insertMany({ questions, answers });
        res.status(201).json({ msg: "Data Saved Successfully...!", data: insertedQuestions });
    } catch (error) {
        console.error(error); // Log the error
        res.status(500).json({ error: 'Error saving questions' });
    }
}

/** Delete all questions */
export async function dropQuestions(req, res) {
    try {
        await Questions.deleteMany();
        res.status(200).json({ msg: "Questions Deleted Successfully...!" });
    } catch (error) {
        console.error(error); // Log the error
        res.status(500).json({ error: 'Error deleting questions' });
    }
}

/** Get all results */
export async function getResult(req, res) {
    try {
        const r = await Results.find();
        res.status(200).json(r); // Send a 200 status code with data
    } catch (error) {
        console.error(error); // Log the error
        res.status(500).json({ error: 'Error retrieving results' });
    }
}

/** Store result */
export async function storeResult(req, res) {
    try {
        const { username, result, attempts, points, achived } = req.body;
        if (!username || !result) {
            return res.status(400).json({ error: 'Data Not Provided' }); // Return 400 for bad input
        }

        const resultData = new Results({ username, result, attempts, points, achived });
        await resultData.save();
        res.status(201).json({ msg: "Result Saved Successfully...!" });
    } catch (error) {
        console.error(error); // Log the error
        res.status(500).json({ error: 'Error saving result' });
    }
}

/** Delete all results */
export async function dropResult(req, res) {
    try {
        await Results.deleteMany();
        res.status(200).json({ msg: "Result Deleted Successfully...!" });
    } catch (error) {
        console.error(error); // Log the error
        res.status(500).json({ error: 'Error deleting results' });
    }
}
