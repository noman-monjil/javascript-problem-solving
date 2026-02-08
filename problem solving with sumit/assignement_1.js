function newPrice(currentPrice,discount)
{
   

    if(typeof currentPrice !=='number' ||typeof discount  !=='number')
    {
        return 'Invalid' ;
    }else if(discount<0 || discount>100)
    {
        return 'Invalid';
    }else {
        let  discountAmount=(currentPrice*discount)/100;
        let totalPrice=currentPrice-discountAmount
        return totalPrice.toFixed(3);
    }
}




// let ans=newPrice(2000,1001);
// console.log(ans)
