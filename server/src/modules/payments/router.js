const Router = require('koa-router');
const routes = require('./controller');

const router = Router();

router.get('/', routes.helloWorld);
router.get('/checkout', routes.checkout);
router.post('/confirm', routes.confirmPayment);

module.exports = router;