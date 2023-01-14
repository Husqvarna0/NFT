// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

window.onload = 	function(){
	document.addEventListener("click", documentActions);

	function documentActions(e){
		const targetElement = e.target;

		if(targetElement.classList.contains("card-auctions__more")){
			getCards(targetElement);
			e.preventDefault();
			
		}
	}

	async function getCards(button){
		if(!button.classList.contains("_hold")){
			button.classList.add("_hold");
			const file = "json/auctions.json";
			let response = await fetch(file,{
				method:"GET"
			});
			if(response.ok){
				let result = await response.json();
				loadCards(result);
				button.classList.remove("_hold");
				button.remove();
			}else{
				alert("Помилка");
			}

		}
	}

	function loadCards(data){
		const auctionsWrapper = document.querySelector('.auctions__wrapper');
		data.cards.forEach(item=>{
			const cardsId = item.id;
			const cardsUrl = item.url;
			const cardsImage = item.image;
			const cardsTime = item.time;
			const cardsAvatar = item.avatar;
			const cardsTitleAttribution = item.titleAttribution;
			const cardsContacts = item.contacts;
			const cardsLikesIcon = item.likesIcon;
			const cardsLikesAmount = item.likesAmount;
			const cardsTitleBid = item.titleBid;
			const cardsCrypto = item.crypto;
			const cardsButton = item.button;

			let template = `
			<div data-pid="${cardsId}" class="auctions__slide swiper-slide">
									<div class="auctions__card card-auctions">
										<div class="card-auctions__image image-card-auctions">
											<a class="image-card-auctions__link" href="${cardsUrl}"><img src="img/auctions/card/${cardsImage}" alt="card image"></a>
											<div class="image-card-auctions__time">${cardsTime}</div>
										</div>
										<div class="card-auctions__attribution attribution-card-auctions">
											<div class="attribution-card-auctions__author">
												<div class="attribution-card-auctions__avatar">
													<img src="img/auctions/${cardsAvatar}" alt="author_avatar">
													
												</div>
												<div class="attribution-card-auctions__info">
													<div class="attribution-card-auctions__title">${cardsTitleAttribution}</div>
													<div class="attribution-card-auctions__contacts">${cardsContacts}</div>
												</div>
											</div>
											<div class="info-card-auctions__likes likes-info-card-auctions">
												<div class="likes-info-card-auctions__icon"><img src="img/auctions/card/icons/${cardsLikesIcon}" alt=""></div>
												<div class="likes-info-card-auctions__amount">${cardsLikesAmount}</div>
											</div>
										</div>
										<div class="card-auctions__bid bid-card-auctions">
											<div class="bid-card-auctions__title">${cardsTitleBid}</div>
											<div class="bid-card-auctions__crypto">${cardsCrypto}</div>
										</div>
										<a href="" class="card-auctions__bid">${cardsButton}</a>
									</div>
								</div>
			`;
			cardsItems.insertAdjacentHTML(`beforeend`, template);
			return template;
		});
	}
}

function colectionsNavigation(){
	if(document.querySelector('.collections__swiper-button-next')&document.querySelector('.collections__navigation.swiper-button-disabled')){
		document.getElementsByClassName(collections__swiper-button-next)[0].style.display = "none";
		document.getElementsByClassName(collections__swiper-button-prev)[0].style.display = "block";
	}
}
