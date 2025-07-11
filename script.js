/* ---------------------
   Global / App State
--------------------- */
let appState = {
  dockPosition: "bottom",
  currentSize: 32,
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  borderStyle: "solid",
  borderColor: "#ff0000",
  backgroundColor: "white",
  voiceName: null,
  visibleCategories: null,

  // <<< NEW >>>
  showHeaderSlider: false, // whether the slider appears in the header
};

// Temporary state while Settings modal is open:
let tempSettings = { ...appState };

// Dirty flag:
let dirty = false;

// Map of category → emoji icon for the dock
const categoryIcons = {
  "Smileys & Emotion": "😃",
  "Animals & Nature": "🐶",
  Alphabet: "🔤",
  Colors: "🎨",
  Shapes: "⬜",
  Numbers: "🔢",
  "Food & Drink": "🍎",
  "Travel & Places": "🚙",
  Activities: "⚽️",
  Objects: "💡",
  Flags: "🇺🇸",
  "People & Body": "✋",
  Symbols: "✅",
  Toys: "🧩",
};

// DOM References
const dock = document.getElementById("dock");
const mainContent = document.getElementById("main-content");
const dockPositionSelect = document.getElementById("dock-position");
const fontSelect = document.getElementById("font-select");
const settingsBtn = document.getElementById("settings-btn");

const settingsModal = document.getElementById("settings-modal");
const borderStyleSelect = document.getElementById("border-style-select");
const borderColorInput = document.getElementById("border-color-input");
const backgroundSelect = document.getElementById("background-select");
const voiceSelect = document.getElementById("voice-select");
const saveSettingsBtn = document.getElementById("save-settings");
const closeSettingsBtn = document.getElementById("close-settings");

const confirmUnsavedModal = document.getElementById("confirm-unsaved-modal");
const confirmSaveBtn = document.getElementById("confirm-save");
const confirmDiscardBtn = document.getElementById("confirm-discard");

const toggleCategoriesBtn = document.getElementById("toggle-categories");
const categoryVisibilityDiv = document.getElementById(
  "category-visibility-section"
);

// <<< NEW >>> DOM references for the two sliders and the header-slider toggle
const modalSizeRange = document.getElementById("modal-size-range");
const headerSliderToggle = document.getElementById("header-slider-toggle");
const headerSliderContainer = document.getElementById(
  "header-slider-container"
);

// We’ll create “headerSizeRange” dynamically when needed:
let headerSizeRange = null;

let availableVoices = [];

/* ---------------------
   Utility: Slugify (for generating safe IDs)
--------------------- */
/**
 * Given a category name (e.g. "Food & Drink"), returns a slug
 * containing only lowercase letters, numbers, and hyphens.
 * E.g. slugify("Food & Drink") → "food-drink"
 */
function slugify(str) {
  return str
    .toLowerCase()                // lowercase
    .replace(/[^a-z0-9]+/g, "-")  // replace any non-alphanumeric chunk with “-”
    .replace(/^-+|-+$/g, "");     // remove leading/trailing hyphens
}

/* ---------------------
   Initialization
--------------------- */
window.addEventListener("DOMContentLoaded", () => {
  loadAppStateFromStorage();

  // If visibleCategories is null, default to all categories.
  if (!appState.visibleCategories) {
    appState.visibleCategories = getUniqueCategories();
    saveAppStateToStorage();
  }

  // <<< NEW >>> Ensure tempSettings also has showHeaderSlider
  tempSettings = { ...appState };

  // Initialize controls to appState
  dockPositionSelect.value = appState.dockPosition;
  modalSizeRange.value = appState.currentSize; // modal slider
  fontSelect.value = appState.fontFamily;
  borderStyleSelect.value = appState.borderStyle;
  borderColorInput.value = appState.borderColor;
  backgroundSelect.value = appState.backgroundColor;
  voiceSelect.value = appState.voiceName || "";
  headerSliderToggle.checked = appState.showHeaderSlider; // checkbox state

  // <<< NEW >>> Conditionally show/hide header slider
  if (appState.showHeaderSlider) {
    showHeaderSlider(); // create header slider copy
  } else {
    headerSliderContainer.classList.add("hidden");
  }

  // Apply everything based on appState
  applyFontFamily(appState.fontFamily);
  applyDockPosition(appState.dockPosition);
  applySizeToCardsAndIcons(appState.currentSize);
  applyBorderSettings(appState.borderStyle, appState.borderColor);
  applyBackgroundColor(appState.backgroundColor);

  // Voice loading
  window.speechSynthesis.addEventListener("voiceschanged", loadVoices);
  loadVoices();
  applyVoiceSelection(appState.voiceName);

  // Build the UI
  buildCategorySections(appState.visibleCategories);
  populateDock(appState.visibleCategories);
  populateCategoryCheckboxes(appState.visibleCategories);

  initEventListeners();
});

