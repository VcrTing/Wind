
var conf = require('../_conf')

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '6e47dd9813b7775e1e88a79f6a44e217'),
    },
  },
  cron: {
    enabled: env.bool('CRON_ENABLED', true),
  }
});
