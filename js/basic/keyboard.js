const Player = 2; //ゲームの参加可能人数

let lrk = [];
let udk = [];
let k = [];

const bt = ["A","B","X","Y","Start","Select","L1","R1","L2","R2"];

for(let i = 0; i < bt.length; i++){
   
    k[bt[i]] = [];
    
}

for(let i = 1; i <= Player; i++){
 
    lrk[i] = false;
    udk[i] = false;
    
for(let i2 = 0; i2 < bt.length; i2++){
    k[bt[i2]][i] = false;
    
}
}

//ボタン押下
 document.onkeydown = key_down;
 function key_down( e ){

 e.preventDefault( );
let key = e.keyCode;

     
 if( key == 37 || key == 65 ){
   lrk[1] = "left";
 }
 if( key == 39 || key == 68 ){
   lrk[1] = "right";
 }
 if( key == 38 || key == 87 ){
   udk[1] = "up";
 }
 if( key == 40 || key == 83 ){
   udk[1] = "down";
 }  
if(key == 13 ||  key == 90 ){ //Enterキー・Zキー
  k["A"][1] = true;
}  
if( key == 27 || key == 8 || key == 88){//ESCキー・BackSpace・Xキー
  k["B"][1] = true;
 }

if( key == 67 || key == 221 ){//Cキー・]キー
  k["Y"][1] = true;
 }
if( key == 86 || key == 219 ){//Vキー・[キー
  k["X"][1] = true;
 }

if( key == 49){//1キー
  k["L1"][1] = true;
 }

if( key == 48){//0キー
  k["R1"][1] = true;
 }

if( key == 50){//2キー
  k["L2"][1] = true;
 }
     
if( key == 57){//9キー
  k["R2"][1] = true;
 }

     
 if( key == 32 ){ //Spaceキー
   k["Start"][1] = true;
 }
     
if( key == 116 ){ //F5キー
   k["Select"][1] = true;
 }  
       
     
     
 }

//ボタン離上
document.onkeyup = key_up;
function key_up( e ){

 e.preventDefault( );
let key = e.keyCode;

 if( ( key == 37 || key == 65 ) && lrk[1] == "left" ){
   lrk[1] = false;
 }
 if( ( key == 39 || key == 68 ) && lrk[1] == "right" ){
   lrk[1] = false;
 }
 if( ( key == 38 || key == 87 ) && udk[1] == "up" ){
   udk[1] = false;
 }
 if( ( key == 40 || key == 83 ) && udk[1] == "down"){
   udk[1] = false;
 }
    
if((key == 13 ||  key == 90) && k["A"][1] == true){ //Enterキー・Zキー
        k["A"][1] = false;
}  
if(( key == 27 || key == 8 || key == 88 ) && k["B"][1] == true){//ESCキー・BackSpace・Xキー
        k["B"][1] = false;
 }

if(( key == 67 || key == 221 ) && k["Y"][1] == true){//Cキー・][1]キー
        k["Y"][1] = false;
 }
if(( key == 86 || key == 219 ) && k["X"][1] == true){//Vキー・[キー
        k["X"][1] = false;
 }

if(( key == 49) && k["L1"][1] == true){//1キー
        k["L1"][1] = false;
 }

if(( key == 48) && k["R1"][1] == true){//0キー
        k["R1"][1] = false;
 }

if(( key == 50) && k["L2"][1] == true){//2キー
        k["L2"][1] = false;
 }
     
if(( key == 57) && k["R2"][1] == true){//9キー
        k["R2"][1] = false;
 }

     
 if(( key == 32 ) && k["Start"][1] == true){ //Spaceキー
   k["Start"][1] = false;
 }
     
if(( key == 116 ) && k["Select"][1] == true){ //F5キー
   k["Select"][1] = false;
 }  
    
    
}