/* ---------------------
   Event Listeners
--------------------- */
function initEventListeners() {
  // 1) Dock Position (live preview)
  dockPositionSelect.addEventListener("change", (e) => {
    const newPos = e.target.value;
    tempSettings.dockPosition = newPos;
    applyDockPosition(newPos);
    markDirty();
  });

  // 2) Modal Size Slider (live preview)
  modalSizeRange.addEventListener("input", (e) => {
    const newSize = parseInt(e.target.value, 10);
    tempSettings.currentSize = newSize;
    applySizeToCardsAndIcons(newSize);
    markDirty();

    // <<< NEW >>> If header slider exists, sync it
    if (headerSizeRange) {
      headerSizeRange.value = newSize;
    }
  });

  // 3) (Header slider listener attached in showHeaderSlider)

  // 4) Font Family Selector (live preview)
  fontSelect.addEventListener("change", (e) => {
    const newFont = e.target.value;
    tempSettings.fontFamily = newFont;
    applyFontFamily(newFont);
    markDirty();
  });

  // 5) Border Style & Color (live preview)
  borderStyleSelect.addEventListener("change", (e) => {
    const newStyle = e.target.value;
    tempSettings.borderStyle = newStyle;
    applyBorderSettings(tempSettings.borderStyle, tempSettings.borderColor);
    markDirty();
  });
  borderColorInput.addEventListener("input", (e) => {
    const newColor = e.target.value;
    tempSettings.borderColor = newColor;
    applyBorderSettings(tempSettings.borderStyle, tempSettings.borderColor);
    markDirty();
  });

  // 6) Background Color (live preview)
  backgroundSelect.addEventListener("change", (e) => {
    const newBg = e.target.value;
    tempSettings.backgroundColor = newBg;
    applyBackgroundColor(newBg);
    markDirty();
  });

  // 7) “Show slider in header” checkbox (live preview)
  headerSliderToggle.addEventListener("change", (e) => {
    const showIt = e.target.checked;
    tempSettings.showHeaderSlider = showIt;
    if (showIt) {
      showHeaderSlider();
    } else {
      hideHeaderSlider();
    }
    markDirty();
  });

  // 8) Voice Selector (live preview)
  voiceSelect.addEventListener("change", (e) => {
    const newVoice = e.target.value;
    tempSettings.voiceName = newVoice;
    applyVoiceSelection(newVoice);
    markDirty();
  });

  // 9) Open Settings Modal
  settingsBtn.addEventListener("click", () => {
    dirty = false;

    // Re-populate all controls from appState
    dockPositionSelect.value = appState.dockPosition;
    modalSizeRange.value = appState.currentSize;
    fontSelect.value = appState.fontFamily;
    borderStyleSelect.value = appState.borderStyle;
    borderColorInput.value = appState.borderColor;
    backgroundSelect.value = appState.backgroundColor;
    voiceSelect.value = appState.voiceName || "";
    headerSliderToggle.checked = appState.showHeaderSlider;
    populateCategoryCheckboxes(appState.visibleCategories);

    settingsModal.classList.remove("hidden");
  });

  // 10) Close Settings Modal (possibly show confirmation)
  closeSettingsBtn.addEventListener("click", () => {
    if (dirty) {
      confirmUnsavedModal.classList.remove("hidden");
    } else {
      settingsModal.classList.add("hidden");
    }
  });

  // 11) Save Settings inside Settings Modal
  saveSettingsBtn.addEventListener("click", () => {
    commitTempSettings();
    settingsModal.classList.add("hidden");
  });

  // 12) Confirmation Modal Buttons
  confirmSaveBtn.addEventListener("click", () => {
    commitTempSettings();
    confirmUnsavedModal.classList.add("hidden");
    settingsModal.classList.add("hidden");
  });
  confirmDiscardBtn.addEventListener("click", () => {
    revertToAppState();
    confirmUnsavedModal.classList.add("hidden");
    settingsModal.classList.add("hidden");
  });

  // 13) Collapsible Category Visibility
  toggleCategoriesBtn.addEventListener("click", () => {
    const expanded = toggleCategoriesBtn.getAttribute("aria-expanded") === "true";
    if (expanded) {
      toggleCategoriesBtn.setAttribute("aria-expanded", "false");
      toggleCategoriesBtn.textContent = "▶ Categories Visibility";
      categoryVisibilityDiv.classList.add("hidden");
    } else {
      toggleCategoriesBtn.setAttribute("aria-expanded", "true");
      toggleCategoriesBtn.textContent = "▼ Categories Visibility";
      categoryVisibilityDiv.classList.remove("hidden");
    }
  });

  // 14) Category Checkbox Changes (live hide/show)
  categoryVisibilityDiv.addEventListener("change", (e) => {
    if (e.target.matches("input[type=checkbox][data-category]")) {
      const categoryName = e.target.getAttribute("data-category");
      const isChecked = e.target.checked;

      if (isChecked) {
        if (!tempSettings.visibleCategories.includes(categoryName)) {
          tempSettings.visibleCategories.push(categoryName);
        }
      } else {
        tempSettings.visibleCategories = tempSettings.visibleCategories.filter(
          (cat) => cat !== categoryName
        );
      }

      buildCategorySections(tempSettings.visibleCategories);
      populateDock(tempSettings.visibleCategories);
      markDirty();
    }
  });
}

