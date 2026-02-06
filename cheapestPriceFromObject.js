const mobiles=[
    {name:"apple",price:20000,camera:"10mp",color:"red"},
    {name:"xaomi",price:120000,camera:"10mp",color:"red"},
    {name:"nokia",price:29000,camera:"10mp",color:"red"},
]

let cheap=mobiles[0].price;
let brand =mobiles[0].name;
for(const mob of mobiles)
{
    if(cheap>mob.price)
    {
        cheap=mob.price;
        brand=mob.name;
    }
   
}

console.log(`Mobile Brand is ${brand} and price : `,cheap);