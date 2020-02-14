const Router = require('koa-router')

const router = new Router({
  perfix: '/city'
})

router.get('/list', async (ctx) => {
  ctx.body = ['北京', '天津']
})

// export default router
exports.default = router
