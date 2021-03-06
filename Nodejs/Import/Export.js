
function CheckEven(num){
    return num%2===0;
}

function CheckDivideByFive(num){
    return num%5==0;
}
module.exports={
    fn1:CheckEven,
    fn2:CheckDivideByFive
}
