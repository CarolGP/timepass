const horaMiddleware = (req, res, next) =>{
    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes();

    req.currentHour = hour;
    req.currentMinutes = minutes;

    next();
};

module.exports = horaMiddleware;