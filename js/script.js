// Esercizio di oggi: Carosello Array di Oggetti
// nome repo: js-array-objects-carousel
// Consegna:
// Riprendiamo l'esercizio carosello e modifichiamone il codice per renderlo funzionante con un array di oggetti al posto dell'array semplice.
// Ecco l'array con i dati:
// const images = [
// 	{
// 		image: '01.webp',
// 		title: "Marvel's Spiderman Miles Morale",
// 		text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
// 	},
// 	{
// 		image: '02.webp',
// 		title: 'Ratchet & Clank: Rift Apart',
// 		text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
// 	},
// 	{
// 		image: '03.webp',
// 		title: 'Fortnite',
// 		text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
// 	},
// 	{
// 		image: '04.webp',
// 		title: 'Stray',
// 		text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
// 	},
// 	{
// 		image: '05.webp',
// 		title: "Marvel's Avengers",
// 		text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
// 	},
// ];
// BONUS 1:
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
// BONUS 2:
// Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.
const arrImages = [
    {
     	image: '01.webp',
     	title: "Marvel's Spiderman Miles Morale",
     	text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
     	image: '02.webp',
     	title: 'Ratchet & Clank: Rift Apart',
     	text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
     	image: '03.webp',
     	title: 'Fortnite',
     	text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
    },
    {
     	image: '04.webp',
     	title: 'Stray',
     	text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    {
    	image: '05.webp',
     	title: "Marvel's Avengers",
     	text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
    },
 ];
	

 const eleSlider = document.querySelector('.slider-viewer');
 const eleButtonUp = document.querySelector('.button-up');
 const eleButtonDown = document.querySelector('.button-down');
 const eleSliderThumbs = document.querySelector('.thumbs');
 
 
 for (let i = 0; i < arrImages.length; i++) {
	 const eleImg = document.createElement('img');
	 eleImg.src = `img/${arrImages[i].image}`;
	 eleImg.classList.add('slider-img');
	 eleImg.alt = arrImages[i].title;
	 const eleText = document.createElement('div');
	 eleText.classList.add('text');
	 eleText.innerHTML = `
	   <h2>${arrImages[i].title}</h2>
	   <p>${arrImages[i].text}</p>
	 `;
	 
	 if (i === 0) {
		 eleImg.classList.add('active');
		 eleText.classList.add('active');
	 }

	 
	 eleSlider.append(eleImg);
	 eleSlider.append(eleText);
 
	 const eleThumb = document.createElement('img');
	 eleThumb.src = `img/${arrImages[i].image}`;
	 eleThumb.classList.add('thumb-img');
	 if (i === 0) {
		 eleThumb.classList.add('active');
	 }
	 eleSliderThumbs.append(eleThumb);
 }
 
 
 const listEleImg = document.querySelectorAll('.slider-img'); 
 const listThumbs = document.querySelectorAll('.thumb-img');
 const listEleText = document.querySelectorAll('.text')
 
 let activeIndex = 0;
 
 
 
 eleButtonDown.addEventListener('click', function () {
	 
	 listEleImg[activeIndex].classList.remove('active');
	 listThumbs[activeIndex].classList.remove('active');
	 listEleText[activeIndex].classList.remove('active');
	 
	 activeIndex++;
	 if (activeIndex === listEleImg.length) {
		 activeIndex = 0;
	 }
	 
	 listEleImg[activeIndex].classList.add('active');
	 listThumbs[activeIndex].classList.add('active');
	 listEleText[activeIndex].classList.add('active');
	 ;
 });
 
 eleButtonUp.addEventListener('click', function () {
	 
	 listEleImg[activeIndex].classList.remove('active');
	 listThumbs[activeIndex].classList.remove('active');
	 listEleText[activeIndex].classList.remove('active');
	 
	 if (activeIndex === 0) {
		 activeIndex = listEleImg.length;
	 }
	 activeIndex--;
 
	 
	 listEleImg[activeIndex].classList.add('active');
	 listThumbs[activeIndex].classList.add('active');
	 listEleText[activeIndex].classList.add('active');
	 
 });