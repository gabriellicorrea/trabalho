function teste(){
    var lis = document.querySelectorAll("div, span");
    for(var i=0 ; i < lis.length; i++){
        lis[i].style.color = "red";
    }
}

function addTarefa(){
	var txtVal = document.getElementById('txtVal').value,
		listNode = document.getElementById('trab'),
		liNode = document.createElement("LI"),
		txtNode = document.createTextNode(txtVal);
		
		
		
		liNode.appendChild(txtNode);
		listNode.appendChild(liNode);
}

