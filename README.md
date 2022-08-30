
// 简单算法

// 字符串首字母转大写
export function changeFirstLetterToUpper() {
  let arr = ["testss", "ererer", "agjlasgm", "gsfgherh"];
  let result = [];
  result = arr.map((item) => {
    let temp = item.split("");
    temp[0] = temp[0].toUpperCase();
    return temp.join("");
  });
  console.log(result);
}

// 正则表达式字符匹配攻略
//模糊匹配
export function funzzyMatching() {
  // 横向模糊匹配
  let regex = /ab{2,5}c/g; // {2,5} 连续出现至少2次最多5次
  let str = "abc abbc abbbc abbbbc abbbbbc abbbbbbc";
  console.log(str.match(regex));

  // 纵向模糊匹配
  let regex2 = /a[123]b/g; // [123]123中的任意一个
  let str2 = "a0b a1b a2b a3b a4b";
  console.log(str2.match(regex2));
}

// 字符组
export function characterGroups() {
  // 范围表示法
  let regex = /a[A-Za-z1-9]u/g; // [A-Z]A-Z范围内的满足即可
  let str = "aAu aZu aau a1u";
  console.log(str.match(regex));

  // 排除表示法
  let regex2 = /a[^ABC]u/g; // 除了ABC其他都满足
  console.log(str.match(regex2));

  /* \d就是[0-9] 
     \D就是[^0-9] 
     \w就是[0-9a-zA-Z_] 
     \W是[^0-9a-zA-Z_]
     \s是[ \t\v\n\r\f]
     \S是[^ \t\v\n\r\f] 
     .就是[^\n\r\u2028\u2029]
  */
  let regex3 = /a[0-9][^0-9][0-9a-zA-Z_][^0-9a-zA-Z_][ \t\v\n\r\f][^ \t\v\n\r\f]./g;
  let str2 = "a8f8- ** a7f8- ** a1f8- ** a8f8- ** k8f8- ** aof8- **";
  console.log(str2.match(regex3));
}

// 量词
/*
   {m,} 表示至少出现m次。
   {m} 等价于{m,m}，表示出现m次。
   ? 等价于{0,1}，
   + 等价于{1,}，表示出现至少一次。
   * 等价于{0,}，表示出现任意次
*/
export function quantifier() {
  let regex = /A\d{2,6}/g;
  let str = "123 65 A4565 A898454 A11 A222";
  console.log(str.match(regex));

  // 惰性匹配 ? 按最小量匹配
  let regex2 = /\d{2,6}?/g;
  let str2 = "1111 22 223 899 5655 5 3";
  console.log(str2.match(regex2));
}

// 多选分支
export function multipleBranch() {
  // 管道分支是惰性的
  let regex = /good|goodBye/g;
  let str = "goodBye";
  console.log(str.match(regex));
}

// 正则案例练习
export function regularizationPractice() {
  // 1.匹配16进制颜色值
  let regex = /#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})/g;
  let str = "#fff #eee #fee #ffffff #accccc";
  console.log(str.match(regex));

  // 匹配日期
  let regex2 = /[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])/g;
  let str2 = "2022-06-01";
  console.log(str2.match(regex2));

  // 匹配文件路径
  let regex3 = /[a-zA-Z]:\\([^\\:*<>|"?\r\n/]+\\)*([^\\:*<>|"?\r\n/]+)?$/;
  let str3 = "F:\\study\\javascript\\regex\\regular expression.pdf";
  console.log(regex3.test(str3));
}

