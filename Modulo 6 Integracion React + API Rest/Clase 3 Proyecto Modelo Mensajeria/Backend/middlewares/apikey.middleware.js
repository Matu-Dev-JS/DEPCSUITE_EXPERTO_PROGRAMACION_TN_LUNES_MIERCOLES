import ENVIRONMENT from "../config/environment.config.js";

export const verifyApiKeyMiddleware = (excludedPaths = []) => {
    return (req, res, next) => {
        if (excludedPaths.includes(req.path)) {
            return next();
        }

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
};
