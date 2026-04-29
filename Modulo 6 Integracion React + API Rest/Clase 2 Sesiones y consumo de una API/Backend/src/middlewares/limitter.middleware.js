import rateLimit from "express-rate-limit"

const limiterMiddleware = rateLimit(
    {
        windowMs: 1 * 60 * 1000, //Tiempo de lapso a evaluar
        max: 5,
        keyGenerator: (request) => {
            const user_id = request.user.id
            return user_id
        }
    }
)


export default limiterMiddleware