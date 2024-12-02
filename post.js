const apiUrll = "http://localhost:8080/cuenta"

const xhrr = new XMLHttpRequest();
function onRequestHandler(){
   if(this.readyState == 4 && this.status == 200){
    const data = JSON.parse(this.response);
    
   console.log(data);
    }
}
xhrr.addEventListener("load", onRequestHandler);
xhrr.open("POST",`${apiUrll}/crear`);
xhrr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
xhrr.send(JSON.stringify({ "cuenta":"aaa", "numeroDeCuenta":123, "tipoDeCuenta":"peso"}));