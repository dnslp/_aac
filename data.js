/**
 * Minimal data array for testing local storage persistence:
 * - Some emojis
 * - Some letters
 * You can expand this with numbers, shapes, images, etc.
 */
const SVG_SHAPE_TEMPLATE = (color) => 
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="40" fill="${color}" stroke="black" stroke-width="3"/>
  </svg>`;

 const dataItems = [
    {
      type: "letter",
      symbol: "Aa",
      label: "A",
      category: "Alphabet",
      tags: ["OT"]
    },
    {
      type: "letter",
      symbol: "Bb",
      label: "B",
      category: "Alphabet",
      tags: ["OT"]
    },
    {
      type: "letter",
      symbol: "Cc",
      label: "C",
      category: "Alphabet",
      tags: ["OT"]
    },
    {
      type: "letter",
      symbol: "Dd",
      label: "D",
      category: "Alphabet",
      tags: ["OT"]
    },
    {
      type: "letter",
      symbol: "Ee",
      label: "E",
      category: "Alphabet",
      tags: ["OT"]
    },
    {
      type: "letter",
      symbol: "Ff",
      label: "F",
      category: "Alphabet",
      tags: ["OT"]
    },
    {
      type: "letter",
      symbol: "Gg",
      label: "G",
      category: "Alphabet",
      tags: ["OT"]
    },
    {
      type: "letter",
      symbol: "Hh",
      label: "H",
      category: "Alphabet",
      tags: ["OT"]
    },
    {
      type: "letter",
      symbol: "Ii",
      label: "I",
      category: "Alphabet",
      tags: ["OT"]
    },
    {
      type: "letter",
      symbol: "Jj",
      label: "J",
      category: "Alphabet",
      tags: ["OT"]
    },
    {
      type: "letter",
      symbol: "Kk",
      label: "K",
      category: "Alphabet",
      tags: ["OT"]
    },
    {
      type: "letter",
      symbol: "Ll",
      label: "L",
      category: "Alphabet",
      tags: ["OT"]
    },
    {
      type: "letter",
      symbol: "Mm",
      label: "M",
      category: "Alphabet",
      tags: ["OT"]
    },
    {
      type: "letter",
      symbol: "Nn",
      label: "N",
      category: "Alphabet",
      tags: ["OT"]
    },
    {
      type: "letter",
      symbol: "Oo",
      label: "O",
      category: "Alphabet",
      tags: ["OT"]
    },
    {
      type: "letter",
      symbol: "Pp",
      label: "P",
      category: "Alphabet",
      tags: ["OT"]
    },
    {
      type: "letter",
      symbol: "Qq",
      label: "Q",
      category: "Alphabet",
      tags: ["OT"]
    },
    {
      type: "letter",
      symbol: "Rr",
      label: "R",
      category: "Alphabet",
      tags: ["OT"]
    },
    {
      type: "letter",
      symbol: "Ss",
      label: "S",
      category: "Alphabet",
      tags: ["OT"]
    },
    {
      type: "letter",
      symbol: "Tt",
      label: "T",
      category: "Alphabet",
      tags: ["OT"]
    },
    {
      type: "letter",
      symbol: "Uu",
      label: "U",
      category: "Alphabet",
      tags: ["OT"]
    },
    {
      type: "letter",
      symbol: "Vv",
      label: "V",
      category: "Alphabet",
      tags: ["OT"]
    },
    {
      type: "letter",
      symbol: "Ww",
      label: "W",
      category: "Alphabet",
      tags: ["OT"]
    },
    {
      type: "letter",
      symbol: "Xx",
      label: "X",
      category: "Alphabet",
      tags: ["OT"]
    },
    {
      type: "letter",
      symbol: "Yy",
      label: "Y",
      category: "Alphabet",
      tags: ["OT"]
    },
    {
      type: "letter",
      symbol: "Zz",
      label: "Z",
      category: "Alphabet",
      tags: ["OT"]
    },  
  
    {
      type: "number",
      symbol: "1",
      label: "One",
      category: "Numbers",
      tags: ["OT"]
    },
    {
      type: "number",
      symbol: "2",
      label: "Two",
      category: "Numbers",
      tags: ["OT"]
    },
    {
      type: "number",
      symbol: "3",
      label: "Three",
      category: "Numbers",
      tags: ["OT"]
    },
    {
      type: "number",
      symbol: "4",
      label: "Four",
      category: "Numbers",
      tags: ["OT"]
    },
    {
      type: "number",
      symbol: "5",
      label: "Five",
      category: "Numbers",
      tags: ["OT"]
    },
    {
      type: "number",
      symbol: "6",
      label: "Six",
      category: "Numbers",
      tags: ["OT"]
    },
    {
      type: "number",
      symbol: "7",
      label: "Seven",
      category: "Numbers",
      tags: ["OT"]
    },
    {
      type: "number",
      symbol: "8",
      label: "Eight",
      category: "Numbers",
      tags: ["OT"]
    },
    {
      type: "number",
      symbol: "9",
      label: "Nine",
      category: "Numbers",
      tags: ["OT"]
    },
    {
      type: "number",
      symbol: "10",
      label: "Ten",
      category: "Numbers",
      tags: ["OT"]
    },
    {
      type: "number",
      symbol: "11",
      label: "Eleven",
      category: "Numbers",
      tags: ["OT"]
    },
    {
      type: "number",
      symbol: "12",
      label: "Twelve",
      category: "Numbers",
      tags: ["OT"]
    },
    {
      type: "number",
      symbol: "13",
      label: "Thirteen",
      category: "Numbers",
      tags: ["OT"]
    },
    {
      type: "number",
      symbol: "14",
      label: "Fourteen",
      category: "Numbers",
      tags: ["OT"]
    },
    {
      type: "number",
      symbol: "15",
      label: "Fifteen",
      category: "Numbers",
      tags: ["OT"]
    },
    {
      type: "number",
      symbol: "16",
      label: "Sixteen",
      category: "Numbers",
      tags: ["OT"]
    },
    {
      type: "number",
      symbol: "17",
      label: "Seventeen",
      category: "Numbers",
      tags: ["OT"]
    },
    {
      type: "number",
      symbol: "18",
      label: "Eighteen",
      category: "Numbers",
      tags: ["OT"]
    },
    {
      type: "number",
      symbol: "19",
      label: "Nineteen",
      category: "Numbers",
      tags: ["OT"]
    },
    {
      type: "number",
      symbol: "20",
      label: "Twenty",
      category: "Numbers",
      tags: ["OT"]
    },
    {
      type: "number",
      symbol: "30",
      label: "Thirty",
      category: "Numbers",
      tags: ["OT"]
    },
    {
      type: "number",
      symbol: "40",
      label: "Forty",
      category: "Numbers",
      tags: ["OT"]
    },
    {
      type: "number",
      symbol: "50",
      label: "Fifty",
      category: "Numbers",
      tags: ["OT"]
    },
    {
      type: "number",
      symbol: "60",
      label: "Sixty",
      category: "Numbers",
      tags: ["OT"]
    },
    {
      type: "number",
      symbol: "70",
      label: "Seventy",
      category: "Numbers",
      tags: ["OT"]
    },
    {
      type: "number",
      symbol: "80",
      label: "Eighty",
      category: "Numbers",
      tags: ["OT"]
    },
    {
      type: "number",
      symbol: "90",
      label: "Ninety",
      category: "Numbers",
      tags: ["OT"]
    },
    {
      type: "number",
      symbol: "100",
      label: "One Hundred",
      category: "Numbers",
      tags: ["OT"]
    },
    // {
    //   type: "number",
    //   symbol: "1,000",
    //   label: "One Thousand",
    //   category: "Numbers",
    //   tags: ["OT"]
    // },
    // {
    //   type: "number",
    //   symbol: "10,000",
    //   label: "Ten Thousand",
    //   category: "Numbers",
    //   tags: ["OT"]
    // },
    // {
    //   type: "number",
    //   symbol: "100,000",
    //   label: "One Hundred Thousand",
    //   category: "Numbers",
    //   tags: ["OT"]
    // },
    // {
    //   type: "number",
    //   symbol: "1,000,000",
    //   label: "One Million",
    //   category: "Numbers",
    //   tags: ["OT"]
    // },  
        // 🔴 Red to Orange
  {
    type: "svg",
    symbol: SVG_SHAPE_TEMPLATE("#FF0000"),
    label: "Red",
    category: "Colors",
    tags: ["OT"]
  },
  {
    type: "svg",
    symbol: SVG_SHAPE_TEMPLATE("#FF4500"),
    label: "Orange Red",
    category: "Colors",
    tags: ["OT"]
  },
  {
    type: "svg",
    symbol: SVG_SHAPE_TEMPLATE("#FF7F00"),
    label: "Deep Orange",
    category: "Colors",
    tags: ["OT"]
  },
  {
    type: "svg",
    symbol: SVG_SHAPE_TEMPLATE("#FFA500"),
    label: "Orange",
    category: "Colors",
    tags: ["OT"]
  },

  // 🟡 Orange to Yellow-Green
  {
    type: "svg",
    symbol: SVG_SHAPE_TEMPLATE("#FFD700"),
    label: "Golden Yellow",
    category: "Colors",
    tags: ["OT"]
  },
  {
    type: "svg",
    symbol: SVG_SHAPE_TEMPLATE("#FFFF00"),
    label: "Yellow",
    category: "Colors",
    tags: ["OT"]
  },
  {
    type: "svg",
    symbol: SVG_SHAPE_TEMPLATE("#ADFF2F"),
    label: "Yellow Green",
    category: "Colors",
    tags: ["OT"]
  },
  {
    type: "svg",
    symbol: SVG_SHAPE_TEMPLATE("#7FFF00"),
    label: "Chartreuse",
    category: "Colors",
    tags: ["OT"]
  },

  // 🟢 Green to Cyan
  {
    type: "svg",
    symbol: SVG_SHAPE_TEMPLATE("#00FF00"),
    label: "Green",
    category: "Colors",
    tags: ["OT"]
  },
  {
    type: "svg",
    symbol: SVG_SHAPE_TEMPLATE("#32CD32"),
    label: "Lime Green",
    category: "Colors",
    tags: ["OT"]
  },
  {
    type: "svg",
    symbol: SVG_SHAPE_TEMPLATE("#00FA9A"),
    label: "Spring Green",
    category: "Colors",
    tags: ["OT"]
  },
  {
    type: "svg",
    symbol: SVG_SHAPE_TEMPLATE("#00FFFF"),
    label: "Cyan",
    category: "Colors",
    tags: ["OT"]
  },

  // 🔵 Cyan to Blue
  {
    type: "svg",
    symbol: SVG_SHAPE_TEMPLATE("#00BFFF"),
    label: "Deep Sky Blue",
    category: "Colors",
    tags: ["OT"]
  },
  {
    type: "svg",
    symbol: SVG_SHAPE_TEMPLATE("#1E90FF"),
    label: "Dodger Blue",
    category: "Colors",
    tags: ["OT"]
  },
  {
    type: "svg",
    symbol: SVG_SHAPE_TEMPLATE("#0000FF"),
    label: "Blue",
    category: "Colors",
    tags: ["OT"]
  },
  {
    type: "svg",
    symbol: SVG_SHAPE_TEMPLATE("#4B0082"),
    label: "Indigo",
    category: "Colors",
    tags: ["OT"]
  },

  // 🟣 Blue to Violet & Magenta
  {
    type: "svg",
    symbol: SVG_SHAPE_TEMPLATE("#8A2BE2"),
    label: "Blue Violet",
    category: "Colors",
    tags: ["OT"]
  },
  {
    type: "svg",
    symbol: SVG_SHAPE_TEMPLATE("#9400D3"),
    label: "Violet",
    category: "Colors",
    tags: ["OT"]
  },
  {
    type: "svg",
    symbol: SVG_SHAPE_TEMPLATE("#EE82EE"),
    label: "Lavender",
    category: "Colors",
    tags: ["OT"]
  },
  {
    type: "svg",
    symbol: SVG_SHAPE_TEMPLATE("#FF00FF"),
    label: "Magenta",
    category: "Colors",
    tags: ["OT"]
  },

  // 🟤 Red-Violet to Earth Tones
  {
    type: "svg",
    symbol: SVG_SHAPE_TEMPLATE("#C71585"),
    label: "Rose",
    category: "Colors",
    tags: ["OT"]
  },
  {
    type: "svg",
    symbol: SVG_SHAPE_TEMPLATE("#DC143C"),
    label: "Crimson",
    category: "Colors",
    tags: ["OT"]
  },
  {
    type: "svg",
    symbol: SVG_SHAPE_TEMPLATE("#800000"),
    label: "Maroon",
    category: "Colors",
    tags: ["OT"]
  },
  {
    type: "svg",
    symbol: SVG_SHAPE_TEMPLATE("#A52A2A"),
    label: "Brown",
    category: "Colors",
    tags: ["OT"]
  },


  // ⚪ Neutral Shades
  {
    type: "svg",
    symbol: SVG_SHAPE_TEMPLATE("#D2B48C"),
    label: "Tan",
    category: "Colors",
    tags: ["OT"]
  },
  {
    type: "svg",
    symbol: SVG_SHAPE_TEMPLATE("#808080"),
    label: "Gray",
    category: "Colors",
    tags: ["OT"]
  },
  {
    type: "svg",
    symbol: SVG_SHAPE_TEMPLATE("#000000"),
    label: "Black",
    category: "Colors",
    tags: ["OT"]
  },
  {
    type: "svg",
    symbol: SVG_SHAPE_TEMPLATE("#FFFFFF"),
    label: "White",
    category: "Colors",
    tags: ["OT"]
  },

    {
      type: "emoji",
      symbol: "😀",
      label: "grinning face",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "😃",
      label: "grinning face with big eyes",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "😄",
      label: "grinning face with smiling eyes",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "😁",
      label: "beaming face with smiling eyes",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "😆",
      label: "grinning squinting face",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "😅",
      label: "grinning face with sweat",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🤣",
      label: "rolling on the floor laughing",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "😂",
      label: "face with tears of joy",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🙂",
      label: "slightly smiling face",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🙃",
      label: "upside-down face",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🫠",
      label: "melting face",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "😉",
      label: "winking face",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "😊",
      label: "smiling face with smiling eyes",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "😇",
      label: "smiling face with halo",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🥰",
      label: "smiling face with hearts",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "😍",
      label: "smiling face with heart-eyes",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🤩",
      label: "star-struck",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "😘",
      label: "face blowing a kiss",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "😗",
      label: "kissing face",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "☺️",
      label: "smiling face",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "😚",
      label: "kissing face with closed eyes",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "😙",
      label: "kissing face with smiling eyes",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🥲",
      label: "smiling face with tear",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "😋",
      label: "face savoring food",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "😛",
      label: "face with tongue",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "😜",
      label: "winking face with tongue",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🤪",
      label: "zany face",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "😝",
      label: "squinting face with tongue",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🤑",
      label: "money-mouth face",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🤗",
      label: "smiling face with open hands",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🤭",
      label: "face with hand over mouth",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🫢",
      label: "face with open eyes and hand over mouth",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🫣",
      label: "face with peeking eye",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🤫",
      label: "shushing face",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🤔",
      label: "thinking face",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🫡",
      label: "saluting face",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🤐",
      label: "zipper-mouth face",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🤨",
      label: "face with raised eyebrow",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "😐",
      label: "neutral face",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "😑",
      label: "expressionless face",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "😶",
      label: "face without mouth",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🫥",
      label: "dotted line face",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "😶‍🌫️",
      label: "face in clouds",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "😏",
      label: "smirking face",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "😒",
      label: "unamused face",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🙄",
      label: "face with rolling eyes",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "😬",
      label: "grimacing face",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "😮‍💨",
      label: "face exhaling",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🤥",
      label: "lying face",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🫨",
      label: "shaking face",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🙂‍↔️",
      label: "head shaking horizontally",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🙂‍↕️",
      label: "head shaking vertically",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "😌",
      label: "relieved face",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "😔",
      label: "pensive face",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "😪",
      label: "sleepy face",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🤤",
      label: "drooling face",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "😴",
      label: "sleeping face",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🫩",
      label: "⊛ face with bags under eyes",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "😷",
      label: "face with medical mask",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🤒",
      label: "face with thermometer",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🤕",
      label: "face with head-bandage",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🤢",
      label: "nauseated face",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🤮",
      label: "face vomiting",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🤧",
      label: "sneezing face",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🥵",
      label: "hot face",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🥶",
      label: "cold face",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🥴",
      label: "woozy face",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "😵",
      label: "face with crossed-out eyes",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "😵‍💫",
      label: "face with spiral eyes",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🤯",
      label: "exploding head",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🤠",
      label: "cowboy hat face",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🥳",
      label: "partying face",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🥸",
      label: "disguised face",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "😎",
      label: "smiling face with sunglasses",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🤓",
      label: "nerd face",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧐",
      label: "face with monocle",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "😕",
      label: "confused face",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🫤",
      label: "face with diagonal mouth",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "😟",
      label: "worried face",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🙁",
      label: "slightly frowning face",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "☹",
      label: "frowning face",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "😮",
      label: "face with open mouth",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "😯",
      label: "hushed face",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "😲",
      label: "astonished face",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "😳",
      label: "flushed face",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🥺",
      label: "pleading face",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🥹",
      label: "face holding back tears",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "😦",
      label: "frowning face with open mouth",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "😧",
      label: "anguished face",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "😨",
      label: "fearful face",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "😰",
      label: "anxious face with sweat",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "😥",
      label: "sad but relieved face",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "😢",
      label: "crying face",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "😭",
      label: "loudly crying face",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "😱",
      label: "face screaming in fear",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "😖",
      label: "confounded face",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "😣",
      label: "persevering face",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "😞",
      label: "disappointed face",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "😓",
      label: "downcast face with sweat",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "😩",
      label: "weary face",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "😫",
      label: "tired face",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🥱",
      label: "yawning face",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "😤",
      label: "face with steam from nose",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "😡",
      label: "enraged face",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "😠",
      label: "angry face",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🤬",
      label: "face with symbols on mouth",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "😈",
      label: "smiling face with horns",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👿",
      label: "angry face with horns",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💀",
      label: "skull",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "☠",
      label: "skull and crossbones",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💩",
      label: "pile of poo",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🤡",
      label: "clown face",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👹",
      label: "ogre",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👺",
      label: "goblin",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👻",
      label: "ghost",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👽",
      label: "alien",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👾",
      label: "alien monster",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🤖",
      label: "robot",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "😺",
      label: "grinning cat",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "😸",
      label: "grinning cat with smiling eyes",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "😹",
      label: "cat with tears of joy",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "😻",
      label: "smiling cat with heart-eyes",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "😼",
      label: "cat with wry smile",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "😽",
      label: "kissing cat",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🙀",
      label: "weary cat",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "😿",
      label: "crying cat",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "😾",
      label: "pouting cat",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🙈",
      label: "see-no-evil monkey",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🙉",
      label: "hear-no-evil monkey",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🙊",
      label: "speak-no-evil monkey",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💌",
      label: "love letter",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💘",
      label: "heart with arrow",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💝",
      label: "heart with ribbon",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💖",
      label: "sparkling heart",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💗",
      label: "growing heart",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💓",
      label: "beating heart",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💞",
      label: "revolving hearts",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💕",
      label: "two hearts",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💟",
      label: "heart decoration",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "❣",
      label: "heart exclamation",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💔",
      label: "broken heart",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "❤️‍🔥",
      label: "heart on fire",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "❤️‍🩹",
      label: "mending heart",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "❤",
      label: "red heart",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🩷",
      label: "pink heart",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧡",
      label: "orange heart",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💛",
      label: "yellow heart",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💚",
      label: "green heart",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💙",
      label: "blue heart",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🩵",
      label: "light blue heart",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💜",
      label: "purple heart",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🤎",
      label: "brown heart",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🖤",
      label: "black heart",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🩶",
      label: "grey heart",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🤍",
      label: "white heart",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💋",
      label: "kiss mark",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💯",
      label: "hundred points",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💢",
      label: "anger symbol",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💥",
      label: "collision",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💫",
      label: "dizzy",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💦",
      label: "sweat droplets",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💨",
      label: "dashing away",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🕳",
      label: "hole",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💬",
      label: "speech balloon",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👁️‍🗨️",
      label: "eye in speech bubble",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🗨",
      label: "left speech bubble",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🗯",
      label: "right anger bubble",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💭",
      label: "thought balloon",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💤",
      label: "ZZZ",
      category: "Smileys & Emotion",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👋",
      label: "waving hand",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🤚",
      label: "raised back of hand",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🖐",
      label: "hand with fingers splayed",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "✋",
      label: "raised hand",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🖖",
      label: "vulcan salute",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🫱",
      label: "rightwards hand",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🫲",
      label: "leftwards hand",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🫳",
      label: "palm down hand",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🫴",
      label: "palm up hand",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🫷",
      label: "leftwards pushing hand",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🫸",
      label: "rightwards pushing hand",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👌",
      label: "OK hand",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🤌",
      label: "pinched fingers",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🤏",
      label: "pinching hand",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "✌",
      label: "victory hand",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🤞",
      label: "crossed fingers",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🫰",
      label: "hand with index finger and thumb crossed",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🤟",
      label: "love-you gesture",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🤘",
      label: "sign of the horns",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🤙",
      label: "call me hand",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👈",
      label: "backhand index pointing left",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👉",
      label: "backhand index pointing right",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👆",
      label: "backhand index pointing up",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🖕",
      label: "middle finger",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👇",
      label: "backhand index pointing down",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "☝",
      label: "index pointing up",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🫵",
      label: "index pointing at the viewer",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👍",
      label: "thumbs up",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👎",
      label: "thumbs down",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "✊",
      label: "raised fist",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👊",
      label: "oncoming fist",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🤛",
      label: "left-facing fist",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🤜",
      label: "right-facing fist",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👏",
      label: "clapping hands",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🙌",
      label: "raising hands",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🫶",
      label: "heart hands",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👐",
      label: "open hands",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🤲",
      label: "palms up together",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🤝",
      label: "handshake",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🙏",
      label: "folded hands",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "✍",
      label: "writing hand",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💅",
      label: "nail polish",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🤳",
      label: "selfie",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💪",
      label: "flexed biceps",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🦾",
      label: "mechanical arm",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🦿",
      label: "mechanical leg",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🦵",
      label: "leg",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🦶",
      label: "foot",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👂",
      label: "ear",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🦻",
      label: "ear with hearing aid",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👃",
      label: "nose",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧠",
      label: "brain",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🫀",
      label: "anatomical heart",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🫁",
      label: "lungs",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🦷",
      label: "tooth",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🦴",
      label: "bone",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👀",
      label: "eyes",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👁",
      label: "eye",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👅",
      label: "tongue",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👄",
      label: "mouth",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🫦",
      label: "biting lip",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👶",
      label: "baby",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧒",
      label: "child",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👦",
      label: "boy",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👧",
      label: "girl",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧑",
      label: "person",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👱",
      label: "person: blond hair",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👨",
      label: "man",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧔",
      label: "person: beard",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧔‍♂️",
      label: "man: beard",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧔‍♀️",
      label: "woman: beard",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👨‍🦰",
      label: "man: red hair",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👨‍🦱",
      label: "man: curly hair",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👨‍🦳",
      label: "man: white hair",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👨‍🦲",
      label: "man: bald",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👩",
      label: "woman",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👩‍🦰",
      label: "woman: red hair",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧑‍🦰",
      label: "person: red hair",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👩‍🦱",
      label: "woman: curly hair",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧑‍🦱",
      label: "person: curly hair",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👩‍🦳",
      label: "woman: white hair",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧑‍🦳",
      label: "person: white hair",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👩‍🦲",
      label: "woman: bald",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧑‍🦲",
      label: "person: bald",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👱‍♀️",
      label: "woman: blond hair",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👱‍♂️",
      label: "man: blond hair",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧓",
      label: "older person",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👴",
      label: "old man",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👵",
      label: "old woman",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🙍",
      label: "person frowning",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🙍‍♂️",
      label: "man frowning",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🙍‍♀️",
      label: "woman frowning",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🙎",
      label: "person pouting",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🙎‍♂️",
      label: "man pouting",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🙎‍♀️",
      label: "woman pouting",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🙅",
      label: "person gesturing NO",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🙅‍♂️",
      label: "man gesturing NO",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🙅‍♀️",
      label: "woman gesturing NO",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🙆",
      label: "person gesturing OK",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🙆‍♂️",
      label: "man gesturing OK",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🙆‍♀️",
      label: "woman gesturing OK",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💁",
      label: "person tipping hand",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💁‍♂️",
      label: "man tipping hand",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💁‍♀️",
      label: "woman tipping hand",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🙋",
      label: "person raising hand",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🙋‍♂️",
      label: "man raising hand",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🙋‍♀️",
      label: "woman raising hand",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧏",
      label: "deaf person",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧏‍♂️",
      label: "deaf man",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧏‍♀️",
      label: "deaf woman",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🙇",
      label: "person bowing",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🙇‍♂️",
      label: "man bowing",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🙇‍♀️",
      label: "woman bowing",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🤦",
      label: "person facepalming",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🤦‍♂️",
      label: "man facepalming",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🤦‍♀️",
      label: "woman facepalming",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🤷",
      label: "person shrugging",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🤷‍♂️",
      label: "man shrugging",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🤷‍♀️",
      label: "woman shrugging",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧑‍⚕️",
      label: "health worker",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👨‍⚕️",
      label: "man health worker",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👩‍⚕️",
      label: "woman health worker",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧑‍🎓",
      label: "student",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👨‍🎓",
      label: "man student",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👩‍🎓",
      label: "woman student",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧑‍🏫",
      label: "teacher",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👨‍🏫",
      label: "man teacher",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👩‍🏫",
      label: "woman teacher",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧑‍⚖️",
      label: "judge",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👨‍⚖️",
      label: "man judge",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👩‍⚖️",
      label: "woman judge",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧑‍🌾",
      label: "farmer",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👨‍🌾",
      label: "man farmer",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👩‍🌾",
      label: "woman farmer",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧑‍🍳",
      label: "cook",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👨‍🍳",
      label: "man cook",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👩‍🍳",
      label: "woman cook",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧑‍🔧",
      label: "mechanic",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👨‍🔧",
      label: "man mechanic",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👩‍🔧",
      label: "woman mechanic",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧑‍🏭",
      label: "factory worker",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👨‍🏭",
      label: "man factory worker",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👩‍🏭",
      label: "woman factory worker",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧑‍💼",
      label: "office worker",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👨‍💼",
      label: "man office worker",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👩‍💼",
      label: "woman office worker",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧑‍🔬",
      label: "scientist",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👨‍🔬",
      label: "man scientist",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👩‍🔬",
      label: "woman scientist",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧑‍💻",
      label: "technologist",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👨‍💻",
      label: "man technologist",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👩‍💻",
      label: "woman technologist",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧑‍🎤",
      label: "singer",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👨‍🎤",
      label: "man singer",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👩‍🎤",
      label: "woman singer",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧑‍🎨",
      label: "artist",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👨‍🎨",
      label: "man artist",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👩‍🎨",
      label: "woman artist",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧑‍✈️",
      label: "pilot",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👨‍✈️",
      label: "man pilot",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👩‍✈️",
      label: "woman pilot",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧑‍🚀",
      label: "astronaut",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👨‍🚀",
      label: "man astronaut",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👩‍🚀",
      label: "woman astronaut",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧑‍🚒",
      label: "firefighter",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👨‍🚒",
      label: "man firefighter",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👩‍🚒",
      label: "woman firefighter",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👮",
      label: "police officer",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👮‍♂️",
      label: "man police officer",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👮‍♀️",
      label: "woman police officer",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🕵",
      label: "detective",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🕵️‍♂️",
      label: "man detective",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🕵️‍♀️",
      label: "woman detective",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💂",
      label: "guard",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💂‍♂️",
      label: "man guard",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💂‍♀️",
      label: "woman guard",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🥷",
      label: "ninja",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👷",
      label: "construction worker",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👷‍♂️",
      label: "man construction worker",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👷‍♀️",
      label: "woman construction worker",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🫅",
      label: "person with crown",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🤴",
      label: "prince",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👸",
      label: "princess",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👳",
      label: "person wearing turban",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👳‍♂️",
      label: "man wearing turban",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👳‍♀️",
      label: "woman wearing turban",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👲",
      label: "person with skullcap",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧕",
      label: "woman with headscarf",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🤵",
      label: "person in tuxedo",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🤵‍♂️",
      label: "man in tuxedo",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🤵‍♀️",
      label: "woman in tuxedo",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👰",
      label: "person with veil",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👰‍♂️",
      label: "man with veil",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👰‍♀️",
      label: "woman with veil",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🤰",
      label: "pregnant woman",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🫃",
      label: "pregnant man",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🫄",
      label: "pregnant person",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🤱",
      label: "breast-feeding",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👩‍🍼",
      label: "woman feeding baby",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👨‍🍼",
      label: "man feeding baby",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧑‍🍼",
      label: "person feeding baby",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👼",
      label: "baby angel",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🎅",
      label: "Santa Claus",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🤶",
      label: "Mrs. Claus",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧑‍🎄",
      label: "Mx Claus",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🦸",
      label: "superhero",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🦸‍♂️",
      label: "man superhero",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🦸‍♀️",
      label: "woman superhero",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🦹",
      label: "supervillain",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🦹‍♂️",
      label: "man supervillain",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🦹‍♀️",
      label: "woman supervillain",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧙",
      label: "mage",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧙‍♂️",
      label: "man mage",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧙‍♀️",
      label: "woman mage",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧚",
      label: "fairy",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧚‍♂️",
      label: "man fairy",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧚‍♀️",
      label: "woman fairy",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧛",
      label: "vampire",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧛‍♂️",
      label: "man vampire",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧛‍♀️",
      label: "woman vampire",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧜",
      label: "merperson",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧜‍♂️",
      label: "merman",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧜‍♀️",
      label: "mermaid",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧝",
      label: "elf",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧝‍♂️",
      label: "man elf",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧝‍♀️",
      label: "woman elf",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧞",
      label: "genie",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧞‍♂️",
      label: "man genie",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧞‍♀️",
      label: "woman genie",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧟",
      label: "zombie",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧟‍♂️",
      label: "man zombie",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧟‍♀️",
      label: "woman zombie",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧌",
      label: "troll",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💆",
      label: "person getting massage",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💆‍♂️",
      label: "man getting massage",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💆‍♀️",
      label: "woman getting massage",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💇",
      label: "person getting haircut",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💇‍♂️",
      label: "man getting haircut",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💇‍♀️",
      label: "woman getting haircut",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚶",
      label: "person walking",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚶‍♂️",
      label: "man walking",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚶‍♀️",
      label: "woman walking",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚶‍➡️",
      label: "person walking facing right",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚶‍♀️‍➡️",
      label: "woman walking facing right",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚶‍♂️‍➡️",
      label: "man walking facing right",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧍",
      label: "person standing",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧍‍♂️",
      label: "man standing",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧍‍♀️",
      label: "woman standing",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧎",
      label: "person kneeling",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧎‍♂️",
      label: "man kneeling",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧎‍♀️",
      label: "woman kneeling",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧎‍➡️",
      label: "person kneeling facing right",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧎‍♀️‍➡️",
      label: "woman kneeling facing right",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧎‍♂️‍➡️",
      label: "man kneeling facing right",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧑‍🦯",
      label: "person with white cane",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧑‍🦯‍➡️",
      label: "person with white cane facing right",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👨‍🦯",
      label: "man with white cane",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👨‍🦯‍➡️",
      label: "man with white cane facing right",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👩‍🦯",
      label: "woman with white cane",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👩‍🦯‍➡️",
      label: "woman with white cane facing right",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧑‍🦼",
      label: "person in motorized wheelchair",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧑‍🦼‍➡️",
      label: "person in motorized wheelchair facing right",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👨‍🦼",
      label: "man in motorized wheelchair",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👨‍🦼‍➡️",
      label: "man in motorized wheelchair facing right",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👩‍🦼",
      label: "woman in motorized wheelchair",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👩‍🦼‍➡️",
      label: "woman in motorized wheelchair facing right",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧑‍🦽",
      label: "person in manual wheelchair",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧑‍🦽‍➡️",
      label: "person in manual wheelchair facing right",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👨‍🦽",
      label: "man in manual wheelchair",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👨‍🦽‍➡️",
      label: "man in manual wheelchair facing right",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👩‍🦽",
      label: "woman in manual wheelchair",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👩‍🦽‍➡️",
      label: "woman in manual wheelchair facing right",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏃",
      label: "person running",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏃‍♂️",
      label: "man running",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏃‍♀️",
      label: "woman running",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏃‍➡️",
      label: "person running facing right",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏃‍♀️‍➡️",
      label: "woman running facing right",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏃‍♂️‍➡️",
      label: "man running facing right",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💃",
      label: "woman dancing",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🕺",
      label: "man dancing",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🕴",
      label: "person in suit levitating",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👯",
      label: "people with bunny ears",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👯‍♂️",
      label: "men with bunny ears",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👯‍♀️",
      label: "women with bunny ears",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧖",
      label: "person in steamy room",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧖‍♂️",
      label: "man in steamy room",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧖‍♀️",
      label: "woman in steamy room",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧗",
      label: "person climbing",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧗‍♂️",
      label: "man climbing",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧗‍♀️",
      label: "woman climbing",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🤺",
      label: "person fencing",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏇",
      label: "horse racing",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⛷",
      label: "skier",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏂",
      label: "snowboarder",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏌",
      label: "person golfing",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏌️‍♂️",
      label: "man golfing",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏌️‍♀️",
      label: "woman golfing",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏄",
      label: "person surfing",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏄‍♂️",
      label: "man surfing",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏄‍♀️",
      label: "woman surfing",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚣",
      label: "person rowing boat",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚣‍♂️",
      label: "man rowing boat",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚣‍♀️",
      label: "woman rowing boat",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏊",
      label: "person swimming",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏊‍♂️",
      label: "man swimming",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏊‍♀️",
      label: "woman swimming",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⛹",
      label: "person bouncing ball",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⛹️‍♂️",
      label: "man bouncing ball",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⛹️‍♀️",
      label: "woman bouncing ball",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏋",
      label: "person lifting weights",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏋️‍♂️",
      label: "man lifting weights",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏋️‍♀️",
      label: "woman lifting weights",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚴",
      label: "person biking",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚴‍♂️",
      label: "man biking",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚴‍♀️",
      label: "woman biking",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚵",
      label: "person mountain biking",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚵‍♂️",
      label: "man mountain biking",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚵‍♀️",
      label: "woman mountain biking",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🤸",
      label: "person cartwheeling",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🤸‍♂️",
      label: "man cartwheeling",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🤸‍♀️",
      label: "woman cartwheeling",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🤼",
      label: "people wrestling",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🤼‍♂️",
      label: "men wrestling",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🤼‍♀️",
      label: "women wrestling",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🤽",
      label: "person playing water polo",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🤽‍♂️",
      label: "man playing water polo",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🤽‍♀️",
      label: "woman playing water polo",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🤾",
      label: "person playing handball",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🤾‍♂️",
      label: "man playing handball",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🤾‍♀️",
      label: "woman playing handball",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🤹",
      label: "person juggling",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🤹‍♂️",
      label: "man juggling",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🤹‍♀️",
      label: "woman juggling",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧘",
      label: "person in lotus position",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧘‍♂️",
      label: "man in lotus position",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧘‍♀️",
      label: "woman in lotus position",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🛀",
      label: "person taking bath",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🛌",
      label: "person in bed",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧑‍🤝‍🧑",
      label: "people holding hands",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👭",
      label: "women holding hands",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👫",
      label: "woman and man holding hands",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👬",
      label: "men holding hands",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💏",
      label: "kiss",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👩‍❤️‍💋‍👨",
      label: "kiss: woman, man",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👨‍❤️‍💋‍👨",
      label: "kiss: man, man",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👩‍❤️‍💋‍👩",
      label: "kiss: woman, woman",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💑",
      label: "couple with heart",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👩‍❤️‍👨",
      label: "couple with heart: woman, man",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👨‍❤️‍👨",
      label: "couple with heart: man, man",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👩‍❤️‍👩",
      label: "couple with heart: woman, woman",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👨‍👩‍👦",
      label: "family: man, woman, boy",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👨‍👩‍👧",
      label: "family: man, woman, girl",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👨‍👩‍👧‍👦",
      label: "family: man, woman, girl, boy",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👨‍👩‍👦‍👦",
      label: "family: man, woman, boy, boy",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👨‍👩‍👧‍👧",
      label: "family: man, woman, girl, girl",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👨‍👨‍👦",
      label: "family: man, man, boy",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👨‍👨‍👧",
      label: "family: man, man, girl",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👨‍👨‍👧‍👦",
      label: "family: man, man, girl, boy",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👨‍👨‍👦‍👦",
      label: "family: man, man, boy, boy",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👨‍👨‍👧‍👧",
      label: "family: man, man, girl, girl",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👩‍👩‍👦",
      label: "family: woman, woman, boy",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👩‍👩‍👧",
      label: "family: woman, woman, girl",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👩‍👩‍👧‍👦",
      label: "family: woman, woman, girl, boy",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👩‍👩‍👦‍👦",
      label: "family: woman, woman, boy, boy",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👩‍👩‍👧‍👧",
      label: "family: woman, woman, girl, girl",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👨‍👦",
      label: "family: man, boy",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👨‍👦‍👦",
      label: "family: man, boy, boy",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👨‍👧",
      label: "family: man, girl",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👨‍👧‍👦",
      label: "family: man, girl, boy",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👨‍👧‍👧",
      label: "family: man, girl, girl",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👩‍👦",
      label: "family: woman, boy",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👩‍👦‍👦",
      label: "family: woman, boy, boy",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👩‍👧",
      label: "family: woman, girl",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👩‍👧‍👦",
      label: "family: woman, girl, boy",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👩‍👧‍👧",
      label: "family: woman, girl, girl",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🗣",
      label: "speaking head",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👤",
      label: "bust in silhouette",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👥",
      label: "busts in silhouette",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🫂",
      label: "people hugging",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👪",
      label: "family",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧑‍🧑‍🧒",
      label: "family: adult, adult, child",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧑‍🧑‍🧒‍🧒",
      label: "family: adult, adult, child, child",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧑‍🧒",
      label: "family: adult, child",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧑‍🧒‍🧒",
      label: "family: adult, child, child",
      category: "People & Body",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👣",
      label: "footprints",
      category: "People & Body",
      tags: []
  },

  {
      type: "emoji",
      symbol: "🐵",
      label: "monkey face",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐒",
      label: "monkey",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🦍",
      label: "gorilla",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🦧",
      label: "orangutan",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐶",
      label: "dog face",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐕",
      label: "dog",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🦮",
      label: "guide dog",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐕‍🦺",
      label: "service dog",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐩",
      label: "poodle",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐺",
      label: "wolf",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🦊",
      label: "fox",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🦝",
      label: "raccoon",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐱",
      label: "cat face",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐈",
      label: "cat",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐈‍⬛",
      label: "black cat",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🦁",
      label: "lion",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐯",
      label: "tiger face",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐅",
      label: "tiger",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐆",
      label: "leopard",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐴",
      label: "horse face",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🫎",
      label: "moose",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🫏",
      label: "donkey",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐎",
      label: "horse",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🦄",
      label: "unicorn",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🦓",
      label: "zebra",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🦌",
      label: "deer",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🦬",
      label: "bison",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐮",
      label: "cow face",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐂",
      label: "ox",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐃",
      label: "water buffalo",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐄",
      label: "cow",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐷",
      label: "pig face",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐖",
      label: "pig",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐗",
      label: "boar",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐽",
      label: "pig nose",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐏",
      label: "ram",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐑",
      label: "ewe",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐐",
      label: "goat",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐪",
      label: "camel",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐫",
      label: "two-hump camel",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🦙",
      label: "llama",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🦒",
      label: "giraffe",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐘",
      label: "elephant",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🦣",
      label: "mammoth",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🦏",
      label: "rhinoceros",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🦛",
      label: "hippopotamus",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐭",
      label: "mouse face",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐁",
      label: "mouse",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐀",
      label: "rat",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐹",
      label: "hamster",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐰",
      label: "rabbit face",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐇",
      label: "rabbit",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐿",
      label: "chipmunk",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🦫",
      label: "beaver",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🦔",
      label: "hedgehog",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🦇",
      label: "bat",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐻",
      label: "bear",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐻‍❄️",
      label: "polar bear",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐨",
      label: "koala",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐼",
      label: "panda",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🦥",
      label: "sloth",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🦦",
      label: "otter",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🦨",
      label: "skunk",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🦘",
      label: "kangaroo",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🦡",
      label: "badger",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐾",
      label: "paw prints",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🦃",
      label: "turkey",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐔",
      label: "chicken",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐓",
      label: "rooster",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐣",
      label: "hatching chick",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐤",
      label: "baby chick",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐥",
      label: "front-facing baby chick",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐦",
      label: "bird",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐧",
      label: "penguin",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🕊",
      label: "dove",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🦅",
      label: "eagle",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🦆",
      label: "duck",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🦢",
      label: "swan",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🦉",
      label: "owl",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🦤",
      label: "dodo",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🪶",
      label: "feather",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🦩",
      label: "flamingo",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🦚",
      label: "peacock",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🦜",
      label: "parrot",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🪽",
      label: "wing",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐦‍⬛",
      label: "black bird",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🪿",
      label: "goose",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐦‍🔥",
      label: "phoenix",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐸",
      label: "frog",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐊",
      label: "crocodile",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐢",
      label: "turtle",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🦎",
      label: "lizard",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐍",
      label: "snake",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐲",
      label: "dragon face",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐉",
      label: "dragon",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🦕",
      label: "sauropod",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🦖",
      label: "T-Rex",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐳",
      label: "spouting whale",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐋",
      label: "whale",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐬",
      label: "dolphin",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🦭",
      label: "seal",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐟",
      label: "fish",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐠",
      label: "tropical fish",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐡",
      label: "blowfish",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🦈",
      label: "shark",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐙",
      label: "octopus",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐚",
      label: "spiral shell",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🪸",
      label: "coral",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🪼",
      label: "jellyfish",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🦀",
      label: "crab",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🦞",
      label: "lobster",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🦐",
      label: "shrimp",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🦑",
      label: "squid",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🦪",
      label: "oyster",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐌",
      label: "snail",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🦋",
      label: "butterfly",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐛",
      label: "bug",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐜",
      label: "ant",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐝",
      label: "honeybee",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🪲",
      label: "beetle",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🐞",
      label: "lady beetle",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🦗",
      label: "cricket",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🪳",
      label: "cockroach",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🕷",
      label: "spider",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🕸",
      label: "spider web",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🦂",
      label: "scorpion",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🦟",
      label: "mosquito",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🪰",
      label: "fly",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🪱",
      label: "worm",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🦠",
      label: "microbe",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💐",
      label: "bouquet",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🌸",
      label: "cherry blossom",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💮",
      label: "white flower",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🪷",
      label: "lotus",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏵",
      label: "rosette",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🌹",
      label: "rose",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🥀",
      label: "wilted flower",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🌺",
      label: "hibiscus",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🌻",
      label: "sunflower",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🌼",
      label: "blossom",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🌷",
      label: "tulip",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🪻",
      label: "hyacinth",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🌱",
      label: "seedling",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🪴",
      label: "potted plant",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🌲",
      label: "evergreen tree",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🌳",
      label: "deciduous tree",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🌴",
      label: "palm tree",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🌵",
      label: "cactus",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🌾",
      label: "sheaf of rice",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🌿",
      label: "herb",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "☘",
      label: "shamrock",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🍀",
      label: "four leaf clover",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🍁",
      label: "maple leaf",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🍂",
      label: "fallen leaf",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🍃",
      label: "leaf fluttering in wind",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🪹",
      label: "empty nest",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🪺",
      label: "nest with eggs",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🍄",
      label: "mushroom",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🪾",
      label: "⊛ leafless tree",
      category: "Animals & Nature",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🍇",
      label: "grapes",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🍈",
      label: "melon",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🍉",
      label: "watermelon",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🍊",
      label: "tangerine",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🍋",
      label: "lemon",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🍋‍🟩",
      label: "lime",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🍌",
      label: "banana",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🍍",
      label: "pineapple",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🥭",
      label: "mango",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🍎",
      label: "red apple",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🍏",
      label: "green apple",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🍐",
      label: "pear",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🍑",
      label: "peach",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🍒",
      label: "cherries",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🍓",
      label: "strawberry",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🫐",
      label: "blueberries",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🥝",
      label: "kiwi fruit",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🍅",
      label: "tomato",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🫒",
      label: "olive",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🥥",
      label: "coconut",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🥑",
      label: "avocado",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🍆",
      label: "eggplant",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🥔",
      label: "potato",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🥕",
      label: "carrot",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🌽",
      label: "ear of corn",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🌶",
      label: "hot pepper",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🫑",
      label: "bell pepper",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🥒",
      label: "cucumber",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🥬",
      label: "leafy green",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🥦",
      label: "broccoli",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧄",
      label: "garlic",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧅",
      label: "onion",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🥜",
      label: "peanuts",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🫘",
      label: "beans",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🌰",
      label: "chestnut",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "",
      label: "ginger root",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🫛",
      label: "pea pod",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🍄‍🟫",
      label: "brown mushroom",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🫜",
      label: "⊛ root vegetable",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🍞",
      label: "bread",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🥐",
      label: "croissant",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🥖",
      label: "baguette bread",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🫓",
      label: "flatbread",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🥨",
      label: "pretzel",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🥯",
      label: "bagel",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🥞",
      label: "pancakes",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧇",
      label: "waffle",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧀",
      label: "cheese wedge",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🍖",
      label: "meat on bone",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🍗",
      label: "poultry leg",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🥩",
      label: "cut of meat",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🥓",
      label: "bacon",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🍔",
      label: "hamburger",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🍟",
      label: "french fries",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🍕",
      label: "pizza",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🌭",
      label: "hot dog",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🥪",
      label: "sandwich",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🌮",
      label: "taco",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🌯",
      label: "burrito",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🫔",
      label: "tamale",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🥙",
      label: "stuffed flatbread",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧆",
      label: "falafel",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🥚",
      label: "egg",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🍳",
      label: "cooking",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🥘",
      label: "shallow pan of food",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🍲",
      label: "pot of food",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🫕",
      label: "fondue",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🥣",
      label: "bowl with spoon",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🥗",
      label: "green salad",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🍿",
      label: "popcorn",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧈",
      label: "butter",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧂",
      label: "salt",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🥫",
      label: "canned food",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🍱",
      label: "bento box",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🍘",
      label: "rice cracker",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🍙",
      label: "rice ball",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🍚",
      label: "cooked rice",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🍛",
      label: "curry rice",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🍜",
      label: "steaming bowl",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🍝",
      label: "spaghetti",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🍠",
      label: "roasted sweet potato",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🍢",
      label: "oden",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🍣",
      label: "sushi",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🍤",
      label: "fried shrimp",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🍥",
      label: "fish cake with swirl",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🥮",
      label: "moon cake",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🍡",
      label: "dango",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🥟",
      label: "dumpling",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🥠",
      label: "fortune cookie",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🥡",
      label: "takeout box",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🍦",
      label: "soft ice cream",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🍧",
      label: "shaved ice",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🍨",
      label: "ice cream",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🍩",
      label: "doughnut",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🍪",
      label: "cookie",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🎂",
      label: "birthday cake",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🍰",
      label: "shortcake",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧁",
      label: "cupcake",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🥧",
      label: "pie",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🍫",
      label: "chocolate bar",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🍬",
      label: "candy",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🍭",
      label: "lollipop",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🍮",
      label: "custard",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🍯",
      label: "honey pot",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🍼",
      label: "baby bottle",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🥛",
      label: "glass of milk",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "☕",
      label: "hot beverage",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🫖",
      label: "teapot",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🍵",
      label: "teacup without handle",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🍶",
      label: "sake",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🍾",
      label: "bottle with popping cork",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🍷",
      label: "wine glass",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🍸",
      label: "cocktail glass",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🍹",
      label: "tropical drink",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🍺",
      label: "beer mug",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🍻",
      label: "clinking beer mugs",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🥂",
      label: "clinking glasses",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🥃",
      label: "tumbler glass",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🫗",
      label: "pouring liquid",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🥤",
      label: "cup with straw",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧋",
      label: "bubble tea",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧃",
      label: "beverage box",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧉",
      label: "mate",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧊",
      label: "ice",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🥢",
      label: "chopsticks",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🍽",
      label: "fork and knife with plate",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🍴",
      label: "fork and knife",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🥄",
      label: "spoon",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🔪",
      label: "kitchen knife",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🫙",
      label: "jar",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏺",
      label: "amphora",
      category: "Food & Drink",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🌍",
      label: "globe showing Europe-Africa",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🌎",
      label: "globe showing Americas",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🌏",
      label: "globe showing Asia-Australia",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🌐",
      label: "globe with meridians",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🗺",
      label: "world map",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🗾",
      label: "map of Japan",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧭",
      label: "compass",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏔",
      label: "snow-capped mountain",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⛰",
      label: "mountain",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🌋",
      label: "volcano",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🗻",
      label: "mount fuji",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏕",
      label: "camping",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏖",
      label: "beach with umbrella",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏜",
      label: "desert",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏝",
      label: "desert island",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏞",
      label: "national park",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏟",
      label: "stadium",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏛",
      label: "classical building",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏗",
      label: "building construction",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧱",
      label: "brick",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🪨",
      label: "rock",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🪵",
      label: "wood",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🛖",
      label: "hut",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏘",
      label: "houses",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏚",
      label: "derelict house",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏠",
      label: "house",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏡",
      label: "house with garden",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏢",
      label: "office building",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏣",
      label: "Japanese post office",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏤",
      label: "post office",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏥",
      label: "hospital",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏦",
      label: "bank",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏨",
      label: "hotel",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏩",
      label: "love hotel",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏪",
      label: "convenience store",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏫",
      label: "school",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏬",
      label: "department store",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏭",
      label: "factory",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏯",
      label: "Japanese castle",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏰",
      label: "castle",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💒",
      label: "wedding",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🗼",
      label: "Tokyo tower",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🗽",
      label: "Statue of Liberty",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⛪",
      label: "church",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🕌",
      label: "mosque",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🛕",
      label: "hindu temple",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🕍",
      label: "synagogue",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⛩",
      label: "shinto shrine",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🕋",
      label: "kaaba",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⛲",
      label: "fountain",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⛺",
      label: "tent",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🌁",
      label: "foggy",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🌃",
      label: "night with stars",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏙",
      label: "cityscape",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🌄",
      label: "sunrise over mountains",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🌅",
      label: "sunrise",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🌆",
      label: "cityscape at dusk",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🌇",
      label: "sunset",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🌉",
      label: "bridge at night",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "♨",
      label: "hot springs",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🎠",
      label: "carousel horse",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🛝",
      label: "playground slide",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🎡",
      label: "ferris wheel",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🎢",
      label: "roller coaster",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💈",
      label: "barber pole",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🎪",
      label: "circus tent",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚂",
      label: "locomotive",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚃",
      label: "railway car",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚄",
      label: "high-speed train",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚅",
      label: "bullet train",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚆",
      label: "train",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚇",
      label: "metro",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚈",
      label: "light rail",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚉",
      label: "station",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚊",
      label: "tram",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚝",
      label: "monorail",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚞",
      label: "mountain railway",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚋",
      label: "tram car",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚌",
      label: "bus",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚍",
      label: "oncoming bus",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚎",
      label: "trolleybus",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚐",
      label: "minibus",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚑",
      label: "ambulance",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚒",
      label: "fire engine",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚓",
      label: "police car",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚔",
      label: "oncoming police car",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚕",
      label: "taxi",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚖",
      label: "oncoming taxi",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚗",
      label: "automobile",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚘",
      label: "oncoming automobile",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚙",
      label: "sport utility vehicle",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🛻",
      label: "pickup truck",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚚",
      label: "delivery truck",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚛",
      label: "articulated lorry",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚜",
      label: "tractor",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏎",
      label: "racing car",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏍",
      label: "motorcycle",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🛵",
      label: "motor scooter",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🦽",
      label: "manual wheelchair",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🦼",
      label: "motorized wheelchair",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🛺",
      label: "auto rickshaw",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚲",
      label: "bicycle",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🛴",
      label: "kick scooter",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🛹",
      label: "skateboard",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🛼",
      label: "roller skate",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚏",
      label: "bus stop",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🛣",
      label: "motorway",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🛤",
      label: "railway track",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🛢",
      label: "oil drum",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⛽",
      label: "fuel pump",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🛞",
      label: "wheel",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚨",
      label: "police car light",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚥",
      label: "horizontal traffic light",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚦",
      label: "vertical traffic light",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🛑",
      label: "stop sign",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚧",
      label: "construction",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⚓",
      label: "anchor",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🛟",
      label: "ring buoy",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⛵",
      label: "sailboat",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🛶",
      label: "canoe",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚤",
      label: "speedboat",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🛳",
      label: "passenger ship",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⛴",
      label: "ferry",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🛥",
      label: "motor boat",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚢",
      label: "ship",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "✈",
      label: "airplane",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🛩",
      label: "small airplane",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🛫",
      label: "airplane departure",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🛬",
      label: "airplane arrival",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🪂",
      label: "parachute",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💺",
      label: "seat",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚁",
      label: "helicopter",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚟",
      label: "suspension railway",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚠",
      label: "mountain cableway",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚡",
      label: "aerial tramway",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🛰",
      label: "satellite",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚀",
      label: "rocket",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🛸",
      label: "flying saucer",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🛎",
      label: "bellhop bell",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧳",
      label: "luggage",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⌛",
      label: "hourglass done",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⏳",
      label: "hourglass not done",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⌚",
      label: "watch",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⏰",
      label: "alarm clock",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⏱️",
      label: "stopwatch",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⏲️",
      label: "timer clock",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🕰",
      label: "mantelpiece clock",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🕛",
      label: "twelve o’clock",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🕧",
      label: "twelve-thirty",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🕐",
      label: "one o’clock",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🕜",
      label: "one-thirty",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🕑",
      label: "two o’clock",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🕝",
      label: "two-thirty",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🕒",
      label: "three o’clock",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🕞",
      label: "three-thirty",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🕓",
      label: "four o’clock",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🕟",
      label: "four-thirty",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🕔",
      label: "five o’clock",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🕠",
      label: "five-thirty",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🕕",
      label: "six o’clock",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🕡",
      label: "six-thirty",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🕖",
      label: "seven o’clock",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🕢",
      label: "seven-thirty",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🕗",
      label: "eight o’clock",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🕣",
      label: "eight-thirty",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🕘",
      label: "nine o’clock",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🕤",
      label: "nine-thirty",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🕙",
      label: "ten o’clock",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🕥",
      label: "ten-thirty",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🕚",
      label: "eleven o’clock",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🕦",
      label: "eleven-thirty",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🌑",
      label: "new moon",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🌒",
      label: "waxing crescent moon",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🌓",
      label: "first quarter moon",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🌔",
      label: "waxing gibbous moon",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🌕",
      label: "full moon",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🌖",
      label: "waning gibbous moon",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🌗",
      label: "last quarter moon",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🌘",
      label: "waning crescent moon",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🌙",
      label: "crescent moon",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🌚",
      label: "new moon face",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🌛",
      label: "first quarter moon face",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🌜",
      label: "last quarter moon face",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🌡",
      label: "thermometer",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "☀",
      label: "sun",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🌝",
      label: "full moon face",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🌞",
      label: "sun with face",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🪐",
      label: "ringed planet",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⭐",
      label: "star",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🌟",
      label: "glowing star",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🌠",
      label: "shooting star",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🌌",
      label: "milky way",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "☁",
      label: "cloud",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⛅",
      label: "sun behind cloud",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⛈",
      label: "cloud with lightning and rain",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🌤",
      label: "sun behind small cloud",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🌥",
      label: "sun behind large cloud",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🌦",
      label: "sun behind rain cloud",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🌧",
      label: "cloud with rain",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🌨",
      label: "cloud with snow",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🌩",
      label: "cloud with lightning",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🌪",
      label: "tornado",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🌫",
      label: "fog",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🌬",
      label: "wind face",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🌀",
      label: "cyclone",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🌈",
      label: "rainbow",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🌂",
      label: "closed umbrella",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "☂",
      label: "umbrella",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "☔",
      label: "umbrella with rain drops",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⛱",
      label: "umbrella on ground",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⚡",
      label: "high voltage",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "❄️",
      label: "snowflake",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⛄️",
      label: "snowman",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⛄",
      label: "snowman without snow",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "☄️",
      label: "comet",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🔥",
      label: "fire",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💧",
      label: "droplet",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🌊",
      label: "water wave",
      category: "Travel & Places",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🎃",
      label: "jack-o-lantern",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🎄",
      label: "Christmas tree",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🎆",
      label: "fireworks",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🎇",
      label: "sparkler",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧨",
      label: "firecracker",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "✨",
      label: "sparkles",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🎈",
      label: "balloon",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🎉",
      label: "party popper",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🎊",
      label: "confetti ball",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🎋",
      label: "tanabata tree",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🎍",
      label: "pine decoration",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🎎",
      label: "Japanese dolls",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🎏",
      label: "carp streamer",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🎐",
      label: "wind chime",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🎑",
      label: "moon viewing ceremony",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧧",
      label: "red envelope",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🎀",
      label: "ribbon",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🎁",
      label: "wrapped gift",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🎗",
      label: "reminder ribbon",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🎟",
      label: "admission tickets",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🎫",
      label: "ticket",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🎖",
      label: "military medal",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏆",
      label: "trophy",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏅",
      label: "sports medal",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🥇",
      label: "1st place medal",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🥈",
      label: "2nd place medal",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🥉",
      label: "3rd place medal",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⚽",
      label: "soccer ball",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⚾",
      label: "baseball",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🥎",
      label: "softball",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏀",
      label: "basketball",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏐",
      label: "volleyball",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏈",
      label: "american football",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏉",
      label: "rugby football",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🎾",
      label: "tennis",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🥏",
      label: "flying disc",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🎳",
      label: "bowling",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏏",
      label: "cricket game",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏑",
      label: "field hockey",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏒",
      label: "ice hockey",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🥍",
      label: "lacrosse",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏓",
      label: "ping pong",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏸",
      label: "badminton",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🥊",
      label: "boxing glove",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🥋",
      label: "martial arts uniform",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🥅",
      label: "goal net",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⛳",
      label: "flag in hole",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⛸",
      label: "ice skate",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🎣",
      label: "fishing pole",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🤿",
      label: "diving mask",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🎽",
      label: "running shirt",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🎿",
      label: "skis",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🛷",
      label: "sled",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🥌",
      label: "curling stone",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🎯",
      label: "bullseye",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🪀",
      label: "yo-yo",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🪁",
      label: "kite",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🔫",
      label: "water pistol",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🎱",
      label: "pool 8 ball",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🔮",
      label: "crystal ball",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🪄",
      label: "magic wand",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🎮",
      label: "video game",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🕹",
      label: "joystick",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🎰",
      label: "slot machine",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🎲",
      label: "game die",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧩",
      label: "puzzle piece",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧸",
      label: "teddy bear",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🪅",
      label: "piñata",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🪩",
      label: "mirror ball",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🪆",
      label: "nesting dolls",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "♠️",
      label: "spade suit",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "♥️",
      label: "heart suit",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "♦️",
      label: "diamond suit",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "♣️",
      label: "club suit",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "♟",
      label: "chess pawn",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🃏",
      label: "joker",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🀄",
      label: "mahjong red dragon",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🎴",
      label: "flower playing cards",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🎭",
      label: "performing arts",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🖼",
      label: "framed picture",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🎨",
      label: "artist palette",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧵",
      label: "thread",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🪡",
      label: "sewing needle",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧶",
      label: "yarn",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🪢",
      label: "knot",
      category: "Activities",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👓",
      label: "glasses",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🕶",
      label: "sunglasses",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🥽",
      label: "goggles",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🥼",
      label: "lab coat",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🦺",
      label: "safety vest",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👔",
      label: "necktie",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👕",
      label: "t-shirt",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👖",
      label: "jeans",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧣",
      label: "scarf",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧤",
      label: "gloves",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧥",
      label: "coat",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧦",
      label: "socks",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👗",
      label: "dress",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👘",
      label: "kimono",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🥻",
      label: "sari",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🩱",
      label: "one-piece swimsuit",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🩲",
      label: "briefs",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🩳",
      label: "shorts",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👙",
      label: "bikini",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👚",
      label: "woman’s clothes",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🪭",
      label: "folding hand fan",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👛",
      label: "purse",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👜",
      label: "handbag",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👝",
      label: "clutch bag",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🛍",
      label: "shopping bags",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🎒",
      label: "backpack",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🩴",
      label: "thong sandal",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👞",
      label: "man’s shoe",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👟",
      label: "running shoe",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🥾",
      label: "hiking boot",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🥿",
      label: "flat shoe",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👠",
      label: "high-heeled shoe",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👡",
      label: "woman’s sandal",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🩰",
      label: "ballet shoes",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👢",
      label: "woman’s boot",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🪮",
      label: "hair pick",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👑",
      label: "crown",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "👒",
      label: "woman’s hat",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🎩",
      label: "top hat",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🎓",
      label: "graduation cap",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧢",
      label: "billed cap",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🪖",
      label: "military helmet",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⛑",
      label: "rescue worker’s helmet",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "📿",
      label: "prayer beads",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💄",
      label: "lipstick",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💍",
      label: "ring",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💎",
      label: "gem stone",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🔇",
      label: "muted speaker",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🔈",
      label: "speaker low volume",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🔉",
      label: "speaker medium volume",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🔊",
      label: "speaker high volume",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "📢",
      label: "loudspeaker",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "📣",
      label: "megaphone",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "📯",
      label: "postal horn",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🔔",
      label: "bell",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🔕",
      label: "bell with slash",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🎼",
      label: "musical score",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🎵",
      label: "musical note",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🎶",
      label: "musical notes",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🎙",
      label: "studio microphone",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🎚",
      label: "level slider",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🎛",
      label: "control knobs",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🎤",
      label: "microphone",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🎧",
      label: "headphone",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "📻",
      label: "radio",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🎷",
      label: "saxophone",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🪗",
      label: "accordion",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🎸",
      label: "guitar",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🎹",
      label: "musical keyboard",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🎺",
      label: "trumpet",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🎻",
      label: "violin",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🪕",
      label: "banjo",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🥁",
      label: "drum",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🪘",
      label: "long drum",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🪇",
      label: "maracas",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🪈",
      label: "flute",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🪉",
      label: "⊛ harp",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "📱",
      label: "mobile phone",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "📲",
      label: "mobile phone with arrow",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "☎",
      label: "telephone",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "📞",
      label: "telephone receiver",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "📟",
      label: "pager",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "📠",
      label: "fax machine",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🔋",
      label: "battery",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🪫",
      label: "low battery",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🔌",
      label: "electric plug",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💻",
      label: "laptop",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🖥",
      label: "desktop computer",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🖨",
      label: "printer",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⌨",
      label: "keyboard",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🖱",
      label: "computer mouse",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🖲",
      label: "trackball",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💽",
      label: "computer disk",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💾",
      label: "floppy disk",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💿",
      label: "optical disk",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "📀",
      label: "dvd",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧮",
      label: "abacus",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🎥",
      label: "movie camera",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🎞",
      label: "film frames",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "📽",
      label: "film projector",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🎬",
      label: "clapper board",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "📺",
      label: "television",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "📷",
      label: "camera",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "📸",
      label: "camera with flash",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "📹",
      label: "video camera",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "📼",
      label: "videocassette",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🔍",
      label: "magnifying glass tilted left",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🔎",
      label: "magnifying glass tilted right",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🕯",
      label: "candle",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💡",
      label: "light bulb",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🔦",
      label: "flashlight",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏮",
      label: "red paper lantern",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🪔",
      label: "diya lamp",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "📔",
      label: "notebook with decorative cover",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "📕",
      label: "closed book",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "📖",
      label: "open book",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "📗",
      label: "green book",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "📘",
      label: "blue book",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "📙",
      label: "orange book",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "📚",
      label: "books",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "📓",
      label: "notebook",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "📒",
      label: "ledger",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "📃",
      label: "page with curl",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "📜",
      label: "scroll",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "📄",
      label: "page facing up",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "📰",
      label: "newspaper",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🗞",
      label: "rolled-up newspaper",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "📑",
      label: "bookmark tabs",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🔖",
      label: "bookmark",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏷",
      label: "label",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💰",
      label: "money bag",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🪙",
      label: "coin",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💴",
      label: "yen banknote",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💵",
      label: "dollar banknote",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💶",
      label: "euro banknote",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💷",
      label: "pound banknote",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💸",
      label: "money with wings",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💳",
      label: "credit card",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧾",
      label: "receipt",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💹",
      label: "chart increasing with yen",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "✉",
      label: "envelope",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "📧",
      label: "e-mail",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "📨",
      label: "incoming envelope",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "📩",
      label: "envelope with arrow",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "📤",
      label: "outbox tray",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "📥",
      label: "inbox tray",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "📦",
      label: "package",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "📫",
      label: "closed mailbox with raised flag",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "📪",
      label: "closed mailbox with lowered flag",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "📬",
      label: "open mailbox with raised flag",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "📭",
      label: "open mailbox with lowered flag",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "📮",
      label: "postbox",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🗳",
      label: "ballot box with ballot",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "✏",
      label: "pencil",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "✒",
      label: "black nib",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🖋",
      label: "fountain pen",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🖊",
      label: "pen",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🖌",
      label: "paintbrush",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🖍",
      label: "crayon",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "📝",
      label: "memo",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💼",
      label: "briefcase",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "📁",
      label: "file folder",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "📂",
      label: "open file folder",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🗂",
      label: "card index dividers",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "📅",
      label: "calendar",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "📆",
      label: "tear-off calendar",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🗒",
      label: "spiral notepad",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🗓",
      label: "spiral calendar",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "📇",
      label: "card index",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "📈",
      label: "chart increasing",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "📉",
      label: "chart decreasing",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "📊",
      label: "bar chart",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "📋",
      label: "clipboard",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "📌",
      label: "pushpin",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "📍",
      label: "round pushpin",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "📎",
      label: "paperclip",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🖇",
      label: "linked paperclips",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "📏",
      label: "straight ruler",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "📐",
      label: "triangular ruler",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "✂",
      label: "scissors",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🗃",
      label: "card file box",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🗄",
      label: "file cabinet",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🗑",
      label: "wastebasket",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🔒",
      label: "locked",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🔓",
      label: "unlocked",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🔏",
      label: "locked with pen",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🔐",
      label: "locked with key",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🔑",
      label: "key",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🗝",
      label: "old key",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🔨",
      label: "hammer",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🪓",
      label: "axe",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⛏",
      label: "pick",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⚒",
      label: "hammer and pick",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🛠",
      label: "hammer and wrench",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🗡",
      label: "dagger",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⚔",
      label: "crossed swords",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💣",
      label: "bomb",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🪃",
      label: "boomerang",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏹",
      label: "bow and arrow",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🛡",
      label: "shield",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🪚",
      label: "carpentry saw",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🔧",
      label: "wrench",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🪛",
      label: "screwdriver",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🔩",
      label: "nut and bolt",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⚙",
      label: "gear",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🗜",
      label: "clamp",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⚖",
      label: "balance scale",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🦯",
      label: "white cane",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🔗",
      label: "link",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⛓️‍💥",
      label: "broken chain",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⛓",
      label: "chains",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🪝",
      label: "hook",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧰",
      label: "toolbox",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧲",
      label: "magnet",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🪜",
      label: "ladder",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🪏",
      label: "⊛ shovel",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⚗",
      label: "alembic",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧪",
      label: "test tube",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧫",
      label: "petri dish",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧬",
      label: "dna",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🔬",
      label: "microscope",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🔭",
      label: "telescope",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "📡",
      label: "satellite antenna",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💉",
      label: "syringe",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🩸",
      label: "drop of blood",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💊",
      label: "pill",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🩹",
      label: "adhesive bandage",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🩼",
      label: "crutch",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🩺",
      label: "stethoscope",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🩻",
      label: "x-ray",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚪",
      label: "door",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🛗",
      label: "elevator",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🪞",
      label: "mirror",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🪟",
      label: "window",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🛏",
      label: "bed",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🛋",
      label: "couch and lamp",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🪑",
      label: "chair",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚽",
      label: "toilet",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🪠",
      label: "plunger",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚿",
      label: "shower",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🛁",
      label: "bathtub",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🪤",
      label: "mouse trap",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🪒",
      label: "razor",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧴",
      label: "lotion bottle",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧷",
      label: "safety pin",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧹",
      label: "broom",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧺",
      label: "basket",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧻",
      label: "roll of paper",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🪣",
      label: "bucket",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧼",
      label: "soap",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🫧",
      label: "bubbles",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🪥",
      label: "toothbrush",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧽",
      label: "sponge",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧯",
      label: "fire extinguisher",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🛒",
      label: "shopping cart",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚬",
      label: "cigarette",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⚰",
      label: "coffin",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🪦",
      label: "headstone",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⚱",
      label: "funeral urn",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🧿",
      label: "nazar amulet",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🪬",
      label: "hamsa",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🗿",
      label: "moai",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🪧",
      label: "placard",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🪪",
      label: "identification card",
      category: "Objects",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏧",
      label: "ATM sign",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚮",
      label: "litter in bin sign",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚰",
      label: "potable water",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "♿",
      label: "wheelchair symbol",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚹",
      label: "men’s room",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚺",
      label: "women’s room",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚻",
      label: "restroom",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚼",
      label: "baby symbol",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚾",
      label: "water closet",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🛂",
      label: "passport control",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🛃",
      label: "customs",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🛄",
      label: "baggage claim",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🛅",
      label: "left luggage",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⚠",
      label: "warning",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚸",
      label: "children crossing",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⛔",
      label: "no entry",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚫",
      label: "prohibited",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚳",
      label: "no bicycles",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚭",
      label: "no smoking",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚯",
      label: "no littering",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚱",
      label: "non-potable water",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚷",
      label: "no pedestrians",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "📵",
      label: "no mobile phones",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🔞",
      label: "no one under eighteen",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "☢",
      label: "radioactive",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "☣",
      label: "biohazard",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⬆",
      label: "up arrow",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "↗",
      label: "up-right arrow",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "➡",
      label: "right arrow",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "↘",
      label: "down-right arrow",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⬇",
      label: "down arrow",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "↙",
      label: "down-left arrow",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⬅",
      label: "left arrow",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "↖",
      label: "up-left arrow",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "↕",
      label: "up-down arrow",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "↔",
      label: "left-right arrow",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "↩",
      label: "right arrow curving left",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "↪",
      label: "left arrow curving right",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⤴",
      label: "right arrow curving up",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⤵",
      label: "right arrow curving down",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🔃",
      label: "clockwise vertical arrows",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🔄",
      label: "counterclockwise arrows button",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🔙",
      label: "BACK arrow",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🔚",
      label: "END arrow",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🔛",
      label: "ON! arrow",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🔜",
      label: "SOON arrow",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🔝",
      label: "TOP arrow",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🛐",
      label: "place of worship",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⚛",
      label: "atom symbol",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🕉",
      label: "om",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "✡",
      label: "star of David",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "☸",
      label: "wheel of dharma",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "☯",
      label: "yin yang",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "✝",
      label: "latin cross",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "☦",
      label: "orthodox cross",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "☪",
      label: "star and crescent",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "☮",
      label: "peace symbol",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🕎",
      label: "menorah",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🔯",
      label: "dotted six-pointed star",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🪯",
      label: "khanda",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "♈",
      label: "Aries",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "♉",
      label: "Taurus",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "♊",
      label: "Gemini",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "♋",
      label: "Cancer",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "♌",
      label: "Leo",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "♍",
      label: "Virgo",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "♎",
      label: "Libra",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "♏",
      label: "Scorpio",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "♐",
      label: "Sagittarius",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "♑",
      label: "Capricorn",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "♒",
      label: "Aquarius",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "♓",
      label: "Pisces",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⛎",
      label: "Ophiuchus",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🔀",
      label: "shuffle tracks button",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🔁",
      label: "repeat button",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🔂",
      label: "repeat single button",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "▶",
      label: "play button",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⏩",
      label: "fast-forward button",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⏭",
      label: "next track button",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⏯",
      label: "play or pause button",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "◀",
      label: "reverse button",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⏪",
      label: "fast reverse button",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⏮",
      label: "last track button",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🔼",
      label: "upwards button",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⏫",
      label: "fast up button",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🔽",
      label: "downwards button",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⏬",
      label: "fast down button",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⏸",
      label: "pause button",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⏹",
      label: "stop button",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⏺",
      label: "record button",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⏏",
      label: "eject button",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🎦",
      label: "cinema",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🔅",
      label: "dim button",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🔆",
      label: "bright button",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "📶",
      label: "antenna bars",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🛜",
      label: "wireless",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "📳",
      label: "vibration mode",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "📴",
      label: "mobile phone off",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "♀",
      label: "female sign",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "♂",
      label: "male sign",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⚧",
      label: "transgender symbol",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "✖",
      label: "multiply",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "➕",
      label: "plus",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "➖",
      label: "minus",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "➗",
      label: "divide",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🟰",
      label: "heavy equals sign",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "♾",
      label: "infinity",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "‼",
      label: "double exclamation mark",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⁉",
      label: "exclamation question mark",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "❓",
      label: "red question mark",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "❔",
      label: "white question mark",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "❕",
      label: "white exclamation mark",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "❗",
      label: "red exclamation mark",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "〰",
      label: "wavy dash",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💱",
      label: "currency exchange",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💲",
      label: "heavy dollar sign",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⚕",
      label: "medical symbol",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "♻",
      label: "recycling symbol",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⚜",
      label: "fleur-de-lis",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🔱",
      label: "trident emblem",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "📛",
      label: "name badge",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🔰",
      label: "Japanese symbol for beginner",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⭕",
      label: "hollow red circle",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "✅",
      label: "check mark button",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "☑",
      label: "check box with check",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "✔",
      label: "check mark",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "❌",
      label: "cross mark",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "❎",
      label: "cross mark button",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "➰",
      label: "curly loop",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "➿",
      label: "double curly loop",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "〽",
      label: "part alternation mark",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "✳",
      label: "eight-spoked asterisk",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "✴",
      label: "eight-pointed star",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "❇",
      label: "sparkle",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "©",
      label: "copyright",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "®",
      label: "registered",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "™",
      label: "trade mark",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🫟",
      label: "⊛ splatter",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "#️⃣",
      label: "keycap: #",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "*️⃣",
      label: "keycap: *",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "0️⃣",
      label: "keycap: 0",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "1️⃣",
      label: "keycap: 1",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "2️⃣",
      label: "keycap: 2",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "3️⃣",
      label: "keycap: 3",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "4️⃣",
      label: "keycap: 4",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "5️⃣",
      label: "keycap: 5",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "6️⃣",
      label: "keycap: 6",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "7️⃣",
      label: "keycap: 7",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "8️⃣",
      label: "keycap: 8",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "9️⃣",
      label: "keycap: 9",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🔟",
      label: "keycap: 10",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🔠",
      label: "input latin uppercase",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🔡",
      label: "input latin lowercase",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🔢",
      label: "input numbers",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🔣",
      label: "input symbols",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🔤",
      label: "input latin letters",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🅰",
      label: "A button (blood type)",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🆎",
      label: "AB button (blood type)",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🅱",
      label: "B button (blood type)",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🆑",
      label: "CL button",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🆒",
      label: "COOL button",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🆓",
      label: "FREE button",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "ℹ",
      label: "information",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🆔",
      label: "ID button",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "Ⓜ",
      label: "circled M",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🆕",
      label: "NEW button",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🆖",
      label: "NG button",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🅾",
      label: "O button (blood type)",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🆗",
      label: "OK button",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🅿",
      label: "P button",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🆘",
      label: "SOS button",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🆙",
      label: "UP! button",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🆚",
      label: "VS button",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🈁",
      label: "Japanese “here” button",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🈂",
      label: "Japanese “service charge” button",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🈷",
      label: "Japanese “monthly amount” button",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🈶",
      label: "Japanese “not free of charge” button",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🈯",
      label: "Japanese “reserved” button",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🉐",
      label: "Japanese “bargain” button",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🈹",
      label: "Japanese “discount” button",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🈚",
      label: "Japanese “free of charge” button",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🈲",
      label: "Japanese “prohibited” button",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🉑",
      label: "Japanese “acceptable” button",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🈸",
      label: "Japanese “application” button",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🈴",
      label: "Japanese “passing grade” button",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🈳",
      label: "Japanese “vacancy” button",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "㊗",
      label: "Japanese “congratulations” button",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "㊙",
      label: "Japanese “secret” button",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🈺",
      label: "Japanese “open for business” button",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🈵",
      label: "Japanese “no vacancy” button",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🔴",
      label: "red circle",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🟠",
      label: "orange circle",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🟡",
      label: "yellow circle",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🟢",
      label: "green circle",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🔵",
      label: "blue circle",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🟣",
      label: "purple circle",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🟤",
      label: "brown circle",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⚫",
      label: "black circle",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⚪",
      label: "white circle",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🟥",
      label: "red square",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🟧",
      label: "orange square",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🟨",
      label: "yellow square",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🟩",
      label: "green square",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🟦",
      label: "blue square",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🟪",
      label: "purple square",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🟫",
      label: "brown square",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⬛",
      label: "black large square",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "⬜",
      label: "white large square",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "◼",
      label: "black medium square",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "◻",
      label: "white medium square",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "◾",
      label: "black medium-small square",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "◽",
      label: "white medium-small square",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "▪",
      label: "black small square",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "▫",
      label: "white small square",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🔶",
      label: "large orange diamond",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🔷",
      label: "large blue diamond",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🔸",
      label: "small orange diamond",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🔹",
      label: "small blue diamond",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🔺",
      label: "red triangle pointed up",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🔻",
      label: "red triangle pointed down",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "💠",
      label: "diamond with a dot",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🔘",
      label: "radio button",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🔳",
      label: "white square button",
      category: "Symbols",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🔲",
      label: "black square button",
      category: "Symbols",
      tags: []
  },
  {
    symbol: "./images/Mr-Potato-Head/Mr-Potato-Head-body.png",
    type: "image",
    category: "Toys",
    label: "Mr. Potato Head Body",
    tags: []
  },
  {
    symbol: "./images/Mr-Potato-Head/Mr-Potato-Head-arms.png",
    type: "image",
    category: "Toys",
    label: "Mr. Potato Head Arms",
    tags: []
  },
  {
    symbol: "./images/Mr-Potato-Head/Mr-Potato-Head-ear.png",
    type: "image",
    category: "Toys",
    label: "Mr. Potato Head Ear",
    tags: []
  },
  {
    symbol: "./images/Mr-Potato-Head/Mr-Potato-Head-eyes.png",
    type: "image",
    category: "Toys",
    label: "Mr. Potato Head Eyes",
    tags: []
  },
  {
    symbol: "./images/Mr-Potato-Head/Mr-Potato-Head-feet.png",
    type: "image",
    category: "Toys",
    label: "Mr. Potato Head Feet",
    tags: []
  },
  {
    symbol: "./images/Mr-Potato-Head/Mr-Potato-Head-glasses.png",
    type: "image",
    category: "Toys",
    label: "Mr. Potato Head Glasses",
    tags: []
  },
  {
    symbol: "./images/Mr-Potato-Head/Mr-Potato-Head-hat.png",
    type: "image",
    category: "Toys",
    label: "Mr. Potato Head Hat",
    tags: []
  },
  {
    symbol: "./images/Mr-Potato-Head/Mr-Potato-Head-mouth.png",
    type: "image",
    category: "Toys",
    label: "Mr. Potato Head Mouth",
    tags: []
  },
  {
    symbol: "./images/Mr-Potato-Head/Mr-Potato-Head-mustache.png",
    type: "image",
    category: "Toys",
    label: "Mr. Potato Head Mustache",
    tags: []
  },
  {
    symbol: "./images/Mr-Potato-Head/Mr-Potato-Head-nose.png",
    type: "image",
    category: "Toys",
    label: "Mr. Potato Head Nose",
    tags: []
  },
  {
    symbol: "./images/Mr-Potato-Head/Mr-Potato-Head-tongue.png",
    type: "image",
    category: "Toys",
    label: "Mr. Potato Head Tongue",
    tags: []
  },
  {
    type: "image",
    symbol: "./images/Proloquo2go/all-done.png",
    label: "All Done",
    category: "Proloquo2Go",
    tags: [
      "OT"
    ]
  },
  {
    symbol: "./images/Proloquo2go/Yes.png",
    type: "image",
    category: "Proloquo2Go",
    label: "Yes",
    tags: [
      "OT"
    ]
  },
  {
    symbol: "./images/Proloquo2go/Maybe.png",
    type: "image",
    category: "Proloquo2Go",
    label: "Maybe",
    tags: [
      "OT"
    ]
  },
  {
    symbol: "./images/Proloquo2go/No.png",
    type: "image",
    category: "Proloquo2Go",
    label: "No",
    tags: [
      "OT"
    ]
  },
  {
    symbol: "./images/Proloquo2go/I-Dont-Know.png",
    type: "image",
    category: "Proloquo2Go",
    label: "I Don't Know",
    tags: [
      "OT"
    ]
  },
  {
    symbol: "./images/Proloquo2go/more.png",
    type: "image",
    category: "Proloquo2Go",
    label: "More",
    tags: [
      "OT"
    ]
  },
  {
    symbol: "./images/LAMP/all.png",
    type: "image",
    category: "LAMP",
    label: "all",
    tags: []
  },
  {
    symbol: "./images/LAMP/color.png",
    type: "image",
    category: "LAMP",
    label: "color",
    tags: []
  },
  {
    symbol: "./images/LAMP/come.png",
    type: "image",
    category: "LAMP",
    label: "come",
    tags: []
  },
  {
    symbol: "./images/LAMP/do.png",
    type: "image",
    category: "LAMP",
    label: "do",
    tags: []
  },
  {
    symbol: "./images/LAMP/drink.png",
    type: "image",
    category: "LAMP",
    label: "drink",
    tags: []
  },
  {
    symbol: "./images/LAMP/eat.png",
    type: "image",
    category: "LAMP",
    label: "eat",
    tags: []
  },
  {
    symbol: "./images/LAMP/end.png",
    type: "image",
    category: "LAMP",
    label: "end",
    tags: []
  },
  {
    symbol: "./images/LAMP/feel.png",
    type: "image",
    category: "LAMP",
    label: "feel",
    tags: []
  },
  {
    symbol: "./images/LAMP/follow.png",
    type: "image",
    category: "LAMP",
    label: "follow",
    tags: []
  },
  {
    symbol: "./images/LAMP/get.png",
    type: "image",
    category: "LAMP",
    label: "get",
    tags: []
  },
  {
    symbol: "./images/LAMP/go.png",
    type: "image",
    category: "LAMP",
    label: "go",
    tags: []
  },
  {
    symbol: "./images/LAMP/help.png",
    type: "image",
    category: "LAMP",
    label: "help",
    tags: []
  },
  {
    symbol: "./images/LAMP/live.png",
    type: "image",
    category: "LAMP",
    label: "live",
    tags: []
  },
  {
    symbol: "./images/LAMP/make.png",
    type: "image",
    category: "LAMP",
    label: "make",
    tags: []
  },
  {
    symbol: "./images/LAMP/more.png",
    type: "image",
    category: "LAMP",
    label: "more",
    tags: []
  },
  {
    symbol: "./images/LAMP/my.png",
    type: "image",
    category: "LAMP",
    label: "my",
    tags: []
  },
  {
    symbol: "./images/LAMP/need.png",
    type: "image",
    category: "LAMP",
    label: "need",
    tags: []
  },
  {
    symbol: "./images/LAMP/off.png",
    type: "image",
    category: "LAMP",
    label: "off",
    tags: []
  },
  {
    symbol: "./images/LAMP/play.png",
    type: "image",
    category: "LAMP",
    label: "play",
    tags: []
  },
  {
    symbol: "./images/LAMP/please.png",
    type: "image",
    category: "LAMP",
    label: "please",
    tags: []
  },
  {
    symbol: "./images/LAMP/put.png",
    type: "image",
    category: "LAMP",
    label: "put",
    tags: []
  },
  {
    symbol: "./images/LAMP/ride.png",
    type: "image",
    category: "LAMP",
    label: "ride",
    tags: []
  },
  {
    symbol: "./images/LAMP/sit.png",
    type: "image",
    category: "LAMP",
    label: "sit",
    tags: []
  },
  {
    symbol: "./images/LAMP/sleep.png",
    type: "image",
    category: "LAMP",
    label: "sleep",
    tags: []
  },
  {
    symbol: "./images/LAMP/some.png",
    type: "image",
    category: "LAMP",
    label: "some",
    tags: []
  },
  {
    symbol: "./images/LAMP/time.png",
    type: "image",
    category: "LAMP",
    label: "time",
    tags: []
  },
  {
    symbol: "./images/LAMP/turn.png",
    type: "image",
    category: "LAMP",
    label: "turn",
    tags: []
  },
  {
    symbol: "./images/LAMP/watch.png",
    type: "image",
    category: "LAMP",
    label: "watch",
    tags: []
  },
  {
    symbol: "./images/LAMP/wear.png",
    type: "image",
    category: "LAMP",
    label: "wear",
    tags: []
  },
  {
    symbol: "./images/LAMP/work.png",
    type: "image",
    category: "LAMP",
    label: "work",
    tags: []
  },
  {
      type: "emoji",
      symbol: "🏁",
      label: "chequered flag",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🚩",
      label: "triangular flag",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🎌",
      label: "crossed flags",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏴",
      label: "black flag",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏳",
      label: "white flag",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏳️‍🌈",
      label: "rainbow flag",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏳️‍⚧️",
      label: "transgender flag",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏴‍☠️",
      label: "pirate flag",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇦🇨",
      label: "flag: Ascension Island",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇦🇩",
      label: "flag: Andorra",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇦🇪",
      label: "flag: United Arab Emirates",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇦🇫",
      label: "flag: Afghanistan",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇦🇬",
      label: "flag: Antigua & Barbuda",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇦🇮",
      label: "flag: Anguilla",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇦🇱",
      label: "flag: Albania",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇦🇲",
      label: "flag: Armenia",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇦🇴",
      label: "flag: Angola",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇦🇶",
      label: "flag: Antarctica",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇦🇷",
      label: "flag: Argentina",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇦🇸",
      label: "flag: American Samoa",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇦🇹",
      label: "flag: Austria",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇦🇺",
      label: "flag: Australia",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇦🇼",
      label: "flag: Aruba",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇦🇽",
      label: "flag: Åland Islands",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇦🇿",
      label: "flag: Azerbaijan",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇧🇦",
      label: "flag: Bosnia & Herzegovina",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇧🇧",
      label: "flag: Barbados",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇧🇩",
      label: "flag: Bangladesh",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇧🇪",
      label: "flag: Belgium",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇧🇫",
      label: "flag: Burkina Faso",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇧🇬",
      label: "flag: Bulgaria",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇧🇭",
      label: "flag: Bahrain",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇧🇮",
      label: "flag: Burundi",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇧🇯",
      label: "flag: Benin",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇧🇱",
      label: "flag: St. Barthélemy",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇧🇲",
      label: "flag: Bermuda",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇧🇳",
      label: "flag: Brunei",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇧🇴",
      label: "flag: Bolivia",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇧🇶",
      label: "flag: Caribbean Netherlands",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇧🇷",
      label: "flag: Brazil",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇧🇸",
      label: "flag: Bahamas",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇧🇹",
      label: "flag: Bhutan",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇧🇻",
      label: "flag: Bouvet Island",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇧🇼",
      label: "flag: Botswana",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇧🇾",
      label: "flag: Belarus",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇧🇿",
      label: "flag: Belize",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇨🇦",
      label: "flag: Canada",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇨🇨",
      label: "flag: Cocos (Keeling) Islands",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇨🇩",
      label: "flag: Congo - Kinshasa",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇨🇫",
      label: "flag: Central African Republic",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇨🇬",
      label: "flag: Congo - Brazzaville",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇨🇭",
      label: "flag: Switzerland",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇨🇮",
      label: "flag: Côte d’Ivoire",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇨🇰",
      label: "flag: Cook Islands",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇨🇱",
      label: "flag: Chile",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇨🇲",
      label: "flag: Cameroon",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇨🇳",
      label: "flag: China",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇨🇴",
      label: "flag: Colombia",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇨🇵",
      label: "flag: Clipperton Island",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇨🇶",
      label: "⊛ flag: Sark",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇨🇷",
      label: "flag: Costa Rica",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇨🇺",
      label: "flag: Cuba",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇨🇻",
      label: "flag: Cape Verde",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇨🇼",
      label: "flag: Curaçao",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇨🇽",
      label: "flag: Christmas Island",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇨🇾",
      label: "flag: Cyprus",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇨🇿",
      label: "flag: Czechia",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇩🇪",
      label: "flag: Germany",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇩🇬",
      label: "flag: Diego Garcia",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇩🇯",
      label: "flag: Djibouti",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇩🇰",
      label: "flag: Denmark",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇩🇲",
      label: "flag: Dominica",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇩🇴",
      label: "flag: Dominican Republic",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇩🇿",
      label: "flag: Algeria",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇪🇦",
      label: "flag: Ceuta & Melilla",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇪🇨",
      label: "flag: Ecuador",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇪🇪",
      label: "flag: Estonia",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇪🇬",
      label: "flag: Egypt",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇪🇭",
      label: "flag: Western Sahara",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇪🇷",
      label: "flag: Eritrea",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇪🇸",
      label: "flag: Spain",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇪🇹",
      label: "flag: Ethiopia",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇪🇺",
      label: "flag: European Union",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇫🇮",
      label: "flag: Finland",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇫🇯",
      label: "flag: Fiji",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇫🇰",
      label: "flag: Falkland Islands",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇫🇲",
      label: "flag: Micronesia",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇫🇴",
      label: "flag: Faroe Islands",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇫🇷",
      label: "flag: France",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇬🇦",
      label: "flag: Gabon",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇬🇧",
      label: "flag: United Kingdom",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇬🇩",
      label: "flag: Grenada",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇬🇪",
      label: "flag: Georgia",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇬🇫",
      label: "flag: French Guiana",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇬🇬",
      label: "flag: Guernsey",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇬🇭",
      label: "flag: Ghana",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇬🇮",
      label: "flag: Gibraltar",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇬🇱",
      label: "flag: Greenland",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇬🇲",
      label: "flag: Gambia",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇬🇳",
      label: "flag: Guinea",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇬🇵",
      label: "flag: Guadeloupe",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇬🇶",
      label: "flag: Equatorial Guinea",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇬🇷",
      label: "flag: Greece",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇬🇸",
      label: "flag: South Georgia & South Sandwich Islands",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇬🇹",
      label: "flag: Guatemala",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇬🇺",
      label: "flag: Guam",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇬🇼",
      label: "flag: Guinea-Bissau",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇬🇾",
      label: "flag: Guyana",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇭🇰",
      label: "flag: Hong Kong SAR China",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇭🇲",
      label: "flag: Heard & McDonald Islands",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇭🇳",
      label: "flag: Honduras",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇭🇷",
      label: "flag: Croatia",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇭🇹",
      label: "flag: Haiti",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇭🇺",
      label: "flag: Hungary",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇮🇨",
      label: "flag: Canary Islands",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇮🇩",
      label: "flag: Indonesia",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇮🇪",
      label: "flag: Ireland",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇮🇱",
      label: "flag: Israel",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇮🇲",
      label: "flag: Isle of Man",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇮🇳",
      label: "flag: India",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇮🇴",
      label: "flag: British Indian Ocean Territory",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇮🇶",
      label: "flag: Iraq",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇮🇷",
      label: "flag: Iran",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇮🇸",
      label: "flag: Iceland",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇮🇹",
      label: "flag: Italy",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇯🇪",
      label: "flag: Jersey",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇯🇲",
      label: "flag: Jamaica",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇯🇴",
      label: "flag: Jordan",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇯🇵",
      label: "flag: Japan",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇰🇪",
      label: "flag: Kenya",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇰🇬",
      label: "flag: Kyrgyzstan",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇰🇭",
      label: "flag: Cambodia",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇰🇮",
      label: "flag: Kiribati",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇰🇲",
      label: "flag: Comoros",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇰🇳",
      label: "flag: St. Kitts & Nevis",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇰🇵",
      label: "flag: North Korea",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇰🇷",
      label: "flag: South Korea",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇰🇼",
      label: "flag: Kuwait",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇰🇾",
      label: "flag: Cayman Islands",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇰🇿",
      label: "flag: Kazakhstan",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇱🇦",
      label: "flag: Laos",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇱🇧",
      label: "flag: Lebanon",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇱🇨",
      label: "flag: St. Lucia",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇱🇮",
      label: "flag: Liechtenstein",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇱🇰",
      label: "flag: Sri Lanka",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇱🇷",
      label: "flag: Liberia",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇱🇸",
      label: "flag: Lesotho",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇱🇹",
      label: "flag: Lithuania",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇱🇺",
      label: "flag: Luxembourg",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇱🇻",
      label: "flag: Latvia",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇱🇾",
      label: "flag: Libya",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇲🇦",
      label: "flag: Morocco",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇲🇨",
      label: "flag: Monaco",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇲🇩",
      label: "flag: Moldova",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇲🇪",
      label: "flag: Montenegro",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇲🇫",
      label: "flag: St. Martin",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇲🇬",
      label: "flag: Madagascar",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇲🇭",
      label: "flag: Marshall Islands",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇲🇰",
      label: "flag: North Macedonia",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇲🇱",
      label: "flag: Mali",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇲🇲",
      label: "flag: Myanmar (Burma)",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇲🇳",
      label: "flag: Mongolia",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇲🇴",
      label: "flag: Macao SAR China",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇲🇵",
      label: "flag: Northern Mariana Islands",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇲🇶",
      label: "flag: Martinique",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇲🇷",
      label: "flag: Mauritania",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇲🇸",
      label: "flag: Montserrat",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇲🇹",
      label: "flag: Malta",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇲🇺",
      label: "flag: Mauritius",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇲🇻",
      label: "flag: Maldives",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇲🇼",
      label: "flag: Malawi",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇲🇽",
      label: "flag: Mexico",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇲🇾",
      label: "flag: Malaysia",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇲🇿",
      label: "flag: Mozambique",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇳🇦",
      label: "flag: Namibia",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇳🇨",
      label: "flag: New Caledonia",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇳🇪",
      label: "flag: Niger",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇳🇫",
      label: "flag: Norfolk Island",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇳🇬",
      label: "flag: Nigeria",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇳🇮",
      label: "flag: Nicaragua",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇳🇱",
      label: "flag: Netherlands",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇳🇴",
      label: "flag: Norway",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇳🇵",
      label: "flag: Nepal",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇳🇷",
      label: "flag: Nauru",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇳🇺",
      label: "flag: Niue",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇳🇿",
      label: "flag: New Zealand",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇴🇲",
      label: "flag: Oman",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇵🇦",
      label: "flag: Panama",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇵🇪",
      label: "flag: Peru",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇵🇫",
      label: "flag: French Polynesia",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇵🇬",
      label: "flag: Papua New Guinea",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇵🇭",
      label: "flag: Philippines",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇵🇰",
      label: "flag: Pakistan",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇵🇱",
      label: "flag: Poland",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇵🇲",
      label: "flag: St. Pierre & Miquelon",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇵🇳",
      label: "flag: Pitcairn Islands",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇵🇷",
      label: "flag: Puerto Rico",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇵🇸",
      label: "flag: Palestinian Territories",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇵🇹",
      label: "flag: Portugal",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇵🇼",
      label: "flag: Palau",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇵🇾",
      label: "flag: Paraguay",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇶🇦",
      label: "flag: Qatar",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇷🇪",
      label: "flag: Réunion",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇷🇴",
      label: "flag: Romania",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇷🇸",
      label: "flag: Serbia",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇷🇺",
      label: "flag: Russia",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇷🇼",
      label: "flag: Rwanda",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇸🇦",
      label: "flag: Saudi Arabia",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇸🇧",
      label: "flag: Solomon Islands",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇸🇨",
      label: "flag: Seychelles",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇸🇩",
      label: "flag: Sudan",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇸🇪",
      label: "flag: Sweden",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇸🇬",
      label: "flag: Singapore",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇸🇭",
      label: "flag: St. Helena",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇸🇮",
      label: "flag: Slovenia",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇸🇯",
      label: "flag: Svalbard & Jan Mayen",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇸🇰",
      label: "flag: Slovakia",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇸🇱",
      label: "flag: Sierra Leone",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇸🇲",
      label: "flag: San Marino",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇸🇳",
      label: "flag: Senegal",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇸🇴",
      label: "flag: Somalia",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇸🇷",
      label: "flag: Suriname",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇸🇸",
      label: "flag: South Sudan",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇸🇹",
      label: "flag: São Tomé & Príncipe",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇸🇻",
      label: "flag: El Salvador",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇸🇽",
      label: "flag: Sint Maarten",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇸🇾",
      label: "flag: Syria",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇸🇿",
      label: "flag: Eswatini",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇹🇦",
      label: "flag: Tristan da Cunha",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇹🇨",
      label: "flag: Turks & Caicos Islands",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇹🇩",
      label: "flag: Chad",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇹🇫",
      label: "flag: French Southern Territories",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇹🇬",
      label: "flag: Togo",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇹🇭",
      label: "flag: Thailand",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇹🇯",
      label: "flag: Tajikistan",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇹🇰",
      label: "flag: Tokelau",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇹🇱",
      label: "flag: Timor-Leste",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇹🇲",
      label: "flag: Turkmenistan",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇹🇳",
      label: "flag: Tunisia",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇹🇴",
      label: "flag: Tonga",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇹🇷",
      label: "flag: Türkiye",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇹🇹",
      label: "flag: Trinidad & Tobago",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇹🇻",
      label: "flag: Tuvalu",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇹🇼",
      label: "flag: Taiwan",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇹🇿",
      label: "flag: Tanzania",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇺🇦",
      label: "flag: Ukraine",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇺🇬",
      label: "flag: Uganda",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇺🇲",
      label: "flag: U.S. Outlying Islands",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇺🇳",
      label: "flag: United Nations",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇺🇸",
      label: "flag: United States",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇺🇾",
      label: "flag: Uruguay",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇺🇿",
      label: "flag: Uzbekistan",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇻🇦",
      label: "flag: Vatican City",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇻🇨",
      label: "flag: St. Vincent & Grenadines",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇻🇪",
      label: "flag: Venezuela",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇻🇬",
      label: "flag: British Virgin Islands",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇻🇮",
      label: "flag: U.S. Virgin Islands",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇻🇳",
      label: "flag: Vietnam",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇻🇺",
      label: "flag: Vanuatu",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇼🇫",
      label: "flag: Wallis & Futuna",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇼🇸",
      label: "flag: Samoa",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇽🇰",
      label: "flag: Kosovo",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇾🇪",
      label: "flag: Yemen",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇾🇹",
      label: "flag: Mayotte",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇿🇦",
      label: "flag: South Africa",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇿🇲",
      label: "flag: Zambia",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🇿🇼",
      label: "flag: Zimbabwe",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
      label: "flag: England",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
      label: "flag: Scotland",
      category: "Flags",
      tags: []
  },
  {
      type: "emoji",
      symbol: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
      label: "flag: Wales",
      category: "Flags",
      tags: []
  }
      
  ];
  
