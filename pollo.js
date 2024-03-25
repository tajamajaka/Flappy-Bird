function Pollo(x, y, board){
    let self = this
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 50;
    this.direction = 0;
    this.speed = 5;
    this.sprite = document.createElement("div");
    this.isDead = false;

    this.insertPollo = function(){
        this.sprite.setAttribute("id", "pollo")
        this.sprite.style.top = this.y + "px"
        this.sprite.style.left = this.x + "px"
        board.appendChild(this.sprite)
    }

    this.move = function(){
        let newCoordy = self.y + self.speed * self.direction;
        if (newCoordy >= 0 && newCoordy <= 750){
            self.y = newCoordy;
            self.sprite.style.top = self.y + "px";
        }
    }
} // fin Pollo constructor
