[toc]

 <!--

 * @程序员: 陆飞名
 * @Date: 2022-02-09 17:36:03
 * @LastEditTime: 2022-03-14 14:39:44
 * @最后保存: 陆飞名
 * @FilePath: \web\前端\笔记\js笔记.md
 * @特征: 全班最厉害的学生
-->



<style>
  * {
    font-family: consolas;
  }
  hr {
    margin-top: 20px;
    margin-bottom: 20px;
    background: cyan;
    height: 3px;
  }
</style>

<!-- 以上为优化,并非笔记 -->

##  引入js代码

<br/>

行内式:

<br/>

```html
  <input type="button" value="111" onclick="alert(111)">
  <!-- 当点击标签时,就会执行赋值给onclick的代码 -->
```

<br/>

内嵌式:

<br/>

```html
  <script>
    alert(111);
  </script>

  <!--还有其他属性,defer 等html加载完时才加载javascript文件 -->
```

<br/>

外部式:

<br/>

```html
  <script src="引入的javascript文件">
    // 如果用了外部式,就不能用内嵌式
  </script>
```



<hr/>



alert 在网页输出警示框

```javascript
  alert(111);
```



<hr/>



prompt 和alert差不多,弹出一个输入框

```javascript
  prompt('请输入字符');
  // 返回值为字符串
```



<hr/>



##  console 控制台

<br/>

console.log 在控制台输出日志

```javascript
  console.log("程序开始运行");
```

console.dir 显示对象的各个属性方法

```javascript
console.dir(obj);
```



<hr/>

##  变量

<br/>

var 定义变量

```javascript
  var value;
  // 定义一个名为value的变量
  // 可以给value赋整数,字符,字符串...
  value = 10;
  // 也可以这样
  var age = 10;
  // 初始化
```

<br/>

使用变量

```javascript
  var my_name = 19;
  alert(my_name);
```
<br/>

也可以多个变量命名和初始化

```javascript
  var a,b,c,d,e,f;

  var g = 1,
      h = 2,
      j = 3,
      k = 4,
      l = 5;
```

<br/>

如果变量未赋值输出结果就是 undefined

```javascript
  var a;
  document.write(a);
```

<br/>

也可以不声明

```javascript
  a = 10;
  // 这样是可行的
```

<br/>

变量名命名:

```javascript
  var A;
  var a;
  // 区分大小写
  // var 1;
  // 开头不能为数字(开头可以是字母,下划线,$)
  var $aaa;
  // 开头可以是美元符号
  // var $111
  // 虽然开头可以是美元符号,但美元符号后面不能是数字
  var _sss;
  // 开头可以是下划线

  // var for;//不可以是关键字

```

变量自增自减

```javascript
  var a = 1;
  a++;//返回值1,a增加1
  ++a;//返回值2,a增加1
  // a-- 和 --a 同理 
```



<hr/>



##  数据类型

* 10,1.1 数字类型 默认值 0 <br/>
  1. 1.1 浮点数 <br/>
  2. 1 整数 <br/>
  3. 010 在javascript中在数字面前加0就是8进制数 <br/>
  4. 0x10 在javascript中在数字面前加0x就是16进制数 <br/>
  5. Infinity 无穷大<br/>
  6. -Infinity 无穷小<br/>
  <br/>
* '111' 字符串类型 默认值 ''

* true,false 布尔值 默认值 false

* undefined 未定义 默认值 undefined

* null 空 默认值 null

* NaN 非数值

* object 复杂数据类型

<br/>

数据类型加减

<br/>

如果一个字符串里面全是数字:

<br/>

100 - '101'

返回 -1

<br/>

如果 字符串与数字相加：

100 + 'aaa'

返回 '100aaa'

<br/>
<br/>

字符串:

当字符串里面有单引号时

```javascript
  // var a = '1111'111'1111'; 错误
  var = a = '11111\'1111\'11111';//可以使用转义字符对单引号进行转义
  var = a = "11111'1111'11111";//也可以用双引号包裹单引号
```

转义字符

\n 换行
<br/>
\\\ 反斜杠

\\' 单引号

\\" 双引号

\\t 制表符

\\b 空格

布尔类型:

参与计算时:

true 相当于整数的1

false 相当于整数的0

<br/>

数据类型转换

<br/>
<br/>

转化成字符串

1. toString() 转化成字符串<br/>
   ```javascript
    var num = 1;
    num.toString();
    // 返回'1',num值不变
   ```
2. String() 转化成字符串<br/>
    ```javascript
      var num = 1;
      String(num);
      // 返回'1',num值不变
    ```
3. num + '字符串'<br/>
    ```javascript
      console.log(num + '');
    ```


转化成数字

1. parseInt(string) 将string转化成整数数值
    ```javascript
      parseInt('1111');
      // 返回 1111
    ```
2. parseFloat(string) 将string转化成浮点数
    ```javascript
      parseFloat("11.11");
      // 返回 11.11
    ```
3. Number(string) 将string转化成数值
    ```javascript
      Number("11.131");
      // 返回 11.131
    ```

这几个都有一个共同的特点,也就是转化'120px'时,它就会吧单位去掉


<br/>
<br/>

转化成布尔型

1. Boolean() 把其他类型转化成布尔值
    ```javascript
      Boolean('');
      // false
      Boolean(0);
      // false
      Boolean(NaN);
      // false
      Boolean(null);
      // false
      Boolean(undefined);
      // false
      Boolean('as');
      // true
      Boolean(12);
      // true


<hr/>



## Number 关于整数的类

```javascript
  Number.MAX_VALUE 在js中可以使用的最大的整数
  Number.MIN_VALUE 在js中可以使用的最小的整数
