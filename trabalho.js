
var items = document.querySelectorAll("#trab li"),
	inputText = document.getElementById("txt"),
	tab =[], liIndex;
	
	
	for(var i=0; i< items.length; i++){
	tab.push(items[i].innerHTML);
}

for(var i=0; i < items.length; i++){
	
	items[i].onclick = function(){
	liIndex = tab.indexOf(this.innerHTML);
	inputText.value = this.innerHTML;

	
	}
}


function addTarefa(){
	 
	var	listNode = document.getElementById("trab"),
		txtNode = document.createTextNode(inputText.value),
		liNode = document.createElement("LI");
		
		
		liNode.appendChild(txtNode);
		listNode.appendChild(liNode);
}






//editar tarefa





function editTarefa(){
	items[liIndex].innerHTML = inputText.value;
}





//deletar tarefa


function deleteTarefa(){
	items[liIndex].parentNode.removeChild(items[liIndex]);
	inputText.value = "";
}
