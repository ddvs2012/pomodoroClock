var interval;
var clicked = true;
var display = document.querySelector('#timer');

var inputWorkMinutes = document.querySelector('#workMinutes').textContent;
var inputBreakMinutes = document.querySelector('#breakMinutes').textContent;

display.textContent = inputWorkMinutes + ":00";

//set work and break minutes

function incWM(){
	inputWorkMinutes = parseInt(inputWorkMinutes, 10) + 1;
	display.textContent = inputWorkMinutes + ":00";	
}
function decWM(){
	if(inputWorkMinutes > 1) {
		inputWorkMinutes = parseInt(inputWorkMinutes, 10) - 1;
		display.textContent = inputWorkMinutes + ":00";
	}
}
////////////////////
function incBM(){
	inputBreakMinutes = parseInt(inputWorkMinutes, 10) + 1;
	// display.textContent = inputWorkMinutes + ":00";	
}
function decBM(){
	inputBreakMinutes = parseInt(inputWorkMinutes, 10) - 1;
	// display.textContent = inputWorkMinutes + ":00";	
}



function setTimer(duration, display){ //time in minutes, where to display
	var timer = duration, minutes, seconds;
	interval = setInterval(function() {
		tick.play();

		minutes = parseInt(timer / 60, 10);
		seconds = parseInt(timer % 60, 10);

		// minutes = minutes < 10 ? '0' + minutes : minutes;
		seconds = seconds < 10 ? '0' + seconds : seconds;

		display.textContent = minutes + ":" + seconds;
		
		if (--timer < 0) {
            clearInterval(interval);
        }
        

	}, 1000)
}

function startStop(){	
	if (clicked === true) {
		setTimer(inputWorkMinutes*60, display) //reference back 1st arg to save state?
		clicked = false;
	} else {
		clearInterval(interval);
		clicked = true;
	}
	  
	
}

// function countDown() {
// 	tick.play();

// 	var until = 1000*60*25;

// 	var minutes = Math.floor(until/(1000*60))
// 	var seconds = Math.floor(until/(1000))

// //display
// 	document.getElementById(timer).innerHTML = minutes + "m" + seconds + 's';

// 	if (seconds < 0)

// }