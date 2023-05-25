let now = new Date();

let hour;
let minute;
let second;
let mSecond;

let secondResult;



//ここに書いてある項目が1/50秒に1回実行されます。
function run(){
    
    now = new Date();
    
    hour = now.getHours();
    minute = now.getMinutes();
    second = now.getSeconds();
    mSecond = now.getMilliseconds();

    setImage(div_bg2,"image/bg.jpg");
    
    setImage(div_bg,"image/watch.png")
     
    for(let i = 1; i <= 3; i++){
    setImage(div_elements[i],"image/c"+i+".png")
    
    }
    
    hour = hour%12;
    
    secondResult = (second*(360/60)+mSecond*(6/1000));
    
transform(div_bg, Center,Center,0-secondResult,scaleClock);    
transform(div_elements[1], Center,Center,(hour*(360/12))+(minute*(30/60))-secondResult,scaleClock);
transform(div_elements[2], Center,Center,(minute*(360/60))+(second*(6/60))-secondResult,scaleClock);
transform(div_elements[3], Center,Center,0,scaleClock);
    
        //console.log(hour+"_"+minute+"_"+mSecond)
    
}