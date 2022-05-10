const express = import('express')

const { getFileStream } = import('../../s3')

const router = express.Router();

router.get('/images/:key', (req, res) => {
    const key = req.pararams.key
    const readStream = getFileStream(key)
    readStream.pipe(res)
})