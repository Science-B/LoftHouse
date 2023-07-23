const navBtn = document.querySelector(".nav-icon-btn");
const navIcon = document.querySelector(".nav-icon");
const nav = document.querySelector(".header__top-row");

navBtn.onclick = function () {
  navIcon.classList.toggle("nav-icon--active");
};

nav.onclick = function () {
  nav.classList.toggle("header__top-row--mobile");
  document.body.classList.toggle("no-scroll");
};

mask("[data-tel-input]");

/* Phone Mask */

const phoneInputs = document.querySelectorAll("[data-tel-input]");
phoneInputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.value == "+") input.value = "";
  });
  input.addEventListener("blur", () => {
    if (input.value == "+") input.value = "";
  });
});

/* Yandex Map */

ymaps.ready(init);
function init() {
  var map = new ymaps.Map("map", {
    center: [59.943543, 30.338928],
    zoom: 16,
  });

  var myPlacemark = new ymaps.Placemark(
    [59.943543, 30.338928],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "../img/main/map/location-pin.svg",
      iconImageSize: [40, 40],
      iconImageOffset: [-20, -40],
    }
  );

  map.controls.remove("geolocationControl");
  map.controls.remove("searchControl");
  map.controls.remove("trafficControl");
  map.controls.remove("typeSelector");

  map.controls.remove("rulerControl");
  map.behaviors.disable(["scrollZoom"]);

  map.geoObjects.add(myPlacemark);
}
