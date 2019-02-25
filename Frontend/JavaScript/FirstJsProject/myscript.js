
function totallyDiff(n,x) {
   for (var i=n+1;i<x;i++){
       var flag = 1;
       var tmpI = i;
       while(tmpI){
           var cifI = tmpI%10;
           var tmpX = x;
           while(tmpX){
               if(tmpX%10 === cifI) {
                   flag = 0;
               }
               tmpX = Math.floor(tmpX/10);
           }
           tmpI = Math.floor(tmpI/10);
       }
       if(flag){
           console.log(i);
           return 0;
       }
   }
}

totallyDiff(10,100);
