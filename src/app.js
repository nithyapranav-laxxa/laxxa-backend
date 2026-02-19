const express = require("express");
const mobileRoutes = require("./mobile/mobile.auth.routes");

const app = express();

// parse JSON
app.use(express.json({ limit: "64kb" }));

// health check
app.get("/health", (_req, res) => {
    res.json({ ok: true });
});

// routes
app.use("/auth/mobile", mobileRoutes);

// global error handler
// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) => {
    const status = err.statusCode || 500;
    res.status(status).json({
        error: err.publicMessage || "Internal Server Error",
    });
});

module.exports = { app };
