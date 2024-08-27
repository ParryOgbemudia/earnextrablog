const hero = document.querySelector(".hero");

const container = document.querySelector(".learn__container");

hero.addEventListener("click", function (e) {
  //for heading truncating
  if (e.target.classList.contains("truncated-heading")) {
    e.target.classList.toggle("show");
    e.target.classList.toggle("full-text");
  }

  // for text truncating
  if (e.target.classList.contains("truncated-text")) {
    e.target.classList.toggle("show");
    e.target.classList.toggle("full-text");
  }
});

container.addEventListener("click", function (e) {
  //for heading truncating
  if (e.target.classList.contains("truncated-heading")) {
    e.target.classList.toggle("show");
    e.target.classList.toggle("full-text");
  }

  // for text truncating
  if (e.target.classList.contains("truncated-text")) {
    e.target.classList.toggle("show");
    e.target.classList.toggle("full-text");
  }
});

// function replaceImage() {
//   const imagehero = document.querySelector(".hero__main-img");
//   const screenWidth = window.innerWidth;
//   const breakpoint = 43 * 16; // Convert 43em to pixels (assuming 16px default font size)

//   if (screenWidth <= breakpoint) {
//     image.src = "../img/editor-photo-4.jpg";
//   } else {
//     image.src = "../img/heroimg.jpg";
//   }
// }

// // Run on load and on resize
// window.addEventListener("load", replaceImage);
// window.addEventListener("resize", replaceImage);
