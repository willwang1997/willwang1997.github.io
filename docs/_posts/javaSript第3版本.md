---
title: JavaSript第3版本
date: 2021-12-30
author: willwang
tags: 
  - 书籍
location: hunan 
img: /messageBord.jpeg
---
完整的过了这本小红书，我不知道为什么会费了这么久时间才看完，我在图什么呢？
<!-- more -->
# JavaScript 简介
## 1.2 JavaScript 实现
JavaScript 是一种专为与网页交互而设计的脚本语言，由下列三个不同的部分组成：  
核心：ECMAScript  
文档对象模型 Document Object Model  (DOM1 级 2 级 3 级)  
浏览器对象模型 Browser Object Model   
# 在 HTML 中使用 JavaScript
## 2.1 `<script>`元素
标签的属性：  
async 表示应该立即下载的脚本。  
defer：表示脚本延迟到文档完全被解析和显示之后执行。  
src：表示包含要执行代码盾外部文件。  
type： 默认值仍为 text/javascript。  
延迟脚本：XHTML 中使用的是`<script defer = 'defer' ></ script>，`一般 html`<sript defer></ script> `最好只包含一个延迟脚本，defer 属性只适用于外部脚本文件。  
异步脚本：告诉浏览器立即下载文件， 并不保证按照指定它们的先后顺序执行， 建议异步脚本不要在加载期间修改 DOM， 异步脚本一定会在页面的 load 事件前执行。  
## 2.2 嵌入代码与外部文件
尽可能的用外部文件，可维护，可缓存。
## 2.4 `<noscript>`元素
里面的内容显示出来条件：浏览器不支持脚本，或者浏览器支持脚本却被禁用。
# 基本概念
## 3.1 语法
变量，函数名，操作符区分大小写。  
标识符：是指变量、函数、属性的名字、或者函数的参数，第一个字符必须是字母，下划线或者$符号，驼峰式命名。  
注释：单行，多行。  
严格模式："use strict"添加到代码顶部。或者函数内部。
语句：以分号结尾来判断。
## 3.2 关键字保留字

关键字：表示控制语句的开始或结束，用于执行特定操作，不能用作标识符。
## 3.3 变量
松散型，可以保存任何类型的数据，保存值的占位符，定义变量 var，省略的话会创建全局变量。
## 3.4 数据类型
基本数据类型，undefined，null，Boolean，Number，String，以及复杂数据类型—Object。  
typeof 是一个操作符不是函数。  
undefined：var 声明变量但未对其加以初始化时。  
null：表示一个空对象指针，只要意在保存对象的变量还没有真正保存对象，就应该明确地让该变量保存 null 值。

Number：  
八进制的第一位必须是零（0），十六进制：0x。  
浮点数据：3.12e7 = 3.12*10 的 7 次方，浮点数值最高精度是 17 位。  
NaN：非数值，是一种特殊的数值，有 isNaN（）函数来判断。  
数值转换：非数值转化为数值，Number（）转换字符串时复杂且不够合理，因此处理整数的时候更常用的是 parseInt（），该函数的第二个基数参数选填。parseFloat（）只解析十进制数，所以没有第二个参数。

String类型：  
字符字面量：特殊的叫做转义序列，\n 换行，\b 空格  ,\r 回车,  \’单引号（ ‘ he say \'hey.\’ ‘）。  
字符串是不可变的：也就是说，字符串一旦创建，它们的值就不能改变，要改变 某个变量保存的字符串，首先要销毁原来的字符串。  
转化为字符串：toString（）方法，但 null 和 undefined 没有这个方法，参数可选，为进制数。转型函数 String（），此时 null 转型后为字面量’null’，undefined 也是’undefined’。

Object 类型：  
   constructor:保存着用于创建当前对象的函数。对于前面的例子而言，构造函数(constructor) 就是 Object()。  
   hasOwnProperty(propertyName):用于检查给定的属性在当前对象实例中(而不是在实例的原型中)是否存在。参数名propertyName必须以字符串形式指定。  
   isPrototypeOf(object):用于检查传入的对象是否是传入对象的原型。  
   propertyIsEnumerable(propertyName):用于检查给定的属性是否能够使用 for-in 语句来枚举，参数的属性名必须以字符串形式指定。  
   toLocaleString():返回对象的字符串表示，该字符串与执行环境的地区对应。  
   toString():返回对象的字符串表示。  
   valueOf():返回对象的字符串、数值或布尔值表示。通常与 toString()方法的返回值相同。
## 3.5 操作符
包括算术操作符，位操作符，关系操作符，相等操作符。应用于对象的时候，操作符回调用对象的 valueOf 或者 toString 方法以获取到值。  
一元操作符：递增递减操作符++num，—num等，一元加和减，一元减操作符就是相当于负数。  
位操作符：按位非 ～，按位与&，按位或｜，按位异或 25 ^ 3 ,左移<<， 有符号右移>> ,无符号右移>>>。  
布尔操作符：非！，与&&，或者｜｜。  
乘性操作符：乘 *，除法 / ，求模%。  
加性操作符：+ 和 -，注意字符串与数值加减的变化。  
关系操作符：< ,>,<=,>=。  
相等操作符：==， != , 全等===，不全等!==。  
条件操作符：条件？istrue：isfalse。  
赋值操作符：=，+=，-=，一些复合赋值操作符。  
逗号操作符：var num =1,num2=3,num3 =3;
## 3.6 语句
业界推荐 if 使用代码块{ }；  
do-while 后测试循环语句，循环体中必须执行一次的场景。  
while 前测试循环语句；  
for 循环里面的三个参数可选，为空时将无线循环，因此在循环内部定义的变量也可以在外部访问到，因为 ECMAScript 中不存在块级作用域。  
for-in 语句，枚举对象的属性，是用来对实例对象的原型链中的键做遍历，须使用 hasPwnProperty（），不然会出现 null undefined 的时候报错；  
lable 语句，例子 start：for（......），start 标签可以在将来由 break 或 continue 语句引用，一般都要与 for 语句等循环语句配合使用。  
with 语句的作用是将代码的作用域设置到一个特定的对象中。 （影响性能，建议不用）  
```javascript
var a = location.hostname;
var b = location.href;
with(location) {
    var c = hostname;
    var d = href;
}
```
switch 语句如果省略 break 关键字，就会导致执行完当前 case 后，继续执行下一个 case。
## 3.7 函数
return 语句也可以不带有任何返回值，将返回 undefined 值。  
严格模式对函数有一些限制：不能把函数命名为 eval 或 arguments；不能把参数命名为 eval 或 arguments；不能出现两个命名参数同名的情况。  
在函数体内可以通过 arguments 对象来访问参数数组，例如 arguments[0]，表示拿到了第一个参数。  
arguments 对象可以与命名参数一起使用。  
arguments 对象的长度是由传入的参数个数决定的。  
所有参数传递的都是值，不可能通过引用传递参数。  
ECMAScript 函数没有签名，真正的重载是不可能做到的，重复定义一个同名函数，最后一个生效。  
# 变量 作用域和内存问题
## 4.1 基本类型和引用类型
基本类型值：简单的数据段，基本数据类型是按值访问的，引用类型：可能由多个值构成的对象，是按引用访问的。  
只能给引用类型值动态地添加属性。  
可以把 ECMAScript 函数的参数想象成局部变量，向参数传递基本类型的值时就是复制给局部变量，向参数传递引用类型时，会把地址复制给局部变量。  
参数是按值传递的，不管参数类型是基本还是引用。  
重写 obj 时，变量引用的就是一个局部对象了，局部对象会在函数执行完毕后立即被销毁
```javascript
function setName(obj) {
obj.name = "Nicholas";
obj = new Object();
obj.name = "Greg";
}
var person = new Object();
setName(person);
alert(person.name); // Nicholas
```
使用 typeof 操作符检测函数时，该操作符会返回 "function"。< Safari 5 和 < Chrome 7  typeof（正则） 返回的是 function，IE 和 Firefox 中 typeof（正则） 返回的是 object。
## 4.2 执行环境和作用域
执行环境是一个概念性东西，定义了变量或函数有权访问的其他数据。每个执行环境都有一个与之关联的**变量对象**，环境中定义的所有变量和函数都保存在这个对象中，无法访问这个对象。  
每个函数都有自己的**执行环境**，当执行流进入一个函数时，函数的环境就会被推入一个环境栈中。而在函数执行之后，栈将其环境弹出，把控制权返回给之前的执行环境。ECMAScript 程序中的执行流正是由这个方便的机制控制着。  
当代码在一个环境中执行时，会创建变量对象的一个**作用域链**。作用域链的前端，始终都是当前执行的代码所在环境的变量对象。用途是：保证对执行环境有权访问的所有变量和函数的有序访问。如果这个环境是函数，则将其**活动对象**作为变量对象，活动对象在最开始时只包含一个变量，即 arguments 对象。作用域链中的下一个变量对象来自包含（外部）环境，而再下一个变量对象则来自下一个包含环境。这样，一直延续到全局执行环境；全局执行环境的变量对象始终都是作用域链中的最后一个对象。  
    在局部作用域中定义的变量可以在局部环境中与全局变量互换使用。  
    函数参数也被当作变量来对待，因此其访问规则与执行环境中的其他变量相同。  
    作用域链加长语句：try-的 catch，和 with。  
    if 的花括号没有块级作用域。  
    for 语句创建的变量 var i 在 for 循环执行结束后，会存在于循环外部的执行环境中。  
    在严格模式下，初始化未经声明的变量会报错，非严格，将会在全局环境中。  
    查询标识符，查询过程中向上逐个查询，例如变量 color。  
## 4.3 垃圾收集
    最常用的垃圾收集方式是**标记清除**，不太常见的垃圾收集策略叫做引用计数。  
    引用计数：JavaScript 访问的 COM（Component Object Model，组件对象模型）对象依然是基于引用计数策略的，但 IE9 把 BOM 和 DOM 对象都转换成了真正的 JavaScript 对象。  
    一旦数据不再有用，最好通过将其值设置为 null 来释放其引用——这个做法叫做**解除引用**适用于大多数全局变量和全局对象的属性，让值脱离执行环境，以便回收。
