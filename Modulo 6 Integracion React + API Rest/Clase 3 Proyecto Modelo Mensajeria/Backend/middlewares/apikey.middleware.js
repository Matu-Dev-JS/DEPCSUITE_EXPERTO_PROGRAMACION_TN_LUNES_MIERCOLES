import ENVIRONMENT from "../config/environment.config.js";

export const verifyApiKeyMiddleware = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];

    if (!apiKey || apiKey !== ENVIRONMENT.API_KEY) {
        return res.status(401).json({
            status: 401,
            ok: false,
            message: "Unauthorized: Invalid or missing API Key"
        });
    }

    next();
};
