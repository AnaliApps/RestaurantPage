export default function displayAboutUI(){
    let aboutArr = [{p :" Welcome to Analizer Restaurant",para:"At Analizer Restaurant, we invite you to embark on a culinary journey that delights the senses and celebrates the artistry of food. Nestled in the heart of Mombasa town, our restaurant is more than just a place to dine – it's a vibrant culinary destination where every dish tells a story and every meal is an experience to savor."},{p:"Our Story",para:"Founded with a passion for gastronomy and a commitment to excellence, Analizer is the brainchild of Analizer Restaurant. Inspired by [mention any specific inspirations or influences], our restaurant is a testament to the rich tapestry of flavors and traditions that define [your cuisine or style]."},{p:"Our Cuisine",para:"At Analizer Restaurant, we specialize in swahili dishes, expertly crafted with the finest ingredients sourced from local farmers and producers. Whether you're craving a classic swahili dishes or eager to explore new flavors with our chef's innovative creations, our menu offers something for every palate."},{p:"Our Team",para:"Behind every exceptional meal at Analizer Restaurant is a team of passionate chefs, dedicated staff, and hospitality professionals committed to delivering an unforgettable dining experience. With a shared love for food and hospitality, our team strives to exceed expectations and create lasting memories for every guest."},{p:"Our Philosophy",para:"At Analizer Restaurant, we believe that dining is more than just sustenance – it's an opportunity to connect, celebrate, and indulge in the pleasures of life. That's why we're committed to providing not just great food, but also warm hospitality, inviting ambiance, and memorable moments that keep our guests coming back for more."},{p:"Contact Us",para:"Ready to experience Analizer Restaurant for yourself? We can't wait to welcome you! Visit us at <strong>Mombasa,Bamburi</strong>, make a reservation online, or give us a call at <strong>555 444 010</strong> to secure your table. Follow us on <strong><em>@AnalizerRestaurantPage</em></strong> on facebook to stay updated on the latest news, events, and special offers.Thank you for considering Analizer Restaurant for your dining pleasure. We look forward to serving you soon!"}]
    let element = document.createElement("div");
    aboutArr.forEach((item)=>{
        let card = document.createElement("div");
        card.classList.add("card");
        let h1 = document.createElement("h2");
        h1.textContent=item.p
        let para = document.createElement("p");
        para.innerHTML = item.para
        card.appendChild(h1);
        card.appendChild(para);
        element.appendChild(card);
    })
    return element;
}