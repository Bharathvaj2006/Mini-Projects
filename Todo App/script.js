let exist=false;

function waitInQueue(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(exist){
                resolve("Buy a few kg Halva");
            }
            else{
                reject("Halva is gone");
            }
        },1000);
    })
}

async function halva(){
    let result=await waitInQueue()
    .then((message)=>{
        return message;
    })
    .catch((error)=>{
        return "No halva";
    })
    .finally(()=>{
        setTimeout(()=>{
            console.log("Go Home");
        },1000);
    });

    console.log(result);
}

halva();