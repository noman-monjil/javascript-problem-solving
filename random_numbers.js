function rand(start,end)
{
    return Math.floor(Math.random()*(end-start+1)+start);
}




let pass=rand(10,20);
console.log("Random number is : ",pass)