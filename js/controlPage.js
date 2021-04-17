window.pageList = {
	pageId: 1,
	pageProx() {
		pageList.pageId += 1
		window.reques.requestUrl('page')
	},
	pageAnt() {
		pageList.pageId -= 1
		window.reques.requestUrl('page')
	},
	resetPage() {
		pageList.pageId = 1
		pageStr.textContent=`Page ${window.pageList.pageId}`
	}
}

const proxBtn = document.querySelector('footer .prox')
const antBtn = document.querySelector('footer .ant')
const pageStr = document.querySelector('footer p')

proxBtn.addEventListener('click',() => {
	window.pageList.pageProx()
	pageStr.textContent=`Page ${window.pageList.pageId}`
},false)

antBtn.addEventListener('click',() => {
	window.pageList.pageAnt()
	pageStr.textContent=`Page ${window.pageList.pageId}`
},false)