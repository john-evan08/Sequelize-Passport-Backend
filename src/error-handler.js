/* eslint-disable handle-callback-err */

module.exports = {
  handler() {
    // eslint-disable-next-line no-unused-vars
    return (err, req, res, next) => {
      // set locals, only providing error in development
      res.locals.message = err.message;
      res.locals.stack = err.stack;
      res.locals.error = req.app.get("env") === "development" ? err : {};
      res.status(err.status || 500); // err 500(Server) if not specified
      res.json(res.locals);
    };
  }
};
