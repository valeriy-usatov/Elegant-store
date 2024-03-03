function mobileNav() {
	// Mobile nav button
	const navBtn = document.querySelector('.header-mobile-menu');
	const nav = document.querySelector('.modal');
	const close = document.querySelector('.modal__close');
	const overlay = document.querySelector('.footer__overlay');
	

	navBtn.onclick = function () {
		console.log("hi")
		nav.classList.add('modal__open');
		overlay.classList.add("active")
		document.body.classList.toggle('no-scroll');
			
	};
	close.onclick=()=>{
		nav.classList.remove("modal__open");
		document.body.classList.remove('no-scroll');
		overlay.classList.remove("active");
		console.log("close")
	}

	window.addEventListener('keyup', (e) => {
		if (e.key === 'Escape') {
			nav.classList.remove("modal__open");
			overlay.classList.remove("active");
			document.body.classList.remove('no-scroll');
		}
		
	});

	overlay.onclick=()=>{
		nav.classList.remove("modal__open")
		document.body.classList.remove('no-scroll');
		overlay.classList.remove("active");
	}

	
}

export default mobileNav;