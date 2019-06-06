window.onload = function(){
	var name = sessionStorage.getItem("food-name");
	document.getElementById("name").innerHTML = name;
	
	var fat = sessionStorage.getItem("fat");
	document.getElementById("fat").innerHTML = fat;
	
	var sugar = sessionStorage.getItem("sugar");
	document.getElementById("sugar").innerHTML = sugar;
	
	var carb = sessionStorage.getItem("carb");
	document.getElementById("carb").innerHTML = carb;
	
    var protein = sessionStorage.getItem("protein");
	document.getElementById("protein").innerHTML = carb;
}
    
