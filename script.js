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