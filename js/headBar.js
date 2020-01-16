(function (iteratee) {
  iteratee()
}(function () {
  const headIcon = document.getElementsByClassName("AmiKara")[0]
  const headBar = document.getElementsByClassName("headBar")[0]
  const ulN = document.getElementsByClassName("bar")[0]
  const ulList = ulN.getElementsByTagName("ul")
  const li = ulList[0].getElementsByTagName("li")
  for (let index in li) {
    if (li[index].hasAttribute("data-info") && li[index].hasAttribute("data-src")) {
      let liArgs = li[index].getAttribute("data-info").split(',')
      let liSrcs = li[index].getAttribute("data-src").split(',')
      let liImg = li[index].getAttribute("data-img").split(',')
      let navigation = ``
      for (let i in liArgs) {
        navigation += `<div class="nav nav${index}"><img class="headBar_icon"
            src="${liImg[i]}" alt=""><a href="${liSrcs[i]}">${liArgs[i]}</a></div>`
      }
      let childNode = document.createElement('div')
      childNode.setAttribute("class", "navg")
      childNode.innerHTML = navigation
      li[index].appendChild(childNode)
      const nav = document.getElementsByClassName(`nav${index}`)
      li[index].addEventListener("mouseenter", () => {
        for (let order in nav) {
          nav[order].style.display = "block"
        }

      })
      li[index].addEventListener("mouseleave", () => {
        for (let order in nav) {
          nav[order].style.display = "none"
        }

      })
    }
  }
}))