"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendResponse = (res, data) => {
    res.status(data.statusCode).json({
        status: true,
        message: data.message,
        statusCode: data.statusCode,
        token: data.token,
        data: data.data,
    });
};
exports.default = sendResponse;