// 正则位置匹配
//^（脱字符）匹配开头，在多行匹配中匹配行开头。
//$（美元符号）匹配结尾，在多行匹配中匹配行结尾。
//\b是单词边界，具体就是\w和\W之间的位置，也包括\w和^之间的位置，也包括\w和$之间的位置。
//(?=p)，其中p是一个子模式，即p前面的位置。
//(?!p)就是(?=p)的反面意思,即非p前面的位置
export function locationMatch() {
  let result = "hello".replace(/^|$/g, "REPLACE");
  console.log(result);

  let result1 = "[JS] Lesson_01.mp4".replace(/\b/g, "test");
  console.log(result1);

  let result2 = "happy".replace(/(?=p)/g, "#");
  let result3 = "happy".replace(/(?!p)/g, "$");
  console.log(result2);
  console.log(result3);

  // 不匹配任何东西
  let regex = /.^/;
  console.log(regex.test("."));

  // 千位计数法
  console.log("11225256521565".replace(/(?=(\d{3})+$)/g, ","));

  /**
   * 匹配密码
   * 密码长度6-12位，由数字、小写字符和大写字母组成，但必须至少包括2种字符。
   */
  const passwordCheck = /((?=.*[0-9])(?=.*[a-z])|(?=.*[0-9])(?=.*[A-Z])|(?=.*[a-z])(?=.*[A-Z]))^[0-9A-Za-z]{6,12}$/;
  console.log(passwordCheck.test("1111111ui"));
}

// 括号作用
/**
 * 1. 分组作用 /(\d{4})-(\d{2})-(\d{2})/ $1:分组1  $2:分组2 $3:分组3
 * 2. 分支结构
 */
export function numberExpansion() {
  // // 日期格式转换 2020-12-21 ---> 2020/12/21
  // const regex = /(\d{4})-(\d{2})-(\d{2})/;
  // console.log("Now the time is 2020-12-21".replace(regex, "$1/$2/$3"));

  // // 反引用  引用之前出现的分组
  // const regex2 = /\d{4}(-|\/|\.)\d{2}\1\d{2}/;
  // // \1，表示的引用之前的那个分组(-|\/|\.) \2和\3的概念也就理解了，即分别指代第二个和第三个分组。
  // console.log(regex2.test("2020-30-98"));

  // 括号嵌套的以左开括号为准
  const regex3 = /^((\d)(\d(\d)))\1\2\3\4$/;
  console.log(regex3.test(4564564566));
  console.log(RegExp.$1, RegExp.$2, RegExp.$3, RegExp.$4);

  // 引用不存在的分组 是字符本身
  const regex4 = /\1\2\3\4\5\6\7\8\9/;
  console.log(regex4.test("\\1\\2\\3\\4\\5\\6\\7\\8\\9"));
  console.log("\\12\\3\\4\\5\\6\\7\\8\\9".split(""));

  // 字符串trim
  console.log("     Trim test   ".replace(/^\s+|\s+$/g, ""));

  // 单词首字母转换为大写
  console.log(
    "my name is Upper".toLocaleLowerCase().replace(/(?:^|\s)\w/g, (r) => {
      return r.toLocaleUpperCase();
    })
  );

  console.log(
    "-moz-transfrom-zoom".replace(/[-_\s]+(.)?/g, (r) => {
      return r ? r.toLocaleUpperCase() : "";
    })
  );
}

// 原型和原型链
export function PrototypeChain() {
  // function Person(name) {
  //   this.name = name;
  // }
  // let person = new Person("小王");
  // console.log(person.__proto__ === Person.prototype);
  // console.log(Person.__proto__ === Function.prototype);
  // console.log(Function.prototype === Function.__proto__);
  // console.log(Function.prototype.__proto__ === Object.prototype);
  // Function.prototype.__proto__.a = "a";
  // Object.prototype.b = "b";
  // function Person() {}
  // var p = new Person();
  // console.log("p.a: " + p.a); // p.a: undefined
  // console.log("p.b: " + p.b); // p.b: b
}

// promise 使用
function promiseOne() {
  return new Promise((res, rej) => {
    console.log("one");
    setTimeout(() => {
      res("three");
      console.log("two");
    }, 2000);
    console.log("four");
  });
}

function promiseTwo() {
  return new Promise((res, rej) => {
    console.log("five");
    setTimeout(() => {
      console.log("six");
      res("seven");
    }, 5000);

    // rej("************");
    console.log("nine");
  });
}
export function promisePractice() {
  Promise.all([promiseOne(), promiseTwo()]).then(
    (res) => {
      console.log(res);
      console.log("eight");
    },
    (rej) => {
      console.log(rej);
    }
  );
}

