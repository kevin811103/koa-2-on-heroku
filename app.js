const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();

router.get('/users/:id', function (ctx, next) {
   ctx.body = "Hello user number " + ctx.params.id;
 });

router.get('/', function (ctx, next) {
  ctx.body = "Hello world";
});

app.use(router.routes());

app.listen(process.env.PORT || 3000);
