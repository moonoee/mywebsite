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
        image.src = currentSrc.replace("JPEG/medium/", "JPEG/small/").replace("JPEG/large/", "JPEG/small/").replace("JPEG/original/", "JPEG/small/");
        break;
      case "PictureQuality_medium":
        image.src = currentSrc.replace("JPEG/small/", "JPEG/medium/").replace("JPEG/large/", "JPEG/medium/").replace("JPEG/original/", "JPEG/medium/");
        break;
      case "PictureQuality_big":
        image.src = currentSrc.replace("JPEG/small/", "JPEG/large/").replace("JPEG/medium/", "JPEG/large/").replace("JPEG/original/", "JPEG/large/");
        break;
      case "PictureQuality_original":
        image.src = currentSrc.replace("JPEG/small/", "JPEG/original/").replace("JPEG/medium/", "JPEG/original/").replace("JPEG/large/", "JPEG/original/");
        break;
      case "PictureQuality_dont_Load":
        break;
      default:
        break;
    }
  }
}

// Event-Listener, um die Funktion beim Ändern der Auswahl aufzurufen
document.getElementById("pictureQualitySelect").addEventListener("change", changePictureQuality);