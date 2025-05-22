// header and footer
function loadHTML(id, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    });
}
loadHTML("header", "header.html");
loadHTML("footer", "footer.html");



//changing navbar background on scroll

const navbar=document.querySelector(".navbar");
window.addEventListener("scroll", ()=> {
  var navbar = document.querySelector(".navbar")
 if(!navbar) return;
 navbar.classList.toggle("scrolled",window.scrollY>30)
});




// owl carousel

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    autoplay: true,
    autoplayTimeout: 4000,
    loop: true,
    margin: 10,
    responsive: {
      0: {
        items: 2
      },
      576: {
        items: 3
      },
      768: {
        items: 4
      },
      992: {
        items: 5
      }
    }
  });
});


// comment toggle on off

// ————— Comment Toggle —————
const toggleComment = document.getElementById("ToggleComment");
if (toggleComment) {
  const toggleSpan = toggleComment.querySelector("span");
  const comments = document.querySelectorAll(".show");
  let visible = true;

  toggleComment.addEventListener("click", () => {
    visible = !visible;
    toggleSpan.style.left = visible ? "calc(100% - 16px)" : "0";
    comments.forEach(c => c.style.display = visible ? "block" : "none");
  });
}


// tooltip
document.addEventListener('DOMContentLoaded', function () {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  });
});
