function getMouseCoordinates(event) {
  const rect = document.getElementById("canvas").getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  return { x, y };
}

// 在画布上绘制鼠标坐标
function drawMouseCoordinates(coordinates, ctx) {
  ctx.beginPath();
  ctx.arc(coordinates.x, coordinates.y, 5, 0, 2 * Math.PI);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.stroke();
}

// 获取画布元素
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 设置画布大小
canvas.width = 300;
canvas.height = 300;

// 监听鼠标移动事件
canvas.addEventListener("mousemove", (event) => {
  const coordinates = getMouseCoordinates(event);
  drawMouseCoordinates(coordinates, ctx);
});
