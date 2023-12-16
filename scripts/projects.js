document.addEventListener('DOMContentLoaded', () => {
	let projects = [
		{
			"title": "Кейс Lviv HR Solutions",
			"subtitle": "Маркетинг освітніх послуг LHRS",
			"link": "https://www.fishdigital.agency/keys-hr-solutions",
			"image": "images/project1.png",
		},
		{
			"title": "Кейс Tanner",
			"subtitle": "Креативна реклама взуття для бренду Tanner",
			"link": "https://www.fishdigital.agency/cases-tanner",
			"image": "images/project2.jpg",
		},
		{
			"title": "Кейс Bionerica",
			"subtitle": "Успішна реклама продуктів харчування",
			"link": "https://www.fishdigital.agency/keys-bionerica",
			"image": "images/project3.jpg",
		},
		{
			"title": "Кейс Акварель",
			"subtitle": "Реклама для забудовника Акварель (м. Одеса)",
			"link": "https://www.fishdigital.agency/keys-zabudovnik-akvarel",
			"image": "images/project4.jpg",
		},

	]

	function createElement(item, index) {
		console.log(index)
		const servicesList = document.getElementById('servicesList')

		const serviceRow = document.createElement('div')
		serviceRow.className = 'row services-section-row d-flex mb-20'

		const serviceItem = document.createElement('div')
		serviceItem.className = 'row-item services-section-item d-flex v-centered'

		const serviceIcon = document.createElement('div')
		serviceIcon.className = 'services-item-icon'
		serviceIcon.style.backgroundImage = `url(${item.icon})`
		serviceIcon.style.backgroundRepeat = 'no-repeat'
		serviceIcon.style.backgroundPosition = 'center'
		serviceIcon.style.backgroundSize = 'cover'

		const serviceTitle = document.createElement('div')
		serviceTitle.className = 'services-item-title uppercase'
		serviceTitle.textContent = item.title

		const serviceSubitle = document.createElement('div')
		serviceSubitle.className = 'services-item-text'
		serviceSubitle.textContent = item.subtitle

		const serviceBtn = document.createElement('a')
		serviceBtn.className = 'btn btn__blue'
		serviceBtn.href = item.link
		serviceBtn.textContent = 'Більше...'

		const serviceImg = document.createElement('div')
		serviceImg.className = 'row-item services-section-item'

		const serviceImgContent = document.createElement('img')
		serviceImgContent.src = item.image
		

		serviceImg.append(serviceImgContent)

		serviceItem.append(serviceIcon)
		serviceItem.append(serviceTitle)
		serviceItem.append(serviceSubitle)
		serviceItem.append(serviceBtn)
		
		serviceRow.append(serviceItem)
		serviceRow.append(serviceImg)


		servicesList.append(serviceRow)
	}

	projects.forEach((element, index) => {
	  createElement(element, index)
	  
	});
	
})

