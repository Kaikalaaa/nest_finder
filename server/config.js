import SES from "aws-sdk/clients/ses.js";
import S3 from "aws-sdk/clients/s3.js";
import NodeGeocoder from "node-geocoder";
export const DATABASE = "databaseid";
// export const DATABASE = "mongodb+srv://kaikalaaa:vJFNorWxdb4COd9a@cluster0.mjpeg6x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
export const AWS_ACCESS_KEY_ID = "accesskeyid";
export const AWS_SECRET_ACCESS_KEY = "secret_access_key";
export const EMAIL_FROM ="sriharishkaikala2382@gmail.com";
export const REPLY_TO = "sriharishkaikala2382@gmail.com";

const awsConfig = {
accessKeyId: AWS_ACCESS_KEY_ID,
secretAccessKey: AWS_SECRET_ACCESS_KEY,
region: "us-east-1",

apiVersion: "2012-10-17",
};

const options = {
  provider: "google",
  apiKey: "",
  formatter: null,
};

export const AWSSES = new SES (awsConfig);
export const AWSS3 = new S3(awsConfig);
export const JWT_SECRET = "jwt_secret";
export const CLIENT_URL = "http://localhost:3000";
export const GOOGLE_GEOCODER = NodeGeocoder(options);




