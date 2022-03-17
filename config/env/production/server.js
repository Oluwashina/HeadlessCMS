module.exports = ({ env }) => ({
    url: env('MY_HEROKU_URL'),
    proxy: true,
	app: {
		keys: env.array('APP_KEYS', ['74e7fce2d6c8b317', '2a6b6c545c0c0d6e'])
	}
  });
   