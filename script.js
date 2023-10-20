AOS.init();

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});




fetchShipInfo()

function fetchShipInfo() {
  const url = `https://swapi.dev/api/starships/`;
  fetch(url)
    .then(response => response.json())
    .then(data => displayShipInfo(data.results))
    .catch(error => console.log(error));
}



async function displayShipInfo(ships) {
  let monSwiper = await document.getElementById("swiper-wrapper")
     ships.forEach(infoShip => {
      const template = `   
      
          <div  data-aos="zoom-in" data-aos-delay="1000" data-aos-duration="2000"class="swiper-slide">
            <p class="color"> name : "${infoShip.name}"</p>
            <p class="color"> model : "${infoShip.model}"</p>
            <p class="color"> manufacturer : "${infoShip.manufacturer}"</p>
            <p class="color"> length : "${infoShip.length}"</p>
            <img class="img" src="${infoShip.name}.jpeg">
          </div>
      `;
    monSwiper.insertAdjacentHTML('beforeend', template);
    });}

  
