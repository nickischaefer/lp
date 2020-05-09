

function UnCryptMailto( s )
{
  var n = 0;
  var r = "";
  for( var i = 0; i < s.length; i++)
  {
    n = s.charCodeAt( i );
    if( n >= 8364 ){
        n = 128;
    }
    r += String.fromCharCode( n - 1 );
  }
  return r;
}

function linkTo_UnCryptMailto( s )
{
    location.href=UnCryptMailto( s );
}


const texte = [
	"I’m a Product Designer.",
	"I’m a Strategic Designer.",
	"I’m a Design Lead at <a href=https://ideo.com target=_blank>IDEO</a>.",
	"I’m a Prototyping Enthusiast.",
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
