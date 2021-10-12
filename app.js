const express = require("express");

const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
const db = require("./config/database");
const indexRoutes = require("./routes/index");
const cors = require("cors");

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
  apis: ["./routes/api/*.js"],
};

const app = express();
app.use(indexRoutes);
app.use(cors());

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

db.authenticate()
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("error", err));

// Or you can simply use a connection uri

app.get("/", (req, res) => res.send("Welcome"));
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log("listening on 5000"));
