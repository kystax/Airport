const express = require('express');
const router = express.Router();
const { uploadFile } = require('./s3');
const { queryDatabase } = require('./db');

// Upload file to S3
router.post('/upload', async (req, res) => {
    try {
        const result = await uploadFile(req.body.file);
        res.status(200).json({ message: 'File uploaded successfully', result });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Query RDS
router.get('/data', async (req, res) => {
    try {
        const data = await queryDatabase('SELECT * FROM my_table');
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
