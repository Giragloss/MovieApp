const searchDiv = document.querySelector('header .search')
const searchInput = document.querySelector('header .search input')
const searchBtn = document.querySelector('header .search button')
const searchBtnImg = document.querySelector('header .search button img')

const movieBtn = document.querySelector('header .movie')
const tvBtn = document.querySelector('header .tv')
const popularBtn = document.querySelector('header .popular')

searchInput.addEventListener('focus', () => {
	searchDiv.style.borderColor = "#F9B8F9"
},false)

searchInput.addEventListener('blur', () => {
	searchDiv.style.borderColor = "#fff"
},false)

searchBtnImg.addEventListener('mouseenter',() => {
	searchBtnImg.src = "./svg/searchFocus.svg"
},false)

searchBtn.addEventListener('mouseover',() => {
	searchBtnImg.src = "./svg/search.svg"
},false)

searchBtn.addEventListener('click',() => {
	window.renderList.resetList()
	window.pageList.resetPage()
	window.reques.requestUrl(`search/multi?api_key=905e48930b10b182081f75bade4b1b02&language=pt-BR&query=${searchInput.value}&page=1&include_adult=false&page=${window.pageList.pageId}`)
	searchInput.value=''
	searchBtnImg.src = "./svg/search.svg"
},false)

movieBtn.addEventListener('click',() => {
	window.renderList.resetList()
	window.pageList.resetPage()
	window.reques.requestUrl(`trending/movie/week?api_key=905e48930b10b182081f75bade4b1b02&language=pt-BR&page=${window.pageList.pageId}`)
},false)

tvBtn.addEventListener('click',() => {
	window.renderList.resetList()
	window.pageList.resetPage()
	window.reques.requestUrl(`trending/tv/week?api_key=905e48930b10b182081f75bade4b1b02&language=pt-BR&page=${window.pageList.pageId}`)
},false)

popularBtn.addEventListener('click',() => {
	window.renderList.resetList()
	window.pageList.resetPage()
	window.reques.requestUrl(`trending/all/week?api_key=905e48930b10b182081f75bade4b1b02&language=pt-BR&page=${window.pageList.pageId}`)
},false)