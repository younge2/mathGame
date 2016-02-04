var squareNum = [690561, 51076, 859329,474721,246016,512656,502681,18769,133225,70756,49729,484416,53824,960400,241081,209764,628849,33124,6561,480249,47089,297025,79841,10404,21609,2500,199809,45369,289,407044,688900,131044,207025,33856,76729,209764,368449,136900,128164,160801,223729,149769];
var cubeNum = [912673,512,13824,421875,125,238328,132651,85184,42875,287496,884736,140608,125,50653,35937,17576,205379,250047,97336,4096,110592,438976,614125,1331,970299,729000,97336,10648,64000,250047,300763,1728,19683,1331,175616,636056,250047,10648,804357,1000,125,85184];
var primeNum = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997, 1009, 1013, 1019, 1021, 1031, 1033, 1039, 1049, 1051, 1061, 1063, 1069, 1087, 1091, 1093, 1097, 1103, 1109, 1117, 1123, 1129, 1151, 1153, 1163, 1171, 1181, 1187, 1193, 1201, 1213, 1217, 1223, 1229, 1231, 1237, 1249, 1259, 1277, 1279, 2647, 2657, 2659, 2663, 2671, 2677, 2683, 2687, 2689, 2693, 2699, 2707, 2711, 2713, 2719, 2729, 2731, 2741, 2749, 2753, 2767, 2777, 2789, 2791, 2797, 2801, 2803, 2819, 2833, 2837, 2843, 2851, 2857, 2861, 2879, 2887, 2897, 2903, 2909, 2917, 2927, 2939, 2953, 2957, 2963, 2969, 2971, 2999, 3001, 3011, 3019, 3023, 3037, 3041, 3049, 3061, 3067, 3079, 3083, 3089, 3109, 3119, 3121, 3137, 3163, 3167, 3169, 3181, 3187, 3191, 3203, 3209, 3217, 3221, 3229, 3251, 3253, 3257, 3259, 3271, 3299, 3301, 3307, 3313, 3319, 3323, 3329, 3331, 3343, 3347, 3359, 3361, 3371, 3373, 3389, 3391, 3407, 3413, 3433, 3449, 3457, 3461, 3463, 3467, 3469, 3491, 3499, 3511, 3517, 3527, 3529, 3533, 3539, 3541, 3547, 3557, 3559, 3571];
var repdigitNum = [22222,555,22,9999999,22222222,7777777,1111,777,4,0,44444444,66, 0,222222,22,44,111111111,6666,99,3333,666666,9,77,11111,666666,999999,0,222222222,0,8888888,77,55,55555,77777777,3333,11111111];
var perfectNum = [6, 28, 496, 8128, 33550336];
var narcissisticNum = [0,1,2,3,4,5,6,7,8,9,153, 370, 371, 407,1634, 8208, 9474,54748, 92727, 93084,548834,1741725, 4210818, 9800817, 9926315];

//creates a number object

var number = function(num){
	this.num = num;
	this.square = isSquare(num);
	this.prime = isPrime(num);
	this.cube = isCube(num);
	//this.weird = isWeird(num);
	this.perfect = isPerfect(num);
	this.narcissistic = isNarcissistic(num);
	this.repdigit = isRepdigit(num);
	this.numArr = numToArr(num);
}

var isSquare = function(num){
	if (num<0) return false;
	else {
		var exact = Math.sqrt(num);
		if (Math.floor(exact)==exact) return true;
		else return false;

	}
}

var isPrime = function(num){
	for (var i=2; i<=(num/2); i++){
		if (num%i===0) return false;
	}

	return num>1;
}

var isCube = function(num){
	if (num<0) return false;
	else {
		var exact = Math.pow(num, 1./3);
		if (Math.floor(exact)==exact) return true;
		else return false;
	}

}

