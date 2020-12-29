window.addEventListener("DOMContentLoaded", function () {
  //Get the button
  var mybutton = document.getElementById("scrollToTop");
  var hamburger = document.querySelector(".burger");
  var navLink = document.querySelector(".main-nav");

  hamburger.addEventListener("click", () => {
    navLink.classList.toggle("show");
  });

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  mybutton.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
});
