var clock = document.getElementById("clock");

function runClock(){
	var time = turnClocktoHex();
	// console.log(time);
	var timeReverse = time.split("").reverse().join("");
	// console.log(timeReverse);
	clock.style.color="#"+timeReverse;
	document.body.style.backgroundColor = "#"+time;
	time = time.split("");
	// console.log(time);
	time = time[0]+time[1]+":"+time[2]+time[3]+":"+time[4]+time[5];
	// console.log(time)
	clock.innerHTML= time.toString();
}



function turnClocktoHex(){
	var time = new Date();
	var seconds = time.getSeconds();
	if(seconds == 0||seconds == 1||seconds == 2||seconds == 3||seconds == 4||seconds == 5||seconds == 6||seconds == 7||seconds == 8||seconds == 9){
		seconds = "0"+seconds.toString();
	}
	// console.log(seconds);
	var minutes = time.getMinutes();
	if(minutes == 0||minutes == 1||minutes == 2||minutes == 3||minutes == 4||minutes == 5||minutes == 6||minutes == 7||minutes == 8||minutes == 9){
		minutes = "0"+minutes.toString();
	}
	// console.log(minutes);
	var hours = time.getHours();
	if(hours <= 9){
		hours = "0"+hours.toString();
	}
	// console.log(hours);
	var result = hours.toString() + minutes.toString() + seconds.toString();
	// console.log(result);
	return result;
}


function start(){
	setInterval(function(){runClock()}, 500)
}
window.addEventListener("load",start);