window.reques = {
	response: '',
	history: '',
	request(url) {
		const xhttp = new XMLHttpRequest()
		xhttp.onreadystatechange = function(){
			if (this.readyState == 4 && this.status == 200) {
			  	returnFun(this.responseText)
			}
		};
		xhttp.open("GET", `https://api.themoviedb.org/3/${url}`, true);
		xhttp.send();

		function returnFun(a){
			reques.response = JSON.parse(a)
		}
	},
	requestUrl: async (url) => {
		if(url === 'page'){
			url = reques.history.split('page=')[0]+`&page=${window.pageList.pageId}`
			window.renderList.resetList()
		}

		try{	
			await window.reques.request(`${url}`)
		
		}catch(e){
			console.log(e)
		}
		setTimeout(() => {
			window.renderList.render()
		},600)

		reques.history=url
	}
}