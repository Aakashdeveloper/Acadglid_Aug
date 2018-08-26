setInterval(function(){
    console.log("i am printing")
    clearInterval
}, 5000)

var myout = setInterval(printMyName,3000)

function printMyName(){
    for(i=0;i<5;i++){
        if(i==2){
            clearInterval(myout)
        } else {
            console.log(i)
        }
    }
}