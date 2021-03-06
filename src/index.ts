// import World from "./world";

// const root = document.getElementById("root");
// const world = new World("Hello naotovader!");
// world.sayHello(root);

// 03.基本の型定義
// import { primitiveSample, notExistSample, anySample, unknownSample } from "./basic";

// unknownSample();
// anySample();
// notExistSample();
// primitiveSample();

// 04.関数の型定義
// import { logMessage, logMessage2, logMessage3, logMessage4 } from "./function/basic";
// import { isUserSignedIn, isUserSignedIn2, sumProductsPrice } from "./function/parameters";

// logMessage("Hello TypeScript!");
// logMessage2("Hello TypeScript!");
// logMessage3("Hello TypeScript!");
// logMessage4("Hello TypeScript!");

// isUserSignedIn("AC");
// isUserSignedIn2("ABC");
// const sum: number = sumProductsPrice(10, 20, 30);
// console.log("Function parameter sample 5:", sum);

// 05.オブジェクトの型定義
// import objectSample from "./object/object";
// import typeAliasSample from "./object/alias";
// objectSample();
// typeAliasSample();

// 06.配列とタプルの型定義
// import arraySample from "./array/array";
// import tupleSample from "./array/tuple";
// arraySample();
// tupleSample();

// 07.ジェネリック型とポリモーフィズム
// import genericsBasicSample from "./generics/basic";
// import genericsAdvancedSample from "./generics/advanced";
// genericsBasicSample();
// genericsAdvancedSample();

// 10.非同期処理
import callbackSample from "./asynchronous/callback";
import promiseSample from "./asynchronous/promise";
import asyncAwaitSample from "./asynchronous/asyncAwait";
// callbackSample();
// promiseSample();
asyncAwaitSample();
