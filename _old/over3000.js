a = 0;
count = 0;

while(true){
      
    count++;
    a = a + count;

        if (a>3000){
            break;
        }      
       
}

console.log(a, count);
console.log(`${count}까지 더하면 3000을 넘음 : ${a}`)