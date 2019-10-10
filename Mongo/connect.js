const mongoose = require("mongoose");

let connect = mongoose.createConnection("mongodb://127.0.0.1:27017/runoob", {
  useNewUrlParser: true, //使用新的解析器
  useUnifiedTopology: true
});
connect.on("open", () => {
  console.log("连接成功");
});

connect.on("error", err => {
  console.log("err CallBack");
});
module.exports = connect;
