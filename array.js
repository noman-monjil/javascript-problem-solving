let color=['red','orange','yellow','merinda','green','white'];
let colors=[];
console.log(color.length);
for(let i=0;i<color.length;i++)
{
    colors.unshift(color[i]);
}
console.log(colors);

const numbers = [12, 98, 5, 41, 23, 78, 46];
let number=[];

for(let i=0;i<numbers.length;i++)
{
    if(numbers[i]%2==0)
    {
        number.push(numbers[i]);

    }
}
console.log(number);


console.log('---------------------*****------------------');


let str = ['Tom', 'Tim', 'Tin', 'Tik'];
let add=''
for(let adding of str)
{
  add+=adding;
}
console.log(add);


 const statement = 'I am a hard working person';
 let newstr="";
 let sp=statement.split(" ");

for(let i=sp.length-1;i>=0;i--)
{
    newstr +=sp[i]+" ";
  

}
 console.log(newstr);




  const statement = 'I am a hard working person';
  let s=statement.split(" ");
  let rev=s.reverse();
  console.log(rev);


  const statement = 'I am a hard working person';
  let s=statement.split(" ").reverse().join(" ");
 
  console.log(s);

let arr= [1, 2, 3];
let copy=[];
for(let i=0;i<arr.length;i++)
{
    copy.push(arr[i]);
    if(i==1)
    {
        copy[0]=99;
    }
}


console.log(copy);

let arr=[
  [1, 2],
  [3, 4],
  [5, 6]
]
arr[1][0]=99;
console.log(arr);