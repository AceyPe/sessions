// var carouselBody = document.querySelector(".track");
// var nextBtn = document.getElementById("next");
// var backBtn = document.getElementById("prev");

// const totalSlides = 3;
// const slideWidth = 800;
// var currentSlide = 0;

// nextBtn.addEventListener("click", () => {
//   if (currentSlide >= totalSlides - 1 ) {
//     return;
//   }
//   currentSlide++;
//   carouselBody.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
// });

// backBtn.addEventListener("click", () => {
//   if (currentSlide <= 0) {
//     return;
//   }
//   currentSlide--;
//   carouselBody.style.transform = `translateX(${-currentSlide *slideWidth}px)`;
// });

























const slides = document.querySelector(".tracker");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
// var carouselBody = document.querySelector(".slides");


const slideWidth = 800;
var currentSlide = 0;
const totalSlides = 3;


nextBtn.addEventListener("click", () => {
  if ( currentSlide >= totalSlides) {
    return;
  }

  // slides.style.transform ="translateX(currentStep + 800)"
  ``
  currentSlide++;
  // carouselBody.style.transform = `translateX(-${currentSlide * slideWidth}px)`;

  slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`

}) 

prevBtn.addEventListener("click", () => {
  if ( currentSlide <= 0) {
    return;
  }

  // slides.style.transform ="translateX(currentStep + 800)"
  ``
  currentSlide--;
  // carouselBody.style.transform = `translateX(-${currentSlide * slideWidth}px)`;

  slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`

}) 




function func() {
  const x = 5;

  console.log(x * 2);
}

const func2 = () => {
  const y = 10;
  console.log(y / 2);
}

func2();


func();


const obj = {
  name: "Yahya",
  email: "yahya.adawy50@gmail.com"
}


const {name, email, emails} = obj;

console.log(emails);

const arr = ["hello1", "hello2", "hello3", "hello4", "hello5"]

console.log(arr[4]);
// console.log(arr[-1]);

for (let i = 0 ; i <= arr.length-1; i++){
  if (i == arr.length -1) {
    console.log(arr[i]);
  }
}


let index = 0;

arr.map((hello) => {
  index++;
  if (index == arr.length) 
     {
    console.log(hello);
  }
})


console.log(arr.at(4));

const nums = [1,2,3,1]
var ans = [...nums, ...nums];
console.log(ans);

// for(let i =0; i< nums.length ; i++){
//   console.log(i);
//   console.log(nums[i])
//   newIndex = i + nums.length;
//   ans[i] =(nums[i]);
//   ans[newIndex] = nums[i];  
// }

console.log(ans);