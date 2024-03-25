function Horno(x, y, board){
    let self = this
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 100;
    this.direction = 0;
    this.speed = 5;
    this.sprite = document.createElement("div");
    this.isDead = false;

    this.insertHorno = function(){
        this.sprite.setAttribute("id", "horno")
        this.sprite.style.top = this.y + "px"
        this.sprite.style.left = this.x + "px"
        board.appendChild(this.sprite)
    }

    this.move = function(){
        let newCoordx = self.x + self.speed * self.direction;
        if (newCoordx >= 0 && newCoordx <= 750){
            self.x = newCoordx;
            self.sprite.style.top = self.x + "px";
        }
    }
} // fin Horno constructor
