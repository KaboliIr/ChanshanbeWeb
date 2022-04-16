document.addEventListener('DOMContentLoaded', () => {

  // Unix timestamp (in seconds) to count down to
  var twoDaysFromNow = (new Date().getTime() / 1000) + (86400 * 2) + 1;

  // Set up FlipDown
  var flipdown = new FlipDown(twoDaysFromNow)

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
      console.log('The countdown has ended!');
    });

  // Toggle theme
  // var interval = setInterval(() => {
  //   let body = document.body;
  //   body.classList.toggle('light-theme');
  //   body.querySelector('#flipdown').classList.toggle('flipdown__theme-dark');
  //   body.querySelector('#flipdown').classList.toggle('flipdown__theme-light');
  // }, 5000);

  // Show version number
  // var ver = document.getElementById('ver');
  // ver.innerHTML = flipdown.version;
});
// The Week
console.log("The version 1.0")
let Page={
    p1:document.getElementById("One"),
    p2:document.getElementById("Two"),
    p3:document.getElementById("Three"),
    p4:document.getElementById("Four"),
    p5:document.getElementById("Five"),
    p6:document.getElementById("Six"),
    p7:document.getElementById("Seven")
}
let Day={
    Sat:document.getElementById("Sat"),
    Sun:document.getElementById("Sun"),
    Mon:document.getElementById("Mon"),
    Tue:document.getElementById("Tue"),
    Wen:document.getElementById("Wen"),
    Thr:document.getElementById("Thr"),
    Fri:document.getElementById("Fri")
}
const Top="50%"

//Function SaterDay
function Saterday(e){
  e.preventDefault();
    Page.p1.style.zIndex=20;
    Page.p1.style.top=0;
    // The Zindex
    Page.p2.style.zIndex=0;
    Page.p3.style.zIndex=0;
    Page.p4.style.zIndex=0;
    Page.p5.style.zIndex=0;
    Page.p6.style.zIndex=0;
    Page.p7.style.zIndex=0;
    //The Top
    Page.p2.style.top=Top;
    Page.p3.style.top=Top;
    Page.p4.style.top=Top;
    Page.p5.style.top=Top;
    Page.p6.style.top=Top;
    Page.p7.style.top=Top;
    
}
//Function Sunday

function Sunday(e){
  e.preventDefault();
    Page.p2.style.zIndex=20;
    Page.p2.style.top=0;
    //The Zindex
    Page.p1.style.zIndex=0;
    Page.p3.style.zIndex=0;
    Page.p4.style.zIndex=0;
    Page.p5.style.zIndex=0;
    Page.p6.style.zIndex=0;
    Page.p7.style.zIndex=0;
    //The Top
    Page.p1.style.top=Top;
    Page.p3.style.top=Top;
    Page.p4.style.top=Top;
    Page.p5.style.top=Top;
    Page.p6.style.top=Top;
    Page.p7.style.top=Top;

    
}
// Function Monday
function Monday(e){
  e.preventDefault();
    Page.p3.style.zIndex=20;
    Page.p3.style.top=0;
    //The Zindex
    Page.p1.style.zIndex=0;
    Page.p2.style.zIndex=0;
    Page.p4.style.zIndex=0;
    Page.p5.style.zIndex=0;
    Page.p6.style.zIndex=0;
    Page.p7.style.zIndex=0;
    //The Top
    Page.p1.style.top=Top;
    Page.p2.style.top=Top;
    Page.p4.style.top=Top;
    Page.p5.style.top=Top;
    Page.p6.style.top=Top;
    Page.p7.style.top=Top;
}
//Function TueDay
function Tuesday(e){
  e.preventDefault();
    Page.p4.style.zIndex=20;
    Page.p4.style.top=0;
    //The Zindex
    Page.p1.style.zIndex=0;
    Page.p2.style.zIndex=0;
    Page.p3.style.zIndex=0;
    Page.p5.style.zIndex=0;
    Page.p6.style.zIndex=0;
    Page.p7.style.zIndex=0;
    //The Top
    Page.p1.style.top=Top;
    Page.p2.style.top=Top;
    Page.p3.style.top=Top;
    Page.p5.style.top=Top;
    Page.p6.style.top=Top;
    Page.p7.style.top=Top;
    
}
//Function Wenday
function Wensday(e){
  e.preventDefault();
    Page.p5.style.zIndex=20;
    Page.p5.style.top=0;
    //The Zindex
    Page.p1.style.zIndex=0;
    Page.p2.style.zIndex=0;
    Page.p3.style.zIndex=0;
    Page.p4.style.zIndex=0;
    Page.p6.style.zIndex=0;
    Page.p7.style.zIndex=0;
    //The Top
    Page.p1.style.top=Top;
    Page.p2.style.top=Top;
    Page.p3.style.top=Top;
    Page.p4.style.top=Top;
    Page.p6.style.top=Top;
    Page.p7.style.top=Top;
}
//Function Thr
function Thresday(e){
  e.preventDefault();
    Page.p6.style.zIndex=20;
    Page.p6.style.top=0;
    //The Zindex
    Page.p1.style.zIndex=0;
    Page.p2.style.zIndex=0;
    Page.p3.style.zIndex=0;
    Page.p4.style.zIndex=0;
    Page.p5.style.zIndex=0;
    Page.p7.style.zIndex=0;
    //The Top
    Page.p1.style.top=Top;
    Page.p2.style.top=Top;
    Page.p3.style.top=Top;
    Page.p4.style.top=Top;
    Page.p5.style.top=Top;
    Page.p7.style.top=Top;
}
//Function Fri
function Friday(e){
  e.preventDefault();
    Page.p7.style.zIndex=20;
    Page.p7.style.top=0;
    //The Zindex
    Page.p1.style.zIndex=0;
    Page.p2.style.zIndex=0;
    Page.p3.style.zIndex=0;
    Page.p4.style.zIndex=0;
    Page.p5.style.zIndex=0;
    Page.p6.style.zIndex=0;
    //The Top
    Page.p1.style.top=Top;
    Page.p2.style.top=Top;
    Page.p3.style.top=Top;
    Page.p4.style.top=Top;
    Page.p5.style.top=Top;
    Page.p6.style.top=Top;
}
// The Library AOS
AOS.init();





//Event
Day.Sat.addEventListener("click",Saterday);
Day.Sun.addEventListener("click",Sunday);
Day.Mon.addEventListener("click",Monday);
Day.Tue.addEventListener("click",Tuesday);
Day.Wen.addEventListener("click",Wensday);
Day.Thr.addEventListener("click",Thresday);
Day.Fri.addEventListener("click",Friday);
