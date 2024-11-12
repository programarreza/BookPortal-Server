"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_status_codes_1 = require("http-status-codes");
const globalErrorHandler_1 = __importDefault(require("./app/middlewares/globalErrorHandler"));
const routes_1 = __importDefault(require("./app/routes"));
const app = (0, express_1.default)();
// parser
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// routes
app.use("/api", routes_1.default);
app.use(globalErrorHandler_1.default);
app.get("/", (req, res) => {
    res.send({
        message: "book portal server",
    });
});
app.use((req, res, next) => {
    res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({
        success: false,
        message: "API NOT FOUND!",
        error: {
            path: req.originalUrl,
            method: req.method,
            message: "Your request path is not found!",
        },
    });
});
exports.default = app;
