import SES from "aws-sdk/clients/ses.js";
import S3 from "aws-sdk/clients/s3.js";
import NodeGeocoder from "node-geocoder";
export const DATABASE = "mongodb+srv://kaikalasriharish2382:vJFNorWxdb4COd9a@cluster0.tcpsnbm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// export const DATABASE = "mongodb+srv://kaikalaaa:vJFNorWxdb4COd9a@cluster0.mjpeg6x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
export const AWS_ACCESS_KEY_ID = "AKIAQZT4JRWN7LNA7WUK";
export const AWS_SECRET_ACCESS_KEY = "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";
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
  apiKey: "AIzaSyC3t_dexgWfU379zR7bcLzuNUaBkS2f-_k",
  formatter: null,
};

export const AWSSES = new SES (awsConfig);
export const AWSS3 = new S3(awsConfig);
export const JWT_SECRET = "0e441230f7e36562e5505d7f387d7768ab28a94f2d832256f7bba6f3234b9cd3";
export const CLIENT_URL = "http://localhost:3000";
export const GOOGLE_GEOCODER = NodeGeocoder(options);