// async await
async function request(flag) {
  if (flag) {
    return "Hello World!";
  } else {
    throw new Error("error!");
  }
}

export function asyncAwait() {
  // resolve
  request(true).then((data) => {
    console.log(data);
  });

  // reject
  request(false).then(
    (data) => {
      console.log(data);
    },
    (err) => {
      console.log(err);
    }
  );
}

function getSomeThing() {
  return "This is a good deal";
}

async function test() {
  return Promise.resolve("success");
}

export async function awaitTest() {
  try {
    const res1 = await getSomeThing();
    const res2 = await test();
    console.log(res1);
    console.log(res2);
  } catch (err) {
    console.log(err);
  }
}

// map
export function mapMap() {
  let b = [1, 2, 3, 4, 5, 6, 5, 6];
  let a = [
    { flag: true, id: 1 },
    { flag: true, id: 1 },
    { flag: true, id: 1 },
    { flag: true, id: 1 },
    { flag: true, id: 1 },
    { flag: true, id: 1 },
  ];
  // let k = a.map((v) => {
  //   v.flag = !v.flag;
  //   return v;
  // });
  // console.log(a);
  // console.log(k);
  // b.map((v) => {
  //   v = v * 2;
  //   return v;
  // });
  // console.log(b);
}

// (a==1&&a==2&&a==3)可以为true吗
export function isTrue() {
  var a = {
    i: 1,
    toString: function () {
      return a.i++;
    },
  };
  console.log(a == 1 && a == 2 && a == 3);
}

// 深度优先遍历
export function backtracking(data, nodeList = []) {
  if (data) {
    data.map((v) => {
      nodeList.push(v.name);
      if (v.children && v.children.length) {
        backtracking(v.children, nodeList);
      }
    });
  }
  return nodeList;
}

export function backtracking2(data) {
  let arr = [];
  while (data.length) {
    let item = data.shift();
    let children = item.children;
    arr.push(item.name);
    if (children) {
      for (let i = children.length - 1; i >= 0; i--) {
        data.unshift(children[i]);
      }
    }
  }
  console.log(arr);
}

// 广度优先遍历
export function breadthFirstTraversal(data) {
  let arr = [];
  while (data.length) {
    let item = data.shift();
    let children = item.children;
    arr.push(item.name);
    if (children) {
      for (let i = 0; i < children.length; i++) {
        data.push(children[i]);
      }
    }
  }
  return arr;
}

// list 转 tree
export function listToTree(data, pid = null) {
  return data.reduce((res, current) => {
    if (current["pid"] === pid) {
      current.children = listToTree(data, current["id"]);
      return res.concat(current);
    }
    return res;
  }, []);
}

export function listToTree2(data) {
  let result = [];
  const map = {};
  for (const iterator of data) {
    map[iterator["id"]] = iterator;
  }
  for (const iterator of data) {
    const key = iterator["pid"];
    if (!(key in map)) continue;
    map[key].children = (map[key].children || []).concat(iterator);
  }
  for (const v in map) {
    if (!map[v].pid) {
      result.push(map[v]);
    }
  }
  return result;
}

// tree 转 list
export function treeToList(data, pid = null, res = []) {
  data.map((item) => {
    res.push({ pid: pid, id: item.id, name: item.name });
    if (item.children && item.children.length > 0) {
      treeToList(item.children, item.id, res);
    }
  });
  return res;
}

// 数组扁平化
export function ArrayFlattening() {
  const list = [1, 2, [3, 4, 5, [6, 7, 8, 9], [11, 25, 36], 89]];
  const flat = (arr) => {
    return arr.reduce((res, item) => {
      return res.concat(Array.isArray(item) ? flat(item) : item);
    }, []);
  };
  flat(list);
}

export function ArrayFlattening2() {
  const result = [];
  const list = [1, 2, [3, 4, 5, [6, 7, 8, 9], [11, 25, 36], 89]];
  const stack = [...list];
  while (stack.length !== 0) {
    const val = stack.pop();
    if (Array.isArray(val)) {
      stack.push(...val);
    } else {
      result.unshift(val);
    }
  }

  console.log(result);
}
// instanceOf 的实现
// instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。
/**
 * @param {*} 实例对象
 * @param {*} 构造函数
 * @returns true / false
 */

