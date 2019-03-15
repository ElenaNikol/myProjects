//
// function evenOrOdd() {
//     for (var i = 0; i <= 15; i++) {
//         if (i % 2 === 0)
//             console.log(i, " e paren");
//         else
//             console.log(i, " e neparen");
//     }
// }
// //evenOrOdd();
// function printFizzOrBuzz() {
//     for(var i=1;i<=100;i++){
//         if(i%15 === 0)
//             console.log("FizzBuzz");
//         if(i%3 === 0)
//             console.log("Fizz");
//         if(i%5 === 0)
//             console.log("Buzz");
//         else
//             console.log(i);
//     }
// }
// //printFizzOrBuzz();
//
// function  armstrong(){
//     for(var i=100;i<=999;i++){
//         var sum = 0;
//         var tmpI = i;
//         while(tmpI>0){
//             var cifra = tmpI%10;
//             sum+=Math.pow(cifra,3);
//             tmpI = Math.floor(tmpI/10);
//         }
//         if(sum === i){
//             console.log("Brojot ",i," e armstrong");
//         }
//     }
// }
// armstrong();
// //123%10 3
// //cubes = 3^3 = 91
// //sum = 0 +91 = 91
// //123/10 -> 12
//
// function multiples() {
//     var sum = 0;
//     for(var i=1000;i>0;i--){
//         if(i%15 === 0){
//             sum+=i;
//         }
//     }
//     console.log(sum);
// }
// multiples();
//
// function sumToString(x,y) {
//     var sum = 0;
//     for(var i=x;i<=y;i++){
//         sum+=i;
//     }
//     console.log(sum.toString());
// }
// sumToString(1,5);
//
// function isPrime(num) {
//
//     if (num === 2) {
//         return true;
//     }
//     else if(num > 1){
//         for (var i = 2;  i < num; i++) {
//
//             if (num % i !== 0 ) {
//                 return true;
//             }
//
//             else if (num === i * i) {
//                 return false
//             }
//
//             else {
//                 return false;
//             }
//         }
//     }
//     else {
//         return false;
//     }
//
// }
//
// function primeSum(x,y) {
//     var sum = 0;
//     var brojac = 0;
//     var niza = [];
//     var primeString = "";
//     for(var i=x;i<=y;i++){
//         if(!isPrime(i)){
//             sum+=i;
//         }
//         else {
//             brojac++;
//             niza.push(i);
//             var tmpString = i.toString();
//             primeString = primeString.concat(" ",tmpString);
//         }
//     }
//     console.log("The sum of all non-prime numbers is" + sum + " and the number of prime numbers is" + brojac);
//     console.log(primeString);
//     console.log(niza);
// }
// primeSum(1,30);

function war(warrior,footman) {
    while(warrior.hitpoints > 0 && footman.hitpoints > 0){
        warrior.damage(footman.attack());
        footman.damage(warrior.attack());
    }
    if(warrior.hitpoints > 0){
        return console.log("Winner is " + warrior.name);
    }
    else if(footman.hitpoints > 0){
        return console.log("Winner is "+ footman.name);
    }
    else
        console.log("Both are dead");
}

function Combatant(name,hitpoints,minDamage,maxDamage,armor) {
        this.name = name;
        this.hitpoints = hitpoints;
        this.minDamage = minDamage;
        this.maxDamage = maxDamage;
        this.armor = armor;

        this.attack = function () {
            return Math.floor(Math.random() * (this.maxDamage - this.minDamage) + this.minDamage);
        };
        this.damage = function (thrownDamage) {
            this.hitpoints -= thrownDamage + armor;
        };

    };

var warrior = new Combatant("Orc Warrior",720,23,35,5);
var footman = new Combatant("Human Footman",550,18,27,9);

war(warrior,footman);