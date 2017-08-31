var RADIUS=3;
var TOP=80;
var LEFT=400;
const WIDTH=1024;
const HEIGHT=698;
var endTime=new Date(2017,7,28,00,00,00);
var hours;
var minutes;
var seconds;
window.onload=function(){
	var canvas=document.getElementById('hi');
	var context=canvas.getContext('2d');
	canvas.width=WIDTH;
	canvas.height=HEIGHT;
	setInterval(function(){
		if(parseInt((new Date()).getTime()/10000)==parseInt(endTime.getTime()/10000)){
			window.location.href="./love.html";
		}else{
			time(context);
			update();
		}
	},50);
}
function time(cxt){
	showTime();
	cxt.clearRect(0,0,WIDTH,HEIGHT);
	dits(LEFT,TOP,parseInt(hours/10),cxt);
	dits(LEFT+15*(RADIUS+1),TOP,parseInt(hours%10),cxt)
	dits(LEFT+39*(RADIUS+1),TOP,10,cxt);
	dits(LEFT+54*(RADIUS+1),TOP,parseInt(minutes/10),cxt)
	dits(LEFT+69*(RADIUS+1),TOP,parseInt(minutes%10),cxt)
	dits(LEFT+93*(RADIUS+1),TOP,10,cxt);
	dits(LEFT+108*(RADIUS+1),TOP,parseInt(seconds/10),cxt)
	dits(LEFT+123*(RADIUS+1),TOP,parseInt(seconds%10),cxt)
}
function update(){
	var time1=new Date();
	var time2=endTime.getTime()-time1.getTime();
	_hours=parseInt(time2/(1000*60*60));
	_minutes=parseInt((time2%(1000*60*60))/(1000*60));
	_seconds=parseInt(time2/1000-minutes*60-hours*60*60);
	if(_seconds!=seconds){
		seconds=_seconds;
	}
}
function showTime(){
	var time1=new Date();
	var time2=endTime.getTime()-time1.getTime();
	hours=parseInt(time2/(1000*60*60));
	minutes=parseInt((time2%(1000*60*60))/(1000*60));
	seconds=parseInt(time2/1000-minutes*60-hours*60*60);
}
function dits(x,y,hou,cxt){
	for(i=0;i<digit[hou].length;i++){
		for(j=0;j<digit[hou][i].length;j++){
			if(digit[hou][i][j]==1){
				cxt.beginPath();
				cxt.arc(x+j*2*(1+RADIUS)+(RADIUS+1),y+i*2*(1+RADIUS)+(RADIUS+1),RADIUS,0,2*Math.PI);
				cxt.fillStyle='rgb(0,102,153)';
				cxt.fill(); 
			}
		}
	}
}