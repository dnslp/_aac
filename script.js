/* ---------------------
   Global / App State
--------------------- */
let appState = {
  dockPosition: "left",      // or "right", "bottom"
  currentSize: 32,           // range: 16 to 150
  borderStyle: "solid",      // or "dashed", "dotted"
  borderColor: "#ff0000",    // any hex color
};

// DOM references
const dock = document.getElementById("dock");
const mainContent = document.getElementById("main-content");
const dockPositionSelect = document.getElementById("dock-position");
const sizeRange = document.getElementById("size-range");
const settingsBtn = document.getElementById("settings-btn");

// Settings Modal Elements
const settingsModal = document.getElementById("settings-modal");
const borderStyleSelect = document.getElementById("border-style-select");
const borderColorInput = document.getElementById("border-color-input");
const saveSettingsBtn = document.getElementById("save-settings");
const closeSettingsBtn = document.getElementById("close-settings");

/* ---------------------
   Initialization
--------------------- */
window.addEventListener("DOMContentLoaded", () => {
  loadAppStateFromStorage();

  // Apply initial state
  dockPositionSelect.value = appState.dockPosition;
  sizeRange.value = appState.currentSize;
  borderStyleSelect.value = appState.borderStyle;
  borderColorInput.value = appState.borderColor;

  applyDockPosition(appState.dockPosition);
  applySizeToCardsAndIcons(appState.currentSize);
  applyBorderSettings();

  // Build the sections and dock
  buildCategorySections();
  populateDock();

  // Listen for user changes
  initEventListeners();
});

function initEventListeners() {
  // Dock position changes
  dockPositionSelect.addEventListener("change", (e) => {
    appState.dockPosition = e.target.value;
    applyDockPosition(appState.dockPosition);
    saveAppStateToStorage();
  });

  // Size slider changes
  sizeRange.addEventListener("input", (e) => {
    const newSize = parseInt(e.target.value, 10);
    appState.currentSize = newSize;
    applySizeToCardsAndIcons(newSize);
    saveAppStateToStorage();
  });

  // Open Settings Modal
  settingsBtn.addEventListener("click", () => {
    settingsModal.classList.remove("hidden");
  });

  // Save Settings (border style/color)
  saveSettingsBtn.addEventListener("click", () => {
    appState.borderStyle = borderStyleSelect.value;
    appState.borderColor = borderColorInput.value;
    applyBorderSettings();
    saveAppStateToStorage();

    settingsModal.classList.add("hidden");
  });

  // Close Modal
  closeSettingsBtn.addEventListener("click", () => {
    settingsModal.classList.add("hidden");
  });
}

/* ---------------------
   Build Sections & Dock
--------------------- */
function buildCategorySections() {
  mainContent.innerHTML = "";
  const categories = getUniqueCategories();

  categories.forEach((cat) => {
    // Create a section for this category
    const section = document.createElement("section");
    section.className = "category-section";
    section.id = `section-${cat.replace(/\s+/g, "-").toLowerCase()}`;

    // Title
    const title = document.createElement("h2");
    title.className = "section-title";
    title.textContent = cat;
    section.appendChild(title);

    // Grid container for items
    const itemsGrid = document.createElement("div");
    itemsGrid.className = "items-grid";

    // Filter items for this category
    const catItems = dataItems.filter((i) => i.category === cat);
    catItems.forEach((item) => {
      const card = document.createElement("div");
      card.className = "item-card";

      // Symbol
      const symbolElem = document.createElement("div");
      symbolElem.className = "item-symbol";
      symbolElem.textContent = item.symbol;

      // Label
      const labelElem = document.createElement("div");
      labelElem.className = "item-label";
      labelElem.textContent = item.label;

      // TTS on click
      card.addEventListener("click", () => speakLabel(item.label));

      card.appendChild(symbolElem);
      card.appendChild(labelElem);
      itemsGrid.appendChild(card);
    });

    section.appendChild(itemsGrid);
    mainContent.appendChild(section);
  });
}

function populateDock() {
  dock.innerHTML = "";
  const categories = getUniqueCategories();

  categories.forEach((cat) => {
    const btn = document.createElement("button");
    // You can customize which icon or text to show:
    btn.textContent = cat[0]; // e.g., first letter of category
    // For a more advanced approach, use a map of category->emoji or small images.

    btn.addEventListener("click", () => {
      const sectionId = `section-${cat.replace(/\s+/g, "-").toLowerCase()}`;
      const sectionEl = document.getElementById(sectionId);
      if (sectionEl) {
        sectionEl.scrollIntoView({ behavior: "smooth" });
      }
    });

    dock.appendChild(btn);
  });
}

function getUniqueCategories() {
  const catSet = new Set(dataItems.map((item) => item.category));
  return Array.from(catSet);
}

/* ---------------------
   Dock Position
--------------------- */
function applyDockPosition(position) {
  dock.classList.remove("dock-left", "dock-right", "dock-bottom");
  if (position === "left") {
    dock.classList.add("dock-left");
  } else if (position === "right") {
    dock.classList.add("dock-right");
  } else {
    dock.classList.add("dock-bottom");
  }
}

/* ---------------------
   Size (Cards & Icons)
--------------------- */
function applySizeToCardsAndIcons(sizeValue) {
  // We'll set some CSS variables that control card & icon dimensions
  // For example, let's say the card size is ~ (sizeValue * 3.5) - tweak to taste
  const cardSize = sizeValue * 3.5;

  // Update root CSS variables
  document.documentElement.style.setProperty("--icon-size", sizeValue + "px");
  document.documentElement.style.setProperty("--card-size", cardSize + "px");
}

/* ---------------------
   Border Settings
--------------------- */
function applyBorderSettings() {
  document.documentElement.style.setProperty("--border-style", appState.borderStyle);
  document.documentElement.style.setProperty("--border-color", appState.borderColor);
}

/* ---------------------
   Text-to-Speech
--------------------- */
function speakLabel(label) {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(label);
    utterance.lang = "en-US";
    window.speechSynthesis.speak(utterance);
  } else {
    console.warn("This browser does not support text-to-speech.");
  }
}

/* ---------------------
   Local Storage
--------------------- */
function loadAppStateFromStorage() {
  const saved = JSON.parse(localStorage.getItem("dockAppStateV2"));
  if (saved) {
    appState = { ...appState, ...saved };
  }
}

function saveAppStateToStorage() {
  localStorage.setItem("dockAppStateV2", JSON.stringify(appState));
}
