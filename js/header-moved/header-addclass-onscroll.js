	const header = document.querySelector('.header');
	const addHeaderClass = () => header.classList.add('scroll')
	const removeHeaderClass = () => header.classList.remove('scroll')

	window.addEventListener('scroll', () => {
		let scrollPos = window.scrollY

		if(scrollPos >= 10) {
			addHeaderClass();
		}	else {
			removeHeaderClass()
		}
	})