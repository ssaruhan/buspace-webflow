// Spaces carousels
var carousels = document.querySelectorAll(".spaces-carousel");

carousels.forEach((carousel) => {
  var flkty = new Flickity(carousel, {
    prevNextButtons: false,
    pageDots: false,
    contain: true,
    cellAlign: "left",
  });
});

// Mobile menu
let toggle = document.querySelector(".mobile-menu-toggle");
let menu = document.querySelector(".menu");

toggle.addEventListener("click", (e) => {
  if (menu.classList.contains("open")) {
    menu.classList.remove("open");
    toggle.innerText = "Menu";
  } else {
    menu.classList.add("open");
    toggle.innerText = "Close";
  }
});

// Media carousel
customElements.define(
  "image-gallery",
  class extends HTMLElement {
    constructor() {
      super();
      this.elem = document.querySelector(".media-carousel");
      this.counter = document.querySelector(".pagination-counter");
      this.next = document.querySelector(".pagination-button.next");
      this.prev = document.querySelector(".pagination-button.prev");
    }

    updateStatus() {
      let slideNumber = this.flkty.selectedIndex + 1;
      this.counter.textContent = slideNumber + " / " + this.flkty.slides.length;
    }

    connectedCallback() {
      this.flkty = new Flickity(this.elem, {
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true,
      });
      this.updateStatus();
      this.flkty.on("select", this.updateStatus);

      this.next.addEventListener("click", (e) => {
        this.flkty.next();
      });
      this.prev.addEventListener("click", (e) => {
        this.flkty.previous();
      });
    }
  }
);

// var elem = document.querySelector(".media-carousel");
// let counter = document.querySelector(".pagination-counter");

// var flkty = new Flickity(elem, {
//   prevNextButtons: false,
//   pageDots: false,
//   wrapAround: true,
// });

// function updateStatus() {
//   var slideNumber = flkty.selectedIndex + 1;
//   counter.textContent = slideNumber + " / " + flkty.slides.length;
// }
// updateStatus();

// flkty.on("select", updateStatus);

// let next = document.querySelector(".pagination-button.next");
// next.addEventListener("click", (e) => {
//   flkty.next();
// });

// let prev = document.querySelector(".pagination-button.prev");
// prev.addEventListener("click", (e) => {
//   flkty.previous();
// });
