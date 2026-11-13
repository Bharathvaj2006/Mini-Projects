
const disp=document.getElementById("display");
const isNum=str=> /^[0-9+-/*%]+$/.test(str);
function append(val){
    disp.value+=val;
}

function calculate(){
    try{
        disp.value=eval(disp.value);
    }
    catch{
        disp.value="Error";
    }
}

function clr(){
    disp.value='';
}

function del(){
    disp.value=disp.value.slice(0,-1);
}

document.addEventListener('keydown',(event)=>{
    if(isNum(event.key)) append(event.key);
    else if(event.key=='c') clr();
    else if(event.key=="Enter" || event.key=="=") calculate();
    else if(event.key=="Backspace") del();
}) 
