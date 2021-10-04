const http = require("http");
const express = require("express");

const path = require("path");
const db = require("./config/database");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "APIS",
      description: "API Information",
      contact: {
        name: "Developer",
      },
      servers: ["http://localhost:5000"],
    },
  },
  // []
  apis: [".routes/*.js"],
};

const users = require("./routes/userRoutes");
const challenges = require("./routes/challengesRoutes");
const contests = require("./routes/contestRoutes");
const skills = require("./routes/skillsRoutes");
const kits = require("./routes/kitsRoutes");
const editorial = require("./routes/editorialRoutes");
const mockTest = require("./routes/mockTestRoutes");
const submission = require("./routes/submissionRoutes");
const comments = require("./routes/commentsRoutes");
const certificate = require("./routes/certificateRoutes");
const leaderboard = require("./routes/leaderboardRoutes");

const app = express();

app.use("/api/users", users);
app.use("/api/challenges", challenges);
app.use("/api/contests", contests);
app.use("/api/skills", skills);
app.use("/api/kits", kits);
app.use("/api/editorial", editorial);
app.use("/api/mockTest", mockTest);
app.use("/api/submission", submission);
app.use("/api/comments", comments);
app.use("/api/certificate", certificate);
app.use("/api/leaderboard", leaderboard);

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

// Routes
/**
 * @swagger
 * /customers:
 *  get:
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 */

app.get("/customers", (req, res) => {
  console.log("req");
  res.status(200).send("Customer results");
});

db.authenticate()
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("error", err));

// Or you can simply use a connection uri

app.get("/", (req, res) => res.send("index"));
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log("listening on 5000"));
