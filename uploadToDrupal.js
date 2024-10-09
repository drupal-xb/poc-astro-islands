import fs from "fs";
import path from "path";
import axios from "axios";
import { glob } from "glob";
import config from "./uploadToDrupal.config.mjs";
import dotenv from "dotenv";
dotenv.config();

const uploadBaseUrl = config.uploadBaseUrl;
if (!uploadBaseUrl) {
  console.error(
    "Error: uploadBaseUrl is not defined in uploadToDrupal.config.mjs"
  );
  process.exit(1);
}

const buildDir = path.resolve("./dist");

const distFiles = {};

const files = glob.sync("**/*", { cwd: buildDir, nodir: true });

files.forEach((relativeFilePath) => {
  const absoluteFilePath = path.join(buildDir, relativeFilePath);
  const content = fs.readFileSync(absoluteFilePath, "utf-8");

  const fileName = path.basename(relativeFilePath);
  distFiles[fileName] = content;
});

if (Object.keys(distFiles).length === 0) {
  console.error(
    `No files found in /dist folder, please run 'npm run build' to generate the dist files.`
  );
  process.exit(1);
}

const uploadFiles = async () => {
  try {
    const response = await axios.post(
      `${uploadBaseUrl}api/astro/upload`,
      distFiles,
      {
        headers: {
          "Content-Type": "application/json",
          "api-key": process.env.DRUPAL_API_KEY,
        },
      }
    );

    if (response.status === 200) {
      console.log("Files uploaded successfully.");
    } else {
      console.error(`Error uploading files: ${response.statusText}`);
    }
  } catch (error) {
    console.log("error", error);
    console.error("Error uploading files:", error.message);
  }
};

uploadFiles();
