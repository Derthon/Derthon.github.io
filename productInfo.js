
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    console.log(decodeURIComponent(results[2].replace(/\+/g, " ")));
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

$( document ).ready(function() {
	window.onscroll = function() {scrollTest()};

      function scrollTest() {
        console.log("hello");
          if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 || document.getElementById('PRODUCT-ITEMS').scrollTop > 50) {
              $('nav').addClass('hidden');
          } else {
              $('nav').removeClass('hidden');
          }
      }
	console.time("a");
	var mainDiv = document.getElementById('PRODUCT-ITEMS');

    var product_type = getParameterByName('productType');
	var productLength = Object.keys(items[product_type]).length;
	if(parseInt(product_type) === 0) {

		document.body.style.backgroundImage = "url('img/yeslie/productAnimeBackground.jpg')"
		$('#heading').text("Anime Products");
		$('#PRODUCT-ITEMS').css({
			'opacity' : '.8'
		})
	}
	else if(parseInt(product_type) === 1) {

		document.body.style.backgroundImage = "url('img/brian/productChessBackground.jpg')";
		$('#heading').text("Chess Products");
		$('#PRODUCT-ITEMS').css({
			'opacity' : '.9'
		})
	}
	else if(parseInt(product_type) === 2) {

		document.body.style.backgroundImage = "url('img/jesus/productSoccerBackground.jpg')";
		$('#heading').text("Soccer Products");
		$('#PRODUCT-ITEMS').css({
			'opacity' : '.95'
		})
	}

	for(var i = 0;i < productLength;++i){
		var item = 'item' + (i + 1);
		//console.log(item)

		var div = document.createElement('DIV');
		div.setAttribute('class','product-section');
		mainDiv.appendChild(div);


		var eleImg = document.createElement('IMG');
		eleImg.setAttribute('src', "" + items[product_type][item].img);
		eleImg.setAttribute('class','product-image');
		div.appendChild(eleImg);
		
		var a = document.createElement('A');
		a.setAttribute('class','product-name');
		var text = "buyPage.html?productCat=" + product_type + '\?productItem=' + item;
		a.setAttribute('href', text);
		div.appendChild(a);	

		var heading = document.createElement('H2');
		heading.setAttribute('class', 'product-name');
		a.appendChild(heading);
		heading.innerHTML = items[product_type][item].title;

		var p = document.createElement('P');
		div.appendChild(p);
		var text = "<b>Cost:</b> $" + items[product_type][item].cost + "<br> <b>Shipping: </b> $" + items[product_type][item].shipping + " <br> <b>Description: </b>" +  items[product_type][item].description;
		p.innerHTML = text;
		
		//mainDiv.innerHTML += '<hr>';
	}
	console.timeEnd("a");
});