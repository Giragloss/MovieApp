window.renderList = {
	listUl:  document.querySelector('main ul'),
	render() {
		window.reques.response.results.forEach((item) => {
  			renderList.list(item)
		})
	},
	list(item) {
		let list = '<li><div class="content">'
		let thumb = `<div class="thumb"><img src="https://www.themoviedb.org/t/p/w440_and_h660_bestv2/${item.poster_path}"></div>`

		let vote;
		let voteAverage = `${item.vote_average}.0`
		if(voteAverage.split('.')[0].length>=2){
			voteAverage = voteAverage.split('.')[0]
		}else{
			voteAverage = voteAverage.split('.');
			voteAverage = [[voteAverage[0]],[voteAverage[1]]].join('.')
		}
		if(parseFloat(item.vote_average) >= 8){
			vote = `<div class="vote"><p class="voteP gren">${voteAverage}</p></div>`

		}else if(parseFloat(item.vote_average) >= 4.1){
			vote = `<div class="vote"><p class="voteP yel">${voteAverage}</p></div>`

		}else{
			vote = `<div class="vote"><p class="voteP red">${voteAverage}</p></div>`

		}

		let info;
		if(item.title){
			info = `<div class="info"><p class="title">${item.title}</p></div>`
		}else{
			info = `<div class="info"><p class="title">${item.name}</p></div>`
		}

		let sinopse = `<div class="sinopse"><h2>Sinopse</h2><div><p class="text">${item.overview}</p></div></div>`
		let link = `<div class="link"><a href="https://www.themoviedb.org/${item.media_type}/${item.id}"></a>/div>`
		

		list += `${thumb}${vote}${info}${sinopse}${link}</div></li>`

		renderList.listUl.innerHTML+=list
		window.controlList.atualizar()
	},
	resetList(){
		renderList.listUl.innerHTML=''
	}
}