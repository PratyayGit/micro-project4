let buttons=document.querySelectorAll('.btn');
let result="";

buttons.forEach((item)=>{
    item.addEventListener('click',clickEvent=(item)=>{
        if(item.target.innerHTML== '='){
            try{
                result=result.replaceAll("x","*");
                result = eval(result);
                document.querySelector('.inputField').value = result;
            }
            catch(err) {
                document.querySelector('.inputField').value ="ERROR";
              }
        }
        else if(item.target.innerHTML == 'Reset'){
            result = "";
            document.querySelector('.inputField').value = result;
        }
        else if(item.target.innerHTML== 'Del'){
            result=result.toString().slice(0,-1);
            document.querySelector('.inputField').value = result;

        }
        else{ 
              console.log(item.target)
           
              result = result + item.target.innerHTML;
              document.querySelector('.inputField').value = result;
            
          }
    })
});

