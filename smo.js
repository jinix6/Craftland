const scroller = new LocomotiveScroll({
	el: document.querySelector('html'),
	smooth: 2
})

gsap.registerPlugin(ScrollTrigger)
scroller.on('scroll', ScrollTrigger.update)

ScrollTrigger.scrollerProxy(
	'.jsScroll', {
		scrollTop(value) {
			return arguments.length ?
				scroller.scrollTo(value, 0, 0) :
				scroller.scroll.instance.scroll.y
		},
		getBoundingClientRect() {
			return {
				left: 0,
				top: 0,
				width: window.innerWidth,
				height: window.innerHeight
			}
		}
	}
)


gsap.from("#fooder1", {
	x: "0",
	opacity: "0",
	scale: "0.5",
	scrollTrigger: {
		scroller: "html",
		trigger: "#fooder1",
		markers: false,
		start: "top 100%",
		end: "top 80%",
		scrub: 2
	}
})

gsap.to(".ejeijej", {
	x: "0",
	opacity: "0",
	scale: "0.5",
	scrollTrigger: {
		scroller: "html",
		trigger: "target",
		markers: false,
		start: "top 0%",
		end: "top -50%",
		scrub: 1
	}
})
/**
gsap.to("#ndjhdb", {
  x: "0",
  opacity: "0",
  scale: "0.5",
  scrollTrigger: {
    scroller: "html",
    trigger: "target",
    markers: true,
    start: "top top",
    end: "top -50%",
    scrub: 1
  }
})

**/
// Create a GSAP timeline
const timeline = gsap.timeline({
	scrollTrigger: {
		trigger: "html", // The element that triggers the animation
		start: "top top", // When to start the animation
		end: "top -50%", // When to end the animation
		scrub: 1, // Smooth scrolling animation
		markers: false,
		toggleActions: "restart pause resume pause"

		// Show markers for debugging (remove in production)
	}
});

// Add animations to the timeline
timeline.to("#ndjhdb", {
	opacity: 0,
	scale: "0.5",
})

gsap.to("#neyzusb", {
	x: "0",
	opacity: "0",
	scale: "0.5",
	scrollTrigger: {
		scroller: "html",
		trigger: "target",
		markers: false,
		start: "top -20%",
		end: "top -90%",
		scrub: 1
	}
})

gsap.to(".jdidhdh", {
	x: "0",
	opacity: "0",
	scale: "0.5",
	scrollTrigger: {
		scroller: "html",
		trigger: "target",
		markers: false,
		start: "top -50%",
		end: "top -100%",
		scrub: 1
	}
})

const timeline1 = gsap.timeline({
	scrollTrigger: {
		scroller: "html",
		trigger: ".fidndjdjd",
		markers: false,
		start: "top 40%",
		end: "top -110%",
		pin: true,
		scrub: 2
	}
});


timeline1.to(".fidndjdjd", {
	x: "0",
	opacity: "1",
	background: "#C7D7FF",
	scale: "0.9",
})



timeline1.to("#isjsjsh", {
	color: "#1A2A4E",

})


timeline1.to("#ksjshhd", {
	color: "#1A2A4E",
})


timeline1.to("#dkisjdj", {
	color: "#1A2A4E",
})


timeline1.to("#jsidhdh", {
	color: "#1A2A4E",
})


function emote() {
	window.location.href = "/Craftland/emote.html";
}
document.addEventListener("contextmenu", function(e) {
	e.preventDefault();
});

function item() {
	document.getElementById("bg").style.animation = "menu 500ms 1 forwards";

	document.getElementById("menu_bg").style.animation = "menu_bgfade 250ms 1 forwards";

}

function menu_close() {
	document.getElementById("bg").style.animation = "menu2 500ms 1 forwards";

	document.getElementById("menu_bg").style.animation = "menu_bgfade2 250ms 1 forwards";

}

function t() {



	Toastify({
		text: "Error",
		duration: 3000,
		close: true,
		gravity: "top", // `top` or `bottom`
		position: "left", // `left`, `center` or `right`
		style: {
			background: "linear-gradient(to right, #2A0F0F, #0F172A",
		},
		onClick: function() {} // Callback after click
	}).showToast();
}
document.getElementById("kdkdjzj").style.animation ="dialog1show 250ms 1 forwards";
