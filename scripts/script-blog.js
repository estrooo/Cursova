document.addEventListener('DOMContentLoaded', () => {
	let articles = [
		{
			"title": "Редизайн сайту. Як зрозуміти що настав час змін",
			"subtitle": "10 ознак, що вашому сайту потрібен редизайн ",
			"link": "https://www.fishdigital.agency/10-oznak-shcho-potriben-redizayn",
			"image": "images/blog1.jpg",
		},
		{
			"title": "Тренди інтернет маркетингу",
			"subtitle": "Тренди інтернет маркетингу для соц. мереж.",
			"link": "https://www.fishdigital.agency/trendi-marketingu-2023",
			"image": "images/blog2.jpg",
		},
		{
			"title": "Як масштабувати бізнес за кордон?",
			"subtitle": "10 ознак, що вашому сайту потрібен редизайн ",
			"link": "https://www.fishdigital.agency/10-oznak-shcho-potriben-redizayn",
			"image": "images/blog3.jpg",
		},
		{
			"title": "Порівняння Shopify та WordPress",
			"subtitle": "Shopify чи WordPress? Що краще обрати в 2023 році",
			"link": "https://www.fishdigital.agency/shopify-ta-wordpress",
			"image": "images/blog4.jpg",
		},
		{
			"title": "Редизайн сайту. Як зрозуміти що настав час змін",
			"subtitle": "10 ознак, що вашому сайту потрібен редизайн ",
			"link": "https://www.fishdigital.agency/10-oznak-shcho-potriben-redizayn",
			"image": "images/blog1.jpg",
		},

	]

	function createElement(item) {
		const blogList = document.getElementById('blogList')

		const blogItem = document.createElement('div')
		blogItem.className = 'blog-row-item col col-1-2 col-1-4'

		const blogImg = document.createElement('div')
		blogImg.className = 'blog-img'

		let image = document.createElement('img')
		image.src = item.image
		image.alt = 'blog article'

		const blogContent = document.createElement('div')
		blogContent.className = 'blog-content d-flex'

		let blogTitle = document.createElement('div')
		blogTitle.textContent = item.title
		blogTitle.className = 'blog-title bold'

		let blogSubtitle = document.createElement('div')
		blogSubtitle.textContent = item.subtitle
		blogTitle.className = 'blog-subtitle main-text'

		const blogBtn = document.createElement('a')
		blogBtn.className = 'btn btn__blue'
		blogBtn.href = item.link
		blogBtn.textContent = 'Читати'

		blogImg.append(image)

		blogContent.append(blogSubtitle)
		blogContent.append(blogTitle)
		blogContent.append(blogBtn)

		blogItem.append(blogImg)
		blogItem.append(blogContent)

		blogList.append(blogItem)
	}

	articles.slice(0,4).forEach((element) => {
	  createElement(element)
	});
	
})

