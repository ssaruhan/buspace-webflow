// Splash carousel
customElements.define(
  "splash-carousel",
  class extends HTMLElement {
    constructor() {
      super();
      this.carousel = this.querySelector(".carousel-wrapper");
    }

    connectedCallback() {
      this.flkty = new Flickity(this.carousel, {
        prevNextButtons: false,
        pageDots: false,
        contain: true,
        wrapAround: true,
        autoPlay: true,
        cellAlign: "left",
      });
    }

    disconnectedCallback() {
      this.flkty.destroy();
    }
  }
);

// Spaces carousels
customElements.define(
  "card-carousel",
  class extends HTMLElement {
    constructor() {
      super();
      this.carousel = this.querySelector(".carousel-wrapper");
    }

    connectedCallback() {
      this.flkty = new Flickity(this.carousel, {
        prevNextButtons: false,
        pageDots: false,
        contain: true,
        cellAlign: "left",
      });
    }

    disconnectedCallback() {
      this.flkty.destroy();
    }
  }
);

// var carousels = document.querySelectorAll(".spaces-carousel");
// carousels.forEach((carousel) => {
//   var flkty = new Flickity(carousel, {
//     prevNextButtons: false,
//     pageDots: false,
//     contain: true,
//     cellAlign: "left",
//   });
// });

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
      this.flkty;
    }

    updateStatus(index) {
      let slideNumber = index + 1;
      this.counter.textContent = slideNumber + " / " + this.flkty.slides.length;
    }

    connectedCallback() {
      this.flkty = new Flickity(this.elem, {
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true,
      });

      this.updateStatus(this.flkty.selectedIndex);
      this.flkty.on("select", (index) => {
        this.updateStatus(index);
      });

      this.next.addEventListener("click", (e) => {
        this.flkty.next();
      });
      this.prev.addEventListener("click", (e) => {
        this.flkty.previous();
      });
    }

    disconnectedCallback() {
      this.flkty.destroy();
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
