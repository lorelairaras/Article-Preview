document.addEventListener("DOMContentLoaded", function () {
  const shareButton = document.getElementById("share-button");
  const popup = document.querySelector(".popup");
  const popupText = document.getElementById("myPopup");

  shareButton.addEventListener("click", function (e) {
    e.stopPropagation();
    popupText.classList.toggle("show");
    popup.classList.toggle("active");
  });

  document.addEventListener("click", function (e) {
    if (!popup.contains(e.target) && !shareButton.contains(e.target)) {
      popupText.classList.remove("show");
      popup.classList.remove("active");
    }
  });
});
