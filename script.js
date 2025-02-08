/* ---------------------
   Global / App State
--------------------- */
let appState = {
  dockPosition: "left",
  currentSize: 32,
  borderStyle: "solid",
  borderColor: "#ff0000",
  backgroundColor: "white",
  voiceName: null,
};

const categoryIcons = {
  "Smileys & Emotion": "😃",
  "Animals & Nature": "🐶",
  "Alphabet": "🔤",
  "Colors": "🎨",
  "Shapes": "⬜",
  "Numbers": "🔢",
  "Food & Drink": "🍎",
  "Travel & Places": "🚙",
  "Activities": "⚽️",
  "Objects": "💡"
};

// DOM References
const dock = document.getElementById("dock");
const mainContent = document.getElementById("main-content");
const dockPositionSelect = document.getElementById("dock-position");
const sizeRange = document.getElementById("size-range");
const settingsBtn = document.getElementById("settings-btn");

// Modal + Settings
const settingsModal = document.getElementById("settings-modal");
const borderStyleSelect = document.getElementById("border-style-select");
const borderColorInput = document.getElementById("border-color-input");
const backgroundSelect = document.getElementById("background-select");
const voiceSelect = document.getElementById("voice-select");
const saveSettingsBtn = document.getElementById("save-settings");
const closeSettingsBtn = document.getElementById("close-settings");

let availableVoices = [];

/* ---------------------
   Initialization
--------------------- */
window.addEventListener("DOMContentLoaded", () => {
  loadAppStateFromStorage();

  // Initialize UI from appState
  dockPositionSelect.value = appState.dockPosition;
  sizeRange.value = appState.currentSize;
  borderStyleSelect.value = appState.borderStyle;
  borderColorInput.value = appState.borderColor;
  backgroundSelect.value = appState.backgroundColor;

  applyDockPosition(appState.dockPosition);
  applySizeToCardsAndIcons(appState.currentSize);
  applyBorderSettings();
  applyBackgroundColor(appState.backgroundColor);

  buildCategorySections();
  populateDock();

  // Load voices for TTS
  loadVoices();
  speechSynthesis.onvoiceschanged = loadVoices;

  initEventListeners();
});

