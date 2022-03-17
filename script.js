const btn = document.querySelector(".btn");
const images = document.querySelector(".images");
let imageGen = 1;
btn.addEventListener("click", function () {
  imageGen++;
  images.innerHTML += `<img src="https://picsum.photos/200/300?random=${imageGen}">`;
});
