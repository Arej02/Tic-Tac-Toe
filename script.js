let btn=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newGame=document.querySelector("#newGame");
let msgContainer=document.querySelector(".message");
let msg=document.querySelector("#outcome");

let count=0
const winningCoordinates=[
                    [0,1,2],
                    [3,4,5],
                    [6,7,8],
                    [0,3,6],
                    [1,4,7],
                    [2,5,8],
                    [0,4,8],
                    [2,4,6]
];
const disableBtn = () => {
    btn.forEach((button) => (button.disabled = true));
};
const showWinner=(winner)=>{
    msg.innerText=`Congratulations,The Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBtn();
}

const resetGame=()=>{
    btn.forEach((button) => {
        button.innerText = "";
        button.disabled = false;
    });
    count = 0;
    msgContainer.classList.add("hide");
}

reset.addEventListener("click", resetGame);
newGame.addEventListener("click", resetGame);

btn.forEach((val)=>{
    val.addEventListener("click",()=>{
        if(count%2==0){
            val.innerText="X";
            val.style.color="white";
        }else{
            val.innerText="O";
        }
        count+=1;
        val.disabled=true;
        winner();
    })
})

const winner = ()=>{
    for(let patterns of winningCoordinates){
        let index1Val=btn[patterns[0]].innerText;
        let index2Val=btn[patterns[1]].innerText;
        let index3Val=btn[patterns[2]].innerText;

        if(index1Val!="" && index2Val!="" && index3Val!=""){
            if(index1Val===index2Val && index2Val===index3Val){
                showWinner(index1Val);
                return;
            }
        }
    }

}