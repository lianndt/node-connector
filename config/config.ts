export const config = {
  database: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    sync: process.env.DB_SYNC,
  },
  nawaiam: {
    baseUrl: process.env.NAWAIAM_BASE_URL,
    invitationUrl: process.env.NAWAIAM_INVITATION_URL,
    clientId: process.env.NAWAIAM_CLIENT_ID,
    clientSecret: process.env.NAWAIAM_CLIENT_SECRET,
  },
  auth: {
    username: process.env.AUTH_USERNAME,
    password: process.env.AUTH_PASSWORD,
  },
  allowedIp: process.env.ALLOWED_IP,
};
