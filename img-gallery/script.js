let scroll = document.querySelector(".gallery");
let backBtn = document.querySelector("#backBtn");
let nextBtn = document.querySelector("#nextBtn");

scroll.addEventListener("wheel", (e)=>{
	e.preventDefault();
	scroll.scrollLeft += e.deltaY;
	scroll.style.scrollBehavior = "smooth";
});

nextBtn.addEventListener("click",()=>{
	scroll.style.scrollBehavior = "smooth";
	scroll.scrollLeft += 900;
});

backBtn.addEventListener("click",()=>{
	scroll.style.scrollBehavior = "smooth";
	scroll.scrollLeft -= 900;
});

