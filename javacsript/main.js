document.addEventListener(
  "DOMContentLoaded",
  function () {
    const botton = document.getElementsByClassName("nav_click");
    const content = document.getElementsByClassName("nav_display");
    const ndthem = document.querySelector(".content-down");
    const hienthi = document.querySelector(".content-noidungthem");
    const anbot = document.querySelector(".content-up");
    const ndthem2 = document.querySelector(".content-down2");
    const hienthi2 = document.querySelector(".content-noidungthem2");
    const anbot2 = document.querySelector(".content-up2");
    ndthem.addEventListener("click", function () {
      hienthi.classList.add("hienthi");
      ndthem.classList.add("an");
      anbot.classList.add("hienthi");
    });
    ndthem2.addEventListener("click", function () {
      hienthi2.classList.add("hienthi");
      ndthem2.classList.add("an");
      anbot2.classList.add("hienthi");
    });
    anbot.addEventListener("click", function () {
      hienthi.classList.remove("hienthi");
      anbot.classList.remove("hienthi");
      ndthem.classList.remove("an");
    });
    anbot2.addEventListener("click", function () {
      hienthi2.classList.remove("hienthi");
      anbot2.classList.remove("hienthi");
      ndthem2.classList.remove("an");
    });
    for (var i = 0; i < botton.length; i++) {
      botton[i].addEventListener(
        "click",
        function () {
          if (this.classList[1] === "mauxanh") {
            this.classList.remove("mauxanh");
            this.classList.remove("kengang");
            const ndhienra = this.getAttribute("data-content");
            const phantuhienra = document.getElementById(ndhienra);
            phantuhienra.classList.remove("ra");
          } else {
            for (var k = 0; k < botton.length; k++) {
              botton[k].classList.remove("mauxanh");
              botton[k].classList.remove("kengang");
            }
            this.classList.add("mauxanh");
            this.classList.add("kengang");
            const ndhienra = this.getAttribute("data-content");
            const phantuhienra = document.getElementById(ndhienra);
            for (var i = 0; i < content.length; i++) {
              content[i].classList.remove("ra");
            }
            phantuhienra.classList.toggle("ra");
          }
        },
        false
      );
    }
  },
  false
);
