function changeMainImage(imageElement, name, price, size) {
    var mainImage = document.getElementById('mainImage');
    mainImage.src = imageElement.src;

    var artName = document.getElementById('artName');
    artName.textContent = name;

    var artPrice = document.getElementById('artPrice');
    artPrice.textContent = price;

    var artSize = document.getElementById('artSize');
    artSize.textContent = size;
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function toggleResponsiveMenu() {
    var smallMenu = document.querySelector(".menuSmall");
    var dropdown = document.querySelector(".responsiveDropdown");

    if (smallMenu.style.display === "none") {
        smallMenu.style.display = "block";
        dropdown.style.display = "block";
    } else {
        smallMenu.style.display = "none";
        dropdown.style.display = "none";
    }
}




