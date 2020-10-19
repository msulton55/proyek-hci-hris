function CardCollection() {
  const container = document.getElementById("card-collection")
  let totalCards = container.childElementCount
  let currentScreenWidth = window.screen.width
  let mobileScreenWidth = 0

  if (currentScreenWidth < 575.98) {
    container.style.removeProperty("width")
      container.style.removeProperty("flex-wrap")
  } else {
    container.style.width = `calc((100vw * ${totalCards}) - (120% * ${totalCards}))`
  }

  window.addEventListener("resize", (event) => {
    mobileScreenWidth = window.screen.width
    console.log(mobileScreenWidth)
    if (mobileScreenWidth < 575.98) {
      container.style.removeProperty("width")
      container.style.removeProperty("flex-wrap")
    } else {
      container.style.width = `calc((100vw * ${totalCards}) - (120% * ${totalCards}))`
      container.style.flexWrap =  `nowrap`
    }
  })
}

function Main() {

  CardCollection()

}

Main()