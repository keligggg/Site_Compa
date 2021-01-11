function afficheMenu(obj){
	
	var idMenu     = obj.id;
	var idSousMenu = 'sous' + idMenu;
	var sousMenu   = document.getElementById(idSousMenu);
	
	for(var i = 1; i <= 4; i++){
		if(document.getElementById('sousmenu' + i) && document.getElementById('sousmenu' + i) != sousMenu){
			document.getElementById('sousmenu' + i).style.display = "none";
		}
	}
	
	if(sousMenu){
		//alert(sousMenu.style.display);
		if(sousMenu.style.display == "block"){
			sousMenu.style.display = "none";
		}
		else{
			sousMenu.style.display = "block";
		}
	}
	
}