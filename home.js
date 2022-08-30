import {
  environment,
  babelES6To5,
  fileBabel,
  changeFirstLetterToUpper,
  funzzyMatching,
  characterGroups,
  quantifier,
  multipleBranch,
  regularizationPractice,
  locationMatch,
  numberExpansion,
  PrototypeChain,
  promisePractice,
  asyncAwait,
  awaitTest,
  mapMap,
  isTrue,
  treeToList,
  listToTree,
  listToTree2,
  backtracking,
  backtracking2,
  breadthFirstTraversal,
  ArrayFlattening,
  ArrayFlattening2,
  instanceOf1,
  instanceOf2,
  deepClone,
  deepClone1,
  _new,
  EventEmitter,
  _Lru,
  _call,
  _apply,
  _bind,
  _trim,
  _create,
  quickSort,
  bubbleSort,
  selectSort,
  insertSort,
  uniqueArray,
  search,
  getType,
  _reduce,
  camelCase,
  setTimeoutMockSetInterval,
  setIntervalMockSetTimeout,
  generator,
  name,
  fsdf,
} from "./header";
import { voidFun, assertedFun } from "../view//ts/base.ts";
import "./homeTest.css";
// environment();
// babelES6To5(6, 63);
// fileBabel();
// changeFirstLetterToUpper();
// funzzyMatching();
// characterGroups();
// quantifier();
// multipleBranch();
// regularizationPractice();
// locationMatch();
// numberExpansion();
// PrototypeChain();
// promisePractice();
// asyncAwait();
// awaitTest();
// mapMap();
// ts
// voidFun();
// assertedFun();
// isTrue();
const tree = [
  {
    id: 1,
    name: "小米",
    children: [
      {
        id: 11,
        name: "红米",
        children: [
          {
            id: 111,
            name: "红米K50",
          },
        ],
      },
      {
        id: 12,
        name: "黑米",
        children: [
          {
            id: 121,
            name: "黑米K50",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "宁夏省",
    children: [
      {
        id: 21,
        name: "中卫市",
        children: [
          {
            id: 211,
            name: "宣和镇",
          },
          {
            id: 212,
            name: "常乐镇",
          },
        ],
      },
      {
        id: 22,
        name: "黑米",
        children: [
          {
            id: 222,
            name: "黑米K50",
          },
        ],
      },
    ],
  },
];
// treeToList(tree);

const list = [
  { pid: null, id: 1, name: "小米" },
  { pid: 1, id: 11, name: "红米" },
  { pid: 11, id: 111, name: "红米K50" },
  { pid: 11, id: 121, name: "红米Note" },
  { pid: 1, id: 12, name: "黑米" },
  { pid: 12, id: 121, name: "黑米K50" },
  { pid: null, id: 2, name: "宁夏省" },
  { pid: 2, id: 21, name: "中卫市" },
  { pid: 21, id: 211, name: "宣和镇" },
  { pid: 2, id: 22, name: "常乐镇" },
];

// listToTree(list);
// listToTree2(list);

const deepList = [
  {
    id: 1,
    name: "div",
    children: [
      {
        id: 11,
        name: "ul",
        children: [
          {
            id: 111,
            name: "li",
            children: [
              { id: 1111, name: "a", children: [{ id: 1112, name: "img" }] },
            ],
          },
          { id: 121, name: "li", children: [{ id: 1211, name: "span" }] },
          { id: 131, name: "ol" },
        ],
      },
      {
        id: 12,
        name: "p",
      },
      {
        id: 13,
        name: "button",
      },
    ],
  },
];
// backtracking(deepList);
// backtracking2(deepList);

// breadthFirstTraversal(deepList);
// ArrayFlattening();
// ArrayFlattening2();

// let Fn = function () {};
// let p1 = new Fn();
// let s2 = new String();
// console.log(instanceOf1({}, Object));
// console.log(instanceOf1(p1, Fn));
// console.log(instanceOf1(p1, Object));
// console.log(instanceOf1({}, Fn));
// console.log(instanceOf1(null, Fn));
// console.log(instanceOf1(1, Fn));
// console.log(instanceOf1(s2, String));

const target = {
  name: "小米",
  age: 25,
  eat: () => {
    console.log("小米");
  },
  hobbles: ["hand"],
  f: {
    f: {
      f: {},
    },
  },
  nameReg: /\s+/,
  birthDay: new Date(),
};
target.clone = target;
// let targetClone = deepClone(target);
let targetClone = deepClone1(target);
// console.log(targetClone);

// let Person = function (name, sex) {
//   this.name = name;
//   this.sex = sex;
// };

// Person.prototype.showInfo = function () {
//   console.log(this.name, this.sex);
// };

// let item = _new(Person, "小米", "male");
// console.log(item);

// EventEmitter();
// _Lru();
// _call();
// _apply();
// _bind();
// _trim();
// _create();

// let arr = [56, 8, 2, 487, 1, 3, 0, 778, 255, 798, 3, 0, 8];
// console.log(quickSort(arr));
// console.log(bubbleSort(arr));
// console.log(selectSort(arr));
// console.log(insertSort(arr));

// let repeatArr = [1, 1, 1, 1, 1, 1, 0, 2, 2, 0, 2, 2, 2];
/**
 * @repeateArr : 待处理数组
 * @mode : 处理方式 [可选值：'Set','indexOf','filter,'Array.form']
 */
// console.log(uniqueArray(repeatArr, "Set"));
// console.log(uniqueArray(repeatArr, "indexOf"));
// console.log(uniqueArray(repeatArr, "filter"));
// console.log(uniqueArray(repeatArr, "Array.form"));

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 20, 22];
// console.log(search(arr, 5));

// console.log(getType(null));
// console.log(getType(1));
// console.log(getType("string"));
// console.log(getType([]));

// console.log(camelCase("op tion"));
// console.log(camelCase("op - option"));
// console.log(camelCase("op.option"));

// console.log(_reduce());

// let cancel = setTimeoutMockSetInterval(() => {
//   console.log(1);
// }, 300);
// setTimeout(() => {
//   cancel();
//   console.log("一秒之后关闭定时器");
// }, 3000);

// setIntervalMockSetTimeout(() => {
//   console.log(2);
// }, 1000);

// generator();
console.log(name());
