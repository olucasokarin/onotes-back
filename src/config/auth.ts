import dotenv from 'dotenv';

dotenv.config();
export default {
  jwt: {
    secret: process.env.APP_SECRET || 'uu',
    expiresIn: '1d',
  },
};
