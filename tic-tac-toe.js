let boxes=document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg= document.querySelector("#msg");

let turn0 = true;
const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame =() => {
  turn0 = true;
  enableBoxes();
  msgContainer.classList.add("hide");

};

boxes.forEach((box)=>{
    box.addEventListener("click",()=> {
        
          if(turn0){
            box.innerText ="0";
            turn0 =false;
          }else{
            box.innerText="X";
            turn0 = true;
          }
          box.disabled =true;

          checkWinner();
    });
});
 const disableBoxes = ()=>{
  for(let box of boxes){
    box.disabled = true;
  }
 };
 const enableBoxes = ()=> {
  for(let box of boxes){
    box.disabled = false;
    box.innerText ="";
  }
 };
const showWinner = (winner)=> {
       msg.innerText= `Congratulation , Winnner is ${winner} `;
       msgContainer.classList.remove("hide");
       disableBoxes();
}
const checkWinner =() => {
    for(let pattern of winPattern){
      //console.log(pattern[0], pattern[1], pattern[2]);
       // console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);

       let pos1val = boxes[pattern[0]].innerText;
       let pos2val = boxes[pattern[1]].innerText;
       let pos3val=boxes[pattern[2]].innerText;

       if(pos1val !="" && pos2val!=""&& pos3val!=""){
        if(pos1val===pos2val && pos2val===pos3val){
          console.log("winner",pos1val);
          showWinner(pos1val);
        }
       }
    }
};
newGamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);