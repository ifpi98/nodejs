sum = 0;

for (var i = 1; i < 11; i++){
    if(i%3 != 1){
        console.log("Skip")
        continue;
    }

    console.log("sum plus i", i)
    sum = sum + i;
    
}

console.log(sum);