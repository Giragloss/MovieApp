window.controlList = {
	atualizar() {
		const listItem = document.querySelectorAll('main ul li')
		const listThumb = document.querySelectorAll('main ul li .content .thumb')

		listThumb.forEach((item) => {
			item.addEventListener('click', () => {
				item.parentNode.children[4].children[0].click()
			},false)
		})

		listItem.forEach((item) => {
			item.addEventListener('mouseover', () => {
				item.children[0].children[3].style.transform='translateY(0px)'
			},false)
			item.addEventListener('mouseout', () => {
				item.children[0].children[3].style.transform='translateY(322px)'
			},false)
		})
	}
}

controlList.atualizar()