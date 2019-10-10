let _id = "5d9c8817a62ce21e04dc4e57";
let ts = "5d9c8817";
console.log(parseInt(ts, "16"));
console.log(new Date(parseInt(ts, "16") * 1000));
console.log(new Date().valueOf()); //获取当前日期的时间戳 //(1570588696).toString(16)
console.log(new Date().getTime()); //获取当前日期的时间戳 去掉后三位，转16进制
let host = "a62ce2"; //表示当前主机 一般是主机名hash值

let pid = "1e04";
console.log(parseInt(pid, "16")); //7684 十进制数 代表当前的进程ID

let seq = "dc4e57";
console.log(parseInt(seq, "16")); //14437975
console.log(2 ** 24);
