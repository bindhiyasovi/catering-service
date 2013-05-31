function validateQuantity(quantity){
	var x = quantity.value;
	//var x=document.forms["order_form"]["quantity"].value;
	if(x==null || x==""){
		alert("Please enter a value greater than 0!");
		//return false;
	}
	
	//var x=document.forms["order_form"]["quantity1"].value;
	alert("Qunatity = " +x);
}
	var counter = 0;
	catArr = new Array();
	
	
//Add extra select box in food order
function addFields(num) {
	var className = "order_menu".concat(num);
	var writeName = "writeroot".concat(num);
	var row = document.getElementsByClassName(className);
	var dup = row[0].innerHTML;
	var newDiv = document.createElement("div");
	newDiv.innerHTML = dup;
	
	document.getElementById(writeName).appendChild(newDiv);
}

//Reading menu file
function readFile(){
	var txtFile = new XMLHttpRequest();
	var lines = new Array();
	txtFile.open("GET", "foodMenu.txt", true);
	txtFile.onreadystatechange = function() {
	  if (txtFile.readyState === 4) {  // Makes sure the document is ready to parse.
	    if (txtFile.status === 200) {  // Makes sure it's found the file.
	      var allText = txtFile.responseText;
	      lines = txtFile.responseText.split("\n"); // Will separate each line into an array
	      
	      var arrSize = lines.length;
	      var cat="";
	      //catArr = new Array();
	      //creating the array
	      for(var i=0; i<=arrSize;i++){
	    	if (i in lines){
	    		var x = lines[i];
	    		var patt = /\-/;
		    	if (patt.test(x)){
		    		var arr = x.split("\-");
		    		var arrlen = arr.length;
		    		var food = arr[0];
		    		var quan = arr[1];
		    		if(food in catArr){
		    			//do nothing
		    		} else {
		    				catArr[food] = new Array();
		    		}
		    		catArr[food][quan] = arr[2];
		    		//alert(" Price for "+food+" and "+quan+" = "+catArr[food][quan]);
		    	} else {
		    		var cat = x;
		    	}
	    	}
	      }
	     
	    }
	  }
	}
	
	txtFile.send(null);
}

//Show the price depending on the quantity & food selected in the select box
function showPrice(food_id,amt_id,rate_id){
	var curries = document.getElementById(food_id);
	var amount = document.getElementById(amt_id);
	var food_item = curries.value;
	var quan = amount.value;
	//alert("Food = "+food_item+" and quantity = "+quan);
	for (var i in catArr){
		for(var j in catArr[i]){
  		//alert(" Price for "+i+" and "+j+" = "+catArr[i][j]);
			if ( i == food_item && j == quan ){
  			  var price = catArr[i][j];
  			  //alert("Price for "+i+" of "+j+" = "+catArr[i][j]);
  			  document.getElementById(rate_id).value = price;
  		  	}
  	  	}
	}
}
