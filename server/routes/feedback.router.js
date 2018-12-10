const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET
router.get('/', (req, res) => {
  pool.query('SELECT * from "feedback";').then((result) => {
    res.send(result.rows);
  }).catch((error) => {
    console.log('Error GET /api/feedback', error)
    res.sendStatus(500);
  });
})

// POST
router.post('/', (req, res) => {
  const newFeedback = req.body;
  const sqlText = `INSERT INTO feedback (name, brewery, style, comments) VALUES ($1, $2, $3, $4)`;
  pool.query(sqlText, [newFeedback.name, newFeedback.brewery, newFeedback.style, newFeedback.comments])
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});

module.exports = router;
