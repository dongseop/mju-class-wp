var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/s3', function(req, res, next) {
  var s3 = new aws.S3({region: 'ap-northeast-2'});
  var filename = req.query.filename;
  var type = req.query.type;
  s3.getSignedUrl('putObject', {
    Bucket: S3_BUCKET,
    Key: filename,
    Expires: 900,
    ContentType: type,
    ACL: 'public-read'
  }, function(err, data) {
    if (err) {
      console.log(err);
      return res.json({err: err});
    }
    res.json({
      signedRequest: data,
      url: `https://${S3_BUCKET}.s3.amazonaws.com/${filename}`
    });
  });
});


module.exports = router;
