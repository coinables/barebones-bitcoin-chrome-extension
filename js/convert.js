var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.bitcoinaverage.com/ticker/USD/', true);
xhr.onreadystatechange = function(){
	if (xhr.readyState == 4){
		var ticker = JSON.parse(xhr.responseText);
		var price = ticker.last;
		document.getElementById('btc').innerHTML = "$" + price;
	}
};
xhr.send();