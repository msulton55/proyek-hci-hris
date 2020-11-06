(function ($) {
  const body = document.getElementById("page-top")
  let currentScreenWidth = window.screen.width
  console.log(currentScreenWidth)
  if (currentScreenWidth < 575.98) 
    body.style.removeProperty("overflow")
})(jQuery)
