let debug_message = [];

let div_debug = [];

for(let i = 0; i <=Player; i++){
document.write( "<div id= debug"+i+"> </div>" );
div_debug[i] = document.getElementById( "debug"+i );
defaultSet(div_debug[i],screen);
////プロパティ
    if(i == 0){
putXY(div_debug[i],"100%","100%")
    }else{
putXY(div_debug[i],((i-1)*20)+"%",100)
    }

translate(div_debug[i],Right,Bottom);
fontSet(div_debug[i],"#EEEEEE","Higashi","30","normal","left")
div_debug[i].style.zIndex = 10000;
////出力
setText(div_debug[i],"");
}


function debugMessage(){
   
    //ここにメッセージを入れてください！
     debug_message[0] = "2024065 SUAC";
  
  for(let i = 1; i <= Player; i++){
   debug_message[i] = "";
  
  }
    
}

function debug(){
    
    debugMessage();
    
    for(let i = 0; i <= Player; i++){
    setText(div_debug[i],debug_message[i])
    }
    

}