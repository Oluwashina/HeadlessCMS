module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6176962156048ac5ca3c8e2b4c5f2d7a'),
  },
});