export function instanceOf1(obj, func) {
  if (!(obj && ["object", "function"].includes(typeof obj))) {
    return false;
  }

  let proto = Object.getPrototypeOf(obj);

  if (proto === func.prototype) {
    return true;
  } else if (proto === null) {
    return false;
  } else {
    return instanceOf1(proto, func);
  }
}

export function instanceOf2(obj, func) {
  if (!(obj && ["object", "function"].includes(typeof obj))) {
    return false;
  }
  let proto = obj;
  while ((proto = Object.getPrototypeOf(proto))) {
    if (proto === func.prototype) {
      return true;
    }
  }
  return false;
}

// 手动实现 promise  .then() 功能
// class MyPromise {
//   constructor(exe) {
//     this.value = undefined;
//     this.status = "pending";
//     this.successQueue = [];
//     this.failQueue = [];
//     const resolve = (value) => {
//       const doResolve = () => {
//         if (this.status === "pending") {
//           this.status = "success";
//           this.value = value;

//           while (this.successQueue.length) {
//             const cb = this.successQueue.shift();

//             cb && cb(this.value);
//           }
//         }
//       };

//       setTimeout(doResolve, 0);
//     };

//     const reject = (value) => {
//       const doReject = (value) => {
//         if (this.status === "pending") {
//           this.status = "failure";
//           this.value = value;

//           while (this.failQueue.length) {
//             const cb = this.failQueue.shift();

//             cb && cb(this.value);
//           }
//         }
//       };

//       setTimeout(doReject, 0);
//     };

//     exe(resolve, reject);
//   }

//   then(success = (value) => value, failure = (value) => value) {
//     return new MyPromise((resolve, reject) => {
//       const successFun = (value) => {
//         try {
//           const result = success(value);

//           result instanceof MyPromise
//             ? result.then(resolve, reject)
//             : resolve(results);
//         } catch (err) {
//           reject(err);
//         }
//       };
//       const failureFun = (value) => {
//         try {
//           const result = failure(value);

//           result instanceof MyPromise
//             ? result.then(resolve, reject)
//             : resolve(result);
//         } catch (err) {
//           reject(err);
//         }
//       };

//       if (this.status === "pending") {
//         this.successQueue.push(successFun);
//         this.failQueue.push(failureFun);
//       } else if (this.status === "success") {
//         success(this.value);
//       } else {
//         failure(this.value);
//       }
//     });
//   }
// }

// const outPut = new MyPromise((resolve, reject) => {
//   setTimeout(resolve, 1000);
//   setTimeout(reject, 2000);
// });

// outPut
//   .then(
//     () => {
//       console.log("1_1");
//       return new MyPromise((resolve, reject) => {
//         setTimeout(resolve, 3000);
//         throw new Error("This is a person error !");
//       });
//     },
//     () => {
//       console.log("2_1");
//     }
//   )
//   .then(
//     () => {
//       console.log("2_5");
//     },
//     () => {
//       console.log("3_9");
//     }
//   );

// 深拷贝
export function deepClone(target, cache = new Map()) {
  let isObject = (obj) => typeof obj === "object" && obj !== null;

  if (isObject(target)) {
    const cacheTarget = cache.get(target);
    if (cacheTarget) {
      return cacheTarget;
    }
    let cloneTarget = Array.isArray(target) ? [] : {};
    cache.set(target, cloneTarget);
    for (const key in target) {
      if (target.hasOwnProperty(key)) {
        const value = target[key];
        cloneTarget[key] = isObject(value) ? deepClone(value, cache) : value;
      }
    }

    return cloneTarget;
  } else {
    return target;
  }
}

