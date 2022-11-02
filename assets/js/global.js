function goTopDown(){
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
}

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




function mainSiteMove(){
    	// Pinning and horizontal scrolling
	let horizontalSections = document.querySelectorAll(".js-horizontal-scroll");

	horizontalSections.forEach((horizontalSection) => {
		let pinWrap = horizontalSection.querySelector(".js-pin-wrap");
		let pinWrapWidth = pinWrap.offsetWidth;
		let horizontalScrollLength = pinWrapWidth - window.innerWidth;

		gsap.to(pinWrap, {
			scrollTrigger: {
				//scroller: "[data-scroll-container]",
                trigger: horizontalSection,
                start: "top top",
                end: () => `+=${pinWrapWidth}`,
				scrub: true,
				pin: true,
				invalidateOnRefresh: true
			},
			x: -horizontalScrollLength,
			ease: "none"
		});
	});
}


function mainBlogMove(){
    gsap.utils.toArray(".mainBlog").forEach(section => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "center center",
                end: () => "+=" + section.offsetWidth, 
                scrub: true,
                //pin: true,
                anticipatePin: 1
            },
            ease: "none"
        });
    
        tl.fromTo(section.querySelector(".areaRight"), { xPercent: 100, x: 0}, {xPercent: 0})
          .fromTo(section.querySelector(".areaRight .box"), {xPercent: -100, x: 0}, {xPercent: 0},0);
    });
}


gsap.registerPlugin(ScrollTrigger);

const images = gsap.utils.toArray('img');


const showDemo = () => {
  document.body.style.overflow = 'auto';
  document.scrollingElement.scrollTo(0, 0);
  gsap.to(document.querySelector('.loader'), { autoAlpha: 0 });
  
  gsap.utils.toArray('.demo').forEach((section, index) => {
    const w = section.querySelector('.wrapper');
    const [x, xEnd] = (index % 2) ? ['100%', (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
    gsap.fromTo(w, {  x  }, {
      x: xEnd,
      scrollTrigger: { 
        trigger: section, 
        scrub: 0.5 
      }
    });
  });
}

imagesLoaded(images).on('always', showDemo);



function demoMove(){
    gsap.utils.toArray('.demo').forEach((section, index) => {
        const w = section.querySelector('.wrapper');
        const [x, xEnd] = (index % 2) ? ['100%', (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
        gsap.fromTo(w, {  x  }, {
            x: xEnd,
            scrollTrigger: { 
            trigger: section, 
            scrub: 0.5 
            }
        });
    });
}
demoMove();





function colorChange(){
    /* COLOR CHANGER */
    const scrollColorElems = document.querySelectorAll("[data-bgcolor]");
    scrollColorElems.forEach((colorSection, i) => {
    const prevBg = i === 0 ? "" : scrollColorElems[i - 1].dataset.bgcolor;
    const prevText = i === 0 ? "" : scrollColorElems[i - 1].dataset.textcolor;

    ScrollTrigger.create({
        trigger: colorSection,
        //scroller: "[data-scroll-container]",
        start: "top 50%",
        onEnter: () =>
            gsap.to("body", {
            backgroundColor: colorSection.dataset.bgcolor,
            color: colorSection.dataset.textcolor,
            overwrite: "auto"
            }),
        onLeaveBack: () =>
            gsap.to("body", {
            backgroundColor: prevBg,
            color: prevText,
            overwrite: "auto"
            })
        });
    });

    ScrollTrigger.refresh();
}

window.addEventListener("load", function () {
    goTopDown();
    marquee();
    mainCateMove();
    mainSiteMove();
    mainBlogMove();
    colorChange();
});


