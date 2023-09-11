// Funktion, um die Bildqualität basierend auf der Auswahl zu ändern
function changePictureQuality() {
  var selectedOption = document.getElementById("pictureQualitySelect").value;
  console.log("Ausgewählte Option:", selectedOption);
  var selectedOption = document.getElementById("pictureQualitySelect").value;

  // Hole alle Bilder auf der Seite
  var images = document.querySelectorAll("img");

  // Iteriere durch die Bilder und ändere die Bildquellen basierend auf der Auswahl
  for (var i = 0; i < images.length; i++) {
    var image = images[i];
    var currentSrc = image.getAttribute("src");

    // Abhängig von der Auswahl die Bildquelle ändern
    switch (selectedOption) {
      case "PictureQuality_small":
        image.src = currentSrc.replace("PNG/medium/", "PNG/small/").replace("PNG/big/", "PNG/small/");
        break;
      case "PictureQuality_medium":
        image.src = currentSrc.replace("PNG/small/", "PNG/medium/").replace("PNG/big/", "PNG/medium/");
        break;
      case "PictureQuality_big":
        image.src = currentSrc.replace("PNG/small/", "PNG/big/");
        image.src = currentSrc.replace("PNG/medium/", "PNG/big/");
        image.src = currentSrc.replace("PNG/small/", "PNG/big/").replace("PNG/medium/", "PNG/big/");
        break;
      case "PictureQuality_dont_Load":
        // Hier könntest du die Bilder ausblenden oder etwas anderes tun, um sie zu verbergen
        break;
      default:
        break;
    }
  }
}

// Event-Listener, um die Funktion beim Ändern der Auswahl aufzurufen
document.getElementById("pictureQualitySelect").addEventListener("change", changePictureQuality);