```

isNaN 判断NaN,是别的类型的返回false,NaN返回true

```javascript
  alert(Number.isNaN(NaN));
  // 输出true
```



<hr/>



isNaN 判断非数字,是数字返回false,不是返回true

```javascript
  alert(isNaN(10));
  // 输出false
```

如果字符串里全是数字也会返回false

```javascript
  alert(isNaN('1111'));
  // 输出false
```



<hr/>



字符串属性:

1. str.length 获取字符串长度

2.  str.indexOf arr.indexOf 返回字符在字符串中的第一个出现位置 如果在字符串中没有找到字符，返回-1 

   ```javascript
   var str = 'adsfeewr';
   console.log(str.indexOf(d));// 返回 1
   ```

 3. str.lastIndexOf 返回某元素在数组中的最后一个出现位置 如果在数组中没有找到元素，返回-1

 3. str.charAt()  str[1] == str.char(i)

 3. str.charCodeAt(index)  获取指定位置处字符的ASCII码(index索引号)

 3. str.concat(字符串) 拼接字符串

    ```javascript
    var str = '123';
    console.log(tr.concat('456'));// 返回 123456
    ```
    
 3. str.substr(截取的起始位置,截取几个字符)

    ```javascript
    str = '12345678';
    console.log(str.substr(2,2));// 返回 34
    ```
    
    
    
 3.  str.replace('字符1','字符2');//把第一个找到的字符2替换成字符1

    ```javascript
    var str = '123123';
    console.log(str.replace('1','3'));// 返回 121123;
    ```
    
 3. str.split('分隔符');

    ```javascript
    var str = '111a222a333a444';
    console.log(str.split('a')); // 返回 ['111','222','333','444']
    ```
    

<hr/>



typeof 检查数据类型

```javascript
  console.log(typeof '1a11');
  // 输出 string
```



<hr/>



##  数据在控制台输出的颜色

* 字符串 黑色

* 数字,布尔值 蓝色

* undefined,null 灰色 



<hr/>



比较运算符

javascript 和别的都差不多,就增加了

1. === 数据类型和数值必须都相等
2. !== 数据类型和数值必须都不相等



<hr/>


逻辑运算符

* && 逻辑与 and
* || 逻辑或 or
* ! 逻辑非 not



<hr/>

运算符优先级:

1. 小括号
2. 一元运算符 ++ -- !
3. \* /
4. \+ \-
5. == != <=
6. &&
7. ||
8. =
9. ,



<hr/>



分支结构

if 分支

```javascript
  if (条件表达式) {
    // 执行语句
  }
```

<br/>

实例

```javascript

  var a = 10;
  var b = 5;

  if (a > b){
    console.log(a); 
  }
  // 输出10
```

<br/>

if ... else

实例

```javascript
  if (3 > 5) {
    // 条件为true执行这段代码
    alert(111);
  } else {
    // 条件为false执行这段代码
    alert(222);
  }
```

<br/>

if ... else if ... else

实例
```javascript
  if (3 > 5) {
    alert(111);
  } else if (6 > 5) {
    // ...
  } else if {
    ...
  } /* ... */ else {
    // ...
  }
```

<br/>

三元表达式

实例

```javascript
  3 > 4 ? alert(3) : alert(4);
  // 条件表达式 ? 表达式1 : 表达式2
  // 如果左边的条件表达式是true,执行表达式1,否则执行表达式2 
```

<br/>

switch 语句

其实和c,c++差不了多少

实例

```javascript
  var a = 10;
  switch(a) {
    case 值1:
      // 执行语句1
      break;
    case 值2:
      // 执行语句2
      break;
    case 值3:
      // 执行语句3
      break;
    case 值4:
      // 执行语句4
      break;
    default: 
      // 上面条件都不成立执行的语句
  }
```



<hr/>



##  循环结构

for 循环

```javascript
    for (循环初始化;条件表达式;循环增量) {
      //执行语句 
    }
```

<br/>

实例

```javascript
    for ( var a = 1 ; a < 10 ; a++) {
      alert(a);
    }
```

<br/>

for 循环第二种

```javascript
  for (变量 in 对象){
    // 和python差不多,可以对对象进行遍历
  }
```

这样就会从1到9输出警示框

while 条件循环

实例

```javascript
  var i;
  while (i != 100) {
    prompt('请输入数字');
    if (i != 100) {
      alert('答错了');
    }
  }
  alert('答对了');
```

<br/>

do...while 循环

实例

```javascript
  var userPassword;

  do {
    userPassword = prompt('请输入密码');
    if (userPassword != 12345) {
      alert('密码错误!');
    }
  }while(userPassword != 12345);
  alert('密码正确');
```

break continue 不用介绍了吧

```javascript
  while (/*...*/) {
    //....
    break;
  }
```



<hr/>



## 数组

创建数组

用new来创建

  ```javascript
    var arr1 = new Array();
    // 创建空数组
    var arr2 = new Array(1,2,3,4);
    // 创建拥有4个元素的数组
  ```

<br/>

直接创建

  ```javascript
    var arr1 = [];
    var arr2 = [1,2,3,4];
  ```

<br/>

里面可以放任何数据

```javascript
  var arr = [1,true,'sad']
```

<br/>

获取数组元素

```javascript
  var arr = [1,2,3,4,5];
  console.log(arr[1]);// 2
