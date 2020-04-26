


const texte = [
	"I’m a Product Designer.",
	"I’m a Strategic Designer.",
	"I’m a Design Lead at <a href=https://ideo.com target=_blank>IDEO</a>.",
	"I’m a Prototyping Enthusiast.",
	"I’m happy to talk to you.",
	"I’m a Maker.",
	"I’m a Mini Bike Rider.",

];
let prevCounter = 0;
const delay = 3000;
let timerInterval = null;
function documentInit(){
	const container = document.querySelector('#myText');
	// function to set next text
	function next(){
		// Switch text
		let counter = Math.floor(Math.random() * Math.floor(texte.length));
		if( counter == prevCounter ){
			counter++;
			if( counter >= texte.length-1 ){
				counter = 0;
			}
		}
		container.innerHTML = texte[counter];
		prevCounter = counter;
		// check for links
		let innerLink = container.querySelector('a');
		if( innerLink ){
			innerLink.addEventListener('mouseenter',function(){
				// stop animation
				clearInterval(timerInterval);
			});
			innerLink.addEventListener('mouseleave',function(){
				// start animation again after leave
				timerInterval = setInterval(next, delay);
			});
		}
	}
	// start interval once initially
	timerInterval = setInterval(next, delay);
}
document.addEventListener("DOMContentLoaded", function() {
	documentInit();
});