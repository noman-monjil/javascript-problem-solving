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







let sentence="my a";
// let ans=sentence.split(" ").join("").length;

let ans=analyzeText(sentence);
console.log(ans);
