document.addEventListener('DOMContentLoaded', () => {
	let services = [
		{
			"title": "контекстна реклама в Google",
			"icon": "images/services/service1.png",
			"subtitle": "Клієнт побачить всі ваші оголошення",
			"link": "https://www.fishdigital.agency/google",
			"image": "images/marketing.jpg",
		},
		{
			"title": "налаштуємо таргетовану рекламу",
			"icon": "images/services/service2.png",
			"subtitle": "Виведемо ваш бізнес на новий рівень розвитку та доходу!",
			"link": "https://www.fishdigital.agency/target",
			"image": "images/marketing2.jpg",
		},
		{
			"title": "Кому потрібна SEO-оптимізація?",
			"icon": "images/services/service3.png",
			"subtitle": "Оптимізація пошуку потрібна усім бізнесам, які мають сайт",
			"link": "https://www.fishdigital.agency/seo",
			"image": "images/marketing3.jpg",
		},
		{
			"title": "Просування в соцмережах",
			"icon": "images/services/service3.png",
			"subtitle": "Для підвищення прибутку та впізнаваності",
			"link": "https://www.fishdigital.agency/smm",
			"image": "images/marketing4.png",
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
		if (index == 0) {
			serviceBtn.className = 'btn btn__violet'
		} else {
			serviceBtn.className = 'btn btn__blue'
		}
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

	services.forEach((element, index) => {
	  createElement(element, index)
	  
	});
	
})

