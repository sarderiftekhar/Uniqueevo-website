(function () {
  var items = document.querySelectorAll(".project-item");
  if (items.length < 2) return;

  var interval = 4000;

  function shuffleArray(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  }

  function swapItems() {
    // Pick 2 random distinct indices
    var indices = [];
    for (var i = 0; i < items.length; i++) indices.push(i);
    shuffleArray(indices);
    var a = indices[0];
    var b = indices[1];

    var itemA = items[a];
    var itemB = items[b];

    // Phase 1: flash out
    itemA.classList.add("shuffle-out");
    itemB.classList.add("shuffle-out");

    setTimeout(function () {
      // Swap background images
      var bgA = itemA.style.backgroundImage;
      var bgB = itemB.style.backgroundImage;
      itemA.style.backgroundImage = bgB;
      itemB.style.backgroundImage = bgA;

      // Swap overlay content
      var overlayA = itemA.querySelector(".project-overlay");
      var overlayB = itemB.querySelector(".project-overlay");
      if (overlayA && overlayB) {
        var htmlA = overlayA.innerHTML;
        overlayA.innerHTML = overlayB.innerHTML;
        overlayB.innerHTML = htmlA;
      }

      // Phase 2: flash in
      itemA.classList.remove("shuffle-out");
      itemB.classList.remove("shuffle-out");
      itemA.classList.add("shuffle-in");
      itemB.classList.add("shuffle-in");

      setTimeout(function () {
        itemA.classList.remove("shuffle-in");
        itemB.classList.remove("shuffle-in");
      }, 400);
    }, 400);
  }

  setInterval(swapItems, interval);
})();
