const canvas = document.getElementById("game")
const ctx = canvas.getContext("2d")
// Khai báo biến
let score;
let highscore;
let player;
let gravity;
let obstacles;
let gamespeed;
let key = {};


document.addEventListener('keydown', function (evt){
    key[evt.code] = true
});
document.addEventListener('keyup',function (evt){
    key[evt.code] = false
})


 class Player {
     constructor(x,y,w,h,color) {
         this.x = x;
         this.y = y;
         this.w = w;
         this.h = h;
         this.color = color;
         // đặt dy: hay lực hướng là vận tốc nhảy
         this.dy = 0
         this.jumpForce = 15
         this.originalHeight=h;
         this.ground = false
         this.jumptimer = 0;
     }
     Animate(){
      //jump
         if(key['Space'] ){
             this.Jump()
         }
         else {
             this.jumptimer=0;
         }
         this.y += this.dy
         // Gravity
         if(this.y + this.h < canvas.height){
             this.dy += gravity
             this.ground=false
         }
         else {
             this.dy = 0;
             this.ground=true;
             this.y = canvas.height - this.h
         }



         this.Draw()
     }

         Jump () {
             if (this.ground && this.jumptimer === 0) {
                 this.jumptimer = 1
                 this.dy = this.jumpForce
             } else if (this.jumptimer > 0 && this.jumptimer < 15) {

                 this.jumptimer++;
                 this.dy = -this.jumpForce - (this.jumptimer/50);
             }
         }






     Draw(){
         ctx.beginPath();
         ctx.fillStyle = this.color;
         ctx.fillRect(this.x, this.y, this.w, this.h);
         ctx.closePath();
     }
 }

 function Start(){
     canvas.width =window.innerWidth;
     canvas.height=window.innerHeight;

     ctx.font = "20px sans-seri";

     gamespeed = 3;
     gravity = 1;

     score = 0;
     highscore = 0;


     player = new Player(25,canvas.height - 150, 50, 50, '#FF5858');
     requestAnimationFrame(Update);
 }
 function Update(){
     requestAnimationFrame(Update);
     ctx.clearRect(0,0,canvas.width,canvas.height);

     player.Animate()
 }
 Start();