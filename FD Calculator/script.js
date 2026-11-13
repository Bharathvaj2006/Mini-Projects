function calculateFD() {
    const principal = parseInt(document.getElementById('principal').value);
    const time = parseInt(document.getElementById('rate').value);
    let result=document.getElementById('result');

    if (isNaN(principal) || isNaN(time)) {
        result.innerHTML = '<b>Please enter valid numbers for Principal and Mounth.</b>';
        return;
    }
    let val;
    if(time < 3){
        val = principal * (1 + 0.058 * time);
    }
    else if (time >= 3 && time < 6) {
        val = principal * (1 + 0.065 * time);
    }
    else if(time >= 6 && time < 9){ 
        val = principal * (1 + 0.068 * time);
    }
    else {
        val = principal * (1 + 0.07 * time);
    }
    result.innerHTML = `<b>The maturity amount is: ${val.toFixed(2)}</b>`;
}