// let valueDisplays = document.querySelectorAll('.achi-counter');
// let interval = 5000;

// valueDisplays.forEach((valueDisplay)=>{
//     let startValue = 0;
//     let endValue = parseInt(valueDisplay.getAttribute("data-val"));
//     let duration = Math.floor(interval/endValue);
//     let counter = setInterval(function(){
//         startValue += 1;
//         valueDisplay.textContent = startValue + '+';
//         if(startValue == endValue){
//             clearInterval(counter);
//             valueDisplay.textContent = startValue + '+';
//         }
//     },duration);
// })
let valueDisplays = document.querySelectorAll('.achi-counter');
let interval = 5000;

// Create an Intersection Observer instance
let observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Start the counter animation when the counter element is in viewport
      startCounter(entry.target);
      observer.unobserve(entry.target); // Stop observing once the counter starts
    }
  });
}, { threshold: 0.5 }); // You can adjust the threshold as needed

// Observe each counter element
valueDisplays.forEach(valueDisplay => {
  observer.observe(valueDisplay);
});

function startCounter(valueDisplay) {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue + '+';
    if (startValue == endValue) {
      clearInterval(counter);
      valueDisplay.textContent = startValue + '+';
    }
  }, duration);
}
