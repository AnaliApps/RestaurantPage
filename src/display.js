import './style.css';
export default function displayUI(img){
    const div = document.querySelector('#content');
    const h1 = document.createElement('h1');
    h1.textContent = "Analizer Restaurant"
    h1.setAttribute("class","header")
    const Icon = new Image();
    Icon.src = img;
    const para = document.createElement('p');
    para.innerHTML = "Welcome to Analizer Restaurant, where culinary excellence meets comfort dining. Indulge in a symphony of flavors crafted by our passionate chefs, showcasing a diverse menu that caters to every palate. From sizzling steaks to fresh seafood, aromatic curries to hearty pastas, we pride ourselves on delivering mouthwatering dishes that tantalize the taste buds. Each bite is a journey through exquisite ingredients and meticulous preparation, ensuring a dining experience that lingers long after the last forkful. Join us and elevate your dining adventure to new heights at <strong>Analizer Restaurant</strong>. Taste the difference, savor the moment, and make every meal memorable."
    // div.appendChild(header)
    div.appendChild(h1);
    div.appendChild(Icon);
    div.appendChild(para);
    return div;
}