
function findSum(n) {
    var sum = 0;
    while(n){
        var i = n%10;
        sum += i;
        n/=10;
        console.log(i);
    }
    console.log(sum);
}
// 101
//num = 101^2;
//sum = sum + num sum = sum + 101^2;
//102
//num = 102^2;
//sum = 101^2 + 102^2;
//
findSum(3453);
