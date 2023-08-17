---
title: 编写可维护的js
date: 2021-03-27
tags: 
  - 书籍
  - 前端
img: /messageBord.jpeg
---
笔记记录
<!-- more -->
### 行的长度
单行代码不能超过80个字符。
### 命名
Camel Case 小驼峰式大小写，> Pascal Case 大驼峰式大小写，以大写字母开始。
### 函数和变量
名词作为前缀变量名，动词作为前缀为函数名（can ，has， is ，get ，set）。
### 构造函数
命名是名词，大写开头。
### null
不能用作判断在函数里面是否传入了参数。
将变量初始赋值为null，最终可能赋值为对象，所以typeof null  返回的是 object
```javascript
var person;
  if(person != null) // 不好的写法，用来和未初始化的变量比较.

function doSomething(arg1,arg2){
  if(arg2 !=null){ // 不好的写法，检测是否传入了参数
  }
}
```
### 块语句
所有块语句 都应当使用 花括号。if for  while  do,,,while...   try....cathch....finally
### case 语句的连续执行
case都应当 以 break ，return，或者throw 做结尾。
```javascript
case "first":
case "second":
// 代码
    break；
```
### for
尽量少用continue。
for in 遍历对象的实例属性，还遍历原型继承来的属性，最好使用hasOwnProperty()方法过，滤出实例属性。
for in 错误用法 是遍历 数组。
### 变量声明
推荐使用var合并语句，代码更短，下载更快。
### 严格模式
“use strict”  最好不要在全局作用域中使用。
### 相等判断
都应当使用=== ， !== 因为不会发生强转。
### eval（）
参数是字符串，当作代码来执行。eval（“alert(‘hi’)”); 将弹出hi，别无它法才使用，严个模式下无法调用函数所在的上下文生命的变量或者函数，setTimeout（）和setInterval（）不要用字符串显示传参。
### js中提取css，css中提取js
在css中不要写css表达式，性能问题。
在js中不应当直接操作样式，以便保持和css的松耦合，定义桥梁，className类型名
### 单全局变量
单全局变量的意思是所创建的这个唯一全局对象名是独一无二的，所有的功能代码都挂载到这个全局对象上。
### 命名空间
是简单的通过全局对象的单一属性表示的功能性分组。
```javascript
var zakasBook ={};
zakasBook.mainPropty={}; 
```
### 零全局变量
使用一个立即执行的函数调用并将所有脚本放置其中，使用场景：脚本非常短，不需要与其他代码产生交互。
### 事件处理
当事件触发时候，事件对象event对象会作为回调参数出啊如事件处理程序中。
1隔离应用逻辑
2不要分发事件对象event，只需要其中的对象，可以传给应用逻辑的时候代替。例如 event.clientX。
### 避免空比较
typeof是一个运算符而不是函数，推荐无括号，他是检测函数的最佳选择。
```javascript
typeof ads === ‘function’   
```
instanceof检查引用值的类型 date array Error Object
```javascript
value instanceof Date
```
判断属性是否存在的最好的方法是使用in运算符
```javascript
if（’count’ in object）
```
### 配置数据从代码中分离出来，简单理解就是环境变量。
### 错误类型有7种，所有错误类型都继承Error。
### 用try catch，和throw处理错误。
### 对象不能随便动（原生，Bom，Dom，类库对象）
不覆盖方法，不新增方法，不删除方法。
一般使用继承方式对对象进行扩充。
### 基于对象的继承
叫原型继承，Object.create(某个对象，第二个参数)，第二个参数对象中的属性和方法将添加到新的对象中。
### 基于类型的继承
是通过构造函数实现的，而非对象。需要访问被继承对象的构造函数。
首先，原型继承，然后构造器继承：调用超类的构造函数时传入新建的对象作为其this的值。
### 阻止修改
Object.preventExtension(对象)锁定对象。 Object.isExtensible(封锁的对象) === false；
Object.seal()函数来密封一个对象，Object.freeze()函数来冻结一个对象。
### 浏览器特性检测
比如检测document.getElementById()存在？不存在就判断doument.all()存在。
### 避免特性推断，避免浏览器推断。
尽可能的使用特性检测，其次是用户代理检测，永远不要使用浏览器推断。