/* ---------------------
   Show/hide & sync header slider
--------------------- */
function showHeaderSlider() {
  // If it already exists, just un-hide it:
  if (headerSizeRange) {
    headerSliderContainer.classList.remove("hidden");
    return;
  }

  // Otherwise, create a copy of the modal slider but with id="header-size-range":
  const wrapper = document.createElement("div");
  wrapper.className = "slider-container";
  wrapper.style.marginRight = "1rem";

  const labelLeft = document.createElement("label");
  labelLeft.setAttribute("for", "header-size-range");
  labelLeft.textContent = "Aa";
  wrapper.appendChild(labelLeft);

  const inputEl = document.createElement("input");
  inputEl.type = "range";
  inputEl.id = "header-size-range";
  inputEl.min = "30";
  inputEl.max = "80";
  inputEl.value = tempSettings.currentSize.toString();
  wrapper.appendChild(inputEl);

  const labelRight = document.createElement("label");
  labelRight.setAttribute("for", "header-size-range");
  labelRight.style.fontSize = "2.5em";
  labelRight.textContent = "Aa";
  wrapper.appendChild(labelRight);

  headerSliderContainer.appendChild(wrapper);
  headerSliderContainer.classList.remove("hidden");

  headerSizeRange = document.getElementById("header-size-range");

  // 1) Copy CSS‐styles from #modal-size-range to #header-size-range
  const modalRange = document.getElementById("modal-size-range");
  headerSizeRange.style.cssText = modalRange.style.cssText;

  // 2) Listener: header slider → modal slider → live preview
  headerSizeRange.addEventListener("input", (e) => {
    const newSize = parseInt(e.target.value, 10);
    tempSettings.currentSize = newSize;
    applySizeToCardsAndIcons(newSize);
    markDirty();

    // Sync the modal slider:
    modalSizeRange.value = newSize;
  });
}

function hideHeaderSlider() {
  if (headerSizeRange) {
    headerSliderContainer.classList.add("hidden");
  }
}

/* ---------------------
   Dirty Tracking Helpers
--------------------- */
function markDirty() {
  dirty = true;
}

function commitTempSettings() {
  Object.assign(appState, tempSettings);

  applyFontFamily(appState.fontFamily);
  applyDockPosition(appState.dockPosition);
  applySizeToCardsAndIcons(appState.currentSize);
  applyBorderSettings(appState.borderStyle, appState.borderColor);
  applyBackgroundColor(appState.backgroundColor);
  applyVoiceSelection(appState.voiceName);
  buildCategorySections(appState.visibleCategories);
  populateDock(appState.visibleCategories);

  // <<< NEW >>> Persist showHeaderSlider
  if (appState.showHeaderSlider) {
    showHeaderSlider();
  } else {
    hideHeaderSlider();
  }

  saveAppStateToStorage();
  dirty = false;
}

function revertToAppState() {
  applyFontFamily(appState.fontFamily);
  applyDockPosition(appState.dockPosition);
  applySizeToCardsAndIcons(appState.currentSize);
  applyBorderSettings(appState.borderStyle, appState.borderColor);
  applyBackgroundColor(appState.backgroundColor);
  applyVoiceSelection(appState.voiceName);
  buildCategorySections(appState.visibleCategories);
  populateDock(appState.visibleCategories);

  // <<< NEW >>> Revert header slider visibility
  if (appState.showHeaderSlider) {
    showHeaderSlider();
  } else {
    hideHeaderSlider();
  }

  tempSettings = { ...appState };
  dirty = false;
}

