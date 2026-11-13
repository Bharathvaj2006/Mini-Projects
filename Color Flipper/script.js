function change(){
    let a = Math.random();
    console.log(a);
    const randomColor = Math.floor(a*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    document.querySelector("#navbar ul li:nth-child(2) h1").innerHTML = "color: #" + randomColor;
}