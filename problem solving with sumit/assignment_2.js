


function validOtp(otp)
{
    let flag=false;
    if(typeof otp !=='string'){
        return "Invalid";
    }else if (otp.length==8){
     
          if(otp.startsWith("ph-")){
            flag=true;

            return flag;

          }else {
            return flag;
          }
      

    }else {
        return flag;
    }

}


let noman=validOtp(12345678)
console.log(noman);