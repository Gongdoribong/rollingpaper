const canvas = document.getElementById("sketchpad");
const colors = document.getElementsByClassName("color");
const range = document.getElementById("jsRange");
const erase = document.getElementById("erase");
const ctx = canvas.getContext("2d");
const rect = canvas.getBoundingClientRect();

canvas.width = 300;
canvas.height = 500;

ctx.strokeStyle = "#000000";
ctx.lineWidth = 2.5; /* 라인 굵기 */

let painting = false;

function stopPainting() {
    painting = false;
}

function startPainting() {
    painting = true;
}

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
// 터치스크린 - 합칠 수 있을듯 나중에 개선
function m_startPainting(event) {
    painting = true;
}

function m_onMouseMove(event) {
    const x = event.touches[0].pageX - rect.left;
    const y = event.touches[0].pageY - rect.top;

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

    canvas.addEventListener("touchstart", m_startPainting);
    canvas.addEventListener("touchmove", m_onMouseMove);
    canvas.addEventListener("touchend", stopPainting);
}

Array.from(colors).forEach(color => 
    color.addEventListener("click", handleColorClick));

if (range) {
	range.addEventListener("input", handleRangeChange);
}

if (erase) {
		erase.addEventListener("click", clearAll);
}