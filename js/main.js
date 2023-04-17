$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 20,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
      loop: true,
    },
    600: {
      items: 2,
      nav: true,
      loop: true,
    },
    768: {
      items: 3,
      nav: true,
      loop: true,
    },
    1000: {
      items: 4,
      nav: true,
      loop: true,
    },
  },
})

const loading = document.getElementById("loading");
setTimeout(() => {
  loading.classList.add("loading-none");
}, 3000);

$(document).ready(function () {
  var tabWrapper = $("#tab-block"),
    tabMnu = tabWrapper.find(".tab-mnu  li"),
    tabContent = tabWrapper.find(".tab-cont > .tab-pane");

  tabContent.not(":first-child").hide();

  tabMnu.each(function (i) {
    $(this).attr("data-tab", "tab" + i);
  });
  tabContent.each(function (i) {
    $(this).attr("data-tab", "tab" + i);
  });

  tabMnu.click(function () {
    var tabData = $(this).data("tab");
    tabWrapper.find(tabContent).hide();
    tabWrapper
      .find(tabContent)
      .filter("[data-tab=" + tabData + "]")
      .show();
  });

  $(".tab-mnu > li").click(function () {
    var before = $(".tab-mnu li.active");
    before.removeClass("active");
    $(this).addClass("active");
  });
});

window.addEventListener("scroll", function () {
  shrink();
});

let navbar = document.getElementById("navbar");

function shrink() {
  if (scrollY > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
    navbar.classList.remove("navbar-shrink");
  }
}

window.addEventListener("scroll", function () {
  toggleBacktop();
});

let backtop = document.getElementById("backtop");

function toggleBacktop() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 200
  ) {
    backtop.style.bottom = "50px";
  } else {
    backtop.style.bottom = "-80px";
  }
}