export function deepClone1(target, cache = new Map()) {
  if (cache.get(target)) {
    return cache.get(target);
  }

  if (target instanceof Object) {
    let temp;
    if (target instanceof Array) {
      temp = [];
    } else if (target instanceof Function) {
      temp = function () {
        return target.call(this, ...arguments);
      };
    } else if (target instanceof RegExp) {
      temp = new RegExp(target.source, target.flags);
    } else if (target instanceof Date) {
      temp = new Date(target);
    } else {
      temp = {};
    }

    cache.set(target, temp);
    console.log(target);
    for (const key in target) {
      if (target.hasOwnProperty(key)) {
        temp[key] = deepClone(target[key], cache);
      }
    }
    return temp;
  } else {
    return target;
  }
}

// 实现 new
export function _new(func, ...args) {
  let obj = Object.create(func.prototype);
  let result = func.apply(obj, args);
  return (typeof result === "object" && result !== null) ||
    typeof result === "function"
    ? result
    : obj;
}

// 实现 发布订阅(EventEmitter)
/**
 * 1. 事件监听 on
 * 2. 发布事件 emit
 * 3. 删除订阅 off
 * 4. 触发一次 once
 */
export function EventEmitter() {
  class EventEmitter {
    constructor() {
      this.events = {};
    }

    // 订阅者
    on(evt, callback, ctx) {
      if (!this.events[evt]) {
        this.events[evt] = [];
      }

      this.events[evt].push(callback);
      return this;
    }

    // 发布者
    emit(evt, ...payload) {
      const callbacks = this.events[evt];

      if (callbacks) {
        callbacks.forEach((cb) => cb.apply(this, payload));
      }

      return this;
    }

    // 取消订阅
    off(evt, callback) {
      if (typeof evt === "undefined") {
        delete this.events;
      } else if (typeof evt === "string") {
        if (typeof callback === "function") {
          this.events[evt] = this.events[evt].filter((cb) => cb !== callback);
        } else {
          delete this.events[evt];
        }
      }

      return this;
    }

    // 一次事件
    once(evt, callback, ctx) {
      const proxyCallback = (...payload) => {
        callback.apply(ctx, payload);
        this.off(evt, proxyCallback);
      };

      this.on(evt, proxyCallback, ctx);
    }
  }

  const el = new EventEmitter();

  const elCallback1 = (name, sex) => {
    console.log(name, sex, "evt1----callback1");
  };
  const elCallback2 = (name, sex) => {
    console.log(name, sex, "evt1----callback2");
  };
  const elCallback3 = (name, sex) => {
    console.log(name, sex, "evt1----callback3");
  };

  el.on("evt1", elCallback1);
  el.on("evt1", elCallback2);
  el.once("evt1", elCallback3);

  // el.emit("evt1", "王某", "male");

  // el.off("evt1", elCallback1);
  // el.emit("evt1", "王某", "male");

  //整个删除
  // el.off();
  el.emit("evt1", "王某", "male"); // error
}

// 实现lru 算法
/**
 * 缓存机制
 * 1. LRUCache(int capacity) 以正整数作为容量 capacity 初始化 LRU 缓存
 */
export function _Lru() {
  const LRUCache = function (capacity) {
    this.keys = [];
    this.cache = {};
    this.capacity = capacity;
  };

  LRUCache.prototype.get = function (key) {
    if (this.cache[key]) {
      remove(this.keys, key);
      this.keys.push(key);
      return this.cache[key];
    }

    return -1;
  };

  LRUCache.prototype.put = function (key, value) {
    if (this.cache[key]) {
      this.cache[key] = value;
      remove(this.keys, key);
      this.keys.push(key);
    } else {
      this.keys.push(key);
      this.cache[key] = value;

      if (this.keys.length > this.capacity) {
        removeCache(this.cache, this.keys, this.keys[0]);
      }
    }
  };

  function remove(arr, key) {
    if (arr.length) {
      const index = arr.indexOf(key);
      if (index > -1) {
        return arr.splice(index, 1);
      }
    }
  }

  function removeCache(cache, keys, key) {
    cache[key] = null;
    remove(keys, key);
  }

  let lruCache = new LRUCache(2);
  lruCache.put(1, 1);
  lruCache.put(2, 2);
  console.log(lruCache.get(1));
  lruCache.put(3.3);
  console.log(lruCache.get(2));
}

