
var 
	inputText = document.getElementById("txt"),
	itens = document.querySelectorAll("#trab li"),
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
		
		console.log(this.innerHTML + " INDEX = " + liIndex);
		
		inputText.value = this.innerHTML;
		botaoSave.style.display = "inline";
		botaoApagar.style.display = "inline";
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
	btnAdc.style.display = "inline";
	btnSave.style.display ="none";
	btnDelete.style.display = "none";
}





//deletar tarefa


function deleteTarefa(){
	itens[liIndex].parentNode.removeChild(itens[liIndex]);
	inputText.value = "";
	
	btnAdc.style.display = "inline";
	btnDelete.style.display ="none";
	btnSave.style.display = "none";
	
}


function saveToStorange(){
	localStorage.setItem('list_tarefa', JSON.stringify(tarefas));	
	
	
}


