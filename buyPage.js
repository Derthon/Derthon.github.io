function getParameterByName(name, url) {

	if (!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	//console.log(decodeURIComponent(results[2].replace(/\+/g, " ")));
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}
$( document ).ready(function() {
	var body = document.getElementById('body');
	var productCat = getParameterByName('productCat').substring(0, 1);
	var productItem = getParameterByName('productItem');


	if(parseInt(productCat) === 0) {

		document.body.style.backgroundImage = "url('img/yeslie/productAnimeBackground.jpg')"
	}
	else if(parseInt(productCat) === 1) {

		document.body.style.backgroundImage = "url('img/brian/productChessBackground.jpg')";
	}
	else if(parseInt(productCat) === 2) {

		document.body.style.backgroundImage = "url('img/jesus/productSoccerBackground.jpg')";
	}
	else if(parseInt(productCat) === 3) {

		document.body.style.backgroundImage = "url('img/videoGames/productvideoGamesBackground.jpg')";
	}
	else if(parseInt(productCat) === 4) {

		document.body.style.backgroundImage = "url('img/art/productArtBackground.jpg')";
	}
	else if(parseInt(productCat) === 5) {

		document.body.style.backgroundImage = "url('img/technology/productTechBackground.jpg')";
	}

	console.log('Category: ' + productCat);
	console.log('Item: ' + productItem);
	console.log('-----Start-----');
	console.log('-----Stop-----');
	var item = String(productItem);

	var div = document.createElement('DIV');
	div.setAttribute('id','productDiv');

	body.appendChild(div);

	var eleImg = document.createElement('IMG');
	eleImg.setAttribute('src', "" + items[productCat][productItem].img);
	eleImg.setAttribute('id','productImage');
	div.appendChild(eleImg);

	var heading = document.createElement('H1');
	heading.setAttribute('id','product-title');
	heading.innerHTML = items[productCat][productItem].title;
	div.appendChild(heading);


	var par = document.createElement('P');
	par.setAttribute('id','product-description')
	div.appendChild(par);
	var text = "<b>Cost:</b> $" + items[productCat][productItem].cost + "<br> <b>Shipping: </b> $" + items[productCat][productItem].shipping + " <br> <b>Description: </b>" +  items[productCat][productItem].description;
	par.innerHTML = text;

	var footer = document.createElement('FOOTER');
	body.appendChild(footer);

	var footerDiv = document.createElement('DIV');
	footerDiv.setAttribute('id','pageCredits');
	footer.appendChild(footerDiv)

	var footerDivP = document.createElement('P');
	footerDivP.setAttribute('title', 'Brian Made This Entire Page!');
	footerDiv.appendChild(footerDivP);
	footerDivP.innerHTML = '&copy; 2016-2017 JBY.com Inc. or its affiates';




});
