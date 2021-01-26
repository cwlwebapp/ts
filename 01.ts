// 在ES6前，JavaScript中只能通过var关键字来声明变量，且没有块级作用域。
// 在TypeScript中，我们声明变量的时候可以使用var、let或者是const关键字。
// let 有声明作用域和赋值  const 声明常量


// number
//console.log(num,'number') //undefined 
var nuxx:number=1;

let num1:number=11;
const num2:number=111;
console.log(nuxx,'number') //1
console.log(num1,'number')//11
console.log(num2,'number')//111

// String
var str:string='1';

// boolean 
var boo:boolean=true;

// array
let arr:number[]=[1,2,3,4];
let arr1:(number|string)[]=[1,2,'t',4];

let arr3:Array<number> = [2,4,6,8];
let arr4:Array<any> = [2,4,6,8,"T",false];

// any类型的值
let any1 ;    //声明变量的时候没有进行初始化操作，无法通过类型推导得出真实类型，通常总是设置为any类型
let any2:any = "我现在是字符串";   //如果某个变量其类型可能会变化，建议使用any类型
any2 = false;

// 枚举类型
enum color {Red , Green , Yellow , Blue};
let a:color = color.Yellow;
console.log(a); 

// function 
function fo():string{
    var str1:string='我是函数字符串'
     return str1;
}
console.log(fo(),'sting')

//void类型
//声明一个返回值为void类型（没有返回值）的函数
function fo1():void{
    console.log("这是一个没有返回值的函数，返回值的类型为void");
  }
  fo1();
  
  //关于null和undefined
  let test1:null = null;
  let test2:undefined = undefined;

  
// 联合类型声明变量的语法格式=> 声明变量的关键字 变量名：（类型1 | 类型2）= 值
//文件路径: ../01-数据类型/03-联合类型.ts

let test0 :number = 1;
//报错：Type 'false' is not assignable to type 'number'.
//test0 = false;    //错误的演示

let testxx:(number | boolean) = 123;
testxx = true;
console.log(test1);

let testyy:(number[] | string) = [1,2,3];
testyy = "我是字符串";
console.log(test2);

// TypeScript中允许我们使用type关键字来给类型设置别名。类型别名这种特性可以提高代码的可阅读性，缩短代码，但需要有节制的使用。

type MyType = (string | boolean | number);
let value1:MyType = "我是字符串";
console.log(value1);
value1 = 123;
console.log(value1);
value1 = true;
console.log(value1);

// 循环结构

// TypeScript语言中的循环结构主要有：while循环、do..while循环、for..in循环以及常用的for循环，下面分别介绍并给出示例代码。
//[001] while循环结构
//说明：while语句用来在满足判断条件的情况下重复执行一段代码,代码在执行的时候会先检查判断条件是否满足，
//如果条件满足则执行循环体（更新条件变量）,否则就结束当前循环执行后面的代码，重复这个过程

let i:number = 0;
while(i < 5)
{
  i++;
  console.log(i);
}

//[002] do..while循环结构
//说明：do...while循环结构能够保证循环体至少会被执行一次,当循环体执行完后，代码会检查判断条件是否满足,
//如果满足条件则继续执行循环体，否则就结束当前循环执行后面的代码，重复这个过程
let j:number = 5;
do{
  j--;
  console.log(j);
}while(j>0);

//[003] for循环
//说明:执行for循环的时候的执行顺序为
//(1) 执行初始化语句，初始化变量n
//(2) 检查是否满足循环条件
//    A: 如果满足循环条件，那么就执行循环体,并跳转到（3）
//    B: 如果不满足循环条件，那么就结束当前循环，继续执行后面的任务
//(3) 更新循环变量，这里为n++操作
//(4) 跳转到（2）

//关于break、continue和return
//在循环体中，如果遇到break和return则表示结束循环(循环本身以及循环内后面的代码不再执行)，执行循环后面的任务
//如果遇到continue则表示结束当前循环，继续执行后面的循环任务
for(let n:number = 0 ; n < 5; n++)
{
    if(n === 3) continue;
    console.log(n);
}

//[004] for..in循环
//说明:for..in循环主要用于遍历代码中的对象
//注意：不推荐使用for..in循环来遍历数组或伪数组对象，因为它会把原型成员迭代出来。
let obj:any = {name:"zs",age:18,"des":"描述信息"};
for( let key in obj)
{
  console.log("当前循环的key: "+key+" value:"+obj[key]);
}
//文件目录 ../02-流程控制结构/02-分支结构.ts

//分支结构其实就是林中路在某个节点分叉为多条，而只能选择其中一条路继续走下去
//具体走哪条路就像是人生抉择，得出结选择论的部分被称为判断条件，是布尔类型的值（true/fasle）

//[01] if条件语句结构
//当条件满足的时候，执行{}中的代码，否则就忽略
let temp:boolean = true;
if(temp)
{
  console.log("temp的值为true")
}
//.....

//[02] if...else语句结构
//给定两条路，只能也必须走某一条
if(temp)
{
  console.log("temp的值为true")
}else{
  console.log("temp的值为false")
}


