console.log("== document: ", document)
console.log("== document.body: ", document.body)

var body = document.body
console.log("== body.childNodes: ", body.childNodes)
console.log("== body.childNodes[1]: ", body.childNodes[1])
console.log("== body.firstChild: ", body.firstChild)
console.log("== body.firstElementChild: ", body.firstElementChild)

var header = body.firstElementChild
console.log("== header.parentNode: ", header.parentNode)

var photoCardContainer = document.getElementById('photo-card-container')
console.log("== photoCardContainer: ", photoCardContainer)

var photoCards = document.getElementsByClassName('photo-card')
console.log("== photoCards: ", photoCards)

for (var i = 0; i < photoCards.length; i++){
    console.log("== photoCards[" + i + "] :", photoCards[i])

    //if(i === 1){
    //    photoCards[i].remove()
    //}

}

var links = document.getElementsByTagName('a')
console.log("== links: ", links)

var rightNavItem = document.querySelector('.navitem.right')
console.log("== rigthNavItem: ", rightNavItem)

var rightNavItems = document.querySelectorAll('.navitem.right')
console.log("== rightNavItems: ", rightNavItems)

var firstPhotoCard = photoCards[0]
console.log("== firstPhotoCard: ", firstPhotoCard)

console.log("== firstPhotoCard.textContnet: ", firstPhotoCard.textContent)

console.log("== firstPhotoCard.innerHtml: ", firstPhotoCard.innerHTML)

var firstImage = document.querySelector('img')
console.log("== firstImage.src: ", firstImage.src)

//firstPhotoCard.innerHTML = "<img src='http://placekitten.com/480/480?image=6 />"

var userSuppliedValue = "HEllo, cs290!"
var malaciousUserSuppliedValue = "<img src=x onerror='alert(\"You were hacked\")'/>"
//firstPhotoCard.innerHTML = "<div class='caption'>" + malaciousUserSuppliedValue + "</div>"
firstPhotoCard.textContent = malaciousUserSuppliedValue