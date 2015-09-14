var main = function(){

	var fortunes = ["You will fall in love soon.", "Cookies are on your horizon.", "Ask again later nerd.", "You will be kissed by the love of your life.", "Eew, COOTIES!", 
	"Just ask him/her!","That wasn't tuna...", "High five!"];

	var choice = prompt("Ready to see your fortune? [yes/no]");

	if(choice === "yes")
	{
		var rand = Math.floor(Math.random() * (7 - 0)) + 0;
		console.log(rand);
		console.log(fortunes[rand]);
		prompt(fortunes[rand]);
	} else {
		prompt("No fortune for you :(");
	}
}

main();