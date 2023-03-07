const { env } = require('process');

const PROXY_CONFIG = [
  {
    context: [
      "/weatherforecast",
   ],
    target: 'https://localhost:7008',
    secure: false,
    headers: {
      Connection: 'Keep-Alive'
    }
  }
]

module.exports = PROXY_CONFIG;
