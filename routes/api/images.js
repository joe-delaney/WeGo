const express = require("express");
const router = express.Router();
const { getFileStream } = require("../../s3");

router.get('/:key', (req, res) => {
    console.log('in the route')
    const key = req.params.key
    const readStream = getFileStream(key)
    readStream.pipe(res)
})

module.exports = router;