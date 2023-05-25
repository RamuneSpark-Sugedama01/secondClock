let side = window.innerWidth;
let tate = window.innerHeight;

let ri = 0;
let p_scale = 40;
let p_scale2;

const rotate_switch = ["0","90"];

function monitorResize(){

phoneCheck();
    
side = window.innerWidth;
tate = window.innerHeight;

    
if(side >= tate){
    
ri = 0;
    
}else{
    
tate = window.innerWidth;
side = window.innerHeight;
ri = 1;
    
}
    
if(side/tate >= 1440 / 960){//横長な時
    
    p_scale = (tate / 960) * 100;
    p_scale2 = (side / 1440) * 100;
    
}else{
   
    p_scale = (side / 1440) * 100;
    p_scale2 = (tate / 960) * 100;
    
}


transform(screen,Center,Center,rotate_switch[ri],p_scale)       
//    screen.style.transform = "translate(-50%, -50%) " + rotate_switch[ri] + " scale("+p_scale+"%)";
      
   
}