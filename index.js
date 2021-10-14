const svg = document.getElementById('svg-element')
const warp = new Warp(svg)


var classOne    = document.querySelector(".track");
var classTwo    = document.querySelector(".track2");
var classThree  = document.querySelector(".track3");
var classFour   = document.querySelector(".track4");
var classFive   = document.querySelector(".track5");
var classSix   = document.querySelector(".track6");

var allClasses = [classOne, classTwo, classThree, classFour, classFive, classSix];

warp.transform(([ x, y ]) => [ x, y, y ])
window.addEventListener('load', (event) => {

	setTimeout( () => {
		//document.body.style.display = originalBodyStyle;
		allClasses.forEach( el => {
		  el.classList.remove("paused")
		  console.log("unpaused")
	  })

    }, 100);

});

window.addEventListener('resize', (event) => {
	setTimeout( () => {
		allClasses.forEach(function(el) {
		  el.classList.remove("paused")
		  console.log("unpaused")
	  })
	  }, 10);
})

window.addEventListener('orientationchange', function () {
    //var originalBodyStyle = getComputedStyle(document.body).getPropertyValue('display');
    //document.body.style.display='none';
	allClasses.forEach(function(el) {
		console.log("paused")
		el.classList.add("paused")
		})
    setTimeout( () => {
      //document.body.style.display = originalBodyStyle;
	  allClasses.forEach(function(el) {
		el.classList.remove("paused")
		console.log("unpaused")
	})
    }, 10);
	
  });

let offset = 0
function animate()
{
	warp.transform(([ x, y, oy ]) => [ x, oy + 4 * Math.sin(x / 16 + offset), oy ])
	offset += 0.04
	requestAnimationFrame(animate)
}

animate()