// 实现 call
export function _call() {
  Function.prototype.MyCall = function (ctx, ...args) {
    if (!ctx) {
      ctx = typeof window !== "undefined" ? window : global;
    } else {
      ctx = Object(ctx);
    }

    const fuName = Symbol();
    ctx[fuName] = this;
    const result = ctx[fuName](...args);
    delete ctx[fuName];

    return result;
  };

  let fn = function (name, sex) {
    console.log(this, name, sex);
  };

  fn.MyCall("", "小米", "male");
}

// apply
export function _apply() {
  Function.prototype.MyApply = function (ctx) {
    if (!ctx) {
      ctx = typeof ctx === "undefined" ? window : global;
    } else {
      ctx = Object(ctx);
    }

    // 判断是否是类数组
    function isArrayLike(o) {
      if (
        o &&
        typeof o === "object" &&
        isFinite(o.length) &&
        o.length >= 0 &&
        o.length === Math.floor(o.length) &&
        o.length < 4294967296
      ) {
        return true;
      } else {
        return false;
      }
    }

    const fuName = Symbol();
    ctx[fuName] = this;
    let args = arguments[1];
    let result;
    if (args) {
      if (!Array.isArray(args) && !isArrayLike(args)) {
        throw new Error("第二个参数不为数组并且不为类数组");
      } else {
        result = ctx[fuName](args);
      }
    } else {
      result = ctx[fuName]();
    }
    delete ctx[fuName];

    return result;
  };

  let fn = function (arg) {
    console.log(arg);
  };

  let fun = function (arg) {
    console.log(arg);
  };
  fn.MyApply("", [1, 2, 3, 4, 5]);
  fun.MyApply("", 1, 2, 3);
}

// bind
export function _bind() {
  Function.prototype.myBind = function (ctx, ...args) {
    if (typeof this !== "function") {
      throw new TypeError("调用bind必须是个函数");
    }
    const _this = this;
    let fBind = function (...secArgs) {
      return _this.call(
        this instanceof fBind ? this : Object(ctx),
        ...args,
        ...secArgs
      );
    };

    if (_this.prototype) {
      fBind.prototype = Object.create(_this.prototype);
      return fBind;
    } else {
      return fBind;
    }
  };

  let fu = function (...arg) {
    console.log(
      Array.from(arg).reduce((pre, next) => {
        return pre + next;
      })
    );
  };

  let fun = function (...arg) {
    console.log(arg);
  };
  let result = fu.myBind(fun, 1, 25, 8, 9);
  result(54, 89, 45, 6, 7);
}

// 去空格
export function _trim() {
  let str = "  xiao mi  ";
  // 首尾空格
  console.log(str.replace(/^\s*|\s*$\g/, ""));
  console.log(str.trim());

  // 全去
  console.log(str.replace(/\s/g, ""));
}

// object.create()
export function _create() {
  const create = (prop, props) => {
    if (!["function", "object"].includes(typeof prop)) {
      throw new TypeError(
        `Object prototype may only be an Object or null:${prop}`
      );
    }

    const Ctor = function () {};
    Ctor.prototype = prop;
    const obj = new Ctor();

    if (props) {
      Object.defineProperties(obj, props);
    }
    if (prop === null) {
      obj.__proto__ = null;
    }

    return obj;
  };

  const person = {
    showName() {
      console.log(this.name);
    },
  };

  const me = create(person);
  me.name = "小米";
  me.showName();

  const meNull = create(null);
  console.log(meNull);

  const props = {
    // foo会成为所创建对象的数据属性
    foo: {
      writable: true,
      configurable: true,
      value: "hello",
    },
    // bar会成为所创建对象的访问器属性
    bar: {
      configurable: false,
      get: function () {
        return 10;
      },
      set: function (value) {
        console.log("Setting `o.bar` to", value);
      },
    },
  };

  let meProps = create(Object.prototype, props);
  console.log(meProps.foo);
}

