var button = document.getElementById("buttonsurf");

button.addEventListener('click',function(e){
    
	let surface = 0;
	let larg = document.getElementById("larg").value;
	let long = document.getElementById("long").value;
	if (larg > 0 && long > 0) {
		surface = larg*long;
		document.getElementById("surf").innerText = "Surface :" + surface + "m2 " ;
	}
	else {
		document.getElementById("surf").innerText = "Veuillez entrer des données valides" ;
	}
	
	
	

})