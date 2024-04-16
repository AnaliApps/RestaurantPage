export default function displayMenuUI(){
    let menuList = [{title:'CANARY',price:'$7.46',description:'Fresh slices of banana with Nutella.'},{title:'FRESA',price:'$9.33',description:'Fresh cut strawberries with Nutella.'},{title:'STRAW BANANA',price:'$9.33',description:'Fresh cut strawberries and banana with Nutella.'},{title:'SMORE',price:'$9.33',description:'Nutella and marshmallow with graham cracker topping and ABC sauce.'},{title:'LAST WEDNESDAY',price:'$10.46',description:'Egg,bacon,swiss cheese,mushroom,dijon mustard and spinach.'},{title:'ABCT',price:'$8.99',description:'Avocado,bacon,cheddar,tomato.'},{title:"CHICKEN BACON RANCH",price:'$10.46',description:'Chopped chicken,bacon,sharp cheddar, tomato,spinach ranch.'}]
    let element = document.createElement("div");
    menuList.forEach((item)=>{
        let card = document.createElement("div");
        card.setAttribute("class","card_items")
        let h1 = document.createElement("h2");
        h1.textContent=item.title;
        let span = document.createElement("span");
        span.textContent = item.price
        let innerDiv = document.createElement("div");
        innerDiv.setAttribute("class","card_desc")
        let para = document.createElement("p");
        para.textContent = item.description
        innerDiv.appendChild(h1);
        innerDiv.appendChild(span);
        card.appendChild(innerDiv)
        card.appendChild(para);
        element.appendChild(card);
    })
    
    return element;
}