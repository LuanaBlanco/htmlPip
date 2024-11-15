
const apiUrl = "https://jsonplaceholder.typicode.com"

const xhr = new XMLHttpRequest();
function onRequestHandler(){
   if(this.readyState == 4 && this.status == 200){

       const data = JSON.parse(this.response);
        const HTMLResponse = document.querySelector("#app");
        const tpl = data.map(user =>`<li> ${user.name}  ${user.company.name}</li>`);
       HTMLResponse.innerHTML = `<ul> ${tpl} </ul>`;
       console.log(data);
    }
}
xhr.addEventListener("load", onRequestHandler);
xhr.open("GET",`${apiUrl}/users`)
xhr.send();
