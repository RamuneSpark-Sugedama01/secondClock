let allDiv = [];

//背景
document.write( "<div id= bg2> </div>" );
const div_bg2 = document.getElementById( "bg2" );
defaultSet(div_bg2,screen);
////プロパティ
putXY(div_bg2,"50%","50%")
translate(div_bg2, Center,Center)
div_bg2.style.zIndex = -100;
////出力

const scaleClock = 60;

document.write( "<div id= bg> </div>" );
const div_bg = document.getElementById( "bg" );
defaultSet(div_bg,screen);
////プロパティ
putXY(div_bg,"50%","50%")
//translate(div_bg, Center,Center)
transform(div_bg, Center,Center,0,scaleClock);
div_bg.style.zIndex = 0;
////出力
setImage(div_bg,"");



let div_elements = [];
for(let i = 1; i <= 3; i++){
document.write( "<div id= elements"+i+"> </div>" );
div_elements[i] = document.getElementById( "elements"+i );
defaultSet(div_elements[i],screen);
////プロパティ
putXY(div_elements[i],"50%","50%")
transform(div_elements[i], Center,Center,0,scaleClock);
div_elements[i].style.zIndex = i;
div_elements[i].style.mixBlendMode = "normal";
////出力
setImage(div_elements[i],"");
}
