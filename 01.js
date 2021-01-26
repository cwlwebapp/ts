// 在ES6前，JavaScript中只能通过var关键字来声明变量，且没有块级作用域。
// 在TypeScript中，我们声明变量的时候可以使用var、let或者是const关键字。
// let 有声明作用域和赋值  const 声明常量
// number
//console.log(num,'number') //undefined 
var nuxx = 1;
var num1 = 11;
var num2 = 111;
console.log(nuxx, 'number'); //1
console.log(num1, 'number'); //11
console.log(num2, 'number'); //111
// String
var str = '1';
// boolean 
var boo = true;
// array
var arr = [1, 2, 3, 4];
var arr1 = [1, 2, 't', 4];
var arr3 = [2, 4, 6, 8];
var arr4 = [2, 4, 6, 8, "T", false];
// any类型的值
var any1; //声明变量的时候没有进行初始化操作，无法通过类型推导得出真实类型，通常总是设置为any类型
var any2 = "我现在是字符串"; //如果某个变量其类型可能会变化，建议使用any类型
any2 = false;
// 枚举类型
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["Green"] = 1] = "Green";
    color[color["Yellow"] = 2] = "Yellow";
    color[color["Blue"] = 3] = "Blue";
})(color || (color = {}));
;
var a = Color.Yellow;
console.log(a);
// function 
function fo() {
    var str1 = '我是函数字符串';
    return str1;
}
console.log(fo(), 'sting');
//void类型
//声明一个返回值为void类型（没有返回值）的函数
function fo1() {
    console.log("这是一个没有返回值的函数，返回值的类型为void");
}
fo1();
//关于null和undefined
var test1 = null;
var test2 = undefined;
// 联合类型声明变量的语法格式=> 声明变量的关键字 变量名：（类型1 | 类型2）= 值
