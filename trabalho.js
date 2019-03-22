
var itens = document.querySelectorAll("#trab li"),
	inputText = document.getElementById("txt"),
	lis =[], liIndex;
	
	
for(var i=0; i< itens.length; i++){
	lis.push(itens[i].innerHTML);
}

var botaoSave = document.getElementById("btnSave");
var botaoApagar = document.getElementById("btnDelete");
var botaoAdc =document.getElementById("btnAdc");
for(var i=0; i < itens.length; i++){
	itens[i].onclick = function(){
		liIndex = lis.indexOf(this.innerHTML);
		inputText.value = this.innerHTML;
		botaoSave.style.display = "block";
		botaoApagar.style.display = "block";
		botaoAdc.style.display = "none";
	
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
	itens[liIndex].innerHTML = inputText.value;
	
}





//deletar tarefa


function deleteTarefa(){
	itens[liIndex].parentNode.removeChild(itens[liIndex]);
	inputText.value = "";
}



