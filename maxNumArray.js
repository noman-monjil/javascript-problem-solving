
function maxof(numbers)
{
let max=[0];
for(let num of numbers)
{
    if(num>max)
    {
        max=num;
    }
} 
return max;
}




let max=maxof([10,23,21,12,1,234,543,22]);

console.log("Max number is : ",max);