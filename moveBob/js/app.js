const bob = document.querySelector(".bob");
const eyes = document.querySelector(".eyes-container");
const dots = document.querySelectorAll(".dot");

// document.addEventListener("keydown", (event) => {
// 	console.log(event);
//  moveBob();
// });

// bob.style.top = "500px";

function moveBob(e) {
	let moveX = e.clientX;
	let moveY = e.clientY;

	bob.style.top = moveY + "px";
	bob.style.left = moveX + "px";

	if (e.movementY >= 0) {
		dots.forEach((dot) => {
			dot.style.top = "30px";
		});
	}

	if (e.movementY < 0) {
		dots.forEach((dot) => {
			dot.style.top = "5px";
		});
	}

	if (e.movementX >= 0) {
		dots.forEach((dot) => {
			dot.style.left = "30px";
		});
	}

	if (e.movementX < 0) {
		dots.forEach((dot) => {
			dot.style.left = "0px";
		});
	}
}

document.addEventListener("mousemove", moveBob);
