var dateElement=document.getElementById("date");
var monthElement=document.getElementById("month");
var yearElement=document.getElementById("year");
var hoursElement=document.getElementById("hours");
var minutesElement=document.getElementById("minutes");
var secondsElement=document.getElementById("seconds");
var amElement=document.getElementById("am");
var pmElement=document.getElementById("pm");

function parseNumber(number){
	if(number<=9)
		return '0'+number;
	else
		return number;
}
function updateDay(){
	var create=new Date();
	day=create.getDay();	
	var yesterday=document.getElementById("day-"+(day-1<0?6:day-1));
	yesterday.classList.remove("active");
	var today=document.getElementById("day-"+day);
	today.classList.add("active");
}


function updateClock(){
	var create=new Date(),
		dt=create.getDate(),
		mth=create.getMonth()+1,
		year=create.getFullYear();
		dateElement.innerText=parseNumber(dt),
		monthElement.innerText=parseNumber(mth),
		yearElement.innerText=parseNumber(year);
}
function updateTime(){
	var create=new Date(),
	hour=create.getHours(),
	min=create.getMinutes(),
	sec=create.getSeconds();
	if(hour>12)
	{
		hour =hour-12;
		pmElement.classList.add("active");
		amElement.classList.remove("active");
		
	}else if(hour==12)
	{
		pmElement.classList.add("active");
		amElement.classList.remove("active");
	}
	else{
	amElement.classList.add("active");
	pmElement.classList.remove("active");
	}
	hoursElement.innerText=parseNumber(hour),
	minutesElement.innerText=parseNumber(min),
	secondsElement.innerText=parseNumber(sec);
}


function updateALL(){
updateClock();
updateTime();
updateDay();	
}

setInterval(updateALL, 1000);


