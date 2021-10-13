const svg = document.getElementById('svg-element')
const warp = new Warp(svg)

warp.transform(([ x, y ]) => [ x, y, y ])
window.addEventListener('load', (event) => {
	var classOne    = document.querySelector(".track");
	var classTwo    = document.querySelector(".track2");
	var classThree  = document.querySelector(".track3");
	var classFour   = document.querySelector(".track4");
	var classFive   = document.querySelector(".track5");
	var classSix   = document.querySelector(".track6");

	var allClasses = [classOne, classTwo, classThree, classFour, classFive, classSix];

	allClasses.forEach(function(el) {
	el.classList.remove("paused")
	})

});

window.addEventListener('orientationchange', function () {
    var originalBodyStyle = getComputedStyle(document.body).getPropertyValue('display');
    document.body.style.display='none';
	console.log("gogo")
    setTimeout(function () {
      document.body.style.display = originalBodyStyle;
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
