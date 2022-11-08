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
     	itimage: '03.webp',
     	tle: 'Fortnite',
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
	

const eleSlider = document.querySelector('.slider');
const eleButtonUp = document.querySelector('.button-up');
const eleButtonDown = document.querySelector('.button-down');

// creare i tag immagine nell'html
for (let i = 0; i < arrImages.length; i++) {
    // creare i tag immagine che va nella sezione grande .slider-viewer
	const eleImg = document.createElement('img');
	eleImg.src = arrImages[i];
	eleImg.classList.add('slider-img');

	if (i === 0) {
		eleImg.classList.add('active');
	}

	eleSlider.append(eleImg);
}

arrImages.forEach(objImg => eleSlider.innerHTML+= generateImg(objImg))

function generateImg(objImg) {
    return `
       <div class="slider-viewer">
            <img src ="img/${obj.image}" alt="${obj.title} 
       </div>
    `
}



const listEleImg = document.querySelectorAll('.slider-img'); 

let activeIndex = 0;


eleButtonDown.addEventListener('click', function () {
	
	listEleImg[activeIndex].classList.remove('active');

	
	activeIndex++;

	
	listEleImg[activeIndex].classList.add('active');

	eleButtonUp.classList.remove('hidden');
	if (activeIndex === listEleImg.length - 1) {
		eleButtonDown.classList.add('hidden');
	}
});

eleButtonUp.addEventListener('click', function () {
	
	listEleImg[activeIndex].classList.remove('active');

	
	activeIndex--;

	
	listEleImg[activeIndex].classList.add('active');

	eleButtonDown.classList.remove('hidden');
	if (activeIndex === 0) {
		eleButtonUp.classList.add('hidden');
	}
});