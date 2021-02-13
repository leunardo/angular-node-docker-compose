const Router = require('koa-router');
const paymentRouter =  require('./modules/payments/router');

const router = Router();

router.use('/payments', paymentRouter.routes());

module.exports = router;