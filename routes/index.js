const app = require("express").Router();

const users = require("./api/user.routes");
const challenges = require("./api/challenges.routes");
const contests = require("./api/contest.routes");
const skills = require("./api/skills.routes");
const kits = require("./api/kits.routes");
const editorial = require("./api/editorial.routes");
const mockTest = require("./api/mock.test.routes");
const submission = require("./api/submission.routes");
const comments = require("./api/comments.routes");
const certificate = require("./api/certificate.routes");
const leaderboard = require("./api/leaderboard.routes");

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

module.exports = app;