/* ---------------------
   Category Visibility Helpers
--------------------- */
function populateCategoryCheckboxes(visibleCategories) {
  categoryVisibilityDiv.innerHTML = "";
  const allCats = getUniqueCategories();
  allCats.forEach((cat) => {
    const label = document.createElement("label");
    label.innerHTML = `
      <input
        type="checkbox"
        data-category="${cat}"
        ${visibleCategories.includes(cat) ? "checked" : ""}
      >
      ${cat}
    `;
    categoryVisibilityDiv.appendChild(label);
  });
}

/* ---------------------
   Build Sections & Dock (Filtered)
--------------------- */
function buildCategorySections(allowedCategories = appState.visibleCategories) {
  mainContent.innerHTML = "";

  getUniqueCategories()
    .filter((cat) => allowedCategories.includes(cat))
    .forEach((cat) => {
      const section = document.createElement("section");
      section.className = "category-section";

      // <<< USE slugify() for safe IDs >>>
      const catSlug = slugify(cat);
      section.id = `section-${catSlug}`;  // e.g. "section-food-drink"

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

        // <<< ADD data-tags attribute for highlighting >>>
        card.dataset.tags = item.tags.join(",");

        // ========== SYMBOL ELEMENT ==========
        const symbolElem = document.createElement("div");
        symbolElem.className = "item-symbol";

        // If this symbol is a “long number” (digits+commas, length > 4), add .small-number
        if (
          typeof item.symbol === "string" &&
          /^[0-9,]+$/.test(item.symbol) && 
          item.symbol.replace(/,/g, "").length >= 4
        ) {
          // e.g. "1000" → replace commas = "1000" length=4 → no
          // "10,000" → replace commas = "10000" length=5 → yes
          symbolElem.classList.add("small-number");
        }

        // Now insert the actual content: emoji / SVG / IMG / number
        if (item.type === "svg") {
          symbolElem.innerHTML = item.symbol;
        } else if (item.type === "image") {
          const img = document.createElement("img");
          img.src = item.symbol;
          img.alt = item.label;
          img.className = "item-image";
          symbolElem.appendChild(img);
        } else {
          symbolElem.textContent = item.symbol;
        }
        // ======================================

        const labelElem = document.createElement("div");
        labelElem.className = "item-label";
        labelElem.textContent = item.label;

        card.appendChild(symbolElem);
        card.appendChild(labelElem);

        // <<< CLEAR previous highlights, then show this card’s tags >>>
        card.addEventListener("click", () => {
  // 1) Clear any active tag in the header
  document
    .querySelectorAll("#tags-container .tag.active")
    .forEach((t) => t.classList.remove("active"));

  // 2) Remove any card highlights
  document
    .querySelectorAll(".item-card.highlighted")
    .forEach((c) => c.classList.remove("highlighted"));

  // 3) Speak and repopulate tags for this card
  speakLabel(item.label);
  updateHeaderTags(item.tags);
        });

        itemsGrid.appendChild(card);

        // Autoscale only non‐SVG / non‐image symbols (optional)
        if (item.type !== "svg" && item.type !== "image") {
          setTimeout(() => {
            autoScaleText(symbolElem, symbolElem);
          }, 0);
        }
      });

      section.appendChild(itemsGrid);
      mainContent.appendChild(section);
    });
}


function populateDock(allowedCategories = appState.visibleCategories) {
  dock.innerHTML = "";

  getUniqueCategories()
    .filter((cat) => allowedCategories.includes(cat))
    .forEach((cat) => {
      const btn = document.createElement("button");
      const icon = categoryIcons[cat] || cat[0];
      btn.textContent = icon;
      btn.title = cat;

      btn.addEventListener("click", () => {
        // <<< MATCH slugify(cat) with section ID >>>
        const catSlug = slugify(cat);
        const sectionId = `section-${catSlug}`; // e.g. "section-food-drink"
        const sectionEl = document.getElementById(sectionId);
        if (sectionEl) {
          sectionEl.scrollIntoView({ behavior: "smooth" });
        }
      });

      dock.appendChild(btn);
    });
}

/* ---------------------
   Utility & TTS / Layout Helpers
--------------------- */
function getUniqueCategories() {
  const cats = dataItems.map((i) => i.category);
  return Array.from(new Set(cats));
}

function applyFontFamily(fontFam) {
  document.documentElement.style.setProperty("--font-family", fontFam);
}

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

function applySizeToCardsAndIcons(sizeValue) {
  const cardSize = sizeValue * 3.5;
  document.documentElement.style.setProperty("--card-size", `${cardSize}px`);
  reScaleAllText();
}

