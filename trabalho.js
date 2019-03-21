

function addTarefa(){
	var txtVal = document.getElementById('txt').value,
		listNode = document.getElementById('trab'),
		liNode = document.createElement("LI"),
		txtNode = document.createTextNode(txtVal);
		
		
		
		liNode.appendChild(txtNode);
		listNode.appendChild(liNode);
}

var items = document.querySelectorAll("#trab li"),
	inputText = document.getElementById("txt"),
	tab =[], liIndex;

for(var i=0; i< items.length; i++){
	tab.push(items[i].innerHTML);
}

for(var i=0; i < items.length; i++){
	items[i].onclick = function(){
	
	inputText.value = this.innerHTML;
	liIndex = tab.indexOf(this.innerHTML);
	
	}
}

function editTarefa(){
	items[liIndex].innerHTML = inputText.value;
	
	
	tab.length = 0;
	
	for(var i=0; i< items.length; i++){
		tab.push(items[i].innerHTML);
	}

}

var items = document.querySelectorAll("#trab li"),
	inputText = document.getElementById("txt"),
	tab =[], liIndex;

for(var i=0; i< items.length; i++){
	tab.push(items[i].innerHTML);
}

for(var i=0; i < items.length; i++){
	items[i].onclick = function(){
	
	inputText.value = this.innerHTML;
	liIndex = tab.indexOf(this.innerHTML);
	
	}
}

function editTarefa(){
	items[liIndex].innerHTML = inputText.value;
	
	
	tab.length = 0;
	
	for(var i=0; i< items.length; i++){
		tab.push(items[i].innerHTML);
	}

}