// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

let swiperButtonNext = document.querySelector('.collections__swiper-button-next');
let swiperButtonPrev = document.querySelector('.collections__swiper-button-prev');

/*

function showButton() {
	
	if (swiperButtonDisabled && swiperButtonPrev.style.visibility == "hidden") {
		
		console.log(swiperButtonDisabled);
	} else {
		return null;
	}



}

console.log(swiperButtonDisabled);




setTimeout(showMessage, 3000);

/*if(document.querySelector('.swiper-button-disabled') &&  document.querySelector('.collections__swiper-button-prev')){
	console.log(swiperButtonDisabled);
}*/


setTimeout(function () {
	swiperButtonNext.addEventListener('click', function () {

		let elementNext = document.getElementById("collections__swiper-button-next");

		const classListNext = elementNext.getAttribute("class");


		if (classListNext.includes("collections__swiper-button-next") && classListNext.includes("swiper-button-disabled")) {

			swiperButtonNext.style.display = "none";
			swiperButtonPrev.style.display = "block";
		}

	});
	swiperButtonPrev.addEventListener('click', function () {
		let elementPrev = document.getElementById("collections__swiper-button-prev");
		const classListPrev = elementPrev.getAttribute("class");
		if (classListPrev.includes("collections__swiper-button-prev") && classListPrev.includes("swiper-button-disabled")) {
			swiperButtonNext.style.display = "block";
			swiperButtonPrev.style.display = "none";

		}

	});

}, 1000);






