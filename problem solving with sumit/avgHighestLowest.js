// let sub="math: 78, english: 65, physics: 88, bangla: 55 ";






function all(sub)
{
 let total =0;
 let highest=0;
 let lowest=Object.values(sub[0])[0];
 
 for(const s of sub)
 {
    total+=Object.values(s)[0];
    if(highest<Object.values(s)[0])
    {
        highest=Object.values(s)[0];
    }
    if(lowest>Object.values(s)[0])
    {
        lowest=Object.values(s)[0];
    }
 }
 let avg=total/sub.length;

 return [total,avg,highest,lowest];
}



let sub=[
    {math:78,royal:10},
    {english:66,royal:10},
    {physics:88,royal:10},
    {bangla:55,royal:10}
   
]
let ans=all(sub);

console.log(ans)

