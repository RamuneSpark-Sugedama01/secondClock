 //e…要素、f…出力したい画像パス
function setImage(e,f){

  if (e.innerHTML !== "<img src="+f+">") {
      e.innerHTML = "<img src="+f+">"; 
  }
    
}

//e…要素、f…出力したい文字列
function setText(e,f){

    if(e.innerHTML !== "<nobr>"+f+"</nobr>"){
    e.innerHTML = "<nobr>"+f+"</nobr>";
    }
    
}

//e…要素　で　画像や文字を消します
function Remove(e){
 
    if (e.innerHTML !== "") {
      e.innerHTML = ""; 
  }
    
}

//e…要素、x,y…置きたい座標(left, topプロパティ)、動かしたくないときは"no"と指定。
function putXY(e,x,y){ 
 
    if(x !== "no"){
e.style.left = x;
    }
    
    if(y !== "no"){
e.style.top = y;
    }
    
}

const Center = "-50%";
const Left = "0%";
const Top = Left;
const Right = "-100%";
const Bottom = Right;

//e…要素、x, y…ずらし（%）
function translate(e,x,y){
    
    e.style.transform = "translate("+x+", "+y+") ";
    
}

//e…要素、x, y…ずらし（%）、r…回転角度（deg）、s…拡大率（%）
function transform(e,x,y,r,s){
    
    e.style.transform = "translate("+x+", "+y+") rotate("+r+"deg) scale("+s+"%)";
    
}

//e…要素、c…カラーコード、f…フォント、s…サイズ、b…太さ、a…align
function fontSet(e,c,f,s,b,a){

if(e.style.color !== c){
e.style.color = c;
}
if(e.style.fontFamily !==　f){
e.style.fontFamily =　f;    
}   
if(e.style.fontSize !==　s){
e.style.fontSize =　s;
}
if(e.style.fontWeight !== b){
e.style.fontWeight = b;
}
if(e.style.textAlign !== a){
e.style.textAlign = a;
}
    
}

//画像の初期設定をする関数です。e…要素名、p…親要素
function defaultSet(e,p){
    
p.appendChild(e);
allDiv.push(e);
e.style.position = "absolute";
    
}

let phone;

//スマホなら変数phoneにtrue、違うならfalseを返します。
function phoneCheck(){
   if (navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
    phone = true;
  } else {
      phone = false;
  }
}
phoneCheck();