```

<br/>

数组属性

- arr.length 数组长度

- arr.toString 把数组变成字符串 不改变原数组

	```javascript
		array = [1,23,3];
		console.log(array.toString());// 返回 1,23,3
		console.log(array);// 返回 [1,23,3]
	```

- arr.join 拼接字符串
    ```javascript
      var arr = ['aa','bb','cc','dd'];
      console.log(arr.join('|'));// 返回 aa|bb|cc|dd
    ```

- arr.shift 删除数组的第一个元素
  ```javascript
  	var arr = [1,2,3,4];
  	arr.shift();// 返回新数组的长度
  	console.log(arr); // 输出 2,3,4
  ```

- arr.unshift(参数1,[参数2[,参数3[...]]]) 向数据的开头增加一个或多个元素 
  ```javascript
  	arr = [3,4,5,6,7];
  	arr.unshift(1,2);// 返回新数组的长度
  	console.log(arr);// 输出 1,2,3,4,5,6,7
  ```

- arr.push 添加元素
    ```javascript
      var arr = [1,2,3,4,5];
      arr.push();// 返回值 新数组的长度
      console.log(arr);// 输出 1,2,3,4,5,6
    ```

- arr.pop 删除元素
  ```javascript
  	var arr = [1,2,3,4,5];
  	arr.pop();// 返回值 删除的值
  	console.log(arr); 输出 1,2,3,4
  ```

- arr.concat 连接两个数组,并返回一个新数组
    ```javascript
      var arr = [1,2,3];
      console.log(arr.concat([4,5,6]));// 返回 1,2,3,4,5,6
    ```

- arr.slice 复制数组的一部分,不会改变原数组,有两个参数,第一个参数表示复制的第一个元素的索引,第二个参数表示最后一个复制元素的后一个元素的索引（可选的,如果没有第二个参数，则复制从第一个参数表示的元素索引的元素到数组结尾

    ```javascript
      var arr = [1,2,3,4];
      var arr2 = arr.slice(0,2);
      console.log(arr2);// 返回值 1,2
    ```

- arr.sort 对数组进行升序排序
    ```javascript
      var arr = [1,5,2,3];
      console.log(arr.sort());// 返回值 1,2,3,5
    ```

- arr.reverse 反转数组元素 
    ```javascript
      var arr = [1,2,3,4];
      console.log(arr.reverse());// 返回值 4,3,2,1
    ```

- arr.indexOf 返回某元素在数组中的第一个出现位置 如果在数组中没有找到元素，返回-1
    ```javascript
      var arr = [1,2,5,4];
      console.log(arr.indexOf(5));// 返回值 3
    ```

- arr.lastIndexOf 返回某元素在数组中的最后一个出现位置 如果在数组中没有找到元素，返回-1
    ```javascript
      var arr = [1,2,3,1,4,5,1,3];
      console.log(arr.lastIndexOf(1));// 返回值 7
    ```

- arr.every 测试数组中的所有元素是否通过了函数中的测试
    [图片](http://127.0.0.1:5500/前端/img/5.jpg)

- 剩下的到这里
    [列表剩余的属性](https://zhuanlan.zhihu.com/p/113668735)

数组增加元素

1. 修改 arr.length 长度
    ```javascript
      var arr = [1,2,3];
      arr.length = 10;// 没赋值的就会填充undefined
      arr[3] = 4;
    ```
2. 数组越界
    ```javascript
      var arr = [1,2,3];
      arr[3] = 4;
    ```



<hr/>



##	函数

声明+定义 函数

function 声明函数

```javascript

  function a() {
    // 代码
  }
```

将函数赋给变量
```javascript
  var fun = function(/*...*/) {
    // ...
  }
```

调用函数

函数名()

```javascript
  a()
```

函数参数

```javascript
  function func(name) {
    alert('你好,' + name);
  }
  func('张三');// 输出 你好,张三

  function func2(name1,name2) {//也可以有多个参数
    //...
  }
```

返回值

```javascript
  function a() {
    return 10;
  }
  alert(a());// 输出 10
```

<br/>

arguments 提供参数列表(无论传入多少个参数都可以纳入参数列表)(虽然是数组,但只有length属性)

```javascript
  function func() {
    arguments[0];//访问第一个参数
  }
```

<br/>

闭包

```javascript
  function func() {
    document.write('111<br/>');
  }

  function fun(func) {
    function wrap() {
      document.write('开始调用<br/>');// 给func再加几条执行语句
      func();// 调用func函数
      document.write('结束调用<br/>');
    }
    return wrap();// 把新的函数返回
  }

  func = fun(func);
  func();
