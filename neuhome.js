let cx = 1920;
let cy = 1080;
let centerX = cx/2;
let centerY = cy/2;
let extraBoostUp = 100;
let leftward = -165;
let rightward = 165;
let modifier = 125;

createCanvas(cx,cy);

function isOdd(number) {return number % 2 !== 0;}
mouseWillMove();

mouseClicked(()=>{
    for(let i=0;i<links.length;i++){
        if(links[i][4]!="big"){
            if(isInside(
                mouse,{
                    x:centerX-(310/2)+(isOdd(i) ? leftward : rightward),
                    y:centerY-(116/2)-extraBoostUp+(130*(links[i][3]-1)),
                    width:((links[i][4]=="big" ? 640 : 310)),
                    height: 116
                }
            )){window.location = links[i][2]}
        }
        else{
            if(isInside(
                mouse,{
                    x:centerX-(310/2)+(leftward),
                    y:centerY-(116/2)-extraBoostUp+(130*(links[i][3]-1)),
                    width:((links[i][4]=="big" ? 640 : 310)),
                    height: 116
                }
            )){window.location = links[i][2]}
        }
    }
    if(conjugations.length>0){
        for(let i=0;i<conjugations.length;i++){
            if(isInside(mouse,{x:cx-320,y:cy-126-(i*modifier),width:310,height:116})){
                window.location = conjugations[i][1];
            }
        }        
    }
});



function language(name,number,about,row,isBig){
    if(!isBig){
        selectColor("white")
        if(isInside(mouse,{x:centerX-(310/2)+((isOdd(number-1)) ? leftward : rightward),y:centerY-(116/2)-extraBoostUp+(130*row),width:310,height:116})){selectColor("green");}
        rect(centerX-(310/2)+((isOdd(number-1)) ? leftward : rightward),centerY-(116/2)-extraBoostUp+(130*row),310,116);
        selectColor("black");
        text(about,centerX+((isOdd(number-1)) ? leftward : rightward),centerY-30-extraBoostUp+(130*row),"20px Serif");
        text(name,centerX+((isOdd(number-1)) ? leftward : rightward),centerY+18-extraBoostUp+(130*row),"50px Serif");
    }else{
        selectColor("white")
        if(isInside(mouse,{x:centerX-(310/2)+leftward,y:centerY-(116/2)-extraBoostUp+(130*row),width:640,height:116})){selectColor("green");}
        rect(centerX-(310/2)+leftward,centerY-(116/2)-extraBoostUp+(130*row),640,116);
        selectColor("black");
        text(about,centerX,centerY-30-extraBoostUp+(130*row),"20px Serif");
        text(name,centerX,centerY+18-extraBoostUp+(130*row),"50px Serif");
    }
}

function render(){
    bg("green");
    noStroke();
    selectColor("rgba(10, 132, 10, 1)");
    ellipse(0,cy,2000,500);
    strokeActive();
    selectColor("white");
    if(page=="secondary"){
        selectColor("lightgreen")
        text("Neufrère",centerX,centerY-290-extraBoostUp,"40px Serif")
        selectColor("white")
        text(title,centerX,centerY-200-extraBoostUp,"80px Serif");
    }else{
        text("Neufrère",centerX,centerY-200-extraBoostUp,"80px Serif");
    }
    selectColor("lightgray");
    text("Learn Languages Free Forever.",centerX,centerY-140-extraBoostUp,"Italic 40px Serif");

    for(let i=0;i<links.length;i++){
        language(links[i][0],i+1,links[i][1],links[i][3]-1,links[i][4])
    }

    if(conjugations.length>0){
        for(let i=0;i<conjugations.length;i++){
            selectColor("white");
            if(isInside(mouse,{x:cx-320,y:cy-126-(i*modifier),width:310,height:116})){selectColor("green")}
            rect(cx-320,cy-126-(i*modifier),310,116);
            selectColor("black")
            text("Study the "+conjugations[i][0],cx-320+(310/2),cy-126+38-(i*modifier),"Italic 30px Serif");
            text("Conjugations",cx-320+(310/2),cy-126+85-(i*modifier),"45px Serif");
        }
    }
}
