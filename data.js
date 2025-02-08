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
    {
      type: "number",
      symbol: "1,000",
      label: "One Thousand",
      category: "Numbers",
      tags: ["OT"]
    },
    {
      type: "number",
      symbol: "10,000",
      label: "Ten Thousand",
      category: "Numbers",
      tags: ["OT"]
    },
    {
      type: "number",
      symbol: "100,000",
      label: "One Hundred Thousand",
      category: "Numbers",
      tags: ["OT"]
    },
    {
      type: "number",
      symbol: "1,000,000",
      label: "One Million",
      category: "Numbers",
      tags: ["OT"]
    },  
      {
        type: "emoji",
        symbol: "😀",
        label: "Grinning Face",
        category: "Smileys & Emotion",
        tags: []
      },
      {
        type: "emoji",
        symbol: "😂",
        label: "Face with Tears of Joy",
        category: "Smileys & Emotion",
        tags: []
      },
      {
        type: "emoji",
        symbol: "😍",
        label: "Smiling Face with Heart-Eyes",
        category: "Smileys & Emotion",
        tags: []
      },
      {
        type: "emoji",
        symbol: "🐶",
        label: "Dog Face",
        category: "Animals & Nature",
        tags: []
      },
      {
        type: "emoji",
        symbol: "🐱",
        label: "Cat Face",
        category: "Animals & Nature",
        tags: []
      },
      {
        type: "emoji",
        symbol: "🦁",
        label: "Lion Face",
        category: "Animals & Nature",
        tags: []
      },
      {
        type: "emoji",
        symbol: "🍎",
        label: "Red Apple",
        category: "Food & Drink",
        tags: []
      },
      {
        type: "emoji",
        symbol: "🍕",
        label: "Pizza",
        category: "Food & Drink",
        tags: []
      },
      {
        type: "emoji",
        symbol: "🏠",
        label: "House",
        category: "Travel & Places",
        tags: []
      },
      {
        type: "emoji",
        symbol: "✈️",
        label: "Airplane",
        category: "Travel & Places",
        tags: []
      },
      {
        type: "emoji",
        symbol: "⚽",
        label: "Soccer Ball",
        category: "Activities",
        tags: []
      },
      {
        type: "emoji",
        symbol: "🎵",
        label: "Musical Note",
        category: "Objects",
        tags: []
      },
      {
        type: "emoji",
        symbol: "📚",
        label: "Books",
        category: "Objects",
        tags: []
      },
      {
        type: "emoji",
        symbol: "💡",
        label: "Light Bulb",
        category: "Objects",
        tags: []
      },
      {
        type: "emoji",
        symbol: "🌟",
        label: "Star",
        category: "Smileys & Emotion",
        tags: []
      },
      {
        type: "emoji",
        symbol: "🚀",
        label: "Rocket",
        category: "Travel & Places",
        tags: []
      },
      {
        type: "emoji",
        symbol: "🔥",
        label: "Fire",
        category: "Smileys & Emotion",
        tags: []
      },
      {
        type: "emoji",
        symbol: "🌈",
        label: "Rainbow",
        category: "Travel & Places",
        tags: []
      },
      {
        type: "emoji",
        symbol: "🍩",
        label: "Doughnut",
        category: "Food & Drink",
        tags: []
      },
      {
        type: "emoji",
        symbol: "🎉",
        label: "Party Popper",
        category: "Activities",
        tags: []
      },
      
  ];
  