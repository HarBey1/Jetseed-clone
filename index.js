const toggle = document.getElementsByClassName("burger")[0];
const navLinks = document.getElementsByClassName("links")[0]; 
const login = document.getElementsByClassName("login")[0];
const button = document.getElementsByClassName("btns")[0];
const nav = document.getElementsByClassName("nav")[0];

toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active")
});

toggle.addEventListener("click", () => {
    login.classList.toggle("active")
});
toggle.addEventListener("click", () => {
    button.classList.toggle("active")
});
toggle.addEventListener("click", () => {
    nav.classList.toggle("active")
});
toggle.addEventListener("click", () => {
    nav.style.height('844px');
});



// $('document').ready(function () {
//     $('#imgs1').scroll(function (){
//         right:"150px"
//     },2000)
// })

// let stickySection = document.querySelector(".section");

// document.addEventListener('wheel', function(e) {
//  const relativeScrollPosition = window.pageYOffset - stickySection.offsetTop;
//  const endOfStickySection = stickySection.offsetTop + stickySection.offsetHeight;
//  if( relativeScrollPosition > 0 && relativeScrollPosition < endOfStickySection){
//    updateScrollAnimation(relativeScrollPosition);
//  };
// });

// function updateScrollAnimation(currentScrollPosition){
//   document.querySelector(".last").style.width = (currentScrollPosition/400) * 100 +"px";
// }

const scrollContainer = document.querySelector('last');

scrollContainer.addEventListener('wheel', (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
})