const Koa = require("koa");
const app = new Koa();
const cors = require("@koa/cors");
const views = require("koa-views");
const json = require("koa-json");
const onerror = require("koa-onerror");
const bodyparser = require("koa-bodyparser");
const logger = require("koa-logger");

const passport = require("./middleware/passport");
const pay = require("./middleware/pay");
const index = require("./routes/index");
const users = require("./routes/users");
const dailyProblem = require("./routes/dailyProblem");
const lectures = require("./routes/lectures");
const fallback = require("./routes/404");
const mockUserInfo = require("./middleware/mockUserInfo");

// error handler
onerror(app);

// middlewares
app.use(
  bodyparser({
    enableTypes: ["json", "form", "text"],
  })
);
app.use(cors({ credentials: true }));
app.use(json());
app.use(logger());
if (process.env.NODE_ENV === "development") {
  app.use(mockUserInfo);
} else {
  app.use(passport);
}
app.use(pay({ whitelist: ["/api/v1/user", "/api/v1/logout"] }));
app.use(require("koa-static")(__dirname + "/public"));

app.use(
  views(__dirname + "/views", {
    extension: "pug",
  })
);

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// routes
app.use(index.routes(), index.allowedMethods());
app.use(users.routes(), users.allowedMethods());
app.use(lectures.routes(), lectures.allowedMethods());
app.use(dailyProblem.routes(), dailyProblem.allowedMethods());
app.use(fallback.routes(), fallback.allowedMethods());
// error-handling
app.on("error", (err, ctx) => {
  console.error("server error", err, ctx);
});

module.exports = app;