```

<br/>

结果

开始调用<br/>
111<br/>
结束调用<br/>



立即执行函数

1. (function(形参) {执行代码})(实参)

   ```javascript
   (function(a) {
     console.log(a);
   })(1);// 输出1
   
   (function b(a) {
     console.log(a);
   })(1);// 输出1
   b();//报错
   ```

2. (function(形参) {执行代码}(实参))

   ```javascript
   (function(a) {
     console.log(a);
   }(1));
   
   (function b(a) {
     console.log(a);
   })(1);
   b();// 报错
   ```





<hr/>



## 类和对象

创建方法

1. 字面量
    ```javascript
      // var obj = {};
      // 空对象
      var obj = {
        name: '张三',// 属性
        age: 18,
        sex: '男',
        sayHi: function(name) {
          // 创建方法
          alert(name);
        }
      }
    ```

<br/>

2. 用 new Object来创建对象
    ```javascript
      var obj = new Object();
      obj.name = '111';
      // ...
    ```

<br/>

3. 使用构造函数
    ```javascript
      function 构造函数名(参数) {
        this.属性 = 值;
        this.方法 = function(/*...*/) {
          // ...
        }
        // ...
      }
    
      //创建
    
      var obj = new 构造函数名(参数);
    
    ```

    实例

    ```javascript
      function dog(name,age,color,type,specialBehavior) {
        this.name = name; 
        /* 
          * this指实例化的对象 
          * this.name 是实例化对象的name
          * name 指参数 
        */
        this.age = age;
        this.color = color;
        this.type = type;
        this.specialBehavior = specialBehavior;
      }
    
      var topDogSpecialBehavior = function() {
        alert('打你!');
      }
    
      var topDog = new dog('米奇',10,'白色','高级狗',topDogSpecialBehavior);
      console.log(topDog.name);// 米奇
      console.log(topDog.age); // 10
      // ...
    ```



<br/>

调用
1. obj.属性/方法来调用
  ```javascript
    alert(obj.name);
    alert(obj.sayHi('hello'));
  ```
2. obj['属性/方法']
  ```javascript
    alert(obj['name']);
    alert(obj['sayHi(hello)']);
  ```

<br/>

遍历 

实例 

```javascript
  var obj = {
    name: '111',
    age: 11,
    sex: '男'
  }

  //  遍历

  for (i in obj) {
    alert(i);
    // 输出 name,age,sex
    alert(obj[i]);
    // i返回的是属性名 输出 111,11,男 
```

<hr/>

MDN 查询javascript函数和对象

[MDN网址](https://developer.mozilla.org/zh-CN/)

<hr/>

## Math 数学计算

Math.max() 返回传进来的参数里面的最大值

```javascript
Math.max(1,2,3,4,5);//返回5
var array = [1,2,6,5,3];
Math.max(...array);// 返回5 如果传进来数组,那前面要加三个点
```

Math.min() Math.max() 取反

```javascript
Math.min(1,2,3,4,5);//返回1
var array = [1,2,6,5,3];
Math.min(...array);// 返回1
```



Math.PI 圆周率 精确到15位

```javascript
Math.PI == 3.141592653589793;// 返回true
```

Math.floor() 向下取整

```javascript
Math.floor(1,5);// 返回 1
```

Math.ceil() 向上取整

```javascript
Math.ceil(1,5);// 返回 2
```

Math.round() 四舍五入

```javascript
Math.round(1.3);// 返回 1
Math.round(1.6);// 返回 2
```

Math.abs() 绝对值

```javascript
Math.abs(1);// 返回 1
Math.abs(-1);// 返回 1
```

Math.random() 返回一个随机的小数

```javascript
Math.random()
```

<hr/>

## Date 获取日期

```javascript
var date = new Date();
console.log(date);// 返回 Mon(星期) Mar(月) 14(日) 2022(年份) 17:32:36 GMT+0800 (中国标准时间)
```

getFullYear0 获取当年
getMonth() 获取当月（0-11）
getDate() 获取当天日期
getDay() 获取星期几 （周日0到周六6）
getHours() 获取当前小时
getMinutes() 获取当前分钟
getSeconds() 获取当前秒钟

valueof() getTime() 获取离1970-1-1的毫秒时间

+new date() Date.now() 获取总毫秒数

其他用法请看这个 ----> [Date的更多用法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date)

<hr/>

## instanceof  判断左边的是不是右边的子类

```javascript
arr = [1,2,3]
console.log(arr instanceof Array);// true
console.log('1111111' instanceof Array);// false
```

<hr/>

## Array  数组相关操作

Array.isArray() 判断是不是数组

```javascript
Array.isArray([1,2,3]);// true
Array.isArray(1);// false
Array.isArray('1');// false
Array.isArray({});// false
```

<hr/>

in 判断这个属不属于那个,用于对象



 <hr/>

# DOM操作



## document 关于文档操作

document.getElementById(id) 获取有 id id的标签

```javascript
var timer = document.getElementById('time');// 获取有time id的标签 返回元素对象
```

```html
<div id='time'>2019-9-9</div>
```

document.getElementsByTagName('标签'); 获取所有是标签的标签,返回伪数组

```javascript
var lis = document.getElementsByTagName('li');// 获取所有是li标签的标签
```

```html
<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
</ul>
```

如果想拿到ol里面的li,可以用 getElementsByTagName('ol')[0].getElementsByTagName('li') 获取

```html
<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
</ul>

<ol>
    <li>6</li>
    <li>7</li>
    <li>8</li>
    <li>9</li>
    <li>10</li>
    <!--获取ol里面的li标签-->
</ol>
```

```javascript
// 可以这样获取

var ol = getElementsByTagName('ol');// 获取ol标签
var li = ol[0]/*因为getElementsByTagName返回的是伪数组,还要再用一下下标获取第一个ol*/.getElementsByTagName('li');//获取li标签
```

document.getElementsByClassName('类名') 和 getElementsByTagName 差不多,选择有这个类的标签

document.querySelector('#id/.类名/标签') 返回第一个找到的元素对象

```javascript
document.querySelector('#div');
document.querySelector('.div');
document.querySelector('div');
```

document.querySelectorAll('#id/.类名/标签') 返回所有找到的元素对象,也是伪数组

document.body 获取body元素

```javascript
var bodyEle = document.body;// 获取body元素
```

document.documentElement 获取html元素

```javascript
var htmlEle = document.documentElement;// 获取html元素
```

事件

```html
<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <button id="btn">唐伯虎</button>
  <script>
      var btn = document.getElementById('btn');// 先获取标签
      btn.onclick/*鼠标点击时运行的函数*/ = function() {
          alert('hello!');
      } 
  </script>
</body>
</html>
```

当用鼠标点击按钮时就会运行alert('hello') 代码

鼠标事件

<table>
    <tr>
        <td>鼠标事件</td>
        <td>触发条件</td>
    </tr>
    <tr>
        <td>onclick</td>
        <td>鼠标点击左键</td>
    </tr>
    <tr>
        <td>onmouseover</td>
        <td>鼠标经过</td>
    </tr>
    <tr>
        <td>onmouseout</td>
        <td>鼠标离开触发</td>
    </tr>
    <tr>
        <td>onfocus</td>
        <td>获取鼠标焦点</td>
    </tr>
    <tr>
        <td>onblur</td>
        <td>失去鼠标焦点</td>
    </tr>
    <tr>
        <td>onmousemove</td>
        <td>鼠标移动触发</td>
    </tr>
    <tr>
        <td>onmouseup</td>
        <td>鼠标弹起触发</td>
    </tr>
    <tr>
        <td>onmousedown</td>
        <td>鼠标按下</td>
    </tr>
    <tr>
      <td>oncontextmenu</td>
      <td>右键菜单</td>
  	</tr>
  	<tr>
      <td>onscroll</td>
      <td>滚动滚动条</td>
  	</tr>
  	<tr>
      <td>onmouseenter</td>  
      <td>鼠标经过(当碰到子标签时不会触发)</td>
  	</tr>
</table>

<br/><br/>


<hr/>

通过 document.getElementById ...取到的对象的属性的方法

ele.innerText 标签中的文本

```html
<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <button id="btn">唐伯虎</button>
  <script>
      var btn = document.getElementById('btn');
      btn.innerText;//访问button里面的文本
      btn.innerText = '123454';// 也可以修改里面的文本
  </script>
</body>
</html>
```

ele.innerHTML 使用HTML编辑内容

```html
<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id='btn'></div>
  <script>
      var btn = document.getElementById('btn');
      btn.innerText;//访问button里面标签和文本
      btn.innerText = '<strong>11111</strong>';// 用html编辑
  </script>
</body>
</html>
```

ele.属性 修改标签属性

```html
<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div style='color: red;'>111</div>
  <script>
      var btn = document.getElementById('btn');
      btn.style;// 访问style属性
      btn.style = 'color: green';// 修改style属性
  </script>
</body>
</html>
```

ele.style属性

```html
<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div style='color: red;'>111</div>
  <script>
      var btn = document.getElementById('btn');
      btn.style.backgroundColor = 'green';// 修改背景颜色
      btn.style.width = '12px';// 修改宽度
  </script>
</body>
</html>
```

ele.className = '类名' 指定类名

ele.className  = 'box';

<hr/>

ele.classList 类名数组

```javascript
ele.classList.add('three');// 添加类名
ele.classList.remove('one');// 删除类名
ele.classList.toggle('four');// 如果有这个类名就删除,没有就添加
```



<hr/>

ele.getAttribute('属性');//得到属性值(自己定义的属性)

ele.setAttribute('属性',设置的值); //设置属性值(自己定义的属性)

ele.removeAtttribute('删除属性');//删除属性(自己定义的属性)

```html
<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div myWidth='111' width='111' id='div'></div>
  <!-myWidth是自定义属性,width是自带的属性--->
  <script>
      var div = document.getElementById('div');
      console.log(div.myWidth);// 返回 undefined
      console.log(div.width);// 返回 111
      console.log(div.getAttribute('myWidth'));// 返回 111
      console.log(div.getAttribute('width'));// 返回 111
  </script>
</body>
</html>
```

ele.dateset.属性 获取开头有date的属性

```html
<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div date-width='111' width='111' id='div'></div>
  <!-myWidth是自定义属性,width是自带的属性--->
  <script>
    var div = document.getElementById('div');
    console.log(div.dateset.width);// 返回 1111 dateset是一个对象
  </script>
</body>
</html>
```

<hr/>

## 节点操作

nodeType 节点类型

<table>
    <tr>
        <td>1</td>
        <td>元素节点</td>
    </tr>
    <tr>
        <td>2</td>
        <td>属性节点</td>
    </tr>
    <tr>
        <td>3</td>
        <td>文本节点(包括文字,空格,换行)</td>
    </tr>
</table>

nodeName 节点名称<br/>nodeValue 节点值

ele.parentNode 获取最近的父元素节点<br/>ele.childNodes 获取所有子节点(伪列表)<br/>ele.children 获取所有子元素节点<br/>ele.firstElementChild 获取第一个子元素节点<br/>ele.lastElementChild 获取最后一个子元素节点<br/>ele.nextSibling 返回当前元素的下一个兄弟节点,找不到到则返回可null,也是包含所有类型的节点<br/>ele.previousSibling 返回当前元素的上一个兄弟节点,找不到到则返回可null,也是包含所有类型的节点<br/>ele.nextElementSibling 返回当前元素的下一个兄弟节点,找不到到则返回可null,包含元素节点<br/>ele.previousElementSibling 返回当前元素的上一个兄弟节点,找不到到则返回可null,包含元素节点<br/>

### 创建节点和添加节点

创建:

```javascript
var li = document.createElement('li');// 创建节点 一次性用品
```

添加

```javascript
var ul = document.querySelector('ul');
ul.appebdClild(li);// 将li添加ul里面最后面
```

插入

```javascript
var ul = document.querySelector('ul');
ul.insertBefore(li,ul.children[0])// 插入到最前面
```

删除

removeChild();删除子元素

```html
<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="../css/index.css" type="text/css">
  <script type="text/javascript" src="../js/index.js" defer></script>
</head>
<body>
  <ul id="ul">
    <li>熊大</li>
    <li>熊二</li>
    <li>光头强</li>
  </ul>
  <script>
    var ul = document.getElementById('ul');
    var li = ul.firstElementChild;
    ul.removeChild(li);// 删除第一个元素
  </script>
</body>
</html>
```

复制

```javascript
var ul = document.querySelector('ul');
var li1 = ul.children[0].cloneNode();// 浅拷贝,只复制了标签,里面的内容没被复制
var li2 = ul.children[0].cloneNode(true);// 深拷贝,复制标签,里面的内容也被复制
```

<hr/>

document.write

```javascript
document.write('<br/>');// 向文档流写入<br/>
document.write('<div>1111</div>');// 向文档流写入标签
```

如果页面加载完毕,再用document.write,会导致页面重绘

<hr/>

## 高级事件

ele.addEventListener();//添加事件侦听器

```javascript
var btns = document.querySelectorAll('button');
btns[0].addEventListener('click'/*侦听事件为onclick*/,function() {
  // 赋值的函数
  alert(111);
});
btns[0].addEventListener('click',function() {
  alert(222);
});//还可以添加多个侦听器
/*
 * 如果点击了第一个按钮,那就会分别弹出警示框111,222
 * 侦听器说明了就是为一个标签添加多个同样类型的事件,最后添加的事件侦听器不会覆盖之前增加的事
 * 件侦听器
 */
```

<hr/>

ele.removeEventListener 删除事件(解绑事件)

```javascript
var divs = document.querySelectorAll('div');

div[0].addEventListener('click',fn);

function fn() {
  alert(111);
  div[0].removeEventListener('click',fn);// 传进来之前给这个标签增加的函数,就可已删除掉这个事件了
}
```

捕获阶段和冒泡阶段

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" type="text/css" href="../css/index.css">
  <script type="text/javascript" src="../js/index.js" defer></script>
</head>
<body>
  <div class="father">
    <div class="son">son</div>
  </div>
  <script>
    var son = document.querySelector('.son');
    son.addEventListener('click',function() {
      alert('son');
    },false/*默认值,在冒泡阶段运行这个函数*/);
    father.addEventListener('click',function() {
      alert('father');
    },false/*默认值,在冒泡阶段运行这个函数*/);
    /*
     * 如果传入false,点击了son盒子时就会弹出son,再弹出father
     * 如果传入true,点击了son盒子时就会弹出father,再弹出son
     */
  </script>
</body>
</html>
```

捕获阶段 document -> html -> body -> .father -> .son;

冒泡阶段 .son -> .father -> body -> html -> document

## Event 点击事件

event 包含了鼠标点击的坐标,包含了用户按哪个键

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
  <div id="d1">123</div>
  <div id="d2">123</div>
  
  <script>
    var div1 = document.querySelector('#d1');
    var div2 = document.querySelector('#d2');
    
    div1.onclick = function(event) {
      /*可以在参数里面写event就可以使用了*/
      console.log(event);
    }
    
    div2.onclick = function(e) {
      /*可以写e,也可以照常使用*/
      console.log(e);
    }
    
    
  </script>
</body>
</html>
```

e.target 获取点击的对象

```javascript
var div = document.querySelector('div');
div.addEventListener('click',function(e) {
  console.log(e.target);// 返回 <div>...</div>
});
```

e.target 和 this的区别

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
  </ul>
  <script>
    var ul = document.querySelector('ul');
    var li = ul.firstElementChild;
    ul.onclick = function(e) {
      // 假设如果点到的是li元素
      console.log(this);// 输出 <ul>...</ul>
      console.log(e);// 输出 <li>...</li>
		}
    /*
     * 原理: 因为冒泡阶段时的时候是 li -> ul,所以ul也可以被激活,所以打印出来this的是<ul>...</ul>
     * 但点击的是ul中的li,说以输出e时是<li>...</li>
     */
  </script>
</body>
</html>
```

e.type 输出事件类型

```javascript
var div = document.querySelector('div');

div.addEventListener('click',fn);

function fn(e) {
  console.log(e.type);// 输出 click
}
```

 阻止默认行为

```javascript
var a = document.querySelector('a');

a.addEventListener('click',function(e) {
  e.preventDefault();// 点击a链接时不跳转 正常浏览器
  // e.returnValue; ie 678属性 传统注册方法即 a.onclick = function() {...};
  // return false; 几乎兼容所有浏览器 传统注册方法即 a.onclick = function() {...};
});
```

阻止事件冒泡

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    * {
      margin: 0;
      padding: 0;
    }

    .father {
      width: 200px;
      height: 200px;
      background: pink;
      display: flex;
      margin: 0 auto;
    }

    .son {
      color: white;
      text-align: center;
      line-height: 600%;
      margin: auto;
      width: 100px;
      height: 100px;
      background: purple;
    }
  </style>
</head>
<body>
  <div class="father">
    <div class="son">son</div>
  </div>
  <script>
    var father = document.querySelector('.father');
    var son = document.querySelector('.son');

    son.addEventListener('click',function(e) {
      alert('son');
      e.stopPropagation();// 停止冒泡,不让父元素弹出警示框
    });

    father.addEventListener('click',function() {
      alert('father');
    });
  </script>
</body>
</html>
```

### 特殊鼠标事件

oncontextmenu 右键菜单

```javascript
var div = document.querySelector('div');
div.addEventListener('contextmenu',function(e) {
	e.preventDefault();// 不弹出右键菜单
});
```

onselectstart 选中

```javascript
var div = document.querySelector('div');
div.addEventListener('selectstart',function() {
  e.preventDefault();// 禁止选中
});
```

e.clientX,e.clientY 鼠标点击的XY坐标(相对于可视区,不是整个网页)

e.pageX,e.pageY 鼠标点击的XY坐标(相对于整个页面)

e.screenX,e.screenY 鼠标点击的XY坐标(相对于整个电脑屏幕)



<table>
  <tbody>
    <tr>
      <td>onkeyup</td>
      <td>某个键被松开时触发</td>
    </tr>
    <tr>
      <td>onkeydown</td>
      <td>某个键被按下时触发</td>
    </tr>
    <tr>
      <td>onkeypress</td>
      <td>某个键被按下时触发 但不识别功能键</td>
    </tr>
  </tbody
</table>


## ASCII码

<table border="1" cellpadding="2" cellspacing="0" style="font-size:14px; border-collapse:collapse; margin-top:10px; margin-bottom:10px; widows:auto; color:rgb(51,51,51); font-family:verdana,Arial,Helvetica,sans-serif"><tbody style="background-color:inherit"><tr style="background-color:inherit"><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">ASCII值</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">控制字符</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">ASCII值</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">控制字符</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">ASCII值</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">控制字符</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">ASCII值</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">控制字符</span></td></tr><tr style="background-color:inherit"><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">0</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">NUT</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">32</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">(space)</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">64</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">@</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">96</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">、</span></td></tr><tr style="background-color:inherit"><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">1</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">SOH</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">33</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">！</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">65</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">A</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">97</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">a</span></td></tr><tr style="background-color:inherit"><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">2</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">STX</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">34</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">”</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">66</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">B</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">98</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">b</span></td></tr><tr style="background-color:inherit"><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">3</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">ETX</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">35</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">#</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">67</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">C</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">99</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">c</span></td></tr><tr style="background-color:inherit"><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">4</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">EOT</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">36</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">$</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">68</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">D</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">100</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">d</span></td></tr><tr style="background-color:inherit"><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">5</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">ENQ</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">37</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">%</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">69</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">E</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">101</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">e</span></td></tr><tr style="background-color:inherit"><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">6</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">ACK</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">38</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">&amp;</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">70</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">F</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">102</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">f</span></td></tr><tr style="background-color:inherit"><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">7</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">BEL</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">39</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">,</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">71</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">G</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">103</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">g</span></td></tr><tr style="background-color:inherit"><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">8</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">BS</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">40</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">(</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">72</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">H</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">104</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">h</span></td></tr><tr style="background-color:inherit"><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">9</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">HT</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">41</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">)</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">73</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">I</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">105</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">i</span></td></tr><tr style="background-color:inherit"><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">10</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">LF</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">42</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">*</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">74</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">J</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">106</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">j</span></td></tr><tr style="background-color:inherit"><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">11</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">VT</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">43</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">+</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">75</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">K</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">107</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">k</span></td></tr><tr style="background-color:inherit"><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">12</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">FF</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">44</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">,</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">76</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">L</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">108</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">l</span></td></tr><tr style="background-color:inherit"><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">13</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">CR</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">45</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">-</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">77</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">M</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">109</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">m</span></td></tr><tr style="background-color:inherit"><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">14</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">SO</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">46</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">.</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">78</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">N</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">110</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">n</span></td></tr><tr style="background-color:inherit"><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">15</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">SI</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">47</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">/</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">79</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">O</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">111</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">o</span></td></tr><tr style="background-color:inherit"><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">16</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">DLE</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">48</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">0</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">80</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">P</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">112</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">p</span></td></tr><tr style="background-color:inherit"><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">17</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">DCI</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">49</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">1</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">81</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">Q</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">113</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">q</span></td></tr><tr style="background-color:inherit"><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">18</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">DC2</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">50</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">2</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">82</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">R</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">114</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">r</span></td></tr><tr style="background-color:inherit"><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">19</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">DC3</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">51</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">3</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">83</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">X</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">115</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">s</span></td></tr><tr style="background-color:inherit"><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">20</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">DC4</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">52</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">4</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">84</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">T</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">116</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">t</span></td></tr><tr style="background-color:inherit"><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">21</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">NAK</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">53</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">5</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">85</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">U</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">117</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">u</span></td></tr><tr style="background-color:inherit"><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">22</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">SYN</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">54</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">6</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">86</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">V</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">118</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">v</span></td></tr><tr style="background-color:inherit"><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">23</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">TB</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">55</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">7</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">87</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">W</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">119</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">w</span></td></tr><tr style="background-color:inherit"><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">24</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">CAN</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">56</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">8</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">88</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">X</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">120</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">x</span></td></tr><tr style="background-color:inherit"><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">25</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">EM</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">57</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">9</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">89</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">Y</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">121</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">y</span></td></tr><tr style="background-color:inherit"><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">26</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">SUB</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">58</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">:</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">90</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">Z</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">122</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">z</span></td></tr><tr style="background-color:inherit"><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">27</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">ESC</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">59</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">;</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">91</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">[</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">123</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">{<!-- --></span></td></tr><tr style="background-color:inherit"><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">28</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">FS</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">60</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">&lt;</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">92</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">\</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">124</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">|</span></td></tr><tr style="background-color:inherit"><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">29</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">GS</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">61</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">=</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">93</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">]</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">125</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">}</span></td></tr><tr style="background-color:inherit"><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">30</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">RS</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">62</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">&gt;</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">94</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">^</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">126</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">~</span></td></tr><tr style="background-color:inherit"><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">31</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">US</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">63</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">?</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">95</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">__</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">127</span></td><td style="word-break:break-all; border:1px solid rgb(153,153,153); padding:5px 16px 5px 12px; min-height:25px; min-width:25px; height:25px; background-color:inherit"> <span style="background-color:inherit; font-size:15px">DEL</span></td></tr></tbody></table>

键盘属性

e.key 返回用户按下的键 按下e就返回e

e.keyCode 返回用户按下的键的ASCII的编码 按下e返回101(兼容性不好)

<hr/>

### 表单方法

e.focus() 获得焦点

<hr/>

# BOM操作

BOM 浏览器交互的对象

BOM 包含的是浏览器的整个窗口也包含了DOM

![](G:\img\BOM.png)

- window 是顶级对象,也包含了document

- 所有的全局变量都是window的属性

  ```javascript
  var num = 10;
  console.log(num);
  // 相当于
  console.log(window.log);
  function fn() {
    alert('hello')
  }
  fn()
  window.fn()
  alert(11)
  window.alert(11)
  ```

<hr/>

window事件

window.onload 等待页面全部加载完的时候再执行window.onload里面的代码

document.DOMContentLoaded 等待所有加载完成,不包括样式表,图片

window.onresize 窗口大小变化

window.onpageshow 来到此页面时加载的东西

window.scrollX,window.scrollY 横向/竖向滚动的像素值

<hr/>

窗口大小

window.innerWidth 窗口宽度<br/>window.innerHeight 窗口高度

<hr/>

setTimeout(调用的函数,延迟时间(毫秒)) 定时器,到了时间就会执行这个函数

clearTimeout 停止计时

```javascript
var btn = document.querySelector('button');
var timer = setTimeout(function() {
  console.log('爆炸了');
},5000);// 过了5秒后输出爆炸了,timer接收的是一个计时器对象
btn.addEventListener('click',function() {
  clearTimeout(timer);// 终止倒计时,不会输出爆炸了!
});
```

setInterval(回调函数[,间隔的毫秒数]) 每间隔几秒,就执行这个函数

clearInterval 停止计时

<hr/>

window.devicePixelRatio 获取物理像素比

<hr/>

location 获取和设置URL



```javascript
// http://127.0.0.1:5500/html/index.html?id=10&p=1#a
console.log(location.href);// 返回网址 http://127.0.0.1:5500/html/index.html#a?id=10&p=1
console.log(location.host);// 返回域名和端口 127.0.0.1:5500
console.log(location.port);// 返回端口号
console.log(location.pathname); // 返回除开协议端口域名参数锚点的字符串 /html/index.html
console.log(location.search);// 返回参数 ?id=10&p=1
console.log(location.hash); // 返回锚点 #a
location.assign('https://www.baidu.com');// 跳转到百度(重定向)
location.replace('https://www.baidu.com');// 跳转到百度,但不记录历史,无法后退页面
location.reload();// 重新加载页面
location.reload(true);// 强制刷新页面
```

<hr/>

location.reload() 重新加载网页

```javascript
location.reload();
```

<hr/>

decodeURL 将网址的编码转化成UTF-8(因为中文在网址中显示的是%xx%xx%xx)

<hr/>

scroll(x,y) 调整滚动条位置

```javascript
scroll(0,0);
```



<hr/>

## navigator

获取包含浏览器的信息

navigator.userAgent 获取用户电脑信息

```javascript
console.log(navigator.userAgent);/* 返回
	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) 				Chrome/99.0.4844.74 Safari/537.36 Edge/99.0.1150.52
*/
```

<hr/>

## history

用于前进后退页面

history.back() 后退

history.forward() 前进

history.go(1) 前进1步

history.go(2) 前进2步

history.go(-1) 后退1步

history.go(-2) 后退2步

<hr/>

# 网页特效

offset 只读属性,不能修改

ele.offsetTop 得到与上边相差的距离 如果没有父元素或者父元素没有定位(position),那就会以body为准

返回数字

ele.offsetLeft 得到与左边相差的距离 如果没有父元素或者父元素没有定位(position),那就会以body为准

返回数字

ele.offsetHeight 得到标签的高度 返回数字

ele.offsetWidth 得到标签的宽度 返回数字

ele.offsetParent 获取用来量与左边相差的距离的标签(如果父元素没设置定位,那就返回body)

返回 标签对象

<hr/>

client 获取边框和宽高

ele.clientTop 得到标签上边框的大小

ele.clientLeft 得到标签左边框的大小

ele.clientWidth 得到标签的宽(不包含边框)

ele.clientHeight 得到标签的高(不包含边框)

<hr/>

scroll 获取宽高和溢出总长度

ele.scrollHeigh 获取标签高度(不包括边框,margin)加溢出的内容

ele.scrollWidth 获取标签宽度(不包括边框,margin)加溢出的内容

ele.scrollTop

![](G:\web\前端\img\scrollTop.png)

ele.scrollLeft 与上一个同理

<hr/>

# 移动端

## 事件

touch 触屏事件

touchstart 手指触屏

touchmove 手指在屏幕上滑动

tochend 手指离开屏幕

<hr/>

## touchEvent 触摸事件对象

e.touches 正在触摸屏幕的所有手指的列表

e.targetTouches 正在触摸当前DOM元素

如果侦听的是同一个对象他们两个是一样的

e.changedTouches 手指对元素触摸或离开的历史记录

e.targetTouches[0] 获取正在触摸DOM元素的手指的一个信息(这里面的信息有手指点击的位置,点击的元素...) 

<hr/>

# 本地存储

sessionStorage的生命周期是浏览器关闭,也就是说不关闭浏览器数据就会一直保存着 只支持字符串存储

要想存储别的东西要通过JSON.stringify(对象)把对象转化成字符串,提取时再用JSON.parse(包含对象的字符串)转化成对象

```javascript
sessionStorage.setItem('名字',值);// 设置属性
sessionStorage.getItem('名字');// 获取属性值
sessionStorage.removeItem('名字');// 删除属性
sessionStorage.clear();// 删除所有属性
```

localStorage的生命周期是永久的,除非手动删除他们,也可以多窗口共享数据,其他与sessionStorage一样

```javascript
localStorage.setItem('名字',值);// 设置属性
localStorage.getItem('名字');// 获取属性值
localStorage.removeItem('名字');// 删除属性
localStorage.clear();// 删除所有属性
```

