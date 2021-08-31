var logo = document.querySelector('.logo');
var marq = document.querySelector('.marquee');

window.addEventListener('mousemove', evt => {
    var x = evt.clientX;
    var y = evt.clientY;
    var transform = 'translate(-50%, -50%)'
    transform= transform+ ' scaleX(' + y/1000 +') '+ 'scaleY('+x/1000+')';
    
    //logo.setAttribute('transform', transform);
    logo.style.transform = transform;

});

