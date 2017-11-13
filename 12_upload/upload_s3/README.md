# AWS 설정방법
1. 아래의 AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY 는 AWS의 IAM에서 새로운 사용자를 추가해서 받아야 함!
2. S3_BUCKET은 AWS의 S3에서 새로 생성해서 만들어야 함
3. S3 bucket은 CORS 설정이 필요함
4. IAM의 user에게는 S3를 access할 수 있는 permission을 줘야 함!


# 환경변수 설정방법
```
// for Mac
export AWS_ACCESS_KEY_ID=AKIAI3SWZQ2T????????
export AWS_SECRET_ACCESS_KEY=Z3d??????????V637h1aDwNMFCIQYRGgL4lpuu+I
export S3_BUCKET=mjoverflow
```

```
// for PC
set AWS_ACCESS_KEY_ID=AKIAI3SWZQ2T???????? 
set AWS_SECRET_ACCESS_KEY=Z3d??????????V637h1aDwNMFCIQYRGgL4lpuu+I
set S3_BUCKET=mjoverflow
```

```
// for HEROKU
heroku config:set AWS_ACCESS_KEY_ID=xxx AWS_SECRET_ACCESS_KEY=yyy
heroku config:set S3_BUCKET=mjoverflow
```