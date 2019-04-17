
      
      function jumper() {
        this.x = 50;
        this.y = 0;
        this.gravity =  1.5; // the force of gravity
        this.lift = -30; // opposing the force of gravity
        this.velocity = 0; // default speed
        
        this.show = function() {
          fill(color('red'));
          rect(this.x,this.y,50,50);
        };
        this.up = function() {
          this.velocity += this.lift; // jumping function
        };
        this.left = function() {
          this.velocity -= this.x; // jumping function
        };
        this.right = function() {
          this.velocity += this.x; // jumping function
        };
        this.update = function(){
          this.velocity += this.gravity; // gravity applied when not jumping
          this.y += this.velocity;
          this.velocity *= 0.9; //air resistence
          if (this.y > h-50) { //jumper hits the floor
            this.y = h-50;
            this.velocity = 0;
          }
          if (this.y < 0) { // when jumper hits the ceiling
            this.y = 0;
            this.velocity = 0;
          }
        };
      } //jumper ends here
      
      function keyPressed() {
        if (keyCode === 32) {
          jumper.up();
        }
        if (keyCode === 37) {// Left arrow
          jumper.left();
        }
        if (keyCode === 92) {//Right arrow
          jumper.right();
        }
        if (keyCode === 13){
          location.reload();
        }
      }