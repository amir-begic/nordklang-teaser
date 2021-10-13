const svg = document.getElementById('svg-element')
const warp = new Warp(svg)

warp.transform(([ x, y ]) => [ x, y, y ])
setTimeout(function(){
    document.body.className="";
},100);

let offset = 0
function animate()
{
	warp.transform(([ x, y, oy ]) => [ x, oy + 4 * Math.sin(x / 16 + offset), oy ])
	offset += 0.04
	requestAnimationFrame(animate)
}

animate()
