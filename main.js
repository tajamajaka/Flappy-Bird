let board = document.getElementById("container")
let pollo = new Pollo(525, 200, board);
let horno = new Horno(500, 150, board);

let polloTimerId
let hornoTimerId

function startGame(){
    pollo.insertPollo();
    horno.insertHorno();
    polloTimerId = setInterval(pollo.move, 5);
    hornoTimerId = setInterval(horno.move, 5);
}






window.addEventListener("keydown", function(evento){
    switch(evento.key){
        case "w":
            pollo.direction = -1;
            break;
    }
})

window.addEventListener("keyup", function (evento){
    pollo.direction = 1;
})




startGame()