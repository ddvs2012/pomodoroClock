var interval;
var clicked = true;
var display = document.querySelector('#timer');
var breakTime = false;

var inputWorkMinutes = document.querySelector('#workMinutes').textContent;
var inputBreakMinutes = document.querySelector('#breakMinutes').textContent;
var switch1 = [inputBreakMinutes*60, inputWorkMinutes*60];

display.textContent = inputWorkMinutes + ":00";

//set work and break minutes
function incWM(){	
	function addWM() {
		inputWorkMinutes = parseInt(inputWorkMinutes, 10) + 1; //doesnt inc.
		display.textContent = inputWorkMinutes + ":00";	
		$('#workMinutes').text(inputWorkMinutes);
	}

	addWM();
}

function decWM(){

	if(inputWorkMinutes > 1) {

		inputWorkMinutes = parseInt(inputWorkMinutes, 10) - 1;
		display.textContent = inputWorkMinutes + ":00";
		$('#workMinutes').text(inputWorkMinutes);

	}
}
////////////////////
function incBM(){
	inputBreakMinutes = parseInt(inputBreakMinutes, 10) + 1;
	// display.textContent = inputWorkMinutes + ":00";	
	$('#breakMinutes').text(inputBreakMinutes);
}
function decBM(){
	if(inputBreakMinutes > 1) {
		inputBreakMinutes = parseInt(inputBreakMinutes, 10) - 1;
			// display.textContent = inputWorkMinutes + ":00";
		$('#breakMinutes').text(inputBreakMinutes);
	}	
}

//holding mouse button down
// var mouseHold = false;

// $('#upWM').mousedown(function() {
// 	mouseHold = true;
// 	fastChange(incWM());
// });

// function fastChange(buttonFuncId) { //pass in the function to repeat
// 	if (!mouseHold) { return; } //when mouse let go, exit function
// 	if (mouseHold) {setInterval(buttonFuncId, 100);} //when mouse held down, repeat the passed in function 10x/sec
// 	console.log(mouseHold);
// }

// $(document).mouseup(function() {
// 	mouseHold = false;
// 	console.log(mouseHold);
// });

function setTimer(duration, display){ //time in minutes, where to display
	var timer = duration, minutes, seconds;
	interval = setInterval(function() {
		
		minutes = parseInt(timer / 60, 10);
		seconds = parseInt(timer % 60, 10);

		// minutes = minutes < 10 ? '0' + minutes : minutes;
		seconds = seconds < 10 ? '0' + seconds : seconds;

		display.textContent = minutes + ":" + seconds;
		
		if (--timer < 0) {
            ring.play();
            clearInterval(interval);
            setTimer(switch1[0], display);
        }
        tick.play();

	}, 1000)
}

if (breakTime === true) {
	
}

function startStop(){
	if (breakTime === false) {	
		if (clicked === true) {
			setTimer(inputWorkMinutes*60, display); //reference back 1st arg to save state?
			clicked = false;
		} else {
			clearInterval(interval);
			clicked = true;
		}
	}
	if (breakTime === true) {
		if (clicked === true) {
			setTimer(inputBreakMinutes*60, display); //reference back 1st arg to save state?
			clicked = false;
		} else {
			clearInterval(interval);
			clicked = true;
		}
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