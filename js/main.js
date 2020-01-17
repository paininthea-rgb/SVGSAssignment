(() => {

  console.log("hello from js!")
  //find the elements in the document
  //class has a "."
  // java setup is top make connects and in middle add functions bottom events
  let toggleButton = document.querySelector(".switch-text"),
    myHeading = document.querySelector("h1"),
    allSVGs = document.querySelectorAll(".svg");

    //svgImg = document.querySelector("#badge");
    //svgImg2 = document.querySelector("#badge2");
//this functions changes header text :)
  function changeText() {
    myHeading.textContent = "whats up? I am script!";
  }
// this function should log the id for each svg to the console
  function logSVG() {
    console.log(this.id);
  }
//things a user can do to make stuff happen on the page
  toggleButton.addEventListener("click", changeText);

  //svgImg.addEventListener("click", logSVG);
  //svgImg2.addEventListener("click", logSVG);
  
  allSVGs.forEach(item => item.addEventListener("click", logSVG));
//  $("h1").align
//document.querySelector("h1").textContent = "whatssss up";



})();
