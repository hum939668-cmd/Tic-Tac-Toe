let boxes=document.querySelectorAll(".box");
let msg=document.querySelector(".msg");
let resetbtn=document.querySelector("#reset");
let win = document.querySelector(".win");
let body = document.querySelector("body");




let trunX=true;

const winpatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(trunX){
            box.innerText = "x";
            msg.innerText = "player O Turn";
            trunX=false;
        }else{
            box.innerText = "O";
            msg.innerText = "player X Turn";
            trunX=true;
        }
        box.disabled = true;
        checkwinner();
    });
});

const checkwinner =()=>{
    for (let patren of winpatterns){
        let pos1 = boxes[patren[0]].innerText;
        let pos2 = boxes[patren[1]].innerText;
        let pos3 = boxes[patren[2]].innerText;

        if(pos1 !== "" && pos1 === pos2 && pos2 === pos3){
            msg.innerText = `Player ${pos1} Win`;

            disabledAll();

            if (msg.innerText=== "Player x Win"){
                win.innerText =" Player x Win";
                
                 

            }else{
                 win.innerText = "Player O Win";
            }
            
        }

    }
    
};

const disabledAll = () =>{
    boxes.forEach(box=>box.disabled= true);
};

resetbtn.addEventListener("click",() => {
    trunX=true;
    msg.innerText="player X Turn";
    boxes.forEach(box => {
        win.innerText="";
        box.innerText="";
        box.disabled = false;
    })
    

})