require('dotenv').config();

module.exports = {
  development: {
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
  },
  test: {
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
  },
  production: {
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
  }
};
