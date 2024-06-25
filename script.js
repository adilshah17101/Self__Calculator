let buttons= document.querySelectorAll("button");
let input = document.getElementById("inputbox");
let history=[];
 historyIndex=-1;

  let string= "";
  let arra= Array.from(buttons);
  arra.forEach(button =>{
    button.addEventListener('click',(e)=>{
       if (e.target.innerHTML == '='){
        string =eval(string);
        input.value= string;
        history.push(string);
        historyIndex=history.length-1;
        
       }
       else if (e.target.innerHTML=="←"){
           if(historyIndex>=0){
            input.value=history[historyIndex];
            historyIndex=historyIndex-1;
           }
           else{
            input.value="";
           }
      }
      else if (e.target.innerHTML === '→') {
        if (historyIndex === -1) {
            historyIndex = 0;
        } else if (historyIndex < history.length -1 ) {
            historyIndex++;
            input.value = history[historyIndex];
        }
      }
       else if (e.target.innerHTML === "AC"){
        
        string="";
        input.value = string;
        history=[];
        historyIndex= -1;
          
        console.log(input.value);
       }
        else if (e.target.innerHTML == "DEL"){
            string=string.substring(0, string.length-1);
            input.value = string;
        console.log(input.value=string);   
       }
      

       else {

            string += e.target.innerHTML;
            console.log(string);
            input.value =string;
           }
       
       
    })
    
  })

