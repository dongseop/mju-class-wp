# S3를 이용한 Direct Upload

참고: 
- https://devcenter.heroku.com/articles/s3-upload-node
- http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html


1. AWS에 가입
2. Heroku의 Guide 대로 S3 Bucket을 만들고, CORS 설정
3. Amazon IAM에서 User를 한 명 만들고, S3 Full Access권한을 주고, ID/PWD 확인 
4. Local / Heroku의 Environment에 버킷 이름, ID/PWD export