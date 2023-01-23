const canvas = document.getElementById("sketchpad");
const colors = document.getElementsByClassName("color");
const range = document.getElementById("jsRange");
const erase = document.getElementById("erase");
const ctx = canvas.getContext("2d");

canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = "#000000";
ctx.lineWidth = 2.5; /* 라인 굵기 */

let painting = false;

function stopPainting() {
    painting = false;
}

function startPainting() {
    painting = true;
}
// @@@@@@@@@@@ 터치 반응 넣기 @@@@@@@@@@@@
function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;

		if(!painting) {
			ctx.beginPath();
			ctx.moveTo(x, y);
		}
		else {
			ctx.lineTo(x, y);
			ctx.stroke();
		}
}

function handleColorClick(event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
}

function handleRangeChange(event) {
    const size = event.target.value;
    ctx.lineWidth = size;
}

function clearAll(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}

Array.from(colors).forEach(color => 
    color.addEventListener("click", handleColorClick));

if (range) {
	range.addEventListener("input", handleRangeChange);
}

if (erase) {
		erase.addEventListener("click", clearAll);
}