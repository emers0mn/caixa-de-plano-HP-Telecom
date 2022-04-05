let d = document;
let plano = d.getElementById("plano");
let assinar = d.getElementById("assinar");
let h2 = d.getElementsByTagName("h2")[0]
let h4 = d.getElementsByTagName("h4")[0]

function enter() {
    assinar.style.background = "#151D2E";
    plano.style.color = "#ffffff";
    h4.style.color = "#ffffff"
}

function out() {
    assinar.style.background = "#008930";
    plano.style.color = "#000";
    h4.style.color = "#000"
}

plano.addEventListener("mouseenter", enter)
plano.addEventListener("mouseout", out)