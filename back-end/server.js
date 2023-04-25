import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
// import { config } from "dotenv";
import { router as allPeeps } from "./src/routes/allPeeps.routes.js";
import { router as allPeepsFromUser } from "./src/routes/allPeepsFromUser.routes.js";
import { router as addPeep } from "./src/routes/addPeep.router.js";
import { router as login } from "./src/routes/login.routes.js";
import { router as register } from "./src/routes/register.routes.js";
// config({ path: `.env.${process.env.PORT}` });

const port = process.env.PORT;
const host = process.env.HOST;
const app = express();
app.use(cors());
app.use(bodyParser.json());
// Have Node serve the files for our built React app
// console.log(`Hello ${__dirname}`);
// app.use(express.static(path.resolve(__dirname, "../front-end/dist")));

// middleware
// app.use((req, res, next) => {
//   console.log(req.path, req.method);
//   next();
// });

// connection to database
const main = async () => {
  console.log(`Connecting to DB`);
  await mongoose.connect(process.env.DB_URI);
  console.log(`Connected to DB `);
};
main().catch((err) => console.log(err));

//Routes
app.use(`/add`, addPeep);
app.use(`/user`, allPeepsFromUser);
app.use(`/`, allPeeps);
app.use(`/login`, login);
app.use(`/register`, register);

// listen for requests
const server = app.listen(port, host, () => {
  const SERVERHOST = server.address().address;
  const SERVERPORT = server.address().port;
  console.log(`Listening on host ${SERVERHOST} :${SERVERPORT}`);
});
