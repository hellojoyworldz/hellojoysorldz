// goTop
function goTop(){
	window.scroll({
		top: 0, 
		left: 0, 
		behavior: 'smooth'
	});
}
document.querySelector('.goTop').addEventListener('click' , function(){
	goTop();
})

// goDown
function goDown(){
	window.scroll({
		top: document.body.offsetHeight,
		left: 0, 
		behavior: 'smooth'
	})
}
document.querySelector('.goDown').addEventListener('click' , function(){
	goDown();
})

// marquee
function marquee(){
	let tg = '.js-marquee';
	let target = document.querySelector('.js-marquee');
	let count = 0;

	function gsapTo(tg, x){
		gsap.to(tg, {
			x: x,
			duration : 0
		});
	}

	function text(count, target, direction){
		if(count > target.scrollWidth / 4){
			gsapTo(tg,0);
			count = 0;
		}else{
			gsapTo(tg,count*direction);
		}
		return count;
	}

	function animate(){
		count++;
		count = text(count, target, -1);
		window.requestAnimationFrame(animate);
	}
	animate();
}
marquee();

// mainCateMove
function mainCateMove(){
	let tg = ".js-mainCateList";
	let start = ".mainCate__tit"
	let w = document.querySelector(tg).scrollWidth - window.innerWidth;
	
	
	gsap.to(tg, {
		scrollTrigger: {
			trigger: tg,
			start: "top bottom",
			end: "bottom top",
			toggleClass:"active",
			scrub: 1,
			//markers: true
		},
		x: -w
	});
}

mainCateMove();

