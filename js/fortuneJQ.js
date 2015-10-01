$( document ).ready(function() {

	var name = "";
	var number = 0;
	var fortunes = ["You will fall in love soon.", "Cookies are on your horizon.", "Ask again later nerd.", "You will be kissed by the love of your life.", "Eew, COOTIES!", 
"Just ask him/her!","That wasn't tuna...", "High five!"];
	
	$('#rectangle_b').on('click', function() { 
		name = $('#rectangle_b').attr('id');
		
		console.log(name);
		updateTiles();
		
	});
	$('#rectangle_r').on('click', function() { 
		name = $('#rectangle_r').attr('id');
		
		console.log(name);
		updateTiles();
	});
	$('#rectangle_g').on('click', function() { 
		name = $('#rectangle_g').attr('id');
		
		console.log(name);
		updateTiles();
	});
	$('#rectangle_y').on('click', function() { 
		name = $('#rectangle_y').attr('id');
		
		console.log(name);
		updateTiles();
	});
	
	var updateTiles = function(){
		if(name === "rectangle_b" || name === "rectangle_y")
		{
			console.log("I clicked the blue or yellow square!!");
			$('#rectangle_b').text('1');
			$('#rectangle_g').text('2');
			$('#rectangle_y').text('5');
			$('#rectangle_r').text('6');
			
			$('#rectangle_r').off('click');
			$('#rectangle_g').off('click');
			$('#rectangle_b').off('click');
			$('#rectangle_y').off('click');
			turnOnClicks();
		} else {
			console.log("I clicked the red or green square!!");
			$('#rectangle_b').text('3');
			$('#rectangle_g').text('4');
			$('#rectangle_y').text('7');
			$('#rectangle_r').text('8');	
			
			$('#rectangle_r').off('click');
			$('#rectangle_g').off('click');
			$('#rectangle_b').off('click');
			$('#rectangle_y').off('click');
			turnOnClicks();
		}
	}
	
	var turnOnClicks = function()
	{
		$('#rectangle_r').on('click', function(){
			number = $('#rectangle_r').text();
			console.log(number);
			checkEven();
		});
		$('#rectangle_g').on('click', function(){
			number = $('#rectangle_g').text();
			console.log(number);
			checkEven();
		});
		$('#rectangle_b').on('click', function(){
			number = $('#rectangle_b').text();
			console.log(number);
			checkEven();
		});
		$('#rectangle_y').on('click', function(){
			number = $('#rectangle_y').text();
			console.log(number);
			checkEven();
		});
		
		
	}
	
	var checkEven = function()
	{
		if(!(number%2 === 0)){
			if(name === "rectangle_b" || name === "rectangle_y")
			{
				$('#rectangle_b').text('3');
				$('#rectangle_g').text('4');
				$('#rectangle_y').text('7');
				$('#rectangle_r').text('8');	
				
				$('#rectangle_r').off('click');
				$('#rectangle_g').off('click');
				$('#rectangle_b').off('click');
				$('#rectangle_y').off('click');
				displayFortune();
			} else {
				$('#rectangle_b').text('1');
				$('#rectangle_g').text('2');
				$('#rectangle_y').text('5');
				$('#rectangle_r').text('6');
				
				$('#rectangle_r').off('click');
				$('#rectangle_g').off('click');
				$('#rectangle_b').off('click');
				$('#rectangle_y').off('click');
				displayFortune();
			}
		}else{
			displayFortune();
		}
	}
	
	var displayFortune = function(){
		var temp = 0;
		$('#rectangle_r').on('click', function(){
			temp = $('#rectangle_r').text();
			//console.log("I am clisked: "+fortunes[temp-1]);
			alert("Your fortune is: " + fortunes[temp-1]);
		});
		$('#rectangle_g').on('click', function(){
			temp = $('#rectangle_r').text();
			//console.log("I am clisked: "+fortunes[temp-1]);
			alert("Your fortune is: " + fortunes[temp-1]);			
		});
		$('#rectangle_b').on('click', function(){
			temp = $('#rectangle_r').text();
			//console.log("I am clisked: "+fortunes[temp-1]);
			alert("Your fortune is: " + fortunes[temp-1]);			
		});
		$('#rectangle_y').on('click', function(){
			temp = $('#rectangle_r').text();
			//console.log("I am clisked: "+fortunes[temp-1]);
			alert("Your fortune is: " + fortunes[temp-1]);			
		});
	}
});