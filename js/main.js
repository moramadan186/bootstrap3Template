var myDrop = document.getElementById("IId"),
  link = document.getElementsByClassName("thisLink")[0];
function callthis() {
  myDrop.classList.add("add");
  link.style.backgroundColor = "teal";
}
function Callthis() {
  myDrop.classList.remove("add");
  link.style.backgroundColor = "inherit";
}

$(document).ready(function () {
  $(".testimonials .carousel").carousel({
    interval: 2000,
  });
  /*this code to create number count */
  function callCounterLarge() {
    const counters = document.querySelectorAll(".counter");
    if (pageYOffset > 2000) {
      counters.forEach(counter => {
        counter.innerText = '0'
        const target = +counter.getAttribute('data-target');
        const interval = target / 100;

        const updateCounter = () => {
          const value = +counter.innerText;
          if (value < target) {
            counter.innerText = Math.ceil(value + interval);

            setTimeout(() => {
              updateCounter()
            }, 40);
          }
        }

        updateCounter();

      });
      $(window).off('scroll');
    }
  }
  function callCounterSmall() {
    const counters = document.querySelectorAll(".counter");
    if (pageYOffset > 4651.2001953125) {
      counters.forEach(counter => {
        counter.innerText = '0'
        const target = +counter.getAttribute('data-target');
        const interval = target / 100;

        const updateCounter = () => {
          const value = +counter.innerText;
          if (value < target) {
            counter.innerText = Math.ceil(value + interval);

            setTimeout(() => {
              updateCounter()
            }, 40);
          }
        }

        updateCounter();

      });
      $(window).off('scroll');
    }
  }
  if ($(window).width() > 768) {
    if (pageYOffset > 2000) { callCounterLarge(); }
    else { $(window).on('scroll', callCounterLarge); }
  }
  if ($(window).width() < 768) {
    if (pageYOffset > 4651.2001953125) { callCounterSmall(); }
    else { $(window).on('scroll', callCounterSmall); }
  }
  // $(".tools i").click(()=>{
  //   $(".tools .toolList").fadeToggle(1000);
  // })

  $(".tools i").click(() => {
    $(".tools .toolList").animate({
      width: "toggle"
    }, 500)
  })
  // $("body *").not(".fa-grip-lines-vertical").click(()=>{
  //   $(".tools .toolList").animate({
  //     width:"hide"
  //   },500)
  // })
  $(".colorList li").click(function () {
    var color = $(this).css("backgroundColor");
    $("link[href*='theme']").attr("href", $(this).attr("path"));
    setTimeout(() => {
      $(".tools .toolList").animate({
        width: "hide"
      }, 500)
    }, 3000)

  });
  $(window).on('load', function () {
    $(".loading-s").fadeOut(5000, () => {
      console.log(this)
      $(".loading-s").remove();
      $("body").css("overflow", "auto");
    })
  });

});

var upButton = document.getElementById("goUp");
if (pageYOffset < 700) { upButton.style.opacity = "0"; }
else { upButton.style.opacity = "1"; }
window.onscroll = function () {
  if (pageYOffset < 700) {
    upButton.style.opacity = "0";
  }
  else upButton.style.opacity = "1";
}
$(document).ready(function () {
  $("#goUp").click(() => {
    $("html,body").animate({ scrollTop: 0 }, 600)
  })
})
