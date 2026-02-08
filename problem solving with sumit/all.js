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




function validOtp(otp)
{
    let flag=false;
    if(typeof otp !=='string'){
        return "Invalid";
    }else if (otp.length==8 && otp.startsWith("ph-")){
     
        flag=true;
        return flag;

    }else {
        return flag;
    }

}

function finalScore(omr){
    if(typeof omr !=='object' || Array.isArray(omr)||omr===null)
    {
        return 'Invalid';
    }
    else if(typeof omr.right !=="number" || typeof omr.wrong !=="number" || typeof omr.skip !=="number" )
    {
        return 'Invalid';

    }
    else{
        let total=omr.right+omr.wrong+omr.skip;
        if(total===100)
        {
            let right=omr.right;
            let wrong=omr.wrong;
            let totalScore=(right-(wrong*(0.5)));
           
            return Math.round(totalScore);
        }else{
            return 'Invalid';
        }
    }

}



function gonoVote(arr)
{
    let flag=false;
    let haCount=0;
    let naCount=0;
    if(! Array.isArray(arr))
    {
        return'Invalid';
    }else{
        for(const vote of arr)
        {
            if(vote==='ha')
            {
                haCount++;
            }else if(vote==='na'){
                naCount++;
            }
        }

    }

    if(haCount>naCount)
    {
        flag=true;
        return flag;
    }else if (haCount===naCount)
    {
        flag="equal";
        return flag;

    }else{
        flag=false;
        return flag;
    }
}

function analyzeText(str)
{
    
  if(typeof str !=='string' || str.trim().length===0)
  {
     return 'Invalid';

  }
      let word=str.split(" ");
    let longWord=word[0].length; 
    let long=word[0];
    let wordLength=str.split(" ").join("").length;
    
    for(const w of word)
    {
        if(longWord<w.length)
        {
            longWord=w.length;
            long=w;
        }
    }
    let ob={
        longwords:long,
        token:wordLength
    };
    return ob;
  
   
  
}



