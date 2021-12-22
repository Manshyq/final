function dropdown_search_promotion() {
    	document.getElementById("dropdown-list-promotion").classList.toggle("show");
		document.getElementById("dropdown-search-input").classList.toggle("show");
		}

		function dropdown_search_promotion_filter() {
		  var input, filter, ul, li, a, i;
		  input = document.getElementById("dropdown-search-input");
		  filter = input.value.toUpperCase();
		  div = document.getElementById("dropdown-list-promotion");
		  a = div.getElementsByTagName("a");
		  for (i = 0; i < a.length; i++) {
		    txtValue = a[i].textContent || a[i].innerText;
		    if (txtValue.toUpperCase().indexOf(filter) > -1) {
		      a[i].style.display = "";
		    } else {
		      a[i].style.display = "none";
		    }
		  }
		}

function select_promotion1(){
	document.getElementById("dropdown-text-promotion").innerHTML='IITU Coffee';
	document.getElementById("promotion-category").innerHTML='IITU Coffee';
	document.getElementById("promotion1").src='images/drink1.jpeg';
	document.getElementById("promotion2").src='images/drink2.jpeg';
	document.getElementById("promotion3").src='images/drink3.jpeg';
	document.getElementById("promotion4").src='images/drink4.jpeg';

}

function select_promotion2(){
	document.getElementById("dropdown-text-promotion").innerHTML='Dish of the day';
	document.getElementById("promotion-category").innerHTML='Dish of the day';
	document.getElementById("promotion1").src='images/dish1.jpeg';
	document.getElementById("promotion2").src='images/dish2.jpeg';
	document.getElementById("promotion3").src='images/dish3.jpeg';
	document.getElementById("promotion4").src='images/dish4.jpeg';

}
function select_promotion3(){
	document.getElementById("dropdown-text-promotion").innerHTML='Dessert of the day';
	document.getElementById("promotion-category").innerHTML='Dessert of the day';
	document.getElementById("promotion1").src='images/dessert1.jpeg';
	document.getElementById("promotion2").src='images/dessert2.jpeg';
	document.getElementById("promotion3").src='images/dessert3.jpeg';
	document.getElementById("promotion4").src='images/dessert4.jpeg';

}





function dropdown_symbol(){
	document.getElementById("dropdown-symbol1").innerHTML='⌃';
}

function dropdown_search(){
    		document.getElementById("dropdown-list").classList.toggle("show");
    	}

    	function dropdown_search_promotion() {
    	document.getElementById("dropdown-list-promotion").classList.toggle("show");
		document.getElementById("dropdown-search-input").classList.toggle("show");
		}

		function dropdown_search_promotion_filter() {
		  var input, filter, ul, li, a, i;
		  input = document.getElementById("dropdown-search-input");
		  filter = input.value.toUpperCase();
		  div = document.getElementById("dropdown-list-promotion");
		  a = div.getElementsByTagName("a");
		  for (i = 0; i < a.length; i++) {
		    txtValue = a[i].textContent || a[i].innerText;
		    if (txtValue.toUpperCase().indexOf(filter) > -1) {
		      a[i].style.display = "";
		    } else {
		      a[i].style.display = "none";
		    }
		  }
		}
		function show_description(){
			document.getElementById("hide-description1").classList.toggle("show");
		}


		function show_description1(){
			document.getElementById("hide-description1").classList.toggle("show");
		}
		function show_description2(){
			document.getElementById("hide-description2").classList.toggle("show");
		}

		function show_more() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("show-more");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Show more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Hide";
    moreText.style.display = "inline";
  }
}


															/*FOOTER*/
