//TODO: url 수정
//const BASE_URL = 'http://localhost:3000';
const BASE_URL = 'https://3.37.123.52';
//const BASE_URL = 'http://localhost:8080';

//TODO: AWS S3 임시 URL ,BUCKET_NAME 배포되면 수정 해야함.
const AWS_S3_URL = process.env.NEXT_PUBLIC_AWS_S3_URL;
const S3_BUCKET_NAME = 'test/';

export { AWS_S3_URL, BASE_URL, S3_BUCKET_NAME };
