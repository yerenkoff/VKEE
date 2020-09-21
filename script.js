let leftButton = document.querySelector(".carouselButtons").children[0];
let rightButton = document.querySelector(".carouselButtons").children[1];
let slider = document.querySelector(".slider");
let carouselInfo = document.querySelector(".carouselInfo");
let dist = 0;

// нужно количество промежутков, а не детей
// 1   2       3       4       5       6
// 0   1044    2088    3132    4176    5220

rightButton.onclick = function() {
    dist = dist + window.innerWidth;
    dist = dist % (window.innerWidth * (slider.children.length - 1));
    slider.scrollTo({
        top: 0,
        left: dist,
        behavior: 'smooth'
      });
    carouselInfo.scrollTo({
        top: 0,
        left: dist,
        behavior: 'smooth'
      });
}

leftButton.onclick = function() {
    dist = dist - window.innerWidth;
    // dist = dist % (window.innerWidth * slider.children.length);
    if (dist < 0) dist = window.innerWidth * (slider.children.length - 1);
    // console.log(dist);
    slider.scrollTo({
        top: 0,
        left: dist,
        behavior: 'smooth'
      });
    carouselInfo.scrollTo({
        top: 0,
        left: dist,
        behavior: 'smooth'
      });
}