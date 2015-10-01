var fortunes = ["You will fall in love soon.", "Cookies are on your horizon.", "Ask again later nerd.", "You will be kissed by the love of your life.", "Eew, COOTIES!", 
"Just ask him/her!","That wasn't tuna...", "High five!"];
var colors = ["Blue","Green","Red","Yellow"];
//var choice = prompt("Pick a color");
var number;

var rect_b = document.getElementById("rectangle_b");
var rect_r = document.getElementById("rectangle_r");
var rect_g = document.getElementById("rectangle_g");
var rect_y = document.getElementById("rectangle_y");

rect_b.addEventListener("click", clickHandler, false);
rect_r.addEventListener("click", clickHandler, false);
rect_g.addEventListener("click", clickHandler, false);
rect_y.addEventListener("click", clickHandler, false);


var main = function(){

}

function clickHandler(evt){
	//alert(evt.target.id);
	if(evt.target.id == "rectangle_b" ||evt.target.id == "rectangle_y")
	{
		number = prompt("Pick a number 1 2 7 8");
		alert(fortunes[prompt-1]);
	} else if(evt.target.id == "rectangle_g" ||evt.target.id == "rectangle_r")
	{
		number = prompt("Pick a number 3 4 5 6");
		alert(fortunes[prompt-1]);
	}
}

main();