document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".carousel_item");
    const dots = document.querySelectorAll(".carousel_dot");
    const prevBtn = document.querySelector(".carousel_button__prev");
    const nextBtn = document.querySelector(".carousel_button__next");
 
    let index = 0;
 
    function showItem() {
       items.forEach(item => {
          item.classList.remove("carousel_item__active");
       });
       dots.forEach(dot => {
          dot.classList.remove("carousel_dot__active");
       });
       items[index].classList.add("carousel_item__active");
       dots[index].classList.add("carousel_dot__active");
    }
 
    function nextSlide() {
       index = (index + 1) % items.length;
       showItem();
    }
 
    function prevSlide() {
       index = (index - 1 + items.length) % items.length;
       showItem();
    }
 
    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);
 
    dots.forEach((dot, dotIndex) => {
       dot.addEventListener("click", () => {
          index = dotIndex;
          showItem();
       });
    });
 });
 