function reScaleAllText() {
  // No-op here (we switched to CSS-based scaling).
}

function autoScaleText(textElem, containerElem) {
  // Fallback for non-CSS cases; usually unused now.
  const containerWidth = containerElem.clientWidth;
  const containerHeight = containerElem.clientHeight;
  let fontSize = Math.floor(containerHeight * 0.8);
  textElem.style.fontSize = `${fontSize}px`;

  while (
    (textElem.scrollWidth > containerWidth ||
      textElem.scrollHeight > containerHeight) &&
    fontSize > 8
  ) {
    fontSize -= 1;
    textElem.style.fontSize = `${fontSize}px`;
  }
}

function applyBorderSettings(style = appState.borderStyle, color = appState.borderColor) {
  document.documentElement.style.setProperty("--border-style", style);
  document.documentElement.style.setProperty("--border-color", color);
}

function applyBackgroundColor(color) {
  if (color === "rainbow") {
    document.body.style.background =
      "linear-gradient(90deg, red, orange, yellow, green, cyan, blue, indigo, violet)";
  } else {
    document.body.style.background = color;
  }
}

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

  if (
    appState.voiceName &&
    availableVoices.some((v) => v.name === appState.voiceName)
  ) {
    voiceSelect.value = appState.voiceName;
  } else if (availableVoices.length > 0) {
    appState.voiceName = availableVoices[0].name;
    voiceSelect.value = availableVoices[0].name;
  }
}

function applyVoiceSelection(voiceName) {
  // Live preview: selection stored in tempSettings; speakLabel() uses it.
}

function speakLabel(text) {
  if (!("speechSynthesis" in window)) return;

  // 1) Stop any currently speaking/queued utterances:
  window.speechSynthesis.cancel();

  // 2) Now create a brand-new utterance and speak it:
  const utterance = new SpeechSynthesisUtterance(text);
  const selectedVoiceName = voiceSelect.value || appState.voiceName;
  const found = availableVoices.find((v) => v.name === selectedVoiceName);
  if (found) {
    utterance.voice = found;
  }
  window.speechSynthesis.speak(utterance);
}


/**
 * Given an array of strings (tagsArray), populate #tags-container.
 * When a tag pill is clicked:
 *  1) speak(tag)
 *  2) clear previous highlights
 *  3) highlight all cards whose data-tags includes(tag)
 */
function updateHeaderTags(tagsArray) {
  const tagsContainer = document.getElementById("tags-container");
  tagsContainer.innerHTML = ""; // clear previous tags

  // Normalize and trim each tag string
  const normalizedTags = tagsArray.map((t) => t.trim());

  normalizedTags.forEach((tag) => {
    const tagElem = document.createElement("span");
    tagElem.className = "tag";
    tagElem.textContent = tag;

    tagElem.addEventListener("click", () => {
      // If this tag is already active → toggle it OFF:
      if (tagElem.classList.contains("active")) {
        // 1) Remove .active from itself
        tagElem.classList.remove("active");
        // 2) Clear any highlighted cards
        document
          .querySelectorAll(".item-card.highlighted")
          .forEach((card) => card.classList.remove("highlighted"));
        return;
      }

      // Otherwise, this tag was NOT active → turn ALL tags off first:
      document
        .querySelectorAll("#tags-container .tag.active")
        .forEach((t) => t.classList.remove("active"));

      // Mark THIS tag as active
      tagElem.classList.add("active");

      // Clear any previous card highlights
      document
        .querySelectorAll(".item-card.highlighted")
        .forEach((card) => card.classList.remove("highlighted"));

      // Highlight every card whose data-tags includes this tag
      document.querySelectorAll(".item-card").forEach((card) => {
        if (!card.dataset.tags) return;
        const cardTags = card.dataset.tags.split(",").map((s) => s.trim());
        if (cardTags.includes(tag)) {
          card.classList.add("highlighted");
        }
      });

      // Speak the clicked tag last (optional order change)
      speakLabel(tag);
    });

    tagsContainer.appendChild(tagElem);
  });
}



function saveAppStateToStorage() {
  localStorage.setItem("emojiSpeakAppState", JSON.stringify(appState));
}

function loadAppStateFromStorage() {
  const saved = localStorage.getItem("emojiSpeakAppState");
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      Object.keys(appState).forEach((key) => {
        if (parsed[key] !== undefined) {
          appState[key] = parsed[key];
        }
      });
    } catch (e) {
      console.error("Failed to parse saved state:", e);
    }
  }
}
