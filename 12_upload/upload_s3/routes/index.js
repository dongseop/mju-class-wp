var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


// 1. 아래의 AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY 는 
//    AWS의 IAM에서 새로운 사용자를 추가해서 받아야 함!
// 2. S3_BUCKET은 AWS의 S3에서 새로 생성해서 만들어야 함
// 3. S3 bucket은 CORS 설정이 필요함
// 4. IAM의 user에게는 S3를 access할 수 있는 permission을 줘야 함!

//=============================
// 환경변수 설정방법
//=============================
// for Mac
// export AWS_ACCESS_KEY_ID=AKIAI3SWZQ2T????????
// export AWS_SECRET_ACCESS_KEY=Z3d??????????V637h1aDwNMFCIQYRGgL4lpuu+I
// export S3_BUCKET=mjoverflow

// for PC
// set AWS_ACCESS_KEY_ID=AKIAI3SWZQ2T???????? 
// set AWS_SECRET_ACCESS_KEY=Z3d??????????V637h1aDwNMFCIQYRGgL4lpuu+I
// set S3_BUCKET=mjoverflow

// for HEROKU
// heroku config:set AWS_ACCESS_KEY_ID=xxx AWS_SECRET_ACCESS_KEY=yyy
// heroku config:set S3_BUCKET=mjoverflow

const aws = require('aws-sdk');
const S3_BUCKET = process.env.S3_BUCKET;
console.log(process.env.AWS_ACCESS_KEY_ID, process.env.AWS_SECRET_ACCESS_KEY);
const uuidv4 = require('uuid/v4');

router.get('/s3', function(req, res, next) {
  const s3 = new aws.S3({region: 'ap-northeast-2'});
  const filename = req.query.filename;
  const type = req.query.type;
  const uuid = uuidv4();
  const params = {
    Bucket: S3_BUCKET,
    Key: uuid + '/' + filename,
    Expires: 900,
    ContentType: type,
    ACL: 'public-read'
  };
  console.log(params);
  s3.getSignedUrl('putObject', params, function(err, data) {
    if (err) {
      console.log(err);
      return res.json({err: err});
    }
    res.json({
      signedRequest: data,
      url: `https://${S3_BUCKET}.s3.amazonaws.com/${uuid}/${filename}`
    });
  });
});


module.exports = router;
