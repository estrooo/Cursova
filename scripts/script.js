document.addEventListener('DOMContentLoaded', () => {
	const mobIcons = document.getElementById('mobIcons')
	const iconOpen = mobIcons.querySelector('.fa-bars')
	const iconClose = mobIcons.querySelector('.fa-xmark')
	const mobileMenu = document.getElementById('mobileMenu')

	mobIcons.addEventListener('click', () => {
		mobileMenu.classList.toggle('show-menu')
		mobIcons.querySelector('.fa-bars').classList.toggle('hide')
		mobIcons.querySelector('.fa-xmark').classList.toggle('hide')
	})

	const swiper = new Swiper('.swiper', {
	  loop: true,
	  pagination: {
	    el: '.swiper-pagination',
	  },
	});

	function highlightCurrentPage() {
    const currentPageUrl = window.location.href.split("/")
    console.log(currentPageUrl[currentPageUrl.length - 1])
    // const menuItem = document.querySelector('#menu a[href="' + currentPageUrl[currentPageUrl.length - 1] + '"]');

    const menuItem = document.querySelector(`#menu a[href="${currentPageUrl[currentPageUrl.length - 1]}"]`);
	console.log(menuItem)

    if (menuItem) {
        menuItem.classList.add('current');
    }
}

highlightCurrentPage()

// 	let current = 0;
// for (var i = 0; i < document.links.length; i++) {
//     if (document.links[i].href === document.URL) {
//         current = i;
//     }
// }
// document.links[current].className = 'current';

	document.getElementById('currentYear').textContent = new Date().getFullYear()
})

