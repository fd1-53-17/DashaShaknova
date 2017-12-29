function selfcount () {
    var counter=0;
    function countIncrement () {
        counter++;
        console.log(counter);
    }
    return countIncrement;
}
var myFun=selfcount ();
var myFun2=selfcount ();
myFun ();
myFun ();

myFun2 ();