var isWeird = function(num){
	var iarr = numToArr(num);
	var sum = 0;
	var subSum=0;
	var isSubset = false;
	var divisors=[];

	//finds divisors
	for (var i=0; i<=(num/2); i++){
		if (num%i===0) divisors.push(i);
	}

	//finds sum of divisors
	for(var j=0; j<divisors.length; j++){
		sum = sum+divisors[j];
	}

	if (sum>num){

	}
	else return false;

}
var isPerfect = function(num){
	var sum = 0;
	var divisors=[];
	if (num===1) return false;
	//finds divisors
	for (var i=0; i<=(num/2); i++){
		if (num%i===0) divisors.push(i);
	}

	//finds sum of divisors
	for(var j=0; j<divisors.length; j++){
		sum = sum+divisors[j];
	}

	if (sum===num) return true;
	else return false;

}
var isNarcissistic = function(num){
	var iarr = numToArr(num);
	var sum = 0;
	//if (num===1) return false;
	for (var i=0; i<iarr.length; i++){
		var pwr = Math.pow(iarr[i],iarr.length);
		sum = sum+pwr;
	}

	if (sum===num) return true;
	else return false;
}
var isRepdigit = function(num){
	var iarr= numToArr(num);
	if (iarr.length<2) return false;
	for(var i=0; i<iarr.length; i++){
		if (iarr[i]!==iarr[0]) return false;
	}
	return true;

}


//changes number to array

var numToArr = function(num){
	if (num==undefined) num=0;
	var len = num.toString().length;
	var arr = [];
	for (var index = 0; index < len; index++){
	    arr[index] = num % 10;
	    num = Math.floor(num/10);
	}

	return arr;
	
}

var makeSquares = function(){
	for(var i=0; i<42; i++){
		var rand = Math.floor(Math.random()*1000);
		rand = Math.pow(rand, 2);
		squareNum.push(rand);
	}
}

var makeCubes = function(){
	for(var i=0; i<42; i++){
		var rand = Math.floor(Math.random()*100);
		rand = Math.pow(rand, 3);
		cubeNum.push(rand);
	}
}

var makePrimes = function(){
	var i = 0;
	var j = 2;
	while (i<500){
		if (isPrime(j)){
			primeNum.push(j);
			i++;
		}
		j++;

	}
}

var makeRepdigit = function(){
	
	var fin=0;
	for(var i=0; i<42; i++){
		var seed = Math.floor(Math.random()*10);
		
		var reps = Math.floor(Math.random()*10);
		
		for (var j=0; j<reps; j++){
			fin = fin + (seed*(Math.pow(10,j)));
			
		}
		repdigitNum.push(fin);
		fin = 0;
	}
}

var shuffle = function(stack){
	var shuff=[];
		while (stack.length){
			var ind = Math.floor(Math.random()*stack.length);
			shuff.push(stack[ind]);
			stack.splice(ind, 1);
		}
		return shuff;

}

var player1Stack = [];
var player2Stack = [];
var shuffle1 = [];
var shuffle2 = [];

var makeStacks = function(){
	//$("$toAdd .card").remove();
	var deckdist = 1;
	for(var b=0; b<2; b++) {
		console.log("b "+b);
		if (b==0) var stack=player1Stack;
		if (b==1) var stack=player2Stack;
		console.log("log "+squareNum.length);
		//add 4 squares
		for (var a=0; a<deckdist; a++){
			var index = Math.floor(Math.random()*squareNum.length);
			var sq = new number(squareNum[index]);
			stack.push(sq);
		}

		//add 4 cubes
		for (var a=0; a<deckdist; a++){
			var index = Math.floor(Math.random()*cubeNum.length);
			var cb = new number(cubeNum[index]);
			stack.push(cb);
		}

		//add 4 primes
		for (var a=0; a<deckdist; a++){
			var index = Math.floor(Math.random()*primeNum.length);
			var pr = new number(primeNum[index]);
			stack.push(pr);
		}

		//add 4 repDigit
		for (var a=0; a<deckdist; a++){
			var index = Math.floor(Math.random()*repdigitNum.length);
			var rep = new number(repdigitNum[index]);
			stack.push(rep);
		}
		
		//add 4 perfects
		for (var a=0; a<deckdist; a++){
			var index = Math.floor(Math.random()*perfectNum.length);
			var perr = new number(perfectNum[index]);
			stack.push(perr);
		}

		//add 4 narcissists
		for (var a=0; a<deckdist; a++){
			var index = Math.floor(Math.random()*narcissisticNum.length);
			var nar = new number(narcissisticNum[index]);
			stack.push(nar);
		}
	}

	shuffle1 = shuffle(player1Stack);
	shuffle2 = shuffle(player2Stack);
	playerScore1=0;
	playerScore2=0;
	for(var j =1; j<=5; j++){
		$("#spot"+j).empty();
	}

}

