
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
            }else{
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


let ans=gonoVote(["ha", "na", "na"]);
console.log(ans);
