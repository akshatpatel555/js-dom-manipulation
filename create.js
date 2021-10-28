/*

<section class="photo-card">
        <div class="img-container">
          <img class="person-photo-img" src="{{photoURL}}" />
        </div>
        <div class="caption">
          {{Caption}}
        </div>
      </section>


*/

function insertNewPhotoCard(PhotoUrl, caption){
    var photoCardSection = document.createElement('section')
    photoCardSection.classList.add('photo-card')
    photoCardSection.classList.add('second-photo-card')
    photoCardSection.classList.add('third-photo-card')

    photoCardSection.classList.remove('second-photo-card')

    var imgContainerDiv = document.createElement('div')
    imgContainerDiv.classList.add('img-container')
    photoCardSection.appendChild(imgContainerDiv)

    var personPhotoImg = document.createElement('div')
    personPhotoImg.classList.add('img-container')
    

    console.log("== photCardSelection: ", photoCardSection)

    var photoCardContainer = document.getElementById('photo-card-container')
    photoCardContainer.appendChild(photoCardSection)
}

insertNewPhotoCard("https://placekitten.com/480/480/?image=6", "Luke as a kitty")