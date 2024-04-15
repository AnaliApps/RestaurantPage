export default function displayHomeUI(name){
    let element = document.createElement("div");
    let h1 = document.createElement("h1");
    h1.textContent=`${name} Tab`;
    let btn = document.createElement("button");
    let btnLink = document.createElement("a");
    btnLink.setAttribute("href","index.html")
    btnLink.textContent = "BACK";
    btn.appendChild(btnLink)
    element.appendChild(h1);
    element.appendChild(btn);
    return element;
}