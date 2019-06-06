window.onload = function(){
	 var items = document.getElementsByClassName("food-item")
	  for(var i=0; i < items.length; i++){
		  if(items[i].addEventListener){
			   items[i].addEventListener("click", function(e){
				     sessionStorage.clear();
	 
                 // Save data to sessionStorage
                 sessionStorage.setItem('food-name', items[i].getAttribute("data-name"));
                 sessionStorage.setItem('fat',  items[i].getAttribute("data-fat"));
                 sessionStorage.setItem('sugar', items[i].getAttribute("data-sugar"));
                 sessionStorage.setItem('carb', items[i].getAttribute("data-carb"));
			   });
		  }
	 }
	

	
}