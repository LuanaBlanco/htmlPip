alert("cuenta");
const cuentaMsql = "http://localhost:8080/cuenta"

const pip = new XMLHttpRequest();
function onRequestHandler(){
   if(this.readyState == 4 && this.status == 200){

       const data = JSON.parse(this.response);
        const HTMLResponse = document.querySelector("#cuenta");
        const template = data.map(traer =>`<li> ${traer.cuenta}</li> <li> ${traer.numeroDeCuenta} </li> <li> ${traer.tipoDeCuenta}</li>`);
       HTMLResponse.innerHTML = `<ul> ${template} </ul>`;
       console.log(data);
    }
}
pip.addEventListener("load", onRequestHandler);
pip.open("GET",`${cuentaMsql}/traer`)
pip.send();