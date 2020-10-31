function Main() {

  const container1 = document.getElementById("card-collection")
  const container2 = document.getElementById("page-top")
  let totalCards = container1.childElementCount
  let currentScreenWidth = window.screen.width
  let mobileScreenWidth = 0

  if (currentScreenWidth < 575.98) {
    container1.style.removeProperty("width")
    container1.style.removeProperty("flex-wrap")
    container2.style.removeProperty("overflow")
  } else {
    container1.style.width = `calc((100vw * ${totalCards}) - (120% * ${totalCards}))`
  }

  window.addEventListener("resize", (event) => {
    mobileScreenWidth = window.screen.width
    console.log(mobileScreenWidth)
    if (mobileScreenWidth < 575.98) {
      container1.style.removeProperty("width")
      container1.style.removeProperty("flex-wrap")
      container2.style.removeProperty("overflow")
    } else {
      container1.style.width = `calc((100vw * ${totalCards}) - (120% * ${totalCards}))`
      container1.style.flexWrap =  `nowrap`
      container2.style.overflow = "hidden"
    }
  })

}

Main()