var deal = function(){

	if (turn===1)var deck = shuffle1;
	if (turn===2)var deck = shuffle2;
	for(var i=1; i<=5; i++){
		if ($("#spot"+i).find("div").length<=0){
			var drawn = deck.pop();
			//there is a number popped
			if (drawn){
				//insert the number
				$("#spot"+i).html(""+
					"<div class='card'>"+
					drawn.num+
					"</div>"
				);
				//add the object to the div			
			$("#spot"+i+" .card").data("number", drawn);
			
			$("#toAdd .card").draggable({ revert: "invalid"});
			$("#toAdd .card").on("mouseenter",function(){
				$(this).css("-webkit-transform","scale(1.5)");
			}).on("mouseleave", function(){
				$(this).css("-webkit-transform","scale(1)");
			});
			}
			//no number is popped
			else {
				//check for 'card'divs
				console.log("grrr "+$("#toAdd").find("card").length);
				if ($("#toAdd").find(".card").length>0) break;
				//turn is done.
				else done();
			}
			
		}
	}

}

var dropBox =function(){
	for (var i=0; i<7; i++){
		var div = $( "#buckets div" )[ i ];

		switch (i){
			case 0: var val="square";
					break;
			case 1: var val ="cube";
					break;
			case 2: var val ="prime";
					break;
			case 3: var val ="perfect";
					break;
			case 4: var val ="narcissistic";
					break;
			case 5: var val ="repdigit";
					break;
			case 6: var val ="weird";
					break;

		}
			jQuery.data( div, "kind", val);
	}
}

var turn = 0;
var changeTurn = function(cur){
	if (cur===0) turn =1;
	if (cur===1) turn =2;
	if (cur===2) turn =1;
}

var done = function(){
	console.log("turn "+turn);
	if (turn===1){
		console.log("sweet1");
		sweetAlert ({
			title: "Your Turn is done!",
			text: "Your score was "+playerScore1,
		});
		changeTurn(turn);

	}
	else if (turn===2){
		console.log("sweet2");
		var winner = "player1";
		if (playerScore1<playerScore2) winner = "player2";
		sweetAlert ({
			title: "Your Turn is done!",
			text: "The winner is "+winner,
		});

		changeTurn(turn);


	}
	else{
		sweetAlert("Uh-Oh", "The wrakspurts have got us", "error");
	}
}



var playerScore1=0;
var playerScore2=0;

$(document).ready(function() {
	console.log("starting");

	//makeSquares();
	
	//makeCubes();
	
	 //makeRepdigit();

	// makePrimes();

	//dropBox data
	dropBox();

	
	// makes stacks for the game
	$("#starter").on("click", function(){
		makeStacks();
		changeTurn(0);
		
		$("#buckets .col").droppable({
			activeClass: "ui-state-default",
			hoverClass: "ui-state-hover",
			drop: function(event, ui) {
				var draggable = ui.draggable;
				console.log(draggable);
				console.log(draggable.data("number"));
				var numObj = draggable.data("number");
				console.log(numObj);
				var datKind = jQuery.data(this, "kind");
				console.log(numObj[datKind]);
				
				if (numObj[datKind] && turn===1) {playerScore1++;
					$("#p1").text("Player 1: "+playerScore1);
				}
				if (numObj[datKind] && turn===2){ playerScore2++;
					$("#p2").text("Player 2: "+playerScore2);
				}
				$(draggable).remove();
			}
		})
		$("#dealer").on('click', deal);

	});

	$("#instr").on('click', function(){
		sweetAlert({
			title: "Instructions",
			text: "Hit 'Start game'. Then hit 'Deal more' to deal numbers from your deck. Guess what type of number each is. If you guess right you will get a point."
		});
	});


});

