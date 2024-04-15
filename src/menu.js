export default function displayMenuUI(){
    let element = document.createElement("div");
    let h1 = document.createElement("h1");
    h1.textContent=`Menu Tab`;
    let para = document.createElement("p");
    para.textContent = "Iam the best programmer alive today."
    element.appendChild(h1);
    element.appendChild(para);
    return element;
}