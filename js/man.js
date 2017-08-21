let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let end = false;

ctx.fillStyle = "#ddd";
ctx.fillRect(0,0,200,200);

//left base
function f0() {
  ctx.beginPath();
  ctx.moveTo(30,170);
  ctx.lineTo(50,150);
  ctx.stroke();
}

//right base
function f1() {
  ctx.beginPath();
  ctx.moveTo(70,170);
  ctx.lineTo(50,150);
  ctx.stroke();
}

// column
function f2() {
  ctx.beginPath();
  ctx.moveTo(50,20);
  ctx.lineTo(50,150);
  ctx.stroke();
}

//row
function f3() {
  ctx.beginPath();
  ctx.moveTo(50,20);
  ctx.lineTo(100,20);
  ctx.stroke();

}

function f4() {
  ctx.beginPath();
  ctx.moveTo(100,20);
  ctx.lineTo(100,50);
  ctx.stroke();
}

function f5() {
  ctx.beginPath();
  ctx.arc(100,61,10,0,2*Math.PI);
  ctx.stroke();
}

function f6() {
  ctx.beginPath();
  ctx.moveTo(100,100);
  ctx.lineTo(100,71);
  ctx.stroke();
}

function f7() {
  ctx.beginPath();
  ctx.moveTo(100,80);
  ctx.lineTo(110,100);
  ctx.stroke();
}


function f8() {
  ctx.beginPath();
  ctx.moveTo(100,80);
  ctx.lineTo(90,100);
  ctx.stroke();
}


function f9() {
  ctx.beginPath();
  ctx.moveTo(100,100);
  ctx.lineTo(110,120);
  ctx.stroke();
}

function f10() {
  ctx.beginPath();
  ctx.moveTo(100,100);
  ctx.lineTo(90,120);
  ctx.stroke();
  end = true;
}
let iterator = generator();
function* generator() {
  yield f0();
  yield f1();
  yield f2();
  yield f3();
  yield f4();
  yield f5();
  yield f6();
  yield f7();
  yield f8();
  yield f9();
  yield f10();
}
