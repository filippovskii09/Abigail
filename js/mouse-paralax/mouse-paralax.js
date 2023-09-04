	const paralax = (section) => {
		const elements = document.querySelectorAll('[data-mouse]')

		section.addEventListener('mousemove', (event) => {
			let { width, height } = section.getBoundingClientRect();
			let offX = event.pageX - (width * 0.5)
			let offY = event.pageY - (height * 0.5)
	
			// const wrapper = document.querySelector('.main__decors');
	
			elements.forEach(element => {
				const speed = element.getAttribute('data-speed');
				const x = (offX * speed) / 100;
				const y = (offY * speed) /100;
				
				element.style.transform = `translateX(${x}px) translateY(${y}px)`
			})
		})

		section.addEventListener('mouseleave', () => {
			elements.forEach(element => {
				element.style.transform = `translateX(0px) translateY(0px)`
			})
		})
	}
	
	paralax(document.querySelector('main'));