// 快排
export function quickSort(arr) {
  // const length = arr.length;  // 离谱操作
  if (arr.length <= 1) return arr;

  const middleIndex = Math.floor(arr.length / 2);
  const middleValue = arr.splice(middleIndex, 1)[0];
  let leftArr = [];
  let rightArr = [];
  let index = 0;

  while (index <= arr.length - 1) {
    const currentValue = arr[index];
    currentValue <= middleValue
      ? leftArr.push(currentValue)
      : rightArr.push(currentValue);
    index++;
  }
  return quickSort(leftArr).concat([middleValue], quickSort(rightArr));
}

// 冒泡排序
export function bubbleSort(arr) {
  if (arr.length <= 1) return arr;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      let temp;
      if (arr[j] > arr[j + 1]) {
        temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

// 选择排序  每次选出最小值进行交换
export function selectSort(arr) {
  if (arr.length <= 1) return arr;

  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    let temp;
    if (min != i) {
      temp = arr[min];
      arr[min] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
}

// 插入排序
export function insertSort(arr) {
  if (arr.length <= 1) return arr;

  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    const currentValue = arr[i];

    while (j >= 0 && arr[j] > currentValue) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = currentValue;
  }
  return arr;
}

// 数组去重
export function uniqueArray(arr, mode) {
  if (arr.length <= 1) return arr;
  let uniqueArr = [];
  if (mode === "Set") {
    uniqueArr = [...new Set(arr)];
  } else if (mode === "indexOf") {
    arr.forEach((item) => {
      if (!uniqueArr.includes(item)) {
        uniqueArr.push(item);
      }
    });
  } else if (mode === "filter") {
    uniqueArr = arr.filter((item, i) => arr.indexOf(item) === i);
  } else if (mode === "Array.form") {
    console.log(new Set(arr));
    uniqueArr = Array.from(new Set(arr));
  }
  return uniqueArr;
}

// 二分查找
export function search(arr, target) {
  if (arr.length === 1) return 0;

  let i = 0;
  let j = arr.length - 1;
  let middleIndex = 0;
  while (i <= j) {
    middleIndex = Math.floor((i + j) / 2);
    const middleValue = arr[middleIndex];

    if (target === middleValue) {
      return { index: middleIndex, value: target };
    } else if (target < middleValue) {
      j = middleIndex - 1;
    } else {
      i = middleIndex + 1;
    }
  }
  return -1;
}

// 获取 js 数据类型
export function getType(s) {
  return Object.prototype.toString.call(s);
}

// 实现 reduce
export function _reduce() {
  Array.prototype._reduce = function (callBack, initValue) {
    if (typeof callBack !== "function") {
      throw `${callBack} is not a function`;
    }

    let pre = initValue;
    let i = 0;
    const length = this.length;
    if (typeof pre === "undefined") {
      pre = this[0];
      i = 1;
    }

    while (i < length) {
      if (i in this) {
        pre = callBack(pre, this[i], this);
      }
      i++;
    }

    return pre;
  };

  let result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 20, 22]._reduce((pre, next) => {
    return pre + next;
  });

  console.log(result);
}

// 字符串转驼峰
export function camelCase(string) {
  const camelRegx = /[-_\s]+(.)?/g;

  return string.replace(camelRegx, (match, char) => {
    console.log(char);
    return char ? char.toUpperCase() : "";
  });
}

// setTimeout模拟 setInterval
export function setTimeoutMockSetInterval(func, timeout) {
  let timer = null;
  const interval = () => {
    timer = setTimeout(() => {
      func();
      interval();
    }, timeout);
  };

  interval();
  return () => clearInterval(timer);
}

// setInterval模拟 setTimeout
export function setIntervalMockSetTimeout(func, timeout) {
  let timer = null;

  timer = setInterval(() => {
    clearInterval(timer);
    func();
  }, timeout);

  return () => clearInterval(timer);
}

// 生成器函数 执行时能暂停，可从暂停处继续执行，返回一个迭代器对象
export function generator() {
  function _generator() {
    let index = 0;
    while (index > 3) {
      index++;
    }
  }

  let res = _generator();
  console.log(res);
}

export async function name(params) {
  haha().then((res) => console.log(res));
}

function haha() {
  return new Promise((res, rej) => {
    res("aahhaha");
  });
}

