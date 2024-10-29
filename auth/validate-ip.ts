import { config } from "../config/config";

export const validateIp = (req, res, next) => {
  const requestIp = req.socket.remoteAddress.substring(7);
  console.info("REMOTE IP", requestIp);
  if (!requestIp || requestIp !== config.allowedIp) {
    return res.status(401).json({
      code: 401,
      message: "Invalid request",
    });
  }

  next();
};
