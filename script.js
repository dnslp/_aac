// --------------- script.js ---------------

// GLOBAL OR MODULE-LEVEL STATE
let appState = {
    selectedCategory: "all",
    currentSize: 32,
  };
  
  // DOM References
  const container = document.getElementById("item-container");
  const categoryFilter = document.getElementById("category-filter");
  const sizeRange = document.getElementById("size-range");
  
  // 1. On page load, fetch settings from localStorage (if any)
  window.addEventListener("DOMContentLoaded", () => {
    loadAppStateFromStorage();  // Load existing settings
  
    populateCategoryOptions();  // Populate the category dropdown
    categoryFilter.value = appState.selectedCategory; // Set dropdown to saved category
    sizeRange.value = appState.currentSize;           // Set slider to saved size
  
    displayItems(getFilteredItems()); // Display items based on saved filter
    applySizeToAllSymbols(appState.currentSize);      // Apply saved size
  });
  
  // Helper to load localStorage into appState
  function loadAppStateFromStorage() {
    const savedState = JSON.parse(localStorage.getItem("myAppSettings"));
    if (savedState) {
      // Merge saved properties into our appState
      appState = { 
        ...appState, 
        ...savedState 
      };
    }
  }
  
  // Helper to save current appState to localStorage
  function saveAppStateToStorage() {
    localStorage.setItem("myAppSettings", JSON.stringify(appState));
  }
  
  // 2. Display items in the grid
  function displayItems(items) {
    container.innerHTML = "";
  
    items.forEach((item) => {
      const card = document.createElement("div");
      card.className = "item-card";
  
      const symbolElem = document.createElement("div");
      symbolElem.className = "item-symbol";
      symbolElem.textContent = item.symbol;
  
      const labelElem = document.createElement("div");
      labelElem.className = "item-label";
      labelElem.textContent = item.label;
  
      card.appendChild(symbolElem);
      card.appendChild(labelElem);
  
      // TTS on click
      card.addEventListener("click", () => {
        speakLabel(item.label);
      });
  
      container.appendChild(card);
    });
  }
  
  // 3. TTS (Text-to-Speech)
  function speakLabel(label) {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(label);
      utterance.lang = "en-US"; 
      window.speechSynthesis.speak(utterance);
    }
  }
  
  // 4. Populate category dropdown from data.js
  function populateCategoryOptions() {
    // Clear existing options, except "all"
    categoryFilter.innerHTML = "";
    const allOption = document.createElement("option");
    allOption.value = "all";
    allOption.textContent = "All Categories";
    categoryFilter.appendChild(allOption);
  
    // Unique categories
    const categories = [...new Set(dataItems.map((item) => item.category))];
    categories.forEach((cat) => {
      const option = document.createElement("option");
      option.value = cat;
      option.textContent = cat;
      categoryFilter.appendChild(option);
    });
  }
  
  // 5. Filter items based on selectedCategory in appState
  function getFilteredItems() {
    if (appState.selectedCategory === "all") {
      return dataItems;
    } else {
      return dataItems.filter(
        (item) => item.category === appState.selectedCategory
      );
    }
  }
  
  // 6. Category change event
  categoryFilter.addEventListener("change", () => {
    appState.selectedCategory = categoryFilter.value;
    saveAppStateToStorage(); 
  
    const filtered = getFilteredItems();
    displayItems(filtered);
  
    // Re-apply the current size
    applySizeToAllSymbols(appState.currentSize);
  });
  
  // 7. Size slider event
  sizeRange.addEventListener("input", (e) => {
    const newSize = parseInt(e.target.value, 10);
    appState.currentSize = newSize;
    saveAppStateToStorage();
  
    // Apply the new size to displayed items
    applySizeToAllSymbols(newSize);
  });
  
  // 8. Apply size to .item-symbol elements
  function applySizeToAllSymbols(size) {
    const symbolElems = document.querySelectorAll(".item-symbol");
    symbolElems.forEach((elem) => {
      elem.style.fontSize = size + "px";
    });
  }
  