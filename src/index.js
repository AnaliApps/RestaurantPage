import displayUI from "./display"
import displayHomeUI from "./home"
import displayMenuUI from "./menu";
import displayAboutUI from "./about";
import Icon from './icon.png'
document.body.appendChild(displayUI(Icon))
 let homebtn = document.querySelector("#home");
 let menubtn = document.querySelector("#menu");
 let aboutbtn = document.querySelector("#about")
 console.log(homebtn)
 homebtn.addEventListener("click",(e)=>{
    document.body.innerHTML = '';
    document.body.appendChild(displayHomeUI("Home"));
 })

 menubtn.addEventListener("click",()=>{
    document.body.innerHTML = '';
    document.body.appendChild(displayMenuUI("Menu"));
 })

 aboutbtn.addEventListener("click",()=>{
    document.body.innerHTML = '';
    document.body.appendChild(displayAboutUI("About"));
 })

