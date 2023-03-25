const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js')
// const galleryItems = require('../modules/gallery.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    const sqlText = `UPDATE "gallery" SET "likes"=likes+1 WHERE id=$1`

    pool.query(sqlText, [galleryId])
        .then((response) => {
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM "gallery" ORDER BY "id";`;
    pool.query(sqlText)
        .then((result) =>{
            console.log(result.rows);
            res.send(result.rows);
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(500);
        })
}); // END GET Route

module.exports = router;