# 引用类型
## 5.1object 类型
    对象是某个特定引用类型的**实例**，新对象是使用 new 操作符后跟一个构造函数来创建的。  
    对象字面量：{ }花括号定义。左边的花括号（ { ）表示对象字面量的开始，因为它出现在了表达式上下文（expression context），表达式上下文指的是能够返回一个值（表达式）。  
    点表示法访问属性，方括号表示法访问属性，避免了对象属性名字是关键字或者错误语法。person["first name"] = "Nicholas"。
## 5.2 Array 类型
new Array（）：数值，给定项数。如果传递的是其他类型的参数，则会创建包含那个值的只有一项的数组。  
    数组字面量：var value =[1,2,];或者 [, , , , ]，在 IE8 之前会显示三项和 6 个项，最后一个为 undefined。  
    设置 length 的属性长度，可以在数组末添加或者移除新项，新项会获得特殊值 undefined。  
    es5 新增 Array.isArray（）方法检测。  
    数组的 toString() 方法会返回由数组中每个值的字符串形式拼接而成的一个以逗号分隔的字符串。  
    调用数组的 toLocaleString() 方法时，数组每一项都执行 toLocaleString() 方法，可重写数组每一个项的 toLocaleString() 方法。  
     join() 方法只接收一个参数，即用作分隔符的字符串，然后返回包含所有数组项的字符串。  
    数组可以表现得就像栈一样，后进先出的数据结构，只发生在栈的顶部。push（），pop（）。  
    数组队列数据结构表现，shift（）移除数组中的第一个项并返回该项，数组长度-1。unshift（）返回添加的项数，功能是前端添加项。  
    sort() 方法是按升序排列数组的每一项，每一项 toString() 转型方法，比较的也是字符串。可以接收比较函数。
```javascript
比较函数：
function compare（value1，value2）{
//第一个参数应该位于第二个参数之前，应返回一个负数。
//如果两个参数相等则返回 0，
//如果第一个参数应该位于第二个之后则返回一个正数
//tips：return value2 - value1;这个是对项的值可以通过 valueOf 转化为数值类型才适用。
 if (value1 < value2) {
        return -1;
    } else if (value1 > value2) {
        return 1;
    } else {
        return 0;
    }
}
```
    操作方法：  
    concat() 基于当前数组中的所有项创建一个新数组，1 没有参数，只是复制当前数据返回副本、2 一个多个数组参数，则添加到数组中，3 不是数组，值会被简单的添加到结果数组末尾。  
    slice（）方法不会影响原始数组，会创建新的数组。1 一个参数，返回制定位置开始到数组末尾的所有项。2 两个参数，返回其实和结束位置之间，不包括结束位置的项。3，如果为负数，则用长度加上此负数，长度为 5 的数组 slice（-3，-2）转后为 slice(2,3);  
    splice 改变了原有数组，方法返回删除掉的数据  
    splice（）删除任意项，2 个参数，删除第一项的位置和删除的项数。  
    splice（）指定位置插入任意项，3 个参数，起始位置，0，要插入的项。  
    splice（）指定位置替换任意项且同时删除任意数量的项，3 个参数，删除第一项的位置和要删除的项数和要插入的任意数量的项。  
    位置方法：  
    indexOf() 和 lastIndexOf()，都接收两个参数，要查找的项，和查找起始位置的**索引。**函数返回的是项在数组中的位置（索引），每个值是使用**全等操作符===**,值和类型都要相等。
```javascript
var person = { name: "Nicholas" };
var people = [{ name: "Nicholas" }];
var morePeople = [person];
alert(people.indexOf(person)); //-1
alert(morePeople.indexOf(person)); //0
 /* 个人理解：person 通过对象字面量创建一个对象并且赋值给 person，指向内存的某一块，而 people 的第一个项虽然也是对象类型，但是他的值与 person 指向的对象的值不一样，相当于匿名对象（引用类型数据），所以值不相等，全等操作符返回 false。而 morePeople 变量里面第一项保存的是 person 指针所指向的对象，所以指针都是指向同一个值，所以全等返回 ture。 */
console.log(person === people[0]); //false
console.log(person === morePeople[0]);// true
```
    indexOf（4，-4）或者 lastIndexOf()；用数轴表示就明白了，方向按照函数查找为正方向。  
    迭代方法：  
    5 个方法 ，每个方法都接收两个参数，每一项运行的函数（item, index, array）和运行该函数的作用域对象-----即影响 this 的值。item 数组的项，index 该项的位置，原数组本身。  
        every() ：如果该函数对每一项都返回 true，则返回 true。  
        filter() ：返回该函数会返回 true 的项组成的数组。  
        forEach() ：这个方法没有返回值。本质上与 for 循环差不多。  
        map() ：返回每次函数调用的结果组成的数组。  
        some() ：如果该函数对任一项返回 true，则返回 true。  
        以上方法都不会修改数组中的包含的值。  
    归并方法：  
    reduce() 方法从数组的第一项开始，逐个遍历到最后。而 reduceRight() 则从数组的最后一项开始，向前遍历到第一项。  
    函数接收 4 个参数：前一个值、当前值、项的索引和数组对象，函数返回的任何值都会作为第一个参数自动传给下一项。  
    注意第一次发生迭代在数组的第二项，以及第一次迭代返回来的数作为 pre 进行下一次迭代。
```javascript
var arr = [1,2,3,4,5];
var sum = arr.reduce( function (pre,cur,index,array) {
    return pre + cur;
});
sum;//15
```
## 5.3 Date 类型
    var date = new Date（）；Date 构造函数没参数，对象自动获取当前日期和时间。  
    Date.UTC()方法,前两个参数（年和月）是必需的。  
    Data.now() 方法，调用这个方法时的日期和时间的毫秒数，在不支持它的浏览器中，使用+操作符把 Data 对象转换成字符串。var start = +new Date();  
    Date 类型的 toLocaleString() 方法会按照与浏览器设置的地区相适应的格式返回日期和时间。toString() 方法则通常返回带有时区信息的日期和时间，valueOf() 方法返回日期的毫秒表示。  
## 5.4 RegExp 类型
    var expression = / pattern / flags ;模式（pattern），可带有一或多个标志（flags）。  
    g：全局模式，i：不区分大小写模式，m：多行模式。  
    所有元字符都必须用 \ 转义：( [ { \ ^ $ | ) ? * + . ] } 。   
    RegExp 构造函数的两个参数都是**字符串**，某些情况下要对字符进行双重转义，所有元字符都必须双重转义，字符\在字符串中转义为\\   
```javascript
语法：var pattern2 = new RegExp("[bc]at", "i");
/\[bc\]at/ ===== "\\[bc\\]at"
```
    正则表达式字面量共享同一个 RegExp 实例，构造函数创建的都是一个新实例。  
    RegExp 实例有很 global，ignoreCas，source 等属性。  
    实例方法:exec（），接收一个要应用模式的字符串，返回一个匹配项信息的数组。  
    第二个是 test()，检测是否匹配。返回 true 或者 false。   
    valueOf() 方法返回正则表达式本身。  
    toLocaleString() 和 toString()返回以字面量形式创建的一样，显示其字符串表示。  
```javascript
var matches = pattern1.exec(textStr);
var istrue = pattern2.test（textStr）;
```
    构造函数属性:  
    在 调用 exec()或 test()方法时，这些属性会被自动填充。  
    RegExp.input:返回原始字符串。leftContext，lastMatch，lastParen，也可以用$` $_等短属性名代替。  
    模式的局限性：  
    不支持的特性有向后查找，交集并集，条件匹配，单行 s，无间隔 x 匹配模式，Unicode。
## 5.5 Function 类型
    函数实际上是对象，都是 Function 类型的实例，函数名是一个指向函数对象的指针。
    没有重载（同名函数覆盖），覆盖实际是同一个函数名（指针）指向了别的函数。
    解析器会率先读取函数声明（函数声明提升的过程），函数表达式则只能执行到所在行才执行。
```javascript
函数表达式
var sum  = function（）｛｝
函数声明
function sum()｛
｝
```
    函数内部有特殊的对象 arguments，this。  
    arguments 还有一个 callee 属性，是指针，指向拥有这个 arguments 对象的函数，代替函数名字，解耦函数名。
```javascript
return num * arguments.callee(num - 1);
//return num * factorial(num - 1);
```
    this 引用的是函数据以执行的环境对象。  
    caller 函数对象的属性，保存着调用当前函数的函数引用，全局作用域下是 null，函数在严格模式下面 arguments.callee 和属性 caller 都会报错。函数名字.caller。  
    函数的属性和方法：length 和 prototype 属性，prototype 属性不可以枚举，都包含两个非集继承的方法 apply（）和 call（），作用都是在特定的作用域中调用函数，改变 this 值。  
    严格模式下，未指定的 this 值是 undefined。  
    bind（）这个方法创建一个函数实例，其 this 值会被绑定到传给 bind 函数的值。
## 5.6 基本包装类型
    每当读取一个基本类型值的时候，后台会创建一个对应盾基本包装类型的对象，
```javascript
var str ='this is a string';
var str2 = str.stubstring(2);
//这句代码读取 str 盾时候 进行了如下：
var str = new String('this  is a string');创建一个某某类型的实例，类对象。
var str2 = str.stubstring(2);在实例上调用制定方法，
str = null;销毁这个实例
```
    引用类型和基本包装类型区别是对象的生存期，后者只存在于一行代码的执行瞬间，然后立即被销毁。  
    typeof 基本包装类型返回 object。  
    Object（）构造函数也会像工厂方法一样，根据传入值的类型返回相应基本包装类型的实例。  
    Boolean 类型：  
    布尔表达式中所有对象都会转化为 true。  
    基本类型和引用类型有区别，其中 typeof 会返回 boolean 和 object，而 instanceof Boolean 分别返回 false 和 true。建议不要使用 Boolean 对象。  
    Number 类型：  
    toFixed()方法按照制定的小数位返回数值的字符串表示。  
    toExponentical()返回指数表示发，  
    toPrecision（）方法一个参数，表示数值的所有数字的位数。同样不建议直接实例化 Number 类型。  
    String 类型：  
    charAt（1）方法，返回位置 1 处的字符。  
    charCodeAt(1)方法，返回位置 1 的字符编码。  
    使用方括号加数字索引访问特定字符，有版本要求。  
    concat（）和‘ +’拼接字符串。  
    slice（）、substr（）、substring（）、基于子字符串创建新的字符串，接受一或者二个参数，第一个参数指定开始位置（索引），第二个参数到哪里结束（索引不包含）。而 substr 第二个参数返回的是字符个数。传递的参数是负数的情况下，slice 将传入的负数与字符串长度相加，substr 将负的第一参数加字符串长度，负的第二个参数置为 0，substring 将所有负数转换为 0。
```javascript
string.slice(3,-4) === slice(3, length+(-4));
string.substring(3, -4) === substring(3 ,0);
string.substr(3 ,-4) === substr(3 ,0) === substr(0 , 3);
```
    字符串位置方法 indexOf（）和 lastIndexOf（），从前查找和从后查找，第二个参数可选，表示从哪个位置向前或者下向后查找。  
    trim（）方法删除字符串的前置和后缀的所有空格，返回新的字符串。string.trim()。  
    大小写转换，大写 toUpperCase（），toLocaleUpperCase（），转小写 toLowerCase（），toLocaleLowerCase（）。  

    字符串中匹配模式的方法：  
    match（）一个参数要么正则表达式，要么 RegExp 对象，返回一个数组。  
    search（）参数由字符串或者 RegExp 对象指定的一个正则表达式，返回第一个匹配项的索引，没有返回-1。  
    replace（）两个参数，第一个参数可以使 RegExp 对象或者一个字符串，第二个可以是一个字符串或者一个函数，函数的参数：模式的匹配项，模式匹配项在字符串中的位置，原始字符串。  
    split（）基于指定的分隔符分割成多个子字符串，放在一个数组中。分隔符可以是字符串，也可以是一个 RegExp 对象，可选的第二个参数，指定数组的大小。  
    比较两个字符串的方法 localeCompare（parms），字符串在**字母表**中应该排在字符串参数 parms 之前，则返回一个负数，等于返回 0，之后返回 1。  
    fromCharCode()是接收一或多个**字符编码**，然后将它们转换成一个字符串。  
    HTML方法，尽量不要使用。
## 5.7 单体内置对象
    Global 对象：  
    对象都是不存在的，不属于任何其他对象的属性和方法，最终都是它的属性和方法，所有在全局作用域中定义的属性和函数，都是 Global 对象的属性。  
    Global 对象的 encodeURI() 和 encodeURIComponent() 方法可以对 URI（Uniform ResourceIdentifiers，通用资源标识符）进行编码，以便发送给浏览器，encodeURI()不会对本身属于 URI 的特殊字符进行编码，例如冒号、正斜杠、问号和井字号。而 encodeURIComponent()则会对它发现的任何非标准字符进行编码。decodeURI() 和 decodeURIComponent()进行解码。  
    eval（）最强大的一个方法，像一个完整的 js 解析器，只接收一个参数，即要执行的 ECMAScript 字符串。通过执行代码可以引用在包含环境中定义的变量。或者参数为定义方法的字符串，外部可以执行这个方法。参数里面创建的任何变量和函数不会提升，但是在严格模式下，外部访问不到参数定义的所有。  
   eval（）方法的安全性：恶意输入，代码注入风险。
```javascript
var msg = "hello world";
eval("alert(msg)"); //"hello world"
```
    Global 对象还包含一些属性：特殊的值 undefined、NaN 以及 Infinity，和所有原生引用类型的构造函数 Object 和 Function 等。  
    但 Web 浏览器都是将这个 Global 全局对象作为 window 对象的一部分加以实现的。  
    Math 对象：  
    max（）和 min（）方法确定一组数值最大和最小数,可以接收任意多个数值参考。
```javascript
var max = Math.max(1,2,3); //3
找到数组中最大值或最小值，使用 apply（）方法。
var value = [1,2,3,4,5];
var max = Math.max.apply(Math,value);
```
    Math.ceil()执行向上舍入，Math.floor()执行向下舍入，Math.round()执行标准四舍五入舍入。  
    Math.random()方法返回大于等于 0 小于 1 的一个随机数。从某个整数范围内随机选择一个值的公式：值 = Math.floor(Math.random() * 可能值的总数 + 第一个可能的值)。  

```javascript
1 到 10 的随机整数：
首先是总数是 10，然后第一个可能的值是 1，所以在这里面的随机数
var num = Math.floor(Math.random() * 10 + 1);
计算总数和第一个可能的值的函数，接受两个参数，应该返回的最小值和最大值。
function selectFrom(lowerValue, upperValue){
    var choise = upperValue - lowerValue +1;
    return Math.floor(Math.random() * choise + lowerValue);
}
selectFrom(2 ,9);//2-9 的随机整数。
```
# 面向对象的程序设计
## 6.1 理解对象
通过 new 或者直接字面量创建一个对象。  
ECMAScript 中有两种属性：数据属性和访问器属性，数据属性包含一个数据值的位置，这个位置可以读取和写入值，有四个描述其行为的特性，  
* [[Configurable]]表示能否通过 delete 删除属性从而重新定义属性，能否修改属性的特性，或者能否把属性修改为访问器属性，默认为 true。
* [[Enumerable]]表示能否通过 for-in 循环返回属性，默认为 true。
* [[Writable]]表示能否修改属性的值。
* [[Value]]包含这个属性的数据值。  
直接在对象上定义的属性，三种特性都设置为 true，[[Value]]被设置为指定对象的值。  
要修改属性默认的特性，使用 Object.defineProperty()，三个参数：属性所在的对象、属性的名字和一个描述符对象。描述符对象的属性只能是设死了上面的四种。
```javascript
var person = {}; 
Object.defineProperty(person, "name", { 
 writable: false, // 不可以修改
 value: "Nicholas" 
}); 
alert(person.name); //"Nicholas" 
```
一旦把属性定义为不可配置的，就不能再把它变回可配置的。  
访问器属性：访问器属性不包含数据值，包含一对 getter 和 setter 函数，读取访问器属性时调用 getter，负责返回有效的值；写入访问器属性时，调用 setter，负责决定如何处理数据。此外还包含如下两个特性。
* [[Configurable]]表示能否通过 delete 删除属性从而重新定义属性，能否修改属性的特性，或者能否把属性修改为数据属性，默认为 true。
* [[Enumerable]]表示能否通过 for-in 循环返回属性，默认为 true。  
访问器属性必须使用 Object.defineProperty()来定义，不能直接定义。
```javascript
var book = {_year: 2004,edition: 1};
//定义一个新的访问器属性 year
Object.defineProperty(book, "year", {
  get: function () {
    //return 有效值 
  },
  set: function (newValue) {
  //todo
  },
});
// 改变访问器属性时触发里面的 setter
book.year = 2015;
```
以前的办法，要创建访问器属性，一般都使用两个非标准的方法：__defineGetter__()和__defineSetter__()。  
对象定义多个属性：Object.defineProperties()方法。两个对象参数，第一参数是要添加和修改其属性的对象，第二个参数中的属性要与第一个参数一一对应，添加则不要，添加数据属性则：
```javascript
｛_year:{value:2004},edition:{value:1}｝
添加访问器属性
{
 year：｛
   get:function(){}
   set:function(){}
 ｝ 
}
```
读取属性的特征：Object.getOwnPropertyDescriptor()方法，收两个参数：属性所在的对象和要读取其描述符的属性名称。可以针对任何对象---包括 DOM 和 BOM 对象
## 6.2 创建对象
工厂模式：
用函数来封装以特定接口创建对象细节，缺点：没有解决对象识别的问题。
```javascript
function creactePerson(name) {
  var o = new Object();
  o.name = name;
  //.....
  return o;
}
var person1 = creactePerson("ww");
```
构造函数模式：  
构造函数可以创建制定类型的对象，创建自定义构造函数，从而创建自定义对象和方法，作用是可以将它的实例标识为一种特定的类型。如下打印出 person1 为 Person {neam: "ww"}。  
问题缺点：每个方法都要在每个实例上重新创建一遍，因为每个实例里面的都不是同一个 Function 实例，造成不同实例上面的同名函数是不相等的。
```javascript
//例子 1
function Person(name) {
  this.name = name;
  //.....
  this.sayName = function(){
    console.log(this.name);
  }
}
var person1 = new Person("ww");
//person1 对象都有一个 constructor (构造函数)属性，指向 Person。
```
任何函数，只要通过 new 操作符来调用，那它就可以作为构造函数；而如果不通过 new 操作符来调用，那跟普通函数一样，普通调用的时候注意是包含在那个对象作用域中（this 指向问题）。  
原型模式：  
每个函数都有一个 prototype（原型）属性，是一个**指针**，指向一个**对象**，这个对象用途是**包含**可以由特定类型的所有实例**共享的属性和方法**，prototype 就是通过调用构造函数而创建的那个对象实例的**原型对象**。  
原型对象：  
函数的 prototype **属性**，指向函数的**原型对象**，默认情况下所有原型对象都会自动获得一个 constructor（构造函数）**属性**，这个属性包含一个指向 prototype 属性所在函数的指针。  

```javascript
Person.prototype.constructor === Person; // true
```

创建构造函数的实例后，实例的内部将包含一个指针（即属性__proto__）,指向构造函数的原型对象。连接存在于实例与构造函数的原型对象之间，不是构造函数之间。  

```javascript
var person2 = new Person('ww');
person1.__proto__ === Person.prototype;// true
```

原型对象的 isPrototypeOf()方法测试了 实例，为它们内部都有一个指向 Person.prototype 的指针，因此都返回了 true。

```javascript
Person.prototype.isPrototypeOf(person1)；// true
```
代码读取某个属性时，首先搜索当前对象实例本身，没有的话搜索指针指向的原型对象有没有这个属性，所以有你在实例新增的一个属性和原型同名，并且赋值为其他值，那么此时当前实例拿到的新增属性是本身的，不是原型的，同时原型的同名属性值也没被修改。  
hasOwnProperty()方法可以检测一个属性是存在于实例中。
```javascript
function Person(){};
Person.prototype.name = "Nicholas"; 
var person1 = new Person();
person1.hasOwnProperty("name")// false
```
原型与 in 操作符：  
两种方式使用 in 操作符，单独使用的时候，能够访问的给定属性都返回 true，无论是否在实例或者原型中。  
for-in 循环时返回的是所有能够通过对象访问的，可枚举的属性，无论是否在实例或者原型中。  
Object.keys()方法，获取对象所有可枚举的实例属性，对象作为参数，返回字符串数组；要得到所有实例属性，无论它是否可枚举，都可以使用 Object.getOwnPropertyNames()；以上两种方法都可以代替 for-in 循环。  
简单的原型语法：  
但是 constructor 属性不再指向构造函数 Person,而是指向 Object，本质是重写了，可以直接重设，但是可枚举的属性变为了 true（默认是 false）。
```javascript
function Person(){}
// 字面量直接定义
Person.prototype ={
  constructor：Person，
  name:'fasd',
  //....
}
```
原型的动态性：  
创建了实例代码后，修改原型也可以动态拿到最新的原型修改后的数值，原因是实例与原型之间的松散关系。  
重写整个原型对象则切断了构造函数与原型之间的联系，所以实例指针则指不到你重写后的原型对象。
```javascript
 function Person() {}
  var friend = new Person();
  // Person.prototype.name = "ww";
  Person.prototype = {
    name: "ww",
  };
  console.log(friend.name); // ww   // undefined
```
原生对象的原型，所有原生对象（Object,Array,String）等构造函数的原型上可以进行新增方法，属性，但尽量别这么做，会意外重写原生方法。  
原型模式的缺点：共享的本质导致不同实例会拿到相同的属性值。  
使用构造函数模式结合原型模式来自定义类型，是最常见的方式，**其中构造函数定义实例属性，原型定义方法和共享属性**。  
动态原型模式：  
把所有信息都封装在构造函数之中，然后在里面添加 if 判断是否要初始化原型，用"."标识符新增原型对象。  
寄生构造函数模式：  
和工厂模式代码语法差不多，创建一个函数，然后返回新创建的对象，返回的对象与函数或者函数的原型无联系。  
稳妥构造函数模式：  
稳妥对象的含义就是没有公共属性，其方法不引入 this 的对象，适合在一些安全环境中。所以就是在创建对象的实例方法不引入 this，不使用 new 操作符调用构造函数，下例子中 friend 保存的就是稳妥的对象，只有通过添加的方法访问到传入构造函数的数据。
```javascript
function Person(name){
  var o = new Object();
  o.sayName=function(){
    console.log(name)
  }
  return o;
}
var friend = Person('name')
```
## 6.3 继承
继承分为接口继承和实现继承。  
原型链：  
实现继承主要方法是原型链，思想是利用原型让一个引用类型继承另一个引用类型的属性和方法，层层递进就构成了原型链基本概念。  
本质是重写原型对象，以一个新类型的实例代替。
```javascript
 function SuperType() {
    this.property = "true";
  }
  SuperType.prototype.getSuperValue = function () {
    return this.property;
  };
  function SubType() {
    this.subValue = "asd";
  }
//Sub 继承 Super，相当于重写了 Sub 构造函数的原型对象
SubType.prototype = new SuperType();// ｛property: "true"，.....｝。
var instance = new SubType();
//instance.constructor 现在指向了 SuperType，是因为 SubType 的原型指向了另一个函数的原型 a，a 的 constructor 指向的是 a 函数本身。
```
所有函数的默认原型都是 Object 的实例。  
确定原型和实例的关系方法：instanceof 操作符，和 isPrototypeOf（）方法。  
给原型添加方法的代码一定要放在替换原型的语句（继承语句）之后。  
通过原型链实现继承时，不能使用对象字面量创建原型方法，就会重写原型链。
```javascript
//继承了 SuperType 
SubType.prototype = new SuperType(); 
//使用字面量添加新方法，会导致上一行代码无效
SubType.prototype = { 
 getSubValue : function (){ 
 }, 
};
```
原型链的问题：  
包含引用类型值的原型属性会被所有实例共享，原先的实例属性也就变成了现在的原型属性。  
在创建子类型的实例时，不能向超类型的构造函数中传递参数。  
* 借用构造函数（伪造对象或经典继承）：  

基本思想在子类型构造函数的内部调用超类型构造函数，同时可以传递参数给超类。  
通过使用 apply()和 call()方法也可以在（将来）新创建的对象上执行构造函数。
```javascript
function SuperType(name){
  this.name = name;
}
function SubType(){ 
 //继承了 SuperType 
 SuperType.call(this); 
 //传递参数
 //SuperType.call(this，'www'); 
} 
```
* 组合继承（伪经典继承）：  

最常用的继承模式，使用**原型链**实现对原型属性和方法的继承，而通过**借用构造函数**来实现对实例属性的继承。  
instanceof 和 isPrototypeOf()也能够用于识别基于组合继承创建的对象。  
* 原型式继承：  

是借助原型可以基于已有的对象创建新对象，同时还不必因此创建自定义类型。  
将传入的对象作为这个构造函数的原型，返回了这个临时类型的一个新实例，对传入的对象执行了一次浅复制。  
**Object.create()** 方法两个参数：用作新对象原型的对象，为新对象定义额外属性的对象。  
假如传入一个参数和下面的方法行为相同。
```javascript
function object(o){ 
 function F(){} 
 F.prototype = o; 
 return new F(); 
}
//会覆盖原型对象上面的同名属性
var newPerson = Object.create(person, {
    name: { value: 'ww2' }
 });
```
* 寄生式继承：  
是与原型式继承紧密相关的一种思路，即创建一个仅用于封装继承过程的函数，该函数在内部以某种方式来增强对象，最后再像真地是它做了所有工作一样返回对象。
```javascript
function createAnother(original){ 
   var clone = object(original); //通过调用函数创建一个新对象
   clone.sayHi = function(){ //以某种方式来增强这个对象
     alert("hi"); 
   }; 
   return clone; //返回这个对象
} 
```
object()函数不是必需的，任何能够返回新对象的函数都适用于此模式。  

* 寄生组合式继承：  
组合继承都会调用两次超类型构造函数：一次是在创建子类型原型的时候，另一次是在子类型构造函数内部。
```javascript
SuperType.call(this, name); //第二次调用 SuperType() 
//。。。。
SubType.prototype = new SuperType(); //第一次调用 SuperType() 
```
父类假如定义属性 name 和 colors，此时有两组 name 和 colors 属性：一组在实例上，一组在子类原型中。  

* 寄生组合式继承：  
通过借用**构造函数**来继承属性，通过**原型链的混成形式**来继承方法，本质上，就是使用**寄生式继承**来继承超类型的原型，然后再将结果指定给子类型的原型。  
基本模式如下：
```javascript
//子类型构造函数和超类型构造函数 subType，superType
function inheritPrototype(subType, superType){ 
   var prototype = object(superType.prototype); //创建对象
   prototype.constructor = subType; //增强对象,为创建的副本添加 constructor 属性，从而弥补因重写原型而失去的默认的 constructor 属性
   subType.prototype = prototype; //指定对象
} 
```
# 函数表达式
函数声明最重要的特征：**函数声明提升，**执行代码前会先读取函数声明。  
函数表达式：创建一个函数并将它赋值给变量 functionName，这种情况下创建的函数叫做**匿名函数**（拉姆达函数），function 关键字后面没有标识符。  
匿名函数把函数当成值来使用，比如函数返回函数。
## 7.1 递归
是在一个函数通过名字调用自身的情况下构成的。  
```javascript
 function factorial(num) {
  if (num < 1) {
    return 1;
  } else {
  //这样写的好处是避免赋值给别的变量时候报错，同时严格模式下 callee 会报错
    return num * arguments.callee(num - 1);
  }
}
//严格模式下创建一个名为 f（）的命名函数表达式：
var factorial = (function f(num) {
    //......
    return num * f(num - 1);
})
```
## 7.2 闭包
闭包现象：是指有权访问另一个函数作用域中的变量的**函数，**创建闭包的常见方式，就是在一个函数内部创建定义了另一个函数。  
某个函数被调用时，会创建一个执行环境，及相应的作用域链，然后，使用 arguments 和其他命名参数（形参）的值来初始化函数的**活动对象。**  
```javascript
function compare(value1, value2){ 
   if (value1 < value2){ 
    //逻辑代码 
    ｝
} 
var result = compare(5, 10); 
```
后台的每个**执行环境**都有一个表示变量的对象——变量对象。在创建 compare()函数时，会创建一个预先包含全局变量对象的作用域链，作用域链被保存在内部的[[Scope]]属性中。当调用 compare()函数时，会为函数创建一个执行环境，然后通过复制函数的[[Scope]]属性中的对象构建起执行环境的作用域链。对于中 compare()函数的执行环境而言，其作用域链中包含两个变量对象：本地活动对象和全局变量对象。  

|作用域链|    |
|:----|:----|
|1|指向全局变量对象|
|0|指向上面例子 compare（）的活动对象|

**作用域链本质**上是一个指向变量对象的指针列表，它只引用但不实际包含变量对象。  
在另一个函数 A 内部定义的 B 函数会将包含函数 A（即外部函数）的**活动对象**添加到**它的作用域链**中。  
包含函数其执行环境的作用域链会被销毁，但它的活动对象仍然会留在内存中；过度使用闭包可能导致内存占用过多。  
解除引用可以把接受闭包返回的函数的变量名置为 null。  
闭包只能取得包含函数中任何变量的最后一个值，闭包所保存的是整个变量对象，指针引用类型。例如 for 循环问题：
```javascript
function createFunctions() {
  var result = new Array(); 
   for (var i=0; i < 10; i++){
      //理想状态返回数组 1 的位置是 1，2 的位置是 2，实际返回的是一个 function。同时 i 的值都是 10。最快的做法是 var 改为 let。其二就是改为自执行函数。
     result[i] = function(){ 
       return i; 
     };
  // result[i] = function (num) {
  //   return function () {
  //     return num;
  //   };
  // }(i);
   } 
  return result; 
}
```
* 在闭包中 this 对象问题：  
this 对象是在运行时基于函数的执行环境绑定的，匿名函数的执行环境具有全局性，因此其 this 通常指向 window。  
每个函数在被调用时都会自动取得 this，和 arguments 变量，只搜索到其活动对象为止，不可能直接访问外部函数中的这两个变量，可以把外部作用域中的 this 对象**保存到一个闭包能够访问的变量里**就行。  
```javascript
var that = this;
return function(){
  return that.name;
}
//this 意外的改变
var Object={
  getName:function(){
    return this.name;
  }
};
(Object.getName = Object.getName )(); // 赋值表达式的值是函数本身，所以 this 的值不能得到维持。
```
* 内存泄漏：  
如果闭包的作用域链中保存着一个 HTML 元素，那么就意味着该元素将无法被销毁，占用的内存就永远不会被回收。  
有必要把 element 变量设置为 null，就能够解除对 DOM 对象的引用，减少其引用数，正常回收其占用的内存。  
## 7.3 模仿块级作用域
js 没有**块级作用域**概念，语句中定义的变量，实际上是在包含函数而非语句中创建的，例如 for 循环的 i 变量，它只会对后续的声明视而不见（不过，它会执行后续声明中的变量初始化）。  
匿名函数可以用来模仿块级作用域并避免这个问题。  
用作块级作用域（私有作用域）的匿名函数的语法：  
```javascript
(function(){ 
 //这里是块级作用域
})(); 
//在 for 循环外部插入了一个私有作用域。
function output(count) {
//在私有作用域中能够访问变量 count，是因为这个匿名函数是一个闭包,能够访问包含作用域中的所有变量。
  (function () {
    for (var i = 0; i < count; i++) {
      console.log(i);
    }
  })();
}
```
通过创建私有作用域，每个开发人员既可以使用自己的变量，又不必担心搞乱全局作用域，可以减少闭包占用的内存问题，因为没有指向匿名函数的引用。  
## 7.4 私有变量
私有变量包括函数的参数、局部变量和在函数内部定义的其他函数。  
我们把有权访问私有变量和私有函数的公有方法称为特权方法，第一种是在构造函数中定义特权方法。  
特权方法作为闭包有权访问在构造函数中定义的所有变量和函数。  
使用构造函数定义特权方法缺点是每个实例都会创建同样一组新方法。  

* 静态的私有变量：  
通过在私有作用域中定义私有变量或函数，同样也可以创建特权方法。
```javascript
(function(){ 
   //私有变量和私有函数
   var privateVariable = 10; 
   function privateFunction(){} 
   //构造函数，函数声明只能创建局部函数，此处用了函数表达式，同时省去 var 则初始化未经声明的 MyObject 变量，变成了一个全局变量 MyObject。
   MyObject = function(){}; 
   //公有/特权方法，原型模式，在原型上定义的，
   MyObject.prototype.publicMethod = function(){ 
   privateVariable++; 
   return privateFunction(); 
   }; 
})(); 
```
* 模块模式：  
单例创建私有变量和特权方法，单例（singleton），指的就是只有一个实例的对象。  
通过为单例添加私有变量和特权方法能够使其得到增强。  
将一个对象字面量作为函数的值返回，从本质上来讲，这个对象字面量定义的是单例的公共接口。  
如果必须创建一个对象并以某些数据对其进行初始化，同时还要公开一些能够访问这些私有数据的方法，那么就可以使用模块模式。  
以这种模式创建的每个单例都是 Object 的实例。
```
var singleton = function(){ 
 //私有变量和私有函数
 //、、、、、
//特权/公有方法和属性
   return { 
     publicProperty: true, 
     publicMethod : function(){ 
     privateVariable++; 
     return privateFunction(); 
   } 
 }; 
}(); 
```
* 增强的模块模式：  
适用于：单例必须是某种类型的实例，同时还必须添加某些属性和（或）方法对其加以增强的情况。  
# BOM
浏览器对象模型。
主要方面纳入了 HTML5 的规范中。
## 8.1 window 对象
BOM 核心对象是 window。  
全局变量不能通过 delete 操作符删除，而直接在 window 对象上的定义的属性可以。  
IE8 及更早的版本删除 window 属性语句时都会报错。  
访问未声明的变量会抛出错误，但通过查询 window 对象下的未声明的变量可以检测是否存在。  
如果页面中包含框架，则每个框架都拥有自己的 window 对象，并且保存在 frames 集合中。  
```javascript
//<frame>是属于 html 标签内
<frame src="anotherframe.htm" name="leftFrame"> 
```
使用框架的情况下浏览器中会存在多个 Global 对象。  

* 窗口位置：  
screenLeft 和 screenTop 属性（Firefox 则在 screenX 和 screenY），分别用于表示窗口相对于屏幕左边和上边的位置。  
使用 moveTo()接收的是新位置的 x 和 y 坐标值，和 moveBy()水平和垂直方向上移动的像素数方法，两个参数，将窗口移动。  

* 窗口大小：  
outerWidth 和 outerHeight 返回浏览器窗口本身的尺寸。  
innerWidth 和 innerHeight 则表示该容器中页面视图区的大小（减去边框宽度）。  
获取页面视图视图信息，标准模式：document.documentElement.clientWidth 和 document.documentElement.clientHeight。混杂模式：document.body.clientWidth 和 document.body.clientHeight。  
移动设备中，innerWidth 和 innerHeight 保存**可见视口**，IE 则是**标准模式。**  
其他移动浏览器，document.documentElement 度量的是**布局视口，** 渲染后页面的实际大小（与可见视口不同，可见视口只是整个页面中的一小部分）。  
**resizeTo()** 和 **resizeBy()** 方法可以调整浏览器窗口的大小。  

* 导航和打开窗口：  
window.open()4 个参数：要加载的 URL、窗口目标、一个特性字符串，表示新页面是否取代浏览器历史记录中当前加载页面的布尔值。  
window 对象 opener 属性保存着打开它的原始窗口对象，只在弹出窗口中的最外层 window 对象（top）中有定义。  
将 opener 属性设置为 null 就是告诉浏览器新创建的标签页不需要与打开它的标签页通信。  
如果是浏览器内置的屏蔽程序阻止的弹出窗口，那么 window.open()很可能会返回 null。  

* 间歇调用和超时调用：  
超时调用 window 对象的 setTimeout()方法，参数：要执行的代码和以毫秒表示的时间，第二个参数表示过多长时间把当前任务添加到任务队列中，方法会返回一个数值 ID，表示超时调用，唯一标识符，严格模式下函数中 this 为 undefined，否则为 window 对象。  
取消超时调用 clearTimeout()方法参数是相应的超时调用 ID。  
间歇调用的方法是 setInterval()，按照指定的时间间隔重复执行代码，直至间歇调用被取消或者页面被卸载。  
取消超时调用 clearInterval()方法参数是相应的间歇调用 ID。  
很少使用间接调用，存在间接还没走完又有间接调用。  

* 系统对话框：  
alert()、confirm()和 prompt()方法，后两者方法会返回值。  
prompt()方法接受两个参数：要显示给用户的文本提示和文本输入域的默认值。  

## 8.2 location 对象
location 对象也是 document 对象的属性，它保存着当前文档的信息，属性：hash，host，hostname，href，pathname，port，protocol，search。  
查询字符串参数可以使用对象的 search 属性，例如 b 站的搜索出来的结果是：
```javascript
location.search;
//'?spm_id_from=333.851.b_7072696d61727950616765546162.2'
// 然后再进行字符串分割拿参数
```
assign()方法可以改变浏览器的位置，但最常用的是设置 location.href 属性。  
每次修改 location 的属性（hash 除外），页面都会以新 URL 重新加载。  
replace()方法接收一个参数，不会在历史记录中生成新记录。  
reload()重新加载当前显示的页面，强制从服务器加载，则传递参数 true。  
## 8.3 navigator 对象
识别客户端浏览器的事实标准，navigator 对象却是所有支持 JavaScript 的浏览器所共有的，于检测显示网页的浏览器类型。  
navigator.plugins 数组来检测浏览器中是否安装了特定的插件。  
在 IE 中检测插件的唯一方式就是使用专有的 ActiveXObject 类型，并尝试创建一个特定插件的实例。  
```javascript
new ActiveXObject(name);
```
plugins 集合有一个名叫 refresh()的方法，用于刷新 plugins 以反映最新安装的插件。  
## 8.4 screen 对象
基本上只用来表明客户端的能力，包括浏览器窗口外部的显示器的信息，如像素宽度和高度等。  
## 8.5 history 对象
保存着用户上网的历史记录。  
go()方法可以在用户的历史记录中任意跳转，负数表示向后跳转，正数表示向前跳转，传递一个字符串参数，历史记录中不包含该字符串则不会跳到制定。  
history 对象还有一个 length 属性保存历史记录的数量，检测该值可以判断当前页面是不是用户历史记录中的第一个页面时。  
# 客户端检测
## 9.1 能力检测
人们广泛接受的客户端检测形式是能力检测,（又称特性检测），第一个概念是先检测达成目的的最常用的特性，第二个是必须测试实际要用到的特性。  
在可能的情况下，要尽量使用 typeof 进行能力检测，但 IE8 之前会出现问题。  
能力检测作为确定下一步解决方案的依据，而不是用它来判断用户使用的是什么浏览器。  
## 9.2 怪癖检测
怪癖检测的目标是识别浏览器的特殊行为，想要知道浏览器存在什么缺陷。
## 9.3 用户代理检测
通过检测用户代理字符串来确定实际使用的浏览器。  
用户代理字符串是作为响应首部发送的，通过 navigator.userAgent 属性访问。  
在确定平台时，检测 navigator.platform 要比检测用户代理字符串更简单。  
ps：9.3.3 小节有完整代码的用户代理检测
# DOM
## 10.1 节点层次
DOM 可以将任何 HTML 或 XML 文档描绘成一个由**多层节点构成**的结构。  
`<html>`元素称之为**文档元素，** 是最外层元素，每个文档唯一，在 XML 中，任何元素都可能成为文档元素。  

* Node 类型：  
DOM1 级定义了一个 Node 接口，所有节点类型都继承自 Node 类型。  
每个节点都有一个 nodeType 属性，最好还是将 nodeType 属性与数字值进行比较，以及还有 nodeName 保存的始终都是元素的标签名，nodeValue 属性值则始终为 null。  
每个节点都有一个 childNodes 属性，其中保存着一个 NodeList 类数组对象，是基于 DOM 动态的查询结果。  
每个节点的 parentNode 属性，该属性指向文档树中的父节点。  
每个节点的 previousSibling 和 nextSibling 属性指向上一个或者下一个节点。  
父节点的 firstChild 和 lastChild 属性指向其 childNodes 列表中的第一个和最后一个节点。  
最后一个属性是 ownerDocument，该属性指向表示整个文档的文档节点。  
以下必须是在某个父节点下的 childNodes 下使用方法，不然会报错。而且同时要注意有 text 节点占用了一个数组项：  
**appendChild()** ，向 childNodes 列表的末尾添加一个节点，如果传入到 appendChild()中的节点已经是文档的一部分，该节点从原来的位置转移到新位置（位移）。  
**insertBefore()，** 两个参数：要插入的节点和作为参照的节点，同时被方法返回，第二个参数是 null 则为添加含义。  
**replaceChild()** 两个参数是：要插入的节点和要替换的节点，文档所有，但是没有位置。  
**removeChild()** 方法，受一个参数，即要移除的节点，文档所有，但是没有位置。  
所有类型的节点都有的**cloneNode()** ，接受一个布尔值参数，参数为 true 执行深复制，复制节点及其整个子节点树，false 执行浅复制，即只复制节点本身，IE 存在一个 bug，即它会复制事件处理程序。  
所有类型的节点都有的 **normalize()** 处理文档树中的文本节点。  

* Document 类型：  
Document 类型表示文档，document 对象是 HTMLDocument（继承自 Document 类型）的一个实例，表示整个 HTML 页面，document 对象是 window 对象的一个属性。  
document.documentElement 属性指向 HTML 页面中的`<html>`元素，body 属性，直接指向`<body>`元素。  
document.doctype 取得对<!DOCTYPE>的引用，属性 title 取得当前页面的标题，URL 属性  
中包含页面完整的 URL，domain 属性中只包含页面的域名，referrer 属性表示链接到当前页面的那个页面的 URL。  
只有 domain 是可以设置的，设置为新的域名后之后，就不能再将其设置回。  
取得元素的操作 getElementById()和 getElementsByTagName()。  
**getElementById()** 一个参数 id，返回的是**元素的引用**，IE8 及较低版本不区分 ID 的大小写，IE7 及较低版本“怪癖”：返回个表单元素的 name 特性等于指定的 ID。  
**getElementsByTagName()** 一个参数，标签名字，返回的是元素的 NodeList，会返回一个 **HTMLCollection 对象**，此对象有一个 nameItem（）方法通过 name 特性取得集合中的项，或者按名称访问，对命名的项也可以使用方括号语法来访问。  
**getElementsByName()** 常用于取得单选按钮。  
document 特殊的集合（anchors，applets 等），都是 HTMLCollection 对象,通过属性访问。  
hasFeature()方法，两个参数：要检测的 DOM 功能的名称及版本号。浏览器支持给定名称和版本的功能，则该方法返回 true。  
```javascript
document.implementation.hasFeature("XML", "1.0");
```
**write()** 和 **writeln()** 方法都接受一个字符串参数，即要写入到输出流中的文本，页面加载的过程中可以动态的通过这两个方法加入内容。  

* Element 类型：  
用于表现 XML 或 HTML 元素，了对元素标签名、子节点及特性的访问。  
所有 HTML 元素都由 HTMLElement 类型表示，直接通过这个类型，或者它的子类型来表示，添加的属性分别对应于每个元素存在的标准特性：id，title，lang，dir，className。  
每个元素都有一或多个特性，getAttribute()、setAttribute()和 removeAttribute()，三个方法可以针对任何特性使用。  
getAttribute()方法也可以取得自定义特性，优先在这样的情况下用。  
两类特殊的特性，属性的值与通过 getAttribute()返回的值并不相同。style 返回的 style 特性值中包含的是 CSS 文本，属性访问返回一个对象。onclick 这样的事件处理程序，通过 getAttribute()访问，则会返回相应代码的字符串，属性时，则会返回一个 JavaScript 函数。  
setAttribute()两个参数：设置的特性名和值，推荐通过属性来设置特性（点字符），添加一个自定义的属性，该属性不会自动成为元素的特性。  
IE6 及以前版本不支持 removeAttribute()。  
Element 类型是使用 attributes 属性的唯一一个 DOM 节点类型，属性中包含一个 NamedNodeMap，也是一个“动态”的集合。有下列的四种方法：  
```plain
getNamedItem(name)：
removeNamedItem(name)：
setNamedItem(node)：
item(pos)。
```
如果想要遍历元素的特性，attributes 属性倒是可以派上用场。  
用 document.createElement()方法可以创建新元素，一个标签名参数，也为新元素设置了 ownerDocuemnt 属性，但是新元素尚未被添加到文档树中，一旦将元素添加到文档树中，浏览器就会立即呈现该元素，作的任何修改都会实时反映在浏览器中。  
有事可以通过在 createElement()中指定完整的 HTML 标签来解决一些表单问题。  

* Text 类型：  
通过 nodeValue 属性或 data 属性访问 Text 节点中包含的文本。  
length 属性，保存着节点中字符的数目。  
使用 document.createTextNode()创建新文本节点，一个参数，要插入节点中的文本。  
两个文本节点是相邻的同胞节点，那么这两个节点中的文本就会连起来显示，中间不会有空格。  
splitText()方法，将一个文本节点分成两个文本节点，按照指定的位置分割 nodeValue 值。方法会返回一个新文本节点。  

* Comment 类型：  
注释在 DOM 中是通过 Comment 类型来表示的。  

* CDATASection 类型：  
只针对基于 XML 的文档，表示的是 CDATA 区域。  

* DocumentType 类型：  
包含着与文档的 doctype 有关的所有信息，DocumentType 对象不能动态创建，只能通过解析文档代码的方式来创建。  
只有 name 属性是有用，保存的是文档类型的名称，document.doctype.name。  

* DocumentFragment 类型：  
文档片段是一种“轻量级”的文档，可以包含和控制节点，作为一个“仓库”来使用，可以在里面保存将来可能会添加到文档中的节点。  
```javascript
//可以通过 appendChild()或 insertBefore()将文档片段中内容添加到文档中，文档片段本身永远不会成为文档树的一部分。解决：浏览器反复渲染问题。
document.createDocumentFragment()；
```
* Attr 类型：  
元素的特性在 DOM 中以 Attr 类型来表示，特性就是存在于元素的 attributes 属性中的节点。  
（ps：很少直接引用特性节点）  
Attr 对象有 3 个属性：name、value 和 specified，specified 是一个布尔值，用以区别特性是在代码中指定的，还是默认的。  
## 10.2 DOM 操作技术
创建动态脚本也有两种方式：插入外部文件和直接插入 JavaScript 代码。  
DOM 代码反映：
```javascript
var script = document.createElement('script');
script.type = 'text/javascript';
document.body.appendChild(script);
```

在 IE 中以使用`<script>`元素的 text 属性来指定 JavaScript 代码不会报错。  
动态样式是指在页面刚加载时不存在的样式；是在页面加载完成后动态添加到页面中的。  
**try-catch**语句来捕获 IE 抛出的动态加载样式的错误。  
HTML DOM 还为`<table>`、`<tbody>`和`<tr>`元素添加了一些属性和方法（需要网搜）。  
NodeList 及其“近亲”NamedNodeMap 和 HTMLCollection，三个集合都是“动态的”，每当文档结构发生变化时，它们都会得到更新，始终都会保存着最新、最准确的信息。  
访问 NodeList 会导致无限循环的问题（循环遍历插入 div，解决办法是保存循环开始的快照）  
每次访问 NodeList 对象，都会运行一次查询，最好的办法就是尽量减少 DOM 操作。  
# DOM 扩展
## 11.1 选择符 API
对 DOM 的两个主要的扩展是 Selectors API（选择符 API）和 HTML5。  

* 选择符 API：  
W3C 发起制定的一个标准，致力于让浏览器原生支持 CSS 查询。  
**querySelector()方法** 接收一个 CSS 选择符，返回与该模式匹配的第一个元素，通过 Element 类型调用 querySelector()方法时，只会在该元素后代元素的范围内查找匹配的元素。  
**querySelectorAll()方法** 参数一个 CSS 选择符，返回的是所有匹配，实际上是带有所有属性和方法的 NodeList，类似于一组元素的快照。  
**matchesSelector()方法** 一个 CSS 选择符，调用元素与该选择符匹配，返回 true；否则，返回 false。  
## 11.2 元素遍历
元素间的空格，在大部分浏览器都会返回文本节点。  
Element Traversal API 为 DOM 元素添加了以下 5 个属性。  
childElementCount：返回子元素（不包括文本节点和注释）的个数。  
firstElementChild：指向第一个子元素；firstChild 的元素版。  
lastElementChild：指向最后一个子元素；lastChild 的元素版。  
previousElementSibling：指向前一个同辈元素；previousSibling 的元素版。  
nextElementSibling：指向后一个同辈元素；nextSibling 的元素版。  
## 11.2 HTML5
**getElementsByClassName()** 方法接收一个参数，返回带有指定类的所有元素的 NodeList。  
HTML5 新增了一种操作类名的方式，元素都添加 classList 属性，是新集合类型 DOMTokenList 的实例，该属性的其中一个方法：  
**toggle(value)** ：如果列表中已经存在给定的值，删除它；如果列表中没有给定的值，添加它。  
```javascript
div.classList.toggle("user"); 
```
焦点的功能，首先就是 document.activeElement 属性始终会引用 DOM 中当前获得了焦点的元素。  
元素获得焦点的方式有页面加载、用户输入和在代码中调用 focus()方法。  
默认情况下，文档刚刚加载完成时，document.activeElement 中保存的是 document.body 元素的引用。文档加载期间，值为 null。  
新增了 document.**hasFocus()** 方法，这个方法用于确定文档是否获得了焦点，可以知道用户是不是正在与页面交互。  
document 对象引入了 **readyState**属性，有两个值，loading，正在加载文档；complete，已经加载完文档。  
document 添加了一个名为**compatMode**的属性，表示哪种渲染模式。  
document.**head** 属性，引用文档的`<head>`元素。  
document 的 charset 属性表示文档中实际使用的字符集。  
document 的 defaultCharset 属性，表示根据默认浏览器及操作系统的设置，当前文档默认的字符集应该是什么。  
HTML5 规定可以为元素添加非标准的属性，但要添加前缀 data-。通过元素的 **dataset** 属性来访问自定义属性的值。  
在读模式下，**innerHTML** 属性返回与调用元素的所有子节点对应的 HTML 标记。在写模式下，根据指定的值创建新的 DOM 树，完全替换调用元素原先的所有子节点。  
通过 innerHTML 插入`<script>`元素并不会执行其中的脚本。`<script>`元素被认为是“无作用域的元素”，也就是在页面中看不到的元素，与`<style>`元素或注释类似。插入的字符串开头就是一个“无作用域的元素”，那么 IE 会在解析这个字符串前先删除该元素。  
```javascript
div.innerHTML = "<script defer>alert('hi');<\/script>"; //无效
```
在读模式下，**outerHTML**返回调用它的元素及所有子节点的 HTML 标签。在写模式下，会根据指定的 HTML 字符串创建新的 DOM 子树，然后用这个 DOM 子树完全替换调用元素。  
**insertAdjacentHTML()** 方法，两个参数：插入位置和要插入的 HTML 文本，第一个参数包括："beforebegin"；"afterbegin"；"beforeend"；"afterend"。  
以上三种替换子节点可能会导致浏览器的内存占用问题，最好先手工删除要被替换的元素的所有事件处理程序和 JavaScript 对象属性。  
**scrollIntoView()** 可以在所有 HTML 元素上调用，通过滚动浏览器窗口或某个容器元素，调用元素就可以出现在视口中。  
```javascript
//让元素可见
document.forms[0].scrollIntoView(); 
```
## 11.4 专有扩展
IE8 引入了一个新的概念叫“文档模式”，页面的文档模式决定了可以使用什么功能，到了 IE9，总共有以下 4 种文档模式，IE5，IE7，IE8，IE9。  
要强制浏览器以某种模式渲染页面，可以使用 HTTP 头部信息 X-UA-Compatible，或通过等价的`<meta>`标签来设置：
```javascript
<meta http-equiv="X-UA-Compatible" content="IE=IEVersion">
```
通过 document.documentMode 属性可以知道给定页面使用的是什么文档模式。  
专有的 children 属性，是 HTMLCollection 的实例，只包含元素中同样还是元素的子节点。  
需要知道某个节点是不是另一个节点的后代 **contains()** 方法，方法接受一个参数，即要检测的后代节点，DOM Level 3 **compareDocumentPosition()** 也能够确定节点间的关系。  
**innerText**属性性可以操作元素中包含的所有文本内容，包括子文档树中的文本，设置 innerText 属性移除了先前存在的所有子节点，完全改变了 DOM 子树（Firefox 类似的 textContent 属性）。  
可以通过 innerText 属性过滤掉 HTML 标签，将 innerText 设置为等于 innerText。  
**outerText 属性**作用范围扩大到了包含调用它的节点，此属性并不常用。  
# DOM2 和 DOM3
## 12.1 DOM 变化
* 针对 XML 命名空间的变化：  
HTML 不支持 XML 命名空间，但 XHTML 支持 XML 命名空间。  
DocumentType 类型新增了 3 个属性：publicId、systemId 和 internalSubset。  
importNode()方法两个参数要复制的节点和一个表示是否复制子节点的布尔值，返回原来节点的副本，在 HTML 文档中并不常用。  
defaultView 的属性，其中保存着一个指针，指向拥有给定文档的窗口（或框架）。  
Node 类型中添加了 **isSupported(**特性名，特性版本号**)** 方法，确定当前节点具有什么能力。  
DOM3 级两个辅助比较节点的方法：**isSameNode()** 和**isEqualNode()**。  
DOM3 级添加额外数据引入了新方法，setUserData()，getUserData()方法。  
## 12.2 样式
行内样式对象 style：对于使用短划线（分隔不同的词汇，例如 background-image）的 CSS 属性名，必须将其转换成驼峰大小写形式，才能通过 JavaScript 来访问。  
一个不能直接转换的 CSS 属性就是 **float**---cssFloat，ie----是 styleFloat。  
为 style 对象定义了一些属性和方法：  
cssText：能够访问到 style 特性中的 CSS 代码，  
parentRule：表示 CSS 信息的 CSSRule 对象。  
item(index)：返回给定位置的 CSS 属性的名称。  
getPropertyValue()方法可以属性名进一步取得属性的值。  
```javascript
 myDiv.style.getPropertyValue(prop); 
```
removeProperty()方法，表示移除某个 CSS 属性。  
document.defaultView.getComputedStyle()方法，两个参数，取得计算样式的元素和一个伪元素字符串，返回包含当前元素的所有计算的样式。  
IE 的 style 属性还有一个 currentStyle 属性，包含计算后的样式。  
所有计算的样式都是只读的；不能修改计算后样式对象中的 CSS 属性。  
CSSStyleSheet 类型表示的是样式表，包括通过`<link>`元素和在`<style>`元素中定义的，通过 document.styleSheets 集合访问来表示的。  
insertRule(规则文本，表示在哪里插入规则的索引)方法，会向现有样式表中添加新规则。  
addRule(选择符文本，CSS 样式信息，可选参数：插入规则位置)，ie8 以前的方法。  
deleteRule(删除的规则的位置)，删除规则的方法。  
**元素大小**：偏移量包括元素在屏幕上占用的所有可见的空间。offsetHeight：元素在垂直方向上占用的空间大小，offsetWidth：元素在水平方向上占用的空间大小，offsetLeft：offsetTop。  
 想知道某个元素在页面上的偏移量，将这个元素的 offsetLeft 和 offsetTop 与其 offsetParent 的相同属性相加，如此循环直至根元素。  
每次访问一个元素的偏移量都需要重新计算，影响性能，建议保存到局部变量中。  
**客户区大小**：元素内容及其内边距所占据的空间大小，clientWidth 和 clientHeight。  
**滚动大小**：scrollWidth 和 scrollHeight 主要用于确定元素内容的实际大小，scrollLeft（元素左侧不可见内容的像素宽度。） 和 scrollTop（表示元素上方不可见内容的像素高度） 属性既可以确定元素当前滚动的状态。  
## 12.3 遍历
“DOM2 级遍历和范围”模块定义了两个用于辅助完成顺序遍历 DOM 结构的类型：NodeIterator 和 TreeWalker，能够基于给定的起点对 DOM 结构执行深度优先的遍历操作。  
**document.createNodeIterator()** 方法创建它的新实例，四个参数：  
```javascript
//能够访问所有类型节点的简单的 NodeIterator。
var iterator = document.createNodeIterator(document, NodeFilter.SHOW_ALL, null, false); 
//两个该类型的主要的方法
iterator.nextNode(); iterator.previousNode();
```
创建 TreeWalker 对象要使用 **document.createTreeWalker()** 方法，有一个属性，名叫 currentNode，表示任何遍历方法在上一次遍历中返回的节点。  
## 12.4 范围
Document 类型中定义了 createRange()方法，属于 document 对象。  
```javascript
var range = document.createRange(); 
```
该类型的 selectNode(一个参数，即一个 DOM 节点)选择整个节点，包括其子节点；或 selectNodeContents(一个参数，即一个 DOM 节点)只选择节点的子节点。  
创建复杂的范围就得使用 setStart()和 setEnd()方法。两个方法都接受两个参数：一个参照节点和一个偏移量值。  
collapse()方法来折叠范围，这个方法接受一个参数，一个布尔值，表示要折叠到范围的哪一端。参数 true 表示折叠到范围的起点，参数 false 表示折叠到范围的终点。  
compareBoundaryPoints()方法来确定这些范围是否有公共的边界（起点或终点）。  
cloneRange()方法复制范围。  
清理 DOM 范围：
```javascript
range.detach(); //从文档中分离
range = null; //解除引用
```
IE8 以前的范围概念称为文本范围。  
# 事 件
## 13.1 事件流
**事件流**描述的是从页面中接收事件的顺序，IE 的事件流是事件冒泡流，另一种叫事件捕获。  
**事件冒泡**：事件开始时由最具体的元素接收，然后逐级向上传播到较为不具体的节点（文档），主流浏览器会冒泡到 window 对象。  
**事件捕获**：在事件到达预定目标之前捕获它。  
**Dom 事件流：** 包括三个阶段：事件捕获阶段、处于目标阶段和事件冒泡阶段，实际的目标（`<div>`元素）在捕获阶段不会接收到事件。但 IE9、Safari、Chrome、Firefox 和 Opera 9.5 及更高版本都会在捕获阶段触发事件对象上的事件。  
## 13.2 事件处理程序
响应某个事件的函数就叫做**事件处理程序**（或事件侦听器）。  

* html 事件处理程序：  
某个元素支持的每种事件，用一个与相应事件处理程序同名的 HTML 特性来指定。事件处理程序中的代码在执行时，有权访问全局作用域中的任何代码。  
创建一个封装着元素属性值的函数，函数中有一个局部变量 event，也就是事件对象，函数内部，this 值等于事件的目标元素。  
函数使用 with 可以扩展作用域。  
很多 HTML 事件处理程序都会被封装在一个 try-catch 块中，来捕获错误。  
```javascript
<......onclick="try{showMessage();}catch(ex){}">
```
* DOM0 级事件处理程序：  
每个元素（包括 window 和 document）都有自己的事件处理程序属性。  
```javascript
var btn = document.getElementById("myBtn"); 
btn.onclick = function(){ 
 alert("Clicked"); 
}; 
// 这些代码运行以前不会指定事件处理程序，因此如果这些代码在页面中位于按钮后面，就有可能在一段时间内怎么单击都没有反应。
```
删除：将事件处理程序属性的值设置为 null 即可。  

* DOM2 级事件处理程序：  
**addEventListener()，removeEventListener()。** 所有 DOM 节点中都包含这两个方法，3 个参数：要处理的事件名、作为事件处理程序的函数和一个布尔值，false 表示冒泡阶段调用事件处理程序，true 表示捕获阶段调用事件处理程序。  
处理函数建议提出来作为公共变量，不然无法移除 add 添加的匿名函数。  
将事件处理程序添加到事件流的冒泡阶段，这样可以最大限度地兼容各种浏览器。  

* IE 事件处理程序：  
**attachEvent()和 detachEvent()** 两个参数：事件处理程序名称与事件处理程序函数，第一个参数是"on+事件名字"。  
事件处理程序会在全局作用域中运行，因此 this 等于 window。  
事件处理程序不是以添加它们的顺序执行，而是以相反的顺序被触发。  

* 跨浏览器的事件处理程序：  
使用能力检测，要保证处理事件的代码能在大多数浏览器下一致地运行，只需关注冒泡阶段。  
```javascript
var EventUtil =｛
  if (element.addEventListener){ 
   element.addEventListener(type, handler, false); 
   } else if (element.attachEvent){ 
   element.attachEvent("on" + type, handler); 
   } else { 
   element["on" + type] = handler; 
   } 
｝
```
## 13.3 事件对象
在触发 DOM 上的某个事件时，会产生一个事件对象 event。  
* DOM 中的事件对象：  

event 对象传入到事件处理程序中。  
**currentTarget**，Element，只读 ，其事件处理程序当前正在处理事件的那个元素。  
**preventDefault()** ，Function， 只读 ，取消事件的默认行为。如果 cancelable 是 true，则可以使用这个方法。  
**stopPropagation()** ，Function， 只读， 取消事件的进一步捕获或冒泡。如果 bubbles 为 true，则可以使用这个方法。  
**target**，Element， 只读， 事件的目标。  
对象 this 始终等于 currentTarget 的值，直接将事件处理程序指定给了目标元素，则 this、currentTarget 和 target 包含相同的值。  
```javascript
//在事件处理程序的函数中：
event.preventDefault(); 
event.stopPropagation(); 
```
对象的 eventPhase 属性，可以用来确定事件当前正位于事件流的哪个阶段。1，捕获。2，处于。3，冒泡。  
尽管“处于目标”发生在冒泡阶段，但 eventPhase 仍然一直等于 2。  
只有在事件处理程序执行期间，event 对象才会存在；执行完后 event 对象会被销毁。 

* IE 的事件对象：  
特别：DOM0 级方法添加事件处理程序时，event 对象作为 window 对象的一个属性存在。  
通过 attachedEvent（）则还是和 Dom2 级事件差不多。  
通过 HTML 特性指定的事件处理程序，那么还可以通过一个名叫 event 的变量来访问 event 对象。  
```javascript
var event = window.event;
//html:
<input type="button" value="Click Me" onclick="alert(event.type)"> 
```
**cancelBubble** 默认值为 false，但将其设置为 true 就可以取消事件冒泡。  
**returnValue** 默认值为 true，但将其设置为 false 就可以取消事件的默认行为。  
不能认为 this 会始终等于事件目标，建议使用 event.srcElement 属性。  

* 跨浏览器的事件对象：  
封装一个对象，对象里面实现 ie 和非 ie 的事件处理程序对象 event。  

## 13.4 事件类型

* UI 事件：  
概念：那些不一定与用户操作有关的事件，多数这些事件都与 **window 对象** 或**表单控件** 相关。  
load 事件：当页面完全加载后就会触发 window 上面的 load 事件。  
```javascript
//dom0 级或者 dom2 级事件或者在 body 添加
<body onload="alert('Loaded!')"> 
</body> 
```
img 图像的 onload 事件，重要的是要在指定 src 属性之前先指定事件。  
script 动态加载脚本：只有在设置了`<script>`元素的 src 属性并将该元素添加到文档后，才会开始下载 JavaScript 文件，所以先后顺序不那么重要了。  
unload 事件：在文档被完全卸载后触发。  
resize 事件：浏览器窗口被调整到一个新的高度或宽度时，就会触发 resize 事件。Firefox 则只会在用户停止调整窗口大小时才会触发 resize 事件。  
scroll 事件：文档被滚动期间重复被触发。  

* 焦点事件：  
页面元素获得或失去焦点时触发，最主要的两个是 focus 和 blur，这些事件的最大问题是它们不冒泡，  
```
(1) focusout 在失去焦点的元素上触发；
(2) focusin 在获得焦点的元素上触发；
(3) blur 在失去焦点的元素上触发；
(4) DOMFocusOut 在失去焦点的元素上触发；
(5) focus 在获得焦点的元素上触发；
(6) DOMFocusIn 在获得焦点的元素上触发。
```

* 鼠标与滚轮事件:  
click，dbclick，mousedown，mouseenter，mouseleave，mousemove，mouseout，mouseover，mouseup。除了 mouseenter 和 mouseleave，所有鼠标事件都会冒泡，也可以被取消。  
click 和 dblclick 事件都会依赖于其他先行事件的触发。  
**客户区坐标位置** clientX 和 clientY 属性中。  
**页面坐标位置** pageX 和 pageY 属性，表示鼠标光标在页面中的位置，因此坐标是从页面本身而非视口的左边和顶边计算的。在页面没有滚动的情况下，pageX 和 pageY 的值与 clientX 和 clientY 的值相等。  
**屏幕坐标位置** screenX 和 screenY 属性就可以确定鼠标事件发生时鼠标指针相对于整个屏幕的坐标信息。  
**修改键：** shiftKey、ctrlKey、altKey 和 metaKey，属性中包含的都是布尔值，相应的键被按下则为 true。  
**相关元素：** 发生 mouseover 和 mouserout 事件时，还会涉及更多的元素。mouseover 相关元素就是那个失去光标的元素，mouserout 相关元素则是获得光标的元素。  
event 对象的 relatedTarget 属性提供了相关元素的信息。  
IE 的 toElement 属性中保存着相关元素。  
**鼠标按钮:** DOM 的 button 属性可能有如下 3 个值：0 表示主鼠标按钮，1 表示中间的鼠标按钮（鼠标滚轮按钮），2 表示次鼠标按钮。  
支持 DOM 版鼠标事件的浏览器可以通过 hasFearture()方法来检测。  
使用 onmouseup 事件处理程序时，button 的值表示释放的是哪个按钮。  
**更多事件信息：** 在 event 对象中还提供了 detail 属性，用于给出有关事件的更多信息。鼠标事件则包含一个数值，表示在给定位置上发生了多少次单击。  
**鼠标滚轮事件：** mousewheel 事件，最终会冒泡到 document（IE8）或 window，event 对象除包含鼠标事件的所有标准信息外，还包含一个特殊的 wheelDelta 属性。wheelDelta 是 120 的倍数;Firefox 支持一个名为 DOMMouseScroll 的类似事件，信息则保存在 detail 属性中。  
**触摸设备：** 面向 iPhone 和 iPod 中的 Safari 开发时，记住不支持 dblclick 事件。轻击可单击元素会触发 mousemove 事件。mousemove 事件也会触发 mouseover 和 mouseout 事件。随手指移动而滚动时会触发 mousewheel 和 scroll 事件。  

* 键盘与文本事件:  
keydown，keypress，keyup 只有在用户通过文本框输入文本时才最常用到。  
文本插入文本框之前会触发 textInput 事件。  
keydown 和 keypress 都是在文本框发生变化之前被触发的；keyup 在文本框已经发生变化之后被触发的，如果用户按下了一个字符键不放，就会重复触发前面两个事件。  
**键码** ：event 对象的 keyCode 属性。与 ASCII 码中对应小写字母或数字的编码相同。  
**字符编码：** event 对象都支持一个 charCode 属性，只有在发生 keypress 事件时才包含值，代表字符的 ASCII 编码。  
**DOM3 级变化：** 不再包含 charCode 属性，而是两个新属性：key 和 char，由于存在跨浏览器问题所以不推荐使用。event 对象添加了 getModifierState()方法，指定的修改键是活动的，处于被按下的状态，这个方法返回 true，否则返回 false。  
**textInput 事件:** 只有可编辑区域才能触发。用户按下能够输入实际字符的键时才会被触发。event 下的 data 属性，这个属性的值就是用户输入的字符。只有 IE 支持 inputMethod 属性。  

* 复合事件:  
compositionstart，compositionupdate，compositionend。值则是该三个事件的 data 属性。

* 变动事件:  
DOM 中的某一部分发生变化时给出提示。  
**删除节点** ：首先会触发 DOMNodeRemoved 事件，如果被移除的节点包含子节点，这个节点和子节点相继触发 DOMNodeRemovedFromDocument 事件(不会冒泡)。其后触发的是 DOMSubtreeModified 事件,事件的目标是被移除节点的父节点。  
**插入节点：** 首先会触发 DOMNodeInserted 事件，触发时，节点已经被插入到了新的父节点中。接下来会在新插入的节点上面触发 DOMNodeInsertedIntoDocument 事件（不冒泡）。最后一个触发的是 DOMSubtreeModified，触发于新插入节点的父节点。 

* HTML5 事件:  
**contextmenu 事件：** 上下文菜单的概念，即通过单击鼠标右键可以调出上下文菜单。方法思路是，先取消默认行为 event.preventDefalut()；在 IE 中，将 event.returnValue 的值 false，然后再是使用 contextmenu 事件来显示自定义的上下文菜单。  
```javascript
 myDiv.addEventListener('contextmenu', function (event) {
    var myMenu = document.getElementById('myMenu');
    event.preventDefault();
    myMenu.style.visibility = 'visible';
    myMenu.style.left = event.clientX + 'px';
    myMenu.style.top = event.clientY + 'px';
});
```
**beforeunload 事件：** 会在浏览器卸载页面之前触发，必须将 event.returnValue 的值设置为要显示给用户的字符串，同时作为函数的值返回。Opera 11 及之前的版本不支持 beforeunload 事件。  
**DOMContentLoaded 事件：** 在形成完整的 DOM 树之后就会触发，始终都会在 load 事件之前触发。  
**readystatechange 事件** ：IE 为 DOM 文档中的某些部分提供了 readystatechange 事件，提供与文档或元素的加载状态有关的信息，支持该事件的浏览器有 IE、Firfox 4+和 Opera。  
**pageshow 和 pagehide 事件：** Firefox 和 Opera 有一个特性，名叫“往返缓存”，在使用浏览器的“后退”和“前进”按钮时加快页面的转换速度。pageshow 会在 load 事件触发后触发；必须将其事件处理程序添加到 window。event 对象还包含一个名为 persisted 的布尔值属性，如果页面被保存在了 bfcache 中，则这个属性的值为 true。  
在浏览器卸载页面的时候触发 pagehide 事件，是在 unload 事件之前触发。必须要添加到 window 对象上。如果页面在卸载之后会被保存在 bfcache 中，persisted 的值会被设置为 true。  
指定了 onunload 事件处理程序的页面会被自动排除在 bfcache 之外，即使事件处理程序是空的。  
**hashchange 事件：** URL 参数列表只要变化就会调用该事件，必须要把事件处理程序添加给 window 对象，event 对象包含两个属性：oldURL 和 newURL，但是最好是使用 location 对象来确定当前的参数列表。  

* 设备事件:  
**orientationchange 事件：** 苹果公司为移动 Safari 中添加了，用户何时将设备由横向查看模式切换为纵向查看模式。可以通过 window.orientation 访问到。  
**MozOrientation 事件** ：在 window 对象上触发的，event 对象包含三个属性：x、y 和 z。只有带加速计的设备才支持 MozOrientation 事件。  
**deviceorientation 事件：** 在 window 对象上触发，告诉设备在空间中朝向哪儿，五个属性。支持该事件的浏览器有 iOS 4.2+中的 Safari、Chrome 和 Android 版 WebKit。  
**devicemotion 事件：** 告诉开发人员设备什么时候移动，而不仅仅是设备方向如何改变。支持该事件的浏览器有 iOS 4.2+中的 Safari、Chrome 和 Android 版 WebKit。  

* 触摸与手势事件:  
**触摸事件：** touchstart；touchmove；touchend；touchcancel；衍生的三个属性 touches；targetTouchs；changeTouches。触摸移动的默认行为是滚动页面。  
**手势事件：** gesturestart；gesturechange；gestureend。两个额外的属性：rotation 手指变化引起的旋转角度， 和 scale 两个手指间距离的变化情况。  

## 13.5 内存和性能
事件处理函数都是对象，都会占用内存；内存中的对象越多，性能就越差。  
必须事先指定所有事件处理程序而导致的 DOM 访问次数，会延迟整个页面的交互就绪时间。  

* 事件委托：  
主要是利用事件冒泡。  
可行的话，也可以考虑为 document 对象添加一个事件处理程序，处理页面上发生的某种特定类型的事件。优点是很快就可以访问，所需的时间更少，占用的内存空间更少，提升整体性能。

* 移除事件处理程序：  
事件处理程序极有可能无法被当作垃圾回收，保存在内存中，最好手工移除事件处理程序。
```javascript
btn.onclick = function(){ 
 //先执行某些操作
 btn.onclick = null; //移除事件处理程序
 document.getElementById("myDiv").innerHTML = "Processing..."; 
 }; 
```
一般来说，最好是在页面卸载之前，先通过 onunload 事件处理程序移除所有事件处理程序。  
采用事件委托也有助于解决这个问题。  
## 13.6 模拟事件
使用 JavaScript 在任意时刻来触发特定的事件，DOM2 级规范为此规定了模拟特定事件的方式。  

* DOM 中的模拟事件：  
在 document 对象上使用 **createEvent()** 方法创建 event 对象。参数一个：dom2 级负数，dom3 级单数，UIEvents，MouseEvents，MutationEvents，HTMLEvents。触发事件。这一步需要使用 **dispatchEvent()** 方法，一个参数，即表示要触发事件的 event 对象。  
**模拟鼠标事件** ："MouseEvents"，返回的对象 initMouseEvent()方法。  
```javascript
var event = document.createEvent("MouseEvents"); 
event.initMouseEvent("click", true, true, document.defaultView,...); 
btn.dispatchEvent(event); 
```
**模拟键盘事件:** createEvent()并传入"KeyboardEvent",initKeyEvent()方法初始化。  
在 Firefox 中，调用 createEvent()并传入"KeyEvents"创建一个键盘事件，initKeyEvent()方法初始化。  
其他浏览器中，则需要创建一个通用的事件，然后调用 initEvent()对其进行初始化，模拟事件虽然会触发键盘事件，但却不会向文本框中写入文本，这是由于无法精确模拟键盘事件所造成的。  
```javascript
//创建通用事件对象
var event = document.createEvent("Events"); 
```
**模拟其他事件：** 模拟变动事件，可以使用 createEvent("MutationEvents")，要模拟 HTML 事件，可以使用通过 createEvent("HTMLEvents")，浏览器中很少使用变动事件和 HTML 事件，因为使用它们会受到一些限制。  
**自定义 DOM 事件：** 调用 createEvent("CustomEvent")。initCustomEvent()的方法进行初始化，type（字符串）：触发的事件类型，例如"keydown"。bubbles（布尔值）：表示事件是否应该冒泡。cancelable（布尔值）：表示事件是否可以取消。  detail（对象）：任意值，保存在 event 对象的 detail 属性中。  

* IE 中的事件模拟：  
调用 document.createEventObject()方法可以在 IE 中创建 event 对象，不接受参数。在目标上调用 fireEvent()方法，接受两个参数：事件处理程序的名称和 event 对象。
```javascript
var event = document.createEventObject(); 
btn.fireEvent("onclick", event); 
```
# 表单脚本
## 14.1 表单的基础知识
表单是由`<form>`元素来表示的，取得`<form>`元素最常见的方式添加 id 特性，然后再像下面这样使用 getElementById()方法找到它。  
HTMLFormElement 特有的属性：action：method：等。。。  
其次，通过 document.forms 可以取得页面中所有的表单，name 值来取得特定的表单（不推荐）。  

* 提交表单：  
用`<input>`或`<button>`将 type 特性的值设置为"submit"，图像按钮则是 type 设置为 image。  
表单里没有提交按钮，按回车键不会提交表单。  
```javascript
preventDefault(event); 
```
阻止这个事件的默认行为就可以取消表单提交。  
调用 submit()方法的形式提交表单时，不会触发 submit 事件。  
```javascript
var form = document.getElementById("myForm"); 
form.submit(); 
```
重复提交按钮问题：禁用提交按钮，或者利用 onsubmit 事件处理。  

* 重置表单：  
```javascript
//调用 reset()方法会像单击重置按钮一样触发 reset 事件。
form.reset(); 
```
* 表单字段：  
每个表单都有 elements 属性，是表单中所有表单元素（字段）的集合。  
多个表单控件都在使用一个 name，那么该属性会返回以该 name 命名的一个 NodeList。  
**共有的表单字段属性：** disabled，form：name：readOnly：tabIndex：type：value：  
所有表单字段都有 type 属性，`<select>`元素的 type 属性则是只读的。  
**共有的表单字段方法** ：focus()设置焦点和 blur()移除焦点。  
HTML5 为表单字段新增了一个 autofocus 属性。  
```javascript
<input type="text" autofocus> 
```
其他元素而言，如果先将其 tabIndex 属性设置为-1，再调用 focus()方法，也可以获得焦点。  
**共有的表单字段事件：** blur，change，focus。
## 14.2 文本框脚本
两种方式来表现文本框：`<input>`和`<textarea>`的多行文本框。它们都会将用户输入的内容保存在 value 属性中。处理值的时候最好不要使用 DOM 方法。  
input 文本框的 size 特性能够显示的字符数，value 特性，可以设置文本框的初始值，maxlength 特性最大字符数。  
`<textarea>`rows 特性指定字符行数，cols 特性字符列数。  

* 选择文本：  
select()方法，选择文本框中的所有文本。  
select 事件。在选择了文本框中的文本时，就会触发。  
**取得所选文本** ：substring()方法结合属性：selectionStart 和 selectionEnd 进行切割。IE8 及之前 document.selection 对象创建一个范围再将文本从其中提取出来。  
```javascript
return document.selection.createRange().text; 
```
**选择部分文本** ：setSelectionRange(要选择的第一个字符的索引，要选择的最后一个字符之后的字符的索引)。ie8 之前的版本 createTextRange()方法创建一个范围，再是以下步骤  
```javascript
range.collapse(true); 
range.moveStart("character", 0); 
range.moveEnd("character", textbox.value.length); //"Hello world!" 
range.select(); 
```
* 过滤输入：  
屏蔽字符:用 String.fromCharCode()将字符编码转换成字符串，  
```javascript
if (!/\d/.test(String.fromCharCode(charCode)) && charCode > 9 && !event.ctrlKey)
{ EventUtil.preventDefault(event); }
```
**操作剪贴板:** 除 IE 之外 beforecopy、beforecut 和 beforepaste 事件只会在显示针对文本框的上下文菜单的情况下触发。取消 copy、cut 和 paste 事件，才能阻止相应操作发生。  
访问剪贴板中的数据，使用 clipboardData 对象：在 IE 中，是 window 对象的属性。其他则是属于 event 对象的属性。  
只有在处理剪贴板事件期间 clipboardData 对象才有效。  
clipboardData 对象有三个方法：getData()、setData()和 clearData()。  
```javascript
clipboardData.getData("text"); //两种数据格式，text 或者'URL'
event.clipboardData.setData("text/plain", value); //其他浏览器设置格式
window.clipboardData.setData("text", value); //IE 设置格式
```
Firefox、Safari 和 Chrome 只允许在 onpaste 事件处理程序中访问 getData()方法。  

* 自动切换焦点：  

* HTML5 约束验证 API：  
有效 版本 Firefox 4+、Safari 5+、Chrome 和 Opera 10+。  
```javascript
// 必填字段 required 属性
<input type="text" name="username" required>
// 检测是否支持 required 属性
var isRequiredSupported= "required" in document.createElement('input');
// 其他输入类型
<input type="email" name ="email"> 
<input type="url" name="homepage"> 
```
**数值范围** ：指定 min 属性、max 属性和 step 属性。  
**输入模式：** 文本字段新增 pattern 属性。这个属性的值是一个正则表达式。模式的开头和末尾不用加^和$符号。在 JavaScript 中可以通过 pattern 属性访问模式。  
```javascript
// <input type="text" pattern="\d+" name="count"> 
document.forms[0].elements["count"].pattern; 
```
**检测有效性：** checkValidity()方法可以检测表单中的某个字段是否有效。  
检测整个表单是否有效，表单自身调用 checkValidity()方法。  
validity 属性则会告诉你为什么字段有效或无效。  
```javascript
if (input.validity && !input.validity.valid){
 if (input.validity.valueMissing){ }
} 
```
表单不进行验证，设置 novalidate 属性。  
指定点击某个提交按钮不必验证表单，添加 formnovalidate 属性，或者直接用 js 属性赋值为 true。  
```javascript
<input type="submit" formnovalidate name="btnNoValidate"> 
document.forms[0].elements["btnNoValidate"].formNoValidate = true; 
```
## 14.3 选择框脚本
选择框是通过`<select>`和`<option>`元素创建的。有属性和方法：add(newOption, relOption)：multiple：options：remove(index)：selectedIndex：size：。  
每个`<option>`元素都有一个 HTMLOptionElement 对象表示，存在下列属性：index，label，selected，text，value。  
不推荐使用标准 DOM 技术修改`<option>`元素的文本或者值。选择框的 change 事件只要选中了选项就会触发。  
```javascript
var text = selectbox.options[0].text; //选项的文本
var value = selectbox.options[0].value; //选项的值
```
* 选择选项：  
选择框的 selectedIndex 属性。  
selected 属性的作用主要是确定用户选择了选择框中的哪一项。  

* 添加选项：  
第一种方法 dom 方法，createElement("option")，appendChild(）。  
第二种使用 Option 构造函数来创建新选项，两个参数（value，text），第二个参数可选。  
第三种方法，选择框的 add（），两个参数，要添加的新选项和将位于新选项之后的选项。如果想在列表最后添加一个 option，第二个参数为 null。  

* 移除选项：  
DOM 的 removeChild()方法。  
选择框的 remove()方法。  
将相应选项设置为 null。  

* 移动和重排选项：  
DOM 的 appendChild()方法，就可以将第一个选择框中的选项直接移动到第二个选择框中。传入一个文档中已有的元素，那么就会先从该元素的父节点中移除它，再把它添加到指定的位置。  
将选择框中的某一项移动到特定位置，最合适的 DOM 方法就是 insertBefore()。  
## 14.4 表单序列化
提交给服务器时，表单序列化过程中，一般不包含任何按钮字段。  
检查这个 value 特性，在 DOM 兼容的浏览器中需要使用 hasAttribute()方法，而在 IE 中需要使用特性的 specified 属性。  
## 14.5 富文本编辑
又称为 WYSIWYG，所见即所得。  
iframe：通过设置 designMode 属性，这个空白的 HTML 页面可以被编辑。  
```javascript
frames["richedit"].document.designMode = "on";
```
* 使用 contenteditable 属性：  
页面中的任何元素，设置 contenteditable 属性即可，三种值 true，false，inherit（继承父类）。  
```javascript
<div class="editable" id="richedit" contenteditable></div> 
```
* 操作富文本：  
使用 document.execCommand()，对文档执行预定义的命令，三个参数，确保跨浏览器的兼容性，第二个参数应该始终设置为 false。  
queryCommandEnabled()测是否可以所在位置执行某个命令。  
queryCommandState()方法用于确定是否已将指定命令应用到了选择的文本。  
queryCommandValue()，用于取得执行命令时传入的值。  
```javascript
frames["richedit"].document.execCommand("bold", false, null); 
document.execCommand("bold", false, null); 
```
* 富文本选区：  
使用框架（iframe）的 getSelection()方法，是 window 对象和 document 对象的属性，返回一个 Selection 对象。  

* 表单与富文本：  
通过文档主体的**innerHTML 属性**（获取富文本对应的元素或者对应的 iframe 中的 HTML）。  

# 使用 Canvas 绘图
## 15.1 基本用法
使用`<canvas>`元素，必须先设置其 width 和 height 属性。  
需要绘图必须取得绘图上下文，调用 getContext()方法并传入上下文的名字，“2d”等。  
使用`<canvas>`元素之前，首先要检测 getContext()方法是否存在。  
toDataURL()方法，接受一个参数 MIME 类型，例如"imge/png”，可以导出在`<canvas>`元素上绘制的图像。  
```javascript
<canvas id="drawing" width="500" height="500"></canvas>
if (drawing.getContext){ ｝；
```
## 15.2 2D 上下文
2D 上下文的坐标开始于左上角（0，0）；x，y 值表示向左和向下延伸。
* 填充和描边
2D 上下文的两种基本绘图操作是填充和描边，两个属性：fillStyle 和 strokeStyle。
值可以是字符串、渐变对象或模式对象，而且它们的默认值都是"#000000"，表示颜色的字符串值。
```javascript
var context = drawing.getContext("2d"); 
context.strokeStyle = "red"; 
context.fillStyle = "#0000ff"; 
```
* 绘制矩形
fillRect()制定颜色、strokeRect()颜色描边，和 clearRect()清除话补某个区域。都接收 4 个参数：矩形的 x 坐标、矩形的 y 坐标、矩形宽度和矩形高度。这些参数的单位都是像素。
* 绘制矩形
首先必须调用 beginPath()方法，再是以下方法：arc（），arcTo（），bezierCurveTo（），lineTo（），**moveTo（）**，quadraticCurveTo（），rect（）。接下来必须走的一步是：如果绘制一条连接到路径起点的线条用 closePath()结束，如果填充它，可以调用 fill()方法结束，或者调用 stroke()方法对路径描边结束，或者 clip（）创建一个剪切区域。
isPointInPath(x，y)的方法确定画布上的某一点是否位于路径上。
* 绘制文本
fillText()和 strokeText()，四个参数：绘制的字符串，x，y，可选的最大像素宽度。方法有三个属性：font，textAlign 文本对齐方式，textBaseline。
2D 上下文提供了辅助确定文本大小的方法 measureText()，接受一个参数，即绘制的文本，返回一个只带有 width 属性的对象。
* 变换
rotate(angle)：scale(scaleX, scaleY)：translate(x, y)：transform(m1_1, m1_2, m2_1, m2_2, dx, dy)：
* 绘制图像
传入一个 HTML`<img>`元素，绘制该图像的起点的 x 和 y 坐标。
```javascript
context.drawImage(image, 10, 10); 
//可以传 9 参数 要绘制的图像、源图像的 x 坐标、源图像的 y 坐标、源图像的宽度、源图像的高度、目标图像的 x 坐标、目标图像的 y 坐标、目标图像的宽度、目标图像的高度。
```
把另一个画布内容绘制到当前画布上,第一个参数应为`<canvas>`。
图像不能来自其他域。
* 阴影
```javascript
context.shadowOffsetX = 5; //x 轴偏移量
context.shadowOffsetY = 5; 
context.shadowBlur = 4; // 模糊的像素值
context.shadowColor = "rgba(0, 0, 0, 0.5)"; 
```
* 渐变
由 CanvasGradient 实例表示，调用 createLinearGradient()方法。收 4 个参数：起点的 x 坐标、起点的 y 坐标、终点的 x 坐标、终点的 y 坐标。返回一个 CanvasGradient 对象的实例。
下一步就是使用 addColorStop(色标位置，CSS 颜色值）方法来指定色标。
```javascript
var gradient = context.createLinearGradient(30, 30, 70, 70); 
gradient.addColorStop(0, "white"); 
gradient.addColorStop(1, "black"); 
```
创建径向渐变（或放射渐变），用 createRadialGradient()方法，参数为 6 个，两个圆的圆心和半径。
* 模式
就是重复的图像，可以用来填充或描边图形。createPattern()方法并传入两个参数：一个 HTML `<img>`元素和一个表示如何重复图像的字符串（"repeat"、"repeat-x"、"repeat-y"和"no-repeat"）。
第一个参数也可以是一个`<video>`元素，或者另一个`<canvas>`元素。
* 使用图像数据
可以通过 getImageData()取得原始图像数据。四个参数：要取得其数据的画面区域的 x 和 y 坐标以及该区域的像素宽度，和高度。
返回一个 ImageData 的实例对象，对象有三个属性，width，height，和 data。data 是个数组，每一个像素用 4 个元素保存，分别代表红 data[0]，绿 data[1]，蓝 data[2]，透明度 data[3]。
画布“干净”的情况下（即图像并非来自其他域），才可以取得图像数据。
* 合成
两个属性：globalAlpha 指定所有绘制的透明度。默认值为 0。
globalCompositionOperation 表示后绘制的图形怎样与先绘制的图形结合。有很多值，“source-in”等。
## 15.3 WebGL
WebGL 是针对 Canvas 的 3D 上下文。
* 类型化数组
WebGL 引入了一个概念，叫类型化数组，其元素被设置为特定类型的值，核心就是一个名为 ArrayBuffer 的类型。
WebGL 是从 OpenGL ES 2.0 移植到浏览器中的，而 OpenGL ES 2.0 是游戏开发人员在创建计算机图形图像时经常使用的一种语言。WebGL 支持比 2D 上下文更丰富和更强大的图形图像处理能力，比如：
用 GLSL（OpenGL Shading Language，OpenGL 着色语言）编写的顶点和片段着色器
支持类型化数组，即能够将数组中的数据限定为某种特定的数值类型
创建和操作纹理。
但对于 WebGL 而言，目前还只有 Firefox 4+和 Chrome 支持它。
# HTML5 脚本编程
## 16.1 跨文档消息传递
简称为 XDM，自不同域的页面间传递消息。
核心是 postMessage()方法，传递给`<iframe>`元素，或者由当前页面弹出的窗口，两个参数：一条消息（最好是字符串参数）和一个表示消息接收方来自哪个域的字符串。
接收时触发 window 对象的 message 事件，event 包含下列属性：data，origin，source 发送消息的文档的 window 对象的代理。
event.source 大多数情况下只是 window 对象的代理，并非实际的 window 对象。
## 16.2 原生拖放
* 拖放事件
拖动某元素时，将依次触发 dragstart，drag，dragend。
当某个元素被拖动到一个有效的放置目标上时，dragenter，dragover，dragleave 或 drop。只要有元素被拖动到放置目标上，就会触发 dragenter 事件，被放到了放置目标中，则会触发 drop 事件而不是 dragleave 事件。目标都是作为放置目标的元素。
* 自定义放置目标
你可以把任何元素变成有效的放置目标，方法是重写 dragenter 和 dragover 事件的**默认行为。**
```javascript
EventUtil.addHandler(droptarget, "dragover", function(event){ 
 EventUtil.preventDefault(event); 
}); //EventUtil 对象是事件章节的大对象
```
Firefox 支持正常的拖放，还要取消 drop 事件的默认行为，阻止它打开 URL：
* **dataTransfer 对象**
在拖放操作时实现数据交换，事件对象的一个属性，用于从被拖动元素向放置目标传递字符串格式的数据。
getData()和 setData(一个参数，字符串，表示保存的数据类型，取值为"text"或"URL")。
保存在 dataTransfer 对象中的数据只能在 drop 事件处理程序中读取。
* **dropEffect 与 effectAllowed**
dataTransfer 对象的两个属性，dropEffect 属性可以知道被拖动的元素能够执行哪种放置行为。
要使用 dropEffect 属性，必须在 ondragenter 事件处理程序中针对放置目标来设置它。
dropEffect 只有搭配 effectAllowed 属性才有用，用来表示允许拖动元素的哪种 dropEffect。
必须在**ondragstart** 事件处理程序中设置 effectAllowed 属性。
* 可拖动
文本只有在被选中的情况下才能拖动，而图像和链接在任何时候都可以拖动。
元素规定了一个 draggable 属性可拖动。
Firefox 支持可拖动属性，还必须添加一个 ondragstart 事件处理程序，并在 dataTransfer 对象中保存一些信息。
* 其他成员
dataTransfer 对象还包含以下方法和属性：addElement（），clearData（），setDragImage（），types。
## 16.3 媒体元素
`<audio>`和`<video>`。至少要在标签中包含 src 属性，poster 属性指定图像的 URI 可以在加载视频内容期间显示一幅图像。
* 属性
* 事件
* 自定义媒体播放器
* 检测编解码器的支持情况
两个媒体元素都有一个 canPlayType()方法，该方法接收一种格式/编解码器字符串，返回"probably"、"maybe"或""（ 空字符串）。
真正决定文件能否播放的还是编码的格式。
* Audio 类型
`<audio>`元素还有一个原生的 JavaScript 构造函数 Audio，可以在任何时候播放音频，调用 play()就可以播放音频。
```javascript
var audio = new Audio("sound.mp3");
audio.play(); 
```
## 16.4 历史状态管理
前提：用户的每次操作不一定会打开一个全新的页面，因此“后退”和“前进”按钮也就失去了作用，导致用户很难在不同状态间切换。
使用 hashchange 事件，Html5 通过更新 history 对象为管理历史状态提供了方便。
创建新的历史状态则用 history.pushState()方法，该方法可以接收三个参数：状态对象、新状态的标题和可选的相对 URL。第二个参数目前还没有浏览器实现，因此完全可以只传入一个**空字符串**，或者一个**短标题**也可以。而第一个参数则应该尽可能**提供初始化页面状态所需的各种信息。**
重写当前状态或者更新状态，则调用 replaceState()，传入的参数与 pushState()的前两个参数相同。
历史状态管理让我们不必卸载当前页面即可修改浏览器的历史状态栈。有了这种机制，用户就
可以通过“后退”和“前进”按钮在页面状态间切换，而这些状态完全由 JavaScript 进行控制。

# 错误处理与调试
## 17.1 浏览器报告的错误
别忘了启用浏览器的 JavaScript 报告功能。
* IE
浏览器左下角会出现一个黄色的图标，打开“Tools”选中“Display a notification about every script error”（显示每个脚本错误的通知）。
* Firefox 
插件 Firebug，已经成为开发人员必备的 JavaScript 纠错工具。
* Safari
选中“Show develop menu in menubar”单击“Show Error Console”（显示错误控制台）选项。
## 17.2 错误处理
* try-catch 语句
把所有可能会抛出错误的代码都放在 try 语句块中，发生错误接下来会执行 catch 块，此块包含错误信息的对象，即便不想使用也要给他（错误对象）一个名字，共同的是有一个保存着错误消息的 message 属性。
在跨浏览器编程时，最好还是只使用 message 属性。
finally 子句一经使用，其代码无论如何都会执行。
try 或 catch 语句块中包含甚至 return 语句，都不会阻止 finally 子句的执行。
IE7 及更早版本中有一个 bug：必须有 catch 子句，否则 finally 不执行。
7 种错误类型：**Error**是基类型，其他错误类型都继承自该类型。**EvalError** 类型的错误会在使用 eval()函数而发生异常时被抛出。**RangeError**类型超出相应范围时触发。找不到对象的情况下，会发生 **ReferenceError**（object expected"浏览器错误）。**SyntaxError**语法错误的 JavaScript 字符串传入 eval()函数。
要知道属于哪种错误的类型，catch 语句中使用 instanceof 操作符。
```javascript
catch（error）{
  if (error instanceof TypeError){ 
   //处理类型错误
 }
}
```
try-catch 最适合处理那些我们无法控制的错误。
* 抛出错误
throw 操作符，抛出自定义错误，给 throw 操作符指定一个值，什么类型无要求。
代码会立即停止执行。仅当有 try-catch 语句捕获到被抛出的值时，代码才会继续执行。
利用**原型链**还可以通过继承 Error 来创建自定义错误类型。
* 错误（error）事件
要指定 onerror 事件处理程序，必须使用如下所示的 DOM0 级技术，它没有遵循“DOM2 级事件”的标准格式。
阻止浏览器报告错误的默认行为。
```javascript
window.onerror = function(message, url, line){ 
 alert(message); 
 return false; 
}; 
// 返回 false，这个函数实际上就充当了整个文档中的 try-catch 语句，只要可能就不应该使用它。适当地使用 try-catch 语句即可。
```
图像的 src 特性中的 URL 不能返回可以被识别的图像格式，就会触发 error 事件，此时的 error 事件遵循 DOM 格式。
* 处理错误的策略
必须要知道代码何时可能出错，会出什么错，同时还要有一个跟踪此类问题的系统。
* 常见的错误类型
建议使用全等（===）和不全等（!==）操作符，以避免类型转换错误。
数据类型错误：基本类型的值应该使用 typeof 来检测，而对象的值则应该使用 instanceof 来检测。
通信错误：格式不正确的 URL 或发送的数据有关，没有使用 encodeURIComponent()对数据进行编码。
* 区分致命错误和非致命错误
* 把错误记录到服务器
```javascript
function logError(sev, msg){ 
 var img = new Image(); 
 img.src = "log.php?sev=" + encodeURIComponent(sev) + "&msg=" + 
 encodeURIComponent(msg); 
} 
//logError()函数接收两个参数：表示严重程度的数值或字符串，及错误消息。Image 对象来发送请求好处有：所有浏览器都支持 Image 对象，可以避免跨域限制。
```
## 17.3 调试技术
* 将消息记录到控制台
Firefox 要使用 Firebug 的控制台。
Opera 10.5 之前的版本中，JavaScript 控制台可以通过 **opera.postError()** 方法来访问。
还有一种方案是使用 LiveConnect，也就是在 JavaScript 中运行 Java 代码。
* 将消息记录到页面
创建一个 div 元素。
* 抛出错误
```javascript
// 自定义的错误通常都使用 assert()函数抛出，参数：求值结果应该为 true 的条件，另一个是条件为 false 时要抛出的错误。
function assert(condition, message){ 
 if (!condition){ 
 throw new Error(message); 
 } 
} 
```
## 17.4 常见的 IE 错误
* 操作终止
* 无效字符
垃圾收集例程配合错误所直接导致的，对象被销毁之后，又给该对象赋值，导致未找到成员错误。闭包中使用了 event 对象，将来调用它并给 event 的属性赋值时会导致。
innerHTML 或 outerHTML 以下列方式指定 HTML 时：一是把块元素插入到行内元素时，二是访问表格任意部分的任意属性时。
IE 对 URL 路径还有一个不能超过 2048 个字符的限制。
# JavaScript 与 XML
XML 一度成为存储和通过因特网传输结构化数据的标准。
## 18.1 浏览器对 XML DOM 的支持
DOM2 级是第一个提到动态创建 XML DOM 概念的规范。DOM3 新增了解析和序列化等特性。
* DOM2 级核心
实际开发中很少需要从头开始创建一个 XML，DOM2 级 XML 文档。
```javascript
// 创建一个新的、文档元素为<root>的 XML 文档。第一个是命名空间参数，最后一个是文档类型参数，一般很少用到。
var xmldom = document.implementation.createDocument("", "root", null);
```
* DOMParser 类型
将 XML 解析为 DOM 文档，引入了 DOMParser 类型；首先必须创建一个 DOMParser 的实例，再调用 **parseFromString**(要解析的 XML 字符串，“text/xml”)方法。返回一个 document 的实例。
发生解析错误时，返回 Document 对象，里面的文档元素是`<parsererror>`。
* XMLSerializer 类型
将 DOM 文档序列化为 XML 字符串。首先必须创建 XMLSerializer 的实例，将文档传入其 **serializeToString (xmldom)** 方法。可以序列化任何有效的 DOM 对象，不仅包括个别的节点，也包括 HTML 文档。
* IE8 及之前版本中的 XML
创建一个 XML 文档的实例，需要使用 ActiveXObject 构造函数并为其传入一个表示 XML 文档版本的字符串。有 6 种。
要解析 XML 字符串，首先必须创建一个 DOM 文档，然后调用 loadXML()方法。
IE 将序列化 XML 的能力内置在了 DOM 文档中。每个 DOM 节点都有一个 xml 属性，其中保存着表示该节点的 XML 字符串。
加载 xml 文件，公认的还是使用 **XMLHttpRequest**对象比较好。
```javascript
var xmldom = createDocument(); 
xmldom.async = true;// 通常都使用异步方式。
xmldom.onreadystatechange = function(){ // 必须放在调用 load()方法的
  if (xmldom.readyState == 4){ .....}
}
xmldom.load("example.xml"); //调用 load()可以启动下载过程。
```
* 跨浏览器处理 XML 
编写解析 xml 文件的封装函数，和序列化 XML 功能函数。
由于序列化过程的差异，相同的 DOM 对象在不同的浏览器下，有可能会得到不同的 XML 字符串。
## 18.2 浏览器对 XPath 的支持
XPath 是设计用来在 DOM 文档中查找节点的一种手段，对 XML 处理也很重要。
IE 则以自己的方式实现了 XPath。
* DOM3 级 XPath 
两个类型是 XPathEvaluator 和 XPathResult。
* IE 中的 XPath 
内置在基于 ActiveX 的 XML DOM 文档对象中的，没有使用 DOMParser 返回的 Dom 对象。
每个节点上额外定义了两个的方法：**selectSingleNode()** 和 **selectNodes()**。
* 跨浏览器使用 XPath 
IE 对 XPath 功能的支持有限，因此跨浏览器 XPath 只能保证达到 IE 支持的功能。
## 18.3 浏览器对 XSLT 的支持
利用 XPath 将文档从一种表现形式转换成另一种表现形式。
IE 是第一个支持通过 JavaScript 处理 XSLT 的浏览器。
* IE 中的 XSLT 
通过 ActiveX 对象实现，使用 **transformNode()** 方法。
```javascript
//转换
var result = xmldom.transformNode(xsltdom); 
```
* XSLTProcessor 类型
可以通过 XSLTProcessor 类型使用 XSLT 转换 XML 文档，
```javascript
var processor = new XSLTProcessor() 
processor.importStylesheet(xsltdom); //使用 importStylesheet()方法为其指定一个 XSLT。
/* 想返回一个完整的 DOM 文档调用 transformToDocument()。
调用 transformToFragment()则可以得到一个文档片段对象。两个参数：要转换的 XMLDOM 和应该拥有结果片段的文档，想将返回的片段插入到页面中，只要将 document 作为第二个参数即可。 */
```
XSLTProcessor 的实例都可以重用，调用 reset()方法可以重置。
# E4X
只是 ECMAScript 语言的可选扩展。
## 19.1 E4X 的类型
E4X 定义了如下几个新的全局类型，可以表现 XML 文档中的所有部分，其内部机制是将每一种类型都映射为多个 DOM 类型。
* XML 类型
可以表现元素、特性、注释、处理指令或文本节点。使用 XML 字面量将 XML 数据直接指定给一个变量。以下两个方法满足所有序列化 XML 的需求。
**toXMLString**()方法会返回 XML 对象及其子节点的 XML 字符串表示。
**toString**()方法基于内容返回不同的字符串。
* XMLList 类型
```javascript
var list = new XMLList(); // or new XMLList("<item/><item/>"); 
```
XMLList 对象都有 length()方法，用于返回对象中包含的元素数量。
一个 XML 对象与一个只包含一个 XML 对象的 XMLList 之间，并没有显而易见的区别。
* Namespace 类型
传入 URI 或前缀加 URI，就可以初始化 Namespace 对象。
使用 prefix 和 uri 属性来取得 Namespace 对象中的信息。
* QName 类型
两个属性：uri 和 localName：返回创建对象时指定的命名空间的 URI（如果未指定命名空间，则返回空字符串），返回限定名中的内部名称。
## 19.2 一般用法
可以使用点号加特性或标签名的方式来访问其中不同的层次和结构。
想访问所有子元素，不管其名称是什么，也可以像下面这样使用星号（*）。
* 访问特性
为了区分特性名与子元素的标签名，必须在名称前面加上一个@字符，**attribute()** 方法并传入特性名，可以只访问 XML 对象的特性，不需要传入带@字符的特性名。
* 其他节点类型
```javascript
XML.ignoreComments = false; 
XML.ignoreProcessingInstructions = false; 
// 在设置了这两个属性之后，E4X 就会将注释和处理指令解析到 XML 结构中。
```
**nodeKind()** 方法可以得到 XML 对象表示的类型。
**hasSimpleContent()** 和**hasComplexContent()** 方法，可以确定 XML 对象中是只包含文本，还是包含更复杂的内容。
```javascript
employees.employee[0].hasComplexContent()
```
* 查询
使用两个点，则可以进一步扩展查询的深度，查询到所有后代节点。
descendants()方法不给这个方法传递参数的情况下，它会返回所有后代节点（与使用..*相同）。
parent()方法能够在 XML 结构中上溯，
```javascript
var allDescendants = employees..*; 
var allDescendants = employees.descendants(); 
```
* 构建和操作 XML
XML 字面量可以嵌入 JavaScript 变量，语法是使用花括号（{}）。
* 解析和序列化
五个设置都保存在 settings 对象中，通过 XML 构造函数的 settings()方法可以取得这个对象。
setSettings()方法中传入包含全部 5 项设置的对象，可以一次性指定所有设置。
defaultSettings()方法则可以取得一个包含默认设置的对象，
```javascript
XML.setSettings(XML.defaultSettings()); // 重置设置：
```
* 命名空间
使用 **setNamespace()** 并传入 Namespace 对象，也可以为给定元素设置命名空间。
## 19.3 19.4 全面启用 E4X
想完整地启用 E4X，需要将`<script>`标签的 type 特性设置为"text/javascript;e4x=1"。
# JSON
（JavaScript Object Notation，JavaScript 对象表示法）是 JavaScript 的一个严格的子集，是一种数据格式，不是一种编程语言。
## 20.1 语法
语法可以表示三种类型的值。**简单值**：但不支持 js 中的特殊值 undefined。**对象**：**数组**：。
JSON 不支持变量、函数或对象实例。
* 简单值
JSON 字符串必须使用双引号
* 对象
没有声明变量（JSON 中没有变量的概念）。其次，没有末尾的分号。
* 数组
对象和数组通常是 JSON 数据结构的最外层形式。
## 20.2 解析与序列化
JSON 数据结构解析为有用的 JavaScript 对象。
* json 对象
早期的 JSON 解析器基本上就是 eval()函数。
JSON 对象有两个方法：stringify()和 parse()，代表 JavaScript 对象序列化为 JSON 字符串和把 JSON 字符串解析为原生 JavaScript 值。
在序列化 JavaScript 对象时，所有**函数及原型成员**都会被有意忽略，值为 undefined 的任何属性也都会被跳过。
深拷贝：拷贝后是两个独立的、没有任何关系的对象。
* 序列化选项
JSON.stringify()还可以接收另外两个参数，第一个参数是个**过滤器**（可以是数组或者函数），第二个参数是**选项**，表示是否在 json 字符串中保留缩进，数值表示的是每个级别缩进的空格数，最大缩进空格数为 10。
如果是函数，那么传入的函数接收两个参数，属性（键）名和属性值，属性名只能是字符串，而在值并非键值对儿结构的值时，键名可以是空字符串。
函数返回的值就是相应键的值，函数返回了 undefined，那么此对应的属性会被忽略。
**第一次调用**这个函数过滤器，传入参数中的键是一个空字符串，而值就是 book 对象。
可以为任何对象添加 toJSON()方法，函数可以返回某个值，序列化后就返回该值，方法返回 undefined 时：如果包含它的对象嵌入在另一个对象中，会导致它的值变成 null，而如果它是顶级对象，结果就是 undefined。。
序列化某对象顺序：
```plain
(1) 如果存在 toJSON()方法而且能通过它取得有效的值，则调用该方法。否则，返回对象本身。
(2) 如果提供了第二个参数，应用这个函数过滤器。传入函数过滤器的值是第(1)步返回的值。
(3) 对第(2)步返回的每个值进行相应的序列化。
(4) 如果提供了第三个参数，执行相应的格式化。
```
* 解析选项
JSON.parse()方法可加另一个参数，是一个函数，称为**还原函数。**
还原函数返回 undefined，则表示要从结果中删除相应的键；返回其他值，则将该值插入到结果中。
# Ajax 与 Comet
2005 年 Garrett 提出，Ajax 技术的核心是 XMLHttpRequest 对象（简称 XHR），之前这种技术叫做远程脚本。
## 21.1 XMLHttpRequest 对象
IE7 之前 ActiveX 对象实现的，new ActiveXObject。
其他版本浏览器 new XMLHttpRequest(); 
* XHR 的用法
调用的第一个方法是 open(要发送的请求的类型，请求的 URL，是否异步发送请求的布尔值。)，URL 是相对于执行代码的当前页面，也可以使用绝对路径，open（）方法只是启动一个请求以备发送。
send()方法接收一个参数，即要作为请求主体发送的数据。
XHR 对象的属性：responseText，responseXML，status，statusText。
readyState 属性表示请求/响应过程的当前活动阶段，0，1，2，3，4。
必须在调用 open()之前指定**onreadystatechange**事件处理程序才能确保跨浏览器兼容性。
没有向 onreadystatechange 事件中传递 event 对象；必须通过 XHR 对象本身来确定下一步该怎么做。作用域问题：如果使用 this 对象，会导致函数执行失败，或者导致错误发生。
* HTTP 头部信息
XHR 对象也提供了操作这两种（请求和响应）头部信息的方法。
setRequestHeader()方法可以设置自定义的请求头部信息。调用 open()方法之后且调用 send()方法之前调用 setRequestHeader()。不要使用浏览器正常发送的字段名称。
getResponseHeader()方法并传入头部字段名称，取得相应的响应头部信息。
getAllResponseHeaders()方法取得一个包含所有头部信息的长字符串。
* GET 请求
查询字符串中每个参数的名称和值都必须使用 encodeURIComponent()进行编码。
* POST 请求
请求的主体提交，如果是表单需要将页面中表单的数据进行序列化。
## 21.2 XMLHttpRequest 2 级
* FormData
为序列化表单，首先创建了一个 FormData 对象，该对象 append()方法接收两个参数：键和值。
也可向构造函数中传入表单元素，也可以用表单元素的数据预先向其中填入键值对儿。
* 超时设定
XHR 对象添加了一个 timeout 属性，等待响应多少毫秒之后就终止。
如果在超时终止请求之后再访问 status 属性，就会导致错误。
* overrideMimeType()方法
用于重写 XHR 响应的 MIME 类型。
根据 MIME 类型，即使数据是 XML，responseXML 属性中仍然是 null。
将响应当作 XML 而非纯文本来处理。调用 overrideMimeType()必须在 send()方法之前。
## 21.3 进度事件
每个请求都从触发 loadstart 事件开始，接下来是一或多个 progress 事件，然后触发 error、
abort 或 load 事件中的一个，最后以触发 loadend 事件结束。
* load 事件
只要浏览器接收到服务器的响应，不管其状态如何，都会触发 load 事件。你必须要检查 status 属性，才能确保数据可用。
* progress 事件
onprogress 事件处理程序 event 对象，含着三个额外的属性：lengthComputable 进度信息是否可用的布尔值、position 已经接收的字节数和 totalSize（Content-Length 响应头部确定的预期字节数）。
## 21.4 跨源资源共享
CORS（Cross-Origin Resource Sharing，跨源资源共享）。
额外的 Origin 头部，其中包含请求页面的源信息，如果服务器认为这个请求可以接受，就在 Access-Control-Allow-Origin 头部中回发相同的源信息。
```javascript
Origin: http://www.nczonline.net 
Access-Control-Allow-Origin: http://www.nczonline.net 
```
* IE 对 CORS 的实现
IE8 中引入了 XDR，他与 xhr 不同之处，使 CSRF（Cross-Site Request Forgery，跨站点请求伪造）和 XSS（Cross-Site Scripting，跨站点脚本）的问题得到了缓解。
第一步是创建 XDomainRequest 实例代码，然后 open，再 send。
XDR 对象的 open()方法只接收两个参数：请求的类型和 URL。
所有 XDR 请求都是异步执行的。
只能访问响应的原始文本；没有办法确定响应的状态代码。
支持 POST 请求，XDR 对象提供了 contentType 属性，用来表示发送数据的格式。
* 其他浏览器对 CORS 的实现
都通过 XMLHttpRequest 对象实现了对 CORS 的原生支持。
跨域 XHR 对象为了安全这些限制是必需的。
```plain
不能使用 setRequestHeader()设置自定义头部。
不能发送和接收 cookie。
调用 getAllResponseHeaders()方法总会返回空字符串。
```
* Preflighted Reqeusts 
透明服务器验证机制，这种请求使用 OPTIONS 方法。IE 10 及更早版本都不支持。
* 带凭据的请求
默认情况下，跨源请求不提供凭据，将 withCredentials 属性设置为 true，可以指定某个请求应该发送凭据。
如果服务器接受凭证则 HTTP 头部来回应：Access-Control-Allow-Credentials: true。
IE 10 及更早版本都不支持。
* 跨浏览器的 CORS 
兼顾函数规则：是否存在 withCredentials 属性。再结合检测 XDomainRequest 对象是否存在。
## 21.5 其他跨域技术
* 图像 Ping 
动态创建图像经常用于图像 Ping。只能发送 GET 请求，无法访问服务器的响应文本。
* JSONP 
JSON with padding（填充式 JSON 或参数式 JSON），被包含在函数调用中的 JSON。
JSONP 由两部分组成：**回调函数**：是当响应到来时应该在页面中调用的函数。和**数据**：传入回调函数中的 JSON 数据。
```javascript
script.src = "http://freegeoip.net/json/?callback=handleResponse";
```
能够直接访问响应文本，支持在浏览器与服务器之间双向通信。但是不安全，确定 JSONP 请求是否失败并不容易。
* Comet 
服务器推送，服务器向页面推送数据的技术。有两种实现 Comet 的方式：**长轮询** 和**流**。
第一种**长轮询，** 服务器一直保持连接打开，直到有数据可发送。
第二种流行的 Comet 实现是 **HTTP 流** 。浏览器向服务器发送一个请求，而服务器保持连接打开，然后周期性地向浏览器发送数据。
通过侦听 readystatechange 事件及检测 readyState 的值是否为 3，就可以利用 XHR 对象实现 HTTP 流。
* 服务器发送事件
SSE（Server-Sent Events，服务器发送事件），服务器通过这个连接可以发送任意数量的数据。
* Web Sockets 
一个单独的持久连接上提供全双工、双向通信。
只有支持这种协议的专门服务器才能正常工作。
**wss://。**
要创建一个 WS，首先实例一个 WebSocket 对象并传入要连接的 URL：
```javascript
var socket = new WebSocket("ws://www.example.com/server.php"); 
```
send()方法发送数据，需要序列化。
服务器向客户端发来消息时，WebSocket 对象就会触发 message 事件。
只有 close 事件的 event 对象有额外的信息。有三个额外的属性，wasClean、code 和 reason。
* SSE 与 Web Sockets
只需读取服务器数据，那么 SSE 比较容易实现。
必须双向通信那么 Web Sockets 显然更好，组合 XHR 和 SSE 也是能实现双向通信的。
## 21.6 安全
# 高级技巧
## 22.1 高级函数
* 安全的类型检测
在任何值上调用 Object 原生的 toString()方法，都会返回一个[object NativeConstructorName]格式的字符串。每个类在内部都有一个[[Class]]属性，这个属性中就指定了上述字符串中的构造函数名。不能检测非原生构造函数的构造函数名。
```javascript
Object.prototype.toString.call(value)；//"[object Array]" 
```
IE 中以 COM 对象形式实现的任何函数，isFunction()内部实现以上代码的都将返回 false。
* 作用域安全的构造函数
思路：确认 this 对象是正确类型的实例。如果不是，那么会创建新的实例并返回。
```javascript
if (this instanceof Person){ 
} else { 
 return new Person(name, age, job); 
 }
```
* 惰性载入函数
表示函数执行的分支仅会发生一次。第一种就是在函数被调用时再处理函数，该函数会被覆盖为另外一个按合适方式执行的函数，对原函数的调用都不用再经过执行的分支了。
```javascript
function createXHR(){ 
 if(....){
   createXHR = function(){};
 }else......
 return createXHR();
｝
```
第二种实现惰性载入的方式是在声明函数时就指定适当的函数。
```javascript
var createXHR = (function () {
  if(...){
      return function () {
        // .....
    }
  }
})();
```
* 函数绑定
要创建一个函数，可以在特定的 this 环境中以指定参数调用另一个函数。
js 库实现了一个可以将函数绑定到指定环境的函数。这个函数一般都叫 bind()，它**接受一个函数**和**一个环境**，并返回一个在给定环境中调用给定函数的函数，并且将所有参数原封不动传递过去。
```javascript
function bind(fn, context){ 
 return function(){ 
 return fn.apply(context, arguments); 
 }; 
} 
```
ECMAScript 5 为所有函数定义了一个原生的 bind()方法，都是要传入作为 this 值的对象。
主要用于事件处理程序以及 setTimeOut 和 setInterval。
* 函数柯里化
创建已经设置好了一个或多个参数的函数。
基本方法：使用一个闭包返回一个函数。
柯里化函数通常由以下步骤动态创建：调用另一个函数并为它传入要柯里化的函数和必要参数。
ECMAScript 5 的 bind()方法也实现函数柯里化，只要在 this 的值之后再传入另一个参数即可。
## 22.2 防篡改对象
一旦把对象定义为防篡改，就无法撤销了。
* 不可扩展对象
Object.preventExtensions(某对象)。
Object.istExtensible()方法还可以确定对象是否可以扩展。
* 密封的对象
Object.seal()方法。
Object.isSealed()方法可以确定对象是否被密封了。
* 冻结的对象
Object.freeze()方法可以用来冻结对象。
Object.isFrozen()方法用于检测冻结对象。
## 22.3 高级定时器
在 JavaScript 中没有任何代码是立刻执行的，但一旦进程空闲则尽快执行。
定时器要记住的最重要的事情是，指定的时间间隔表示何时将定时器的代码添加到队列，而不是何时实际执行代码。
* 重复的定时器
两个问题：(1) 某些间隔会被跳过；(2) 多个定时器的代码执行之间的间隔可能会比预期的小。
可以用如下模式使用链式 setTimeout()。
```javascript
setTimeout(function(){ 
 //处理中
 setTimeout(arguments.callee, interval); 
}, interval); 
```
* Yielding Processes 
* 函数节流
使用定时器对该函数进行节流。
某些代码不可以在没有间断的情况连续重复执行。
目的是只有在执行函数的请求停止了一段时间之后才执行。
```javascript
function throttle(method, context) { 
 clearTimeout(method.tId); 
 method.tId= setTimeout(function(){ 
 method.call(context); 
 }, 1000); 
} 
```
## 22.4 自定义事件
事件是一种叫做观察者的设计模式，这是一种创建松散耦合代码的技术。
DOM 元素便是**主体**，你的事件处理代码便是**观察者**。
使用自定义事件有助于解耦相关对象，保持功能的隔绝。
触发事件的代码和监听事件的代码是完全分离的。
*封装了一个大型 EventTarget 函数 616 页*
## 22.5 拖放
拖放的基本概念很简单：创建一个绝对定位的元素，使其可以用鼠标移动。
*封装了一个大型*DragDrop *函数 622 页*
# 离线应用与客户端存储
## 23.1 离线检测
navigator.onLine 单独使用该属性不能确定网络是否连通。
online 和 offline。两个事件在 window 对象上触发。
## 23.2 应用缓存
使用一个描述文件（manifest file），列出要下载和缓存的资源。
要将描述文件与页面关联起来，可以在`<html>`中的 manifest 属性中指定这个文件的路径。
```javascript
<html manifest="/offline.manifest"> 
```
API 的核心是 applicationCache 对象，这个对象有一个 status 属性，表示应用缓存的如下当前状态。
swapCache()来启用新应用缓存。
## 23.3 数据存储
* Cookie
在客户端用于存储会话信息的。
最佳的浏览器兼容性，最好将整个 cookie 长度限制在 4095B（含 4095）以内。
cookie 由浏览器保存的以下几块信息构成：名称，值，域，路径，失效时间，安全标志。
document.cookie 属性可以设置为一个新的 cookie 字符串，最好每次设置 cookie 时都像下面这个例子中一样使用 encodeURIComponent()。
```javascript
document.cookie = encodeURIComponent("name") + "=" +encodeURIComponent("Nicholas"); 
```
**有一个封装 CookieUtil 对象函数，和子 cookie 函数。*
HTTP 专有 cookie 可以从浏览器或者服务器设置，只能从服务器端读取。
存储大量信息会影响到特定域的请求性能。cookie 信息越大，完成对服务器请求的时间也就越长。不要在 cookie 中存储重要和敏感的数据。
* IE 用户数据 
在 IE5.0 中，微软通过一个自定义行为引入了持久化用户数据的概念，每个文档最多 128KB 数据，每个域名最多 1MB 数据。
css 指定 userData 行为：
* Web 存储机制 
**Web Storage**最终成为了 HTML5 的一部。
Storage 类型提供最大的存储空间（因浏览器而异）来存储名值对儿，有以下方法：clear()，getItem(name)，key(index)，removeItem(name)，setItem(name, value)。
Storage 类型只能存储字符串。
**sessionStorage**对象存储特定于某个会话的数据，该数据只保持到浏览器关闭，数据只能由最初给对象存储数据的页面访问到。IE8 中可以强制把数据写入磁盘。
Firefox 2 中实现了 **globalStorage** 对象，指定哪些域可以访问，通过方括号标记使用属性来实现，globalStorage 对象不是 Storage 的实例，而具体的 globalStorage["wrox.com"]才是。
同源政策下面才可以访问同一个 **localstorage**对象。
对 Storage 对象进行任何修改，都会在文档上触发 storage 事件。
一般限制了 **2.5M**大小。
* IndexedDB 
在浏览器中保存结构化数据的一种数据库，异步进行的。因此，大多数操作会以请求方式进行。
在 Chrome 中叫 webkitIndexedDB。
每一次的 IndexDb 操作，都可以添加 error 和 success 事件处理程序。
```javascript
var indexedDB = window.indexedDB || window.msIndexedDB || window.mozIndexedDB || 
window.webkitIndexedDB; 
```
是使用对象保存数据，而不是使用表来保存数据。
indexDB.open()会返回一个 IDBRequest 对象，创建并打开一个数据库。
建立了与数据库的连接之后，下一步就是使用**对象存储空间**。
```javascript
var store = db.createObjectStore("users", { keyPath: "username" }); 
```
add()想象成插入新值，把 put()想象成更新原有的值。
**接下来**的所有操作都是通过事务来完成的，创建事务，只能通过事务来读取数据库中保存的对象。
 IDBTransaction 接口定义的常量表示，进行读写存储空间。
```javascript
var transaction = db.transaction(); 
// db.transaction("users", IDBTransaction.READ_WRITE); 这个事务能够读写 users 存储空间。
```
取得了事务的索引后，使用 objectStore()方法并传入存储空间的名称，就可以访问特定的存储空间。然后使用 get 或者 put 方法修改数据。
需要检索多个对象的情况下，则需要在事务内部创建**游标，** 在对象存储空间上调用 openCursor()方法可以创建游标，event.target.result 取得存储空间中的下一个对象。
默认情况下，每个游标只发起一次请求。要想发起另一次请求，必须调用下面的一个方法 continue(key)：，或者 advance(count)。
同时指定上、下界，使用 bound()方法，四个参数：：表示下界的键、表示上界的键、可选的表示是否跳过下界的布尔值和可选的表示是否跳过上界的布尔值。
在定义键范围之后，把它传给 openCursor()方法，就能得到一个符合相应约束条件的游标。
IndexedDB 的并发问题：每次成功打开数据库，都应该指定 onversionchange 事件处理程序。
同源，磁盘空间也有限制，火狐 50MB，chrome5Mb。火狐不允许本地文件访问 IndexedDB。
# 最佳实践
## 24.1 可维护性
* 什么是可维护的代码 
可理解性，直观性，可适应性，可扩展性，可调试性。
* 代码约定
匈牙利标记法来指定变量类型。
使用类型注释。
* 松散耦合 
* 编程实践 
尊重对象所有权；避免全局量；避免与 null 进行比较 ；使用常亮。
## 24.2 性能 
* 注意作用域
避免全局查找，避免 with 语句 ，
* 选择正确方法
避免不必要的属性查找 ：一旦多次用到对象属性，应该将其存储在局部变量中（提取公共变量，减少 O（n）访问次数）。
优化循环：减值迭代；简化终止条件；简化循环体；使用后测试循环。
展开循环：
避免双重解释：要提高代码性能，尽可能避免出现需要按照 JavaScript 解释的字符串。
原生方法较快；Switch 语句较快；取模，逻辑与和逻辑或都可以考虑用位运算来替换。 
* 最小化语句数
变量声明用逗号，迭代语句可以尝试将迭代值插入到最后使用它的语句中去。 
* 优化 DOM 交互
页面更新时候，最小化现场更新（使用文档片段）； 使用 innerHTML。
使用事件代理；注意 HTMLCollection（for 循环使用变量保存）。
发生以下情况时会返回 HTMLCollection 对象： 
```plain
进行了对 getElementsByTagName() 的调用； 
获取了元素的 childNodes 属性； 
获取了元素的 attributes 属性；
访问了特殊的集合，如 document.forms、document.images 等。 
```
## 24.3 部署 
* 构建过程
构建过程始于在源控制中定义用于存储文件的逻辑结构。
* 验证 
JSLint。
* 压缩
**代码长度**指的是浏览器所需解析的字节数，**配重**指的是实际从服务器传送到浏览器的字节数。
**HTTP 压缩**一起使用可以让 JavaScript 文件尽可能小，因此对整体页面性能的影响也会最小。
# 新兴的 API
## 25.1 requestAnimationFrame()
## 25.2 Page Visibility API
由以下三部分组成:document.hidden：document.visibilityState：visibilitychange 事件。表示页面是否由可见变得不可见。
IE 中 document.msHidden，而在 Chrome 的实现中则是 document.webkitHidden。
## 25.3 Geolocation API 
地理定位（geolocation）在浏览器中的实现是 navigator.geolocation 对象，第一个方法是 getCurrentPosition()，接收个参数：成功回调函数、可选的失败回调函数和可选的选项对象。
如果你希望跟踪用户的位置，那么可以使用另一个方法 watchPosition()。
## 25.4 File API
HTML5 在 DOM 中为文件输入元素添加了一个 files 集合，集合中包含一组 File 对象，每个 File 对象对应着一个文件。
* FileReader 类型
实现的是一种异步文件读取机制，它读取的是文件系统，提供以下几种方法：readAsText，readAsDataURL(file)，readAsBinaryString(file)，readAsArrayBuffer(file)。
progress、error 和 load 事件分别表示是否又读取了新数据、是否发生了错误以及是否已经读完了整个文件。
错误码是 1 表示未找到文件，是 2 表示安全性错误，是 3 表示读取中断，是 4 表示文件不可读，是 5 表示编码错误。
```javascript
reader = new FileReader(); 
```
* 读取部分内容
File 对象还支持一个 slice()方法，起始字节及要读取的字节数，返回一个 Blob 的实例，Blob 是 File 类型的父类型。
* 对象 URL 
也被称为 blob URL，好处是可以不必把文件内容读取到 JavaScript 中而直接使用文件内容。
创建对象 URL，可以使用 window.URL.createObjectURL()方法，并传入 File 或 Blob 对象。
**Chrome 中的实现叫 window.webkitURL.createObjectURL()。*
返回值是一个字符串，指向一块内存的地址。
* 读取拖放的文件
* 使用 XHR 上传文件
是以表单提交的方式来上传文件，使用 FormData 类型，调用 append()方法并传入相应的 File 对象作为参数。
```javascript
data = new FormData(); 
data.append("file" + i, files[i]); 
xhr.send(data);
```
## 25.5 Web 计时
Web 计时机制的核心是 window.performance 对象。对页面的所有度量信息，包括那些规范中已经定义的和将来才能确定的，都包含在这个对象里面。
## 25.6 Web Workers
解决浏览器冻结用户界面，此规范通过让 js 在后台运行解决这个问题。
* 使用 Worker 
要给 Worker 传递消息，可以使用 postMessage()方法，消息内容可以是任何能够被序列化的值，调用 terminate()方法就可以停止 Worker 的工作。
```javascript
var worker = new Worker("stufftodo.js"); 
worker.postMessage(“start! "); 
```
可以运行异步 JavaScript 代码，避免阻塞用户界面。在执行复杂计算和数据处理的时候，这个 API 非常有用；要不然，这些任务轻则会占用很长时间，重则会导致用户无法与页面交互。
# 附录 A
剩余参数的语法形式是三 个点后跟一个标识符，收集到一个数组中。
```plain
function sum(num1, num2, ...nums){}   
```
分布参数：就是在值的前面加三个点。
参数默认值：就是在形参赋值。
生成器：就是一个对象，每次能生成一系列值中的一个。需要通过 yield 操作符。
迭代器：一个对象，迭代一系列值并每次返回其中一个值，用 Iterator 构造函数。
数组领悟：用一组符合某个条件的值来初始化数组。
```javascript
array = [ value for each (variable in values) condition ]; 
// value 是实际包含在 array 中的最终值，condition 是条件，variable 是保存循环遍历在 values 中的每一项。
```
解构赋值：等号左边使用对应类型的字面量，
```javascript
var [value1，value2] = ["red"，"color"]；
var [, value] = ["color", "red"]; //只取局部数据
var [value2, value1] = [value1, value2]; //交换变量的值
var { name: personName, age: personAge } = person; 
```
代理对象：一个表示接口的对象，使用 Proxy.creare()方法，传入一个处理程序对象和一个可选的 prototype 对象来创建代理对象。
代理函数：Proxy.createFunction(处理程序对象 hander，一个调用捕捉器函数，一个可选的构造函数捕捉器函数）。
映射与集合：Map 类型也称简单映射，目的是保存一组键值对，get（），set（），delete（）方法。Set 类型，集合就是一组不重复的元素，集合中只有键。