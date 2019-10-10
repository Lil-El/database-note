let mongoose = require("mongoose");
let connect = require("./connect");

let UserSchema = new mongoose.Schema({
  name: String,
  age: Number
});
let UserModel = connect.model("User", UserSchema);
let ScoreSchema = new mongoose.Schema({
  uid: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  score: Number
});
let ScoreModel = connect.model("Score", ScoreSchema);
// 创建1
// UserModel.create({ name: "yxd", age: 22 }, (err, doc) => {
//   console.log(err);
//   console.log("doc:", doc);
// });
// 创建2
// UserModel.create({ name: "ywd", age: 32 }).then(
//   result => {
//     console.log(result);
//   },
//   err => {
//     console.log(err);
//   }
// );
//一个实体就是一个文档对象
// let user1 = new UserModel({
//   name: "yxd",
//   age: 10
// });
// user1.save().then(doc => {
//   console.log(doc);
//   process.exit();
// });
// console.log("pid:", process.pid);

(async function() {
  // let r = await UserModel.deleteMany({ name: "yxd" }); //deleteOne
  // await console.log(r);
  // await UserModel.create({ name: "tt" });
  // await UserModel.create({ name: "tt" });
  // await UserModel.insertMany({ name: "d" });
  // await UserModel.insertMany({ name: "d" });
  // await UserModel.updateMany({ name: "d" }, { name: "ddd" });

  // let d1 = await UserModel.find({ name: "dddd" });
  // let d2 = await UserModel.findById("5d9dae2c21b3a40120789812");
  // await UserModel.findOneAndUpdate({ name: "ddd" }, { name: "dddd" });
  // await UserModel.findOneAndRemove({ name: "dddd" });

  // 大于 gt greater than小于 lt less than 大于等于 ge greater equal 小于等于 le  less equal 不等于 ne not equal
  // console.log(await UserModel.find({ name: { $eq: "tt" } })); //eq gt lt ge le ne
  // console.log(await UserModel.find({ age: { $in: [22, 32] } }));
  // console.log(await UserModel.find({ $or: [{ age: 1 }, { name: "tt" }] }));
  // console.log(await UserModel.find({ $or: [{ age: { $gt: 0 } }, { age: { $lt: 30 } }] }) //大于0或小于30);
  // console.log(await UserModel.find({}).sort({ age: 1 }).skip(5).limit(2).exec()); // -1 , 1

  // let person = await UserModel.create({ name: "yxd", age: 22 });
  // console.log(person);
  // let score = await ScoreModel.create({ uid: person._id, score: 100 });
  // console.log("TCL: score", score);

  //populate，将ObjectId改为其引用的对象的值
  let score = await ScoreModel.findById("5d9dc154aecdd93b68a1385b").populate(
    "uid"
  );
  //let user = await User.findById(score.uid);使用populate可以省略这一句
  console.log(score);
  process.exit();
})();
