

function uniqueArray(numbers)
{
    let dup=[];
    for(let value of numbers)
    {
        if(dup.includes(value)==false)
        {
            dup.push(value);
        }
    }
    return dup;
}




console.log('Unique value is : ',uniqueArray([10,10,20,2,20,1,1,2,3,4]));
 
console.log(Math.round(Math.random()*40));

for (var i = 0; i < 5; i++) {
 	 setTimeout(function () {
 	console.log(i);
  }, 100);
}



function repeated(number)
{
    
     let cnt=0;
     for(const values of number)
     {
        const char =values.toLowerCase();
        
        if(char==='a' || char==='e' ||char==='i' ||char==='o' ||char==='u' )
        {
            cnt++;
        }
     }
     return cnt;

}

let ans=repeated(['a','e','d','d','f','d','w','a'])

console.log(ans)

let noman ='ok';
console.log(noman.length);

