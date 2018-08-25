Ecma Script
Es5
Es6

Es5
----------------------------------
string
number
boolean

var 

var a = 10
undefined
a
10
var a = "10"
undefined
a
"10"
var a = true
undefined
a
true
typeof(a)
"boolean"

var a = 10
undefined
typeof(a)
"number"
var a = "10"
undefined
typeof(a)
"string"
10+10
20
"10"+"10"
"1010"
true+true
2
10+"10"
"1010"

10+10+"10"
"2010"
"10"+10+10
"101010"
10+"10"+10
"101010"
"aa"-"bb"
NaN
10-10
0
10*10
100
10/10
1

10+"10"
"1010"
10+parseInt("10")
20
10+parseInt("a")
NaN
isNaN("q")
true
isNaN(10)
false

var city = " i live in london"
undefined
city.toUpperCase()
" I LIVE IN LONDON"
city.toLowerCase()
" i live in london"
city.replace("lonodon","delhi")
" i live in london"
city.replace("london","delhi")
" i live in delhi"
city = "london"
"london"
myself=" i live in"
" i live in"
myself.concat(city)
" i live inlondon"
city.concat(myself)
"london i live in"
var city = " i live in london"
undefined
city.length()
city.length
17
city.trim()
"i live in london"
var b = city.trim()
undefined
b
"i live in london"

var city = "london
VM305:1 Uncaught SyntaxError: Invalid or unexpected token
var city = "london"
undefined
city.charAt(0)
"l"
city.charAt(0)
"l"
city.charAt(0).toUpperCase()
"L"
city.slice(1)
"ondon"
city.charAt(0).toUpperCase()+city.slice(1)
"London"
city.substr(0,1).toUpperCase()
"L"
var city ="i live in london"
undefined
city.split(" ")
(4) ["i", "live", "in", "london"]0: "i"1: "live"2: "in"3: "london"length: 4__proto__: Array(0)
var url="https://nodejs.org/en/"
undefined
url.split("/")
(5) ["https:", "", "nodejs.org", "en", ""]0: "https:"1: ""2: "nodejs.org"3: "en"4: ""length: 5__proto__: Array(0)
var lang= "python"
undefined
lang.split("")
(6) ["p", "y", "t", "h", "o", "n"]
var mystr = "i love javascript"
undefined
mystr[0]
"i"
mystr[7]
"j"
mystr.substr(7,15)
"javascript"

10%2
0
11%2
1
var a = 10
undefined
a.toExponential(2)
"1.00e+1"
var a = 10.090977
undefined
a.toFixed()
"10"
a.toFixed(2)
"10.09"
a.toFixed(3)
"10.091"
a.toString()
"10.090977"

78
78 + 0.345
78.345
(78).valueOf()
78
Math
Math {abs: ƒ, acos: ƒ, acosh: ƒ, asin: ƒ, asinh: ƒ, …}E: 2.718281828459045LN2: 0.6931471805599453LN10: 2.302585092994046LOG2E: 1.4426950408889634LOG10E: 0.4342944819032518PI: 3.141592653589793SQRT1_2: 0.7071067811865476SQRT2: 1.4142135623730951abs: ƒ abs()acos: ƒ acos()acosh: ƒ acosh()asin: ƒ asin()asinh: ƒ asinh()atan: ƒ atan()atan2: ƒ atan2()atanh: ƒ atanh()cbrt: ƒ cbrt()ceil: ƒ ceil()clz32: ƒ clz32()cos: ƒ cos()cosh: ƒ cosh()exp: ƒ exp()expm1: ƒ expm1()floor: ƒ floor()fround: ƒ fround()hypot: ƒ hypot()imul: ƒ imul()log: ƒ log()log1p: ƒ log1p()log2: ƒ log2()log10: ƒ log10()max: ƒ max()min: ƒ min()pow: ƒ pow()random: ƒ random()round: ƒ round()sign: ƒ sign()sin: ƒ sin()sinh: ƒ sinh()sqrt: ƒ sqrt()tan: ƒ tan()tanh: ƒ tanh()trunc: ƒ trunc()Symbol(Symbol.toStringTag): "Math"__proto__: Object
Math.random()
0.05077392844241002
Math.random()
0.2843777667320979
Math.random()
0.22099661759384315
Math.random()*100
46.68893259086453
Math.random()*100
11.461184987226702
Math.random()*100
44.39246264649243
Math.random()*100.toFixed()
VM532:1 Uncaught SyntaxError: Invalid or unexpected token
(Math.random()*100).toFixed()
"72"
(Math.random()*100).toFixed()

"41"
parseInt((Math.random()*100).toFixed())

33
parseInt((Math.random()*100).toFixed(3))

26
parseInt((Math.random()*10000).toFixed())

1273
Math.random()

0.5225935418184033
Math.PI
3.141592653589793
(Math.PI).toFixed(4)
"3.1416"

Math.PI.toFixed(4)
"3.1416"

Math.ceil(4.3)
5
Math.ceil(4.8)
5
Math.floor(4.8)
4
Math.floor(4.3)
4
Math.round(4.8)
5
Math.round(4.3)
4
Math.cos(89)
0.5101770449416689
Math.sqrt(69)
8.306623862918075
Math.sqrt(49)
7
Math.sqrt(64)
8
Math.pow(8,2)
64


var a = null
undefined
var b = undefined
undefined
a
null
b
undefined
typeof(a)
"object"
typeof(b)
"undefined"
a == b
true
a === b
false
Es6
----------------------------------