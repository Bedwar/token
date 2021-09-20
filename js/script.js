
document.querySelector("#ibm").addEventListener('change',soli)
document.querySelector("#pc").addEventListener('change',soli)
document.querySelector("#tc").addEventListener('change',soli)
document.querySelector("#pd").addEventListener('change',soli)
document.querySelector("#td").addEventListener('change',soli)
document.querySelector("#ads").addEventListener('change',soli)
document.querySelector("#acr").addEventListener('change',soli)

function soli(){
const ibm = document.querySelector("#ibm").value
const pc = document.querySelector("#pc").value
const tc = document.querySelector("#tc").value
const pd = document.querySelector("#pd").value
const td = document.querySelector("#td").value
const ads = document.querySelector("#ads").value
const acr = document.querySelector("#acr").value
let pen = "IBM: " + ibm + " <br> P COMUM: " + pc + " TCOMUM: " + tc + " <br> P DUAL: " + pd + " TDUAL: " + td + "  <br> ADESIVOS: " + ads + " <br> ACRILICO: "  + acr
document.querySelector("#sol").innerHTML =  pen
}

