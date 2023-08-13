$(document).ready(function () {
  new WOW().init();
});

$(".slider").slick({
  autoplay: true,
  dots: false,
  arrows: true,
  slidesToShow: 1,
  pauseOnHover: false,
  focusOnSelect: false,
  pauseOnFocus: false,
  autoplaySpeed: 1600
});

$(".service-slider").slick({
  autoplay: true,
  dots: true,
  slidesToShow: 3,
  arrows: false,
  pauseOnHover: false,
  focusOnSelect: false,
  pauseOnFocus: false,
  autoplaySpeed: 1600,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        arrows: true,
        dots:false,
      }
    }
  ]
});

$(".solution-slider").slick({
  autoplay: true,
  dots: true,
  slidesToShow: 3,
  arrows: false,
  pauseOnHover: false,
  focusOnSelect: false,
  pauseOnFocus: false,
  autoplaySpeed: 1600,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        arrows: false,
        dots:true,
      }
    }
  ]
});

$(".slider-2").slick({
  autoplay: true,
  dots: false,
  pauseOnHover: false,
  arrows: true,
  autoplaySpeed: 1600,
  focusOnSelect: false,
  pauseOnFocus: false
});

$(document).ready(function () {
  // Enable Bootstrap dropdown menu auto-closing behavior
  $(".navbar-nav>li>a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });
});
$(".why-us-section").click(function (e) {
  e.preventDefault();
});

$(".slider-iamge-transform").slick({
  autoplay: true,
  vertical: true,
  dots: false,
  slidesToShow: 1,
  arrows: false,
  autoplaySpeed: 2500,
  pauseOnHover: false,
  focusOnSelect: false,
  pauseOnFocus: false,
  pauseOnFocus: false,
  responsive: [
    {
      breakpoint: 767,
      slidesToShow: 1,
    }
  ]
});

var Contact_form = document.getElementById("contact_form");

if (Contact_form) {
  Contact_form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(Contact_form.action, {
      method: "POST",
      body: new FormData(document.getElementById("contact_form"))
    })
      .then((response) => response.json())
      .then((html) => {
        // var allInputs = document.querySelectorAll('input');
        //  allInputs.forEach(singleInput => singleInput.value = '');
        swal({
          title: "Thank you for contacting us! ",
          text: "We appreciate you contacting us. Our team will get back in touch with you soon! Have a great day!",
          icon: "success"
        });
        document.getElementById("contact_form").reset();
      });
  });
}

// footer

var footer_form = document.getElementById("footer-contact-form");
footer_form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(footer_form.action, {
    method: "POST",
    body: new FormData(document.getElementById("footer-contact-form"))
  })
    .then((response) => response.json())
    .then((html) => {
      swal({
        title: "Thank you for connecting with us! ",
        text: "We appreciate you contacting us. Our team will get back in touch with you soon! Have a great day!",
        icon: "success"
      });
      document.getElementById("footer-contact-form").reset();
    });

  console.log(FormData);
});

// var numbers = document.getElementsByClassName("number");
// var currentIndex = 0;

// setInterval(function() {
//   if (currentIndex >= 0) {
//     numbers[currentIndex].style.color = "transparent";
//   }
//   currentIndex = (currentIndex + 1) % numbers.length;
//   numbers[currentIndex].style.color = "#2f448f"; //
//   if (currentIndex === 1) {
//     numbers[0].style.color = "transparent";
//   }
// }, 3000);

// var slideimages = document.getElementsByClassName("slide-img");

// for (var i = 0; i < slideimages.length; i++) {
//   var numbers= document.getElementsByClassName("number")
//   var slideimage = slideimages[i];
//   if (slideimage.classList.contains("slick-active")) {
//     numbers[0].classList.add("number-color");
//   }
// }
// var numbers = document.getElementsByClassName("number");
// var slideimages = document.getElementsByClassName("slide-img");

// for (var i = 0; i < slideimages.length; i++) {
//   var slideimage = slideimages[i];
//   if (slideimage.classList.contains("slick-active")) {
//     for (var j = 0; j < numbers.length; j++) {
//       numbers[j].classList.add("number-color");
//     }
//   }
// }

// var slickActiveElements = document.querySelectorAll('.slick-active');
// for (var i = 0; i < slickActiveElements.length; i++) {
//   var children = slickActiveElements[i].childNodes;
//   for (var j = 0; j < children.length; j++) {
//     // Manipulate the child elements here
//     children[j].style.color = 'red';
//   }
// }
