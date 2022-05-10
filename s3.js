require('dotenv').config()
const Aws = require('aws-sdk')
const fs = require('fs')
// const S3 = require('aws-sdk/clients/s3')

const bucketName = require('./config/keys').AWS_BUCKET_NAME
const region = require('./config/keys').AWS_BUCKET_REGION
const accessKey = require('./config/keys').AWS_ACCESS_KEY
const secretAccessKey = require('./config/keys').AWS_SECRET_KEY

const s3 = new Aws.S3({
    region: region,
    accessKeyId: accessKey,
    secretAccessKey: secretAccessKey
})

function getFileStream(fileKey) {
    const downloadParams = {
      Key: fileKey,
      Bucket: bucketName
    }
    return s3.getObject(downloadParams).createReadStream()
}
exports.getFileStream = getFileStream

function uploadFile(file) {
    const fileStream = fs.createReadStream(file.path)
    const uploadParams = {
        Bucket: bucketName,
        Body: fileStream,
        Key: file.filename
    }
    return s3.upload(uploadParams).promise()
}
exports.uploadFile = uploadFile