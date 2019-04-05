       function barrier() {
        this.x = w;
        this.y = 100;
        c = 100;
        this.gravity =  0.06;// the force of gravity
        this.velocity = 0; // default speed
        
        this.show = function() {
          fill(color('white'));
          rect(this.x,this.y,100,c);
        };
        this.update = function(){
          this.velocity -= this.gravity; // gravity applied when not jumping
          this.x += this.velocity;
          if (this.x > w) {
            this.x = w;
            this.velocity = 0;
          }
          if (hit !== false) {
            noLoop();
            window.alert("**GAME OVER**");
          }
          if (this.x < -100) { // when jumper hits the left
            this.y = Math.floor(Math.random()*h);
            c = Math.floor(Math.random()*h/2);
            this.x = w;
            number +=1;
            this.velocity = 0;
            this.gravity += 0.03;
          }
        };
      } //barrier ends here