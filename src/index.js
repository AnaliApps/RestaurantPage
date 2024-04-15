import displayUI from "./display"
import displayMenuUI from "./menu";
import displayAboutUI from "./about";
import Icon from './icon.png';
displayUI(Icon);
 let homebtn = document.querySelector("#home");
 let menubtn = document.querySelector("#menu");
 let aboutbtn = document.querySelector("#about");
 let content = document.querySelector("#content");
 console.log(homebtn)
 homebtn.addEventListener("click",(e)=>{
   content.innerHTML = '';
    displayUI(Icon);
 })

 menubtn.addEventListener("click",()=>{
    content.innerHTML = '';
    content.appendChild(displayMenuUI("Menu"));
 })

 aboutbtn.addEventListener("click",()=>{
    content.innerHTML = '';
    content.appendChild(displayAboutUI("About"));
 })

