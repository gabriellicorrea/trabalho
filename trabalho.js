
var itens = document.querySelectorAll("#trab li"),
	inputText = document.getElementById("txt"),
	lis =[], liIndex,
	liSelecionado = null;
	
	;
	
	
for(var i=0; i< itens.length; i++){
	lis.push(itens[i].innerHTML);
}

var botaoSave = document.getElementById("btnSave");
var botaoApagar = document.getElementById("btnDelete");
var botaoAdc =document.getElementById("btnAdc");

for(var i=0; i < itens.length; i++){
	
	
	itens[i].onclick = function(){
		liIndex = lis.indexOf(this.innerHTML);
		itens[liIndex].innerHTML = inputText.value;
		inputText.value = this.innerHTML;
		botaoSave.style.display = "inline";
		botaoApagar.style.display = "none";
		botaoAdc.style.display = "none";
		
			
	}
}


function addTarefa(){
	 
	var	listNode = document.getElementById("trab"),
		txtNode = document.createTextNode(inputText.value),
		liNode = document.createElement("li");
	
		liNode.appendChild(txtNode);
		listNode.appendChild(liNode);
	
	
	
	 liNode.onclick = function(){
     liIndex = lis.indexOf(liNode.innerHTML);
  		inputText.value = this.innerHTML;
		btnAdc.style.display = "none";
		btnSave.style.display ="inline";
		btnDelete.style.display = "inline";
	 	inputText.value = liNode.innerHTML;
	 }
document.querySelector("#txt").value = "";
	
}

//editar tarefa


function editTarefa(){
		
	liSelecionado.innerHTML = document.querySelector("#txt").value;
	
	

}

//deletar tarefa


function deleteTarefa(){
	liSelecionado.style.display = "none";
	
}




document.addEventListener("click",function(evento){
	if(event.target.nodeName === 'LI') {
		liSelecionado = evento.target;
	}
})
