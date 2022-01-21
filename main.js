const canvas = document.getElementById("game")
const ctx = canvas.getContext("2d")
// Khai báo biến
let score;
let highscore;
let player;
let gravity;
let obstacles;
let gamespeed;
let key = [];


 class Player {
     constructor(x,y,w,h,color) {
         this.x = x;
         this.y = y;
         this.w = w;
         this.h = h;
         this.color = color;
         // đặt dy là hướng nhảy
         this.dy = 0
         this.jumpForce = 15


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
     player.Draw()
 }
 Start();