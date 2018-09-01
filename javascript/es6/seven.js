var a = Redeclare and reasign
let  => cannot Redeclare but reasign
const => cannot Redeclare nor reasign


var myval  = 10

function add(b){
    myval = 10
    var out = "hiiii"
    return myval+b
}

var x = 11
if (x>10) {
    var outres = 'yes you can'
    console.log(outres)
}


var y = 11
if (y>10) {
    let outres1 = 'yes you can'
    console.log(outres1)
}



var j = 11

if(j>10){
    var res = "okkkk"
    console.log(res)
}


IIFE

(function(){
    var j = 11
    if(j>10){
        var res = "okkkk"
        console.log(res)
    }
}())



text += "hiii"
text += "ok i am working"

text = `<h1>
            <p>kjsdkjvdjkfhg</p>
            <p>kjsdkjvdjkfhg</p>
            <p>kjsdkjvdjkfhg</p>
        </h1>`
        
text += "<h1>"
text += "<p>kjsdkjvdjkfhg</p>"


var a = [1,2,4,5]

function sum(x){
    return x+x
}
console.log(sum(...a))