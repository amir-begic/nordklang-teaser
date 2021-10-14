const svg = document.getElementById('svg-element')
const warp = new Warp(svg)
warp.transform(([ x, y ]) => [ x, y, y ])

var classOne    = document.querySelector(".track");
var classTwo    = document.querySelector(".track2");
var classThree  = document.querySelector(".track3");
var classFour   = document.querySelector(".track4");
var classFive   = document.querySelector(".track5");
var classSix   = document.querySelector(".track6");

var allClasses = [classOne, classTwo, classThree, classFour, classFive, classSix];

function startMarquee(timeout){
	setTimeout( () => {
		allClasses.forEach( (el) => {
		  el.classList.remove("paused")
	  })
    }, timeout);
}

function pauseMarquee(timeout){
	setTimeout( () => {
		allClasses.forEach( (el) => {
		  el.classList.add("paused")
	  })
    }, 0);
}


window.addEventListener('load', () => {
	startMarquee(100);
});

window.addEventListener('resize', () => {
	pauseMarquee(0);
	startMarquee(40);
})

window.addEventListener('orientationchange', () => {
	startMarquee(40);
  });

let offset = 0
function animate()
{
	warp.transform(([ x, y, oy ]) => [ x, oy + 4 * Math.sin(x / 16 + offset), oy ])
	offset += 0.04
	requestAnimationFrame(animate)
}

animate()