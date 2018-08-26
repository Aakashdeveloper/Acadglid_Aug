Array
//
var marks =[12, 45, 6,6,66,6]

var cars = ["Bmw", "Audi", 5678, true, "d", false, 457]
undefined
cars
(7) ["Bmw", "Audi", 5678, true, "d", false, 457]

0: "Bmw"1: "Audi"2: 56783: true4: "d"5: false6: 457length: 7__proto__: Array(0)

cars[0]
"Bmw"
cars[1]
"Audi"
cars[7]
undefined
cars[6]
457

var cars = new Array("BMW", "Audi", 4546, "Kia")

push === unshift but opposite
pop  === shift but opposite

var cars = ["Bmw", "Audi", 5678, true, "d", false, 457]
undefined
cars.length
7
cars.sort()
(7) [457, 5678, "Audi", "Bmw", "d", false, true]
cars.push("KIA")
8
cars
(8) [457, 5678, "Audi", "Bmw", "d", false, true, "KIA"]
cars.push(78)
9
cars
(9) [457, 5678, "Audi", "Bmw", "d", false, true, "KIA", 78]
cars.pop()
78
cars
(8) [457, 5678, "Audi", "Bmw", "d", false, true, "KIA"]0: 4571: 56782: "Audi"3: "Bmw"4:
 "d"5: false6: true7: "KIA"length: 8__proto__: Array(0)
cars.pop(6)
"KIA"
cars.pop(1000000)
true

cars
(6) [457, 5678, "Audi", "Bmw", "d", false]
cars.unshift("apple")
7
cars
(7) ["apple", 457, 5678, "Audi", "Bmw", "d", false]0: "apple"1: 4572: 56783: "Audi"4: 
"Bmw"5: "d"6: falselength: 7__proto__: Array(0)
cars.shift()
"apple"

var cars = ["Bmw", "Audi", 5678, true, "d", false, 457]
undefined
cars.slice(2,4)
(2) [5678, true]
cars.splice(4, 0, "apple", "mango")
[]
cars
(9) ["Bmw", "Audi", 5678, true, "apple", "mango", "d", false, 457]0: "Bmw"1: "Audi"2: 
56783: true4: "apple"5: "mango"6: "d"7: false8: 457length: 9__proto__: Array(0)
cars.splice(2, 2, "kia", "volvo")
(2) [5678, true]
cars
(9) ["Bmw", "Audi", "kia", "volvo", "apple", "mango", "d", false, 457]
cars.splice(2, 1, 23, 34, 34)
["kia"]
cars
(11) ["Bmw", "Audi", 23, 34, 34, "volvo", "apple", "mango", "d", false, 457]


var cars = ["kia", "merc", "bmw"]
var price= [23, 45, 34]