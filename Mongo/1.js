const mongoose = require("mongoose")

let connect = mongoose.createConnection('mongocd://127.0.0.1:27017/cms',{
  useNewUrlParser:true,//使用新的解析器
  useUnifiedTopology:true
})