function initEventListeners() {
  dockPositionSelect.addEventListener("change", (e) => {
    appState.dockPosition = e.target.value;
    applyDockPosition(appState.dockPosition);
    saveAppStateToStorage();
  });

  sizeRange.addEventListener("input", (e) => {
    const newSize = parseInt(e.target.value, 10);
    appState.currentSize = newSize;
    applySizeToCardsAndIcons(newSize);
    saveAppStateToStorage();
  
    // Show numeric value in #size-display
    document.getElementById("size-display").textContent = newSize;
  
    // Re-auto-scale items if they're text
    reScaleAllText();
  });

  settingsBtn.addEventListener("click", () => {
    settingsModal.classList.remove("hidden");
  });

  saveSettingsBtn.addEventListener("click", () => {
    appState.borderStyle = borderStyleSelect.value;
    appState.borderColor = borderColorInput.value;
    appState.backgroundColor = backgroundSelect.value;
    appState.voiceName = voiceSelect.value;

    applyBorderSettings();
    applyBackgroundColor(appState.backgroundColor);

    saveAppStateToStorage();
    settingsModal.classList.add("hidden");
  });

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
    const section = document.createElement("section");
    section.className = "category-section";
    section.id = `section-${cat.replace(/\s+/g, "-").toLowerCase()}`;

    const title = document.createElement("h2");
    title.className = "section-title";
    title.textContent = cat;
    section.appendChild(title);

    const itemsGrid = document.createElement("div");
    itemsGrid.className = "items-grid";

    const catItems = dataItems.filter((i) => i.category === cat);
    catItems.forEach((item) => {
      const card = document.createElement("div");
      card.className = "item-card";

      const symbolElem = document.createElement("div");
      symbolElem.className = "item-symbol";

      if (item.type === "svg") {
        symbolElem.innerHTML = item.symbol; // raw SVG
      } else {
        symbolElem.textContent = item.symbol; // text (letters, emoji, numbers)
      }

      const labelElem = document.createElement("div");
      labelElem.className = "item-label";
      labelElem.textContent = item.label;

      card.appendChild(symbolElem);
      card.appendChild(labelElem);

      // TTS on click
      card.addEventListener("click", () => speakLabel(item.label));

      itemsGrid.appendChild(card);

      // If it's text, auto-scale it to fit
      if (item.type !== "svg") {
        setTimeout(() => {
          autoScaleText(symbolElem, card);
        }, 0);
      }
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
    const icon = categoryIcons[cat] || cat[0];
    btn.textContent = icon;
    btn.title = cat;

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

/* ---------------------
   Dock Position
--------------------- */
function applyDockPosition(position) {
  dock.classList.remove("dock-left", "dock-right", "dock-bottom", "dock-top");
  if (position === "left") {
    dock.classList.add("dock-left");
  } else if (position === "right") {
    dock.classList.add("dock-right");
  } else if (position === "bottom") {
    dock.classList.add("dock-bottom");
  } else {
    dock.classList.add("dock-top");
  }
}

/* ---------------------
   Size & Auto-Scaling
--------------------- */
function applySizeToCardsAndIcons(sizeValue) {
  const cardSize = sizeValue * 3.5;
  document.documentElement.style.setProperty("--icon-size", sizeValue + "px");
  document.documentElement.style.setProperty("--card-size", cardSize + "px");
}

/**
 * Re-run autoScaleText on all .item-symbol elements that are text-based.
 * Called after user adjusts size in real-time.
 */
function reScaleAllText() {
  const symbols = document.querySelectorAll(".item-symbol");
  symbols.forEach((sym) => {
    // If sym has an <svg>, skip
    if (sym.querySelector("svg")) return;

    // Reset font-size to our base (calc(var(--card-size)*0.5)) so we have a starting point
    sym.style.fontSize = "";
    // Then do an auto-scale pass
    setTimeout(() => {
      autoScaleText(sym, sym.parentElement);
    }, 0);
  });
}

/**
 * Auto-scale text so it fits within card bounds
 */
function autoScaleText(textElem, containerElem) {
  let fontSize = parseInt(window.getComputedStyle(textElem).fontSize, 10);

  // Keep shrinking until it fits or we hit a minimum
  while ((textElem.scrollWidth > containerElem.clientWidth ||
          textElem.scrollHeight > containerElem.clientHeight)
         && fontSize > 10) {
    fontSize -= 1;
    textElem.style.fontSize = fontSize + "px";
  }
}

/* ---------------------
   Border & Background
--------------------- */
function applyBorderSettings() {
  document.documentElement.style.setProperty("--border-style", appState.borderStyle);
  document.documentElement.style.setProperty("--border-color", appState.borderColor);
}

function applyBackgroundColor(bgValue) {
  let colorStr = "#ffffff";
  switch (bgValue) {
    case "white":
      colorStr = "#ffffff";
      break;
    case "lightgray":
      colorStr = "lightgray";
      break;
    case "lightblue":
      colorStr = "lightblue";
      break;
    case "lightpink":
      colorStr = "lightpink";
      break;
    case "lightyellow":
      colorStr = "lightyellow";
      break;
    case "rainbow":
      colorStr = "linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)";
      break;
    default:
      colorStr = bgValue;
      break;
  }
  document.documentElement.style.setProperty("--app-background", colorStr);
}

/* ---------------------
   TTS
--------------------- */
function speakLabel(label) {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(label);

    if (appState.voiceName && availableVoices.length > 0) {
      const selectedVoice = availableVoices.find((v) => v.name === appState.voiceName);
      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }
    }
    utterance.lang = "en-US";
    window.speechSynthesis.speak(utterance);
  } else {
    console.warn("This browser does not support TTS.");
  }
}

/* ---------------------
   Voices & Storage
--------------------- */
function loadVoices() {
  const allVoices = window.speechSynthesis.getVoices();
  availableVoices = allVoices.filter((v) => v.lang.startsWith("en"));

  voiceSelect.innerHTML = "";
  availableVoices.forEach((voice) => {
    const option = document.createElement("option");
    option.value = voice.name;
    option.textContent = `${voice.name} (${voice.lang})`;
    voiceSelect.appendChild(option);
  });

  // Set or default
  if (appState.voiceName) {
    voiceSelect.value = appState.voiceName;
  } else if (availableVoices.length > 0) {
    appState.voiceName = availableVoices[0].name;
    voiceSelect.value = availableVoices[0].name;
  }
}

function loadAppStateFromStorage() {
  const saved = JSON.parse(localStorage.getItem("dockAppStateV3"));
  if (saved) {
    appState = { ...appState, ...saved };
  }
}

function saveAppStateToStorage() {
  localStorage.setItem("dockAppStateV3", JSON.stringify(appState));
}

function getUniqueCategories() {
  const catSet = new Set(dataItems.map((item) => item.category));
  return Array.from(catSet);
}
