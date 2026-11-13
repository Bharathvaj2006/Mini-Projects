const sel1=document.getElementById("AUD1");
const sel2=document.getElementById("AUD2");
const api = "https://api.frankfurter.dev";
// const container=document.getElementsByClassName("container")[0];
// container.innerHTML+=`<p class="error"></p>`;
fetch(`${api}/v2/rates`)
.then((res) => res.json())
.then((data) => {
    let lst=Object.entries(data);
    for(let i=0;i<lst.length;i++){
        sel1.innerHTML+=`<option value="${lst[i][1].quote}">${lst[i][1].quote}</option>`;
        sel2.innerHTML+=`<option value="${lst[i][1].quote}">${lst[i][1].quote}</option>`;
    }
})
.catch((err) => console.log("Name is wrong"));

function cnrt(base,quote, amount) {
  return fetch(`${api}/v2/rate/${base}/${quote}`)
    .then((r) => r.json())
    .then((d) => (Number(amount) * d.rate).toFixed(2));
}

function convert(){
    let from=sel1.value;
    let to=sel2.value;
    let amount=document.getElementById("amount").value;
    // if(!amount){
    //     document.getElementsByTagName("p")[0].innerText+=`Please enter an amount`;
    //     return;
    // }
    // container.innerHTML=container.innerHTML.replace(`<p class="error"><b>Please enter an amount</b></p>`,"");
    if(from==to){
        document.getElementById("otr").value=document.getElementById("amount").value;
        return;
    }
    cnrt(sel1.value, sel2.value,amount).then((res) => {
        document.getElementById("otr").value = res;
    });
}

function swapCurrencies() {
    let temp = sel1.value;
    sel1.value = sel2.value;
    sel2.value = temp;
}