//setInterval(function as argument, time in milisec) => repeatively running

//setTimeOut => run after some time

var min=0;
var sec=0;
var ms=0;
var minshow = document.getElementById('min');
var secshow = document.getElementById('sec');
var msshow = document.getElementById('ms');

var interval;

function timer(){
	ms++;
	msshow.innerHTML = ms;
	if(ms>=100){
		sec++;
		secshow.innerHTML = sec;
		ms = 0 ;
	}
	else if( sec >= 60){
         min++;
         minshow.innerHTML = min;
         sec=0;

	}
}

function start(){
interval = setInterval(timer,10);
document.getElementById("start").disabled = true;
}

function stop(){
	clearInterval(interval);
	document.getElementById("start").disabled = false;
}

function reset(){

	ms =00;
	min = 00;
	sec = 00;
	minshow.innerHTML = min;
	secshow.innerHTML = sec;
	msshow.innerHTML = ms ;
	stop(interval);
}