//[03] if...else if...语句结构
//给定多条路，根据条件进行选择其中的一条
let i:number = 85;
if(i >= 90)
{
  console.log("优秀")
}else if(i >= 80){
  console.log("良好")
}else if(i >= 60)
{
  console.log("及格")
}else
{
  console.log("不及格")
}

//输出结果为:良好

//[04] switch结构
//switch语句接受一个表达式，会将表达式的值和case语句进行匹配，然后执行关联的语句块。
//为提高代码的可读性，避免魔法数字等出现，常结合枚举类型组织代码结构
enum Animal{
    Dog,
    Cat,
    Pig
  }
  let animalType:any = Animal.Dog;
  switch(animalType)
  {
    case Animal.Dog:
      console.log("Dog: 汪汪汪!!!");
      break;
    case Animal.Cat:
        console.log("Cat: 喵喵喵!!!");
        break;
    case Animal.Pig:
        console.log("Pig: 呵呵呵!!!");
        break;
    default:
        console.log("其他动物...");
  }

//   从ES6开始，JavaScript将支持基于类的面向对象实现。 在TypeScript中，允许开发者现在就使用Class特性，
//   并且编译后的JavaScript可以在所有主流浏览器和平台上运行，而不需要等到下个JavaScript版本。
//文件路径 ../03-Class的使用/01-Class的典型结构.ts

//类的定义
class Person{
    age:number;       //age属性
    name:string;      //name属性
    constructor(name:string,age:number){    //调用时内部自动执行该代码段
      this.age = age;
      this.name = name;
      console.log("执行内部的构造函数.");
    }
    getInfo(){      //getInfo方法
      return "姓名：" + this.name + " 年龄：" + this.age
    }
  }
  
  //使用new来构造Greeter类的实例对象
  var p = new Person("wendingding",18);
  console.log(p);
//   上面的代码中，我们定义了一个名为Person的类，这个类拥有四个成员为：name属性、 age属性、getInfo方法和constructor构造函数。在Class的内部，我们可以通过 this来引用类中的成员。

// 当类被定义之后，我们可以使用 new来调用这个Class。 具体执行的时候，它会先调用Class中定义的构造函数执行初始化操作，并创建出一个当前类的实例对象返回。

// 下面贴出上面代码编译为JavaScript代码后的结构：
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.age = age;
        this.name = name;
        console.log("执行内部的构造函数.");
    }
    Person.prototype.getInfo = function () {
        return "姓名：" + this.name + " 年龄：" + this.age;
    };
    return Person;
}());
//使用new来构造Greeter类的实例对象
var p = new Person("wendingding", 18);
console.log(p);
// 通过观察可以发现，类其本质上是依靠闭包函数和原型对象来实现的。

// 接口（interface）
// TypeScript提供了接口机制。其实，TypeScript其核心原则之一就是能够对值所具有的结构进行类型检查,这种处理方式被称为“鸭式辨型法”。我们可以利用接口来为代码定义契约。

// 如果在设计某个函数的时候，我们希望该函数接受的参数对象（即函数的参数是一个对象）必须包含某个指定的属性，且类型固定。假设函数名为logNameAndOtherInfo，
// 传递给该函数的对象参数必须要拥有name这个属性，且类型必须为string，我们可以尝试给出如下代码

function logNameAndOtherInfo(obj:any){
    console.log("name："+obj.name);
    console.log("Other：默认的其它信息，这里不做处理");
  }
  
  let obj1:any = {name:"文顶顶",age:18};
  let obj2:any = {color:"red",age:18};
  logNameAndOtherInfo(obj1);  //name：文顶顶 //Other：默认的其它信息，这里不做处理
  logNameAndOtherInfo(obj2);  //undefined   //Other：默认的其它信息，这里不做处理

//   观察上面的代码，我们会发现logNameAndOtherInfo函数无力在展示函数参数对象内部属性和类型方面有所作为。这种场景下，接口就可以派上用场。
//文件路径 ../03-Class的使用/03-接口简单示例02.ts

interface ObjWithNameValue {
    name: string;
  }
  
  function logNameAndOtherInfo(obj:ObjWithNameValue){
    console.log("name：" + obj.name);
    console.log("Other：默认的其它信息，这里不做处理");
  }
  
  let obj3:any = {name:234,age:18};
  let obj4:any = {color:"red",age:18};
  logNameAndOtherInfo(obj1);  //name：文顶顶 //Other：默认的其它信息，这里不做处理
  logNameAndOtherInfo(obj2);  //undefined   //Other：默认的其它信息，这里不做处理


  //文件路径 ../03-Class的使用/03-接口简单示例03.ts

interface PersonInterface {
    name: string;
    getInfo();
}

//类的定义,需要遵循接口的约定
class Person implements PersonInterface{
  //报错：Property 'name' in type 'Person' is not assignable to the same property in base type 'PersonInterface'.
  //name:number;      错误的演示（类型和接口不一致）
  name:string;
  constructor(name:string){    //调用时内部自动执行该代码段
    this.name = name;
    console.log("执行内部的构造函数.");
  }
  getInfo(){      //getInfo方法
    return "姓名：" + this.name;
  }
}

//使用new来构造Greeter类的实例对象
var p = new Person("wendingding.com");