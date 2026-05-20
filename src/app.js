require("dotenv").config();

const cors = require("cors");
const express = require("express");
const morgan = require("morgan");

const contactRoutes = require("./routes/contactRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

const normalizeOrigin = (value) => value.trim().replace(/\/$/, "");

const allowedOrigins = new Set(
  [
    "http://localhost:3000",
    "https://kendeck.com",
    process.env.CLIENT_ORIGIN,
  ]
    .filter(Boolean)
    .flatMap((value) => value.split(","))
    .map(normalizeOrigin)
    .filter(Boolean)
);

const corsOptions = {
  origin(origin, callback) {
    // Allow direct tools like Postman/curl and browser calls from trusted origins.
    if (!origin) {
      return callback(null, true);
    }

    const requestOrigin = normalizeOrigin(origin);

    if (allowedOrigins.has(requestOrigin)) {
      return callback(null, true);
    }

    return callback(
      new Error(`CORS policy: Origin ${requestOrigin} is not allowed`)
    );
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan("dev"));

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/contact", contactRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use(errorHandler);

module.exports = app;
