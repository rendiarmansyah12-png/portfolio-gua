function toggleDark(){
    document.body.classList.toggle("dark");

    let btn = document.getElementById("modeBtn");

    if (document.body.classList.contains("dark")){
            btn.innerText = "Mode: ON🌑";
        }else{
            btn.innerText = "Mode: OFF☀️";
    }
}

let elements = document.querySelectorAll(".fade");

window.addEventListener("scroll",function(){
    elements.forEach(el=>{
        let posisi = el.getBoundingClientRect().top;
        let tinggiLayar = window.innerHeight;

        if (posisi<tinggiLayar-100){
            el.classList.add("show");
        }
    });
});

function hitung(oprator){
    const n1 = parseFloat(document.getElementById('num1').value);
    const n2 = parseFloat(document.getElementById('num2').value);
    let hasil = 0;

    if (isNaN(n1)||isNaN(n2)){
        alert("Isi dulu angka nya, Bro!");
        return;
    }

    if (oprator === '+') hasil=n1+n2;
    if (oprator === '-') hasil=n1-n2;
    if (oprator === '*') hasil=n1*n2;
    if (oprator === '/') hasil=n1/n2;

    document.getElementById('hasil-hitung').innerText=hasil;
}