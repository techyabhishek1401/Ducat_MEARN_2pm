let boxes=document.querySelectorAll('.box');
let xIsNext=true;

let values_array=Array(9).fill(true);
console.log('values_array:',values_array);
let gamePlaying=true;
boxes.forEach(box=>{
    box.addEventListener('click',(e)=>{
      
        if(gamePlaying){
            if(xIsNext){
                if(values_array[e.target.id]){
                    e.target.innerText='0';
                    xIsNext=false;
                    values_array[e.target.id]=false;
                    callWinner(e.target.id);
                }
              
            }else {
                if(values_array[e.target.id]){
                e.target.innerText='X';
                xIsNext=true; 
                values_array[e.target.id]=false;
                callWinner(e.target.id);
            }
            }
        }
        
    })
})


let winning_array=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function callWinner(move){
  for(let i=0;i<8;i++){
      let innerArray=winning_array[i];
      let ele1=document.getElementById(`${innerArray[0]}`).innerText;
      let ele2=document.getElementById(`${innerArray[1]}`).innerText;
      let ele3=document.getElementById(`${innerArray[2]}`).innerText;
      console.log(ele1,ele2,ele3)
   if(ele1 && ele2 && ele3){
    if(ele1==ele2 && ele2==ele3 && ele3==ele1 ){
     
        setTimeout(()=> alert(`${ele1} won`),300);
        gamePlaying=false;
        break;
      }
   }
 
  }
}