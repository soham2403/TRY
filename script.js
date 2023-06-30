var anchorForPlayer = document.querySelectorAll("a");
anchorForPlayer.forEach(atag => {
    atag.addEventListener("click",print)
});


var winningCombinations = {
    Rock: "Scissor",
    Paper: "Rock",
    Scissor: "Paper"
};

function print(event) {
    var choices = Math.floor(Math.random() * 3);
    var anchorForCpu = document.querySelectorAll("img")[choices].getAttribute("id");
    document.querySelector(".cpu > h1").innerText = anchorForCpu;

    var eventon = event.target.getAttribute("id");
    document.querySelector(".player > h1").innerText = eventon;

    if (anchorForCpu===eventon){
        document.querySelector(".banner-outcome>h1").innerText = "Draw";
    }
    else if(winningCombinations[anchorForCpu]===eventon){
        document.querySelector(".banner-outcome>h1").innerText = "CPU WINS";
    }
    else{
        document.querySelector(".banner-outcome>h1").innerText = "Player WINS";
    }

}


