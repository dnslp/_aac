// Grabbing DOM elements
const container = document.getElementById("item-container");
const categoryFilter = document.getElementById("category-filter");
const sizeRange = document.getElementById("size-range");

// 1. Display items in the grid
function displayItems(items) {
  // Clear existing
  container.innerHTML = "";

  items.forEach((item) => {
    // Create card div
    const card = document.createElement("div");
    card.className = "item-card";

    // Symbol (could be emoji, letter, etc.)
    const symbolElem = document.createElement("div");
    symbolElem.className = "item-symbol";
    // If "symbol" is a character, just set textContent
    // If it's an image or SVG path, you'd handle that differently
    symbolElem.textContent = item.symbol;

    // Label
    const labelElem = document.createElement("div");
    labelElem.className = "item-label";
    labelElem.textContent = item.label;

    // Append symbol + label to the card
    card.appendChild(symbolElem);
    card.appendChild(labelElem);

    // Click event -> TTS
    card.addEventListener("click", () => {
      speakLabel(item.label);
    });

    // Append to container
    container.appendChild(card);
  });
}

// 2. TTS (Text-to-Speech) function
function speakLabel(label) {
  if ("speechSynthesis" in window) {
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(label);
    utterance.lang = "en-US"; // or any language you want
    window.speechSynthesis.speak(utterance);
  } else {
    console.warn("This browser does not support text-to-speech.");
  }
}

// 3. Category Filter
function populateCategoryOptions() {
  // Gather unique categories from data
  const categories = [...new Set(dataItems.map((item) => item.category))];
  // Insert options into <select>
  categories.forEach((cat) => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    categoryFilter.appendChild(option);
  });
}

categoryFilter.addEventListener("change", () => {
  const selected = categoryFilter.value;
  if (selected === "all") {
    displayItems(dataItems);
  } else {
    const filtered = dataItems.filter((item) => item.category === selected);
    displayItems(filtered);
  }
});

// 4. Icon Size Slider
sizeRange.addEventListener("input", (e) => {
  const newSize = e.target.value + "px";
  // Adjust all .item-symbol elements
  document.querySelectorAll(".item-symbol").forEach((elem) => {
    elem.style.fontSize = newSize;
  });
});

// 5. On page load, populate categories and display items
window.addEventListener("DOMContentLoaded", () => {
  populateCategoryOptions(); 
  displayItems(dataItems);
});
