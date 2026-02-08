function finalScore(omr){
    if(typeof omr !=='object' || Array.isArray(omr)||omr===null)
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

let val = 
["Raj","sda"] 
  
;

let ans=finalScore(val);
console.log(ans);