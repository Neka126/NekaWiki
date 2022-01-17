neka.Wiki=function(id){
	view.innerHTML=neka.Wiki.index[id].content
	document.getElementsByTagName("title")[0].innerHTML=neka.Wiki.index[id].title||id
}