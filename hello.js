let a=['noman',32,43,53,43,32];
a.pop();
a.push(2233);
a.shift(a)
a.unshift(34333)
console.log(a);
let b=1;
let sum=0;
while(b<=20){
    

  if(b%2!=0){
    console.log(b);
    sum+=b;
  }
b++;
  
}
console.log('odds sum is : ',sum);

// if(a[1]=='32')
// {
//     console.log(`true`)
// }else {
//     console.log(`false`)
// }
const okay='noman';
const okay1='NOMAN ';
if(okay==okay1.toLocaleLowerCase().trim())
{
    console.log('true');
}else console.log('false');

const sentence ='i am name is noman';
console.log( typeof sentence ) ; 

console.log(sentence.split(' '));
//ekhane spech dia vag korche mane spech thakle oi word ala hoi jaibo
console.log(sentence.split('a'));

//string koono  world e ei later che kina
console.log(sentence.includes('noman'));

//revserse

let str="i am noman";
let reserved =str.split('').reverse('').join('');

console.log(reserved);













let sum=0;


let sum=0;
for(let i=81;i<=131;i++)
{
  if(i%2!==0)
  {
    sum+=i;
  }
}
console.log('sum is : ',sum);