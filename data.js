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
      tags: []
    },
    {
      type: "letter",
      symbol: "Bb",
      label: "B",
      category: "Alphabet",
      tags: []
    },
    {
      type: "letter",
      symbol: "Cc",
      label: "C",
      category: "Alphabet",
      tags: []
    },
    {
      type: "letter",
      symbol: "Dd",
      label: "D",
      category: "Alphabet",
      tags: []
    },
    {
      type: "letter",
      symbol: "Ee",
      label: "E",
      category: "Alphabet",
      tags: []
    },
    {
      type: "letter",
      symbol: "Ff",
      label: "F",
      category: "Alphabet",
      tags: []
    },
    {
      type: "letter",
      symbol: "Gg",
      label: "G",
      category: "Alphabet",
      tags: []
    },
    {
      type: "letter",
      symbol: "Hh",
      label: "H",
      category: "Alphabet",
      tags: []
    },
    {
      type: "letter",
      symbol: "Ii",
      label: "I",
      category: "Alphabet",
      tags: []
    },
    {
      type: "letter",
      symbol: "Jj",
      label: "J",
      category: "Alphabet",
      tags: []
    },
    {
      type: "letter",
      symbol: "Kk",
      label: "K",
      category: "Alphabet",
      tags: []
    },
    {
      type: "letter",
      symbol: "Ll",
      label: "L",
      category: "Alphabet",
      tags: []
    },
    {
      type: "letter",
      symbol: "Mm",
      label: "M",
      category: "Alphabet",
      tags: []
    },
    {
      type: "letter",
      symbol: "Nn",
      label: "N",
      category: "Alphabet",
      tags: []
    },
    {
      type: "letter",
      symbol: "Oo",
      label: "O",
      category: "Alphabet",
      tags: []
    },
    {
      type: "letter",
      symbol: "Pp",
      label: "P",
      category: "Alphabet",
      tags: []
    },
    {
      type: "letter",
      symbol: "Qq",
      label: "Q",
      category: "Alphabet",
      tags: []
    },
    {
      type: "letter",
      symbol: "Rr",
      label: "R",
      category: "Alphabet",
      tags: []
    },
    {
      type: "letter",
      symbol: "Ss",
      label: "S",
      category: "Alphabet",
      tags: []
    },
    {
      type: "letter",
      symbol: "Tt",
      label: "T",
      category: "Alphabet",
      tags: []
    },
    {
      type: "letter",
      symbol: "Uu",
      label: "U",
      category: "Alphabet",
      tags: []
    },
    {
      type: "letter",
      symbol: "Vv",
      label: "V",
      category: "Alphabet",
      tags: []
    },
    {
      type: "letter",
      symbol: "Ww",
      label: "W",
      category: "Alphabet",
      tags: []
    },
    {
      type: "letter",
      symbol: "Xx",
      label: "X",
      category: "Alphabet",
      tags: []
    },
    {
      type: "letter",
      symbol: "Yy",
      label: "Y",
      category: "Alphabet",
      tags: []
    },
    {
      type: "letter",
      symbol: "Zz",
      label: "Z",
      category: "Alphabet",
      tags: []
    },  
  
    {
      type: "number",
      symbol: "1",
      label: "One",
      category: "Numbers",
      tags: []
    },
    {
      type: "number",
      symbol: "2",
      label: "Two",
      category: "Numbers",
      tags: []
    },
    {
      type: "number",
      symbol: "3",
      label: "Three",
      category: "Numbers",
      tags: []
    },
    {
      type: "number",
      symbol: "4",
      label: "Four",
      category: "Numbers",
      tags: []
    },
    {
      type: "number",
      symbol: "5",
      label: "Five",
      category: "Numbers",
      tags: []
    },
    {
      type: "number",
      symbol: "6",
      label: "Six",
      category: "Numbers",
      tags: []
    },
    {
      type: "number",
      symbol: "7",
      label: "Seven",
      category: "Numbers",
      tags: []
    },
    {
      type: "number",
      symbol: "8",
      label: "Eight",
      category: "Numbers",
      tags: []
    },
    {
      type: "number",
      symbol: "9",
      label: "Nine",
      category: "Numbers",
      tags: []
    },
    {
      type: "number",
      symbol: "10",
      label: "Ten",
      category: "Numbers",
      tags: []
    },
    {
      type: "number",
      symbol: "11",
      label: "Eleven",
      category: "Numbers",
      tags: []
    },
    {
      type: "number",
      symbol: "12",
      label: "Twelve",
      category: "Numbers",
      tags: []
    },
    {
      type: "number",
      symbol: "13",
      label: "Thirteen",
      category: "Numbers",
      tags: []
    },
    {
      type: "number",
      symbol: "14",
      label: "Fourteen",
      category: "Numbers",
      tags: []
    },
    {
      type: "number",
      symbol: "15",
      label: "Fifteen",
      category: "Numbers",
      tags: []
    },
    {
      type: "number",
      symbol: "16",
      label: "Sixteen",
      category: "Numbers",
      tags: []
    },
    {
      type: "number",
      symbol: "17",
      label: "Seventeen",
      category: "Numbers",
      tags: []
    },
    {
      type: "number",
      symbol: "18",
      label: "Eighteen",
      category: "Numbers",
      tags: []
    },
    {
      type: "number",
      symbol: "19",
      label: "Nineteen",
      category: "Numbers",
      tags: []
    },
    {
      type: "number",
      symbol: "20",
      label: "Twenty",
      category: "Numbers",
      tags: []
    },
    {
      type: "number",
      symbol: "30",
      label: "Thirty",
      category: "Numbers",
      tags: []
    },
    {
      type: "number",
      symbol: "40",
      label: "Forty",
      category: "Numbers",
      tags: []
    },
    {
      type: "number",
      symbol: "50",
      label: "Fifty",
      category: "Numbers",
      tags: []
    },
    {
      type: "number",
      symbol: "60",
      label: "Sixty",
      category: "Numbers",
      tags: []
    },
    {
      type: "number",
      symbol: "70",
      label: "Seventy",
      category: "Numbers",
      tags: []
    },
    {
      type: "number",
      symbol: "80",
      label: "Eighty",
      category: "Numbers",
      tags: []
    },
    {
      type: "number",
      symbol: "90",
      label: "Ninety",
      category: "Numbers",
      tags: []
    },
    {
      type: "number",
      symbol: "100",
      label: "One Hundred",
      category: "Numbers",
      tags: []
    },
    // {
    //   type: "number",
    //   symbol: "1,000",
    //   label: "One Thousand",
    //   category: "Numbers",
    //   tags: []
    // },
    // {
    //   type: "number",
    //   symbol: "10,000",
    //   label: "Ten Thousand",
    //   category: "Numbers",
    //   tags: []
    // },
    // {
    //   type: "number",
    //   symbol: "100,000",
    //   label: "One Hundred Thousand",
    //   category: "Numbers",
    //   tags: []
    // },
    // {
    //   type: "number",
    //   symbol: "1,000,000",
    //   label: "One Million",
    //   category: "Numbers",
    //   tags: []
    // },  
        // 🔴 Red to Orange
  {
    type: "svg",
    symbol: SVG_SHAPE_TEMPLATE("#FF0000"),
    label: "Red",
    category: "Colors",
    tags: []
  },
  {
    type: "svg",
    symbol: SVG_SHAPE_TEMPLATE("#FF4500"),
    label: "Orange Red",
    category: "Colors",
    tags: []
  },
  {
    type: "svg",
    symbol: SVG_SHAPE_TEMPLATE("#FF7F00"),
    label: "Deep Orange",
    category: "Colors",
    tags: []
  },
  {
    type: "svg",
    symbol: SVG_SHAPE_TEMPLATE("#FFA500"),
    label: "Orange",
    category: "Colors",
    tags: []
  },

  // 🟡 Orange to Yellow-Green
  {
    type: "svg",
    symbol: SVG_SHAPE_TEMPLATE("#FFD700"),
    label: "Golden Yellow",
    category: "Colors",
    tags: []
  },
  {
    type: "svg",
    symbol: SVG_SHAPE_TEMPLATE("#FFFF00"),
    label: "Yellow",
    category: "Colors",
    tags: []
  },
  {
    type: "svg",
    symbol: SVG_SHAPE_TEMPLATE("#ADFF2F"),
    label: "Yellow Green",
    category: "Colors",
    tags: []
  },
  {
    type: "svg",
    symbol: SVG_SHAPE_TEMPLATE("#7FFF00"),
    label: "Chartreuse",
    category: "Colors",
    tags: []
  },

  // 🟢 Green to Cyan
  {
    type: "svg",
    symbol: SVG_SHAPE_TEMPLATE("#00FF00"),
    label: "Green",
    category: "Colors",
    tags: []
  },
  {
    type: "svg",
    symbol: SVG_SHAPE_TEMPLATE("#32CD32"),
    label: "Lime Green",
    category: "Colors",
    tags: []
  },
  {
    type: "svg",
    symbol: SVG_SHAPE_TEMPLATE("#00FA9A"),
    label: "Spring Green",
    category: "Colors",
    tags: []
  },
  {
    type: "svg",
    symbol: SVG_SHAPE_TEMPLATE("#00FFFF"),
    label: "Cyan",
    category: "Colors",
    tags: []
  },

  // 🔵 Cyan to Blue
  {
    type: "svg",
    symbol: SVG_SHAPE_TEMPLATE("#00BFFF"),
    label: "Deep Sky Blue",
    category: "Colors",
    tags: []
  },
  {
    type: "svg",
    symbol: SVG_SHAPE_TEMPLATE("#1E90FF"),
    label: "Dodger Blue",
    category: "Colors",
    tags: []
  },
  {
    type: "svg",
    symbol: SVG_SHAPE_TEMPLATE("#0000FF"),
    label: "Blue",
    category: "Colors",
    tags: []
  },
  {
    type: "svg",
    symbol: SVG_SHAPE_TEMPLATE("#4B0082"),
    label: "Indigo",
    category: "Colors",
    tags: []
  },

  // 🟣 Blue to Violet & Magenta
  {
    type: "svg",
    symbol: SVG_SHAPE_TEMPLATE("#8A2BE2"),
    label: "Blue Violet",
    category: "Colors",
    tags: []
  },
  {
    type: "svg",
    symbol: SVG_SHAPE_TEMPLATE("#9400D3"),
    label: "Violet",
    category: "Colors",
    tags: []
  },
  {
    type: "svg",
    symbol: SVG_SHAPE_TEMPLATE("#EE82EE"),
    label: "Lavender",
    category: "Colors",
    tags: []
  },
  {
    type: "svg",
    symbol: SVG_SHAPE_TEMPLATE("#FF00FF"),
    label: "Magenta",
    category: "Colors",
    tags: []
  },

  // 🟤 Red-Violet to Earth Tones
  {
    type: "svg",
    symbol: SVG_SHAPE_TEMPLATE("#C71585"),
    label: "Rose",
    category: "Colors",
    tags: []
  },
  {
    type: "svg",
    symbol: SVG_SHAPE_TEMPLATE("#DC143C"),
    label: "Crimson",
    category: "Colors",
    tags: []
  },
  {
    type: "svg",
    symbol: SVG_SHAPE_TEMPLATE("#800000"),
    label: "Maroon",
    category: "Colors",
    tags: []
  },
  {
    type: "svg",
    symbol: SVG_SHAPE_TEMPLATE("#A52A2A"),
    label: "Brown",
    category: "Colors",
    tags: []
  },


  // ⚪ Neutral Shades
  {
    type: "svg",
    symbol: SVG_SHAPE_TEMPLATE("#D2B48C"),
    label: "Tan",
    category: "Colors",
    tags: []
  },
  {
    type: "svg",
    symbol: SVG_SHAPE_TEMPLATE("#808080"),
    label: "Gray",
    category: "Colors",
    tags: []
  },
  {
    type: "svg",
    symbol: SVG_SHAPE_TEMPLATE("#000000"),
    label: "Black",
    category: "Colors",
    tags: []
  },
  {
    type: "svg",
    symbol: SVG_SHAPE_TEMPLATE("#FFFFFF"),
    label: "White",
    category: "Colors",
    tags: []
  },

  {
    type: 'emoji',
    symbol: '😀',
    hexcode: '1f600',
    category: 'Smileys & Emotion',
    subgroup: 'face-smiling',
    label: 'grinning face',
    tags: [
      'face',
      'grin',
      'smile',
      'happy'
    ],
    shortcodes: [
      ':smile:'
    ],
    emoticons: [
      ':D'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 1,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '😃',
    hexcode: '1f603',
    category: 'Smileys & Emotion',
    subgroup: 'face-smiling',
    label: 'grinning face with big eyes',
    tags: [
      'face',
      'mouth',
      'open',
      'smile',
      'eyes',
      'teeth'
    ],
    shortcodes: [
      ':smile-with-big-eyes:'
    ],
    emoticons: [
      ':-D'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 2,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '😄',
    hexcode: '1f604',
    category: 'Smileys & Emotion',
    subgroup: 'face-smiling',
    label: 'grinning face with smiling eyes',
    tags: [
      'eye',
      'face',
      'mouth',
      'open',
      'smile',
      'happy',
      'teeth'
    ],
    shortcodes: [
      ':grin:'
    ],
    emoticons: [
      '^_^'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '😁',
    hexcode: '1f601',
    category: 'Smileys & Emotion',
    subgroup: 'face-smiling',
    label: 'beaming face with smiling eyes',
    tags: [
      'eye',
      'face',
      'grin',
      'smile',
      'happy',
      'teeth',
      'mouth'
    ],
    shortcodes: [
      ':grinning:'
    ],
    emoticons: [
      '*^_^*'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '😆',
    hexcode: '1f606',
    category: 'Smileys & Emotion',
    subgroup: 'face-smiling',
    label: 'grinning squinting face',
    tags: [
      'face',
      'laugh',
      'mouth',
      'satisfied',
      'smile'
    ],
    shortcodes: [
      ':laughing:'
    ],
    emoticons: [
      'X-D'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 5,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '😅',
    hexcode: '1f605',
    category: 'Smileys & Emotion',
    subgroup: 'face-smiling',
    label: 'grinning face with sweat',
    tags: [
      'cold',
      'face',
      'open',
      'smile',
      'sweat',
      'laugh'
    ],
    shortcodes: [
      ':grin-sweat:'
    ],
    emoticons: [
      '^_^;'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 6,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🤣',
    hexcode: '1f923',
    category: 'Smileys & Emotion',
    subgroup: 'face-smiling',
    label: 'rolling on the floor laughing',
    tags: [
      'face',
      'floor',
      'laugh',
      'rofl',
      'rolling',
      'rotfl',
      'tears'
    ],
    shortcodes: [
      ':rofl:'
    ],
    emoticons: [
      '*>w<*'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 7,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '😂',
    hexcode: '1f602',
    category: 'Smileys & Emotion',
    subgroup: 'face-smiling',
    label: 'face with tears of joy',
    tags: [
      'face',
      'joy',
      'laugh',
      'tear'
    ],
    shortcodes: [
      ':joy:'
    ],
    emoticons: [
      '>w<'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 8,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🙂',
    hexcode: '1f642',
    category: 'Smileys & Emotion',
    subgroup: 'face-smiling',
    label: 'slightly smiling face',
    tags: [
      'face',
      'smile',
      'satisfied'
    ],
    shortcodes: [
      ':slightly-happy:'
    ],
    emoticons: [
      ':)',
      ':-)'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 9,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🙃',
    hexcode: '1f643',
    category: 'Smileys & Emotion',
    subgroup: 'face-smiling',
    label: 'upside-down face',
    tags: [
      'face',
      'upside-down',
      'turn'
    ],
    shortcodes: [
      ':upside-down-face:'
    ],
    emoticons: [
      '(:'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 10,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🫠',
    hexcode: '1fae0',
    category: 'Smileys & Emotion',
    subgroup: 'face-smiling',
    label: 'melting face',
    tags: [
      'disappear',
      'dissolve',
      'liquid',
      'melt'
    ],
    shortcodes: [
      ':melting:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 14,
    order: 11,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '😉',
    hexcode: '1f609',
    category: 'Smileys & Emotion',
    subgroup: 'face-smiling',
    label: 'winking face',
    tags: [
      'face',
      'wink',
      'eye'
    ],
    shortcodes: [
      ':wink:'
    ],
    emoticons: [
      ';)'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 12,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '😊',
    hexcode: '1f60a',
    category: 'Smileys & Emotion',
    subgroup: 'face-smiling',
    label: 'smiling face with smiling eyes',
    tags: [
      'blush',
      'eye',
      'face',
      'smile',
      'satisfied'
    ],
    shortcodes: [
      ':blush:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 13,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '😇',
    hexcode: '1f607',
    category: 'Smileys & Emotion',
    subgroup: 'face-smiling',
    label: 'smiling face with halo',
    tags: [
      'angel',
      'face',
      'fantasy',
      'halo',
      'innocent'
    ],
    shortcodes: [
      ':halo:',
      ':innocent:'
    ],
    emoticons: [
      'O:)'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 14,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🥰',
    hexcode: '1f970',
    category: 'Smileys & Emotion',
    subgroup: 'face-affection',
    label: 'smiling face with hearts',
    tags: [
      'adore',
      'crush',
      'hearts',
      'in love'
    ],
    shortcodes: [
      ':heart-face:',
      ':3-hearts:'
    ],
    emoticons: [
      '<3:)'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 11,
    order: 15,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '😍',
    hexcode: '1f60d',
    category: 'Smileys & Emotion',
    subgroup: 'face-affection',
    label: 'smiling face with heart-eyes',
    tags: [
      'eye',
      'face',
      'love',
      'smile',
      'hearts',
      'happy'
    ],
    shortcodes: [
      ':heart-eyes:'
    ],
    emoticons: [
      '♥_♥'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 16,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🤩',
    hexcode: '1f929',
    category: 'Smileys & Emotion',
    subgroup: 'face-affection',
    label: 'star-struck',
    tags: [
      'eyes',
      'face',
      'grinning',
      'star',
      'surprised'
    ],
    shortcodes: [
      ':star-struck:'
    ],
    emoticons: [
      '*_*'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 5,
    order: 17,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '😘',
    hexcode: '1f618',
    category: 'Smileys & Emotion',
    subgroup: 'face-affection',
    label: 'face blowing a kiss',
    tags: [
      'face',
      'kiss',
      'love',
      'happy'
    ],
    shortcodes: [
      ':kissing-heart:'
    ],
    emoticons: [
      ';*'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 18,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '😗',
    hexcode: '1f617',
    category: 'Smileys & Emotion',
    subgroup: 'face-affection',
    label: 'kissing face',
    tags: [
      'face',
      'kiss'
    ],
    shortcodes: [
      ':kissing:'
    ],
    emoticons: [
      ':*'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 19,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '☺️',
    hexcode: '263a',
    category: 'Smileys & Emotion',
    subgroup: 'face-affection',
    label: 'smiling face',
    tags: [
      'face',
      'outlined',
      'relaxed',
      'smile',
      'satisfied'
    ],
    shortcodes: [
      ':warm-smile:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 21,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '😚',
    hexcode: '1f61a',
    category: 'Smileys & Emotion',
    subgroup: 'face-affection',
    label: 'kissing face with closed eyes',
    tags: [
      'closed',
      'eye',
      'face',
      'kiss',
      'love',
      'happy'
    ],
    shortcodes: [
      ':kissing-closed-eyes:'
    ],
    emoticons: [
      ':**'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 22,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '😙',
    hexcode: '1f619',
    category: 'Smileys & Emotion',
    subgroup: 'face-affection',
    label: 'kissing face with smiling eyes',
    tags: [
      'eye',
      'face',
      'kiss',
      'smile'
    ],
    shortcodes: [
      ':kissing-smiling-eyes:'
    ],
    emoticons: [
      '^3^'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 23,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🥲',
    hexcode: '1f972',
    category: 'Smileys & Emotion',
    subgroup: 'face-affection',
    label: 'smiling face with tear',
    tags: [
      'grateful',
      'proud',
      'relieved',
      'smiling',
      'tear',
      'touched'
    ],
    shortcodes: [
      ':happy-cry:'
    ],
    emoticons: [
      ':,)'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 13,
    order: 24,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '😋',
    hexcode: '1f60b',
    category: 'Smileys & Emotion',
    subgroup: 'face-tongue',
    label: 'face savoring food',
    tags: [
      'delicious',
      'face',
      'savouring',
      'smile',
      'yum',
      'yummy',
      'tongue'
    ],
    shortcodes: [
      ':yum:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 25,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '😛',
    hexcode: '1f61b',
    category: 'Smileys & Emotion',
    subgroup: 'face-tongue',
    label: 'face with tongue',
    tags: [
      'face',
      'tongue'
    ],
    shortcodes: [
      ':stuck-out-tongue:'
    ],
    emoticons: [
      ':P',
      ':p',
      ':-P',
      ':-p'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 26,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '😜',
    hexcode: '1f61c',
    category: 'Smileys & Emotion',
    subgroup: 'face-tongue',
    label: 'winking face with tongue',
    tags: [
      'eye',
      'face',
      'joke',
      'tongue',
      'wink'
    ],
    shortcodes: [
      ':winky-tongue:'
    ],
    emoticons: [
      ';p'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 27,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🤪',
    hexcode: '1f92a',
    category: 'Smileys & Emotion',
    subgroup: 'face-tongue',
    label: 'zany face',
    tags: [
      'eye',
      'goofy',
      'large',
      'small'
    ],
    shortcodes: [
      ':zany-face:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 5,
    order: 28,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '😝',
    hexcode: '1f61d',
    category: 'Smileys & Emotion',
    subgroup: 'face-tongue',
    label: 'squinting face with tongue',
    tags: [
      'eye',
      'face',
      'horrible',
      'taste',
      'tongue'
    ],
    shortcodes: [
      ':squinting-tongue:'
    ],
    emoticons: [
      '>q<'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 29,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🤑',
    hexcode: '1f911',
    category: 'Smileys & Emotion',
    subgroup: 'face-tongue',
    label: 'money-mouth face',
    tags: [
      'face',
      'money',
      'mouth',
      'tongue',
      'dollar'
    ],
    shortcodes: [
      ':money-face:'
    ],
    emoticons: [
      '$_$'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 30,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🤗',
    hexcode: '1f917',
    category: 'Smileys & Emotion',
    subgroup: 'face-hand',
    label: 'smiling face with open hands',
    tags: [
      'face',
      'hug',
      'hugging',
      'open hands',
      'smiling face',
      'hands'
    ],
    shortcodes: [
      ':hug-face:'
    ],
    emoticons: [
      '\\(^o^)/'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 31,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🤭',
    hexcode: '1f92d',
    category: 'Smileys & Emotion',
    subgroup: 'face-hand',
    label: 'face with hand over mouth',
    tags: [
      'whoops',
      'hand',
      'mouth',
      'smile',
      'giggling',
      'covering'
    ],
    shortcodes: [
      ':smiling-eyes-with-hand-over-mouth:',
      ':chuckling:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 5,
    order: 32,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🫢',
    hexcode: '1fae2',
    category: 'Smileys & Emotion',
    subgroup: 'face-hand',
    label: 'face with open eyes and hand over mouth',
    tags: [
      'amazement',
      'awe',
      'disbelief',
      'embarrass',
      'scared',
      'surprise'
    ],
    shortcodes: [
      ':hand-over-mouth:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 14,
    order: 33,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🫣',
    hexcode: '1fae3',
    category: 'Smileys & Emotion',
    subgroup: 'face-hand',
    label: 'face with peeking eye',
    tags: [
      'captivated',
      'peep',
      'stare'
    ],
    shortcodes: [
      ':peeking:'
    ],
    emoticons: [
      '(*/。＼)'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 14,
    order: 34,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🤫',
    hexcode: '1f92b',
    category: 'Smileys & Emotion',
    subgroup: 'face-hand',
    label: 'shushing face',
    tags: [
      'quiet',
      'shush',
      'hand',
      'silent'
    ],
    shortcodes: [
      ':shushing-face:'
    ],
    emoticons: [
      '(￣b￣)'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 5,
    order: 35,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🤔',
    hexcode: '1f914',
    category: 'Smileys & Emotion',
    subgroup: 'face-hand',
    label: 'thinking face',
    tags: [
      'face',
      'thinking',
      'hand',
      'chin',
      'overthinking',
      'frown',
      'curious'
    ],
    shortcodes: [
      ':thinking-face:'
    ],
    emoticons: [
      '=L'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 36,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🫡',
    hexcode: '1fae1',
    category: 'Smileys & Emotion',
    subgroup: 'face-hand',
    label: 'saluting face',
    tags: [
      'ok',
      'salute',
      'sunny',
      'troops',
      'yes'
    ],
    shortcodes: [
      ':salute:'
    ],
    emoticons: [
      '(・д・ゝ）'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 14,
    order: 37,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🤐',
    hexcode: '1f910',
    category: 'Smileys & Emotion',
    subgroup: 'face-neutral-skeptical',
    label: 'zipper-mouth face',
    tags: [
      'face',
      'mouth',
      'zipper'
    ],
    shortcodes: [
      ':zipper-face:'
    ],
    emoticons: [
      ':#'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 38,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🤨',
    hexcode: '1f928',
    category: 'Smileys & Emotion',
    subgroup: 'face-neutral-skeptical',
    label: 'face with raised eyebrow',
    tags: [
      'distrust',
      'skeptic',
      'suspicious'
    ],
    shortcodes: [
      ':raised-eyebrow:'
    ],
    emoticons: [
      '(',
      '͝סּ',
      '͜ʖ͡סּ)'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 5,
    order: 39,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '😐️',
    hexcode: '1f610',
    category: 'Smileys & Emotion',
    subgroup: 'face-neutral-skeptical',
    label: 'neutral face',
    tags: [
      'deadpan',
      'face',
      'meh',
      'neutral',
      'poker face'
    ],
    shortcodes: [
      ':neutral-face:'
    ],
    emoticons: [
      ':|'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 40,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '😑',
    hexcode: '1f611',
    category: 'Smileys & Emotion',
    subgroup: 'face-neutral-skeptical',
    label: 'expressionless face',
    tags: [
      'expressionless',
      'face',
      'inexpressive',
      'meh',
      'unexpressive',
      'unamused',
      'annoyed'
    ],
    shortcodes: [
      ':expressionless:'
    ],
    emoticons: [
      '-_-'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 41,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '😶',
    hexcode: '1f636',
    category: 'Smileys & Emotion',
    subgroup: 'face-neutral-skeptical',
    label: 'face without mouth',
    tags: [
      'face',
      'mouth',
      'quiet',
      'silent',
      'shhh'
    ],
    shortcodes: [
      ':mouth-none:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 42,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🫥',
    hexcode: '1fae5',
    category: 'Smileys & Emotion',
    subgroup: 'face-neutral-skeptical',
    label: 'dotted line face',
    tags: [
      'depressed',
      'disappear',
      'hide',
      'introvert',
      'invisible'
    ],
    shortcodes: [
      ':dotted-line-face:',
      ':invisible:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 14,
    order: 43,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '😶‍🌫️',
    hexcode: '1f636-200d-1f32b-fe0f',
    category: 'Smileys & Emotion',
    subgroup: 'face-neutral-skeptical',
    label: 'face in clouds',
    tags: [
      'absentminded',
      'face in the fog',
      'head in clouds'
    ],
    shortcodes: [
      ':face-in-clouds:',
      ':lost:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 13.1,
    order: 44,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '😏',
    hexcode: '1f60f',
    category: 'Smileys & Emotion',
    subgroup: 'face-neutral-skeptical',
    label: 'smirking face',
    tags: [
      'face',
      'smirk'
    ],
    shortcodes: [
      ':smirk:'
    ],
    emoticons: [
      '>~>'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 46,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '😒',
    hexcode: '1f612',
    category: 'Smileys & Emotion',
    subgroup: 'face-neutral-skeptical',
    label: 'unamused face',
    tags: [
      'face',
      'unamused',
      'unhappy'
    ],
    shortcodes: [
      ':unamused:'
    ],
    emoticons: [
      '>->'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 47,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🙄',
    hexcode: '1f644',
    category: 'Smileys & Emotion',
    subgroup: 'face-neutral-skeptical',
    label: 'face with rolling eyes',
    tags: [
      'eyeroll',
      'eyes',
      'face',
      'rolling',
      'annoyed'
    ],
    shortcodes: [
      ':rolling-eyes:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 48,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '😬',
    hexcode: '1f62c',
    category: 'Smileys & Emotion',
    subgroup: 'face-neutral-skeptical',
    label: 'grimacing face',
    tags: [
      'face',
      'grimace',
      'awkward'
    ],
    shortcodes: [
      ':grimacing:'
    ],
    emoticons: [
      ':-|'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 49,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '😮‍💨',
    hexcode: '1f62e-200d-1f4a8',
    category: 'Smileys & Emotion',
    subgroup: 'face-neutral-skeptical',
    label: 'face exhaling',
    tags: [
      'exhale',
      'gasp',
      'groan',
      'relief',
      'whisper',
      'whistle'
    ],
    shortcodes: [
      ':exhale:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 13.1,
    order: 50,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🤥',
    hexcode: '1f925',
    category: 'Smileys & Emotion',
    subgroup: 'face-neutral-skeptical',
    label: 'lying face',
    tags: [
      'face',
      'lie',
      'pinocchio',
      'nose',
      'long'
    ],
    shortcodes: [
      ':liar:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 51,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🫨',
    hexcode: '1fae8',
    category: 'Smileys & Emotion',
    subgroup: 'face-neutral-skeptical',
    label: 'shaking face',
    tags: [
      'earthquake',
      'face',
      'shaking',
      'shock',
      'vibrate'
    ],
    shortcodes: [
      ':shaking-face:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 15,
    order: 52,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '😌',
    hexcode: '1f60c',
    category: 'Smileys & Emotion',
    subgroup: 'face-sleepy',
    label: 'relieved face',
    tags: [
      'face',
      'relieved'
    ],
    shortcodes: [
      ':relieved:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 53,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '😔',
    hexcode: '1f614',
    category: 'Smileys & Emotion',
    subgroup: 'face-sleepy',
    label: 'pensive face',
    tags: [
      'dejected',
      'face',
      'pensive'
    ],
    shortcodes: [
      ':pensive:'
    ],
    emoticons: [
      '._.'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 54,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '😪',
    hexcode: '1f62a',
    category: 'Smileys & Emotion',
    subgroup: 'face-sleepy',
    label: 'sleepy face',
    tags: [
      'face',
      'good night',
      'sleep',
      'snot bubble',
      'side-tear'
    ],
    shortcodes: [
      ':sleepy:'
    ],
    emoticons: [
      '(-.-)zzZZ'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 55,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🤤',
    hexcode: '1f924',
    category: 'Smileys & Emotion',
    subgroup: 'face-sleepy',
    label: 'drooling face',
    tags: [
      'drooling',
      'face',
      'hungry',
      'yummy'
    ],
    shortcodes: [
      ':drool:'
    ],
    emoticons: [
      '(¯﹃¯)'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 56,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '😴',
    hexcode: '1f634',
    category: 'Smileys & Emotion',
    subgroup: 'face-sleepy',
    label: 'sleeping face',
    tags: [
      'face',
      'good night',
      'sleep',
      'zzz',
      'tired'
    ],
    shortcodes: [
      ':sleep:',
      ':tired:'
    ],
    emoticons: [
      'Z_Z'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 57,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '😷',
    hexcode: '1f637',
    category: 'Smileys & Emotion',
    subgroup: 'face-unwell',
    label: 'face with medical mask',
    tags: [
      'cold',
      'doctor',
      'face',
      'mask',
      'sick',
      'ill'
    ],
    shortcodes: [
      ':mask:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 58,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🤒',
    hexcode: '1f912',
    category: 'Smileys & Emotion',
    subgroup: 'face-unwell',
    label: 'face with thermometer',
    tags: [
      'face',
      'ill',
      'sick',
      'thermometer',
      'fever'
    ],
    shortcodes: [
      ':thermometer-face:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 59,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🤕',
    hexcode: '1f915',
    category: 'Smileys & Emotion',
    subgroup: 'face-unwell',
    label: 'face with head-bandage',
    tags: [
      'bandage',
      'face',
      'hurt',
      'injury',
      'head'
    ],
    shortcodes: [
      ':bandage-face:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 60,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🤢',
    hexcode: '1f922',
    category: 'Smileys & Emotion',
    subgroup: 'face-unwell',
    label: 'nauseated face',
    tags: [
      'face',
      'nauseated',
      'vomit',
      'green'
    ],
    shortcodes: [
      ':sick:',
      ':nauseated:'
    ],
    emoticons: [
      ':-###'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 61,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🤮',
    hexcode: '1f92e',
    category: 'Smileys & Emotion',
    subgroup: 'face-unwell',
    label: 'face vomiting',
    tags: [
      'puke',
      'sick',
      'vomit'
    ],
    shortcodes: [
      ':vomit:'
    ],
    emoticons: [
      ':-O##'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 5,
    order: 62,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🤧',
    hexcode: '1f927',
    category: 'Smileys & Emotion',
    subgroup: 'face-unwell',
    label: 'sneezing face',
    tags: [
      'face',
      'gesundheit',
      'sneeze',
      'tissue'
    ],
    shortcodes: [
      ':sneeze:'
    ],
    emoticons: [
      '(*´台｀*)'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 63,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🥵',
    hexcode: '1f975',
    category: 'Smileys & Emotion',
    subgroup: 'face-unwell',
    label: 'hot face',
    tags: [
      'feverish',
      'heat stroke',
      'hot',
      'red-faced',
      'sweating'
    ],
    shortcodes: [
      ':hot-face:',
      ':sweat-face:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 11,
    order: 64,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🥶',
    hexcode: '1f976',
    category: 'Smileys & Emotion',
    subgroup: 'face-unwell',
    label: 'cold face',
    tags: [
      'blue-faced',
      'cold',
      'freezing',
      'frostbite',
      'icicles'
    ],
    shortcodes: [
      ':cold-face:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 11,
    order: 65,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🥴',
    hexcode: '1f974',
    category: 'Smileys & Emotion',
    subgroup: 'face-unwell',
    label: 'woozy face',
    tags: [
      'dizzy',
      'intoxicated',
      'tipsy',
      'uneven eyes',
      'wavy mouth'
    ],
    shortcodes: [
      ':woozy:'
    ],
    emoticons: [
      '>﹏☉'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 11,
    order: 66,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '😵',
    hexcode: '1f635',
    category: 'Smileys & Emotion',
    subgroup: 'face-unwell',
    label: 'face with crossed-out eyes',
    tags: [
      'crossed-out eyes',
      'dead',
      'face',
      'knocked out',
      'dead eyes'
    ],
    shortcodes: [
      ':x-eyes:'
    ],
    emoticons: [
      'X_o'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 67,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '😵‍💫',
    hexcode: '1f635-200d-1f4ab',
    category: 'Smileys & Emotion',
    subgroup: 'face-unwell',
    label: 'face with spiral eyes',
    tags: [
      'dizzy',
      'hypnotized',
      'spiral',
      'trouble',
      'whoa'
    ],
    shortcodes: [
      ':dizzy-face:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 13.1,
    order: 68,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🤯',
    hexcode: '1f92f',
    category: 'Smileys & Emotion',
    subgroup: 'face-unwell',
    label: 'exploding head',
    tags: [
      'mind blown',
      'shocked',
      'explosion'
    ],
    shortcodes: [
      ':mind-blown:',
      ':exploding-head:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 5,
    order: 69,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🤠',
    hexcode: '1f920',
    category: 'Smileys & Emotion',
    subgroup: 'face-hat',
    label: 'cowboy hat face',
    tags: [
      'cowboy',
      'cowgirl',
      'face',
      'hat',
      'howdy'
    ],
    shortcodes: [
      ':cowboy:'
    ],
    emoticons: [
      '<):)'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 70,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🥳',
    hexcode: '1f973',
    category: 'Smileys & Emotion',
    subgroup: 'face-hat',
    label: 'partying face',
    tags: [
      'celebration',
      'hat',
      'horn',
      'party'
    ],
    shortcodes: [
      ':partying-face:'
    ],
    emoticons: [
      '(ﾉ◕ヮ◕)♬♪'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 11,
    order: 71,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🥸',
    hexcode: '1f978',
    category: 'Smileys & Emotion',
    subgroup: 'face-hat',
    label: 'disguised face',
    tags: [
      'disguise',
      'face',
      'glasses',
      'incognito',
      'nose'
    ],
    shortcodes: [
      ':disguise:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 13,
    order: 72,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '😎',
    hexcode: '1f60e',
    category: 'Smileys & Emotion',
    subgroup: 'face-glasses',
    label: 'smiling face with sunglasses',
    tags: [
      'bright',
      'cool',
      'face',
      'sun',
      'sunglasses'
    ],
    shortcodes: [
      ':sunglasses-face:'
    ],
    emoticons: [
      'B-)'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 73,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🤓',
    hexcode: '1f913',
    category: 'Smileys & Emotion',
    subgroup: 'face-glasses',
    label: 'nerd face',
    tags: [
      'face',
      'geek',
      'nerd',
      'glasses',
      'learning'
    ],
    shortcodes: [
      ':nerd-face:'
    ],
    emoticons: [
      ':-B'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 74,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🧐',
    hexcode: '1f9d0',
    category: 'Smileys & Emotion',
    subgroup: 'face-glasses',
    label: 'face with monocle',
    tags: [
      'face',
      'monocle',
      'stuffy',
      'glasses',
      'intelligent'
    ],
    shortcodes: [
      ':monocle:'
    ],
    emoticons: [
      'o~O'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 5,
    order: 75,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '😕',
    hexcode: '1f615',
    category: 'Smileys & Emotion',
    subgroup: 'face-concerned',
    label: 'confused face',
    tags: [
      'confused',
      'face',
      'meh',
      'frown'
    ],
    shortcodes: [
      ':slightly-frowning:'
    ],
    emoticons: [
      ':-/'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 76,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🫤',
    hexcode: '1fae4',
    category: 'Smileys & Emotion',
    subgroup: 'face-concerned',
    label: 'face with diagonal mouth',
    tags: [
      'disappointed',
      'meh',
      'skeptical',
      'unsure'
    ],
    shortcodes: [
      ':diagonal-mouth:'
    ],
    emoticons: [
      ':/'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 14,
    order: 77,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '😟',
    hexcode: '1f61f',
    category: 'Smileys & Emotion',
    subgroup: 'face-concerned',
    label: 'worried face',
    tags: [
      'face',
      'worried',
      'sad'
    ],
    shortcodes: [
      ':worried:'
    ],
    emoticons: [
      ':S'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 78,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🙁',
    hexcode: '1f641',
    category: 'Smileys & Emotion',
    subgroup: 'face-concerned',
    label: 'slightly frowning face',
    tags: [
      'face',
      'frown'
    ],
    shortcodes: [
      ':frown:'
    ],
    emoticons: [
      ':('
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 79,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '☹️',
    hexcode: '2639',
    category: 'Smileys & Emotion',
    subgroup: 'face-concerned',
    label: 'frowning face',
    tags: [
      'face',
      'frown',
      'negative',
      'sad'
    ],
    shortcodes: [
      ':big-frown:'
    ],
    emoticons: [
      ':-('
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 81,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '😮',
    hexcode: '1f62e',
    category: 'Smileys & Emotion',
    subgroup: 'face-concerned',
    label: 'face with open mouth',
    tags: [
      'face',
      'mouth',
      'open',
      'sympathy'
    ],
    shortcodes: [
      ':mouth-open:'
    ],
    emoticons: [
      ':O'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 82,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '😯',
    hexcode: '1f62f',
    category: 'Smileys & Emotion',
    subgroup: 'face-concerned',
    label: 'hushed face',
    tags: [
      'face',
      'hushed',
      'stunned',
      'surprised'
    ],
    shortcodes: [
      ':surprised:',
      ':hushed:'
    ],
    emoticons: [
      ':o'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 83,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '😲',
    hexcode: '1f632',
    category: 'Smileys & Emotion',
    subgroup: 'face-concerned',
    label: 'astonished face',
    tags: [
      'astonished',
      'face',
      'shocked',
      'totally'
    ],
    shortcodes: [
      ':astonished:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 84,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '😳',
    hexcode: '1f633',
    category: 'Smileys & Emotion',
    subgroup: 'face-concerned',
    label: 'flushed face',
    tags: [
      'dazed',
      'face',
      'flushed',
      'red jaws'
    ],
    shortcodes: [
      ':flushed:'
    ],
    emoticons: [
      '8‑0'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 85,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🥺',
    hexcode: '1f97a',
    category: 'Smileys & Emotion',
    subgroup: 'face-concerned',
    label: 'pleading face',
    tags: [
      'begging',
      'mercy',
      'puppy eyes'
    ],
    shortcodes: [
      ':pleading:'
    ],
    emoticons: [
      '◕﹏◕'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 11,
    order: 86,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🥹',
    hexcode: '1f979',
    category: 'Smileys & Emotion',
    subgroup: 'face-concerned',
    label: 'face holding back tears',
    tags: [
      'angry',
      'cry',
      'proud',
      'resist',
      'sad'
    ],
    shortcodes: [
      ':holding-back-tears:'
    ],
    emoticons: [
      '(；人；)'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 14,
    order: 87,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '😦',
    hexcode: '1f626',
    category: 'Smileys & Emotion',
    subgroup: 'face-concerned',
    label: 'frowning face with open mouth',
    tags: [
      'face',
      'frown',
      'mouth',
      'open'
    ],
    shortcodes: [
      ':gasp:'
    ],
    emoticons: [
      'D='
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 88,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '😧',
    hexcode: '1f627',
    category: 'Smileys & Emotion',
    subgroup: 'face-concerned',
    label: 'anguished face',
    tags: [
      'anguished',
      'face'
    ],
    shortcodes: [
      ':anguished:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 89,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '😨',
    hexcode: '1f628',
    category: 'Smileys & Emotion',
    subgroup: 'face-concerned',
    label: 'fearful face',
    tags: [
      'face',
      'fear',
      'fearful',
      'scared'
    ],
    shortcodes: [
      ':scared:'
    ],
    emoticons: [
      'D-:'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 90,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '😰',
    hexcode: '1f630',
    category: 'Smileys & Emotion',
    subgroup: 'face-concerned',
    label: 'anxious face with sweat',
    tags: [
      'blue',
      'cold',
      'face',
      'rushed',
      'sweat',
      'anxious',
      'worried',
      'considerate'
    ],
    shortcodes: [
      ':anxious-with-sweat:'
    ],
    emoticons: [
      'D-\':'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 91,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '😥',
    hexcode: '1f625',
    category: 'Smileys & Emotion',
    subgroup: 'face-concerned',
    label: 'sad but relieved face',
    tags: [
      'disappointed',
      'face',
      'relieved',
      'whew',
      'anxious'
    ],
    shortcodes: [
      ':concerned:'
    ],
    emoticons: [
      '•_•\''
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 92,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '😢',
    hexcode: '1f622',
    category: 'Smileys & Emotion',
    subgroup: 'face-concerned',
    label: 'crying face',
    tags: [
      'cry',
      'face',
      'sad',
      'tear'
    ],
    shortcodes: [
      ':cry:'
    ],
    emoticons: [
      ':\'('
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 93,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '😭',
    hexcode: '1f62d',
    category: 'Smileys & Emotion',
    subgroup: 'face-concerned',
    label: 'loudly crying face',
    tags: [
      'cry',
      'face',
      'sad',
      'sob',
      'tear'
    ],
    shortcodes: [
      ':loudly-crying:'
    ],
    emoticons: [
      ';_;'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 94,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '😱',
    hexcode: '1f631',
    category: 'Smileys & Emotion',
    subgroup: 'face-concerned',
    label: 'face screaming in fear',
    tags: [
      'face',
      'fear',
      'munch',
      'scared',
      'scream',
      'open mouth'
    ],
    shortcodes: [
      ':screaming:'
    ],
    emoticons: [
      '@0@'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 95,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '😖',
    hexcode: '1f616',
    category: 'Smileys & Emotion',
    subgroup: 'face-concerned',
    label: 'confounded face',
    tags: [
      'confounded',
      'face'
    ],
    shortcodes: [
      ':scrunched-mouth:',
      ':confounded:',
      ':zigzag-mouth:'
    ],
    emoticons: [
      '>:['
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 96,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '😣',
    hexcode: '1f623',
    category: 'Smileys & Emotion',
    subgroup: 'face-concerned',
    label: 'persevering face',
    tags: [
      'face',
      'persevere',
      'ouch'
    ],
    shortcodes: [
      ':scrunched-eyes:',
      ':persevering:'
    ],
    emoticons: [
      '>:('
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 97,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '😞',
    hexcode: '1f61e',
    category: 'Smileys & Emotion',
    subgroup: 'face-concerned',
    label: 'disappointed face',
    tags: [
      'disappointed',
      'face'
    ],
    shortcodes: [
      ':sad:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 98,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '😓',
    hexcode: '1f613',
    category: 'Smileys & Emotion',
    subgroup: 'face-concerned',
    label: 'downcast face with sweat',
    tags: [
      'cold',
      'face',
      'sweat'
    ],
    shortcodes: [
      ':sweat:',
      ':downcast:'
    ],
    emoticons: [
      '(0へ0)'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 99,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '😩',
    hexcode: '1f629',
    category: 'Smileys & Emotion',
    subgroup: 'face-concerned',
    label: 'weary face',
    tags: [
      'face',
      'tired',
      'weary',
      'distraught'
    ],
    shortcodes: [
      ':weary:'
    ],
    emoticons: [
      'D:'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 100,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '😫',
    hexcode: '1f62b',
    category: 'Smileys & Emotion',
    subgroup: 'face-concerned',
    label: 'tired face',
    tags: [
      'face',
      'tired',
      'exhausted'
    ],
    shortcodes: [
      ':distraught:'
    ],
    emoticons: [
      'D-X'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 101,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🥱',
    hexcode: '1f971',
    category: 'Smileys & Emotion',
    subgroup: 'face-concerned',
    label: 'yawning face',
    tags: [
      'bored',
      'tired',
      'yawn'
    ],
    shortcodes: [
      ':yawn:'
    ],
    emoticons: [
      '~O~'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12,
    order: 102,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '😤',
    hexcode: '1f624',
    category: 'Smileys & Emotion',
    subgroup: 'face-negative',
    label: 'face with steam from nose',
    tags: [
      'face',
      'triumph',
      'won'
    ],
    shortcodes: [
      ':triumph:'
    ],
    emoticons: [
      '(((╬◣﹏◢)))'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 103,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '😡',
    hexcode: '1f621',
    category: 'Smileys & Emotion',
    subgroup: 'face-negative',
    label: 'enraged face',
    tags: [
      'angry',
      'enraged',
      'face',
      'mad',
      'pouting',
      'rage',
      'red'
    ],
    shortcodes: [
      ':rage:'
    ],
    emoticons: [
      '>:O'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 104,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '😠',
    hexcode: '1f620',
    category: 'Smileys & Emotion',
    subgroup: 'face-negative',
    label: 'angry face',
    tags: [
      'anger',
      'angry',
      'face',
      'mad'
    ],
    shortcodes: [
      ':angry:'
    ],
    emoticons: [
      'X-('
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 105,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🤬',
    hexcode: '1f92c',
    category: 'Smileys & Emotion',
    subgroup: 'face-negative',
    label: 'face with Symbols on mouth',
    tags: [
      'swearing',
      'angry'
    ],
    shortcodes: [
      ':cursing:'
    ],
    emoticons: [
      '#$@!'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 5,
    order: 106,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '😈',
    hexcode: '1f608',
    category: 'Smileys & Emotion',
    subgroup: 'face-negative',
    label: 'smiling face with horns',
    tags: [
      'face',
      'fairy tale',
      'fantasy',
      'horns',
      'smile',
      'malicious',
      'sardonic'
    ],
    shortcodes: [
      ':imp-smile:'
    ],
    emoticons: [
      '3:)'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 107,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '👿',
    hexcode: '1f47f',
    category: 'Smileys & Emotion',
    subgroup: 'face-negative',
    label: 'angry face with horns',
    tags: [
      'demon',
      'devil',
      'face',
      'fantasy',
      'imp',
      'mean'
    ],
    shortcodes: [
      ':imp-frown:'
    ],
    emoticons: [
      '3:('
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 108,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '💀',
    hexcode: '1f480',
    category: 'Smileys & Emotion',
    subgroup: 'face-negative',
    label: 'skull',
    tags: [
      'death',
      'face',
      'fairy tale',
      'monster',
      'skull'
    ],
    shortcodes: [
      ':skull:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 109,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '☠️',
    hexcode: '2620',
    category: 'Smileys & Emotion',
    subgroup: 'face-negative',
    label: 'skull and crossbones',
    tags: [
      'crossbones',
      'death',
      'face',
      'monster',
      'skull'
    ],
    shortcodes: [
      ':skull-and-crossbones:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 111,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '💩',
    hexcode: '1f4a9',
    category: 'Smileys & Emotion',
    subgroup: 'face-costume',
    label: 'pile of poo',
    tags: [
      'dung',
      'face',
      'monster',
      'poo',
      'poop'
    ],
    shortcodes: [
      ':poop:'
    ],
    emoticons: [
      '༼^-^༽'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 112,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🤡',
    hexcode: '1f921',
    category: 'Smileys & Emotion',
    subgroup: 'face-costume',
    label: 'clown face',
    tags: [
      'clown',
      'face'
    ],
    shortcodes: [
      ':clown:'
    ],
    emoticons: [
      ':o)'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 113,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '👹',
    hexcode: '1f479',
    category: 'Smileys & Emotion',
    subgroup: 'face-costume',
    label: 'ogre',
    tags: [
      'creature',
      'face',
      'fairy tale',
      'fantasy',
      'monster'
    ],
    shortcodes: [
      ':ogre:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 114,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '👺',
    hexcode: '1f47a',
    category: 'Smileys & Emotion',
    subgroup: 'face-costume',
    label: 'goblin',
    tags: [
      'creature',
      'face',
      'fairy tale',
      'fantasy',
      'monster'
    ],
    shortcodes: [
      ':goblin:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 115,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '👻',
    hexcode: '1f47b',
    category: 'Smileys & Emotion',
    subgroup: 'face-costume',
    label: 'ghost',
    tags: [
      'creature',
      'face',
      'fairy tale',
      'fantasy',
      'monster',
      'ghost'
    ],
    shortcodes: [
      ':ghost:'
    ],
    emoticons: [
      '⊂(´・◡・⊂)∘˚˳°'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 116,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '👽️',
    hexcode: '1f47d',
    category: 'Smileys & Emotion',
    subgroup: 'face-costume',
    label: 'alien',
    tags: [
      'creature',
      'extraterrestrial',
      'face',
      'fantasy',
      'ufo',
      'alien'
    ],
    shortcodes: [
      ':alien:'
    ],
    emoticons: [
      '(<>..<>)'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 117,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '👾',
    hexcode: '1f47e',
    category: 'Smileys & Emotion',
    subgroup: 'face-costume',
    label: 'alien monster',
    tags: [
      'alien',
      'creature',
      'extraterrestrial',
      'face',
      'monster',
      'ufo'
    ],
    shortcodes: [
      ':alien-monster:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 118,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🤖',
    hexcode: '1f916',
    category: 'Smileys & Emotion',
    subgroup: 'face-costume',
    label: 'robot',
    tags: [
      'face',
      'monster'
    ],
    shortcodes: [
      ':robot:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 119,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '😺',
    hexcode: '1f63a',
    category: 'Smileys & Emotion',
    subgroup: 'cat-face',
    label: 'grinning cat',
    tags: [
      'cat',
      'face',
      'grinning',
      'mouth',
      'open',
      'smile'
    ],
    shortcodes: [
      ':smiley-cat:'
    ],
    emoticons: [
      ':3'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 120,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '😸',
    hexcode: '1f638',
    category: 'Smileys & Emotion',
    subgroup: 'cat-face',
    label: 'grinning cat with smiling eyes',
    tags: [
      'cat',
      'eye',
      'face',
      'grin',
      'smile',
      'grinning'
    ],
    shortcodes: [
      ':smile-cat:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 121,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '😹',
    hexcode: '1f639',
    category: 'Smileys & Emotion',
    subgroup: 'cat-face',
    label: 'cat with tears of joy',
    tags: [
      'cat',
      'face',
      'joy',
      'tear',
      'laughing',
      'smile'
    ],
    shortcodes: [
      ':joy-cat:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 122,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '😻',
    hexcode: '1f63b',
    category: 'Smileys & Emotion',
    subgroup: 'cat-face',
    label: 'smiling cat with heart-eyes',
    tags: [
      'cat',
      'eye',
      'face',
      'heart',
      'love',
      'smile',
      'hearts',
      'red'
    ],
    shortcodes: [
      ':heart-eyes-cat:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 123,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '😼',
    hexcode: '1f63c',
    category: 'Smileys & Emotion',
    subgroup: 'cat-face',
    label: 'cat with wry smile',
    tags: [
      'cat',
      'face',
      'ironic',
      'smile',
      'wry'
    ],
    shortcodes: [
      ':smirk-cat:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 124,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '😽',
    hexcode: '1f63d',
    category: 'Smileys & Emotion',
    subgroup: 'cat-face',
    label: 'kissing cat',
    tags: [
      'cat',
      'eye',
      'face',
      'kiss'
    ],
    shortcodes: [
      ':kissing-cat:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 125,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🙀',
    hexcode: '1f640',
    category: 'Smileys & Emotion',
    subgroup: 'cat-face',
    label: 'weary cat',
    tags: [
      'cat',
      'face',
      'oh',
      'surprised',
      'weary',
      'wow'
    ],
    shortcodes: [
      ':scream-cat:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 126,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '😿',
    hexcode: '1f63f',
    category: 'Smileys & Emotion',
    subgroup: 'cat-face',
    label: 'crying cat',
    tags: [
      'cat',
      'cry',
      'face',
      'sad',
      'tear',
      'unhappy',
      'depressed'
    ],
    shortcodes: [
      ':crying-cat-face:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 127,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '😾',
    hexcode: '1f63e',
    category: 'Smileys & Emotion',
    subgroup: 'cat-face',
    label: 'pouting cat',
    tags: [
      'cat',
      'face',
      'pouting',
      'sad',
      'angry'
    ],
    shortcodes: [
      ':pouting-cat:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 128,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🙈',
    hexcode: '1f648',
    category: 'Smileys & Emotion',
    subgroup: 'monkey-face',
    label: 'see-no-evil monkey',
    tags: [
      'evil',
      'face',
      'forbidden',
      'monkey',
      'see'
    ],
    shortcodes: [
      ':see-no-evil-monkey:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 129,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🙉',
    hexcode: '1f649',
    category: 'Smileys & Emotion',
    subgroup: 'monkey-face',
    label: 'hear-no-evil monkey',
    tags: [
      'evil',
      'face',
      'forbidden',
      'hear',
      'monkey'
    ],
    shortcodes: [
      ':hear-no-evil-monkey:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 130,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🙊',
    hexcode: '1f64a',
    category: 'Smileys & Emotion',
    subgroup: 'monkey-face',
    label: 'speak-no-evil monkey',
    tags: [
      'evil',
      'face',
      'forbidden',
      'monkey',
      'speak'
    ],
    shortcodes: [
      ':speak-no-evil-monkey:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 131,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '💌',
    hexcode: '1f48c',
    category: 'Smileys & Emotion',
    subgroup: 'heart',
    label: 'love letter',
    tags: [
      'heart',
      'letter',
      'love',
      'mail'
    ],
    shortcodes: [
      ':love-letter:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 132,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '💘',
    hexcode: '1f498',
    category: 'Smileys & Emotion',
    subgroup: 'heart',
    label: 'heart with arrow',
    tags: [
      'arrow',
      'cupid',
      'love',
      'inlove'
    ],
    shortcodes: [
      ':cupid:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 133,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '💝',
    hexcode: '1f49d',
    category: 'Smileys & Emotion',
    subgroup: 'heart',
    label: 'heart with ribbon',
    tags: [
      'ribbon',
      'valentine',
      'present',
      'love'
    ],
    shortcodes: [
      ':gift-heart:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 134,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '💖',
    hexcode: '1f496',
    category: 'Smileys & Emotion',
    subgroup: 'heart',
    label: 'sparkling heart',
    tags: [
      'excited',
      'sparkle',
      'love',
      'inlove'
    ],
    shortcodes: [
      ':sparkling-heart:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 135,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '💗',
    hexcode: '1f497',
    category: 'Smileys & Emotion',
    subgroup: 'heart',
    label: 'growing heart',
    tags: [
      'excited',
      'growing',
      'nervous',
      'pulse',
      'love',
      'inlove'
    ],
    shortcodes: [
      ':heart-grow:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 136,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '💓',
    hexcode: '1f493',
    category: 'Smileys & Emotion',
    subgroup: 'heart',
    label: 'beating heart',
    tags: [
      'beating',
      'heartbeat',
      'pulsating',
      'love'
    ],
    shortcodes: [
      ':beating-heart:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 137,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '💞',
    hexcode: '1f49e',
    category: 'Smileys & Emotion',
    subgroup: 'heart',
    label: 'revolving hearts',
    tags: [
      'revolving'
    ],
    shortcodes: [
      ':revolving-hearts:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 138,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '💕',
    hexcode: '1f495',
    category: 'Smileys & Emotion',
    subgroup: 'heart',
    label: 'two hearts',
    tags: [
      'love'
    ],
    shortcodes: [
      ':two-hearts:'
    ],
    emoticons: [
      '<3<3'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 139,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '💟',
    hexcode: '1f49f',
    category: 'Smileys & Emotion',
    subgroup: 'heart',
    label: 'heart decoration',
    tags: [
      'heart'
    ],
    shortcodes: [
      ':heart-box:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 140,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '❣️',
    hexcode: '2763',
    category: 'Smileys & Emotion',
    subgroup: 'heart',
    label: 'heart exclamation',
    tags: [
      'exclamation',
      'mark',
      'punctuation'
    ],
    shortcodes: [
      ':heart-exclamation-point:'
    ],
    emoticons: [
      '<3!'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 142,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '💔',
    hexcode: '1f494',
    category: 'Smileys & Emotion',
    subgroup: 'heart',
    label: 'broken heart',
    tags: [
      'break',
      'broken',
      'heartbreak'
    ],
    shortcodes: [
      ':broken-heart:'
    ],
    emoticons: [
      '</3'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 143,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '❤️‍🔥',
    hexcode: '2764-fe0f-200d-1f525',
    category: 'Smileys & Emotion',
    subgroup: 'heart',
    label: 'heart on fire',
    tags: [
      'burn',
      'heart',
      'love',
      'lust',
      'sacred heart'
    ],
    shortcodes: [
      ':fire-heart:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 13.1,
    order: 144,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '❤️‍🩹',
    hexcode: '2764-fe0f-200d-1fa79',
    category: 'Smileys & Emotion',
    subgroup: 'heart',
    label: 'mending heart',
    tags: [
      'healthier',
      'improving',
      'mending',
      'recovering',
      'recuperating',
      'well'
    ],
    shortcodes: [
      ':bandaged-heart:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 13.1,
    order: 146,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '❤️',
    hexcode: '2764',
    category: 'Smileys & Emotion',
    subgroup: 'heart',
    label: 'red heart',
    tags: [
      'heart',
      'love',
      'red'
    ],
    shortcodes: [
      ':red-heart:'
    ],
    emoticons: [
      '<3'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 149,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🩷',
    hexcode: '1fa77',
    category: 'Smileys & Emotion',
    subgroup: 'heart',
    label: 'pink heart',
    tags: [
      'cute',
      'heart',
      'like',
      'love',
      'pink'
    ],
    shortcodes: [
      ':pink-heart:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 15,
    order: 150,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🧡',
    hexcode: '1f9e1',
    category: 'Smileys & Emotion',
    subgroup: 'heart',
    label: 'orange heart',
    tags: [
      'orange'
    ],
    shortcodes: [
      ':orange-heart:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 5,
    order: 151,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '💛',
    hexcode: '1f49b',
    category: 'Smileys & Emotion',
    subgroup: 'heart',
    label: 'yellow heart',
    tags: [
      'yellow'
    ],
    shortcodes: [
      ':yellow-heart:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 152,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '💚',
    hexcode: '1f49a',
    category: 'Smileys & Emotion',
    subgroup: 'heart',
    label: 'green heart',
    tags: [
      'green'
    ],
    shortcodes: [
      ':green-heart:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 153,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '💙',
    hexcode: '1f499',
    category: 'Smileys & Emotion',
    subgroup: 'heart',
    label: 'blue heart',
    tags: [
      'blue'
    ],
    shortcodes: [
      ':blue-heart:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 154,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🩵',
    hexcode: '1fa75',
    category: 'Smileys & Emotion',
    subgroup: 'heart',
    label: 'light blue heart',
    tags: [
      'cyan',
      'heart',
      'light blue',
      'teal'
    ],
    shortcodes: [
      ':light-blue-heart:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 15,
    order: 155,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '💜',
    hexcode: '1f49c',
    category: 'Smileys & Emotion',
    subgroup: 'heart',
    label: 'purple heart',
    tags: [
      'purple'
    ],
    shortcodes: [
      ':purple-heart:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 156,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🤎',
    hexcode: '1f90e',
    category: 'Smileys & Emotion',
    subgroup: 'heart',
    label: 'brown heart',
    tags: [
      'brown',
      'heart'
    ],
    shortcodes: [
      ':brown-heart:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12,
    order: 157,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🖤',
    hexcode: '1f5a4',
    category: 'Smileys & Emotion',
    subgroup: 'heart',
    label: 'black heart',
    tags: [
      'black',
      'evil',
      'wicked'
    ],
    shortcodes: [
      ':black-heart:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 158,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🩶',
    hexcode: '1fa76',
    category: 'Smileys & Emotion',
    subgroup: 'heart',
    label: 'grey heart',
    tags: [
      'gray',
      'heart',
      'silver',
      'slate'
    ],
    shortcodes: [
      ':grey-heart:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 15,
    order: 159,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🤍',
    hexcode: '1f90d',
    category: 'Smileys & Emotion',
    subgroup: 'heart',
    label: 'white heart',
    tags: [
      'heart',
      'white'
    ],
    shortcodes: [
      ':white-heart:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12,
    order: 160,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '💋',
    hexcode: '1f48b',
    category: 'Smileys & Emotion',
    subgroup: 'emotion',
    label: 'kiss mark',
    tags: [
      'kiss',
      'lips',
      'love'
    ],
    shortcodes: [
      ':kiss:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 161,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '💯',
    hexcode: '1f4af',
    category: 'Smileys & Emotion',
    subgroup: 'emotion',
    label: 'hundred points',
    tags: [
      '100',
      'full',
      'hundred',
      'score',
      'perfect',
      'excellent'
    ],
    shortcodes: [
      ':100:',
      ':one-hundred:',
      ':hundred:',
      ':points:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 162,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '💢',
    hexcode: '1f4a2',
    category: 'Smileys & Emotion',
    subgroup: 'emotion',
    label: 'anger symbol',
    tags: [
      'angry',
      'comic',
      'mad'
    ],
    shortcodes: [
      ':anger:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 163,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '💥',
    hexcode: '1f4a5',
    category: 'Smileys & Emotion',
    subgroup: 'emotion',
    label: 'collision',
    tags: [
      'boom',
      'comic',
      'explosion'
    ],
    shortcodes: [
      ':collision:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 164,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '💫',
    hexcode: '1f4ab',
    category: 'Smileys & Emotion',
    subgroup: 'emotion',
    label: 'dizzy',
    tags: [
      'comic',
      'star',
      'shootingstar'
    ],
    shortcodes: [
      ':dizzy:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 165,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '💦',
    hexcode: '1f4a6',
    category: 'Smileys & Emotion',
    subgroup: 'emotion',
    label: 'sweat droplets',
    tags: [
      'comic',
      'splashing',
      'sweat'
    ],
    shortcodes: [
      ':sweat-droplets:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 166,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '💨',
    hexcode: '1f4a8',
    category: 'Smileys & Emotion',
    subgroup: 'emotion',
    label: 'dashing away',
    tags: [
      'comic',
      'dash',
      'running'
    ],
    shortcodes: [
      ':dash:',
      ':poof:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 167,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🕳️',
    hexcode: '1f573',
    category: 'Smileys & Emotion',
    subgroup: 'emotion',
    label: 'hole',
    tags: [
      'hole'
    ],
    shortcodes: [
      ':hole:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 169,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '💬',
    hexcode: '1f4ac',
    category: 'Smileys & Emotion',
    subgroup: 'emotion',
    label: 'speech balloon',
    tags: [
      'balloon',
      'bubble',
      'comic',
      'dialog',
      'speech',
      'talk'
    ],
    shortcodes: [
      ':speech-bubble:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 170,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '👁️‍🗨️',
    hexcode: '1f441-fe0f-200d-1f5e8-fe0f',
    category: 'Smileys & Emotion',
    subgroup: 'emotion',
    label: 'eye in speech bubble',
    tags: [
      'balloon',
      'bubble',
      'eye',
      'speech',
      'witness',
      'speech bubble'
    ],
    shortcodes: [
      ':eye-bubble:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 2,
    order: 171,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🗨️',
    hexcode: '1f5e8',
    category: 'Smileys & Emotion',
    subgroup: 'emotion',
    label: 'left speech bubble',
    tags: [
      'balloon',
      'bubble',
      'dialog',
      'speech'
    ],
    shortcodes: [
      ':speech-bubble-leftwards:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 2,
    order: 176,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🗯️',
    hexcode: '1f5ef',
    category: 'Smileys & Emotion',
    subgroup: 'emotion',
    label: 'right anger bubble',
    tags: [
      'angry',
      'balloon',
      'bubble',
      'mad'
    ],
    shortcodes: [
      ':anger-bubble:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 178,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '💭',
    hexcode: '1f4ad',
    category: 'Smileys & Emotion',
    subgroup: 'emotion',
    label: 'thought balloon',
    tags: [
      'balloon',
      'bubble',
      'comic',
      'thought',
      'think'
    ],
    shortcodes: [
      ':thought-bubble:',
      ':thought-balloon:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 179,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '💤',
    hexcode: '1f4a4',
    category: 'Smileys & Emotion',
    subgroup: 'emotion',
    label: 'ZZZ',
    tags: [
      'comic',
      'good night',
      'sleep',
      'zzz',
      'night'
    ],
    shortcodes: [
      ':zzz:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 180,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '👋',
    hexcode: '1f44b',
    category: 'People & Body',
    subgroup: 'hand-fingers-open',
    label: 'waving hand',
    tags: [
      'hand',
      'wave',
      'waving',
      'hello',
      'goodbye',
      'waving hand sign'
    ],
    shortcodes: [
      ':wave:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 181,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f44b'
  },
  {
    type: 'emoji',
    symbol: '🤚',
    hexcode: '1f91a',
    category: 'People & Body',
    subgroup: 'hand-fingers-open',
    label: 'raised back of hand',
    tags: [
      'backhand',
      'raised',
      'hand'
    ],
    shortcodes: [
      ':back-hand:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 187,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f91a'
  },
  {
    type: 'emoji',
    symbol: '🖐️',
    hexcode: '1f590',
    category: 'People & Body',
    subgroup: 'hand-fingers-open',
    label: 'hand with fingers splayed',
    tags: [
      'finger',
      'hand',
      'splayed',
      'five hand',
      'five'
    ],
    shortcodes: [
      ':palm:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 194,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f590'
  },
  {
    type: 'emoji',
    symbol: '✋',
    hexcode: '270b',
    category: 'People & Body',
    subgroup: 'hand-fingers-open',
    label: 'raised hand',
    tags: [
      'hand',
      'high 5',
      'high five',
      'raise',
      'raised',
      'raised hand'
    ],
    shortcodes: [
      ':raised-hand:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 200,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '270b'
  },
  {
    type: 'emoji',
    symbol: '🖖',
    hexcode: '1f596',
    category: 'People & Body',
    subgroup: 'hand-fingers-open',
    label: 'vulcan salute',
    tags: [
      'finger',
      'hand',
      'spock',
      'vulcan',
      'fingers',
      'star trek'
    ],
    shortcodes: [
      ':vulcan:',
      ':prosper:',
      ':spock:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 206,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f596'
  },
  {
    type: 'emoji',
    symbol: '🫱',
    hexcode: '1faf1',
    category: 'People & Body',
    subgroup: 'hand-fingers-open',
    label: 'rightwards hand',
    tags: [
      'hand',
      'right',
      'rightward'
    ],
    shortcodes: [
      ':rightwards-hand:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 14,
    order: 212,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1faf1'
  },
  {
    type: 'emoji',
    symbol: '🫲',
    hexcode: '1faf2',
    category: 'People & Body',
    subgroup: 'hand-fingers-open',
    label: 'leftwards hand',
    tags: [
      'hand',
      'left',
      'leftward'
    ],
    shortcodes: [
      ':leftwards-hand:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 14,
    order: 218,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1faf2'
  },
  {
    type: 'emoji',
    symbol: '🫳',
    hexcode: '1faf3',
    category: 'People & Body',
    subgroup: 'hand-fingers-open',
    label: 'palm down hand',
    tags: [
      'dismiss',
      'drop',
      'shoo'
    ],
    shortcodes: [
      ':palm-down:',
      ':drop:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 14,
    order: 224,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1faf3'
  },
  {
    type: 'emoji',
    symbol: '🫴',
    hexcode: '1faf4',
    category: 'People & Body',
    subgroup: 'hand-fingers-open',
    label: 'palm up hand',
    tags: [
      'beckon',
      'catch',
      'come',
      'offer'
    ],
    shortcodes: [
      ':palm-up:',
      ':throw:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 14,
    order: 230,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1faf4'
  },
  {
    type: 'emoji',
    symbol: '🫷',
    hexcode: '1faf7',
    category: 'People & Body',
    subgroup: 'hand-fingers-open',
    label: 'leftwards pushing hand',
    tags: [
      'high five',
      'leftward',
      'push',
      'refuse',
      'stop',
      'wait'
    ],
    shortcodes: [
      ':push-leftwards:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 15,
    order: 236,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1faf7'
  },
  {
    type: 'emoji',
    symbol: '🫸',
    hexcode: '1faf8',
    category: 'People & Body',
    subgroup: 'hand-fingers-open',
    label: 'rightwards pushing hand',
    tags: [
      'high five',
      'push',
      'refuse',
      'rightward',
      'stop',
      'wait'
    ],
    shortcodes: [
      ':push-rightwards:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 15,
    order: 242,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1faf8'
  },
  {
    type: 'emoji',
    symbol: '👌',
    hexcode: '1f44c',
    category: 'People & Body',
    subgroup: 'hand-fingers-partial',
    label: 'OK hand',
    tags: [
      'hand',
      'ok',
      'okay',
      'perfect'
    ],
    shortcodes: [
      ':ok:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 248,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f44c'
  },
  {
    type: 'emoji',
    symbol: '🤌',
    hexcode: '1f90c',
    category: 'People & Body',
    subgroup: 'hand-fingers-partial',
    label: 'pinched fingers',
    tags: [
      'fingers',
      'hand gesture',
      'interrogation',
      'pinched',
      'sarcastic'
    ],
    shortcodes: [
      ':pinched-fingers:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 13,
    order: 254,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f90c'
  },
  {
    type: 'emoji',
    symbol: '🤏',
    hexcode: '1f90f',
    category: 'People & Body',
    subgroup: 'hand-fingers-partial',
    label: 'pinching hand',
    tags: [
      'small amount'
    ],
    shortcodes: [
      ':pinch:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12,
    order: 260,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f90f'
  },
  {
    type: 'emoji',
    symbol: '✌️',
    hexcode: '270c',
    category: 'People & Body',
    subgroup: 'hand-fingers-partial',
    label: 'victory hand',
    tags: [
      'hand',
      'v',
      'victory',
      'air quotes',
      'quotes',
      'peace',
      'peace sign',
      'v sign'
    ],
    shortcodes: [
      ':v:',
      ':peace-hand:',
      ':victory:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 267,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '270c'
  },
  {
    type: 'emoji',
    symbol: '🤞',
    hexcode: '1f91e',
    category: 'People & Body',
    subgroup: 'hand-fingers-partial',
    label: 'crossed fingers',
    tags: [
      'cross',
      'finger',
      'hand',
      'luck',
      'fingers crossed',
      'crossed',
      'fingers',
      'good luck'
    ],
    shortcodes: [
      ':crossed-fingers:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 273,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f91e'
  },
  {
    type: 'emoji',
    symbol: '🫰',
    hexcode: '1faf0',
    category: 'People & Body',
    subgroup: 'hand-fingers-partial',
    label: 'hand with index finger and thumb crossed',
    tags: [
      'expensive',
      'heart',
      'love',
      'money',
      'snap'
    ],
    shortcodes: [
      ':hand-with-index-finger-and-thumb-crossed:',
      ':snap:',
      ':finger-heart:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 14,
    order: 279,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1faf0'
  },
  {
    type: 'emoji',
    symbol: '🤟',
    hexcode: '1f91f',
    category: 'People & Body',
    subgroup: 'hand-fingers-partial',
    label: 'love-you gesture',
    tags: [
      'hand',
      'ily',
      'love',
      'heavy metal'
    ],
    shortcodes: [
      ':love-you-gesture:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 5,
    order: 285,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f91f'
  },
  {
    type: 'emoji',
    symbol: '🤘',
    hexcode: '1f918',
    category: 'People & Body',
    subgroup: 'hand-fingers-partial',
    label: 'sign of the horns',
    tags: [
      'finger',
      'hand',
      'horns',
      'rock-on',
      'rock on',
      'rock',
      'devil',
      'devil fingers',
      'heavy',
      'metal',
      'heavy metal'
    ],
    shortcodes: [
      ':metal:',
      ':horns:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 291,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f918'
  },
  {
    type: 'emoji',
    symbol: '🤙',
    hexcode: '1f919',
    category: 'People & Body',
    subgroup: 'hand-fingers-partial',
    label: 'call me hand',
    tags: [
      'call',
      'hand',
      'hang loose',
      'shaka',
      'call me hand',
      'phone',
      'shaka sign',
      'right on'
    ],
    shortcodes: [
      ':call-me-hand:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 297,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f919'
  },
  {
    type: 'emoji',
    symbol: '👈️',
    hexcode: '1f448',
    category: 'People & Body',
    subgroup: 'hand-single-finger',
    label: 'backhand index pointing left',
    tags: [
      'backhand',
      'finger',
      'hand',
      'index',
      'point',
      'left',
      'point left'
    ],
    shortcodes: [
      ':point-left:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 303,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f448'
  },
  {
    type: 'emoji',
    symbol: '👉️',
    hexcode: '1f449',
    category: 'People & Body',
    subgroup: 'hand-single-finger',
    label: 'backhand index pointing right',
    tags: [
      'backhand',
      'finger',
      'hand',
      'index',
      'point',
      'right',
      'point right'
    ],
    shortcodes: [
      ':point-right:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 309,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f449'
  },
  {
    type: 'emoji',
    symbol: '👆️',
    hexcode: '1f446',
    category: 'People & Body',
    subgroup: 'hand-single-finger',
    label: 'backhand index pointing up',
    tags: [
      'backhand',
      'finger',
      'hand',
      'point',
      'up',
      'index',
      'point up'
    ],
    shortcodes: [
      ':point-up:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 315,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f446'
  },
  {
    type: 'emoji',
    symbol: '🖕',
    hexcode: '1f595',
    category: 'People & Body',
    subgroup: 'hand-single-finger',
    label: 'middle finger',
    tags: [
      'finger',
      'hand',
      'fingering'
    ],
    shortcodes: [
      ':middle-finger:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 321,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f595'
  },
  {
    type: 'emoji',
    symbol: '👇️',
    hexcode: '1f447',
    category: 'People & Body',
    subgroup: 'hand-single-finger',
    label: 'backhand index pointing down',
    tags: [
      'backhand',
      'down',
      'finger',
      'hand',
      'point',
      'index',
      'point down'
    ],
    shortcodes: [
      ':point-down:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 327,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f447'
  },
  {
    type: 'emoji',
    symbol: '☝️',
    hexcode: '261d',
    category: 'People & Body',
    subgroup: 'hand-single-finger',
    label: 'index pointing up',
    tags: [
      'finger',
      'hand',
      'index',
      'point',
      'up'
    ],
    shortcodes: [
      ':index-finger:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 334,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '261d'
  },
  {
    type: 'emoji',
    symbol: '🫵',
    hexcode: '1faf5',
    category: 'People & Body',
    subgroup: 'hand-single-finger',
    label: 'index pointing at the viewer',
    tags: [
      'point',
      'you'
    ],
    shortcodes: [
      ':pointing:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 14,
    order: 340,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1faf5'
  },
  {
    type: 'emoji',
    symbol: '👍️',
    hexcode: '1f44d',
    category: 'People & Body',
    subgroup: 'hand-fingers-closed',
    label: 'thumbs up',
    tags: [
      '+1',
      'hand',
      'thumb',
      'up',
      'like',
      'yes',
      'thumbs up'
    ],
    shortcodes: [
      ':thumbs-up:',
      ':+1:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 346,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f44d'
  },
  {
    type: 'emoji',
    symbol: '👎️',
    hexcode: '1f44e',
    category: 'People & Body',
    subgroup: 'hand-fingers-closed',
    label: 'thumbs down',
    tags: [
      '-1',
      'down',
      'hand',
      'thumb',
      'dislike',
      'no',
      'thumbs down',
      'thumbs down sign',
      'thumbs'
    ],
    shortcodes: [
      ':thumbs-down:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 352,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f44e'
  },
  {
    type: 'emoji',
    symbol: '✊',
    hexcode: '270a',
    category: 'People & Body',
    subgroup: 'hand-fingers-closed',
    label: 'raised fist',
    tags: [
      'clenched',
      'fist',
      'hand',
      'punch'
    ],
    shortcodes: [
      ':raised-fist:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 358,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '270a'
  },
  {
    type: 'emoji',
    symbol: '👊',
    hexcode: '1f44a',
    category: 'People & Body',
    subgroup: 'hand-fingers-closed',
    label: 'oncoming fist',
    tags: [
      'clenched',
      'fist',
      'hand',
      'punch',
      'oncoming fist',
      'brofist',
      'bro',
      'bump'
    ],
    shortcodes: [
      ':fist:',
      ':bump:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 364,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f44a'
  },
  {
    type: 'emoji',
    symbol: '🤛',
    hexcode: '1f91b',
    category: 'People & Body',
    subgroup: 'hand-fingers-closed',
    label: 'left-facing fist',
    tags: [
      'fist',
      'leftwards',
      'left',
      'left-facing fist'
    ],
    shortcodes: [
      ':fist-leftwards:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 370,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f91b'
  },
  {
    type: 'emoji',
    symbol: '🤜',
    hexcode: '1f91c',
    category: 'People & Body',
    subgroup: 'hand-fingers-closed',
    label: 'right-facing fist',
    tags: [
      'fist',
      'rightwards',
      'right',
      'right-facing fist'
    ],
    shortcodes: [
      ':fist-rightwards:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 376,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f91c'
  },
  {
    type: 'emoji',
    symbol: '👏',
    hexcode: '1f44f',
    category: 'People & Body',
    subgroup: 'hands',
    label: 'clapping hands',
    tags: [
      'clap',
      'hand',
      'clapping hands',
      'applause',
      'clapping',
      'golf clap',
      'round of applause'
    ],
    shortcodes: [
      ':clap:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 382,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f44f'
  },
  {
    type: 'emoji',
    symbol: '🙌',
    hexcode: '1f64c',
    category: 'People & Body',
    subgroup: 'hands',
    label: 'raising hands',
    tags: [
      'celebration',
      'gesture',
      'hand',
      'hooray',
      'raised',
      'raising hands',
      'raising',
      'hands',
      'arms in the air',
      'banzai',
      'festivus miracle',
      'hallelujah',
      'praise hands',
      'two hands'
    ],
    shortcodes: [
      ':raising-hands:',
      ':hooray:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 388,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f64c'
  },
  {
    type: 'emoji',
    symbol: '🫶',
    hexcode: '1faf6',
    category: 'People & Body',
    subgroup: 'hands',
    label: 'heart hands',
    tags: [
      'love'
    ],
    shortcodes: [
      ':heart-hands:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 14,
    order: 394,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1faf6'
  },
  {
    type: 'emoji',
    symbol: '👐',
    hexcode: '1f450',
    category: 'People & Body',
    subgroup: 'hands',
    label: 'open hands',
    tags: [
      'hand',
      'open',
      'hug',
      'open hands',
      'hands',
      'jazz hands',
      'jazz'
    ],
    shortcodes: [
      ':open-hands:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 400,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f450'
  },
  {
    type: 'emoji',
    symbol: '🤲',
    hexcode: '1f932',
    category: 'People & Body',
    subgroup: 'hands',
    label: 'palms up together',
    tags: [
      'prayer',
      'pray',
      'god'
    ],
    shortcodes: [
      ':palms-up:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 5,
    order: 406,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f932'
  },
  {
    type: 'emoji',
    symbol: '🤝',
    hexcode: '1f91d',
    category: 'People & Body',
    subgroup: 'hands',
    label: 'handshake',
    tags: [
      'agreement',
      'hand',
      'meeting',
      'shake',
      'shaking hands',
      'hello',
      'bye',
      'goodbye'
    ],
    shortcodes: [
      ':handshake:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 412,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f91d'
  },
  {
    type: 'emoji',
    symbol: '🙏',
    hexcode: '1f64f',
    category: 'People & Body',
    subgroup: 'hands',
    label: 'folded hands',
    tags: [
      'ask',
      'hand',
      'high 5',
      'high five',
      'please',
      'pray',
      'thanks',
      'bow',
      'folded',
      'gesture'
    ],
    shortcodes: [
      ':folded-hands:',
      ':please:',
      ':pray:',
      ':hope:',
      ':wish:',
      ':thank-you:',
      ':high-five:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 438,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f64f'
  },
  {
    type: 'emoji',
    symbol: '✍️',
    hexcode: '270d',
    category: 'People & Body',
    subgroup: 'hand-prop',
    label: 'writing hand',
    tags: [
      'hand',
      'write',
      'writing hand',
      'writing'
    ],
    shortcodes: [
      ':writing-hand:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 445,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '270d'
  },
  {
    type: 'emoji',
    symbol: '💅',
    hexcode: '1f485',
    category: 'People & Body',
    subgroup: 'hand-prop',
    label: 'nail polish',
    tags: [
      'care',
      'cosmetics',
      'manicure',
      'nail',
      'polish'
    ],
    shortcodes: [
      ':nail-care:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 451,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f485'
  },
  {
    type: 'emoji',
    symbol: '🤳',
    hexcode: '1f933',
    category: 'People & Body',
    subgroup: 'hand-prop',
    label: 'selfie',
    tags: [
      'camera',
      'phone'
    ],
    shortcodes: [
      ':selfie:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 457,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f933'
  },
  {
    type: 'emoji',
    symbol: '💪',
    hexcode: '1f4aa',
    category: 'People & Body',
    subgroup: 'body-parts',
    label: 'flexed biceps',
    tags: [
      'biceps',
      'comic',
      'flex',
      'muscle',
      'flexed biceps',
      'flexed',
      'feats of strength',
      'strength',
      'feats',
      'strong'
    ],
    shortcodes: [
      ':muscle:',
      ':flex:',
      ':bicep:',
      ':strong:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 463,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f4aa'
  },
  {
    type: 'emoji',
    symbol: '🦾',
    hexcode: '1f9be',
    category: 'People & Body',
    subgroup: 'body-parts',
    label: 'mechanical arm',
    tags: [
      'accessibility',
      'prosthetic'
    ],
    shortcodes: [
      ':arm-mechanical:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12,
    order: 469,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🦿',
    hexcode: '1f9bf',
    category: 'People & Body',
    subgroup: 'body-parts',
    label: 'mechanical leg',
    tags: [
      'accessibility',
      'prosthetic'
    ],
    shortcodes: [
      ':leg-mechanical:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12,
    order: 470,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🦵',
    hexcode: '1f9b5',
    category: 'People & Body',
    subgroup: 'body-parts',
    label: 'leg',
    tags: [
      'kick',
      'limb'
    ],
    shortcodes: [
      ':leg:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 11,
    order: 471,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f9b5'
  },
  {
    type: 'emoji',
    symbol: '🦶',
    hexcode: '1f9b6',
    category: 'People & Body',
    subgroup: 'body-parts',
    label: 'foot',
    tags: [
      'kick',
      'stomp'
    ],
    shortcodes: [
      ':foot:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 11,
    order: 477,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f9b6'
  },
  {
    type: 'emoji',
    symbol: '👂️',
    hexcode: '1f442',
    category: 'People & Body',
    subgroup: 'body-parts',
    label: 'ear',
    tags: [
      'body',
      'ear',
      'hear',
      'listen'
    ],
    shortcodes: [
      ':ear:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 483,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f442'
  },
  {
    type: 'emoji',
    symbol: '🦻',
    hexcode: '1f9bb',
    category: 'People & Body',
    subgroup: 'body-parts',
    label: 'ear with hearing aid',
    tags: [
      'accessibility',
      'hard of hearing'
    ],
    shortcodes: [
      ':hearing-aid:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12,
    order: 489,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f9bb'
  },
  {
    type: 'emoji',
    symbol: '👃',
    hexcode: '1f443',
    category: 'People & Body',
    subgroup: 'body-parts',
    label: 'nose',
    tags: [
      'body',
      'nose',
      'smell'
    ],
    shortcodes: [
      ':nose:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 495,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f443'
  },
  {
    type: 'emoji',
    symbol: '🧠',
    hexcode: '1f9e0',
    category: 'People & Body',
    subgroup: 'body-parts',
    label: 'brain',
    tags: [
      'intelligent',
      'brain',
      'clever'
    ],
    shortcodes: [
      ':brain:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 5,
    order: 501,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🫀',
    hexcode: '1fac0',
    category: 'People & Body',
    subgroup: 'body-parts',
    label: 'anatomical heart',
    tags: [
      'anatomical',
      'cardiology',
      'heart',
      'organ',
      'pulse',
      'pump',
      'blood',
      'beat'
    ],
    shortcodes: [
      ':anatomical-heart:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 13,
    order: 502,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🫁',
    hexcode: '1fac1',
    category: 'People & Body',
    subgroup: 'body-parts',
    label: 'lungs',
    tags: [
      'breath',
      'exhalation',
      'inhalation',
      'organ',
      'respiration',
      'breathing',
      'air'
    ],
    shortcodes: [
      ':lungs:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 13,
    order: 503,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🦷',
    hexcode: '1f9b7',
    category: 'People & Body',
    subgroup: 'body-parts',
    label: 'tooth',
    tags: [
      'dentist'
    ],
    shortcodes: [
      ':tooth:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 11,
    order: 504,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🦴',
    hexcode: '1f9b4',
    category: 'People & Body',
    subgroup: 'body-parts',
    label: 'bone',
    tags: [
      'skeleton'
    ],
    shortcodes: [
      ':bone:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 11,
    order: 505,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '👀',
    hexcode: '1f440',
    category: 'People & Body',
    subgroup: 'body-parts',
    label: 'eyes',
    tags: [
      'eye',
      'face',
      'eyes'
    ],
    shortcodes: [
      ':eyes:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 506,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '👁️',
    hexcode: '1f441',
    category: 'People & Body',
    subgroup: 'body-parts',
    label: 'eye',
    tags: [
      'body',
      'eye',
      'face'
    ],
    shortcodes: [
      ':eye:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 508,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '👅',
    hexcode: '1f445',
    category: 'People & Body',
    subgroup: 'body-parts',
    label: 'tongue',
    tags: [
      'body',
      'tongue',
      'kiss',
      'lick',
      'licking'
    ],
    shortcodes: [
      ':tongue:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 509,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '👄',
    hexcode: '1f444',
    category: 'People & Body',
    subgroup: 'body-parts',
    label: 'mouth',
    tags: [
      'lips',
      'kiss',
      'mouth'
    ],
    shortcodes: [
      ':mouth:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 510,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🫦',
    hexcode: '1fae6',
    category: 'People & Body',
    subgroup: 'body-parts',
    label: 'biting lip',
    tags: [
      'anxious',
      'fear',
      'flirting',
      'nervous',
      'uncomfortable',
      'worried'
    ],
    shortcodes: [
      ':biting-lip:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 14,
    order: 511,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '👶',
    hexcode: '1f476',
    category: 'People & Body',
    subgroup: 'person',
    label: 'baby',
    tags: [
      'young',
      'human',
      'person'
    ],
    shortcodes: [
      ':baby:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 512,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f476'
  },
  {
    type: 'emoji',
    symbol: '🧒',
    hexcode: '1f9d2',
    category: 'People & Body',
    subgroup: 'person',
    label: 'child',
    tags: [
      'gender-neutral',
      'unspecified gender',
      'young',
      'human',
      'person'
    ],
    shortcodes: [
      ':child:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 5,
    order: 518,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f9d2'
  },
  {
    type: 'emoji',
    symbol: '🧑',
    hexcode: '1f9d1',
    category: 'People & Body',
    subgroup: 'person',
    label: 'person',
    tags: [
      'adult',
      'gender-neutral',
      'unspecified gender',
      'human',
      'person'
    ],
    shortcodes: [
      ':adult:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 5,
    order: 536,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f9d1'
  },
  {
    type: 'emoji',
    symbol: '👱',
    hexcode: '1f471',
    category: 'People & Body',
    subgroup: 'person',
    label: 'person: blond hair',
    tags: [
      'blond',
      'blond-haired person',
      'hair'
    ],
    shortcodes: [
      ':blond-hair:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 542,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f471'
  },
  {
    type: 'emoji',
    symbol: '🧔',
    hexcode: '1f9d4',
    category: 'People & Body',
    subgroup: 'person',
    label: 'person: beard',
    tags: [
      'beard',
      'person',
      'man',
      'facial hair',
      'manly'
    ],
    shortcodes: [
      ':beard:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 5,
    order: 554,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f9d4'
  },
  {
    type: 'emoji',
    symbol: '🧑‍🦰',
    hexcode: '1f9d1-200d-1f9b0',
    category: 'People & Body',
    subgroup: 'person',
    label: 'person: red hair',
    tags: [
      'adult',
      'gender-neutral',
      'person',
      'red hair',
      'unspecified gender'
    ],
    shortcodes: [
      ':red-hair:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12.1,
    order: 620,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f9d1-200d-1f9b0'
  },
  {
    type: 'emoji',
    symbol: '🧑‍🦱',
    hexcode: '1f9d1-200d-1f9b1',
    category: 'People & Body',
    subgroup: 'person',
    label: 'person: curly hair',
    tags: [
      'adult',
      'curly hair',
      'gender-neutral',
      'person',
      'unspecified gender'
    ],
    shortcodes: [
      ':curly-hair:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12.1,
    order: 632,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f9d1-200d-1f9b1'
  },
  {
    type: 'emoji',
    symbol: '🧑‍🦳',
    hexcode: '1f9d1-200d-1f9b3',
    category: 'People & Body',
    subgroup: 'person',
    label: 'person: white hair',
    tags: [
      'adult',
      'gender-neutral',
      'person',
      'unspecified gender',
      'white hair'
    ],
    shortcodes: [
      ':white-hair:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12.1,
    order: 644,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f9d1-200d-1f9b3'
  },
  {
    type: 'emoji',
    symbol: '🧑‍🦲',
    hexcode: '1f9d1-200d-1f9b2',
    category: 'People & Body',
    subgroup: 'person',
    label: 'person: bald',
    tags: [
      'adult',
      'bald',
      'gender-neutral',
      'person',
      'unspecified gender'
    ],
    shortcodes: [
      ':bald:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12.1,
    order: 656,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f9d1-200d-1f9b2'
  },
  {
    type: 'emoji',
    symbol: '🧓',
    hexcode: '1f9d3',
    category: 'People & Body',
    subgroup: 'person',
    label: 'older person',
    tags: [
      'adult',
      'gender-neutral',
      'old',
      'unspecified gender',
      'human',
      'person'
    ],
    shortcodes: [
      ':elder:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 5,
    order: 686,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f9d3'
  },
  {
    type: 'emoji',
    symbol: '🙍',
    hexcode: '1f64d',
    category: 'People & Body',
    subgroup: 'person-gesture',
    label: 'person frowning',
    tags: [
      'frown',
      'gesture',
      'negative',
      'angry',
      'head',
      'face'
    ],
    shortcodes: [
      ':frowning:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 704,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f64d'
  },
  {
    type: 'emoji',
    symbol: '🙎',
    hexcode: '1f64e',
    category: 'People & Body',
    subgroup: 'person-gesture',
    label: 'person pouting',
    tags: [
      'gesture',
      'pouting',
      'sad',
      'negative',
      'head',
      'face'
    ],
    shortcodes: [
      ':pouting:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 734,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f64e'
  },
  {
    type: 'emoji',
    symbol: '🙅',
    hexcode: '1f645',
    category: 'People & Body',
    subgroup: 'person-gesture',
    label: 'person gesturing NO',
    tags: [
      'forbidden',
      'gesture',
      'hand',
      'person gesturing no',
      'prohibited',
      'human',
      'head',
      'face'
    ],
    shortcodes: [
      ':no-gesture:',
      ':no-good:',
      ':denied:',
      ':halt:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 764,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f645'
  },
  {
    type: 'emoji',
    symbol: '🙆',
    hexcode: '1f646',
    category: 'People & Body',
    subgroup: 'person-gesture',
    label: 'person gesturing OK',
    tags: [
      'gesture',
      'hand',
      'ok',
      'person gesturing ok',
      'human',
      'head',
      'face'
    ],
    shortcodes: [
      ':gesture-ok:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 794,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f646'
  },
  {
    type: 'emoji',
    symbol: '💁',
    hexcode: '1f481',
    category: 'People & Body',
    subgroup: 'person-gesture',
    label: 'person tipping hand',
    tags: [
      'hand',
      'help',
      'information',
      'sassy',
      'tipping',
      'human',
      'head',
      'face'
    ],
    shortcodes: [
      ':tipping-hand:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 824,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f481'
  },
  {
    type: 'emoji',
    symbol: '🙋',
    hexcode: '1f64b',
    category: 'People & Body',
    subgroup: 'person-gesture',
    label: 'person raising hand',
    tags: [
      'gesture',
      'hand',
      'happy',
      'raised',
      'human',
      'head',
      'face'
    ],
    shortcodes: [
      ':raising-hand:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 854,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f64b'
  },
  {
    type: 'emoji',
    symbol: '🧏',
    hexcode: '1f9cf',
    category: 'People & Body',
    subgroup: 'person-gesture',
    label: 'deaf person',
    tags: [
      'accessibility',
      'deaf',
      'ear',
      'hear'
    ],
    shortcodes: [
      ':deaf:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12,
    order: 884,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f9cf'
  },
  {
    type: 'emoji',
    symbol: '🙇',
    hexcode: '1f647',
    category: 'People & Body',
    subgroup: 'person-gesture',
    label: 'person bowing',
    tags: [
      'apology',
      'bow',
      'gesture',
      'sorry',
      'human',
      'head',
      'face'
    ],
    shortcodes: [
      ':bow:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 914,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f647'
  },
  {
    type: 'emoji',
    symbol: '🤦',
    hexcode: '1f926',
    category: 'People & Body',
    subgroup: 'person-gesture',
    label: 'person facepalming',
    tags: [
      'disbelief',
      'exasperation',
      'face',
      'palm',
      'facepalm',
      'human',
      'head'
    ],
    shortcodes: [
      ':facepalm:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 944,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f926'
  },
  {
    type: 'emoji',
    symbol: '🤷',
    hexcode: '1f937',
    category: 'People & Body',
    subgroup: 'person-gesture',
    label: 'person shrugging',
    tags: [
      'doubt',
      'ignorance',
      'indifference',
      'shrug',
      'human',
      'head',
      'face'
    ],
    shortcodes: [
      ':shrug:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 974,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f937'
  },
  {
    type: 'emoji',
    symbol: '🧑‍⚕️',
    hexcode: '1f9d1-200d-2695-fe0f',
    category: 'People & Body',
    subgroup: 'person-role',
    label: 'health worker',
    tags: [
      'doctor',
      'healthcare',
      'nurse',
      'therapist'
    ],
    shortcodes: [
      ':health-worker:',
      ':doctor:',
      ':nurse:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12.1,
    order: 1004,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f9d1-200d-2695-fe0f'
  },
  {
    type: 'emoji',
    symbol: '🧑‍🎓',
    hexcode: '1f9d1-200d-1f393',
    category: 'People & Body',
    subgroup: 'person-role',
    label: 'student',
    tags: [
      'graduate'
    ],
    shortcodes: [
      ':student:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12.1,
    order: 1040,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f9d1-200d-1f393'
  },
  {
    type: 'emoji',
    symbol: '🧑‍🏫',
    hexcode: '1f9d1-200d-1f3eb',
    category: 'People & Body',
    subgroup: 'person-role',
    label: 'teacher',
    tags: [
      'instructor',
      'professor'
    ],
    shortcodes: [
      ':teacher:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12.1,
    order: 1058,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f9d1-200d-1f3eb'
  },
  {
    type: 'emoji',
    symbol: '🧑‍⚖️',
    hexcode: '1f9d1-200d-2696-fe0f',
    category: 'People & Body',
    subgroup: 'person-role',
    label: 'judge',
    tags: [
      'justice',
      'scales'
    ],
    shortcodes: [
      ':judge:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12.1,
    order: 1076,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f9d1-200d-2696-fe0f'
  },
  {
    type: 'emoji',
    symbol: '🧑‍🌾',
    hexcode: '1f9d1-200d-1f33e',
    category: 'People & Body',
    subgroup: 'person-role',
    label: 'farmer',
    tags: [
      'gardener',
      'rancher'
    ],
    shortcodes: [
      ':farmer:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12.1,
    order: 1112,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f9d1-200d-1f33e'
  },
  {
    type: 'emoji',
    symbol: '🧑‍🍳',
    hexcode: '1f9d1-200d-1f373',
    category: 'People & Body',
    subgroup: 'person-role',
    label: 'cook',
    tags: [
      'chef'
    ],
    shortcodes: [
      ':cook:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12.1,
    order: 1130,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f9d1-200d-1f373'
  },
  {
    type: 'emoji',
    symbol: '🧑‍🔧',
    hexcode: '1f9d1-200d-1f527',
    category: 'People & Body',
    subgroup: 'person-role',
    label: 'mechanic',
    tags: [
      'electrician',
      'plumber',
      'tradesperson'
    ],
    shortcodes: [
      ':mechanic:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12.1,
    order: 1148,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f9d1-200d-1f527'
  },
  {
    type: 'emoji',
    symbol: '🧑‍🏭',
    hexcode: '1f9d1-200d-1f3ed',
    category: 'People & Body',
    subgroup: 'person-role',
    label: 'factory worker',
    tags: [
      'assembly',
      'factory',
      'industrial',
      'worker'
    ],
    shortcodes: [
      ':factory-worker:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12.1,
    order: 1166,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f9d1-200d-1f3ed'
  },
  {
    type: 'emoji',
    symbol: '🧑‍💼',
    hexcode: '1f9d1-200d-1f4bc',
    category: 'People & Body',
    subgroup: 'person-role',
    label: 'office worker',
    tags: [
      'architect',
      'business',
      'manager',
      'white-collar'
    ],
    shortcodes: [
      ':office-worker:',
      ':business-person:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12.1,
    order: 1184,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f9d1-200d-1f4bc'
  },
  {
    type: 'emoji',
    symbol: '🧑‍🔬',
    hexcode: '1f9d1-200d-1f52c',
    category: 'People & Body',
    subgroup: 'person-role',
    label: 'scientist',
    tags: [
      'biologist',
      'chemist',
      'engineer',
      'physicist'
    ],
    shortcodes: [
      ':scientist:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12.1,
    order: 1202,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f9d1-200d-1f52c'
  },
  {
    type: 'emoji',
    symbol: '🧑‍💻',
    hexcode: '1f9d1-200d-1f4bb',
    category: 'People & Body',
    subgroup: 'person-role',
    label: 'technologist',
    tags: [
      'coder',
      'developer',
      'inventor',
      'software'
    ],
    shortcodes: [
      ':technologist:',
      ':person-at-computer:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12.1,
    order: 1220,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f9d1-200d-1f4bb'
  },
  {
    type: 'emoji',
    symbol: '🧑‍🎤',
    hexcode: '1f9d1-200d-1f3a4',
    category: 'People & Body',
    subgroup: 'person-role',
    label: 'singer',
    tags: [
      'actor',
      'entertainer',
      'rock',
      'star'
    ],
    shortcodes: [
      ':singer:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12.1,
    order: 1238,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f9d1-200d-1f3a4'
  },
  {
    type: 'emoji',
    symbol: '🧑‍🎨',
    hexcode: '1f9d1-200d-1f3a8',
    category: 'People & Body',
    subgroup: 'person-role',
    label: 'artist',
    tags: [
      'palette'
    ],
    shortcodes: [
      ':artist:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12.1,
    order: 1256,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f9d1-200d-1f3a8'
  },
  {
    type: 'emoji',
    symbol: '🧑‍✈️',
    hexcode: '1f9d1-200d-2708-fe0f',
    category: 'People & Body',
    subgroup: 'person-role',
    label: 'pilot',
    tags: [
      'plane'
    ],
    shortcodes: [
      ':pilot:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12.1,
    order: 1274,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f9d1-200d-2708-fe0f'
  },
  {
    type: 'emoji',
    symbol: '🧑‍🚀',
    hexcode: '1f9d1-200d-1f680',
    category: 'People & Body',
    subgroup: 'person-role',
    label: 'astronaut',
    tags: [
      'rocket'
    ],
    shortcodes: [
      ':astronaut:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12.1,
    order: 1310,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f9d1-200d-1f680'
  },
  {
    type: 'emoji',
    symbol: '🧑‍🚒',
    hexcode: '1f9d1-200d-1f692',
    category: 'People & Body',
    subgroup: 'person-role',
    label: 'firefighter',
    tags: [
      'firetruck'
    ],
    shortcodes: [
      ':firefighter:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12.1,
    order: 1328,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f9d1-200d-1f692'
  },
  {
    type: 'emoji',
    symbol: '👮',
    hexcode: '1f46e',
    category: 'People & Body',
    subgroup: 'person-role',
    label: 'police officer',
    tags: [
      'cop',
      'officer',
      'police',
      'law',
      'justice',
      'blue',
      'badge'
    ],
    shortcodes: [
      ':police:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 1346,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f46e'
  },
  {
    type: 'emoji',
    symbol: '🕵️',
    hexcode: '1f575',
    category: 'People & Body',
    subgroup: 'person-role',
    label: 'detective',
    tags: [
      'sleuth',
      'spy',
      'sherlock',
      'investigator',
      'magnifier',
      'magnifying glass',
      'cloak',
      'coat'
    ],
    shortcodes: [
      ':detective:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 1377,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f575'
  },
  {
    type: 'emoji',
    symbol: '💂',
    hexcode: '1f482',
    category: 'People & Body',
    subgroup: 'person-role',
    label: 'guard',
    tags: [
      'guard',
      'britain',
      'great britain',
      'queen',
      'england',
      'london',
      'royal guard',
      'furry hat guard',
      'protection'
    ],
    shortcodes: [
      ':guard:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 1411,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f482'
  },
  {
    type: 'emoji',
    symbol: '🥷',
    hexcode: '1f977',
    category: 'People & Body',
    subgroup: 'person-role',
    label: 'ninja',
    tags: [
      'fighter',
      'hidden',
      'stealth'
    ],
    shortcodes: [
      ':ninja:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 13,
    order: 1441,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f977'
  },
  {
    type: 'emoji',
    symbol: '👷',
    hexcode: '1f477',
    category: 'People & Body',
    subgroup: 'person-role',
    label: 'construction worker',
    tags: [
      'construction',
      'hat',
      'worker',
      'striped west',
      'helmet'
    ],
    shortcodes: [
      ':construction-worker:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 1447,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f477'
  },
  {
    type: 'emoji',
    symbol: '🫅',
    hexcode: '1fac5',
    category: 'People & Body',
    subgroup: 'person-role',
    label: 'person with crown',
    tags: [
      'monarch',
      'noble',
      'regal',
      'royalty'
    ],
    shortcodes: [
      ':royalty:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 14,
    order: 1477,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1fac5'
  },
  {
    type: 'emoji',
    symbol: '👳',
    hexcode: '1f473',
    category: 'People & Body',
    subgroup: 'person-role',
    label: 'person wearing turban',
    tags: [
      'turban',
      'man',
      'beard',
      'religion'
    ],
    shortcodes: [
      ':turban:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 1495,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f473'
  },
  {
    type: 'emoji',
    symbol: '👲',
    hexcode: '1f472',
    category: 'People & Body',
    subgroup: 'person-role',
    label: 'person with skullcap',
    tags: [
      'cap',
      'gua pi mao',
      'hat',
      'person',
      'skullcap'
    ],
    shortcodes: [
      ':gua-pi-mao:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 1525,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f472'
  },
  {
    type: 'emoji',
    symbol: '🧕',
    hexcode: '1f9d5',
    category: 'People & Body',
    subgroup: 'person-role',
    label: 'woman with headscarf',
    tags: [
      'headscarf',
      'hijab',
      'mantilla',
      'tichel',
      'religion',
      'religious',
      'muslim'
    ],
    shortcodes: [
      ':headscarf:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 5,
    order: 1531,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f9d5'
  },
  {
    type: 'emoji',
    symbol: '🤵',
    hexcode: '1f935',
    category: 'People & Body',
    subgroup: 'person-role',
    label: 'person in tuxedo',
    tags: [
      'groom',
      'person',
      'tuxedo'
    ],
    shortcodes: [
      ':tuxedo:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 1537,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f935'
  },
  {
    type: 'emoji',
    symbol: '👰',
    hexcode: '1f470',
    category: 'People & Body',
    subgroup: 'person-role',
    label: 'person with veil',
    tags: [
      'bride',
      'person',
      'veil',
      'wedding'
    ],
    shortcodes: [
      ':veil:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 1567,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f470'
  },
  {
    type: 'emoji',
    symbol: '🫄',
    hexcode: '1fac4',
    category: 'People & Body',
    subgroup: 'person-role',
    label: 'pregnant person',
    tags: [
      'belly',
      'bloated',
      'full',
      'pregnant'
    ],
    shortcodes: [
      ':pregnant:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 14,
    order: 1609,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1fac4'
  },
  {
    type: 'emoji',
    symbol: '🤱',
    hexcode: '1f931',
    category: 'People & Body',
    subgroup: 'person-role',
    label: 'breast-feeding',
    tags: [
      'baby',
      'breast',
      'nursing',
      'love',
      'trust',
      'mother',
      'motherhood'
    ],
    shortcodes: [
      ':breast-feeding:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 5,
    order: 1615,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f931'
  },
  {
    type: 'emoji',
    symbol: '🧑‍🍼',
    hexcode: '1f9d1-200d-1f37c',
    category: 'People & Body',
    subgroup: 'person-role',
    label: 'person feeding baby',
    tags: [
      'baby',
      'feeding',
      'nursing',
      'person'
    ],
    shortcodes: [
      ':person-feeding-baby:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 13,
    order: 1633,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f9d1-200d-1f37c'
  },
  {
    type: 'emoji',
    symbol: '👼',
    hexcode: '1f47c',
    category: 'People & Body',
    subgroup: 'person-fantasy',
    label: 'baby angel',
    tags: [
      'angel',
      'baby',
      'face',
      'fairy tale',
      'fantasy'
    ],
    shortcodes: [
      ':angel:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 1639,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f47c'
  },
  {
    type: 'emoji',
    symbol: '🧑‍🎄',
    hexcode: '1f9d1-200d-1f384',
    category: 'People & Body',
    subgroup: 'person-fantasy',
    label: 'mx claus',
    tags: [
      'claus',
      'christmas'
    ],
    shortcodes: [
      ':mx-claus:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 13,
    order: 1657,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f9d1-200d-1f384'
  },
  {
    type: 'emoji',
    symbol: '🦸',
    hexcode: '1f9b8',
    category: 'People & Body',
    subgroup: 'person-fantasy',
    label: 'superhero',
    tags: [
      'good',
      'hero',
      'heroine',
      'superpower'
    ],
    shortcodes: [
      ':superhero:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 11,
    order: 1663,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f9b8'
  },
  {
    type: 'emoji',
    symbol: '🦹',
    hexcode: '1f9b9',
    category: 'People & Body',
    subgroup: 'person-fantasy',
    label: 'supervillain',
    tags: [
      'criminal',
      'evil',
      'superpower',
      'villain'
    ],
    shortcodes: [
      ':supervillain:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 11,
    order: 1693,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f9b9'
  },
  {
    type: 'emoji',
    symbol: '🧙',
    hexcode: '1f9d9',
    category: 'People & Body',
    subgroup: 'person-fantasy',
    label: 'mage',
    tags: [
      'sorcerer',
      'sorceress',
      'witch',
      'wizard',
      'magician',
      'wand',
      'sage'
    ],
    shortcodes: [
      ':mage:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 5,
    order: 1723,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f9d9'
  },
  {
    type: 'emoji',
    symbol: '🧚',
    hexcode: '1f9da',
    category: 'People & Body',
    subgroup: 'person-fantasy',
    label: 'fairy',
    tags: [
      'oberon',
      'puck',
      'titania'
    ],
    shortcodes: [
      ':fairy:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 5,
    order: 1753,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f9da'
  },
  {
    type: 'emoji',
    symbol: '🧛',
    hexcode: '1f9db',
    category: 'People & Body',
    subgroup: 'person-fantasy',
    label: 'vampire',
    tags: [
      'dracula',
      'undead'
    ],
    shortcodes: [
      ':vampire:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 5,
    order: 1783,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f9db'
  },
  {
    type: 'emoji',
    symbol: '🧜',
    hexcode: '1f9dc',
    category: 'People & Body',
    subgroup: 'person-fantasy',
    label: 'merperson',
    tags: [
      'mermaid',
      'merman',
      'merwoman'
    ],
    shortcodes: [
      ':merperson:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 5,
    order: 1813,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f9dc'
  },
  {
    type: 'emoji',
    symbol: '🧝',
    hexcode: '1f9dd',
    category: 'People & Body',
    subgroup: 'person-fantasy',
    label: 'elf',
    tags: [
      'magical',
      'mystic',
      'bow',
      'arrow',
      'pointy ears'
    ],
    shortcodes: [
      ':elf:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 5,
    order: 1843,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f9dd'
  },
  {
    type: 'emoji',
    symbol: '🧞',
    hexcode: '1f9de',
    category: 'People & Body',
    subgroup: 'person-fantasy',
    label: 'genie',
    tags: [
      'djinn',
      'magic lamp',
      'wish',
      'magic'
    ],
    shortcodes: [
      ':genie:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 5,
    order: 1873,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🧟',
    hexcode: '1f9df',
    category: 'People & Body',
    subgroup: 'person-fantasy',
    label: 'zombie',
    tags: [
      'undead',
      'walking dead',
      'brain',
      'decayed'
    ],
    shortcodes: [
      ':zombie:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 5,
    order: 1878,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🧌',
    hexcode: '1f9cc',
    category: 'People & Body',
    subgroup: 'person-fantasy',
    label: 'troll',
    tags: [
      'fairy tale',
      'fantasy',
      'monster'
    ],
    shortcodes: [
      ':troll:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 14,
    order: 1883,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '💆',
    hexcode: '1f486',
    category: 'People & Body',
    subgroup: 'person-activity',
    label: 'person getting massage',
    tags: [
      'face',
      'massage',
      'salon',
      'human',
      'person'
    ],
    shortcodes: [
      ':massage:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 1884,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f486'
  },
  {
    type: 'emoji',
    symbol: '💇',
    hexcode: '1f487',
    category: 'People & Body',
    subgroup: 'person-activity',
    label: 'person getting haircut',
    tags: [
      'barber',
      'beauty',
      'haircut',
      'parlor',
      'human',
      'person'
    ],
    shortcodes: [
      ':haircut:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 1914,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f487'
  },
  {
    type: 'emoji',
    symbol: '🚶',
    hexcode: '1f6b6',
    category: 'People & Body',
    subgroup: 'person-activity',
    label: 'person walking',
    tags: [
      'hike',
      'walk',
      'walking',
      'human',
      'person'
    ],
    shortcodes: [
      ':walking:'
    ],
    emoticons: [],
    directional: true,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 1944,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f6b6'
  },
  {
    type: 'emoji',
    symbol: '🧍',
    hexcode: '1f9cd',
    category: 'People & Body',
    subgroup: 'person-activity',
    label: 'person standing',
    tags: [
      'stand',
      'standing'
    ],
    shortcodes: [
      ':standing:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12,
    order: 1974,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f9cd'
  },
  {
    type: 'emoji',
    symbol: '🧎',
    hexcode: '1f9ce',
    category: 'People & Body',
    subgroup: 'person-activity',
    label: 'person kneeling',
    tags: [
      'kneel',
      'kneeling'
    ],
    shortcodes: [
      ':kneeling:'
    ],
    emoticons: [],
    directional: true,
    variation: false,
    variationBase: null,
    unicode: 12,
    order: 2004,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f9ce'
  },
  {
    type: 'emoji',
    symbol: '🧑‍🦯',
    hexcode: '1f9d1-200d-1f9af',
    category: 'People & Body',
    subgroup: 'person-activity',
    label: 'person with white cane',
    tags: [
      'accessibility',
      'blind'
    ],
    shortcodes: [
      ':walking-with-cane:',
      ':blind:'
    ],
    emoticons: [],
    directional: true,
    variation: false,
    variationBase: null,
    unicode: 12.1,
    order: 2034,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f9d1-200d-1f9af'
  },
  {
    type: 'emoji',
    symbol: '🧑‍🦼',
    hexcode: '1f9d1-200d-1f9bc',
    category: 'People & Body',
    subgroup: 'person-activity',
    label: 'person in motorized wheelchair',
    tags: [
      'accessibility',
      'wheelchair'
    ],
    shortcodes: [
      ':person-in-motorized-wheelchair:'
    ],
    emoticons: [],
    directional: true,
    variation: false,
    variationBase: null,
    unicode: 12.1,
    order: 2052,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f9d1-200d-1f9bc'
  },
  {
    type: 'emoji',
    symbol: '🧑‍🦽',
    hexcode: '1f9d1-200d-1f9bd',
    category: 'People & Body',
    subgroup: 'person-activity',
    label: 'person in manual wheelchair',
    tags: [
      'accessibility',
      'wheelchair'
    ],
    shortcodes: [
      ':person-in-manual-wheelchair:'
    ],
    emoticons: [],
    directional: true,
    variation: false,
    variationBase: null,
    unicode: 12.1,
    order: 2070,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f9d1-200d-1f9bd'
  },
  {
    type: 'emoji',
    symbol: '🏃',
    hexcode: '1f3c3',
    category: 'People & Body',
    subgroup: 'person-activity',
    label: 'person running',
    tags: [
      'marathon',
      'running',
      'human',
      'person'
    ],
    shortcodes: [
      ':running:'
    ],
    emoticons: [],
    directional: true,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 2088,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f3c3'
  },
  {
    type: 'emoji',
    symbol: '💃',
    hexcode: '1f483',
    category: 'People & Body',
    subgroup: 'person-activity',
    label: 'woman dancing',
    tags: [
      'dance',
      'dancing',
      'woman',
      'human',
      'person'
    ],
    shortcodes: [
      ':dancer-woman:'
    ],
    emoticons: [
      '♪┏(･o･)┛♪'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 2118,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f483'
  },
  {
    type: 'emoji',
    symbol: '🕺',
    hexcode: '1f57a',
    category: 'People & Body',
    subgroup: 'person-activity',
    label: 'man dancing',
    tags: [
      'dance',
      'dancing',
      'man',
      'human',
      'person'
    ],
    shortcodes: [
      ':dancer-man:'
    ],
    emoticons: [
      '♪┗(･o･)┓♪'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 2124,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f57a'
  },
  {
    type: 'emoji',
    symbol: '🕴️',
    hexcode: '1f574',
    category: 'People & Body',
    subgroup: 'person-activity',
    label: 'person in suit levitating',
    tags: [
      'business',
      'person',
      'suit'
    ],
    shortcodes: [
      ':levitating-suit:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 2131,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f574'
  },
  {
    type: 'emoji',
    symbol: '👯',
    hexcode: '1f46f',
    category: 'People & Body',
    subgroup: 'person-activity',
    label: 'people with bunny ears',
    tags: [
      'bunny ear',
      'dancer',
      'partying',
      'human',
      'person'
    ],
    shortcodes: [
      ':bunny-ears:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 2137,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🧖',
    hexcode: '1f9d6',
    category: 'People & Body',
    subgroup: 'person-activity',
    label: 'person in steamy room',
    tags: [
      'sauna',
      'steam room'
    ],
    shortcodes: [
      ':sauna:',
      ':steamy:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 5,
    order: 2142,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f9d6'
  },
  {
    type: 'emoji',
    symbol: '🧗',
    hexcode: '1f9d7',
    category: 'People & Body',
    subgroup: 'person-activity',
    label: 'person climbing',
    tags: [
      'climber',
      'human',
      'person'
    ],
    shortcodes: [
      ':climbing:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 5,
    order: 2172,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f9d7'
  },
  {
    type: 'emoji',
    symbol: '🤺',
    hexcode: '1f93a',
    category: 'People & Body',
    subgroup: 'person-sport',
    label: 'person fencing',
    tags: [
      'fencer',
      'fencing',
      'sword',
      'epee',
      'sports'
    ],
    shortcodes: [
      ':fencing:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 2202,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🏇',
    hexcode: '1f3c7',
    category: 'People & Body',
    subgroup: 'person-sport',
    label: 'horse racing',
    tags: [
      'horse',
      'jockey',
      'racehorse',
      'racing',
      'animal',
      'sports'
    ],
    shortcodes: [
      ':horse-racing:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 2203,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f3c7'
  },
  {
    type: 'emoji',
    symbol: '⛷️',
    hexcode: '26f7',
    category: 'People & Body',
    subgroup: 'person-sport',
    label: 'skier',
    tags: [
      'ski',
      'snow',
      'winter',
      'sports'
    ],
    shortcodes: [
      ':skier:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 2210,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🏂️',
    hexcode: '1f3c2',
    category: 'People & Body',
    subgroup: 'person-sport',
    label: 'snowboarder',
    tags: [
      'ski',
      'snow',
      'snowboard',
      'winter',
      'sports'
    ],
    shortcodes: [
      ':snowboarder:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 2211,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f3c2'
  },
  {
    type: 'emoji',
    symbol: '🏌️',
    hexcode: '1f3cc',
    category: 'People & Body',
    subgroup: 'person-sport',
    label: 'person golfing',
    tags: [
      'ball',
      'golf',
      'sports'
    ],
    shortcodes: [
      ':golfing:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 2218,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f3cc'
  },
  {
    type: 'emoji',
    symbol: '🏄️',
    hexcode: '1f3c4',
    category: 'People & Body',
    subgroup: 'person-sport',
    label: 'person surfing',
    tags: [
      'surfing',
      'water',
      'ocean',
      'sea',
      'wave',
      'surfer',
      'sports'
    ],
    shortcodes: [
      ':surfing:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 2252,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f3c4'
  },
  {
    type: 'emoji',
    symbol: '🚣',
    hexcode: '1f6a3',
    category: 'People & Body',
    subgroup: 'person-sport',
    label: 'person rowing boat',
    tags: [
      'boat',
      'rowboat',
      'sports',
      'kayak',
      'canoe',
      'water'
    ],
    shortcodes: [
      ':rowing-boat:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 2282,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f6a3'
  },
  {
    type: 'emoji',
    symbol: '🏊️',
    hexcode: '1f3ca',
    category: 'People & Body',
    subgroup: 'person-sport',
    label: 'person swimming',
    tags: [
      'swim',
      'sports',
      'water'
    ],
    shortcodes: [
      ':swimming:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 2312,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f3ca'
  },
  {
    type: 'emoji',
    symbol: '⛹️',
    hexcode: '26f9',
    category: 'People & Body',
    subgroup: 'person-sport',
    label: 'person bouncing ball',
    tags: [
      'ball',
      'dribble',
      'sports'
    ],
    shortcodes: [
      ':bouncing-ball:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 2343,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '26f9'
  },
  {
    type: 'emoji',
    symbol: '🏋️',
    hexcode: '1f3cb',
    category: 'People & Body',
    subgroup: 'person-sport',
    label: 'person lifting weights',
    tags: [
      'lifter',
      'weight',
      'sports',
      'power'
    ],
    shortcodes: [
      ':lifting-weights:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 2378,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f3cb'
  },
  {
    type: 'emoji',
    symbol: '🚴',
    hexcode: '1f6b4',
    category: 'People & Body',
    subgroup: 'person-sport',
    label: 'person biking',
    tags: [
      'bicycle',
      'biking',
      'cyclist',
      'sports'
    ],
    shortcodes: [
      ':biking:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 2412,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f6b4'
  },
  {
    type: 'emoji',
    symbol: '🚵',
    hexcode: '1f6b5',
    category: 'People & Body',
    subgroup: 'person-sport',
    label: 'person mountain biking',
    tags: [
      'bicycle',
      'bicyclist',
      'bike',
      'cyclist',
      'mountain'
    ],
    shortcodes: [
      ':mountain-biking:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 2442,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f6b5'
  },
  {
    type: 'emoji',
    symbol: '🤸',
    hexcode: '1f938',
    category: 'People & Body',
    subgroup: 'person-sport',
    label: 'person cartwheeling',
    tags: [
      'cartwheel',
      'gymnastics',
      'sports'
    ],
    shortcodes: [
      ':cartwheel:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 2472,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f938'
  },
  {
    type: 'emoji',
    symbol: '🤼',
    hexcode: '1f93c',
    category: 'People & Body',
    subgroup: 'person-sport',
    label: 'people wrestling',
    tags: [
      'wrestle',
      'wrestler',
      'fighting',
      'sports'
    ],
    shortcodes: [
      ':wrestling:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 2502,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🤽',
    hexcode: '1f93d',
    category: 'People & Body',
    subgroup: 'person-sport',
    label: 'person playing water polo',
    tags: [
      'polo',
      'water',
      'sports'
    ],
    shortcodes: [
      ':water-polo:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 2507,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f93d'
  },
  {
    type: 'emoji',
    symbol: '🤾',
    hexcode: '1f93e',
    category: 'People & Body',
    subgroup: 'person-sport',
    label: 'person playing handball',
    tags: [
      'ball',
      'handball',
      'sports',
      'indoor'
    ],
    shortcodes: [
      ':handball:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 2537,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f93e'
  },
  {
    type: 'emoji',
    symbol: '🤹',
    hexcode: '1f939',
    category: 'People & Body',
    subgroup: 'person-sport',
    label: 'person juggling',
    tags: [
      'balance',
      'juggle',
      'multitask',
      'skill',
      'artist'
    ],
    shortcodes: [
      ':juggling:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 2567,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f939'
  },
  {
    type: 'emoji',
    symbol: '🧘',
    hexcode: '1f9d8',
    category: 'People & Body',
    subgroup: 'person-resting',
    label: 'person in lotus position',
    tags: [
      'meditation',
      'yoga',
      'human',
      'person',
      'exercise'
    ],
    shortcodes: [
      ':yoga:',
      ':meditation:',
      ':lotus-position:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 5,
    order: 2597,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f9d8'
  },
  {
    type: 'emoji',
    symbol: '🛀',
    hexcode: '1f6c0',
    category: 'People & Body',
    subgroup: 'person-resting',
    label: 'person taking bath',
    tags: [
      'bath',
      'bathtub'
    ],
    shortcodes: [
      ':bathe:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 2627,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f6c0'
  },
  {
    type: 'emoji',
    symbol: '🛌',
    hexcode: '1f6cc',
    category: 'People & Body',
    subgroup: 'person-resting',
    label: 'person in bed',
    tags: [
      'good night',
      'hotel',
      'sleep',
      'human',
      'person'
    ],
    shortcodes: [
      ':in-bed:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 2633,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f6cc'
  },
  {
    type: 'emoji',
    symbol: '🧑‍🤝‍🧑',
    hexcode: '1f9d1-200d-1f91d-200d-1f9d1',
    category: 'People & Body',
    subgroup: 'family',
    label: 'people holding hands',
    tags: [
      'couple',
      'hand',
      'hold',
      'holding hands',
      'person'
    ],
    shortcodes: [
      ':holding-hands:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12,
    order: 2639,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f9d1-200d-1f91d-200d-1f9d1'
  },
  {
    type: 'emoji',
    symbol: '👭',
    hexcode: '1f46d',
    category: 'People & Body',
    subgroup: 'family',
    label: 'women holding hands',
    tags: [
      'couple',
      'hand',
      'holding hands',
      'women',
      'together',
      'girlfriend',
      // 'lesbian',
      // 'homosexual'
    ],
    shortcodes: [
      ':holding-hands-women:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 2665,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f46d'
  },
  {
    type: 'emoji',
    symbol: '👫',
    hexcode: '1f46b',
    category: 'People & Body',
    subgroup: 'family',
    label: 'woman and man holding hands',
    tags: [
      'couple',
      'hand',
      'hold',
      'holding hands',
      'man',
      'woman',
      'together',
    ],
    shortcodes: [
      ':holding-hands-woman-and-man:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 2691,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f46b'
  },
  {
    type: 'emoji',
    symbol: '👬',
    hexcode: '1f46c',
    category: 'People & Body',
    subgroup: 'family',
    label: 'men holding hands',
    tags: [
      'couple',
      // 'gemini',
      'holding hands',
      'man',
      'men',
      'twins',
      // 'zodiac',
      'together',
      // 'gay',
      // 'homosexual'
    ],
    shortcodes: [
      ':holding-hands-men:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 2717,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f46c'
  },
  {
    type: 'emoji',
    symbol: '💏',
    hexcode: '1f48f',
    category: 'People & Body',
    subgroup: 'family',
    label: 'kiss',
    tags: [
      'couple',
      'man',
      'woman',
      'face',
      'kiss',
      'boy',
      'girl'
    ],
    shortcodes: [
      ':kiss-people:'
    ],
    emoticons: [
      '(-}{-)'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 2743,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f48f'
  },
  {
    type: 'emoji',
    symbol: '👩‍❤️‍💋‍👨',
    hexcode: '1f469-200d-2764-fe0f-200d-1f48b-200d-1f468',
    category: 'People & Body',
    subgroup: 'family',
    label: 'kiss: woman, man',
    tags: [
      'couple',
      'kiss',
      'man',
      'woman'
    ],
    shortcodes: [
      ':kiss-woman-and-man:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 2,
    order: 2789,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f469-200d-2764-fe0f-200d-1f48b-200d-1f468'
  },
  {
    type: 'emoji',
    symbol: '👨‍❤️‍💋‍👨',
    hexcode: '1f468-200d-2764-fe0f-200d-1f48b-200d-1f468',
    category: 'People & Body',
    subgroup: 'family',
    label: 'kiss: man, man',
    tags: [
      'couple',
      'kiss',
      'man',
      // 'gay'
    ],
    shortcodes: [
      ':kiss-man-and-man:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 2,
    order: 2841,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f468-200d-2764-fe0f-200d-1f48b-200d-1f468'
  },
  {
    type: 'emoji',
    symbol: '👩‍❤️‍💋‍👩',
    hexcode: '1f469-200d-2764-fe0f-200d-1f48b-200d-1f469',
    category: 'People & Body',
    subgroup: 'family',
    label: 'kiss: woman, woman',
    tags: [
      'couple',
      'kiss',
      'woman',
      // 'lesbian',
      'girlfriend'
    ],
    shortcodes: [
      ':kiss-woman-and-woman:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 2,
    order: 2893,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f469-200d-2764-fe0f-200d-1f48b-200d-1f469'
  },
  {
    type: 'emoji',
    symbol: '💑',
    hexcode: '1f491',
    category: 'People & Body',
    subgroup: 'family',
    label: 'couple with heart',
    tags: [
      'couple',
      'love',
      'man',
      'woman',
      'heart'
    ],
    shortcodes: [
      ':people-with-heart:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 2945,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f491'
  },
  {
    type: 'emoji',
    symbol: '👩‍❤️‍👨',
    hexcode: '1f469-200d-2764-fe0f-200d-1f468',
    category: 'People & Body',
    subgroup: 'family',
    label: 'couple with heart: woman, man',
    tags: [
      'couple',
      'couple with heart',
      'love',
      'man',
      'woman'
    ],
    shortcodes: [
      ':heart-with-woman-and-man:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 2,
    order: 2991,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f469-200d-2764-fe0f-200d-1f468'
  },
  {
    type: 'emoji',
    symbol: '👨‍❤️‍👨',
    hexcode: '1f468-200d-2764-fe0f-200d-1f468',
    category: 'People & Body',
    subgroup: 'family',
    label: 'couple with heart: man, man',
    tags: [
      'couple',
      'couple with heart',
      'love',
      'man',
      // 'gay'
    ],
    shortcodes: [
      ':heart-with-man-and-man:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 2,
    order: 3043,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f468-200d-2764-fe0f-200d-1f468'
  },
  {
    type: 'emoji',
    symbol: '👩‍❤️‍👩',
    hexcode: '1f469-200d-2764-fe0f-200d-1f469',
    category: 'People & Body',
    subgroup: 'family',
    label: 'couple with heart: woman, woman',
    tags: [
      'couple',
      'couple with heart',
      'love',
      'woman',
      // 'lesbian',
      'girlfried'
    ],
    shortcodes: [
      ':heart-with-woman-and-woman:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 2,
    order: 3095,
    skintone: 0,
    skintoneCombination: 'single',
    skintoneBase: '1f469-200d-2764-fe0f-200d-1f469'
  },
  {
    type: 'emoji',
    symbol: '👪️',
    hexcode: '1f46a',
    category: 'People & Body',
    subgroup: 'family',
    label: 'family',
    tags: [
      'family',
      'man',
      'woman',
      'boy',
      'child'
    ],
    shortcodes: [
      ':family:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3147,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🗣️',
    hexcode: '1f5e3',
    category: 'People & Body',
    subgroup: 'person-symbol',
    label: 'speaking head',
    tags: [
      'face',
      'head',
      'silhouette',
      'speak',
      'speaking',
      'human',
      'person'
    ],
    shortcodes: [
      ':speaking-head:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3174,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '👤',
    hexcode: '1f464',
    category: 'People & Body',
    subgroup: 'person-symbol',
    label: 'bust in silhouette',
    tags: [
      'bust',
      'silhouette',
      'human',
      'person'
    ],
    shortcodes: [
      ':bust-in-silhouette:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3175,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '👥',
    hexcode: '1f465',
    category: 'People & Body',
    subgroup: 'person-symbol',
    label: 'busts in silhouette',
    tags: [
      'bust',
      'silhouette',
      'human',
      'person'
    ],
    shortcodes: [
      ':busts-in-silhouette:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3176,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🫂',
    hexcode: '1fac2',
    category: 'People & Body',
    subgroup: 'person-symbol',
    label: 'people hugging',
    tags: [
      'goodbye',
      'hello',
      'hug',
      'thanks',
      'love',
      'harmony',
      'humans',
      'like',
      'making out',
      'arms'
    ],
    shortcodes: [
      ':hugging:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 13,
    order: 3177,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '👣',
    hexcode: '1f463',
    category: 'People & Body',
    subgroup: 'person-symbol',
    label: 'footprints',
    tags: [
      'clothing',
      'footprint',
      'print'
    ],
    shortcodes: [
      ':footprints:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3178,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },

  {
    type: 'emoji',
    symbol: '🐵',
    hexcode: '1f435',
    category: 'Animals & Nature',
    subgroup: 'animal-mammal',
    label: 'monkey face',
    tags: [
      'face',
      'monkey',
      'jungle',
      'ape',
      'evolution',
      'primate',
      'africa'
    ],
    shortcodes: [
      ':monkey-face:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3188,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🐒',
    hexcode: '1f412',
    category: 'Animals & Nature',
    subgroup: 'animal-mammal',
    label: 'monkey',
    tags: [
      'monkey',
      'jungle',
      'ape',
      'evolution',
      'primate'
    ],
    shortcodes: [
      ':monkey:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3189,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🦍',
    hexcode: '1f98d',
    category: 'Animals & Nature',
    subgroup: 'animal-mammal',
    label: 'gorilla',
    tags: [
      'gorilla',
      'monkey',
      'primate',
      'evolution'
    ],
    shortcodes: [
      ':gorilla:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 3190,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🦧',
    hexcode: '1f9a7',
    category: 'Animals & Nature',
    subgroup: 'animal-mammal',
    label: 'orangutan',
    tags: [
      'ape'
    ],
    shortcodes: [
      ':orangutan:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12,
    order: 3191,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🐶',
    hexcode: '1f436',
    category: 'Animals & Nature',
    subgroup: 'animal-mammal',
    label: 'dog face',
    tags: [
      'dog',
      'face',
      'pet',
      'friend',
      'puppy',
      'doggy'
    ],
    shortcodes: [
      ':dog-face:'
    ],
    emoticons: [
      '▼・ᴥ・▼'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3192,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🐕️',
    hexcode: '1f415',
    category: 'Animals & Nature',
    subgroup: 'animal-mammal',
    label: 'dog',
    tags: [
      'pet',
      'puppy',
      'doggy'
    ],
    shortcodes: [
      ':dog:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3193,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🦮',
    hexcode: '1f9ae',
    category: 'Animals & Nature',
    subgroup: 'animal-mammal',
    label: 'guide dog',
    tags: [
      'accessibility',
      'blind',
      'guide'
    ],
    shortcodes: [
      ':guide-dog:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12,
    order: 3194,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🐕‍🦺',
    hexcode: '1f415-200d-1f9ba',
    category: 'Animals & Nature',
    subgroup: 'animal-mammal',
    label: 'service dog',
    tags: [
      'accessibility',
      'assistance',
      'dog',
      'service'
    ],
    shortcodes: [
      ':service-dog:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12,
    order: 3195,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🐩',
    hexcode: '1f429',
    category: 'Animals & Nature',
    subgroup: 'animal-mammal',
    label: 'poodle',
    tags: [
      'dog'
    ],
    shortcodes: [
      ':poodle:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3196,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🐺',
    hexcode: '1f43a',
    category: 'Animals & Nature',
    subgroup: 'animal-mammal',
    label: 'wolf',
    tags: [
      'face',
      'pack',
      'wild',
      'free',
      'forest',
      'dog'
    ],
    shortcodes: [
      ':wolf:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3197,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🦊',
    hexcode: '1f98a',
    category: 'Animals & Nature',
    subgroup: 'animal-mammal',
    label: 'fox',
    tags: [
      'face',
      'smart',
      'red',
      'quick',
      'intelligent'
    ],
    shortcodes: [
      ':fox-face:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 3198,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🦝',
    hexcode: '1f99d',
    category: 'Animals & Nature',
    subgroup: 'animal-mammal',
    label: 'raccoon',
    tags: [
      'curious',
      'sly'
    ],
    shortcodes: [
      ':raccoon:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 11,
    order: 3199,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🐱',
    hexcode: '1f431',
    category: 'Animals & Nature',
    subgroup: 'animal-mammal',
    label: 'cat face',
    tags: [
      'cat',
      'face',
      'pet',
      'kitty',
      'kitten',
      'miau'
    ],
    shortcodes: [
      ':cat-face:'
    ],
    emoticons: [
      '=^.^='
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3200,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🐈️',
    hexcode: '1f408',
    category: 'Animals & Nature',
    subgroup: 'animal-mammal',
    label: 'cat',
    tags: [
      'pet',
      'kitty',
      'kitten',
      'miau'
    ],
    shortcodes: [
      ':cat:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3201,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🐈‍⬛',
    hexcode: '1f408-200d-2b1b',
    category: 'Animals & Nature',
    subgroup: 'animal-mammal',
    label: 'black cat',
    tags: [
      'black',
      'cat',
      'unlucky',
      'bad luck'
    ],
    shortcodes: [
      ':black-cat:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 13,
    order: 3202,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🦁',
    hexcode: '1f981',
    category: 'Animals & Nature',
    subgroup: 'animal-mammal',
    label: 'lion',
    tags: [
      'face',
      'leo',
      'zodiac',
      'king',
      'simba',
      'royal',
      'wild',
      'cat'
    ],
    shortcodes: [
      ':lion-face:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3203,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🐯',
    hexcode: '1f42f',
    category: 'Animals & Nature',
    subgroup: 'animal-mammal',
    label: 'tiger face',
    tags: [
      'face',
      'tiger',
      'stripes',
      'strong',
      'cat',
      'wild'
    ],
    shortcodes: [
      ':tiger-face:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3204,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🐅',
    hexcode: '1f405',
    category: 'Animals & Nature',
    subgroup: 'animal-mammal',
    label: 'tiger',
    tags: [
      'tiger',
      'stripes',
      'strong',
      'cat',
      'wild'
    ],
    shortcodes: [
      ':tiger:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3205,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🐆',
    hexcode: '1f406',
    category: 'Animals & Nature',
    subgroup: 'animal-mammal',
    label: 'leopard',
    tags: [
      'leopard',
      'dots',
      'strong',
      'cat',
      'wild',
      'spots'
    ],
    shortcodes: [
      ':leopard:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3206,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🐴',
    hexcode: '1f434',
    category: 'Animals & Nature',
    subgroup: 'animal-mammal',
    label: 'horse face',
    tags: [
      'face',
      'horse',
      'riding',
      'sport'
    ],
    shortcodes: [
      ':horse-face:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3207,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🫎',
    hexcode: '1face',
    category: 'Animals & Nature',
    subgroup: 'animal-mammal',
    label: 'moose',
    tags: [
      'animal',
      'antlers',
      'elk',
      'mammal'
    ],
    shortcodes: [
      ':moose:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 15,
    order: 3208,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🫏',
    hexcode: '1facf',
    category: 'Animals & Nature',
    subgroup: 'animal-mammal',
    label: 'donkey',
    tags: [
      'animal',
      'ass',
      'burro',
      'mammal',
      'mule',
      'stubborn'
    ],
    shortcodes: [
      ':donkey:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 15,
    order: 3209,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🐎',
    hexcode: '1f40e',
    category: 'Animals & Nature',
    subgroup: 'animal-mammal',
    label: 'horse',
    tags: [
      'equestrian',
      'racehorse',
      'racing',
      'riding',
      'sport'
    ],
    shortcodes: [
      ':racehorse:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3210,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🦄',
    hexcode: '1f984',
    category: 'Animals & Nature',
    subgroup: 'animal-mammal',
    label: 'unicorn',
    tags: [
      'face',
      'fabulous',
      'magical',
      'rainbow',
      'schwäbisch',
      'gmünd'
    ],
    shortcodes: [
      ':unicorn:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3211,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🦓',
    hexcode: '1f993',
    category: 'Animals & Nature',
    subgroup: 'animal-mammal',
    label: 'zebra',
    tags: [
      'stripe',
      'horse',
      'black',
      'white'
    ],
    shortcodes: [
      ':zebra:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 5,
    order: 3212,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🦌',
    hexcode: '1f98c',
    category: 'Animals & Nature',
    subgroup: 'animal-mammal',
    label: 'deer',
    tags: [
      'deer',
      'forest',
      'hunt',
      'antler'
    ],
    shortcodes: [
      ':deer:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 3213,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🦬',
    hexcode: '1f9ac',
    category: 'Animals & Nature',
    subgroup: 'animal-mammal',
    label: 'bison',
    tags: [
      'buffalo',
      'herd',
      'wisent'
    ],
    shortcodes: [
      ':bison:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 13,
    order: 3214,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🐮',
    hexcode: '1f42e',
    category: 'Animals & Nature',
    subgroup: 'animal-mammal',
    label: 'cow face',
    tags: [
      'cow',
      'face',
      'farm',
      'milk',
      'beef',
      'grass',
      'dairy',
      'horns',
      'cheese'
    ],
    shortcodes: [
      ':cow-face:'
    ],
    emoticons: [
      '3:O'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3215,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🐂',
    hexcode: '1f402',
    category: 'Animals & Nature',
    subgroup: 'animal-mammal',
    label: 'ox',
    tags: [
      'bull',
      'taurus',
      'zodiac',
      'strong',
      'farm',
      'acre',
      'horns',
      'beef'
    ],
    shortcodes: [
      ':ox:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3216,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🐃',
    hexcode: '1f403',
    category: 'Animals & Nature',
    subgroup: 'animal-mammal',
    label: 'water buffalo',
    tags: [
      'buffalo',
      'water',
      'black',
      'horns',
      'beef'
    ],
    shortcodes: [
      ':water-buffalo:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3217,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🐄',
    hexcode: '1f404',
    category: 'Animals & Nature',
    subgroup: 'animal-mammal',
    label: 'cow',
    tags: [
      'cow',
      'farm',
      'milk',
      'beef',
      'grass',
      'dairy',
      'horns',
      'cheese'
    ],
    shortcodes: [
      ':cow:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3218,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🐷',
    hexcode: '1f437',
    category: 'Animals & Nature',
    subgroup: 'animal-mammal',
    label: 'pig face',
    tags: [
      'face',
      'pig',
      'pork',
      'farm',
      'pink',
      'meat',
      'oink'
    ],
    shortcodes: [
      ':pig-face:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3219,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🐖',
    hexcode: '1f416',
    category: 'Animals & Nature',
    subgroup: 'animal-mammal',
    label: 'pig',
    tags: [
      'sow',
      'pork',
      'farm',
      'pink',
      'meat',
      'oink'
    ],
    shortcodes: [
      ':pig:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3220,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🐗',
    hexcode: '1f417',
    category: 'Animals & Nature',
    subgroup: 'animal-mammal',
    label: 'boar',
    tags: [
      'pig',
      'wild',
      'strong',
      'forest',
      'angry',
      'teeth',
      'tusk'
    ],
    shortcodes: [
      ':boar:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3221,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🐽',
    hexcode: '1f43d',
    category: 'Animals & Nature',
    subgroup: 'animal-mammal',
    label: 'pig nose',
    tags: [
      'face',
      'nose',
      'pig',
      'smell',
      'socket'
    ],
    shortcodes: [
      ':snout:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3222,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🐏',
    hexcode: '1f40f',
    category: 'Animals & Nature',
    subgroup: 'animal-mammal',
    label: 'ram',
    tags: [
      'aries',
      'male',
      'sheep',
      'zodiac',
      'horns',
      'grass',
      'hooves',
      'wool'
    ],
    shortcodes: [
      ':ram:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3223,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🐑',
    hexcode: '1f411',
    category: 'Animals & Nature',
    subgroup: 'animal-mammal',
    label: 'ewe',
    tags: [
      'female',
      'sheep',
      'horns',
      'grass',
      'hooves',
      'wool',
      'farm'
    ],
    shortcodes: [
      ':sheep:',
      ':ewe:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3224,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🐐',
    hexcode: '1f410',
    category: 'Animals & Nature',
    subgroup: 'animal-mammal',
    label: 'goat',
    tags: [
      'capricorn',
      'zodiac',
      'horns',
      'farm',
      'milk',
      'cheese'
    ],
    shortcodes: [
      ':goat:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3225,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🐪',
    hexcode: '1f42a',
    category: 'Animals & Nature',
    subgroup: 'animal-mammal',
    label: 'camel',
    tags: [
      'dromedary',
      'hump',
      'desert',
      'oasis',
      'sahara',
      'sun',
      'hot'
    ],
    shortcodes: [
      ':camel:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3226,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🐫',
    hexcode: '1f42b',
    category: 'Animals & Nature',
    subgroup: 'animal-mammal',
    label: 'two-hump camel',
    tags: [
      'bactrian',
      'camel',
      'hump',
      'desert',
      'oasis',
      'sahara',
      'sun',
      'hot'
    ],
    shortcodes: [
      ':bactrian-camel:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3227,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🦙',
    hexcode: '1f999',
    category: 'Animals & Nature',
    subgroup: 'animal-mammal',
    label: 'llama',
    tags: [
      'alpaca',
      'guanaco',
      'vicuña',
      'wool'
    ],
    shortcodes: [
      ':llama:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 11,
    order: 3228,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🦒',
    hexcode: '1f992',
    category: 'Animals & Nature',
    subgroup: 'animal-mammal',
    label: 'giraffe',
    tags: [
      'spots',
      'long',
      'neck',
      'trees',
      'big'
    ],
    shortcodes: [
      ':giraffe:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 5,
    order: 3229,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🐘',
    hexcode: '1f418',
    category: 'Animals & Nature',
    subgroup: 'animal-mammal',
    label: 'elephant',
    tags: [
      'elephant',
      'big',
      'wrinkles',
      'trunk',
      'töröö'
    ],
    shortcodes: [
      ':elephant:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3230,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🦣',
    hexcode: '1f9a3',
    category: 'Animals & Nature',
    subgroup: 'animal-mammal',
    label: 'mammoth',
    tags: [
      'extinction',
      'large',
      'tusk',
      'woolly'
    ],
    shortcodes: [
      ':mammoth:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 13,
    order: 3231,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🦏',
    hexcode: '1f98f',
    category: 'Animals & Nature',
    subgroup: 'animal-mammal',
    label: 'rhinoceros',
    tags: [
      'rhinoceros',
      'rhino',
      'horn',
      'africa'
    ],
    shortcodes: [
      ':rhino:',
      ':rhinoceros:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 3232,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🦛',
    hexcode: '1f99b',
    category: 'Animals & Nature',
    subgroup: 'animal-mammal',
    label: 'hippopotamus',
    tags: [
      'hippo'
    ],
    shortcodes: [
      ':hippo:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 11,
    order: 3233,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🐭',
    hexcode: '1f42d',
    category: 'Animals & Nature',
    subgroup: 'animal-mammal',
    label: 'mouse face',
    tags: [
      'face',
      'mouse',
      'cute',
      'whiskers',
      'tiny',
      'rodent'
    ],
    shortcodes: [
      ':mouse-face:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3234,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🐁',
    hexcode: '1f401',
    category: 'Animals & Nature',
    subgroup: 'animal-mammal',
    label: 'mouse',
    tags: [
      'mouse',
      'small',
      'cute',
      'whiskers',
      'tiny',
      'rodent'
    ],
    shortcodes: [
      ':mouse:'
    ],
    emoticons: [
      '<:3)~'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3235,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🐀',
    hexcode: '1f400',
    category: 'Animals & Nature',
    subgroup: 'animal-mammal',
    label: 'rat',
    tags: [
      'rat',
      'rodent',
      'plaque',
      'fleas',
      'canal',
      'garbage'
    ],
    shortcodes: [
      ':rat:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3236,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🐹',
    hexcode: '1f439',
    category: 'Animals & Nature',
    subgroup: 'animal-mammal',
    label: 'hamster',
    tags: [
      'face',
      'pet',
      'rodent',
      'fat',
      'fluffy',
      'corn'
    ],
    shortcodes: [
      ':hamster:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3237,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🐰',
    hexcode: '1f430',
    category: 'Animals & Nature',
    subgroup: 'animal-mammal',
    label: 'rabbit face',
    tags: [
      'bunny',
      'face',
      'pet',
      'rabbit',
      'rodent',
      'teeth',
      'cute',
      'ears',
      'hopping',
      'easter'
    ],
    shortcodes: [
      ':rabbit-face:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3238,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🐇',
    hexcode: '1f407',
    category: 'Animals & Nature',
    subgroup: 'animal-mammal',
    label: 'rabbit',
    tags: [
      'bunny',
      'pet',
      'rodent',
      'teeth',
      'cute',
      'ears',
      'hopping',
      'easter'
    ],
    shortcodes: [
      ':rabbit:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3239,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🐿️',
    hexcode: '1f43f',
    category: 'Animals & Nature',
    subgroup: 'animal-mammal',
    label: 'chipmunk',
    tags: [
      'squirrel',
      'alvin'
    ],
    shortcodes: [
      ':chipmunk:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3241,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🦫',
    hexcode: '1f9ab',
    category: 'Animals & Nature',
    subgroup: 'animal-mammal',
    label: 'beaver',
    tags: [
      'dam'
    ],
    shortcodes: [
      ':beaver:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 13,
    order: 3242,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🦔',
    hexcode: '1f994',
    category: 'Animals & Nature',
    subgroup: 'animal-mammal',
    label: 'hedgehog',
    tags: [
      'spiny',
      'prickly'
    ],
    shortcodes: [
      ':hedgehog:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 5,
    order: 3243,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🦇',
    hexcode: '1f987',
    category: 'Animals & Nature',
    subgroup: 'animal-mammal',
    label: 'bat',
    tags: [
      'vampire',
      'batman',
      'dracula'
    ],
    shortcodes: [
      ':bat:'
    ],
    emoticons: [
      '⎛⎝(•ⱅ•)⎠⎞'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 3244,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🐻',
    hexcode: '1f43b',
    category: 'Animals & Nature',
    subgroup: 'animal-mammal',
    label: 'bear',
    tags: [
      'face',
      'brown'
    ],
    shortcodes: [
      ':bear-face:'
    ],
    emoticons: [
      'ʕ·ᴥ·ʔ'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3245,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🐻‍❄️',
    hexcode: '1f43b-200d-2744-fe0f',
    category: 'Animals & Nature',
    subgroup: 'animal-mammal',
    label: 'polar bear',
    tags: [
      'arctic',
      'bear',
      'white',
      'ice',
      'animal',
      'ursa'
    ],
    shortcodes: [
      ':polar-bear:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 13,
    order: 3246,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🐨',
    hexcode: '1f428',
    category: 'Animals & Nature',
    subgroup: 'animal-mammal',
    label: 'koala',
    tags: [
      'face',
      'marsupial',
      'grey',
      'fluffy',
      'eucalyptus',
      'australia',
      'clingy'
    ],
    shortcodes: [
      ':koala:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3248,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🐼',
    hexcode: '1f43c',
    category: 'Animals & Nature',
    subgroup: 'animal-mammal',
    label: 'panda',
    tags: [
      'face',
      'kawaii',
      'cute',
      'japan'
    ],
    shortcodes: [
      ':panda:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3249,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🦥',
    hexcode: '1f9a5',
    category: 'Animals & Nature',
    subgroup: 'animal-mammal',
    label: 'sloth',
    tags: [
      'lazy',
      'slow'
    ],
    shortcodes: [
      ':sloth:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12,
    order: 3250,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🦦',
    hexcode: '1f9a6',
    category: 'Animals & Nature',
    subgroup: 'animal-mammal',
    label: 'otter',
    tags: [
      'fishing',
      'playful'
    ],
    shortcodes: [
      ':otter:'
    ],
    emoticons: [
      '(:3ꇤ⁐ꃳ'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12,
    order: 3251,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🦨',
    hexcode: '1f9a8',
    category: 'Animals & Nature',
    subgroup: 'animal-mammal',
    label: 'skunk',
    tags: [
      'stink'
    ],
    shortcodes: [
      ':skunk:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12,
    order: 3252,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🦘',
    hexcode: '1f998',
    category: 'Animals & Nature',
    subgroup: 'animal-mammal',
    label: 'kangaroo',
    tags: [
      'joey',
      'jump',
      'marsupial'
    ],
    shortcodes: [
      ':kangaroo:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 11,
    order: 3253,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🦡',
    hexcode: '1f9a1',
    category: 'Animals & Nature',
    subgroup: 'animal-mammal',
    label: 'badger',
    tags: [
      'honey badger',
      'pester'
    ],
    shortcodes: [
      ':badger:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 11,
    order: 3254,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🐾',
    hexcode: '1f43e',
    category: 'Animals & Nature',
    subgroup: 'animal-mammal',
    label: 'paw prints',
    tags: [
      'feet',
      'paw',
      'print',
      'paws',
      'pet',
      'animal'
    ],
    shortcodes: [
      ':paw prints:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3255,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🦃',
    hexcode: '1f983',
    category: 'Animals & Nature',
    subgroup: 'animal-bird',
    label: 'turkey',
    tags: [
      'bird'
    ],
    shortcodes: [
      ':turkey:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3256,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🐔',
    hexcode: '1f414',
    category: 'Animals & Nature',
    subgroup: 'animal-bird',
    label: 'chicken',
    tags: [
      'bird',
      'egg'
    ],
    shortcodes: [
      ':chicken:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3257,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🐓',
    hexcode: '1f413',
    category: 'Animals & Nature',
    subgroup: 'animal-bird',
    label: 'rooster',
    tags: [
      'bird',
      'egg'
    ],
    shortcodes: [
      ':rooster:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3258,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🐣',
    hexcode: '1f423',
    category: 'Animals & Nature',
    subgroup: 'animal-bird',
    label: 'hatching chick',
    tags: [
      'baby',
      'bird',
      'chick',
      'hatching',
      'egg'
    ],
    shortcodes: [
      ':hatching-chick:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3259,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🐤',
    hexcode: '1f424',
    category: 'Animals & Nature',
    subgroup: 'animal-bird',
    label: 'baby chick',
    tags: [
      'baby',
      'bird',
      'chick',
      'small',
      'egg'
    ],
    shortcodes: [
      ':baby-chick:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3260,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🐥',
    hexcode: '1f425',
    category: 'Animals & Nature',
    subgroup: 'animal-bird',
    label: 'front-facing baby chick',
    tags: [
      'baby',
      'bird',
      'chick'
    ],
    shortcodes: [
      ':hatched-chick:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3261,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🐦️',
    hexcode: '1f426',
    category: 'Animals & Nature',
    subgroup: 'animal-bird',
    label: 'bird',
    tags: [
      'bird',
      'fly',
      'colourful'
    ],
    shortcodes: [
      ':bird:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3262,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🐧',
    hexcode: '1f427',
    category: 'Animals & Nature',
    subgroup: 'animal-bird',
    label: 'penguin',
    tags: [
      'bird'
    ],
    shortcodes: [
      ':penguin:'
    ],
    emoticons: [
      '<(")'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3263,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🕊️',
    hexcode: '1f54a',
    category: 'Animals & Nature',
    subgroup: 'animal-bird',
    label: 'dove',
    tags: [
      'bird',
      'fly',
      'peace'
    ],
    shortcodes: [
      ':peace:',
      ':dove:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3265,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🦅',
    hexcode: '1f985',
    category: 'Animals & Nature',
    subgroup: 'animal-bird',
    label: 'eagle',
    tags: [
      'bird',
      'fly'
    ],
    shortcodes: [
      ':eagle:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 3266,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🦆',
    hexcode: '1f986',
    category: 'Animals & Nature',
    subgroup: 'animal-bird',
    label: 'duck',
    tags: [
      'bird',
      'water',
      'fly'
    ],
    shortcodes: [
      ':duck:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 3267,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🦢',
    hexcode: '1f9a2',
    category: 'Animals & Nature',
    subgroup: 'animal-bird',
    label: 'swan',
    tags: [
      'bird',
      'cygnet',
      'ugly duckling'
    ],
    shortcodes: [
      ':swan:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 11,
    order: 3268,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🦉',
    hexcode: '1f989',
    category: 'Animals & Nature',
    subgroup: 'animal-bird',
    label: 'owl',
    tags: [
      'bird',
      'wise'
    ],
    shortcodes: [
      ':owl:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 3269,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🦤',
    hexcode: '1f9a4',
    category: 'Animals & Nature',
    subgroup: 'animal-bird',
    label: 'dodo',
    tags: [
      'extinction',
      'large',
      'mauritius'
    ],
    shortcodes: [
      ':dodo:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 13,
    order: 3270,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🪶',
    hexcode: '1fab6',
    category: 'Animals & Nature',
    subgroup: 'animal-bird',
    label: 'feather',
    tags: [
      'bird',
      'flight',
      'light',
      'plumage'
    ],
    shortcodes: [
      ':feather:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 13,
    order: 3271,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🦩',
    hexcode: '1f9a9',
    category: 'Animals & Nature',
    subgroup: 'animal-bird',
    label: 'flamingo',
    tags: [
      'flamboyant',
      'tropical',
      'flamingo'
    ],
    shortcodes: [
      ':flamingo:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12,
    order: 3272,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🦚',
    hexcode: '1f99a',
    category: 'Animals & Nature',
    subgroup: 'animal-bird',
    label: 'peacock',
    tags: [
      'bird',
      'ostentatious',
      'peahen',
      'proud'
    ],
    shortcodes: [
      ':peacock:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 11,
    order: 3273,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🦜',
    hexcode: '1f99c',
    category: 'Animals & Nature',
    subgroup: 'animal-bird',
    label: 'parrot',
    tags: [
      'bird',
      'pirate',
      'talk'
    ],
    shortcodes: [
      ':parrot:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 11,
    order: 3274,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🪽',
    hexcode: '1fabd',
    category: 'Animals & Nature',
    subgroup: 'animal-bird',
    label: 'wing',
    tags: [
      'angelic',
      'aviation',
      'bird',
      'flying',
      'mythology'
    ],
    shortcodes: [
      ':wing:; :fly:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 15,
    order: 3275,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🐦‍⬛',
    hexcode: '1f426-200d-2b1b',
    category: 'Animals & Nature',
    subgroup: 'animal-bird',
    label: 'black bird',
    tags: [
      'bird',
      'black',
      'crow',
      'raven',
      'rook'
    ],
    shortcodes: [
      ':black-bird:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 15,
    order: 3276,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🪿',
    hexcode: '1fabf',
    category: 'Animals & Nature',
    subgroup: 'animal-bird',
    label: 'goose',
    tags: [
      'bird',
      'fowl',
      'honk',
      'silly'
    ],
    shortcodes: [
      ':goose:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 15,
    order: 3277,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🐸',
    hexcode: '1f438',
    category: 'Animals & Nature',
    subgroup: 'animal-amphibian',
    label: 'frog',
    tags: [
      'face',
      'jump',
      'green'
    ],
    shortcodes: [
      ':frog:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3278,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🐊',
    hexcode: '1f40a',
    category: 'Animals & Nature',
    subgroup: 'animal-reptile',
    label: 'crocodile',
    tags: [
      'crocodile',
      'dinosaur'
    ],
    shortcodes: [
      ':crocodile:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3279,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🐢',
    hexcode: '1f422',
    category: 'Animals & Nature',
    subgroup: 'animal-reptile',
    label: 'turtle',
    tags: [
      'terrapin',
      'tortoise',
      'slow',
      'water',
      'sand'
    ],
    shortcodes: [
      ':turtle:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3280,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🦎',
    hexcode: '1f98e',
    category: 'Animals & Nature',
    subgroup: 'animal-reptile',
    label: 'lizard',
    tags: [
      'reptile',
      'fast',
      'small'
    ],
    shortcodes: [
      ':lizard:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 3281,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🐍',
    hexcode: '1f40d',
    category: 'Animals & Nature',
    subgroup: 'animal-reptile',
    label: 'snake',
    tags: [
      'bearer',
      'ophiuchus',
      'serpent',
      'zodiac',
      'wriggle',
      'fast'
    ],
    shortcodes: [
      ':snake:'
    ],
    emoticons: [
      '～>゜）～～～～'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3282,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🐲',
    hexcode: '1f432',
    category: 'Animals & Nature',
    subgroup: 'animal-reptile',
    label: 'dragon face',
    tags: [
      'dragon',
      'face',
      'fairy tale',
      'fire',
      'fly'
    ],
    shortcodes: [
      ':dragon-face:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3283,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🐉',
    hexcode: '1f409',
    category: 'Animals & Nature',
    subgroup: 'animal-reptile',
    label: 'dragon',
    tags: [
      'fairy tale',
      'fire',
      'fly'
    ],
    shortcodes: [
      ':dragon:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3284,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🦕',
    hexcode: '1f995',
    category: 'Animals & Nature',
    subgroup: 'animal-reptile',
    label: 'sauropod',
    tags: [
      'brachiosaurus',
      'brontosaurus',
      'diplodocus',
      'dinosaur'
    ],
    shortcodes: [
      ':dinosaur:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 5,
    order: 3285,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🦖',
    hexcode: '1f996',
    category: 'Animals & Nature',
    subgroup: 'animal-reptile',
    label: 'T-Rex',
    tags: [
      't-rex',
      'tyrannosaurus rex',
      'dinosaur'
    ],
    shortcodes: [
      ':t-rex:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 5,
    order: 3286,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🐳',
    hexcode: '1f433',
    category: 'Animals & Nature',
    subgroup: 'animal-marine',
    label: 'spouting whale',
    tags: [
      'face',
      'spouting',
      'whale',
      'cetacean',
      'swim',
      'animal',
      'water'
    ],
    shortcodes: [
      ':whale:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3287,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🐋',
    hexcode: '1f40b',
    category: 'Animals & Nature',
    subgroup: 'animal-marine',
    label: 'whale',
    tags: [
      'whale',
      'cetacean',
      'swim',
      'animal',
      'water'
    ],
    shortcodes: [
      ':humpback-whale:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3288,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🐬',
    hexcode: '1f42c',
    category: 'Animals & Nature',
    subgroup: 'animal-marine',
    label: 'dolphin',
    tags: [
      'flipper',
      'cetacean',
      'swim',
      'animal',
      'water'
    ],
    shortcodes: [
      ':dolphin:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3289,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🦭',
    hexcode: '1f9ad',
    category: 'Animals & Nature',
    subgroup: 'animal-marine',
    label: 'seal',
    tags: [
      'sea lion'
    ],
    shortcodes: [
      ':seal:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 13,
    order: 3290,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🐟️',
    hexcode: '1f41f',
    category: 'Animals & Nature',
    subgroup: 'animal-marine',
    label: 'fish',
    tags: [
      'pisces',
      'zodiac',
      'swim',
      'animal',
      'water'
    ],
    shortcodes: [
      ':fish:'
    ],
    emoticons: [
      '<><'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3291,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🐠',
    hexcode: '1f420',
    category: 'Animals & Nature',
    subgroup: 'animal-marine',
    label: 'tropical fish',
    tags: [
      'fish',
      'tropical',
      'swim',
      'animal',
      'water'
    ],
    shortcodes: [
      ':tropical-fish:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3292,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🐡',
    hexcode: '1f421',
    category: 'Animals & Nature',
    subgroup: 'animal-marine',
    label: 'blowfish',
    tags: [
      'fish',
      'swim',
      'animal',
      'water'
    ],
    shortcodes: [
      ':blowfish:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3293,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🦈',
    hexcode: '1f988',
    category: 'Animals & Nature',
    subgroup: 'animal-marine',
    label: 'shark',
    tags: [
      'fish',
      'swim',
      'animal',
      'water'
    ],
    shortcodes: [
      ':shark:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 3294,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🐙',
    hexcode: '1f419',
    category: 'Animals & Nature',
    subgroup: 'animal-marine',
    label: 'octopus',
    tags: [
      'octopus',
      'swim',
      'animal',
      'water'
    ],
    shortcodes: [
      ':octopus:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3295,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🐚',
    hexcode: '1f41a',
    category: 'Animals & Nature',
    subgroup: 'animal-marine',
    label: 'spiral shell',
    tags: [
      'shell',
      'spiral',
      'beach',
      'sand',
      'water'
    ],
    shortcodes: [
      ':shell:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3296,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🪸',
    hexcode: '1fab8',
    category: 'Animals & Nature',
    subgroup: 'animal-marine',
    label: 'coral',
    tags: [
      'ocean',
      'reef'
    ],
    shortcodes: [
      ':coral:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 14,
    order: 3297,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🪼',
    hexcode: '1fabc',
    category: 'Animals & Nature',
    subgroup: 'animal-marine',
    label: 'jellyfish',
    tags: [
      'burn',
      'invertebrate',
      'jelly',
      'marine',
      'ouch',
      'stinger'
    ],
    shortcodes: [
      ':jellyfish:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 15,
    order: 3298,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🐌',
    hexcode: '1f40c',
    category: 'Animals & Nature',
    subgroup: 'animal-bug',
    label: 'snail',
    tags: [
      'snail'
    ],
    shortcodes: [
      ':snail:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3299,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🦋',
    hexcode: '1f98b',
    category: 'Animals & Nature',
    subgroup: 'animal-bug',
    label: 'butterfly',
    tags: [
      'insect',
      'pretty'
    ],
    shortcodes: [
      ':butterfly:'
    ],
    emoticons: [
      'εїз'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 3300,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🐛',
    hexcode: '1f41b',
    category: 'Animals & Nature',
    subgroup: 'animal-bug',
    label: 'bug',
    tags: [
      'insect'
    ],
    shortcodes: [
      ':bug:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3301,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🐜',
    hexcode: '1f41c',
    category: 'Animals & Nature',
    subgroup: 'animal-bug',
    label: 'ant',
    tags: [
      'insect'
    ],
    shortcodes: [
      ':ant:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3302,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🐝',
    hexcode: '1f41d',
    category: 'Animals & Nature',
    subgroup: 'animal-bug',
    label: 'honeybee',
    tags: [
      'bee',
      'insect'
    ],
    shortcodes: [
      ':bee:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3303,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🪲',
    hexcode: '1fab2',
    category: 'Animals & Nature',
    subgroup: 'animal-bug',
    label: 'beetle',
    tags: [
      'bug',
      'insect'
    ],
    shortcodes: [
      ':beetle:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 13,
    order: 3304,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🐞',
    hexcode: '1f41e',
    category: 'Animals & Nature',
    subgroup: 'animal-bug',
    label: 'lady beetle',
    tags: [
      'beetle',
      'insect',
      'ladybird',
      'ladybug'
    ],
    shortcodes: [
      ':lady-bug:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3305,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🦗',
    hexcode: '1f997',
    category: 'Animals & Nature',
    subgroup: 'animal-bug',
    label: 'cricket',
    tags: [
      'grasshopper'
    ],
    shortcodes: [
      ':cricket:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 5,
    order: 3306,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🪳',
    hexcode: '1fab3',
    category: 'Animals & Nature',
    subgroup: 'animal-bug',
    label: 'cockroach',
    tags: [
      'insect',
      'pest',
      'roach'
    ],
    shortcodes: [
      ':cockroach:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 13,
    order: 3307,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🕷️',
    hexcode: '1f577',
    category: 'Animals & Nature',
    subgroup: 'animal-bug',
    label: 'spider',
    tags: [
      'insect'
    ],
    shortcodes: [
      ':spider:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3309,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🕸️',
    hexcode: '1f578',
    category: 'Animals & Nature',
    subgroup: 'animal-bug',
    label: 'spider web',
    tags: [
      'spider',
      'web'
    ],
    shortcodes: [
      ':spider-web:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3311,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🦂',
    hexcode: '1f982',
    category: 'Animals & Nature',
    subgroup: 'animal-bug',
    label: 'scorpion',
    tags: [
      'scorpio',
      'zodiac'
    ],
    shortcodes: [
      ':scorpion:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3312,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🦟',
    hexcode: '1f99f',
    category: 'Animals & Nature',
    subgroup: 'animal-bug',
    label: 'mosquito',
    tags: [
      'disease',
      'fever',
      'malaria',
      'pest',
      'virus'
    ],
    shortcodes: [
      ':mosquito:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 11,
    order: 3313,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🪰',
    hexcode: '1fab0',
    category: 'Animals & Nature',
    subgroup: 'animal-bug',
    label: 'fly',
    tags: [
      'disease',
      'maggot',
      'pest',
      'rotting'
    ],
    shortcodes: [
      ':fly:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 13,
    order: 3314,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🪱',
    hexcode: '1fab1',
    category: 'Animals & Nature',
    subgroup: 'animal-bug',
    label: 'worm',
    tags: [
      'annelid',
      'earthworm',
      'parasite'
    ],
    shortcodes: [
      ':worm:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 13,
    order: 3315,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🦠',
    hexcode: '1f9a0',
    category: 'Animals & Nature',
    subgroup: 'animal-bug',
    label: 'microbe',
    tags: [
      'amoeba',
      'bacteria',
      'virus',
      'corona',
      'covid-19'
    ],
    shortcodes: [
      ':microbe:',
      ':virus:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 11,
    order: 3316,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '💐',
    hexcode: '1f490',
    category: 'Animals & Nature',
    subgroup: 'plant-flower',
    label: 'bouquet',
    tags: [
      'flower',
      'present',
      'tulip',
      'bouquet'
    ],
    shortcodes: [
      ':bouquet:',
      ':flowers:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3317,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🌸',
    hexcode: '1f338',
    category: 'Animals & Nature',
    subgroup: 'plant-flower',
    label: 'cherry blossom',
    tags: [
      'blossom',
      'cherry',
      'flower',
      'pink'
    ],
    shortcodes: [
      ':cherry-blossom:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3318,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '💮',
    hexcode: '1f4ae',
    category: 'Animals & Nature',
    subgroup: 'plant-flower',
    label: 'white flower',
    tags: [
      'flower'
    ],
    shortcodes: [
      ':white-flower:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3319,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🪷',
    hexcode: '1fab7',
    category: 'Animals & Nature',
    subgroup: 'plant-flower',
    label: 'lotus',
    tags: [
      'buddhism',
      'flower',
      'hinduism',
      'purity'
    ],
    shortcodes: [
      ':lotus:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 14,
    order: 3320,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🏵️',
    hexcode: '1f3f5',
    category: 'Animals & Nature',
    subgroup: 'plant-flower',
    label: 'rosette',
    tags: [
      'plant'
    ],
    shortcodes: [
      ':rosette:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3322,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🌹',
    hexcode: '1f339',
    category: 'Animals & Nature',
    subgroup: 'plant-flower',
    label: 'rose',
    tags: [
      'flower',
      'rose',
      'red',
      'nature',
      'present',
      'valentines day'
    ],
    shortcodes: [
      ':rose:'
    ],
    emoticons: [
      '@-,-\'-,-'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3323,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🥀',
    hexcode: '1f940',
    category: 'Animals & Nature',
    subgroup: 'plant-flower',
    label: 'wilted flower',
    tags: [
      'flower',
      'wilted',
      'rose',
      'red',
      'sad',
      'plant'
    ],
    shortcodes: [
      ':wilted-flower:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 3324,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🌺',
    hexcode: '1f33a',
    category: 'Animals & Nature',
    subgroup: 'plant-flower',
    label: 'hibiscus',
    tags: [
      'flower',
      'pink'
    ],
    shortcodes: [
      ':hibiscus:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3325,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🌻',
    hexcode: '1f33b',
    category: 'Animals & Nature',
    subgroup: 'plant-flower',
    label: 'sunflower',
    tags: [
      'flower',
      'sun',
      'yellow',
      'summer'
    ],
    shortcodes: [
      ':sunflower:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3326,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🌼',
    hexcode: '1f33c',
    category: 'Animals & Nature',
    subgroup: 'plant-flower',
    label: 'blossom',
    tags: [
      'flower',
      'yellow',
      'nature'
    ],
    shortcodes: [
      ':blossom:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3327,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🌷',
    hexcode: '1f337',
    category: 'Animals & Nature',
    subgroup: 'plant-flower',
    label: 'tulip',
    tags: [
      'flower',
      'pink',
      'eastern'
    ],
    shortcodes: [
      ':tulip:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3328,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🪻',
    hexcode: '1fabb',
    category: 'Animals & Nature',
    subgroup: 'plant-flower',
    label: 'hyacinth',
    tags: [
      'bluebonnet',
      'flower',
      'lavender',
      'lupine',
      'snapdragon'
    ],
    shortcodes: [
      ':hyacinth:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 15,
    order: 3329,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🌱',
    hexcode: '1f331',
    category: 'Animals & Nature',
    subgroup: 'plant-other',
    label: 'seedling',
    tags: [
      'young',
      'farming',
      'growing',
      'green',
      'leaf',
      'leaves',
      'plant'
    ],
    shortcodes: [
      ':plant:',
      ':seed:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3330,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🪴',
    hexcode: '1fab4',
    category: 'Animals & Nature',
    subgroup: 'plant-other',
    label: 'potted plant',
    tags: [
      'boring',
      'grow',
      'house',
      'nurturing',
      'plant',
      'useless'
    ],
    shortcodes: [
      ':potted-plant:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 13,
    order: 3331,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🌲',
    hexcode: '1f332',
    category: 'Animals & Nature',
    subgroup: 'plant-other',
    label: 'evergreen tree',
    tags: [
      'tree',
      'green',
      'fir',
      'plant'
    ],
    shortcodes: [
      ':evergreen-tree:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3332,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🌳',
    hexcode: '1f333',
    category: 'Animals & Nature',
    subgroup: 'plant-other',
    label: 'deciduous tree',
    tags: [
      'deciduous',
      'shedding',
      'tree',
      'green',
      'plant'
    ],
    shortcodes: [
      ':deciduous-tree:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3333,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🌴',
    hexcode: '1f334',
    category: 'Animals & Nature',
    subgroup: 'plant-other',
    label: 'palm tree',
    tags: [
      'palm',
      'tree',
      'sea',
      'vacation',
      'beach',
      'relax'
    ],
    shortcodes: [
      ':palm-tree:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3334,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🌵',
    hexcode: '1f335',
    category: 'Animals & Nature',
    subgroup: 'plant-other',
    label: 'cactus',
    tags: [
      'plant',
      'desert',
      'sun',
      'warm',
      'hot',
      'texas'
    ],
    shortcodes: [
      ':cactus:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3335,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🌾',
    hexcode: '1f33e',
    category: 'Animals & Nature',
    subgroup: 'plant-other',
    label: 'sheaf of rice',
    tags: [
      'ear',
      'grain',
      'rice'
    ],
    shortcodes: [
      ':ear-of-rice:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3336,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🌿',
    hexcode: '1f33f',
    category: 'Animals & Nature',
    subgroup: 'plant-other',
    label: 'herb',
    tags: [
      'leaf',
      'green',
      'leaves',
      'plant'
    ],
    shortcodes: [
      ':herb:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3337,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '☘️',
    hexcode: '2618',
    category: 'Animals & Nature',
    subgroup: 'plant-other',
    label: 'shamrock',
    tags: [
      'plant',
      'green',
      'leaf',
      'leaves'
    ],
    shortcodes: [
      ':shamrock:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3339,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🍀',
    hexcode: '1f340',
    category: 'Animals & Nature',
    subgroup: 'plant-other',
    label: 'four leaf clover',
    tags: [
      '4',
      'clover',
      'four',
      'four-leaf clover',
      'leaf',
      'luck',
      'leaves',
      'green',
      'plant'
    ],
    shortcodes: [
      ':luck:',
      ':four-leaf-clover:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3340,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🍁',
    hexcode: '1f341',
    category: 'Animals & Nature',
    subgroup: 'plant-other',
    label: 'maple leaf',
    tags: [
      'falling',
      'leaf',
      'maple',
      'autumn',
      'fall',
      'orange'
    ],
    shortcodes: [
      ':maple-leaf:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3341,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🍂',
    hexcode: '1f342',
    category: 'Animals & Nature',
    subgroup: 'plant-other',
    label: 'fallen leaf',
    tags: [
      'falling',
      'leaf'
    ],
    shortcodes: [
      ':fallen-leaf:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3342,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🍃',
    hexcode: '1f343',
    category: 'Animals & Nature',
    subgroup: 'plant-other',
    label: 'leaf fluttering in wind',
    tags: [
      'blow',
      'flutter',
      'leaf',
      'wind'
    ],
    shortcodes: [
      ':leaves:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3343,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🪹',
    hexcode: '1fab9',
    category: 'Animals & Nature',
    subgroup: 'plant-other',
    label: 'empty nest',
    tags: [
      'nesting'
    ],
    shortcodes: [
      ':nest:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 14,
    order: 3344,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🪺',
    hexcode: '1faba',
    category: 'Animals & Nature',
    subgroup: 'plant-other',
    label: 'nest with eggs',
    tags: [
      'nesting'
    ],
    shortcodes: [
      ':nest-with-eggs:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 14,
    order: 3345,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🍄',
    hexcode: '1f344',
    category: 'Animals & Nature',
    subgroup: 'plant-other',
    label: 'mushroom',
    tags: [
      'toadstool',
      'mushroom'
    ],
    shortcodes: [
      ':mushroom:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3346,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🍇',
    hexcode: '1f347',
    category: 'Food & Drink',
    subgroup: 'food-fruit',
    label: 'grapes',
    tags: [
      'fruit',
      'grape'
    ],
    shortcodes: [
      ':grapes:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3347,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🍈',
    hexcode: '1f348',
    category: 'Food & Drink',
    subgroup: 'food-fruit',
    label: 'melon',
    tags: [
      'fruit'
    ],
    shortcodes: [
      ':melon:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3348,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🍉',
    hexcode: '1f349',
    category: 'Food & Drink',
    subgroup: 'food-fruit',
    label: 'watermelon',
    tags: [
      'fruit',
      'melon',
      'red'
    ],
    shortcodes: [
      ':watermelon:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3349,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🍊',
    hexcode: '1f34a',
    category: 'Food & Drink',
    subgroup: 'food-fruit',
    label: 'orange',
    tags: [
      'fruit',
      'tangerine',
      'mandarin'
    ],
    shortcodes: [
      ':tangerine:',
      ':orange:',
      ':mandarin:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3350,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🍋',
    hexcode: '1f34b',
    category: 'Food & Drink',
    subgroup: 'food-fruit',
    label: 'lemon',
    tags: [
      'citrus',
      'fruit',
      'yellow'
    ],
    shortcodes: [
      ':lemon:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3351,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🍌',
    hexcode: '1f34c',
    category: 'Food & Drink',
    subgroup: 'food-fruit',
    label: 'banana',
    tags: [
      'fruit',
      'yellow'
    ],
    shortcodes: [
      ':banana:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3352,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🍍',
    hexcode: '1f34d',
    category: 'Food & Drink',
    subgroup: 'food-fruit',
    label: 'pineapple',
    tags: [
      'fruit',
      'tropical'
    ],
    shortcodes: [
      ':pineapple:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3353,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🥭',
    hexcode: '1f96d',
    category: 'Food & Drink',
    subgroup: 'food-fruit',
    label: 'mango',
    tags: [
      'fruit',
      'tropical'
    ],
    shortcodes: [
      ':mango:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 11,
    order: 3354,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🍎',
    hexcode: '1f34e',
    category: 'Food & Drink',
    subgroup: 'food-fruit',
    label: 'red apple',
    tags: [
            'red',
      'apple',
      'fruit',

    ],
    shortcodes: [
      ':red-apple:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3355,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🍏',
    hexcode: '1f34f',
    category: 'Food & Drink',
    subgroup: 'food-fruit',
    label: 'green apple',
    tags: [
            'green',
      'apple',
      'fruit',

    ],
    shortcodes: [
      ':green-apple:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3356,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🍐',
    hexcode: '1f350',
    category: 'Food & Drink',
    subgroup: 'food-fruit',
    label: 'pear',
    tags: [
      'fruit',
      'green'
    ],
    shortcodes: [
      ':pear:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3357,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🍑',
    hexcode: '1f351',
    category: 'Food & Drink',
    subgroup: 'food-fruit',
    label: 'peach',
    tags: [
      'fruit',
      'pink',
      'red'
    ],
    shortcodes: [
      ':peach:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3358,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🍒',
    hexcode: '1f352',
    category: 'Food & Drink',
    subgroup: 'food-fruit',
    label: 'cherries',
    tags: [
      'cherry',
      'fruit',
      'red'
    ],
    shortcodes: [
      ':cherries:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3359,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🍓',
    hexcode: '1f353',
    category: 'Food & Drink',
    subgroup: 'food-fruit',
    label: 'strawberry',
    tags: [
      'berry',
      'fruit'
    ],
    shortcodes: [
      ':strawberry:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3360,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🫐',
    hexcode: '1fad0',
    category: 'Food & Drink',
    subgroup: 'food-fruit',
    label: 'blueberries',
    tags: [      
      'blue',
      'berry',

      'blueberry'
    ],
    shortcodes: [
      ':blueberries:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 13,
    order: 3361,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🥝',
    hexcode: '1f95d',
    category: 'Food & Drink',
    subgroup: 'food-fruit',
    label: 'kiwi fruit',
    tags: [
      'food',
      'fruit',
      'kiwi',
      'green'
    ],
    shortcodes: [
      ':kiwi-fruit:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 3362,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🍅',
    hexcode: '1f345',
    category: 'Food & Drink',
    subgroup: 'food-fruit',
    label: 'tomato',
    tags: [
      'fruit',
      'vegetable',
      'red'
    ],
    shortcodes: [
      ':tomato:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3363,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🫒',
    hexcode: '1fad2',
    category: 'Food & Drink',
    subgroup: 'food-fruit',
    label: 'olive',
    tags: [
      'food'
    ],
    shortcodes: [
      ':olive:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 13,
    order: 3364,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🥥',
    hexcode: '1f965',
    category: 'Food & Drink',
    subgroup: 'food-fruit',
    label: 'coconut',
    tags: [
      'tropical',
      'piña colada',
      'nut'
    ],
    shortcodes: [
      ':coconut:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 5,
    order: 3365,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🥑',
    hexcode: '1f951',
    category: 'Food & Drink',
    subgroup: 'food-vegetable',
    label: 'avocado',
    tags: [
      'food',
      'fruit',
      'avocado',
      'guacamole'
    ],
    shortcodes: [
      ':avocado:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 3366,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🍆',
    hexcode: '1f346',
    category: 'Food & Drink',
    subgroup: 'food-vegetable',
    label: 'eggplant',
    tags: [
      'aubergine',
      'vegetable',
      'purple'
    ],
    shortcodes: [
      ':eggplant:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3367,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🥔',
    hexcode: '1f954',
    category: 'Food & Drink',
    subgroup: 'food-vegetable',
    label: 'potato',
    tags: [
      'food',
      'vegetable',
  
    ],
    shortcodes: [
      ':potato:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 3368,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🥕',
    hexcode: '1f955',
    category: 'Food & Drink',
    subgroup: 'food-vegetable',
    label: 'carrot',
    tags: [
      'food',
      'vegetable',
      'orange'
    ],
    shortcodes: [
      ':carrot:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 3369,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🌽',
    hexcode: '1f33d',
    category: 'Food & Drink',
    subgroup: 'food-vegetable',
    label: 'ear of corn',
    tags: [
      'corn',
      'ear',
      'maize',
      'yellow'
    ],
    shortcodes: [
      ':ear-of-corn:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3370,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🌶️',
    hexcode: '1f336',
    category: 'Food & Drink',
    subgroup: 'food-vegetable',
    label: 'hot pepper',
    tags: [
      'hot',
      'spicy',
      'pepper',
      'red'
    ],
    shortcodes: [
      ':hot-pepper:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3372,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🫑',
    hexcode: '1fad1',
    category: 'Food & Drink',
    subgroup: 'food-vegetable',
    label: 'bell pepper',
    tags: [
      'pepper',
      'vegetable'
    ],
    shortcodes: [
      ':bell-pepper:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 13,
    order: 3373,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🥒',
    hexcode: '1f952',
    category: 'Food & Drink',
    subgroup: 'food-vegetable',
    label: 'cucumber',
    tags: [
      'food',
      'pickle',
      'vegetable'
    ],
    shortcodes: [
      ':cucumber:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 3374,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🥬',
    hexcode: '1f96c',
    category: 'Food & Drink',
    subgroup: 'food-vegetable',
    label: 'leafy green',
    tags: [
      'bok choy',
      'cabbage',
      'kale',
      'lettuce'
    ],
    shortcodes: [
      ':leafy-green:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 11,
    order: 3375,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🥦',
    hexcode: '1f966',
    category: 'Food & Drink',
    subgroup: 'food-vegetable',
    label: 'broccoli',
    tags: [
      'wild cabbage'
    ],
    shortcodes: [
      ':broccoli:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 5,
    order: 3376,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🧄',
    hexcode: '1f9c4',
    category: 'Food & Drink',
    subgroup: 'food-vegetable',
    label: 'garlic',
    tags: [
      'flavoring'
    ],
    shortcodes: [
      ':garlic:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12,
    order: 3377,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🧅',
    hexcode: '1f9c5',
    category: 'Food & Drink',
    subgroup: 'food-vegetable',
    label: 'onion',
    tags: [
      'flavoring'
    ],
    shortcodes: [
      ':onion:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12,
    order: 3378,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🥜',
    hexcode: '1f95c',
    category: 'Food & Drink',
    subgroup: 'food-vegetable',
    label: 'peanuts',
    tags: [
      'food',
      'nut',
      'peanut',
      'vegetable'
    ],
    shortcodes: [
      ':peanuts:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 3379,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🫘',
    hexcode: '1fad8',
    category: 'Food & Drink',
    subgroup: 'food-vegetable',
    label: 'beans',
    tags: [
      'food',
      'kidney',
      'legume'
    ],
    shortcodes: [
      ':beans:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 14,
    order: 3380,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🌰',
    hexcode: '1f330',
    category: 'Food & Drink',
    subgroup: 'food-vegetable',
    label: 'chestnut',
    tags: [
      'plant'
    ],
    shortcodes: [
      ':chestnut:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3381,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🫚',
    hexcode: '1fada',
    category: 'Food & Drink',
    subgroup: 'food-vegetable',
    label: 'ginger root',
    tags: [
      'beer',
      'root',
      'spice'
    ],
    shortcodes: [
      ':ginger:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 15,
    order: 3382,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🫛',
    hexcode: '1fadb',
    category: 'Food & Drink',
    subgroup: 'food-vegetable',
    label: 'pea pod',
    tags: [
      'beans',
      'edamame',
      'legume',
      'pea',
      'pod',
      'vegetable'
    ],
    shortcodes: [
      ':pea-pod:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 15,
    order: 3383,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🍞',
    hexcode: '1f35e',
    category: 'Food & Drink',
    subgroup: 'food-prepared',
    label: 'bread',
    tags: [
      'loaf'
    ],
    shortcodes: [
      ':bread:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3384,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🥐',
    hexcode: '1f950',
    category: 'Food & Drink',
    subgroup: 'food-prepared',
    label: 'croissant',
    tags: [
      'bread',
      'breakfast',
      'food',
      'french',
      'roll'
    ],
    shortcodes: [
      ':croissant:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 3385,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🥖',
    hexcode: '1f956',
    category: 'Food & Drink',
    subgroup: 'food-prepared',
    label: 'baguette bread',
    tags: [
      'baguette',
      'bread',
      'food',
      'french'
    ],
    shortcodes: [
      ':baguette-bread:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 3386,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🫓',
    hexcode: '1fad3',
    category: 'Food & Drink',
    subgroup: 'food-prepared',
    label: 'flatbread',
    tags: [
      'arepa',
      'lavash',
      'naan',
      'pita'
    ],
    shortcodes: [
      ':flatbread:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 13,
    order: 3387,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🥨',
    hexcode: '1f968',
    category: 'Food & Drink',
    subgroup: 'food-prepared',
    label: 'pretzel',
    tags: [
      'twisted'
    ],
    shortcodes: [
      ':pretzel:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 5,
    order: 3388,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🥯',
    hexcode: '1f96f',
    category: 'Food & Drink',
    subgroup: 'food-prepared',
    label: 'bagel',
    tags: [
      'bakery',
      'breakfast',
      'schmear'
    ],
    shortcodes: [
      ':bagel:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 11,
    order: 3389,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🥞',
    hexcode: '1f95e',
    category: 'Food & Drink',
    subgroup: 'food-prepared',
    label: 'pancakes',
    tags: [
      'breakfast',
      'crêpe',
      'hotcake',
      'pancake'
    ],
    shortcodes: [
      ':pancakes:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 3390,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🧇',
    hexcode: '1f9c7',
    category: 'Food & Drink',
    subgroup: 'food-prepared',
    label: 'waffle',
    tags: [
      'breakfast',
      'iron'
    ],
    shortcodes: [
      ':waffle:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12,
    order: 3391,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🧀',
    hexcode: '1f9c0',
    category: 'Food & Drink',
    subgroup: 'food-prepared',
    label: 'cheese wedge',
    tags: [
      'cheese'
    ],
    shortcodes: [
      ':cheese-wedge:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3392,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🍖',
    hexcode: '1f356',
    category: 'Food & Drink',
    subgroup: 'food-prepared',
    label: 'meat on bone',
    tags: [
      'bone',
      'meat'
    ],
    shortcodes: [
      ':meat-on-bone:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3393,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🍗',
    hexcode: '1f357',
    category: 'Food & Drink',
    subgroup: 'food-prepared',
    label: 'poultry leg',
    tags: [
      'bone',
      'chicken',
      'drumstick',
      'leg',
      'poultry'
    ],
    shortcodes: [
      ':poultry-leg:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3394,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🥩',
    hexcode: '1f969',
    category: 'Food & Drink',
    subgroup: 'food-prepared',
    label: 'cut of meat',
    tags: [
      'chop',
      'lambchop',
      'porkchop',
      'steak'
    ],
    shortcodes: [
      ':cut-of-meat:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 5,
    order: 3395,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🥓',
    hexcode: '1f953',
    category: 'Food & Drink',
    subgroup: 'food-prepared',
    label: 'bacon',
    tags: [
      'breakfast',
      'food',
      'meat'
    ],
    shortcodes: [
      ':bacon:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 3396,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🍔',
    hexcode: '1f354',
    category: 'Food & Drink',
    subgroup: 'food-prepared',
    label: 'hamburger',
    tags: [
      'burger'
    ],
    shortcodes: [
      ':hamburger:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3397,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🍟',
    hexcode: '1f35f',
    category: 'Food & Drink',
    subgroup: 'food-prepared',
    label: 'french fries',
    tags: [
      'french',
      'fries'
    ],
    shortcodes: [
      ':french-fries:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3398,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🍕',
    hexcode: '1f355',
    category: 'Food & Drink',
    subgroup: 'food-prepared',
    label: 'pizza',
    tags: [
      'cheese',
      'slice'
    ],
    shortcodes: [
      ':pizza:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3399,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🌭',
    hexcode: '1f32d',
    category: 'Food & Drink',
    subgroup: 'food-prepared',
    label: 'hot dog',
    tags: [
      'frankfurter',
      'hotdog',
      'sausage'
    ],
    shortcodes: [
      ':hot-dog:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3400,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🥪',
    hexcode: '1f96a',
    category: 'Food & Drink',
    subgroup: 'food-prepared',
    label: 'sandwich',
    tags: [
      'bread'
    ],
    shortcodes: [
      ':sandwich:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 5,
    order: 3401,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🌮',
    hexcode: '1f32e',
    category: 'Food & Drink',
    subgroup: 'food-prepared',
    label: 'taco',
    tags: [
      'mexican'
    ],
    shortcodes: [
      ':taco:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3402,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🌯',
    hexcode: '1f32f',
    category: 'Food & Drink',
    subgroup: 'food-prepared',
    label: 'burrito',
    tags: [
      'mexican',
      'wrap'
    ],
    shortcodes: [
      ':burrito:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3403,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🫔',
    hexcode: '1fad4',
    category: 'Food & Drink',
    subgroup: 'food-prepared',
    label: 'tamale',
    tags: [
      'mexican',
      'wrapped'
    ],
    shortcodes: [
      ':tamale:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 13,
    order: 3404,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🥙',
    hexcode: '1f959',
    category: 'Food & Drink',
    subgroup: 'food-prepared',
    label: 'stuffed flatbread',
    tags: [
      'falafel',
      'flatbread',
      'food',
      'gyro',
      'kebab',
      'stuffed'
    ],
    shortcodes: [
      ':stuffed-flatbread:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 3405,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🧆',
    hexcode: '1f9c6',
    category: 'Food & Drink',
    subgroup: 'food-prepared',
    label: 'falafel',
    tags: [
      'chickpea',
      'meatball',
      'hummus',
      'pita'
    ],
    shortcodes: [
      ':falafel:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12,
    order: 3406,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🥚',
    hexcode: '1f95a',
    category: 'Food & Drink',
    subgroup: 'food-prepared',
    label: 'egg',
    tags: [
      'breakfast',
      'food'
    ],
    shortcodes: [
      ':egg:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 3407,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🍳',
    hexcode: '1f373',
    category: 'Food & Drink',
    subgroup: 'food-prepared',
    label: 'cooking',
    tags: [
      'breakfast',
      'egg',
      'frying',
      'pan'
    ],
    shortcodes: [
      ':cooking:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3408,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🥘',
    hexcode: '1f958',
    category: 'Food & Drink',
    subgroup: 'food-prepared',
    label: 'shallow pan of food',
    tags: [
      'casserole',
      'food',
      'paella',
      'pan',
      'shallow'
    ],
    shortcodes: [
      ':shallow-pan-of-food:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 3409,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🍲',
    hexcode: '1f372',
    category: 'Food & Drink',
    subgroup: 'food-prepared',
    label: 'pot of food',
    tags: [
      'pot',
      'stew'
    ],
    shortcodes: [
      ':pot-of-food:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3410,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🫕',
    hexcode: '1fad5',
    category: 'Food & Drink',
    subgroup: 'food-prepared',
    label: 'fondue',
    tags: [
      'cheese',
      'chocolate',
      'melted',
      'pot',
      'swiss'
    ],
    shortcodes: [
      ':fondue:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 13,
    order: 3411,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🥣',
    hexcode: '1f963',
    category: 'Food & Drink',
    subgroup: 'food-prepared',
    label: 'bowl with spoon',
    tags: [
      'breakfast',
      'cereal',
      'congee'
    ],
    shortcodes: [
      ':bowl-with-spoon:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 5,
    order: 3412,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🥗',
    hexcode: '1f957',
    category: 'Food & Drink',
    subgroup: 'food-prepared',
    label: 'green salad',
    tags: [
      'food',
      'green',
      'salad'
    ],
    shortcodes: [
      ':green-salad:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 3413,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🍿',
    hexcode: '1f37f',
    category: 'Food & Drink',
    subgroup: 'food-prepared',
    label: 'popcorn',
    tags: [
      'popcorn'
    ],
    shortcodes: [
      ':popcorn:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3414,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🧈',
    hexcode: '1f9c8',
    category: 'Food & Drink',
    subgroup: 'food-prepared',
    label: 'butter',
    tags: [
      'dairy'
    ],
    shortcodes: [
      ':butter:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12,
    order: 3415,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🧂',
    hexcode: '1f9c2',
    category: 'Food & Drink',
    subgroup: 'food-prepared',
    label: 'salt',
    tags: [
      'condiment',
      'shaker'
    ],
    shortcodes: [
      ':salt:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 11,
    order: 3416,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🥫',
    hexcode: '1f96b',
    category: 'Food & Drink',
    subgroup: 'food-prepared',
    label: 'canned food',
    tags: [
      'can'
    ],
    shortcodes: [
      ':canned-food:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 5,
    order: 3417,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🍱',
    hexcode: '1f371',
    category: 'Food & Drink',
    subgroup: 'food-asian',
    label: 'bento box',
    tags: [
      'bento',
      'box'
    ],
    shortcodes: [
      ':bento-box:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3418,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🍘',
    hexcode: '1f358',
    category: 'Food & Drink',
    subgroup: 'food-asian',
    label: 'rice cracker',
    tags: [
      'cracker',
      'rice'
    ],
    shortcodes: [
      ':rice-cracker:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3419,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🍙',
    hexcode: '1f359',
    category: 'Food & Drink',
    subgroup: 'food-asian',
    label: 'rice ball',
    tags: [
      'ball',
      'japanese',
      'rice'
    ],
    shortcodes: [
      ':rice-ball:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3420,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🍚',
    hexcode: '1f35a',
    category: 'Food & Drink',
    subgroup: 'food-asian',
    label: 'cooked rice',
    tags: [
      'cooked',
      'rice'
    ],
    shortcodes: [
      ':cooked-rice:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3421,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🍛',
    hexcode: '1f35b',
    category: 'Food & Drink',
    subgroup: 'food-asian',
    label: 'curry rice',
    tags: [
      'curry',
      'rice'
    ],
    shortcodes: [
      ':curry-rice:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3422,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🍜',
    hexcode: '1f35c',
    category: 'Food & Drink',
    subgroup: 'food-asian',
    label: 'steaming bowl',
    tags: [
      'bowl',
      'noodle',
      'ramen',
      'steaming'
    ],
    shortcodes: [
      ':steaming-bowl:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3423,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🍝',
    hexcode: '1f35d',
    category: 'Food & Drink',
    subgroup: 'food-asian',
    label: 'spaghetti',
    tags: [
      'pasta'
    ],
    shortcodes: [
      ':spaghetti:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3424,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🍠',
    hexcode: '1f360',
    category: 'Food & Drink',
    subgroup: 'food-asian',
    label: 'roasted sweet potato',
    tags: [
      'potato',
      'roasted',
      'sweet'
    ],
    shortcodes: [
      ':roasted-sweet-potato:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3425,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🍢',
    hexcode: '1f362',
    category: 'Food & Drink',
    subgroup: 'food-asian',
    label: 'oden',
    tags: [
      'kebab',
      'seafood',
      'skewer',
      'stick'
    ],
    shortcodes: [
      ':oden:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3426,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🍣',
    hexcode: '1f363',
    category: 'Food & Drink',
    subgroup: 'food-asian',
    label: 'sushi',
    tags: [
      'sushi'
    ],
    shortcodes: [
      ':sushi:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3427,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🍤',
    hexcode: '1f364',
    category: 'Food & Drink',
    subgroup: 'food-asian',
    label: 'fried shrimp',
    tags: [
      'fried',
      'prawn',
      'shrimp',
      'tempura'
    ],
    shortcodes: [
      ':fried-shrimp:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3428,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🍥',
    hexcode: '1f365',
    category: 'Food & Drink',
    subgroup: 'food-asian',
    label: 'fish cake with swirl',
    tags: [
      'cake',
      'fish',
      'pastry',
      'swirl'
    ],
    shortcodes: [
      ':fish-cake-with-swirl:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3429,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🥮',
    hexcode: '1f96e',
    category: 'Food & Drink',
    subgroup: 'food-asian',
    label: 'moon cake',
    tags: [
      'autumn',
      'festival',
      'yuèbǐng'
    ],
    shortcodes: [
      ':moon-cake:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 11,
    order: 3430,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🍡',
    hexcode: '1f361',
    category: 'Food & Drink',
    subgroup: 'food-asian',
    label: 'dango',
    tags: [
      'dessert',
      'japanese',
      'skewer',
      'stick',
      'sweet'
    ],
    shortcodes: [
      ':dango:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3431,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🥟',
    hexcode: '1f95f',
    category: 'Food & Drink',
    subgroup: 'food-asian',
    label: 'dumpling',
    tags: [
      'empanada',
      'gyōza',
      'jiaozi',
      'pierogi',
      'potsticker'
    ],
    shortcodes: [
      ':dumpling:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 5,
    order: 3432,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🥠',
    hexcode: '1f960',
    category: 'Food & Drink',
    subgroup: 'food-asian',
    label: 'fortune cookie',
    tags: [
      'prophecy'
    ],
    shortcodes: [
      ':fortune-cookie:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 5,
    order: 3433,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🥡',
    hexcode: '1f961',
    category: 'Food & Drink',
    subgroup: 'food-asian',
    label: 'takeout box',
    tags: [
      'oyster pail'
    ],
    shortcodes: [
      ':takeout-box:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 5,
    order: 3434,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🦀',
    hexcode: '1f980',
    category: 'Food & Drink',
    subgroup: 'food-marine',
    label: 'crab',
    tags: [
      'cancer',
      'zodiac'
    ],
    shortcodes: [
      ':crab:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3435,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🦞',
    hexcode: '1f99e',
    category: 'Food & Drink',
    subgroup: 'food-marine',
    label: 'lobster',
    tags: [
      'bisque',
      'claws',
      'seafood'
    ],
    shortcodes: [
      ':lobster:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 11,
    order: 3436,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🦐',
    hexcode: '1f990',
    category: 'Food & Drink',
    subgroup: 'food-marine',
    label: 'shrimp',
    tags: [
      'food',
      'shellfish',
      'small',
      'swim',
      'animal',
      'water'
    ],
    shortcodes: [
      ':shrimp:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 3437,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🦑',
    hexcode: '1f991',
    category: 'Food & Drink',
    subgroup: 'food-marine',
    label: 'squid',
    tags: [
      'food',
      'molusc',
      'swim',
      'animal',
      'water'
    ],
    shortcodes: [
      ':squid:'
    ],
    emoticons: [
      'くコ:彡'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 3438,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🦪',
    hexcode: '1f9aa',
    category: 'Food & Drink',
    subgroup: 'food-marine',
    label: 'oyster',
    tags: [
      'diving',
      'pearl',
      'shell'
    ],
    shortcodes: [
      ':oyster:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12,
    order: 3439,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🍦',
    hexcode: '1f366',
    category: 'Food & Drink',
    subgroup: 'food-sweet',
    label: 'soft ice cream',
    tags: [
      'cream',
      'dessert',
      'ice',
      'icecream',
      'soft',
      'sweet'
    ],
    shortcodes: [
      ':soft-ice-cream:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3440,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🍧',
    hexcode: '1f367',
    category: 'Food & Drink',
    subgroup: 'food-sweet',
    label: 'shaved ice',
    tags: [
      'dessert',
      'ice',
      'shaved',
      'sweet'
    ],
    shortcodes: [
      ':shaved-ice:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3441,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🍨',
    hexcode: '1f368',
    category: 'Food & Drink',
    subgroup: 'food-sweet',
    label: 'ice cream',
    tags: [
      'cream',
      'dessert',
      'ice',
      'sweet'
    ],
    shortcodes: [
      ':ice-cream:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3442,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🍩',
    hexcode: '1f369',
    category: 'Food & Drink',
    subgroup: 'food-sweet',
    label: 'doughnut',
    tags: [
      'breakfast',
      'dessert',
      'donut',
      'sweet'
    ],
    shortcodes: [
      ':doughnut:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3443,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🍪',
    hexcode: '1f36a',
    category: 'Food & Drink',
    subgroup: 'food-sweet',
    label: 'cookie',
    tags: [
      'dessert',
      'sweet'
    ],
    shortcodes: [
      ':cookie:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3444,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🎂',
    hexcode: '1f382',
    category: 'Food & Drink',
    subgroup: 'food-sweet',
    label: 'birthday cake',
    tags: [
      'birthday',
      'cake',
      'celebration',
      'dessert',
      'pastry',
    ],
    shortcodes: [
      ':birthday-cake:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3445,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🍰',
    hexcode: '1f370',
    category: 'Food & Drink',
    subgroup: 'food-sweet',
    label: 'shortcake',
    tags: [
      'cake',
      'dessert',
      'pastry',
      'slice',
      'sweet'
    ],
    shortcodes: [
      ':shortcake:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3446,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🧁',
    hexcode: '1f9c1',
    category: 'Food & Drink',
    subgroup: 'food-sweet',
    label: 'cupcake',
    tags: [
      'bakery',
      'sweet'
    ],
    shortcodes: [
      ':cupcake:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 11,
    order: 3447,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🥧',
    hexcode: '1f967',
    category: 'Food & Drink',
    subgroup: 'food-sweet',
    label: 'pie',
    tags: [
      'filling',
      'pastry'
    ],
    shortcodes: [
      ':pie:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 5,
    order: 3448,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🍫',
    hexcode: '1f36b',
    category: 'Food & Drink',
    subgroup: 'food-sweet',
    label: 'chocolate bar',
    tags: [
      'bar',
      'chocolate',
      'dessert',
      'sweet'
    ],
    shortcodes: [
      ':chocolate-bar:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3449,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🍬',
    hexcode: '1f36c',
    category: 'Food & Drink',
    subgroup: 'food-sweet',
    label: 'candy',
    tags: [
      'dessert',
      'sweet'
    ],
    shortcodes: [
      ':candy:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3450,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🍭',
    hexcode: '1f36d',
    category: 'Food & Drink',
    subgroup: 'food-sweet',
    label: 'lollipop',
    tags: [
      'candy',
      'dessert',
      'sweet'
    ],
    shortcodes: [
      ':lollipop:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3451,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🍮',
    hexcode: '1f36e',
    category: 'Food & Drink',
    subgroup: 'food-sweet',
    label: 'custard',
    tags: [
      'dessert',
      'pudding',
      'sweet'
    ],
    shortcodes: [
      ':custard:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3452,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🍯',
    hexcode: '1f36f',
    category: 'Food & Drink',
    subgroup: 'food-sweet',
    label: 'honey pot',
    tags: [
      'honey',
      'honeypot',
      'pot',
      'sweet'
    ],
    shortcodes: [
      ':honey-pot:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3453,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🍼',
    hexcode: '1f37c',
    category: 'Food & Drink',
    subgroup: 'drink',
    label: 'baby bottle',
    tags: [
      'baby',
      'bottle',
      'drink',
      'milk',
      'sweet'
    ],
    shortcodes: [
      ':baby-bottle:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3454,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🥛',
    hexcode: '1f95b',
    category: 'Food & Drink',
    subgroup: 'drink',
    label: 'glass of milk',
    tags: [
      'drink',
      'glass',
      'milk'
    ],
    shortcodes: [
      ':glass-of-milk:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 3455,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '☕️',
    hexcode: '2615',
    category: 'Food & Drink',
    subgroup: 'drink',
    label: 'hot beverage',
    tags: [
      'beverage',
      'coffee',
      'drink',
      'hot',
      'steaming',
      'tea'
    ],
    shortcodes: [
      ':hot-beverage:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3456,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🫖',
    hexcode: '1fad6',
    category: 'Food & Drink',
    subgroup: 'drink',
    label: 'teapot',
    tags: [
      'drink',
      'pot',
      'tea'
    ],
    shortcodes: [
      ':teapot:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 13,
    order: 3457,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🍵',
    hexcode: '1f375',
    category: 'Food & Drink',
    subgroup: 'drink',
    label: 'teacup without handle',
    tags: [
      'beverage',
      'cup',
      'drink',
      'tea',
      'teacup',
      'glass',
      'hot'
    ],
    shortcodes: [
      ':teacup-without-handle:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3458,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🍶',
    hexcode: '1f376',
    category: 'Food & Drink',
    subgroup: 'drink',
    label: 'sake',
    tags: [
      'bar',
      'beverage',
      'bottle',
      'cup',
      'drink'
    ],
    shortcodes: [
      ':sake:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3459,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🍾',
    hexcode: '1f37e',
    category: 'Food & Drink',
    subgroup: 'drink',
    label: 'bottle with popping cork',
    tags: [
      'bar',
      'bottle',
      'cork',
      'drink',
      'popping',
      'party',
      'celebrate',
      'event'
    ],
    shortcodes: [
      ':bottle-with-popping-cork:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3460,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🍷',
    hexcode: '1f377',
    category: 'Food & Drink',
    subgroup: 'drink',
    label: 'wine glass',
    tags: [
      'bar',
      'beverage',
      'drink',
      'glass',
      'wine',
      'classic',
      'alcohol'
    ],
    shortcodes: [
      ':wine-glass:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3461,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🍸️',
    hexcode: '1f378',
    category: 'Food & Drink',
    subgroup: 'drink',
    label: 'cocktail glass',
    tags: [
      'cocktail',
      'drink',
      'glass',
      'alcohol',
      'party'
    ],
    shortcodes: [
      ':cocktail-glass:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3462,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🍹',
    hexcode: '1f379',
    category: 'Food & Drink',
    subgroup: 'drink',
    label: 'tropical drink',
    tags: [
      'drink',
      'tropical',
      'cocktail',
      'party',
      'summer'
    ],
    shortcodes: [
      ':tropical-drink:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3463,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🍺',
    hexcode: '1f37a',
    category: 'Food & Drink',
    subgroup: 'drink',
    label: 'beer mug',
    tags: [
      'beer',
      'drink',
      'mug',
      'party'
    ],
    shortcodes: [
      ':beer-mug:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3464,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🍻',
    hexcode: '1f37b',
    category: 'Food & Drink',
    subgroup: 'drink',
    label: 'clinking beer mugs',
    tags: [
      'bar',
      'beer',
      'clink',
      'drink',
      'mug',
      'german',
      'party',
      'alcohol',
      'bavaria'
    ],
    shortcodes: [
      ':clinking-beer-mugs:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3465,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🥂',
    hexcode: '1f942',
    category: 'Food & Drink',
    subgroup: 'drink',
    label: 'clinking glasses',
    tags: [
      'celebrate',
      'clink',
      'drink',
      'glass',
      'party',
    ],
    shortcodes: [
      ':clinking-glasses:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 3466,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🥃',
    hexcode: '1f943',
    category: 'Food & Drink',
    subgroup: 'drink',
    label: 'tumbler glass',
    tags: [
      'glass',
      'liquor',
      'shot',
      'tumbler',
      'whisky',
    ],
    shortcodes: [
      ':tumbler-glass:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 3467,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🫗',
    hexcode: '1fad7',
    category: 'Food & Drink',
    subgroup: 'drink',
    label: 'pouring liquid',
    tags: [
      'drink',
      'empty',
      'glass',
      'spill'
    ],
    shortcodes: [
      ':pour:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 14,
    order: 3468,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🥤',
    hexcode: '1f964',
    category: 'Food & Drink',
    subgroup: 'drink',
    label: 'cup with straw',
    tags: [
      'juice',
      'soda',
      'beverage',
      'fastfood'
    ],
    shortcodes: [
      ':cup-with-straw:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 5,
    order: 3469,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🧋',
    hexcode: '1f9cb',
    category: 'Food & Drink',
    subgroup: 'drink',
    label: 'bubble tea',
    tags: [
      'bubble',
      'milk',
      'pearl',
      'tea'
    ],
    shortcodes: [
      ':bubble-tea:',
      ':milk-tea:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 13,
    order: 3470,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🧃',
    hexcode: '1f9c3',
    category: 'Food & Drink',
    subgroup: 'drink',
    label: 'beverage box',
    tags: [
      'beverage',
            'juice',
      'box',
      'straw',
    ],
    shortcodes: [
      ':beverage-box:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12,
    order: 3471,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🧉',
    hexcode: '1f9c9',
    category: 'Food & Drink',
    subgroup: 'drink',
    label: 'mate',
    tags: [
      'drink'
    ],
    shortcodes: [
      ':mate:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12,
    order: 3472,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🧊',
    hexcode: '1f9ca',
    category: 'Food & Drink',
    subgroup: 'drink',
    label: 'ice',
    tags: [
      'cold',
      'ice cube',
      'iceberg',
      'isometric'
    ],
    shortcodes: [
      ':ice-cube:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12,
    order: 3473,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🥢',
    hexcode: '1f962',
    category: 'Food & Drink',
    subgroup: 'dishware',
    label: 'chopsticks',
    tags: [
      'hashi',
      'sticks',
      'eat',
      'chopstick'
    ],
    shortcodes: [
      ':chopsticks:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 5,
    order: 3474,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🍽️',
    hexcode: '1f37d',
    category: 'Food & Drink',
    subgroup: 'dishware',
    label: 'fork and knife with plate',
    tags: [
      'cooking',
      'fork',
      'knife',
      'plate',
      'eat'
    ],
    shortcodes: [
      ':fork-and-knife-with-plate:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3476,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🍴',
    hexcode: '1f374',
    category: 'Food & Drink',
    subgroup: 'dishware',
    label: 'fork and knife',
    tags: [
      'cooking',
      'cutlery',
      'fork',
      'knife',
      'eat'
    ],
    shortcodes: [
      ':fork-and-knife:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3477,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🥄',
    hexcode: '1f944',
    category: 'Food & Drink',
    subgroup: 'dishware',
    label: 'spoon',
    tags: [
      'tableware',
      'metal',
      'spoon',
      'eat'
    ],
    shortcodes: [
      ':spoon:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 3478,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🔪',
    hexcode: '1f52a',
    category: 'Food & Drink',
    subgroup: 'dishware',
    label: 'kitchen knife',
    tags: [
      'cooking',
      'hocho',
      'knife',
      'tool',
      'weapon',
      'eat'
    ],
    shortcodes: [
      ':kitchen-knife:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3479,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🫙',
    hexcode: '1fad9',
    category: 'Food & Drink',
    subgroup: 'dishware',
    label: 'jar',
    tags: [
      'condiment',
      'container',
      'empty',
      'sauce',
      'store'
    ],
    shortcodes: [
      ':jar:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 14,
    order: 3480,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🏺',
    hexcode: '1f3fa',
    category: 'Food & Drink',
    subgroup: 'dishware',
    label: 'amphora',
    tags: [
      'aquarius',
      'cooking',
      'drink',
      'jug',
      'zodiac'
    ],
    shortcodes: [
      ':amphora:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3481,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🌍️',
    hexcode: '1f30d',
    category: 'Travel & Places',
    subgroup: 'place-map',
    label: 'globe showing Europe-Africa',
    tags: [
      'africa',
      'earth',
      'europe',
      'globe',
      'world',
      'continent',
    ],
    shortcodes: [
      ':globe-showing-Europe-Africa:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3482,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🌎️',
    hexcode: '1f30e',
    category: 'Travel & Places',
    subgroup: 'place-map',
    label: 'globe showing Americas',
    tags: [
      'americas',
      'earth',
      'globe',
      'world',
    ],
    shortcodes: [
      ':globe-showing-Americas:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3483,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🌏️',
    hexcode: '1f30f',
    category: 'Travel & Places',
    subgroup: 'place-map',
    label: 'globe showing Asia-Australia',
    tags: [
      'asia',
      'australia',
      'earth',
      'globe',
      'world',
    ],
    shortcodes: [
      ':globe-showing-Asia-Australia:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3484,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🌐',
    hexcode: '1f310',
    category: 'Travel & Places',
    subgroup: 'place-map',
    label: 'globe with meridians',
    tags: [
      'earth',
      'globe',
      'meridians',
      'world',
    ],
    shortcodes: [
      ':globe-with-meridians:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3485,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🗺️',
    hexcode: '1f5fa',
    category: 'Travel & Places',
    subgroup: 'place-map',
    label: 'world map',
    tags: [
      'map',
      'world',
      'geographic',
      'continent',
      'global',
      'planet',
      'earth'
    ],
    shortcodes: [
      ':world-map:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3487,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🗾',
    hexcode: '1f5fe',
    category: 'Travel & Places',
    subgroup: 'place-map',
    label: 'map of Japan',
    tags: [
      'japan',
      'map',
      'map of japan'
    ],
    shortcodes: [
      ':map-of-Japan:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3488,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🧭',
    hexcode: '1f9ed',
    category: 'Travel & Places',
    subgroup: 'place-map',
    label: 'compass',
    tags: [
      'magnetic',
      'navigation',
      'orienteering',
      'direction'
    ],
    shortcodes: [
      ':compass:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 11,
    order: 3489,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🏔️',
    hexcode: '1f3d4',
    category: 'Travel & Places',
    subgroup: 'place-geographic',
    label: 'snow-capped mountain',
    tags: [
      'cold',
      'mountain',
      'snow',
      'landscape',
      'nature',
      'hiking',
    ],
    shortcodes: [
      ':snow-mountain:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3491,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '⛰️',
    hexcode: '26f0',
    category: 'Travel & Places',
    subgroup: 'place-geographic',
    label: 'mountain',
    tags: [
      'mountain',
      'landscape',
      'nature',
      'hiking',
      'climbing',
    ],
    shortcodes: [
      ':mountain:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3493,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🌋',
    hexcode: '1f30b',
    category: 'Travel & Places',
    subgroup: 'place-geographic',
    label: 'volcano',
    tags: [
      'eruption',
      'mountain',
      'vulcano',
      'landscape',
      'nature',
      'fire',
    ],
    shortcodes: [
      ':volcano:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3494,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🗻',
    hexcode: '1f5fb',
    category: 'Travel & Places',
    subgroup: 'place-geographic',
    label: 'mount fuji',
    tags: [
      'fuji',
      'mountain',
      'japan',
      'japanese',
      'geographic'
    ],
    shortcodes: [
      ':mount-fuji:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3495,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🏕️',
    hexcode: '1f3d5',
    category: 'Travel & Places',
    subgroup: 'place-geographic',
    label: 'camping',
    tags: [
      'camping',
      'nature',
      'outdoor',
      'tent',
      'adventure',
      'sleeping'
    ],
    shortcodes: [
      ':camping:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3497,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🏖️',
    hexcode: '1f3d6',
    category: 'Travel & Places',
    subgroup: 'place-geographic',
    label: 'beach with umbrella',
    tags: [
      'beach',
      'umbrella',
      'nature',
      'summer',
      'sand',
      'water',
    ],
    shortcodes: [
      ':beach:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3499,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🏜️',
    hexcode: '1f3dc',
    category: 'Travel & Places',
    subgroup: 'place-geographic',
    label: 'desert',
    tags: [
      'desert',
      'nature',
      'hot',
      'sun',
      'sand',
      'dry'
    ],
    shortcodes: [
      ':desert:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3501,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🏝️',
    hexcode: '1f3dd',
    category: 'Travel & Places',
    subgroup: 'place-geographic',
    label: 'desert island',
    tags: [
      'desert',
      'island',
      'sand',
      'water',
      'stranded',
      'palm',
    ],
    shortcodes: [
      ':desert-island:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3503,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🏞️',
    hexcode: '1f3de',
    category: 'Travel & Places',
    subgroup: 'place-geographic',
    label: 'national park',
    tags: [
      'park',
      'nature',
      'outdoor',
      'adventure',
      'woods',
      'mountain'
    ],
    shortcodes: [
      ':national-park:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3505,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🏟️',
    hexcode: '1f3df',
    category: 'Travel & Places',
    subgroup: 'place-building',
    label: 'stadium',
    tags: [
      'stadium',
      'building',
      'football',
      'sports',
      'olympic'
    ],
    shortcodes: [
      ':stadium:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3507,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🏛️',
    hexcode: '1f3db',
    category: 'Travel & Places',
    subgroup: 'place-building',
    label: 'classical building',
    tags: [
      'classical',
      'building',
      'historical',
      'old',
      'antique'
    ],
    shortcodes: [
      ':classical-building:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3509,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🏗️',
    hexcode: '1f3d7',
    category: 'Travel & Places',
    subgroup: 'place-building',
    label: 'building construction',
    tags: [
      'construction',
      'work',
      'building lot',
      'crane'
    ],
    shortcodes: [
      ':construction-building:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3511,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🧱',
    hexcode: '1f9f1',
    category: 'Travel & Places',
    subgroup: 'place-building',
    label: 'brick',
    tags: [
      'bricks',
      'clay',
      'mortar',
      'wall'
    ],
    shortcodes: [
      ':bricks:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 11,
    order: 3512,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🪨',
    hexcode: '1faa8',
    category: 'Travel & Places',
    subgroup: 'place-building',
    label: 'rock',
    tags: [
      'boulder',
      'heavy',
      'solid',
      'stone'
    ],
    shortcodes: [
      ':rock:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 13,
    order: 3513,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🪵',
    hexcode: '1fab5',
    category: 'Travel & Places',
    subgroup: 'place-building',
    label: 'wood',
    tags: [
      'log',
      'lumber',
      'timber'
    ],
    shortcodes: [
      ':wood:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 13,
    order: 3514,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🛖',
    hexcode: '1f6d6',
    category: 'Travel & Places',
    subgroup: 'place-building',
    label: 'hut',
    tags: [
      'house',
      'roundhouse',
      'yurt'
    ],
    shortcodes: [
      ':hut:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 13,
    order: 3515,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🏘️',
    hexcode: '1f3d8',
    category: 'Travel & Places',
    subgroup: 'place-building',
    label: 'houses',
    tags: [
      'houses',
      'buildings',
      'neighbourhood'
    ],
    shortcodes: [
      ':houses:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3517,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🏚️',
    hexcode: '1f3da',
    category: 'Travel & Places',
    subgroup: 'place-building',
    label: 'derelict house',
    tags: [
      'derelict',
      'house',
      'building',
      'old',
      'rotten',
      'dangerous'
    ],
    shortcodes: [
      ':derelict-house:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3519,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🏠️',
    hexcode: '1f3e0',
    category: 'Travel & Places',
    subgroup: 'place-building',
    label: 'house',
    tags: [
      'home',
      'building'
    ],
    shortcodes: [
      ':house:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3520,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🏡',
    hexcode: '1f3e1',
    category: 'Travel & Places',
    subgroup: 'place-building',
    label: 'house with garden',
    tags: [
      'garden',
      'home',
      'house',
      'building',
      'grass',
      'green',
      'tree'
    ],
    shortcodes: [
      ':house-with-garden:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3521,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🏢',
    hexcode: '1f3e2',
    category: 'Travel & Places',
    subgroup: 'place-building',
    label: 'office building',
    tags: [
      'building',
      'workplace',
      'company',
      'firm',
      'business'
    ],
    shortcodes: [
      ':office-building:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3522,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  // {
  //   type: 'emoji',
  //   symbol: '🏣',
  //   hexcode: '1f3e3',
  //   category: 'Travel & Places',
  //   subgroup: 'place-building',
  //   label: 'Japanese post office',
  //   tags: [

  //     'post',
  //     'delivery',
  //     'mailing',
  //     'communication'
  //   ],
  //   shortcodes: [
  //     ':Japanese-post-office:'
  //   ],
  //   emoticons: [],
  //   directional: false,
  //   variation: false,
  //   variationBase: null,
  //   unicode: 0.6,
  //   order: 3523,
  //   skintone: null,
  //   skintoneCombination: null,
  //   skintoneBase: null
  // },
  {
    type: 'emoji',
    symbol: '🏤',
    hexcode: '1f3e4',
    category: 'Travel & Places',
    subgroup: 'place-building',
    label: 'post office',
    tags: [
      'european',
      'post',
      'delivery',
      'mailing',
      'yellow',
      'communication'
    ],
    shortcodes: [
      ':post-office:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3524,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🏥',
    hexcode: '1f3e5',
    category: 'Travel & Places',
    subgroup: 'place-building',
    label: 'hospital',
    tags: [
      'doctor',
      'medicine',
      'building',
      'cross',
      'help',
      'social',
      'public'
    ],
    shortcodes: [
      ':hospital:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3525,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🏦',
    hexcode: '1f3e6',
    category: 'Travel & Places',
    subgroup: 'place-building',
    label: 'bank',
    tags: [
      'building',
      'money',
      'business',
      'finance',
      'venture'
    ],
    shortcodes: [
      ':bank:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3526,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🏨',
    hexcode: '1f3e8',
    category: 'Travel & Places',
    subgroup: 'place-building',
    label: 'hotel',
    tags: [
      'building',
      'sleep',
      'travel',
      'business',
      'holiday',
      'vacation'
    ],
    shortcodes: [
      ':hotel:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3527,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🏩',
    hexcode: '1f3e9',
    category: 'Travel & Places',
    subgroup: 'place-building',
    label: 'love hotel',
    tags: [
      'hotel',
      'love',
      'building',
    ],
    shortcodes: [
      ':love-hotel:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3528,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🏪',
    hexcode: '1f3ea',
    category: 'Travel & Places',
    subgroup: 'place-building',
    label: 'convenience store',
    tags: [
      'convenience',
      'store',
      'building',
      'shopping',
      'buying',
      '24'
    ],
    shortcodes: [
      ':convenience-store:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3529,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🏫',
    hexcode: '1f3eb',
    category: 'Travel & Places',
    subgroup: 'place-building',
    label: 'school',
    tags: [
      'building',
      'learning',
      'public',
      'teaching',
      'education'
    ],
    shortcodes: [
      ':school:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3530,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🏬',
    hexcode: '1f3ec',
    category: 'Travel & Places',
    subgroup: 'place-building',
    label: 'department store',
    tags: [
      'department',
      'store',
      'building',
      'shopping',
      'buying'
    ],
    shortcodes: [
      ':department-store:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3531,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🏭️',
    hexcode: '1f3ed',
    category: 'Travel & Places',
    subgroup: 'place-building',
    label: 'factory',
    tags: [
      'building',
      'firm',
      'workplace',
      'business'
    ],
    shortcodes: [
      ':factory:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3532,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🏯',
    hexcode: '1f3ef',
    category: 'Travel & Places',
    subgroup: 'place-building',
    label: 'Japanese castle',
    tags: [
      'castle',
      'japanese',
      'building',
      'culture',
      'historical',
      'war'
    ],
    shortcodes: [
      ':Japanese-castle:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3533,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🏰',
    hexcode: '1f3f0',
    category: 'Travel & Places',
    subgroup: 'place-building',
    label: 'castle',
    tags: [
      'european',
      'building',
      'culture',
      'historical',
      'war'
    ],
    shortcodes: [
      ':castle:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3534,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '💒',
    hexcode: '1f492',
    category: 'Travel & Places',
    subgroup: 'place-building',
    label: 'wedding',
    tags: [
      'chapel',
      'romance',
      'building',
      'love',
      'marriage',
      'heart'
    ],
    shortcodes: [
      ':wedding:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3535,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🗼',
    hexcode: '1f5fc',
    category: 'Travel & Places',
    subgroup: 'place-building',
    label: 'Tokyo tower',
    tags: [
      'tokyo',
      'tower'
    ],
    shortcodes: [
      ':tokyo-tower:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3536,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🗽',
    hexcode: '1f5fd',
    category: 'Travel & Places',
    subgroup: 'place-building',
    label: 'Statue of Liberty',
    tags: [
      'liberty',
      'statue',
      'statue of liberty'
    ],
    shortcodes: [
      ':statue-of-Liberty:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3537,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '⛪️',
    hexcode: '26ea',
    category: 'Travel & Places',
    subgroup: 'place-religious',
    label: 'church',
    tags: [
      'christian',
      'cross',
      'religion',
      'religious',
      'pray',
      'building',
      'god',
      'mess',
      'faith'
    ],
    shortcodes: [
      ':church:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3538,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🕌',
    hexcode: '1f54c',
    category: 'Travel & Places',
    subgroup: 'place-religious',
    label: 'mosque',
    tags: [
      'islam',
      'muslim',
      'religion',
      'religious',
      'pray',
      'building',
      'god',
      'faith'
    ],
    shortcodes: [
      ':mosque:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3539,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🛕',
    hexcode: '1f6d5',
    category: 'Travel & Places',
    subgroup: 'place-religious',
    label: 'hindu temple',
    tags: [
      'hindu',
      'temple'
    ],
    shortcodes: [
      ':hindu-temple:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12,
    order: 3540,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🕍',
    hexcode: '1f54d',
    category: 'Travel & Places',
    subgroup: 'place-religious',
    label: 'synagogue',
    tags: [
      'jew',
      'jewish',
      'religion',
      'temple',
      'religious',
      'pray',
      'building',
      'god',
      'faith'
    ],
    shortcodes: [
      ':synagogue:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3541,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '⛩️',
    hexcode: '26e9',
    category: 'Travel & Places',
    subgroup: 'place-religious',
    label: 'shinto shrine',
    tags: [
      'religion',
      'shinto',
      'shrine',
      'religious',
      'pray',
      'building',
      'god',
      'faith'
    ],
    shortcodes: [
      ':shinto-shrine:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3543,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🕋',
    hexcode: '1f54b',
    category: 'Travel & Places',
    subgroup: 'place-religious',
    label: 'kaaba',
    tags: [
      'islam',
      'muslim',
      'religion',
      'religious',
      'pray',
      'building',
      'god',
      'black',
      'mecca',
      'faith'
    ],
    shortcodes: [
      ':kaaba:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3544,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '⛲️',
    hexcode: '26f2',
    category: 'Travel & Places',
    subgroup: 'place-other',
    label: 'fountain',
    tags: [
      'fountain'
    ],
    shortcodes: [
      ':fountain:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3545,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '⛺️',
    hexcode: '26fa',
    category: 'Travel & Places',
    subgroup: 'place-other',
    label: 'tent',
    tags: [
      'camping',
      'nature',
      'outdoor',
      'adventure'
    ],
    shortcodes: [
      ':tent:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3546,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🌁',
    hexcode: '1f301',
    category: 'Travel & Places',
    subgroup: 'place-other',
    label: 'foggy',
    tags: [
      'fog'
    ],
    shortcodes: [
      ':foggy:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3547,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🌃',
    hexcode: '1f303',
    category: 'Travel & Places',
    subgroup: 'place-other',
    label: 'night with stars',
    tags: [
      'night',
      'star'
    ],
    shortcodes: [
      ':night-with-stars:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3548,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🏙️',
    hexcode: '1f3d9',
    category: 'Travel & Places',
    subgroup: 'place-other',
    label: 'cityscape',
    tags: [
      'city',
      'buildings',
      'metropolis'
    ],
    shortcodes: [
      ':cityscape:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3550,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🌄',
    hexcode: '1f304',
    category: 'Travel & Places',
    subgroup: 'place-other',
    label: 'sunrise over mountains',
    tags: [
      'morning',
      'mountain',
      'sun',
      'sunrise'
    ],
    shortcodes: [
      ':sunrise-over-mountains:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3551,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🌅',
    hexcode: '1f305',
    category: 'Travel & Places',
    subgroup: 'place-other',
    label: 'sunrise',
    tags: [
      'morning',
      'sun'
    ],
    shortcodes: [
      ':sunrise:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3552,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🌆',
    hexcode: '1f306',
    category: 'Travel & Places',
    subgroup: 'place-other',
    label: 'cityscape at dusk',
    tags: [
      'city',
      'dusk',
      'evening',
      'landscape',
      'sunset'
    ],
    shortcodes: [
      ':sunset-cityscape:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3553,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🌇',
    hexcode: '1f307',
    category: 'Travel & Places',
    subgroup: 'place-other',
    label: 'sunset',
    tags: [
      'dusk',
      'sun'
    ],
    shortcodes: [
      ':sunset:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3554,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🌉',
    hexcode: '1f309',
    category: 'Travel & Places',
    subgroup: 'place-other',
    label: 'bridge at night',
    tags: [
      'bridge',
      'night'
    ],
    shortcodes: [
      ':bridge-at-night:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3555,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '♨️',
    hexcode: '2668',
    category: 'Travel & Places',
    subgroup: 'place-other',
    label: 'hot springs',
    tags: [
      'hot',
      'hotsprings',
      'springs',
      'steaming'
    ],
    shortcodes: [
      ':hot-springs:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3557,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🎠',
    hexcode: '1f3a0',
    category: 'Travel & Places',
    subgroup: 'place-other',
    label: 'carousel horse',
    tags: [
      'carousel',
      'horse'
    ],
    shortcodes: [
      ':carousel-horse:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3558,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🛝',
    hexcode: '1f6dd',
    category: 'Travel & Places',
    subgroup: 'place-other',
    label: 'playground slide',
    tags: [
      'amusement park',
      'play'
    ],
    shortcodes: [
      ':slide:',
      ':playground:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 14,
    order: 3559,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🎡',
    hexcode: '1f3a1',
    category: 'Travel & Places',
    subgroup: 'place-other',
    label: 'ferris wheel',
    tags: [
      'amusement park',
      'ferris',
      'wheel'
    ],
    shortcodes: [
      ':ferris-wheel:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3560,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🎢',
    hexcode: '1f3a2',
    category: 'Travel & Places',
    subgroup: 'place-other',
    label: 'roller coaster',
    tags: [
      'amusement park',
      'coaster',
      'roller'
    ],
    shortcodes: [
      ':roller-coaster:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3561,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '💈',
    hexcode: '1f488',
    category: 'Travel & Places',
    subgroup: 'place-other',
    label: 'barber pole',
    tags: [
      'barber',
      'haircut',
      'pole',
      'beauty',
      'hairdresser'
    ],
    shortcodes: [
      ':barber-pole:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3562,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🎪',
    hexcode: '1f3aa',
    category: 'Travel & Places',
    subgroup: 'place-other',
    label: 'circus tent',
    tags: [
      'circus',
      'tent',
      'fun',
      'leisure',
      'entertainment',
      'red',
      'white'
    ],
    shortcodes: [
      ':circus-tent:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3563,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🚂',
    hexcode: '1f682',
    category: 'Travel & Places',
    subgroup: 'transport-ground',
    label: 'locomotive',
    tags: [
      'engine',
      'railway',
      'steam',
      'train',
      'locomotive',
      'travel',
      'drive'
    ],
    shortcodes: [
      ':locomotive:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3564,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🚃',
    hexcode: '1f683',
    category: 'Travel & Places',
    subgroup: 'transport-ground',
    label: 'railway car',
    tags: [
      'car',
      'electric',
      'railway',
      'train',
      'tram',
      'trolleybus',
      'locomotive',
      'railway car',
      'travel'
    ],
    shortcodes: [
      ':railway-car:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3565,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🚄',
    hexcode: '1f684',
    category: 'Travel & Places',
    subgroup: 'transport-ground',
    label: 'high-speed train',
    tags: [
      'railway',
      'shinkansen',
      'speed',
      'train'
    ],
    shortcodes: [
      ':high-speed-train:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3566,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🚅',
    hexcode: '1f685',
    category: 'Travel & Places',
    subgroup: 'transport-ground',
    label: 'bullet train',
    tags: [
      'bullet',
      'railway',
      'shinkansen',
      'speed',
      'train',
      'locomotive',
      'railway car',
      'travel',
      'transportation'
    ],
    shortcodes: [
      ':bullet-train:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3567,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🚆',
    hexcode: '1f686',
    category: 'Travel & Places',
    subgroup: 'transport-ground',
    label: 'train',
    tags: [
      'railway'
    ],
    shortcodes: [
      ':train:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3568,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🚇️',
    hexcode: '1f687',
    category: 'Travel & Places',
    subgroup: 'transport-ground',
    label: 'metro',
    tags: [
      'subway'
    ],
    shortcodes: [
      ':metro:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3569,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🚈',
    hexcode: '1f688',
    category: 'Travel & Places',
    subgroup: 'transport-ground',
    label: 'light rail',
    tags: [
      'railway'
    ],
    shortcodes: [
      ':light-rail:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3570,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🚉',
    hexcode: '1f689',
    category: 'Travel & Places',
    subgroup: 'transport-ground',
    label: 'station',
    tags: [
      'railway',
      'train',
      'train station',
      'station',
      'stop',
      'travel',
      'departure',
      'arrives'
    ],
    shortcodes: [
      ':station:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3571,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🚊',
    hexcode: '1f68a',
    category: 'Travel & Places',
    subgroup: 'transport-ground',
    label: 'tram',
    tags: [
      'trolleybus'
    ],
    shortcodes: [
      ':tram:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3572,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🚝',
    hexcode: '1f69d',
    category: 'Travel & Places',
    subgroup: 'transport-ground',
    label: 'monorail',
    tags: [
      'vehicle',
      'train',
      'locomotive',
      'monorail',
      'travel',
      'transportation'
    ],
    shortcodes: [
      ':monorail:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3573,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🚞',
    hexcode: '1f69e',
    category: 'Travel & Places',
    subgroup: 'transport-ground',
    label: 'mountain railway',
    tags: [
      'car',
      'mountain',
      'railway'
    ],
    shortcodes: [
      ':mountain-railway:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3574,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🚋',
    hexcode: '1f68b',
    category: 'Travel & Places',
    subgroup: 'transport-ground',
    label: 'tram car',
    tags: [
      'car',
      'tram',
      'trolleybus'
    ],
    shortcodes: [
      ':tram-car:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3575,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🚌',
    hexcode: '1f68c',
    category: 'Travel & Places',
    subgroup: 'transport-ground',
    label: 'bus',
    tags: [
      'vehicle',
      'bus',
      'travel',
      'transportation'
    ],
    shortcodes: [
      ':bus:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3576,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🚍️',
    hexcode: '1f68d',
    category: 'Travel & Places',
    subgroup: 'transport-ground',
    label: 'oncoming bus',
    tags: [
      'bus',
      'oncoming'
    ],
    shortcodes: [
      ':bus-front:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3577,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🚎',
    hexcode: '1f68e',
    category: 'Travel & Places',
    subgroup: 'transport-ground',
    label: 'trolleybus',
    tags: [
      'bus',
      'tram',
      'trolley'
    ],
    shortcodes: [
      ':trolleybus:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3578,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🚐',
    hexcode: '1f690',
    category: 'Travel & Places',
    subgroup: 'transport-ground',
    label: 'minibus',
    tags: [
      'bus',
      'travel',
      'transportation',
      'car'
    ],
    shortcodes: [
      ':minibus:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3579,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🚑️',
    hexcode: '1f691',
    category: 'Travel & Places',
    subgroup: 'transport-ground',
    label: 'ambulance',
    tags: [
      'vehicle',
      'travel',
      'hospital',
      'ambulance',
      'alarm',
      'doctor',
      'help'
    ],
    shortcodes: [
      ':ambulance:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3580,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🚒',
    hexcode: '1f692',
    category: 'Travel & Places',
    subgroup: 'transport-ground',
    label: 'fire engine',
    tags: [
      'engine',
      'fire',
      'truck',
      'red',
      'alarm'
    ],
    shortcodes: [
      ':fire-engine:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3581,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🚓',
    hexcode: '1f693',
    category: 'Travel & Places',
    subgroup: 'transport-ground',
    label: 'police car',
    tags: [
      'car',
      'patrol',
      'police',
      'travel'
    ],
    shortcodes: [
      ':police-car:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3582,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🚔️',
    hexcode: '1f694',
    category: 'Travel & Places',
    subgroup: 'transport-ground',
    label: 'oncoming police car',
    tags: [
      'car',
      'oncoming',
      'police'
    ],
    shortcodes: [
      ':police-car-front:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3583,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🚕',
    hexcode: '1f695',
    category: 'Travel & Places',
    subgroup: 'transport-ground',
    label: 'taxi',
    tags: [
      'vehicle',
      'travel',
      'car',
      'taxi',
      'cab'
    ],
    shortcodes: [
      ':taxi:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3584,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🚖',
    hexcode: '1f696',
    category: 'Travel & Places',
    subgroup: 'transport-ground',
    label: 'oncoming taxi',
    tags: [
      'oncoming',
      'taxi'
    ],
    shortcodes: [
      ':taxi-front:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3585,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🚗',
    hexcode: '1f697',
    category: 'Travel & Places',
    subgroup: 'transport-ground',
    label: 'automobile',
    tags: [
      'car',
      'travel',
      'automobile',
      'vehicle',
      'transportation'
    ],
    shortcodes: [
      ':automobile:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3586,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🚘️',
    hexcode: '1f698',
    category: 'Travel & Places',
    subgroup: 'transport-ground',
    label: 'oncoming automobile',
    tags: [
      'automobile',
      'car',
      'oncoming'
    ],
    shortcodes: [
      ':automobile-front:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3587,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🚙',
    hexcode: '1f699',
    category: 'Travel & Places',
    subgroup: 'transport-ground',
    label: 'sport utility vehicle',
    tags: [
      'SUV',
      'car',
      'travel',
      'automobile',
      'vehicle',
    ],
    shortcodes: [
      ':sport-utility-vehicle:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3588,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🛻',
    hexcode: '1f6fb',
    category: 'Travel & Places',
    subgroup: 'transport-ground',
    label: 'pickup truck',
    tags: [
      'pick-up',
      'pickup',
      'truck'
    ],
    shortcodes: [
      ':pickup-truck:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 13,
    order: 3589,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🚚',
    hexcode: '1f69a',
    category: 'Travel & Places',
    subgroup: 'transport-ground',
    label: 'delivery truck',
    tags: [
      'delivery',
      'truck',
      'car',
      'travel',
      'trucker',
      'driver'
    ],
    shortcodes: [
      ':delivery-truck:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3590,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🚛',
    hexcode: '1f69b',
    category: 'Travel & Places',
    subgroup: 'transport-ground',
    label: 'semi truck',
    tags: [
      'semi',
      'truck',
      'delivery truck',
      'truck driver'
    ],
    shortcodes: [
      ':articulated-lorry:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3591,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🚜',
    hexcode: '1f69c',
    category: 'Travel & Places',
    subgroup: 'transport-ground',
    label: 'tractor',
    tags: [
      'vehicle',
      'tractor',
      'towing',
      'farm',
      'field',
    ],
    shortcodes: [
      ':tractor:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3592,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🏎️',
    hexcode: '1f3ce',
    category: 'Travel & Places',
    subgroup: 'transport-ground',
    label: 'racing car',
    tags: [
      'car',
      'racing',
      'sports',
      'motor'
    ],
    shortcodes: [
      ':racing-car:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3594,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🏍️',
    hexcode: '1f3cd',
    category: 'Travel & Places',
    subgroup: 'transport-ground',
    label: 'motorcycle',
    tags: [
      'racing',
      'motorsports',
      'vehicle'
    ],
    shortcodes: [
      ':motorcycle:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3596,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🛵',
    hexcode: '1f6f5',
    category: 'Travel & Places',
    subgroup: 'transport-ground',
    label: 'motor scooter',
    tags: [
      'motor',
      'scooter',
      'transportation',
      'bicycle'
    ],
    shortcodes: [
      ':motor-scooter:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 3597,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🦽',
    hexcode: '1f9bd',
    category: 'Travel & Places',
    subgroup: 'transport-ground',
    label: 'manual wheelchair',
    tags: [
      'accessibility'
    ],
    shortcodes: [
      ':manual-wheelchair:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12,
    order: 3598,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🦼',
    hexcode: '1f9bc',
    category: 'Travel & Places',
    subgroup: 'transport-ground',
    label: 'motorized wheelchair',
    tags: [
      'accessibility'
    ],
    shortcodes: [
      ':motorized-wheelchair:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12,
    order: 3599,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🛺',
    hexcode: '1f6fa',
    category: 'Travel & Places',
    subgroup: 'transport-ground',
    label: 'auto rickshaw',
    tags: [
      'tuk tuk'
    ],
    shortcodes: [
      ':auto-rickshaw:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12,
    order: 3600,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🚲️',
    hexcode: '1f6b2',
    category: 'Travel & Places',
    subgroup: 'transport-ground',
    label: 'bicycle',
    tags: [
      'bike',
      'vehicle',
      'bicycle'
    ],
    shortcodes: [
      ':bicycle:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3601,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🛴',
    hexcode: '1f6f4',
    category: 'Travel & Places',
    subgroup: 'transport-ground',
    label: 'kick scooter',
    tags: [
      'kick',
      'scooter',
      'city roller'
    ],
    shortcodes: [
      ':kick-scooter:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 3602,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🛹',
    hexcode: '1f6f9',
    category: 'Travel & Places',
    subgroup: 'transport-ground',
    label: 'skateboard',
    tags: [
      'board'
    ],
    shortcodes: [
      ':skateboard:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 11,
    order: 3603,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🛼',
    hexcode: '1f6fc',
    category: 'Travel & Places',
    subgroup: 'transport-ground',
    label: 'roller skate',
    tags: [
      'roller',
      'skate'
    ],
    shortcodes: [
      ':roller-skates:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 13,
    order: 3604,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🚏',
    hexcode: '1f68f',
    category: 'Travel & Places',
    subgroup: 'transport-ground',
    label: 'bus stop',
    tags: [
      'bus',
      'stop',
      'station',
      'traffic',
      'travel',
    ],
    shortcodes: [
      ':bus-stop:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3605,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🛣️',
    hexcode: '1f6e3',
    category: 'Travel & Places',
    subgroup: 'transport-ground',
    label: 'motorway',
    tags: [
      'highway',
      'road'
    ],
    shortcodes: [
      ':motorway:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3607,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🛤️',
    hexcode: '1f6e4',
    category: 'Travel & Places',
    subgroup: 'transport-ground',
    label: 'railway track',
    tags: [
      'railway',
      'train'
    ],
    shortcodes: [
      ':railway-track:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3609,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🛢️',
    hexcode: '1f6e2',
    category: 'Travel & Places',
    subgroup: 'transport-ground',
    label: 'oil drum',
    tags: [
      'drum',
      'oil'
    ],
    shortcodes: [
      ':oil-drum:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3611,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '⛽️',
    hexcode: '26fd',
    category: 'Travel & Places',
    subgroup: 'transport-ground',
    label: 'fuel pump',
    tags: [
      'diesel',
      'fuel',
      'gas',
      'pump',
      'station',
    ],
    shortcodes: [
      ':fuel-pump:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3612,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🛞',
    hexcode: '1f6de',
    category: 'Travel & Places',
    subgroup: 'transport-ground',
    label: 'wheel',
    tags: [
      'circle',
      'tire',
      'turn'
    ],
    shortcodes: [
      ':wheel:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 14,
    order: 3613,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🚨',
    hexcode: '1f6a8',
    category: 'Travel & Places',
    subgroup: 'transport-ground',
    label: 'police car light',
    tags: [
      'car',
      'light',
      'police',
      'revolving'
    ],
    shortcodes: [
      ':police-car-light:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3614,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🚥',
    hexcode: '1f6a5',
    category: 'Travel & Places',
    subgroup: 'transport-ground',
    label: 'horizontal traffic light',
    tags: [
      'light',
      'signal',
      'traffic',
      'red',
      'green',
      'yellow',
    ],
    shortcodes: [
      ':horizontal-traffic-light:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3615,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🚦',
    hexcode: '1f6a6',
    category: 'Travel & Places',
    subgroup: 'transport-ground',
    label: 'vertical traffic light',
    tags: [
      'light',
      'signal',
      'traffic',
      'red',
      'green',
      'yellow',
    ],
    shortcodes: [
      ':vertical-traffic-light:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3616,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🛑',
    hexcode: '1f6d1',
    category: 'Travel & Places',
    subgroup: 'transport-ground',
    label: 'stop sign',
    tags: [
      'octagon',
      'sign',
      'stop',
      'warning'
    ],
    shortcodes: [
      ':stop-sign:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 3617,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🚧',
    hexcode: '1f6a7',
    category: 'Travel & Places',
    subgroup: 'transport-ground',
    label: 'construction',
    tags: [
      'barrier',
      'warning',
      'stop',
      'attention',
      'traffic'
    ],
    shortcodes: [
      ':construction:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3618,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '⚓️',
    hexcode: '2693',
    category: 'Travel & Places',
    subgroup: 'transport-water',
    label: 'anchor',
    tags: [
      'ship',
      'boat',
      'travel',
      'sea',
      'ocean',
      'water',
      'anchor',
    ],
    shortcodes: [
      ':anchor:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3619,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🛟',
    hexcode: '1f6df',
    category: 'Travel & Places',
    subgroup: 'transport-water',
    label: 'ring buoy',
    tags: [
      'float',
      'life preserver',
      'life saver',
      'rescue',
      'safety'
    ],
    shortcodes: [
      ':ring-buoy:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 14,
    order: 3620,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '⛵️',
    hexcode: '26f5',
    category: 'Travel & Places',
    subgroup: 'transport-water',
    label: 'sailboat',
    tags: [
      'boat',
      'sea',
      'yacht',
      'ship',
      'travel',
      'ocean',
      'water',
      'sail',
    ],
    shortcodes: [
      ':sailboat:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3621,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🛶',
    hexcode: '1f6f6',
    category: 'Travel & Places',
    subgroup: 'transport-water',
    label: 'canoe',
    tags: [
      'boat'
    ],
    shortcodes: [
      ':canoe:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 3622,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🚤',
    hexcode: '1f6a4',
    category: 'Travel & Places',
    subgroup: 'transport-water',
    label: 'speedboat',
    tags: [
      'boat',
      'ship',
      'sea',
      'ocean',
      'water',
      'speed'
    ],
    shortcodes: [
      ':speedboat:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3623,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🛳️',
    hexcode: '1f6f3',
    category: 'Travel & Places',
    subgroup: 'transport-water',
    label: 'passenger ship',
    tags: [
      'passenger',
      'ship',
      'boat',
      'sea',
      'ocean',
      'water'
    ],
    shortcodes: [
      ':passenger-ship:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3625,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '⛴️',
    hexcode: '26f4',
    category: 'Travel & Places',
    subgroup: 'transport-water',
    label: 'ferry',
    tags: [
      'boat',
      'passenger'
    ],
    shortcodes: [
      ':ferry:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3627,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🛥️',
    hexcode: '1f6e5',
    category: 'Travel & Places',
    subgroup: 'transport-water',
    label: 'motor boat',
    tags: [
      'boat',
      'motor',
      'ship',
      'sea',
      'ocean',
      'water',
    ],
    shortcodes: [
      ':motor-boat:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3629,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🚢',
    hexcode: '1f6a2',
    category: 'Travel & Places',
    subgroup: 'transport-water',
    label: 'ship',
    tags: [
      'boat',
      'ship',
      'travel',
      'sea',
      'ocean',
      'water'
    ],
    shortcodes: [
      ':ship:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3630,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '✈️',
    hexcode: '2708',
    category: 'Travel & Places',
    subgroup: 'transport-air',
    label: 'airplane',
    tags: [
      'fly',
      'air',
      'sky',
      'travel',
      'departure',
      'arrive'
    ],
    shortcodes: [
      ':airplane:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3632,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🛩️',
    hexcode: '1f6e9',
    category: 'Travel & Places',
    subgroup: 'transport-air',
    label: 'small airplane',
    tags: [
      'airplane',
      'fly',
      'air',
      'sky',
      'travel'
    ],
    shortcodes: [
      ':small-airplane:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3634,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🛫',
    hexcode: '1f6eb',
    category: 'Travel & Places',
    subgroup: 'transport-air',
    label: 'airplane departure',
    tags: [
      'airplane',
      'departure',
      'fly',
      'air',
      'sky',
      'travel'
    ],
    shortcodes: [
      ':airplane-departure:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3635,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🛬',
    hexcode: '1f6ec',
    category: 'Travel & Places',
    subgroup: 'transport-air',
    label: 'airplane arrival',
    tags: [
      'airplane',
      'landing',
      'fly',
      'air',
      'sky',
      'arrive'
    ],
    shortcodes: [
      ':airplane-arrival:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3636,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🪂',
    hexcode: '1fa82',
    category: 'Travel & Places',
    subgroup: 'transport-air',
    label: 'parachute',
    tags: [
      'hang-glide',
      'parasail',
      'skydive'
    ],
    shortcodes: [
      ':parachute:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12,
    order: 3637,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '💺',
    hexcode: '1f4ba',
    category: 'Travel & Places',
    subgroup: 'transport-air',
    label: 'seat',
    tags: [
      'chair',
      'seat',
      'airplane',
      'sitting',
    ],
    shortcodes: [
      ':seat:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3638,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🚁',
    hexcode: '1f681',
    category: 'Travel & Places',
    subgroup: 'transport-air',
    label: 'helicopter',
    tags: [
      'vehicle',
      'helicopter',
      'air',
      'sky',
      'fly',
    ],
    shortcodes: [
      ':helicopter:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3639,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🚟',
    hexcode: '1f69f',
    category: 'Travel & Places',
    subgroup: 'transport-air',
    label: 'suspension railway',
    tags: [
      'railway',
      'suspension'
    ],
    shortcodes: [
      ':suspension-railway:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3640,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🚠',
    hexcode: '1f6a0',
    category: 'Travel & Places',
    subgroup: 'transport-air',
    label: 'mountain cableway',
    tags: [
      'cable',
      'gondola',
      'mountain',
      'travel',
    ],
    shortcodes: [
      ':mountain-cableway:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3641,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🚡',
    hexcode: '1f6a1',
    category: 'Travel & Places',
    subgroup: 'transport-air',
    label: 'aerial tramway',
    tags: [
      'aerial',
      'cable',
      'car',
      'gondola',
      'tramway'
    ],
    shortcodes: [
      ':aerial-tramway:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3642,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🛰️',
    hexcode: '1f6f0',
    category: 'Travel & Places',
    subgroup: 'transport-air',
    label: 'satellite',
    tags: [
      'space',
      'galaxy',
      'satellite'
    ],
    shortcodes: [
      ':satellite:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3644,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🚀',
    hexcode: '1f680',
    category: 'Travel & Places',
    subgroup: 'transport-air',
    label: 'rocket',
    tags: [
      'space',
      'rocket',
      'galaxy',
      'adventure',
      'alien',
    ],
    shortcodes: [
      ':rocket:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3645,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🛸',
    hexcode: '1f6f8',
    category: 'Travel & Places',
    subgroup: 'transport-air',
    label: 'flying saucer',
    tags: [
      'ufo',
      'alien',
      'space',
      'planets',
    ],
    shortcodes: [
      ':flying-saucer:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 5,
    order: 3646,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🛎️',
    hexcode: '1f6ce',
    category: 'Travel & Places',
    subgroup: 'hotel',
    label: 'bellhop bell',
    tags: [
      'bell',
      'bellhop',
      'hotel'
    ],
    shortcodes: [
      ':bellhop-bell:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3648,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🧳',
    hexcode: '1f9f3',
    category: 'Travel & Places',
    subgroup: 'hotel',
    label: 'luggage',
    tags: [
      'packing',
      'travel'
    ],
    shortcodes: [
      ':luggage:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 11,
    order: 3649,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '⌛️',
    hexcode: '231b',
    category: 'Travel & Places',
    subgroup: 'time',
    label: 'hourglass done',
    tags: [
      'sand',
      'timer',
      'countdown',
      'hourglass'
    ],
    shortcodes: [
      ':hourglass-done:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3650,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '⏳️',
    hexcode: '23f3',
    category: 'Travel & Places',
    subgroup: 'time',
    label: 'hourglass not done',
    tags: [
      'hourglass',
      'sand',
      'timer'
    ],
    shortcodes: [
      ':hourglass-not-done:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3651,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '⌚️',
    hexcode: '231a',
    category: 'Travel & Places',
    subgroup: 'time',
    label: 'watch',
    tags: [
      'clock',
      'watch',
      'time'
    ],
    shortcodes: [
      ':watch:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3652,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '⏰',
    hexcode: '23f0',
    category: 'Travel & Places',
    subgroup: 'time',
    label: 'alarm clock',
    tags: [
      'alarm',
      'clock'
    ],
    shortcodes: [
      ':alarm-clock:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3653,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '⏱️',
    hexcode: '23f1',
    category: 'Travel & Places',
    subgroup: 'time',
    label: 'stopwatch',
    tags: [
      'clock'
    ],
    shortcodes: [
      ':stopwatch:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3655,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '⏲️',
    hexcode: '23f2',
    category: 'Travel & Places',
    subgroup: 'time',
    label: 'timer clock',
    tags: [
      'clock',
      'timer',
      'time'
    ],
    shortcodes: [
      ':timer-clock:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3657,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🕰️',
    hexcode: '1f570',
    category: 'Travel & Places',
    subgroup: 'time',
    label: 'mantelpiece clock',
    tags: [
      'clock'
    ],
    shortcodes: [
      ':mantelpiece-clock:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3659,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🕛️',
    hexcode: '1f55b',
    category: 'Travel & Places',
    subgroup: 'time',
    label: 'twelve o’clock',
    tags: [
      '12:00',
      'clock',
      'twelve',
      'time'
    ],
    shortcodes: [
      ':twelve-o-clock:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3660,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🕧️',
    hexcode: '1f567',
    category: 'Travel & Places',
    subgroup: 'time',
    label: 'twelve-thirty',
    tags: [
      '12:30',
      'clock',
      'thirty',
      'twelve',
      'time'
    ],
    shortcodes: [
      ':twelve-thirty:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3661,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🕐️',
    hexcode: '1f550',
    category: 'Travel & Places',
    subgroup: 'time',
    label: 'one o’clock',
    tags: [
      '1:00',
      'clock',
      'one',
      'time'
    ],
    shortcodes: [
      ':one-o-clock:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3662,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🕜️',
    hexcode: '1f55c',
    category: 'Travel & Places',
    subgroup: 'time',
    label: 'one-thirty',
    tags: [
      '1:30',
      'clock',
      'one',
      'thirty',
      'time'
    ],
    shortcodes: [
      ':one-thirty:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3663,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🕑️',
    hexcode: '1f551',
    category: 'Travel & Places',
    subgroup: 'time',
    label: 'two o’clock',
    tags: [
      '2:00',
      'clock',
      'two',
      'time'
    ],
    shortcodes: [
      ':two-o-clock:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3664,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🕝️',
    hexcode: '1f55d',
    category: 'Travel & Places',
    subgroup: 'time',
    label: 'two-thirty',
    tags: [
      '2:30',
      'clock',
      'thirty',
      'two',
      'time'
    ],
    shortcodes: [
      ':two-thirty:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3665,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🕒️',
    hexcode: '1f552',
    category: 'Travel & Places',
    subgroup: 'time',
    label: 'three o’clock',
    tags: [
      '3:00',
      'clock',
      'three',
      'time'
    ],
    shortcodes: [
      ':three-o-clock:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3666,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🕞️',
    hexcode: '1f55e',
    category: 'Travel & Places',
    subgroup: 'time',
    label: 'three-thirty',
    tags: [
      '3:30',
      'clock',
      'thirty',
      'three',
      'time'
    ],
    shortcodes: [
      ':three-thirty:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3667,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🕓️',
    hexcode: '1f553',
    category: 'Travel & Places',
    subgroup: 'time',
    label: 'four o’clock',
    tags: [
      '4:00',
      'clock',
      'four',
      'time'
    ],
    shortcodes: [
      ':four-o-clock:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3668,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🕟️',
    hexcode: '1f55f',
    category: 'Travel & Places',
    subgroup: 'time',
    label: 'four-thirty',
    tags: [
      '4:30',
      'clock',
      'four',
      'thirty',
      'time'
    ],
    shortcodes: [
      ':four-thirty:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3669,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🕔️',
    hexcode: '1f554',
    category: 'Travel & Places',
    subgroup: 'time',
    label: 'five o’clock',
    tags: [
      '5:00',
      'clock',
      'five',
      'time'
    ],
    shortcodes: [
      ':five-o-clock:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3670,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🕠️',
    hexcode: '1f560',
    category: 'Travel & Places',
    subgroup: 'time',
    label: 'five-thirty',
    tags: [
      '5:30',
      'clock',
      'five',
      'thirty',
      'time'
    ],
    shortcodes: [
      ':five-thirty:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3671,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🕕️',
    hexcode: '1f555',
    category: 'Travel & Places',
    subgroup: 'time',
    label: 'six o’clock',
    tags: [
      '6:00',
      'clock',
      'six',
      'time'
    ],
    shortcodes: [
      ':six-o-clock:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3672,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🕡️',
    hexcode: '1f561',
    category: 'Travel & Places',
    subgroup: 'time',
    label: 'six-thirty',
    tags: [
      '6:30',
      'clock',
      'six',
      'thirty',
      'time'
    ],
    shortcodes: [
      ':six-thirty:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3673,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🕖️',
    hexcode: '1f556',
    category: 'Travel & Places',
    subgroup: 'time',
    label: 'seven o’clock',
    tags: [
      '7:00',
      'clock',
      'o’clock',
      'seven',
      'time'
    ],
    shortcodes: [
      ':seven-o-clock:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3674,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🕢️',
    hexcode: '1f562',
    category: 'Travel & Places',
    subgroup: 'time',
    label: 'seven-thirty',
    tags: [
      '7:30',
      'clock',
      'seven',
      'thirty',
      'time'
    ],
    shortcodes: [
      ':seven-thirty:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3675,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🕗️',
    hexcode: '1f557',
    category: 'Travel & Places',
    subgroup: 'time',
    label: 'eight o’clock',
    tags: [
      '8:00',
      'clock',
      'eight',
      'time'
    ],
    shortcodes: [
      ':eight-o-clock:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3676,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🕣️',
    hexcode: '1f563',
    category: 'Travel & Places',
    subgroup: 'time',
    label: 'eight-thirty',
    tags: [
      '8:30',
      'clock',
      'eight',
      'thirty',
      'time'
    ],
    shortcodes: [
      ':eight-thirty:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3677,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🕘️',
    hexcode: '1f558',
    category: 'Travel & Places',
    subgroup: 'time',
    label: 'nine o’clock',
    tags: [
      '9:00',
      'clock',
      'nine',
      'time'
    ],
    shortcodes: [
      ':nine-o-clock:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3678,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🕤️',
    hexcode: '1f564',
    category: 'Travel & Places',
    subgroup: 'time',
    label: 'nine-thirty',
    tags: [
      '9:30',
      'clock',
      'nine',
      'thirty',
      'time'
    ],
    shortcodes: [
      ':nine-thirty:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3679,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🕙️',
    hexcode: '1f559',
    category: 'Travel & Places',
    subgroup: 'time',
    label: 'ten o’clock',
    tags: [
      '10:00',
      'clock',
      'ten',
      'time'
    ],
    shortcodes: [
      ':ten-o-clock:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3680,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🕥️',
    hexcode: '1f565',
    category: 'Travel & Places',
    subgroup: 'time',
    label: 'ten-thirty',
    tags: [
      '10:30',
      'clock',
      'ten',
      'thirty',
      'time'
    ],
    shortcodes: [
      ':ten-thirty:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3681,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🕚️',
    hexcode: '1f55a',
    category: 'Travel & Places',
    subgroup: 'time',
    label: 'eleven o’clock',
    tags: [
      '11:00',
      'clock',
      'eleven',
      'time'
    ],
    shortcodes: [
      ':eleven-o-clock:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3682,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🕦️',
    hexcode: '1f566',
    category: 'Travel & Places',
    subgroup: 'time',
    label: 'eleven-thirty',
    tags: [
      '11:30',
      'clock',
      'eleven',
      'thirty',
      'time'
    ],
    shortcodes: [
      ':eleven-thirty:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3683,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🌑',
    hexcode: '1f311',
    category: 'Travel & Places',
    subgroup: 'sky-weather',
    label: 'new moon',
    tags: [
      'dark',
      'moon'
    ],
    shortcodes: [
      ':new-moon:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3684,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🌒',
    hexcode: '1f312',
    category: 'Travel & Places',
    subgroup: 'sky-weather',
    label: 'waxing crescent moon',
    tags: [
      'crescent',
      'moon',
      'waxing'
    ],
    shortcodes: [
      ':waxing-crescent-moon:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3685,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🌓',
    hexcode: '1f313',
    category: 'Travel & Places',
    subgroup: 'sky-weather',
    label: 'first quarter moon',
    tags: [
      'moon',
      'quarter'
    ],
    shortcodes: [
      ':first-quarter-moon:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3686,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🌔',
    hexcode: '1f314',
    category: 'Travel & Places',
    subgroup: 'sky-weather',
    label: 'waxing gibbous moon',
    tags: [
      'gibbous',
      'moon',
      'waxing'
    ],
    shortcodes: [
      ':waxing-gibbous-moon:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3687,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🌕️',
    hexcode: '1f315',
    category: 'Travel & Places',
    subgroup: 'sky-weather',
    label: 'full moon',
    tags: [
      'full',
      'moon'
    ],
    shortcodes: [
      ':full-moon:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3688,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🌖',
    hexcode: '1f316',
    category: 'Travel & Places',
    subgroup: 'sky-weather',
    label: 'waning gibbous moon',
    tags: [
      'gibbous',
      'moon',
      'waning'
    ],
    shortcodes: [
      ':waning-gibbous-moon:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3689,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🌗',
    hexcode: '1f317',
    category: 'Travel & Places',
    subgroup: 'sky-weather',
    label: 'last quarter moon',
    tags: [
      'moon',
      'quarter'
    ],
    shortcodes: [
      ':last-quarter-moon:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3690,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🌘',
    hexcode: '1f318',
    category: 'Travel & Places',
    subgroup: 'sky-weather',
    label: 'waning crescent moon',
    tags: [
      'crescent',
      'moon',
      'waning'
    ],
    shortcodes: [
      ':waning-crescent-moon:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3691,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🌙',
    hexcode: '1f319',
    category: 'Travel & Places',
    subgroup: 'sky-weather',
    label: 'crescent moon',
    tags: [
      'crescent',
      'moon',
      'night',
      'planet',
    ],
    shortcodes: [
      ':crescent-moon:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3692,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🌚',
    hexcode: '1f31a',
    category: 'Travel & Places',
    subgroup: 'sky-weather',
    label: 'new moon face',
    tags: [
      'face',
      'moon'
    ],
    shortcodes: [
      ':moon-face-new:'
    ],
    emoticons: [
      '>_>'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3693,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🌛',
    hexcode: '1f31b',
    category: 'Travel & Places',
    subgroup: 'sky-weather',
    label: 'first quarter moon face',
    tags: [
      'face',
      'moon',
      'night',
      'planet'
    ],
    shortcodes: [
      ':moon-face-first-quarter:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3694,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🌜️',
    hexcode: '1f31c',
    category: 'Travel & Places',
    subgroup: 'sky-weather',
    label: 'last quarter moon face',
    tags: [
      'face',
      'moon',
      'night',
      'planet'
    ],
    shortcodes: [
      ':moon-face-last-quarter:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3695,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🌡️',
    hexcode: '1f321',
    category: 'Travel & Places',
    subgroup: 'sky-weather',
    label: 'thermometer',
    tags: [
      'weather',
      'temperature',
      'degrees',
      'heat',
      'fever',
      'cold',
      'sick'
    ],
    shortcodes: [
      ':thermometer:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3697,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '☀️',
    hexcode: '2600',
    category: 'Travel & Places',
    subgroup: 'sky-weather',
    label: 'sun',
    tags: [
      'rays',
      'sunny',
      'sunshine',
    ],
    shortcodes: [
      ':sunny:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3699,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🌝',
    hexcode: '1f31d',
    category: 'Travel & Places',
    subgroup: 'sky-weather',
    label: 'full moon face',
    tags: [
      'face',
      'full',
      'moon',
    ],
    shortcodes: [
      ':moon-face-full:'
    ],
    emoticons: [
      '<_<'
    ],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3700,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🌞',
    hexcode: '1f31e',
    category: 'Travel & Places',
    subgroup: 'sky-weather',
    label: 'sun with face',
    tags: [
      'bright',
      'face',
      'sun',
      'sunrise',
    ],
    shortcodes: [
      ':sun-with-face:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3701,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🪐',
    hexcode: '1fa90',
    category: 'Travel & Places',
    subgroup: 'sky-weather',
    label: 'ringed planet',
    tags: [
      'saturn',
      'planet'
    ],
    shortcodes: [
      ':ringed-planet:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12,
    order: 3702,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '⭐️',
    hexcode: '2b50',
    category: 'Travel & Places',
    subgroup: 'sky-weather',
    label: 'star',
    tags: [
      'star',
      'shine',
      'sky',
      'sparkle',
    ],
    shortcodes: [
      ':star:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3703,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🌟',
    hexcode: '1f31f',
    category: 'Travel & Places',
    subgroup: 'sky-weather',
    label: 'glowing star',
    tags: [
      'glow',
      'shining',
      'sparkle',
      'star',
    ],
    shortcodes: [
      ':glowing-star:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3704,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🌠',
    hexcode: '1f320',
    category: 'Travel & Places',
    subgroup: 'sky-weather',
    label: 'shooting star',
    tags: [
      'falling',
      'shooting',
      'star',
      'sky',
    ],
    shortcodes: [
      ':shooting-star:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3705,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🌌',
    hexcode: '1f30c',
    category: 'Travel & Places',
    subgroup: 'sky-weather',
    label: 'milky way',
    tags: [
      'space'
    ],
    shortcodes: [
      ':milky-way:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3706,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '☁️',
    hexcode: '2601',
    category: 'Travel & Places',
    subgroup: 'sky-weather',
    label: 'cloud',
    tags: [
      'weather',
      'cloud',
      'cloudy',
      'rain',
    ],
    shortcodes: [
      ':cloud:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3708,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '⛅️',
    hexcode: '26c5',
    category: 'Travel & Places',
    subgroup: 'sky-weather',
    label: 'sun behind cloud',
    tags: [
      'cloud',
      'sun',
      'behind',
    ],
    shortcodes: [
      ':partly-sunny:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3709,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '⛈️',
    hexcode: '26c8',
    category: 'Travel & Places',
    subgroup: 'sky-weather',
    label: 'cloud with lightning and rain',
    tags: [
      'cloud',
      'rain',
      'thunder',
      'lightning',
      'storm',
    ],
    shortcodes: [
      ':cloud-with-lightning-and-rain:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3711,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🌤️',
    hexcode: '1f324',
    category: 'Travel & Places',
    subgroup: 'sky-weather',
    label: 'sun behind small cloud',
    tags: [
      'cloud',
      'sun',
      'behind',
      'sky',
      'weather'
    ],
    shortcodes: [
      ':sun-behind-small-cloud:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3713,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🌥️',
    hexcode: '1f325',
    category: 'Travel & Places',
    subgroup: 'sky-weather',
    label: 'sun behind large cloud',
    tags: [
      'cloud',
      'sun',
      'behind',
      'sky',
      'weather'
    ],
    shortcodes: [
      ':sun-behind-large-cloud:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3715,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🌦️',
    hexcode: '1f326',
    category: 'Travel & Places',
    subgroup: 'sky-weather',
    label: 'sun behind rain cloud',
    tags: [
      'cloud',
      'rain',
      'sun',
      'behind',
      'weather'
    ],
    shortcodes: [
      ':sun-behind-rain-cloud:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3717,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🌧️',
    hexcode: '1f327',
    category: 'Travel & Places',
    subgroup: 'sky-weather',
    label: 'cloud with rain',
    tags: [
      'cloud',
      'rain',
      'raindrops',
      'storm'
    ],
    shortcodes: [
      ':rain-cloud:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3719,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🌨️',
    hexcode: '1f328',
    category: 'Travel & Places',
    subgroup: 'sky-weather',
    label: 'cloud with snow',
    tags: [
      'cloud',
      'cold',
      'snow',
      'weather'
    ],
    shortcodes: [
      ':cloud-with-snow:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3721,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🌩️',
    hexcode: '1f329',
    category: 'Travel & Places',
    subgroup: 'sky-weather',
    label: 'cloud with lightning',
    tags: [
      'cloud',
      'lightning',
      'storm'
    ],
    shortcodes: [
      ':cloud-with-lightning:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3723,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🌪️',
    hexcode: '1f32a',
    category: 'Travel & Places',
    subgroup: 'sky-weather',
    label: 'tornado',
    tags: [
      'whirlwind',
      'wind',
      'storm',
      'hurricane',
      'typhoon',
      'cyclone'
    ],
    shortcodes: [
      ':tornado:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3725,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🌫️',
    hexcode: '1f32b',
    category: 'Travel & Places',
    subgroup: 'sky-weather',
    label: 'fog',
    tags: [
      'cloud'
    ],
    shortcodes: [
      ':fog:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3727,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🌬️',
    hexcode: '1f32c',
    category: 'Travel & Places',
    subgroup: 'sky-weather',
    label: 'wind face',
    tags: [
      'blow',
      'cloud',
      'face',
      'wind',
    ],
    shortcodes: [
      ':wind-face:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3729,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🌀',
    hexcode: '1f300',
    category: 'Travel & Places',
    subgroup: 'sky-weather',
    label: 'cyclone',
    tags: [
      'dizzy',
      'hurricane',
      'twister',
      'typhoon',
      'whirl',
      'swirl',
      'spiral',
    ],
    shortcodes: [
      ':cyclone:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3730,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🌈',
    hexcode: '1f308',
    category: 'Travel & Places',
    subgroup: 'sky-weather',
    label: 'rainbow',
    tags: [
      'rain',
      'rainbow',
      'color',
      'colorful',
    ],
    shortcodes: [
      ':rainbow:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3731,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🌂',
    hexcode: '1f302',
    category: 'Travel & Places',
    subgroup: 'sky-weather',
    label: 'closed umbrella',
    tags: [
      'rain',
      'umbrella'
    ],
    shortcodes: [
      ':closed-umbrella:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3732,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '☂️',
    hexcode: '2602',
    category: 'Travel & Places',
    subgroup: 'sky-weather',
    label: 'umbrella',
    tags: [
      'rain',
      'purple',
      'umbrella',
      'raindrops'
    ],
    shortcodes: [
      ':umbrella:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3734,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '☔️',
    hexcode: '2614',
    category: 'Travel & Places',
    subgroup: 'sky-weather',
    label: 'umbrella with rain drops',
    tags: [
      'rain',
      'umbrella',
      'raindrops',
    ],
    shortcodes: [
      ':umbrella-in-rain:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3735,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '⛱️',
    hexcode: '26f1',
    category: 'Travel & Places',
    subgroup: 'sky-weather',
    label: 'umbrella on ground',
    tags: [
      'rain',
      'sun',
      'umbrella'
    ],
    shortcodes: [
      ':umbrella-on-ground:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3737,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '⚡️',
    hexcode: '26a1',
    category: 'Travel & Places',
    subgroup: 'sky-weather',
    label: 'high voltage',
    tags: [
      'danger',
      'electric',
      'lightning',
      'voltage',
      'zap',
    ],
    shortcodes: [
      ':electricity:',
      ':zap:',
      ':lightning:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3738,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '❄️',
    hexcode: '2744',
    category: 'Travel & Places',
    subgroup: 'sky-weather',
    label: 'snowflake',
    tags: [
      'cold',
      'snow',
      'ice',
    ],
    shortcodes: [
      ':snowflake:',
      ':winter:',
      ':cold:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3740,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '☃️',
    hexcode: '2603',
    category: 'Travel & Places',
    subgroup: 'sky-weather',
    label: 'snowman',
    tags: [
      'cold',
      'snow'
    ],
    shortcodes: [
      ':snowman-with-snow:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3742,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '⛄️',
    hexcode: '26c4',
    category: 'Travel & Places',
    subgroup: 'sky-weather',
    label: 'snowman without snow',
    tags: [
      'cold',
      'snow',
      'snowman',
      'frosty',
      'olaf',
      'winter',
    ],
    shortcodes: [
      ':snowman:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3743,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '☄️',
    hexcode: '2604',
    category: 'Travel & Places',
    subgroup: 'sky-weather',
    label: 'comet',
    tags: [
      'space'
    ],
    shortcodes: [
      ':comet:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3745,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🔥',
    hexcode: '1f525',
    category: 'Travel & Places',
    subgroup: 'sky-weather',
    label: 'fire',
    tags: [
      'flame',
      'burn',
      'hot',
    ],
    shortcodes: [
      ':fire:',
      ':burn:',
      ':lit:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3746,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '💧',
    hexcode: '1f4a7',
    category: 'Travel & Places',
    subgroup: 'sky-weather',
    label: 'droplet',
    tags: [
      'cold',
      'drop',
      'sweat',
      'wet',
      'tear'
    ],
    shortcodes: [
      ':droplet:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3747,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🌊',
    hexcode: '1f30a',
    category: 'Travel & Places',
    subgroup: 'sky-weather',
    label: 'water wave',
    tags: [
      'ocean',
      'water',
      'wave',
      'sea',
    ],
    shortcodes: [
      ':ocean:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3748,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🎃',
    hexcode: '1f383',
    category: 'Activities',
    subgroup: 'event',
    label: 'jack-o-lantern',
    tags: [
      'celebration',
      'halloween',
      'jack',
      'lantern',
      'pumpkin'
    ],
    shortcodes: [
      ':jack-o-lantern:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3749,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🎄',
    hexcode: '1f384',
    category: 'Activities',
    subgroup: 'event',
    label: 'Christmas tree',
    tags: [
      'celebration',
      'christmas',
      'tree',
      'xmas'
    ],
    shortcodes: [
      ':Christmas-tree:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3750,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🎆',
    hexcode: '1f386',
    category: 'Activities',
    subgroup: 'event',
    label: 'fireworks',
    tags: [
      'celebration'
    ],
    shortcodes: [
      ':fireworks:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3751,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🎇',
    hexcode: '1f387',
    category: 'Activities',
    subgroup: 'event',
    label: 'sparkler',
    tags: [
      'celebration',
      'fireworks',
      'sparkle'
    ],
    shortcodes: [
      ':sparkler:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3752,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🧨',
    hexcode: '1f9e8',
    category: 'Activities',
    subgroup: 'event',
    label: 'firecracker',
    tags: [
      'dynamite',
      'explosive',
      'fireworks'
    ],
    shortcodes: [
      ':firecracker:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 11,
    order: 3753,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '✨',
    hexcode: '2728',
    category: 'Activities',
    subgroup: 'event',
    label: 'sparkles',
    tags: [
      '*',
      'sparkle',
      'star',
      'magic',
      'beautiful'
    ],
    shortcodes: [
      ':sparkles:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3754,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🎈',
    hexcode: '1f388',
    category: 'Activities',
    subgroup: 'event',
    label: 'balloon',
    tags: [
      'celebration',
      'balloon',
      'birthday',
      'party',
      'decoration'
    ],
    shortcodes: [
      ':balloon:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3755,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🎉',
    hexcode: '1f389',
    category: 'Activities',
    subgroup: 'event',
    label: 'party popper',
    tags: [
      'celebration',
      'party',
      'popper',
      'tada',
      'decoration',
      'happy'
    ],
    shortcodes: [
      ':party-popper:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3756,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🎊',
    hexcode: '1f38a',
    category: 'Activities',
    subgroup: 'event',
    label: 'confetti ball',
    tags: [
      'ball',
      'celebration',
      'confetti',
      'decoration',
      'happy'
    ],
    shortcodes: [
      ':confetti-ball:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3757,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  // {
  //   type: 'emoji',
  //   symbol: '🎋',
  //   hexcode: '1f38b',
  //   category: 'Activities',
  //   subgroup: 'event',
  //   label: 'tanabata tree',
  //   tags: [
  //     'banner',
  //     'celebration',
  //     'japanese',
  //     'tree'
  //   ],
  //   shortcodes: [
  //     ':tanabata-tree:'
  //   ],
  //   emoticons: [],
  //   directional: false,
  //   variation: false,
  //   variationBase: null,
  //   unicode: 0.6,
  //   order: 3758,
  //   skintone: null,
  //   skintoneCombination: null,
  //   skintoneBase: null
  // },
  {
    type: 'emoji',
    symbol: '🎍',
    hexcode: '1f38d',
    category: 'Activities',
    subgroup: 'event',
    label: 'pine decoration',
    tags: [
      'bamboo',
      'celebration',
      'japanese',
      'pine'
    ],
    shortcodes: [
      ':pine-decoration:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3759,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🎎',
    hexcode: '1f38e',
    category: 'Activities',
    subgroup: 'event',
    label: 'Japanese dolls',
    tags: [
      'celebration',
      'doll',
      'festival',
      'japanese',
    ],
    shortcodes: [
      ':Japanese-dolls:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3760,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🎏',
    hexcode: '1f38f',
    category: 'Activities',
    subgroup: 'event',
    label: 'carp streamer',
    tags: [
      'carp',
      'celebration',
      'streamer'
    ],
    shortcodes: [
      ':carp-streamer:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3761,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🎐',
    hexcode: '1f390',
    category: 'Activities',
    subgroup: 'event',
    label: 'wind chime',
    tags: [
      'bell',
      'celebration',
      'chime',
      'wind'
    ],
    shortcodes: [
      ':wind-chime:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3762,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🎑',
    hexcode: '1f391',
    category: 'Activities',
    subgroup: 'event',
    label: 'moon viewing ceremony',
    tags: [
      'celebration',
      'ceremony',
      'moon'
    ],
    shortcodes: [
      ':moon-viewing-ceremony:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3763,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🧧',
    hexcode: '1f9e7',
    category: 'Activities',
    subgroup: 'event',
    label: 'red envelope',
    tags: [
      'gift',
      'good luck',
      'hóngbāo',
      'lai see',
      'money'
    ],
    shortcodes: [
      ':red-envelope:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 11,
    order: 3764,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🎀',
    hexcode: '1f380',
    category: 'Activities',
    subgroup: 'event',
    label: 'ribbon',
    tags: [
      'celebration',
      'present',
      'gift',
      'decoration',
      'party',
      'girl',
      'fashion'
    ],
    shortcodes: [
      ':ribbon:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3765,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🎁',
    hexcode: '1f381',
    category: 'Activities',
    subgroup: 'event',
    label: 'wrapped gift',
    tags: [
      'box',
      'gift',
      'present',
      'wrapped',
      'birthday',
      'christmas'
    ],
    shortcodes: [
      ':wrapped-gift:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3766,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🎗️',
    hexcode: '1f397',
    category: 'Activities',
    subgroup: 'event',
    label: 'reminder ribbon',
    tags: [
      'celebration',
      'reminder',
      'ribbon'
    ],
    shortcodes: [
      ':reminder-ribbon:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3768,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🎟️',
    hexcode: '1f39f',
    category: 'Activities',
    subgroup: 'event',
    label: 'admission tickets',
    tags: [
      'admission',
      'ticket'
    ],
    shortcodes: [
      ':admission-tickets:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3770,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🎫',
    hexcode: '1f3ab',
    category: 'Activities',
    subgroup: 'event',
    label: 'ticket',
    tags: [
      'admission'
    ],
    shortcodes: [
      ':ticket:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3771,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🎖️',
    hexcode: '1f396',
    category: 'Activities',
    subgroup: 'award-medal',
    label: 'military medal',
    tags: [
      'celebration',
      'medal',
      'military',
      'medallion',
      'ribbon'
    ],
    shortcodes: [
      ':military-medal:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3773,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🏆️',
    hexcode: '1f3c6',
    category: 'Activities',
    subgroup: 'award-medal',
    label: 'trophy',
    tags: [
      'prize',
      'championship',
      'winner',
      'gold cup',
      'award'
    ],
    shortcodes: [
      ':trophy:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3774,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🏅',
    hexcode: '1f3c5',
    category: 'Activities',
    subgroup: 'award-medal',
    label: 'sports medal',
    tags: [
      'medal',
      'sports',
      'sporting'
    ],
    shortcodes: [
      ':medal:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3775,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🥇',
    hexcode: '1f947',
    category: 'Activities',
    subgroup: 'award-medal',
    label: '1st place medal',
    tags: [
      'first',
      'gold',
      'medal',
      'gold medal',
      '1st place medal',
    ],
    shortcodes: [
      ':gold-medal:',
      ':1st-place-medal:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 3776,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🥈',
    hexcode: '1f948',
    category: 'Activities',
    subgroup: 'award-medal',
    label: '2nd place medal',
    tags: [
      'medal',
      'second',
      'silver',
      'silver medal',
      'second place',
      '2nd place medal'
    ],
    shortcodes: [
      ':silver-medal:',
      ':2nd-place-medal:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 3777,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🥉',
    hexcode: '1f949',
    category: 'Activities',
    subgroup: 'award-medal',
    label: '3rd place medal',
    tags: [
      'bronze',
      'medal',
      'third',
      'bronze medal',
      'third place',
      '3rd place medal'
    ],
    shortcodes: [
      ':bronze-medal:',
      ':3rd-place-medal:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 3778,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '⚽️',
    hexcode: '26bd',
    category: 'Activities',
    subgroup: 'sport',
    label: 'soccer ball',
    tags: [
      'ball',
      'football',
      'soccer',
      'game',
      'ball game',
      'team sports'
    ],
    shortcodes: [
      ':soccer-ball:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3779,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '⚾️',
    hexcode: '26be',
    category: 'Activities',
    subgroup: 'sport',
    label: 'baseball',
    tags: [
      'ball',
      'baseball',
      'white',
      'american',
      'game',
      'ball game',
      'team sports'
    ],
    shortcodes: [
      ':baseball:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3780,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🥎',
    hexcode: '1f94e',
    category: 'Activities',
    subgroup: 'sport',
    label: 'softball',
    tags: [
      'ball',
      'glove',
      'underarm'
    ],
    shortcodes: [
      ':softball:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 11,
    order: 3781,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🏀',
    hexcode: '1f3c0',
    category: 'Activities',
    subgroup: 'sport',
    label: 'basketball',
    tags: [
      'ball',
      'hoop',
      'basketball',
      'orange ball',
      'team sport',
      'sport',
      'canadian sport',
      'game'
    ],
    shortcodes: [
      ':basketball:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3782,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🏐',
    hexcode: '1f3d0',
    category: 'Activities',
    subgroup: 'sport',
    label: 'volleyball',
    tags: [
      'ball',
      'game',
      'ball game',
      'team sport',
      'sport',
      'hobby',
      'olympic games'
    ],
    shortcodes: [
      ':volleyball:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3783,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🏈',
    hexcode: '1f3c8',
    category: 'Activities',
    subgroup: 'sport',
    label: 'american football',
    tags: [
      'american',
      'ball',
      'football',
      'american game',
      'oval ball',
      'ball game',
      'superbowl',
      'team sport'
    ],
    shortcodes: [
      ':american-football:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3784,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🏉',
    hexcode: '1f3c9',
    category: 'Activities',
    subgroup: 'sport',
    label: 'rugby football',
    tags: [
      'ball',
      'football',
      'rugby',
      'brown ball',
      'league',
      'union',
      'team sport',
      'british sports',
      'sport'
    ],
    shortcodes: [
      ':rugby-football:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3785,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🎾',
    hexcode: '1f3be',
    category: 'Activities',
    subgroup: 'sport',
    label: 'tennis',
    tags: [
      'ball',
      'racquet',
      'tennis',
      'tennis ball',
      'ball game',
      'game',
      'racket',
      'sport'
    ],
    shortcodes: [
      ':tennis:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3786,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🥏',
    hexcode: '1f94f',
    category: 'Activities',
    subgroup: 'sport',
    label: 'flying disc',
    tags: [
      'ultimate'
    ],
    shortcodes: [
      ':flying-disc:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 11,
    order: 3787,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🎳',
    hexcode: '1f3b3',
    category: 'Activities',
    subgroup: 'sport',
    label: 'bowling',
    tags: [
      'ball',
      'game'
    ],
    shortcodes: [
      ':bowling:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3788,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🏏',
    hexcode: '1f3cf',
    category: 'Activities',
    subgroup: 'sport',
    label: 'cricket game',
    tags: [
      'ball',
      'bat',
      'game',
      'cricket',
      'cricket bat and ball',
      'hobby',
      'activity'
    ],
    shortcodes: [
      ':cricket-game:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3789,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🏑',
    hexcode: '1f3d1',
    category: 'Activities',
    subgroup: 'sport',
    label: 'field hockey',
    tags: [
      'ball',
      'field',
      'game',
      'hockey',
      'stick',
      'field hockey stick and ball',
      'ice hockey',
      'team sport',
      'hockey stick',
      'puck'
    ],
    shortcodes: [
      ':field-hockey:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3790,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🏒',
    hexcode: '1f3d2',
    category: 'Activities',
    subgroup: 'sport',
    label: 'ice hockey',
    tags: [
      'game',
      'hockey',
      'ice',
      'puck',
      'stick',
      'ice hockey',
      'hockey stick',
      'field hockey',
      'team sport'
    ],
    shortcodes: [
      ':ice-hockey:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3791,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🥍',
    hexcode: '1f94d',
    category: 'Activities',
    subgroup: 'sport',
    label: 'lacrosse',
    tags: [
      'ball',
      'goal',
      'stick'
    ],
    shortcodes: [
      ':lacrosse:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 11,
    order: 3792,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🏓',
    hexcode: '1f3d3',
    category: 'Activities',
    subgroup: 'sport',
    label: 'ping pong',
    tags: [
      'ball',
      'bat',
      'game',
      'paddle',
      'table tennis',
      'ping pong',
      'ball game',
      'hobby'
    ],
    shortcodes: [
      ':ping-pong:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3793,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🏸',
    hexcode: '1f3f8',
    category: 'Activities',
    subgroup: 'sport',
    label: 'badminton',
    tags: [
      'birdie',
      'game',
      'racquet',
      'shuttlecock'
    ],
    shortcodes: [
      ':badminton:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3794,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🥊',
    hexcode: '1f94a',
    category: 'Activities',
    subgroup: 'sport',
    label: 'boxing glove',
    tags: [
      'boxing',
      'glove',
      'red',
      'mitt',
      'sport',
      'fist',
      'beat',
      'slap',
      'slap in your face',
      'muhammad ali'
    ],
    shortcodes: [
      ':boxing-glove:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 3795,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🥋',
    hexcode: '1f94b',
    category: 'Activities',
    subgroup: 'sport',
    label: 'martial arts uniform',
    tags: [
      'judo',
      'karate',
      'martial arts',
      'taekwondo',
      'uniform',
      'white',
      'keikogi',
      'sport'
    ],
    shortcodes: [
      ':martial-arts-uniform:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 3796,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🥅',
    hexcode: '1f945',
    category: 'Activities',
    subgroup: 'sport',
    label: 'goal net',
    tags: [
      'goal',
      'net'
    ],
    shortcodes: [
      ':goal-net:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 3797,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '⛳️',
    hexcode: '26f3',
    category: 'Activities',
    subgroup: 'sport',
    label: 'flag in hole',
    tags: [
      'golf',
      'hole',
      'flag',
      'golf flag',
      'golf hole with flag',
      'sport',
      'ball',
      'goal'
    ],
    shortcodes: [
      ':flag-in-hole:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3798,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '⛸️',
    hexcode: '26f8',
    category: 'Activities',
    subgroup: 'sport',
    label: 'ice skate',
    tags: [
      'ice',
      'skate'
    ],
    shortcodes: [
      ':ice-skate:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3800,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🎣',
    hexcode: '1f3a3',
    category: 'Activities',
    subgroup: 'sport',
    label: 'fishing pole',
    tags: [
      'fish',
      'pole',
      'fishing rod',
      'fishing pole',
      'line',
      'caught',
      'hobby'
    ],
    shortcodes: [
      ':fishing-pole:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3801,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🤿',
    hexcode: '1f93f',
    category: 'Activities',
    subgroup: 'sport',
    label: 'diving mask',
    tags: [
      'diving',
      'scuba',
      'snorkeling'
    ],
    shortcodes: [
      ':diving-mask:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12,
    order: 3802,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🎽',
    hexcode: '1f3bd',
    category: 'Activities',
    subgroup: 'sport',
    label: 'running shirt',
    tags: [
      'athletics',
      'running',
      'sash',
      'shirt'
    ],
    shortcodes: [
      ':running-shirt:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3803,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🎿',
    hexcode: '1f3bf',
    category: 'Activities',
    subgroup: 'sport',
    label: 'skis',
    tags: [
      'ski',
      'snow',
      'skis',
      'skiing',
      'ski boot',
      'to ski',
      'winter',
      'hobby',
      'sport'
    ],
    shortcodes: [
      ':skis:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3804,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🛷',
    hexcode: '1f6f7',
    category: 'Activities',
    subgroup: 'sport',
    label: 'sled',
    tags: [
      'sledge',
      'sleigh'
    ],
    shortcodes: [
      ':sled:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 5,
    order: 3805,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🥌',
    hexcode: '1f94c',
    category: 'Activities',
    subgroup: 'sport',
    label: 'curling stone',
    tags: [
      'game',
      'rock'
    ],
    shortcodes: [
      ':curling-stone:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 5,
    order: 3806,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🎯',
    hexcode: '1f3af',
    category: 'Activities',
    subgroup: 'game',
    label: 'bullseye',
    tags: [
      'dart',
      'direct hit',
      'game',
      'hit',
      'target',
      'direct',
      'dart board',
      'archery',
      'bullseye',
      'darts'
    ],
    shortcodes: [
      ':direct-hit:',
      ':target:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3807,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🪀',
    hexcode: '1fa80',
    category: 'Activities',
    subgroup: 'game',
    label: 'yo-yo',
    tags: [
      'fluctuate',
      'toy'
    ],
    shortcodes: [
      ':yo-yo:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12,
    order: 3808,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🪁',
    hexcode: '1fa81',
    category: 'Activities',
    subgroup: 'game',
    label: 'kite',
    tags: [
      'fly',
      'soar'
    ],
    shortcodes: [
      ':kite:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12,
    order: 3809,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🔫',
    hexcode: '1f52b',
    category: 'Activities',
    subgroup: 'game',
    label: 'water pistol',
    tags: [
      'gun',
      'handgun',
      'pistol',
      'revolver',
      'tool',
      'water',
      'weapon'
    ],
    shortcodes: [
      ':pistol:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3810,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🎱',
    hexcode: '1f3b1',
    category: 'Activities',
    subgroup: 'game',
    label: 'pool 8 ball',
    tags: [
      '8',
      'ball',
      'billiard',
      'eight',
      'game',
      'pool ball',
      '8 ball',
      'black ball',
      'cue ball',
      'magic 8 ball',
      'pool',
      'snooker',
      'billiards'
    ],
    shortcodes: [
      ':8-ball:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3811,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🔮',
    hexcode: '1f52e',
    category: 'Activities',
    subgroup: 'game',
    label: 'crystal ball',
    tags: [
      'ball',
      'crystal',
      'fairy tale',
      'fantasy',
      'fortune',
      'tool',
      'mystery'
    ],
    shortcodes: [
      ':crystal-ball:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3812,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🪄',
    hexcode: '1fa84',
    category: 'Activities',
    subgroup: 'game',
    label: 'magic wand',
    tags: [
      'magic',
      'witch',
      'wizard'
    ],
    shortcodes: [
      ':wand:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 13,
    order: 3813,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🎮️',
    hexcode: '1f3ae',
    category: 'Activities',
    subgroup: 'game',
    label: 'video game',
    tags: [
      'controller',
      'game',
      'gamble'
    ],
    shortcodes: [
      ':video-game:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3814,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🕹️',
    hexcode: '1f579',
    category: 'Activities',
    subgroup: 'game',
    label: 'joystick',
    tags: [
      'game',
      'video game'
    ],
    shortcodes: [
      ':joystick:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3816,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🎰',
    hexcode: '1f3b0',
    category: 'Activities',
    subgroup: 'game',
    label: 'slot machine',
    tags: [
      'game',
      'slot'
    ],
    shortcodes: [
      ':slot-machine:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3817,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🎲',
    hexcode: '1f3b2',
    category: 'Activities',
    subgroup: 'game',
    label: 'game die',
    tags: [
      'dice',
      'die',
      'game',
      'board game',
      'isometric'
    ],
    shortcodes: [
      ':die:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3818,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🧩',
    hexcode: '1f9e9',
    category: 'Activities',
    subgroup: 'game',
    label: 'puzzle piece',
    tags: [
      'clue',
      'interlocking',
      'jigsaw',
      'piece',
      'puzzle'
    ],
    shortcodes: [
      ':jigsaw:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 11,
    order: 3819,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🧸',
    hexcode: '1f9f8',
    category: 'Activities',
    subgroup: 'game',
    label: 'teddy bear',
    tags: [
      'plaything',
      'plush',
      'stuffed',
      'toy'
    ],
    shortcodes: [
      ':teddy-bear:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 11,
    order: 3820,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🪅',
    hexcode: '1fa85',
    category: 'Activities',
    subgroup: 'game',
    label: 'piñata',
    tags: [
      'celebration',
      'party'
    ],
    shortcodes: [
      ':piñata:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 13,
    order: 3821,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🪩',
    hexcode: '1faa9',
    category: 'Activities',
    subgroup: 'game',
    label: 'mirror ball',
    tags: [
      'dance',
      'disco',
      'glitter',
      'party'
    ],
    shortcodes: [
      ':mirror-ball:',
      ':disco-ball:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 14,
    order: 3822,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🪆',
    hexcode: '1fa86',
    category: 'Activities',
    subgroup: 'game',
    label: 'nesting dolls',
    tags: [
      'doll',
      'nesting',
      'russia'
    ],
    shortcodes: [
      ':nesting-doll:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 13,
    order: 3823,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '♠️',
    hexcode: '2660',
    category: 'Activities',
    subgroup: 'game',
    label: 'spade suit',
    tags: [
      'card',
      'game'
    ],
    shortcodes: [
      ':spade:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3825,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '♥️',
    hexcode: '2665',
    category: 'Activities',
    subgroup: 'game',
    label: 'heart suit',
    tags: [
      'card',
      'game'
    ],
    shortcodes: [
      ':heart:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3827,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '♦️',
    hexcode: '2666',
    category: 'Activities',
    subgroup: 'game',
    label: 'diamond suit',
    tags: [
      'card',
      'game'
    ],
    shortcodes: [
      ':diamond:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3829,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '♣️',
    hexcode: '2663',
    category: 'Activities',
    subgroup: 'game',
    label: 'club suit',
    tags: [
      'card',
      'game'
    ],
    shortcodes: [
      ':club:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3831,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '♟️',
    hexcode: '265f',
    category: 'Activities',
    subgroup: 'game',
    label: 'chess pawn',
    tags: [
      'chess',
      'dupe',
      'expendable'
    ],
    shortcodes: [
      ':chess-pawn:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 11,
    order: 3833,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🃏',
    hexcode: '1f0cf',
    category: 'Activities',
    subgroup: 'game',
    label: 'joker',
    tags: [
      'card',
      'game',
      'wildcard'
    ],
    shortcodes: [
      ':joker:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3834,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🀄️',
    hexcode: '1f004',
    category: 'Activities',
    subgroup: 'game',
    label: 'mahjong red dragon',
    tags: [
      'game',
      'mahjong',
      'red'
    ],
    shortcodes: [
      ':mahjong-red-dragon:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3835,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🎴',
    hexcode: '1f3b4',
    category: 'Activities',
    subgroup: 'game',
    label: 'flower playing cards',
    tags: [
      'card',
      'flower',
      'game',
      'japanese',
      'playing'
    ],
    shortcodes: [
      ':flower-playing-cards:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3836,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🎭️',
    hexcode: '1f3ad',
    category: 'Activities',
    subgroup: 'arts-crafts',
    label: 'performing arts',
    tags: [
      'art',
      'mask',
      'performing',
      'theater',
      'theatre',
      'culture',
      'entertainment',
      'education'
    ],
    shortcodes: [
      ':performing-arts:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3837,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🖼️',
    hexcode: '1f5bc',
    category: 'Activities',
    subgroup: 'arts-crafts',
    label: 'framed picture',
    tags: [
      'art',
      'frame',
      'museum',
      'painting',
      'picture',
      'culture',
      'artist',
      'entertainment'
    ],
    shortcodes: [
      ':framed-picture:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3839,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🎨',
    hexcode: '1f3a8',
    category: 'Activities',
    subgroup: 'arts-crafts',
    label: 'artist palette',
    tags: [
      'art',
      'museum',
      'painting',
      'palette',
      'culture',
      'artist',
      'leisure',
      'entertainment'
    ],
    shortcodes: [
      ':artist-palette:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3840,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🧵',
    hexcode: '1f9f5',
    category: 'Activities',
    subgroup: 'arts-crafts',
    label: 'thread',
    tags: [
      'needle',
      'sewing',
      'spool',
      'string'
    ],
    shortcodes: [
      ':thread:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 11,
    order: 3841,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🪡',
    hexcode: '1faa1',
    category: 'Activities',
    subgroup: 'arts-crafts',
    label: 'sewing needle',
    tags: [
      'embroidery',
      'needle',
      'sewing',
      'stitches',
      'sutures',
      'tailoring'
    ],
    shortcodes: [
      ':needle:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 13,
    order: 3842,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🧶',
    hexcode: '1f9f6',
    category: 'Activities',
    subgroup: 'arts-crafts',
    label: 'yarn',
    tags: [
      'ball',
      'crochet',
      'knit'
    ],
    shortcodes: [
      ':yarn:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 11,
    order: 3843,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🪢',
    hexcode: '1faa2',
    category: 'Activities',
    subgroup: 'arts-crafts',
    label: 'knot',
    tags: [
      'rope',
      'tangled',
      'tie',
      'twine',
      'twist'
    ],
    shortcodes: [
      ':knot:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 13,
    order: 3844,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '👓️',
    hexcode: '1f453',
    category: 'Objects',
    subgroup: 'clothing',
    label: 'glasses',
    tags: [
      'clothing',
      'eye',
      'eyeglasses',
      'eyewear'
    ],
    shortcodes: [
      ':glasses:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3845,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🕶️',
    hexcode: '1f576',
    category: 'Objects',
    subgroup: 'clothing',
    label: 'sunglasses',
    tags: [
      'dark',
      'eye',
      'eyewear',
      'glasses',
      'sunglasses'
    ],
    shortcodes: [
      ':sunglasses:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3847,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🥽',
    hexcode: '1f97d',
    category: 'Objects',
    subgroup: 'clothing',
    label: 'goggles',
    tags: [
      'eye protection',
      'swimming',
      'welding'
    ],
    shortcodes: [
      ':goggles:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 11,
    order: 3848,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🥼',
    hexcode: '1f97c',
    category: 'Objects',
    subgroup: 'clothing',
    label: 'lab coat',
    tags: [
      'doctor',
      'experiment',
      'scientist'
    ],
    shortcodes: [
      ':lab-coat:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 11,
    order: 3849,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🦺',
    hexcode: '1f9ba',
    category: 'Objects',
    subgroup: 'clothing',
    label: 'safety vest',
    tags: [
      'emergency',
      'safety',
      'vest'
    ],
    shortcodes: [
      ':safety-vest:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12,
    order: 3850,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '👔',
    hexcode: '1f454',
    category: 'Objects',
    subgroup: 'clothing',
    label: 'necktie',
    tags: [
      'clothing',
      'tie',
      'cravatte',
      'smart'
    ],
    shortcodes: [
      ':necktie:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3851,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '👕',
    hexcode: '1f455',
    category: 'Objects',
    subgroup: 'clothing',
    label: 't-shirt',
    tags: [
      'clothing',
      'shirt',
      'tshirt'
    ],
    shortcodes: [
      ':t-shirt:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3852,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '👖',
    hexcode: '1f456',
    category: 'Objects',
    subgroup: 'clothing',
    label: 'jeans',
    tags: [
      'clothing',
      'pants',
      'trousers'
    ],
    shortcodes: [
      ':jeans:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3853,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🧣',
    hexcode: '1f9e3',
    category: 'Objects',
    subgroup: 'clothing',
    label: 'scarf',
    tags: [
      'neck'
    ],
    shortcodes: [
      ':scarf:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 5,
    order: 3854,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🧤',
    hexcode: '1f9e4',
    category: 'Objects',
    subgroup: 'clothing',
    label: 'gloves',
    tags: [
      'hand'
    ],
    shortcodes: [
      ':gloves:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 5,
    order: 3855,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🧥',
    hexcode: '1f9e5',
    category: 'Objects',
    subgroup: 'clothing',
    label: 'coat',
    tags: [
      'jacket'
    ],
    shortcodes: [
      ':coat:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 5,
    order: 3856,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🧦',
    hexcode: '1f9e6',
    category: 'Objects',
    subgroup: 'clothing',
    label: 'socks',
    tags: [
      'stocking'
    ],
    shortcodes: [
      ':socks:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 5,
    order: 3857,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '👗',
    hexcode: '1f457',
    category: 'Objects',
    subgroup: 'clothing',
    label: 'dress',
    tags: [
      'clothing',
      'beautiful',
      'dress',
      'woman'
    ],
    shortcodes: [
      ':dress:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3858,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '👘',
    hexcode: '1f458',
    category: 'Objects',
    subgroup: 'clothing',
    label: 'kimono',
    tags: [
      'clothing',
      'japan'
    ],
    shortcodes: [
      ':kimono:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3859,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🥻',
    hexcode: '1f97b',
    category: 'Objects',
    subgroup: 'clothing',
    label: 'sari',
    tags: [
      'clothing',
      'dress'
    ],
    shortcodes: [
      ':sari:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12,
    order: 3860,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🩱',
    hexcode: '1fa71',
    category: 'Objects',
    subgroup: 'clothing',
    label: 'one-piece swimsuit',
    tags: [
      'bathing suit'
    ],
    shortcodes: [
      ':one-piece-swimsuit:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12,
    order: 3861,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🩲',
    hexcode: '1fa72',
    category: 'Objects',
    subgroup: 'clothing',
    label: 'briefs',
    tags: [
      'bathing suit',
      'one-piece',
      'swimsuit',
      'underwear'
    ],
    shortcodes: [
      ':swim-brief:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12,
    order: 3862,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🩳',
    hexcode: '1fa73',
    category: 'Objects',
    subgroup: 'clothing',
    label: 'shorts',
    tags: [
      'bathing suit',
      'pants',
      'underwear'
    ],
    shortcodes: [
      ':shorts:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12,
    order: 3863,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '👙',
    hexcode: '1f459',
    category: 'Objects',
    subgroup: 'clothing',
    label: 'bikini',
    tags: [
      'clothing',
      'swim',
      'summer'
    ],
    shortcodes: [
      ':bikini:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3864,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '👚',
    hexcode: '1f45a',
    category: 'Objects',
    subgroup: 'clothing',
    label: 'woman’s clothes',
    tags: [
      'clothing',
      'woman'
    ],
    shortcodes: [
      ':woman’s-clothes:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3865,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🪭',
    hexcode: '1faad',
    category: 'Objects',
    subgroup: 'clothing',
    label: 'folding hand fan',
    tags: [
      'cooling',
      'dance',
      'fan',
      'flutter',
      'hot',
      'shy'
    ],
    shortcodes: [
      ':fan:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 15,
    order: 3866,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '👛',
    hexcode: '1f45b',
    category: 'Objects',
    subgroup: 'clothing',
    label: 'purse',
    tags: [
      'clothing',
      'coin',
      'money'
    ],
    shortcodes: [
      ':purse:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3867,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '👜',
    hexcode: '1f45c',
    category: 'Objects',
    subgroup: 'clothing',
    label: 'handbag',
    tags: [
      'bag',
      'clothing',
      'purse'
    ],
    shortcodes: [
      ':handbag:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3868,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '👝',
    hexcode: '1f45d',
    category: 'Objects',
    subgroup: 'clothing',
    label: 'clutch bag',
    tags: [
      'bag',
      'clothing',
      'pouch'
    ],
    shortcodes: [
      ':clutch-bag:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3869,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🛍️',
    hexcode: '1f6cd',
    category: 'Objects',
    subgroup: 'clothing',
    label: 'shopping bags',
    tags: [
      'bag',
      'hotel',
      'shopping',
      'buy'
    ],
    shortcodes: [
      ':shopping-bags:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3871,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🎒',
    hexcode: '1f392',
    category: 'Objects',
    subgroup: 'clothing',
    label: 'backpack',
    tags: [
      'bag',
      'rucksack',
      'satchel',
      'school',
      'young'
    ],
    shortcodes: [
      ':school-backpack:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3872,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🩴',
    hexcode: '1fa74',
    category: 'Objects',
    subgroup: 'clothing',
    label: 'thong sandal',
    tags: [
      'beach sandals',
      'sandals',
      'thong sandals',
      'thongs',
      'zōri'
    ],
    shortcodes: [
      ':flip-flop:',
      ':thong-sandal:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 13,
    order: 3873,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '👞',
    hexcode: '1f45e',
    category: 'Objects',
    subgroup: 'clothing',
    label: 'man’s shoe',
    tags: [
      'clothing',
      'man',
      'shoe'
    ],
    shortcodes: [
      ':man’s-shoe:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3874,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '👟',
    hexcode: '1f45f',
    category: 'Objects',
    subgroup: 'clothing',
    label: 'running shoe',
    tags: [
      'athletic',
      'clothing',
      'shoe',
      'sneaker'
    ],
    shortcodes: [
      ':running-shoe:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3875,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🥾',
    hexcode: '1f97e',
    category: 'Objects',
    subgroup: 'clothing',
    label: 'hiking boot',
    tags: [
      'backpacking',
      'boot',
      'camping',
      'hiking'
    ],
    shortcodes: [
      ':hiking-boot:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 11,
    order: 3876,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🥿',
    hexcode: '1f97f',
    category: 'Objects',
    subgroup: 'clothing',
    label: 'flat shoe',
    tags: [
      'ballet flat',
      'slip-on',
      'slipper'
    ],
    shortcodes: [
      ':flat-shoe:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 11,
    order: 3877,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '👠',
    hexcode: '1f460',
    category: 'Objects',
    subgroup: 'clothing',
    label: 'high-heeled shoe',
    tags: [
      'clothing',
      'heel',
      'shoe',
      'woman'
    ],
    shortcodes: [
      ':high-heeled-shoe:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3878,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '👡',
    hexcode: '1f461',
    category: 'Objects',
    subgroup: 'clothing',
    label: 'woman’s sandal',
    tags: [
      'clothing',
      'sandal',
      'shoe',
      'woman'
    ],
    shortcodes: [
      ':sandal:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3879,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🩰',
    hexcode: '1fa70',
    category: 'Objects',
    subgroup: 'clothing',
    label: 'ballet shoes',
    tags: [
      'ballet',
      'dance'
    ],
    shortcodes: [
      ':ballet-shoes:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12,
    order: 3880,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '👢',
    hexcode: '1f462',
    category: 'Objects',
    subgroup: 'clothing',
    label: 'woman’s boot',
    tags: [
      'boot',
      'clothing',
      'shoe',
      'woman'
    ],
    shortcodes: [
      ':boot:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3881,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🪮',
    hexcode: '1faae',
    category: 'Objects',
    subgroup: 'clothing',
    label: 'hair pick',
    tags: [
      'afro',
      'comb',
      'hair',
      'pick'
    ],
    shortcodes: [
      ':hair-pick:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 15,
    order: 3882,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '👑',
    hexcode: '1f451',
    category: 'Objects',
    subgroup: 'clothing',
    label: 'crown',
    tags: [
      'clothing',
      'king',
      'queen',
      'crone',
      'gold'
    ],
    shortcodes: [
      ':crown:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3883,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '👒',
    hexcode: '1f452',
    category: 'Objects',
    subgroup: 'clothing',
    label: 'woman’s hat',
    tags: [
      'clothing',
      'hat',
      'woman',
      'beautiful'
    ],
    shortcodes: [
      ':woman’s-hat:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3884,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🎩',
    hexcode: '1f3a9',
    category: 'Objects',
    subgroup: 'clothing',
    label: 'top hat',
    tags: [
      'clothing',
      'hat',
      'top',
      'tophat',
      'magic'
    ],
    shortcodes: [
      ':game-die:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3885,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🎓️',
    hexcode: '1f393',
    category: 'Objects',
    subgroup: 'clothing',
    label: 'graduation cap',
    tags: [
      'cap',
      'celebration',
      'clothing',
      'graduation',
      'hat'
    ],
    shortcodes: [
      ':graduation-cap:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3886,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🧢',
    hexcode: '1f9e2',
    category: 'Objects',
    subgroup: 'clothing',
    label: 'billed cap',
    tags: [
      'baseball cap'
    ],
    shortcodes: [
      ':billed-cap:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 5,
    order: 3887,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🪖',
    hexcode: '1fa96',
    category: 'Objects',
    subgroup: 'clothing',
    label: 'military helmet',
    tags: [
      'army',
      'helmet',
      'military',
      'soldier',
      'warrior'
    ],
    shortcodes: [
      ':military-helmet:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 13,
    order: 3888,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '⛑️',
    hexcode: '26d1',
    category: 'Objects',
    subgroup: 'clothing',
    label: 'rescue worker’s helmet',
    tags: [
      'aid',
      'cross',
      'face',
      'hat',
      'helmet'
    ],
    shortcodes: [
      ':rescue-worker’s-helmet:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3890,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '📿',
    hexcode: '1f4ff',
    category: 'Objects',
    subgroup: 'clothing',
    label: 'prayer beads',
    tags: [
      'beads',
      'clothing',
      'necklace',
      'prayer',
      'religion',
      'expensive',
      'jewelry'
    ],
    shortcodes: [
      ':prayer-beads:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3891,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '💄',
    hexcode: '1f484',
    category: 'Objects',
    subgroup: 'clothing',
    label: 'lipstick',
    tags: [
      'cosmetics',
      'makeup'
    ],
    shortcodes: [
      ':lipstick:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3892,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '💍',
    hexcode: '1f48d',
    category: 'Objects',
    subgroup: 'clothing',
    label: 'ring',
    tags: [
      'diamond',
      'expensive',
      'jewelry'
    ],
    shortcodes: [
      ':ring:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3893,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '💎',
    hexcode: '1f48e',
    category: 'Objects',
    subgroup: 'clothing',
    label: 'gem stone',
    tags: [
      'diamond',
      'gem',
      'jewel',
      'expensive'
    ],
    shortcodes: [
      ':gem-stone:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3894,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🔇',
    hexcode: '1f507',
    category: 'Objects',
    subgroup: 'sound',
    label: 'muted speaker',
    tags: [
      'mute',
      'quiet',
      'silent',
      'speaker'
    ],
    shortcodes: [
      ':mute:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3895,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🔈️',
    hexcode: '1f508',
    category: 'Objects',
    subgroup: 'sound',
    label: 'speaker low volume',
    tags: [
      'soft',
      'sound'
    ],
    shortcodes: [
      ':low-volume:',
      ':speaker-low-volume:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3896,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🔉',
    hexcode: '1f509',
    category: 'Objects',
    subgroup: 'sound',
    label: 'speaker medium volume',
    tags: [
      'medium'
    ],
    shortcodes: [
      ':medium-volume:',
      ':speaker-medium-volume:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3897,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🔊',
    hexcode: '1f50a',
    category: 'Objects',
    subgroup: 'sound',
    label: 'speaker high volume',
    tags: [
      'loud',
      'sound'
    ],
    shortcodes: [
      ':high-volume:',
      ':speaker-high-volume:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3898,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '📢',
    hexcode: '1f4e2',
    category: 'Objects',
    subgroup: 'sound',
    label: 'loudspeaker',
    tags: [
      'loud',
      'public address',
      'sound'
    ],
    shortcodes: [
      ':loudspeaker:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3899,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '📣',
    hexcode: '1f4e3',
    category: 'Objects',
    subgroup: 'sound',
    label: 'megaphone',
    tags: [
      'cheering'
    ],
    shortcodes: [
      ':megaphone:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3900,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '📯',
    hexcode: '1f4ef',
    category: 'Objects',
    subgroup: 'sound',
    label: 'postal horn',
    tags: [
      'horn',
      'post',
      'postal'
    ],
    shortcodes: [
      ':postal-horn:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3901,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🔔',
    hexcode: '1f514',
    category: 'Objects',
    subgroup: 'sound',
    label: 'bell',
    tags: [
      'bell',
      'sound'
    ],
    shortcodes: [
      ':bell:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3902,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🔕',
    hexcode: '1f515',
    category: 'Objects',
    subgroup: 'sound',
    label: 'bell with slash',
    tags: [
      'bell',
      'forbidden',
      'mute',
      'quiet',
      'silent'
    ],
    shortcodes: [
      ':no-sound:',
      ':no-bell:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3903,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🎼',
    hexcode: '1f3bc',
    category: 'Objects',
    subgroup: 'music',
    label: 'musical score',
    tags: [
      'music',
      'score',
      'violin key',
      'rhythm'
    ],
    shortcodes: [
      ':musical-score:',
      ':treble-clef:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3904,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🎵',
    hexcode: '1f3b5',
    category: 'Objects',
    subgroup: 'music',
    label: 'musical note',
    tags: [
      'music',
      'note',
      'song',
      'melody',
      'sounds',
      'tone'
    ],
    shortcodes: [
      ':musical-note:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3905,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🎶',
    hexcode: '1f3b6',
    category: 'Objects',
    subgroup: 'music',
    label: 'musical notes',
    tags: [
      'music',
      'note',
      'notes',
      'melody',
      'harmony',
      'sounds',
      'rhythm'
    ],
    shortcodes: [
      ':musical-notes:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3906,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🎙️',
    hexcode: '1f399',
    category: 'Objects',
    subgroup: 'music',
    label: 'studio microphone',
    tags: [
      'mic',
      'microphone',
      'music',
      'studio',
      'stereo',
      'recording'
    ],
    shortcodes: [
      ':studio-microphone:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3908,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🎚️',
    hexcode: '1f39a',
    category: 'Objects',
    subgroup: 'music',
    label: 'level slider',
    tags: [
      'level',
      'music',
      'slider',
      'studio',
      'music slider'
    ],
    shortcodes: [
      ':level-slider:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3910,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🎛️',
    hexcode: '1f39b',
    category: 'Objects',
    subgroup: 'music',
    label: 'control knobs',
    tags: [
      'control',
      'knobs',
      'music',
      'mix',
      'recording',
      'tool'
    ],
    shortcodes: [
      ':control-knobs:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3912,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🎤',
    hexcode: '1f3a4',
    category: 'Objects',
    subgroup: 'music',
    label: 'microphone',
    tags: [
      'karaoke',
      'mic',
      'sound',
      'loud',
      'stage',
      'speech',
      'singing',
      'microphone',
      'tone'
    ],
    shortcodes: [
      ':microphone:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3913,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🎧️',
    hexcode: '1f3a7',
    category: 'Objects',
    subgroup: 'music',
    label: 'headphone',
    tags: [
      'earbud',
      'music',
      'headphones'
    ],
    shortcodes: [
      ':headphone:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3914,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '📻️',
    hexcode: '1f4fb',
    category: 'Objects',
    subgroup: 'music',
    label: 'radio',
    tags: [
      'video',
      'radio',
      'stereo radio',
      'analog radio'
    ],
    shortcodes: [
      ':radio:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3915,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🎷',
    hexcode: '1f3b7',
    category: 'Objects',
    subgroup: 'musical-instrument',
    label: 'saxophone',
    tags: [
      'instrument',
      'music',
      'sax',
      'saxophone',
      'jazz'
    ],
    shortcodes: [
      ':saxophone:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3916,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🪗',
    hexcode: '1fa97',
    category: 'Objects',
    subgroup: 'musical-instrument',
    label: 'accordion',
    tags: [
      'concertina',
      'squeeze box'
    ],
    shortcodes: [
      ':accordion:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 13,
    order: 3917,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🎸',
    hexcode: '1f3b8',
    category: 'Objects',
    subgroup: 'musical-instrument',
    label: 'guitar',
    tags: [
      'instrument',
      'music',
      'guitar',
      'e-guitar',
      'instrumental',
      'acoustic',
      'chords'
    ],
    shortcodes: [
      ':guitar:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3918,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🎹',
    hexcode: '1f3b9',
    category: 'Objects',
    subgroup: 'musical-instrument',
    label: 'musical keyboard',
    tags: [
      'instrument',
      'keyboard',
      'music',
      'piano',
      'piano keys',
      'chords'
    ],
    shortcodes: [
      ':piano:',
      ':musical-keyboard:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3919,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🎺',
    hexcode: '1f3ba',
    category: 'Objects',
    subgroup: 'musical-instrument',
    label: 'trumpet',
    tags: [
      'instrument',
      'music',
      'trumpet',
      'horns',
      'woodwind instrument'
    ],
    shortcodes: [
      ':trumpet:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3920,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🎻',
    hexcode: '1f3bb',
    category: 'Objects',
    subgroup: 'musical-instrument',
    label: 'violin',
    tags: [
      'instrument',
      'music',
      'string',
      'violin',
      'fiddle',
      'bow'
    ],
    shortcodes: [
      ':violin:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3921,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🪕',
    hexcode: '1fa95',
    category: 'Objects',
    subgroup: 'musical-instrument',
    label: 'banjo',
    tags: [
      'music',
      'stringed'
    ],
    shortcodes: [
      ':banjo:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12,
    order: 3922,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🥁',
    hexcode: '1f941',
    category: 'Objects',
    subgroup: 'musical-instrument',
    label: 'drum',
    tags: [
      'drumsticks',
      'music',
      'drum',
      'beat'
    ],
    shortcodes: [
      ':drum:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 3923,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🪘',
    hexcode: '1fa98',
    category: 'Objects',
    subgroup: 'musical-instrument',
    label: 'long drum',
    tags: [
      'beat',
      'conga',
      'drum',
      'rhythm'
    ],
    shortcodes: [
      ':long-drum:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 13,
    order: 3924,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🪇',
    hexcode: '1fa87',
    category: 'Objects',
    subgroup: 'musical-instrument',
    label: 'maracas',
    tags: [
      'instrument',
      'music',
      'percussion',
      'rattle',
      'shake'
    ],
    shortcodes: [
      ':maracas:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 15,
    order: 3925,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🪈',
    hexcode: '1fa88',
    category: 'Objects',
    subgroup: 'musical-instrument',
    label: 'flute',
    tags: [
      'fife',
      'music',
      'pipe',
      'recorder',
      'woodwind'
    ],
    shortcodes: [
      ':flute:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 15,
    order: 3926,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '📱',
    hexcode: '1f4f1',
    category: 'Objects',
    subgroup: 'phone',
    label: 'mobile phone',
    tags: [
      'cell',
      'mobile',
      'phone',
      'telephone',
      'smartphone',
      'message',
      'voice',
      'communication'
    ],
    shortcodes: [
      ':mobile-phone:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3927,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '📲',
    hexcode: '1f4f2',
    category: 'Objects',
    subgroup: 'phone',
    label: 'mobile phone with arrow',
    tags: [
      'arrow',
      'cell',
      'mobile',
      'phone',
      'receive',
      'voice',
      'smartphone',
      'message'
    ],
    shortcodes: [
      ':phone-with-arrow:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3928,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '☎️',
    hexcode: '260e',
    category: 'Objects',
    subgroup: 'phone',
    label: 'telephone',
    tags: [
      'phone',
      'call',
      'voice',
      'communication'
    ],
    shortcodes: [
      ':telephone:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3930,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '📞',
    hexcode: '1f4de',
    category: 'Objects',
    subgroup: 'phone',
    label: 'telephone receiver',
    tags: [
      'phone',
      'receiver',
      'telephone',
      'call',
      'voice',
      'communication'
    ],
    shortcodes: [
      ':telephone-receiver:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3931,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '📟️',
    hexcode: '1f4df',
    category: 'Objects',
    subgroup: 'phone',
    label: 'pager',
    tags: [
      'pager'
    ],
    shortcodes: [
      ':pager:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3932,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '📠',
    hexcode: '1f4e0',
    category: 'Objects',
    subgroup: 'phone',
    label: 'fax machine',
    tags: [
      'fax',
      'office',
      'paper',
      'communication'
    ],
    shortcodes: [
      ':fax-machine:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3933,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🔋',
    hexcode: '1f50b',
    category: 'Objects',
    subgroup: 'computer',
    label: 'battery',
    tags: [
      'battery',
      'electricity',
      'energy',
      'electric'
    ],
    shortcodes: [
      ':battery-full:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3934,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🪫',
    hexcode: '1faab',
    category: 'Objects',
    subgroup: 'computer',
    label: 'low battery',
    tags: [
      'electronic',
      'low energy'
    ],
    shortcodes: [
      ':battery-low:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 14,
    order: 3935,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🔌',
    hexcode: '1f50c',
    category: 'Objects',
    subgroup: 'computer',
    label: 'electric plug',
    tags: [
      'electric',
      'electricity',
      'plug'
    ],
    shortcodes: [
      ':electric-plug:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3936,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '💻️',
    hexcode: '1f4bb',
    category: 'Objects',
    subgroup: 'computer',
    label: 'laptop',
    tags: [
      'computer',
      'pc',
      'personal',
      'old',
      'retro'
    ],
    shortcodes: [
      ':laptop-computer:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3937,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🖥️',
    hexcode: '1f5a5',
    category: 'Objects',
    subgroup: 'computer',
    label: 'desktop computer',
    tags: [
      'computer',
      'desktop',
      'electric',
      'screen'
    ],
    shortcodes: [
      ':desktop-computer:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3939,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🖨️',
    hexcode: '1f5a8',
    category: 'Objects',
    subgroup: 'computer',
    label: 'printer',
    tags: [
      'computer',
      'color',
      'electric'
    ],
    shortcodes: [
      ':printer:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3941,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '⌨️',
    hexcode: '2328',
    category: 'Objects',
    subgroup: 'computer',
    label: 'keyboard',
    tags: [
      'computer',
      'key',
      'write',
      'electric'
    ],
    shortcodes: [
      ':keyboard:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3943,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🖱️',
    hexcode: '1f5b1',
    category: 'Objects',
    subgroup: 'computer',
    label: 'computer mouse',
    tags: [
      'computer',
      'electric',
      'mouse'
    ],
    shortcodes: [
      ':computer-mouse:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3945,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🖲️',
    hexcode: '1f5b2',
    category: 'Objects',
    subgroup: 'computer',
    label: 'trackball',
    tags: [
      'computer'
    ],
    shortcodes: [
      ':trackball:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3947,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '💽',
    hexcode: '1f4bd',
    category: 'Objects',
    subgroup: 'computer',
    label: 'computer disk',
    tags: [
      'computer',
      'disk',
      'minidisk',
      'optical',
      'old',
      'retro'
    ],
    shortcodes: [
      ':computer-disk:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3948,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '💾',
    hexcode: '1f4be',
    category: 'Objects',
    subgroup: 'computer',
    label: 'floppy disk',
    tags: [
      'computer',
      'disk',
      'floppy',
      'old',
      'retro'
    ],
    shortcodes: [
      ':floppy-disk:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3949,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '💿️',
    hexcode: '1f4bf',
    category: 'Objects',
    subgroup: 'computer',
    label: 'optical disk',
    tags: [
      'cd',
      'computer',
      'disk',
      'optical',
      'analog'
    ],
    shortcodes: [
      ':optical-disk:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3950,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '📀',
    hexcode: '1f4c0',
    category: 'Objects',
    subgroup: 'computer',
    label: 'dvd',
    tags: [
      'blu-ray',
      'computer',
      'disk',
      'optical',
      'film'
    ],
    shortcodes: [
      ':dvd:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3951,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🧮',
    hexcode: '1f9ee',
    category: 'Objects',
    subgroup: 'computer',
    label: 'abacus',
    tags: [
      'calculation'
    ],
    shortcodes: [
      ':abacus:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 11,
    order: 3952,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🎥',
    hexcode: '1f3a5',
    category: 'Objects',
    subgroup: 'light-video',
    label: 'movie camera',
    tags: [
      'camera',
      'cinema',
      'movie',
      'film',
      'record'
    ],
    shortcodes: [
      ':movie-camera:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3953,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🎞️',
    hexcode: '1f39e',
    category: 'Objects',
    subgroup: 'light-video',
    label: 'film frames',
    tags: [
      'cinema',
      'film',
      'frames',
      'movie',
      'clip'
    ],
    shortcodes: [
      ':film:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3955,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '📽️',
    hexcode: '1f4fd',
    category: 'Objects',
    subgroup: 'light-video',
    label: 'film projector',
    tags: [
      'cinema',
      'film',
      'movie',
      'projector',
      'video',
      'play',
      'film clip'
    ],
    shortcodes: [
      ':film-projector:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3957,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🎬️',
    hexcode: '1f3ac',
    category: 'Objects',
    subgroup: 'light-video',
    label: 'clapper board',
    tags: [
      'clapper',
      'movie',
      'cut',
      'new recording'
    ],
    shortcodes: [
      ':clapper:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3958,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '📺️',
    hexcode: '1f4fa',
    category: 'Objects',
    subgroup: 'light-video',
    label: 'television',
    tags: [
      'tv',
      'video',
      'flat screen',
      'modern'
    ],
    shortcodes: [
      ':television:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3959,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '📷️',
    hexcode: '1f4f7',
    category: 'Objects',
    subgroup: 'light-video',
    label: 'camera',
    tags: [
      'video',
      'camera',
      'digital'
    ],
    shortcodes: [
      ':camera:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3960,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '📸',
    hexcode: '1f4f8',
    category: 'Objects',
    subgroup: 'light-video',
    label: 'camera with flash',
    tags: [
      'camera',
      'flash',
      'video',
      'bright'
    ],
    shortcodes: [
      ':camera-flash:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3961,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '📹️',
    hexcode: '1f4f9',
    category: 'Objects',
    subgroup: 'light-video',
    label: 'video camera',
    tags: [
      'camera',
      'video',
      'record',
      'recording',
      'film',
      'movie'
    ],
    shortcodes: [
      ':video-camera:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3962,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '📼',
    hexcode: '1f4fc',
    category: 'Objects',
    subgroup: 'light-video',
    label: 'videocassette',
    tags: [
      'tape',
      'vhs',
      'video',
      'movie',
      'film',
      'cassette',
      'record',
      'recording'
    ],
    shortcodes: [
      ':videocassette:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3963,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🔍️',
    hexcode: '1f50d',
    category: 'Objects',
    subgroup: 'light-video',
    label: 'magnifying glass tilted left',
    tags: [
      'glass',
      'magnifying',
      'search',
      'tool',
      'detail',
      'big',
      'zoom',
      'detective'
    ],
    shortcodes: [
      ':magnifying-glass-tilted-left:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3964,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🔎',
    hexcode: '1f50e',
    category: 'Objects',
    subgroup: 'light-video',
    label: 'magnifying glass tilted right',
    tags: [
      'glass',
      'magnifying',
      'search',
      'tool',
      'detail',
      'big',
      'zoom',
      'detective'
    ],
    shortcodes: [
      ':magnifying-glass-tilted-right:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3965,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🕯️',
    hexcode: '1f56f',
    category: 'Objects',
    subgroup: 'light-video',
    label: 'candle',
    tags: [
      'light',
      'fire',
      'bright',
      'shine'
    ],
    shortcodes: [
      ':candle:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3967,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '💡',
    hexcode: '1f4a1',
    category: 'Objects',
    subgroup: 'light-video',
    label: 'light bulb',
    tags: [
      'bulb',
      'comic',
      'electric',
      'idea',
      'light',
      'shine',
      'power',
      'on'
    ],
    shortcodes: [
      ':light-bulb:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3968,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🔦',
    hexcode: '1f526',
    category: 'Objects',
    subgroup: 'light-video',
    label: 'flashlight',
    tags: [
      'electric',
      'light',
      'tool',
      'torch',
      'bright',
      'shine',
      'flashlight',
      'gadget'
    ],
    shortcodes: [
      ':flashlight:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3969,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🏮',
    hexcode: '1f3ee',
    category: 'Objects',
    subgroup: 'light-video',
    label: 'red paper lantern',
    tags: [
      'bar',
      'lantern',
      'light',
      'red'
    ],
    shortcodes: [
      ':red-paper-lantern:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3970,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🪔',
    hexcode: '1fa94',
    category: 'Objects',
    subgroup: 'light-video',
    label: 'diya lamp',
    tags: [
      'diya',
      'lamp',
      'oil'
    ],
    shortcodes: [
      ':diya-lamp:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12,
    order: 3971,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '📔',
    hexcode: '1f4d4',
    category: 'Objects',
    subgroup: 'book-paper',
    label: 'notebook with decorative cover',
    tags: [
      'book',
      'cover',
      'decorated',
      'notebook'
    ],
    shortcodes: [
      ':notebook-with-decorative-cover:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3972,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '📕',
    hexcode: '1f4d5',
    category: 'Objects',
    subgroup: 'book-paper',
    label: 'closed book',
    tags: [
      'book',
      'closed',
      'read',
      'write'
    ],
    shortcodes: [
      ':closed-book:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3973,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '📖',
    hexcode: '1f4d6',
    category: 'Objects',
    subgroup: 'book-paper',
    label: 'open book',
    tags: [
      'book',
      'open',
      'read',
      'write'
    ],
    shortcodes: [
      ':open-book:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3974,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '📗',
    hexcode: '1f4d7',
    category: 'Objects',
    subgroup: 'book-paper',
    label: 'green book',
    tags: [
      'book',
      'green'
    ],
    shortcodes: [
      ':green-book:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3975,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '📘',
    hexcode: '1f4d8',
    category: 'Objects',
    subgroup: 'book-paper',
    label: 'blue book',
    tags: [
      'blue',
      'book'
    ],
    shortcodes: [
      ':blue-book:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3976,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '📙',
    hexcode: '1f4d9',
    category: 'Objects',
    subgroup: 'book-paper',
    label: 'orange book',
    tags: [
      'book',
      'orange'
    ],
    shortcodes: [
      ':orange-book:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3977,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '📚️',
    hexcode: '1f4da',
    category: 'Objects',
    subgroup: 'book-paper',
    label: 'books',
    tags: [
      'book',
      'read',
      'write',
      'isometric'
    ],
    shortcodes: [
      ':books:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3978,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '📓',
    hexcode: '1f4d3',
    category: 'Objects',
    subgroup: 'book-paper',
    label: 'notebook',
    tags: [
      'notebook',
      'book',
      'read',
      'write'
    ],
    shortcodes: [
      ':notebook:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3979,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '📒',
    hexcode: '1f4d2',
    category: 'Objects',
    subgroup: 'book-paper',
    label: 'ledger',
    tags: [
      'notebook',
      'book',
      'read',
      'write'
    ],
    shortcodes: [
      ':ledger:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3980,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '📃',
    hexcode: '1f4c3',
    category: 'Objects',
    subgroup: 'book-paper',
    label: 'page with curl',
    tags: [
      'curl',
      'document',
      'page',
      'rolled',
      'text'
    ],
    shortcodes: [
      ':page-with-curl:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3981,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '📜',
    hexcode: '1f4dc',
    category: 'Objects',
    subgroup: 'book-paper',
    label: 'scroll',
    tags: [
      'paper',
      'old',
      'papyrus',
      'text'
    ],
    shortcodes: [
      ':scroll:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3982,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '📄',
    hexcode: '1f4c4',
    category: 'Objects',
    subgroup: 'book-paper',
    label: 'page facing up',
    tags: [
      'document',
      'page',
      'write',
      'text',
      'paper',
      'notes'
    ],
    shortcodes: [
      ':page-facing-up:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3983,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '📰',
    hexcode: '1f4f0',
    category: 'Objects',
    subgroup: 'book-paper',
    label: 'newspaper',
    tags: [
      'news',
      'paper',
      'read',
      'text'
    ],
    shortcodes: [
      ':newspaper:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3984,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🗞️',
    hexcode: '1f5de',
    category: 'Objects',
    subgroup: 'book-paper',
    label: 'rolled-up newspaper',
    tags: [
      'news',
      'newspaper',
      'paper',
      'rolled'
    ],
    shortcodes: [
      ':rolled-up-newspaper:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3986,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '📑',
    hexcode: '1f4d1',
    category: 'Objects',
    subgroup: 'book-paper',
    label: 'bookmark tabs',
    tags: [
      'bookmark',
      'mark',
      'marker',
      'tabs'
    ],
    shortcodes: [
      ':bookmark-tabs:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3987,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🔖',
    hexcode: '1f516',
    category: 'Objects',
    subgroup: 'book-paper',
    label: 'bookmark',
    tags: [
      'mark',
      'remember'
    ],
    shortcodes: [
      ':bookmark:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3988,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🏷️',
    hexcode: '1f3f7',
    category: 'Objects',
    subgroup: 'book-paper',
    label: 'label',
    tags: [
      'label',
      'stick'
    ],
    shortcodes: [
      ':label:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 3990,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '💰️',
    hexcode: '1f4b0',
    category: 'Objects',
    subgroup: 'money',
    label: 'money bag',
    tags: [
      'bag',
      'dollar',
      'money',
      'moneybag'
    ],
    shortcodes: [
      ':money-bag:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3991,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🪙',
    hexcode: '1fa99',
    category: 'Objects',
    subgroup: 'money',
    label: 'coin',
    tags: [
      'gold',
      'metal',
      'money',
      'silver',
      'treasure'
    ],
    shortcodes: [
      ':coin:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 13,
    order: 3992,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '💴',
    hexcode: '1f4b4',
    category: 'Objects',
    subgroup: 'money',
    label: 'yen banknote',
    tags: [
      'banknote',
      'bill',
      'currency',
      'money',
      'note',
      'yen'
    ],
    shortcodes: [
      ':yen:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3993,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '💵',
    hexcode: '1f4b5',
    category: 'Objects',
    subgroup: 'money',
    label: 'dollar banknote',
    tags: [
      'banknote',
      'bill',
      'currency',
      'dollar',
      'money',
      'note'
    ],
    shortcodes: [
      ':dollar:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3994,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '💶',
    hexcode: '1f4b6',
    category: 'Objects',
    subgroup: 'money',
    label: 'euro banknote',
    tags: [
      'banknote',
      'bill',
      'currency',
      'euro',
      'money',
      'note'
    ],
    shortcodes: [
      ':euro:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3995,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '💷',
    hexcode: '1f4b7',
    category: 'Objects',
    subgroup: 'money',
    label: 'pound banknote',
    tags: [
      'banknote',
      'bill',
      'currency',
      'money',
      'note',
      'pound'
    ],
    shortcodes: [
      ':pound:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 3996,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '💸',
    hexcode: '1f4b8',
    category: 'Objects',
    subgroup: 'money',
    label: 'money with wings',
    tags: [
      'banknote',
      'bill',
      'fly',
      'money',
      'wings'
    ],
    shortcodes: [
      ':money-with-wings:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3997,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '💳️',
    hexcode: '1f4b3',
    category: 'Objects',
    subgroup: 'money',
    label: 'credit card',
    tags: [
      'card',
      'credit',
      'money'
    ],
    shortcodes: [
      ':credit-card:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 3998,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🧾',
    hexcode: '1f9fe',
    category: 'Objects',
    subgroup: 'money',
    label: 'receipt',
    tags: [
      'accounting',
      'bookkeeping',
      'evidence',
      'proof'
    ],
    shortcodes: [
      ':receipt:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 11,
    order: 3999,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '💹',
    hexcode: '1f4b9',
    category: 'Objects',
    subgroup: 'money',
    label: 'chart increasing with yen',
    tags: [
      'chart',
      'graph',
      'growth',
      'money',
      'yen'
    ],
    shortcodes: [
      ':chart-increasing-with-yen:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4000,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '✉️',
    hexcode: '2709',
    category: 'Objects',
    subgroup: 'mail',
    label: 'envelope',
    tags: [
      'email',
      'letter',
      'post',
      'message'
    ],
    shortcodes: [
      ':envelope:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4002,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '📧',
    hexcode: '1f4e7',
    category: 'Objects',
    subgroup: 'mail',
    label: 'e-mail',
    tags: [
      'email',
      'letter',
      'mail',
      'message',
      'electronic'
    ],
    shortcodes: [
      ':e-mail:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4003,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '📨',
    hexcode: '1f4e8',
    category: 'Objects',
    subgroup: 'mail',
    label: 'incoming envelope',
    tags: [
      'e-mail',
      'email',
      'envelope',
      'incoming',
      'letter',
      'receive'
    ],
    shortcodes: [
      ':incoming-envelope:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4004,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '📩',
    hexcode: '1f4e9',
    category: 'Objects',
    subgroup: 'mail',
    label: 'envelope with arrow',
    tags: [
      'arrow',
      'e-mail',
      'email',
      'envelope',
      'outgoing',
      'post'
    ],
    shortcodes: [
      ':envelope-with-arrow:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4005,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '📤️',
    hexcode: '1f4e4',
    category: 'Objects',
    subgroup: 'mail',
    label: 'outbox tray',
    tags: [
      'box',
      'letter',
      'mail',
      'outbox',
      'sent',
      'tray',
      'post'
    ],
    shortcodes: [
      ':outbox-tray:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4006,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '📥️',
    hexcode: '1f4e5',
    category: 'Objects',
    subgroup: 'mail',
    label: 'inbox tray',
    tags: [
      'box',
      'inbox',
      'letter',
      'mail',
      'receive',
      'tray',
      'post'
    ],
    shortcodes: [
      ':inbox-tray:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4007,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '📦️',
    hexcode: '1f4e6',
    category: 'Objects',
    subgroup: 'mail',
    label: 'package',
    tags: [
      'box',
      'parcel',
      'shipping',
      'post',
      'mail'
    ],
    shortcodes: [
      ':package:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4008,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '📫️',
    hexcode: '1f4eb',
    category: 'Objects',
    subgroup: 'mail',
    label: 'closed mailbox with raised flag',
    tags: [
      'closed',
      'mail',
      'mailbox',
      'postbox',
      'post'
    ],
    shortcodes: [
      ':closed-mailbox-with-raised:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4009,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '📪️',
    hexcode: '1f4ea',
    category: 'Objects',
    subgroup: 'mail',
    label: 'closed mailbox with lowered flag',
    tags: [
      'closed',
      'lowered',
      'mail',
      'mailbox',
      'postbox',
      'post'
    ],
    shortcodes: [
      ':closed-mailbox-with-lowered:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4010,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '📬️',
    hexcode: '1f4ec',
    category: 'Objects',
    subgroup: 'mail',
    label: 'open mailbox with raised flag',
    tags: [
      'mail',
      'mailbox',
      'open',
      'postbox'
    ],
    shortcodes: [
      ':open-mailbox-with-raised:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 4011,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '📭️',
    hexcode: '1f4ed',
    category: 'Objects',
    subgroup: 'mail',
    label: 'open mailbox with lowered flag',
    tags: [
      'lowered',
      'mail',
      'mailbox',
      'open',
      'postbox'
    ],
    shortcodes: [
      ':open-mailbox-with-lowered:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 4012,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '📮',
    hexcode: '1f4ee',
    category: 'Objects',
    subgroup: 'mail',
    label: 'postbox',
    tags: [
      'mail',
      'mailbox',
      'post'
    ],
    shortcodes: [
      ':postbox:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4013,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🗳️',
    hexcode: '1f5f3',
    category: 'Objects',
    subgroup: 'mail',
    label: 'ballot box with ballot',
    tags: [
      'ballot',
      'box'
    ],
    shortcodes: [
      ':ballot-box:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 4015,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '✏️',
    hexcode: '270f',
    category: 'Objects',
    subgroup: 'writing',
    label: 'pencil',
    tags: [
      'pencil',
      'notes'
    ],
    shortcodes: [
      ':pencil:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4017,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '✒️',
    hexcode: '2712',
    category: 'Objects',
    subgroup: 'writing',
    label: 'black nib',
    tags: [
      'nib',
      'pen'
    ],
    shortcodes: [
      ':black-nib:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4019,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🖋️',
    hexcode: '1f58b',
    category: 'Objects',
    subgroup: 'writing',
    label: 'fountain pen',
    tags: [
      'fountain',
      'pen'
    ],
    shortcodes: [
      ':fountain-pen:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 4021,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🖊️',
    hexcode: '1f58a',
    category: 'Objects',
    subgroup: 'writing',
    label: 'pen',
    tags: [
      'ballpoint'
    ],
    shortcodes: [
      ':pen:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 4023,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🖌️',
    hexcode: '1f58c',
    category: 'Objects',
    subgroup: 'writing',
    label: 'paintbrush',
    tags: [
      'painting',
      'colors',
      'pain',
      'brush'
    ],
    shortcodes: [
      ':paintbrush:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 4025,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🖍️',
    hexcode: '1f58d',
    category: 'Objects',
    subgroup: 'writing',
    label: 'crayon',
    tags: [
      'crayon',
      'painting',
      'colors'
    ],
    shortcodes: [
      ':crayon:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 4027,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '📝',
    hexcode: '1f4dd',
    category: 'Objects',
    subgroup: 'writing',
    label: 'memo',
    tags: [
      'pencil',
      'paper',
      'notice',
      'notes'
    ],
    shortcodes: [
      ':memo:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4028,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '💼',
    hexcode: '1f4bc',
    category: 'Objects',
    subgroup: 'office',
    label: 'briefcase',
    tags: [
      'briefcase',
      'bag',
      'office bag',
      'leather bag'
    ],
    shortcodes: [
      ':briefcase:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4029,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '📁',
    hexcode: '1f4c1',
    category: 'Objects',
    subgroup: 'office',
    label: 'file folder',
    tags: [
      'file',
      'folder',
      'paper',
      'organise',
      'structure',
      'office',
      'box'
    ],
    shortcodes: [
      ':file-folder:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4030,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '📂',
    hexcode: '1f4c2',
    category: 'Objects',
    subgroup: 'office',
    label: 'open file folder',
    tags: [
      'file',
      'folder',
      'open',
      'open file',
      'organise',
      'structure',
      'office',
      'box'
    ],
    shortcodes: [
      ':open-file-folder:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4031,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🗂️',
    hexcode: '1f5c2',
    category: 'Objects',
    subgroup: 'office',
    label: 'card index dividers',
    tags: [
      'card',
      'dividers',
      'index'
    ],
    shortcodes: [
      ':card-index-dividers:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 4033,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '📅',
    hexcode: '1f4c5',
    category: 'Objects',
    subgroup: 'office',
    label: 'calendar',
    tags: [
      'date',
      'calendar',
      'day view',
      'pages',
      'analog'
    ],
    shortcodes: [
      ':calendar:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4034,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '📆',
    hexcode: '1f4c6',
    category: 'Objects',
    subgroup: 'office',
    label: 'tear-off calendar',
    tags: [
      'calendar',
      'tear off'
    ],
    shortcodes: [
      ':tear-off-calendar:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4035,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🗒️',
    hexcode: '1f5d2',
    category: 'Objects',
    subgroup: 'office',
    label: 'spiral notepad',
    tags: [
      'note',
      'pad',
      'spiral',
      'notes',
      'handwrite',
      'paper',
      'pen',
      'spiral block',
      'college'
    ],
    shortcodes: [
      ':spiral-notepad:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 4037,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🗓️',
    hexcode: '1f5d3',
    category: 'Objects',
    subgroup: 'office',
    label: 'spiral calendar',
    tags: [
      'calendar',
      'pad',
      'spiral',
      'year',
      'month view'
    ],
    shortcodes: [
      ':spiral-calendar:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 4039,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '📇',
    hexcode: '1f4c7',
    category: 'Objects',
    subgroup: 'office',
    label: 'card index',
    tags: [
      'card',
      'index',
      'rolodex'
    ],
    shortcodes: [
      ':card-index:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4040,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '📈',
    hexcode: '1f4c8',
    category: 'Objects',
    subgroup: 'office',
    label: 'chart increasing',
    tags: [
      'chart',
      'graph',
      'growth',
      'trend',
      'upward',
      'graph going up',
      'upward trend'
    ],
    shortcodes: [
      ':chart-increasing:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4041,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '📉',
    hexcode: '1f4c9',
    category: 'Objects',
    subgroup: 'office',
    label: 'chart decreasing',
    tags: [
      'chart',
      'down',
      'graph',
      'trend',
      'graph going down',
      'downtrend'
    ],
    shortcodes: [
      ':chart-decreasing:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4042,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '📊',
    hexcode: '1f4ca',
    category: 'Objects',
    subgroup: 'office',
    label: 'bar chart',
    tags: [
      'bar',
      'chart',
      'graph',
      'data',
      'sheet'
    ],
    shortcodes: [
      ':bar-chart:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4043,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '📋️',
    hexcode: '1f4cb',
    category: 'Objects',
    subgroup: 'office',
    label: 'clipboard',
    tags: [
      'clipboard',
      'board',
      'clip',
      'metal',
      'wood',
      'handwriting'
    ],
    shortcodes: [
      ':clipboard:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4044,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '📌',
    hexcode: '1f4cc',
    category: 'Objects',
    subgroup: 'office',
    label: 'pushpin',
    tags: [
      'pin',
      'wall',
      'push',
      'paper'
    ],
    shortcodes: [
      ':pushpin:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4045,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '📍',
    hexcode: '1f4cd',
    category: 'Objects',
    subgroup: 'office',
    label: 'round pushpin',
    tags: [
      'pin',
      'pushpin',
      'wall',
      'push',
      'paper',
      'notes'
    ],
    shortcodes: [
      ':round-pushpin:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4046,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '📎',
    hexcode: '1f4ce',
    category: 'Objects',
    subgroup: 'office',
    label: 'paperclip',
    tags: [
      'paperclip',
      'office',
      'organisation'
    ],
    shortcodes: [
      ':paperclip:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4047,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🖇️',
    hexcode: '1f587',
    category: 'Objects',
    subgroup: 'office',
    label: 'linked paperclips',
    tags: [
      'link',
      'paperclip'
    ],
    shortcodes: [
      ':linked-paperclips:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 4049,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '📏',
    hexcode: '1f4cf',
    category: 'Objects',
    subgroup: 'office',
    label: 'straight ruler',
    tags: [
      'ruler',
      'straight edge',
      'straight',
      'line',
      'measure',
      'detail'
    ],
    shortcodes: [
      ':straight-ruler:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4050,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '📐',
    hexcode: '1f4d0',
    category: 'Objects',
    subgroup: 'office',
    label: 'triangular ruler',
    tags: [
      'ruler',
      'set',
      'triangle',
      'line',
      'measure',
      'detail'
    ],
    shortcodes: [
      ':triangular-ruler:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4051,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '✂️',
    hexcode: '2702',
    category: 'Objects',
    subgroup: 'office',
    label: 'scissors',
    tags: [
      'cutting',
      'tool',
      'scissors',
      'cut',
      'work',
      'paper',
      'material'
    ],
    shortcodes: [
      ':scissors:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4053,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🗃️',
    hexcode: '1f5c3',
    category: 'Objects',
    subgroup: 'office',
    label: 'card file box',
    tags: [
      'box',
      'card',
      'file',
      'system',
      'organising',
      'structure',
      'tidy'
    ],
    shortcodes: [
      ':card-file-box:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 4055,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🗄️',
    hexcode: '1f5c4',
    category: 'Objects',
    subgroup: 'office',
    label: 'file cabinet',
    tags: [
      'cabinet',
      'file',
      'filing',
      'box',
      'file system',
      'file organising'
    ],
    shortcodes: [
      ':file-cabinet:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 4057,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🗑️',
    hexcode: '1f5d1',
    category: 'Objects',
    subgroup: 'office',
    label: 'wastebasket',
    tags: [
      'wastebasket',
      'paper',
      'bin',
      'trash'
    ],
    shortcodes: [
      ':wastebasket:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 4059,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🔒️',
    hexcode: '1f512',
    category: 'Objects',
    subgroup: 'lock',
    label: 'locked',
    tags: [
      'closed',
      'locker',
      'padlock'
    ],
    shortcodes: [
      ':locked:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4060,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🔓️',
    hexcode: '1f513',
    category: 'Objects',
    subgroup: 'lock',
    label: 'unlocked',
    tags: [
      'lock',
      'open',
      'unlock',
      'locker',
      'padlock'
    ],
    shortcodes: [
      ':unlocked:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4061,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🔏',
    hexcode: '1f50f',
    category: 'Objects',
    subgroup: 'lock',
    label: 'locked with pen',
    tags: [
      'ink',
      'lock',
      'nib',
      'pen',
      'privacy'
    ],
    shortcodes: [
      ':lock-with-pen:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4062,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🔐',
    hexcode: '1f510',
    category: 'Objects',
    subgroup: 'lock',
    label: 'locked with key',
    tags: [
      'closed',
      'key',
      'lock',
      'secure'
    ],
    shortcodes: [
      ':lock-with-key:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4063,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🔑',
    hexcode: '1f511',
    category: 'Objects',
    subgroup: 'lock',
    label: 'key',
    tags: [
      'lock',
      'password',
      'closing'
    ],
    shortcodes: [
      ':key:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4064,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🗝️',
    hexcode: '1f5dd',
    category: 'Objects',
    subgroup: 'lock',
    label: 'old key',
    tags: [
      'clue',
      'key',
      'lock',
      'old'
    ],
    shortcodes: [
      ':old-key:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 4066,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🔨',
    hexcode: '1f528',
    category: 'Objects',
    subgroup: 'tool',
    label: 'hammer',
    tags: [
      'tool',
      'toolbox',
      'metal',
      'wood'
    ],
    shortcodes: [
      ':hammer:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4067,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🪓',
    hexcode: '1fa93',
    category: 'Objects',
    subgroup: 'tool',
    label: 'axe',
    tags: [
      'chop',
      'hatchet',
      'split',
      'wood'
    ],
    shortcodes: [
      ':axe:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12,
    order: 4068,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '⛏️',
    hexcode: '26cf',
    category: 'Objects',
    subgroup: 'tool',
    label: 'pick',
    tags: [
      'mining',
      'tool',
      'weapon'
    ],
    shortcodes: [
      ':pick:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 4070,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '⚒️',
    hexcode: '2692',
    category: 'Objects',
    subgroup: 'tool',
    label: 'hammer and pick',
    tags: [
      'hammer',
      'pick',
      'tool'
    ],
    shortcodes: [
      ':hammer-and-pick:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 4072,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🛠️',
    hexcode: '1f6e0',
    category: 'Objects',
    subgroup: 'tool',
    label: 'hammer and wrench',
    tags: [
      'hammer',
      'spanner',
      'tool',
      'wrench',
      'craft mans',
      'logo'
    ],
    shortcodes: [
      ':hammer-and-wrench:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 4074,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🗡️',
    hexcode: '1f5e1',
    category: 'Objects',
    subgroup: 'tool',
    label: 'dagger',
    tags: [
      'knife',
      'weapon',
      'metal'
    ],
    shortcodes: [
      ':dagger:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 4076,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '⚔️',
    hexcode: '2694',
    category: 'Objects',
    subgroup: 'tool',
    label: 'crossed swords',
    tags: [
      'crossed',
      'swords',
      'weapon'
    ],
    shortcodes: [
      ':crossed-swords:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 4078,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '💣️',
    hexcode: '1f4a3',
    category: 'Objects',
    subgroup: 'tool',
    label: 'bomb',
    tags: [
      'comic',
      'explosion'
    ],
    shortcodes: [
      ':bomb:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4079,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🪃',
    hexcode: '1fa83',
    category: 'Objects',
    subgroup: 'tool',
    label: 'boomerang',
    tags: [
      'rebound',
      'repercussion'
    ],
    shortcodes: [
      ':boomerang:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 13,
    order: 4080,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🏹',
    hexcode: '1f3f9',
    category: 'Objects',
    subgroup: 'tool',
    label: 'bow and arrow',
    tags: [
      'archer',
      'arrow',
      'bow',
      'sagittarius',
      'zodiac'
    ],
    shortcodes: [
      ':bow-and-arrow:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 4081,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🛡️',
    hexcode: '1f6e1',
    category: 'Objects',
    subgroup: 'tool',
    label: 'shield',
    tags: [
      'weapon',
      'protection',
      'fight',
      'middle ages'
    ],
    shortcodes: [
      ':shield:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 4083,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🪚',
    hexcode: '1fa9a',
    category: 'Objects',
    subgroup: 'tool',
    label: 'carpentry saw',
    tags: [
      'carpenter',
      'lumber',
      'saw',
      'tool'
    ],
    shortcodes: [
      ':saw:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 13,
    order: 4084,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🔧',
    hexcode: '1f527',
    category: 'Objects',
    subgroup: 'tool',
    label: 'wrench',
    tags: [
      'spanner',
      'tool',
      'toolbox',
      'silver'
    ],
    shortcodes: [
      ':wrench:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4085,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🪛',
    hexcode: '1fa9b',
    category: 'Objects',
    subgroup: 'tool',
    label: 'screwdriver',
    tags: [
      'screw',
      'tool'
    ],
    shortcodes: [
      ':screwdriver:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 13,
    order: 4086,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🔩',
    hexcode: '1f529',
    category: 'Objects',
    subgroup: 'tool',
    label: 'nut and bolt',
    tags: [
      'bolt',
      'nut',
      'tool'
    ],
    shortcodes: [
      ':nut-and-bolt:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4087,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '⚙️',
    hexcode: '2699',
    category: 'Objects',
    subgroup: 'tool',
    label: 'gear',
    tags: [
      'cog',
      'cogwheel',
      'tool',
      'metal',
      'silver'
    ],
    shortcodes: [
      ':gear:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 4089,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🗜️',
    hexcode: '1f5dc',
    category: 'Objects',
    subgroup: 'tool',
    label: 'clamp',
    tags: [
      'compress',
      'tool',
      'vice',
      'toolbox'
    ],
    shortcodes: [
      ':clamp:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 4091,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '⚖️',
    hexcode: '2696',
    category: 'Objects',
    subgroup: 'tool',
    label: 'balance scale',
    tags: [
      'balance',
      'justice',
      'libra',
      'scale',
      'zodiac',
      'silver'
    ],
    shortcodes: [
      ':balance-scale:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 4093,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🦯',
    hexcode: '1f9af',
    category: 'Objects',
    subgroup: 'tool',
    label: 'white cane',
    tags: [
      'accessibility',
      'blind'
    ],
    shortcodes: [
      ':probing-cane:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12,
    order: 4094,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🔗',
    hexcode: '1f517',
    category: 'Objects',
    subgroup: 'tool',
    label: 'link',
    tags: [
      'link',
      'silver'
    ],
    shortcodes: [
      ':link:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4095,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '⛓️',
    hexcode: '26d3',
    category: 'Objects',
    subgroup: 'tool',
    label: 'chains',
    tags: [
      'chain',
      'metal',
      'silver'
    ],
    shortcodes: [
      ':chains:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 4097,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🪝',
    hexcode: '1fa9d',
    category: 'Objects',
    subgroup: 'tool',
    label: 'hook',
    tags: [
      'catch',
      'crook',
      'curve',
      'ensnare',
      'selling point',
      'fishing'
    ],
    shortcodes: [
      ':hook:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 13,
    order: 4098,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🧰',
    hexcode: '1f9f0',
    category: 'Objects',
    subgroup: 'tool',
    label: 'toolbox',
    tags: [
      'chest',
      'mechanic',
      'tool'
    ],
    shortcodes: [
      ':toolbox:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 11,
    order: 4099,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🧲',
    hexcode: '1f9f2',
    category: 'Objects',
    subgroup: 'tool',
    label: 'magnet',
    tags: [
      'attraction',
      'horseshoe',
      'magnetic'
    ],
    shortcodes: [
      ':magnet:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 11,
    order: 4100,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🪜',
    hexcode: '1fa9c',
    category: 'Objects',
    subgroup: 'tool',
    label: 'ladder',
    tags: [
      'climb',
      'rung',
      'step'
    ],
    shortcodes: [
      ':ladder:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 13,
    order: 4101,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '⚗️',
    hexcode: '2697',
    category: 'Objects',
    subgroup: 'science',
    label: 'alembic',
    tags: [
      'chemistry',
      'tool'
    ],
    shortcodes: [
      ':alembic:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 4103,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🧪',
    hexcode: '1f9ea',
    category: 'Objects',
    subgroup: 'science',
    label: 'test tube',
    tags: [
      'chemist',
      'chemistry',
      'experiment',
      'lab',
      'science'
    ],
    shortcodes: [
      ':test-tube:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 11,
    order: 4104,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🧫',
    hexcode: '1f9eb',
    category: 'Objects',
    subgroup: 'science',
    label: 'petri dish',
    tags: [
      'bacteria',
      'biologist',
      'biology',
      'culture',
      'lab'
    ],
    shortcodes: [
      ':petri-dish:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 11,
    order: 4105,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🧬',
    hexcode: '1f9ec',
    category: 'Objects',
    subgroup: 'science',
    label: 'dna',
    tags: [
      'biologist',
      'evolution',
      'gene',
      'genetics',
      'life'
    ],
    shortcodes: [
      ':dna:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 11,
    order: 4106,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🔬',
    hexcode: '1f52c',
    category: 'Objects',
    subgroup: 'science',
    label: 'microscope',
    tags: [
      'science',
      'tool'
    ],
    shortcodes: [
      ':microscope:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 4107,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🔭',
    hexcode: '1f52d',
    category: 'Objects',
    subgroup: 'science',
    label: 'telescope',
    tags: [
      'science',
      'tool',
      'stars',
      'sky',
      'space'
    ],
    shortcodes: [
      ':telescope:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 4108,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '📡',
    hexcode: '1f4e1',
    category: 'Objects',
    subgroup: 'science',
    label: 'satellite antenna',
    tags: [
      'antenna',
      'dish',
      'satellite',
      'signal',
      'receive',
      'radiation'
    ],
    shortcodes: [
      ':satellite-antenna:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4109,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '💉',
    hexcode: '1f489',
    category: 'Objects',
    subgroup: 'medical',
    label: 'syringe',
    tags: [
      'medicine',
      'needle',
      'shot',
      'sick',
      'health',
      'injection',
      'iv',
      'drug'
    ],
    shortcodes: [
      ':syringe:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4110,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🩸',
    hexcode: '1fa78',
    category: 'Objects',
    subgroup: 'medical',
    label: 'drop of blood',
    tags: [
      'bleed',
      'blood donation',
      'injury',
      'medicine',
      'menstruation'
    ],
    shortcodes: [
      ':blood:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12,
    order: 4111,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '💊',
    hexcode: '1f48a',
    category: 'Objects',
    subgroup: 'medical',
    label: 'pill',
    tags: [
      'doctor',
      'medicine',
      'sick',
      'health'
    ],
    shortcodes: [
      ':pill:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4112,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🩹',
    hexcode: '1fa79',
    category: 'Objects',
    subgroup: 'medical',
    label: 'adhesive bandage',
    tags: [
      'bandage'
    ],
    shortcodes: [
      ':adhesive-bandage:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12,
    order: 4113,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🩼',
    hexcode: '1fa7c',
    category: 'Objects',
    subgroup: 'medical',
    label: 'crutch',
    tags: [
      'cane',
      'disability',
      'hurt',
      'mobility aid',
      'stick'
    ],
    shortcodes: [
      ':crutch:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 14,
    order: 4114,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🩺',
    hexcode: '1fa7a',
    category: 'Objects',
    subgroup: 'medical',
    label: 'stethoscope',
    tags: [
      'doctor',
      'heart',
      'medicine'
    ],
    shortcodes: [
      ':stethoscope:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12,
    order: 4115,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🩻',
    hexcode: '1fa7b',
    category: 'Objects',
    subgroup: 'medical',
    label: 'x-ray',
    tags: [
      'bones',
      'doctor',
      'medical',
      'skeleton'
    ],
    shortcodes: [
      ':x-ray:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 14,
    order: 4116,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🚪',
    hexcode: '1f6aa',
    category: 'Objects',
    subgroup: 'household',
    label: 'door',
    tags: [
      'door'
    ],
    shortcodes: [
      ':door:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4117,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🛗',
    hexcode: '1f6d7',
    category: 'Objects',
    subgroup: 'household',
    label: 'elevator',
    tags: [
      'accessibility',
      'hoist',
      'lift'
    ],
    shortcodes: [
      ':elevator:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 13,
    order: 4118,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🪞',
    hexcode: '1fa9e',
    category: 'Objects',
    subgroup: 'household',
    label: 'mirror',
    tags: [
      'reflection',
      'reflector',
      'speculum'
    ],
    shortcodes: [
      ':mirror:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 13,
    order: 4119,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🪟',
    hexcode: '1fa9f',
    category: 'Objects',
    subgroup: 'household',
    label: 'window',
    tags: [
      'frame',
      'fresh air',
      'opening',
      'transparent',
      'view'
    ],
    shortcodes: [
      ':window:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 13,
    order: 4120,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🛏️',
    hexcode: '1f6cf',
    category: 'Objects',
    subgroup: 'household',
    label: 'bed',
    tags: [
      'hotel',
      'sleep',
      'furniture'
    ],
    shortcodes: [
      ':bed:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 4122,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🛋️',
    hexcode: '1f6cb',
    category: 'Objects',
    subgroup: 'household',
    label: 'couch and lamp',
    tags: [
      'couch',
      'hotel',
      'lamp',
      'furniture'
    ],
    shortcodes: [
      ':couch-and-lamp:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 4124,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🪑',
    hexcode: '1fa91',
    category: 'Objects',
    subgroup: 'household',
    label: 'chair',
    tags: [
      'seat',
      'sit'
    ],
    shortcodes: [
      ':chair:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12,
    order: 4125,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🚽',
    hexcode: '1f6bd',
    category: 'Objects',
    subgroup: 'household',
    label: 'toilet',
    tags: [
      'toilet'
    ],
    shortcodes: [
      ':toilet:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4126,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🪠',
    hexcode: '1faa0',
    category: 'Objects',
    subgroup: 'household',
    label: 'plunger',
    tags: [
      'force cup',
      'plumber',
      'suction',
      'toilet'
    ],
    shortcodes: [
      ':plunger:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 13,
    order: 4127,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🚿',
    hexcode: '1f6bf',
    category: 'Objects',
    subgroup: 'household',
    label: 'shower',
    tags: [
      'water',
      'wash'
    ],
    shortcodes: [
      ':shower:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 4128,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🛁',
    hexcode: '1f6c1',
    category: 'Objects',
    subgroup: 'household',
    label: 'bathtub',
    tags: [
      'bath',
      'wash',
      'water',
      'foam'
    ],
    shortcodes: [
      ':bathtub:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 4129,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🪤',
    hexcode: '1faa4',
    category: 'Objects',
    subgroup: 'household',
    label: 'mouse trap',
    tags: [
      'bait',
      'mousetrap',
      'snare',
      'trap',
      'isometric'
    ],
    shortcodes: [
      ':mouse-trap:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 13,
    order: 4130,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🪒',
    hexcode: '1fa92',
    category: 'Objects',
    subgroup: 'household',
    label: 'razor',
    tags: [
      'sharp',
      'shave'
    ],
    shortcodes: [
      ':razor:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12,
    order: 4131,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🧴',
    hexcode: '1f9f4',
    category: 'Objects',
    subgroup: 'household',
    label: 'lotion bottle',
    tags: [
      'lotion',
      'moisturizer',
      'shampoo',
      'sunscreen'
    ],
    shortcodes: [
      ':lotion-bottle:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 11,
    order: 4132,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🧷',
    hexcode: '1f9f7',
    category: 'Objects',
    subgroup: 'household',
    label: 'safety pin',
    tags: [
      'diaper',
      'punk rock'
    ],
    shortcodes: [
      ':safety-pin:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 11,
    order: 4133,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🧹',
    hexcode: '1f9f9',
    category: 'Objects',
    subgroup: 'household',
    label: 'broom',
    tags: [
      'cleaning',
      'sweeping',
      'witch'
    ],
    shortcodes: [
      ':broom:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 11,
    order: 4134,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🧺',
    hexcode: '1f9fa',
    category: 'Objects',
    subgroup: 'household',
    label: 'basket',
    tags: [
      'farming',
      'laundry',
      'picnic'
    ],
    shortcodes: [
      ':basket:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 11,
    order: 4135,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🧻',
    hexcode: '1f9fb',
    category: 'Objects',
    subgroup: 'household',
    label: 'roll of paper',
    tags: [
      'paper towels',
      'toilet paper',
      'isometric'
    ],
    shortcodes: [
      ':roll-of-paper:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 11,
    order: 4136,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🪣',
    hexcode: '1faa3',
    category: 'Objects',
    subgroup: 'household',
    label: 'bucket',
    tags: [
      'cask',
      'pail',
      'vat'
    ],
    shortcodes: [
      ':bucket:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 13,
    order: 4137,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🧼',
    hexcode: '1f9fc',
    category: 'Objects',
    subgroup: 'household',
    label: 'soap',
    tags: [
      'bar',
      'bathing',
      'cleaning',
      'lather',
      'soapdish'
    ],
    shortcodes: [
      ':soap:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 11,
    order: 4138,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🫧',
    hexcode: '1fae7',
    category: 'Objects',
    subgroup: 'household',
    label: 'bubbles',
    tags: [
      'burp',
      'clean',
      'soap',
      'underwater'
    ],
    shortcodes: [
      ':bubbles:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 14,
    order: 4139,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🪥',
    hexcode: '1faa5',
    category: 'Objects',
    subgroup: 'household',
    label: 'toothbrush',
    tags: [
      'bathroom',
      'brush',
      'clean',
      'dental',
      'hygiene',
      'teeth'
    ],
    shortcodes: [
      ':toothbrush:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 13,
    order: 4140,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🧽',
    hexcode: '1f9fd',
    category: 'Objects',
    subgroup: 'household',
    label: 'sponge',
    tags: [
      'absorbing',
      'cleaning',
      'porous'
    ],
    shortcodes: [
      ':sponge:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 11,
    order: 4141,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🧯',
    hexcode: '1f9ef',
    category: 'Objects',
    subgroup: 'household',
    label: 'fire extinguisher',
    tags: [
      'extinguish',
      'fire',
      'quench'
    ],
    shortcodes: [
      ':fire-extinguisher:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 11,
    order: 4142,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🛒',
    hexcode: '1f6d2',
    category: 'Objects',
    subgroup: 'household',
    label: 'shopping cart',
    tags: [
      'cart',
      'shopping',
      'trolley'
    ],
    shortcodes: [
      ':shopping-cart:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 3,
    order: 4143,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🚬',
    hexcode: '1f6ac',
    category: 'Objects',
    subgroup: 'other-object',
    label: 'cigarette',
    tags: [
      'smoking',
      'tobacco',
      'smoke'
    ],
    shortcodes: [
      ':cigarette:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4144,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '⚰️',
    hexcode: '26b0',
    category: 'Objects',
    subgroup: 'other-object',
    label: 'coffin',
    tags: [
      'death',
      'funeral',
      'dead'
    ],
    shortcodes: [
      ':coffin:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 4146,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🪦',
    hexcode: '1faa6',
    category: 'Objects',
    subgroup: 'other-object',
    label: 'headstone',
    tags: [
      'cemetery',
      'grave',
      'graveyard',
      'tombstone'
    ],
    shortcodes: [
      ':headstone:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 13,
    order: 4147,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '⚱️',
    hexcode: '26b1',
    category: 'Objects',
    subgroup: 'other-object',
    label: 'funeral urn',
    tags: [
      'ashes',
      'death',
      'funeral',
      'urn'
    ],
    shortcodes: [
      ':urn:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 4149,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🧿',
    hexcode: '1f9ff',
    category: 'Objects',
    subgroup: 'other-object',
    label: 'nazar amulet',
    tags: [
      'bead',
      'charm',
      'evil-eye',
      'nazar',
      'talisman'
    ],
    shortcodes: [
      ':evil-eye:',
      ':nazar-amulet:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 11,
    order: 4150,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🪬',
    hexcode: '1faac',
    category: 'Objects',
    subgroup: 'other-object',
    label: 'hamsa',
    tags: [
      'amulet',
      'fatima',
      'hand',
      'mary',
      'miriam',
      'protection'
    ],
    shortcodes: [
      ':hamsa:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 14,
    order: 4151,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🗿',
    hexcode: '1f5ff',
    category: 'Objects',
    subgroup: 'other-object',
    label: 'moai',
    tags: [
      'face',
      'moyai',
      'statue',
      'shibuya',
      'japan',
      'meet',
      'meeting point'
    ],
    shortcodes: [
      ':moai:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4152,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🪧',
    hexcode: '1faa7',
    category: 'Objects',
    subgroup: 'other-object',
    label: 'placard',
    tags: [
      'demonstration',
      'picket',
      'protest',
      'sign'
    ],
    shortcodes: [
      ':placard:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 13,
    order: 4153,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🪪',
    hexcode: '1faaa',
    category: 'Objects',
    subgroup: 'other-object',
    label: 'identification card',
    tags: [
      'credentials',
      'id',
      'license',
      'security'
    ],
    shortcodes: [
      ':id:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 14,
    order: 4154,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🏧',
    hexcode: '1f3e7',
    category: 'Symbols',
    subgroup: 'transport-sign',
    label: 'ATM sign',
    tags: [
      'atm',
      'atm sign',
      'automated',
      'bank',
      'teller'
    ],
    shortcodes: [
      ':ATM:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4155,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🚮',
    hexcode: '1f6ae',
    category: 'Symbols',
    subgroup: 'transport-sign',
    label: 'litter in bin sign',
    tags: [
      'litter',
      'litter bin',
      'trash',
      'bin',
      'garbage',
      'can',
      'throw',
      'away'
    ],
    shortcodes: [
      ':litter:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 4156,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🚰',
    hexcode: '1f6b0',
    category: 'Symbols',
    subgroup: 'transport-sign',
    label: 'potable water',
    tags: [
      'drinking',
      'potable',
      'water',
      'faucet',
      'tap',
      'glass'
    ],
    shortcodes: [
      ':water-faucet:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 4157,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '♿️',
    hexcode: '267f',
    category: 'Symbols',
    subgroup: 'transport-sign',
    label: 'wheelchair symbol',
    tags: [
      'access',
      'disabled person',
      'wheel chair',
      'toilet',
      'restroom'
    ],
    shortcodes: [
      ':wheelchair-symbol:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4158,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🚹️',
    hexcode: '1f6b9',
    category: 'Symbols',
    subgroup: 'transport-sign',
    label: 'men’s room',
    tags: [
      'bathroom',
      'lavatory',
      'man',
      'restroom',
      'toilet',
      'wc',
      'guy',
      'dude',
      'male'
    ],
    shortcodes: [
      ':mens-room:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4159,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🚺️',
    hexcode: '1f6ba',
    category: 'Symbols',
    subgroup: 'transport-sign',
    label: 'women’s room',
    tags: [
      'bathroom',
      'lavatory',
      'restroom',
      'toilet',
      'wc',
      'woman',
      'female',
      'chick',
      'women'
    ],
    shortcodes: [
      ':womens-room:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4160,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🚻',
    hexcode: '1f6bb',
    category: 'Symbols',
    subgroup: 'transport-sign',
    label: 'restroom',
    tags: [
      'bathroom',
      'lavatory',
      'toilet',
      'wc',
      'unisex',
      'restroom',
    ],
    shortcodes: [
      ':restroom:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4161,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🚼️',
    hexcode: '1f6bc',
    category: 'Symbols',
    subgroup: 'transport-sign',
    label: 'baby symbol',
    tags: [
      'baby',
      'changing',
      'station',
      'restroom',
      'toilet'
    ],
    shortcodes: [
      ':baby-symbol:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4162,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🚾',
    hexcode: '1f6be',
    category: 'Symbols',
    subgroup: 'transport-sign',
    label: 'water closet',
    tags: [
      'bathroom',
      'closet',
      'lavatory',
      'restroom',
      'toilet',
      'wc'
    ],
    shortcodes: [
      ':water-closet:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4163,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🛂',
    hexcode: '1f6c2',
    category: 'Symbols',
    subgroup: 'transport-sign',
    label: 'passport control',
    tags: [
      'control',
      'passport'
    ],
    shortcodes: [
      ':passport-control:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 4164,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🛃',
    hexcode: '1f6c3',
    category: 'Symbols',
    subgroup: 'transport-sign',
    label: 'customs',
    tags: [
      'customs'
    ],
    shortcodes: [
      ':customs:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 4165,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🛄',
    hexcode: '1f6c4',
    category: 'Symbols',
    subgroup: 'transport-sign',
    label: 'baggage claim',
    tags: [
      'baggage',
      'claim'
    ],
    shortcodes: [
      ':baggage-claim:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 4166,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🛅',
    hexcode: '1f6c5',
    category: 'Symbols',
    subgroup: 'transport-sign',
    label: 'left luggage',
    tags: [
      'baggage',
      'locker',
      'luggage'
    ],
    shortcodes: [
      ':left-luggage:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 4167,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '⚠️',
    hexcode: '26a0',
    category: 'Symbols',
    subgroup: 'warning',
    label: 'warning',
    tags: [
      'warning'
    ],
    shortcodes: [
      ':warning:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4169,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🚸',
    hexcode: '1f6b8',
    category: 'Symbols',
    subgroup: 'warning',
    label: 'children crossing',
    tags: [
      'child',
      'crossing',
      'pedestrian',
      'traffic'
    ],
    shortcodes: [
      ':children-crossing:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 4170,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '⛔️',
    hexcode: '26d4',
    category: 'Symbols',
    subgroup: 'warning',
    label: 'no entry',
    tags: [
      'entry',
      'forbidden',
      'no',
      'not',
      'prohibited',
      'traffic'
    ],
    shortcodes: [
      ':no-entry:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4171,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🚫',
    hexcode: '1f6ab',
    category: 'Symbols',
    subgroup: 'warning',
    label: 'prohibited',
    tags: [
      'entry',
      'forbidden',
      'no',
      'not'
    ],
    shortcodes: [
      ':prohibited:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4172,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🚳',
    hexcode: '1f6b3',
    category: 'Symbols',
    subgroup: 'warning',
    label: 'no bicycles',
    tags: [
      'bicycle',
      'bike',
      'forbidden',
      'no',
      'prohibited'
    ],
    shortcodes: [
      ':no-bicycles:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 4173,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🚭️',
    hexcode: '1f6ad',
    category: 'Symbols',
    subgroup: 'warning',
    label: 'no smoking',
    tags: [
      'forbidden',
      'no',
      'not',
      'prohibited',
      'smoking'
    ],
    shortcodes: [
      ':no-smoking:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4174,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🚯',
    hexcode: '1f6af',
    category: 'Symbols',
    subgroup: 'warning',
    label: 'no littering',
    tags: [
      'forbidden',
      'litter',
      'no',
      'not',
      'prohibited'
    ],
    shortcodes: [
      ':no-littering:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 4175,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🚱',
    hexcode: '1f6b1',
    category: 'Symbols',
    subgroup: 'warning',
    label: 'non-potable water',
    tags: [
      'non-drinking',
      'non-potable',
      'water'
    ],
    shortcodes: [
      ':non-potable-water:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 4176,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🚷',
    hexcode: '1f6b7',
    category: 'Symbols',
    subgroup: 'warning',
    label: 'no pedestrians',
    tags: [
      'forbidden',
      'no',
      'not',
      'pedestrian',
      'prohibited'
    ],
    shortcodes: [
      ':no-pedestrians:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 4177,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '📵',
    hexcode: '1f4f5',
    category: 'Symbols',
    subgroup: 'warning',
    label: 'no mobile phones',
    tags: [
      'cell',
      'forbidden',
      'mobile',
      'no',
      'phone'
    ],
    shortcodes: [
      ':no-mobile-phones:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 4178,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🔞',
    hexcode: '1f51e',
    category: 'Symbols',
    subgroup: 'warning',
    label: 'no one under eighteen',
    tags: [
      '18',
      'age restriction',
      'eighteen',
      'prohibited',
      'underage'
    ],
    shortcodes: [
      ':no-under-eighteen:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4179,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '☢️',
    hexcode: '2622',
    category: 'Symbols',
    subgroup: 'warning',
    label: 'radioactive',
    tags: [
      'sign'
    ],
    shortcodes: [
      ':radioactive:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 4181,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '☣️',
    hexcode: '2623',
    category: 'Symbols',
    subgroup: 'warning',
    label: 'biohazard',
    tags: [
      'sign'
    ],
    shortcodes: [
      ':biohazard:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 4183,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '⬆️',
    hexcode: '2b06',
    category: 'Symbols',
    subgroup: 'arrow',
    label: 'up arrow',
    tags: [
      'arrow',
      'cardinal',
      'direction',
      'north',
      'up',
      'above'
    ],
    shortcodes: [
      ':up-arrow:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4185,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '↗️',
    hexcode: '2197',
    category: 'Symbols',
    subgroup: 'arrow',
    label: 'up-right arrow',
    tags: [
      'arrow',
      'direction',
      'intercardinal',
      'northeast',
      'diagonal',
      'right up'
    ],
    shortcodes: [
      ':up-right-arrow:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4187,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '➡️',
    hexcode: '27a1',
    category: 'Symbols',
    subgroup: 'arrow',
    label: 'right arrow',
    tags: [
      'arrow',
      'cardinal',
      'direction',
      'east',
      'right',
      'soon',
      'future'
    ],
    shortcodes: [
      ':right-arrow:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4189,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '↘️',
    hexcode: '2198',
    category: 'Symbols',
    subgroup: 'arrow',
    label: 'down-right arrow',
    tags: [
      'arrow',
      'direction',
      'intercardinal',
      'southeast',
      'diagonal',
      'right down'
    ],
    shortcodes: [
      ':down-right-arrow:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4191,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '⬇️',
    hexcode: '2b07',
    category: 'Symbols',
    subgroup: 'arrow',
    label: 'down arrow',
    tags: [
      'arrow',
      'cardinal',
      'direction',
      'down',
      'south',
      'underneath'
    ],
    shortcodes: [
      ':down-arrow:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4193,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '↙️',
    hexcode: '2199',
    category: 'Symbols',
    subgroup: 'arrow',
    label: 'down-left arrow',
    tags: [
      'arrow',
      'direction',
      'intercardinal',
      'southwest',
      'diagonal',
      'left down'
    ],
    shortcodes: [
      ':down-left-arrow:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4195,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '⬅️',
    hexcode: '2b05',
    category: 'Symbols',
    subgroup: 'arrow',
    label: 'left arrow',
    tags: [
      'arrow',
      'cardinal',
      'direction',
      'west',
      'left',
      'past'
    ],
    shortcodes: [
      ':left-arrow:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4197,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '↖️',
    hexcode: '2196',
    category: 'Symbols',
    subgroup: 'arrow',
    label: 'up-left arrow',
    tags: [
      'arrow',
      'direction',
      'intercardinal',
      'northwest',
      'diagonal',
      'left up'
    ],
    shortcodes: [
      ':up-left-arrow:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4199,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '↕️',
    hexcode: '2195',
    category: 'Symbols',
    subgroup: 'arrow',
    label: 'up-down arrow',
    tags: [
      'arrow',
      'directions',
      'opposite',
      'up and down'
    ],
    shortcodes: [
      ':up-down-arrow:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4201,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '↔️',
    hexcode: '2194',
    category: 'Symbols',
    subgroup: 'arrow',
    label: 'left-right arrow',
    tags: [
      'arrow',
      'directions',
      'opposite',
      'left and right'
    ],
    shortcodes: [
      ':left-right-arrow:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4203,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '↩️',
    hexcode: '21a9',
    category: 'Symbols',
    subgroup: 'arrow',
    label: 'right arrow curving left',
    tags: [
      'arrow',
      'directions',
      'turn around'
    ],
    shortcodes: [
      ':right-arrow-curving-left:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4205,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '↪️',
    hexcode: '21aa',
    category: 'Symbols',
    subgroup: 'arrow',
    label: 'left arrow curving right',
    tags: [
      'arrow',
      'directions',
      'turn around'
    ],
    shortcodes: [
      ':left-arrow-curving-right:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4207,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '⤴️',
    hexcode: '2934',
    category: 'Symbols',
    subgroup: 'arrow',
    label: 'right arrow curving up',
    tags: [
      'arrow',
      'direction',
      'curve up'
    ],
    shortcodes: [
      ':right-arrow-curving-up:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4209,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '⤵️',
    hexcode: '2935',
    category: 'Symbols',
    subgroup: 'arrow',
    label: 'right arrow curving down',
    tags: [
      'arrow',
      'down',
      'direction',
      'curve down'
    ],
    shortcodes: [
      ':right-arrow-curving-down:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4211,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🔃',
    hexcode: '1f503',
    category: 'Symbols',
    subgroup: 'arrow',
    label: 'clockwise vertical arrows',
    tags: [
      'arrow',
      'clockwise',
      'reload'
    ],
    shortcodes: [
      ':clockwise-arrows:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4212,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🔄',
    hexcode: '1f504',
    category: 'Symbols',
    subgroup: 'arrow',
    label: 'counterclockwise arrows button',
    tags: [
      'anticlockwise',
      'arrow',
      'counterclockwise',
      'withershins',
      'cycle'
    ],
    shortcodes: [
      ':counterclockwise-arrows:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 4213,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🔙',
    hexcode: '1f519',
    category: 'Symbols',
    subgroup: 'arrow',
    label: 'BACK arrow',
    tags: [
      'arrow',
      'back'
    ],
    shortcodes: [
      ':back:',
      ':arrow-back:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4214,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🔚',
    hexcode: '1f51a',
    category: 'Symbols',
    subgroup: 'arrow',
    label: 'END arrow',
    tags: [
      'arrow',
      'end'
    ],
    shortcodes: [
      ':end:',
      ':arrow-end:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4215,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🔛',
    hexcode: '1f51b',
    category: 'Symbols',
    subgroup: 'arrow',
    label: 'ON! arrow',
    tags: [
      'arrow',
      'mark',
      'on',
      'on!'
    ],
    shortcodes: [
      ':on:',
      ':arrow-on:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4216,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🔜',
    hexcode: '1f51c',
    category: 'Symbols',
    subgroup: 'arrow',
    label: 'SOON arrow',
    tags: [
      'arrow',
      'soon'
    ],
    shortcodes: [
      ':soon:',
      ':arrow-soon:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4217,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🔝',
    hexcode: '1f51d',
    category: 'Symbols',
    subgroup: 'arrow',
    label: 'TOP arrow',
    tags: [
      'arrow',
      'top',
      'up'
    ],
    shortcodes: [
      ':top:',
      ':arrow-top:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4218,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🛐',
    hexcode: '1f6d0',
    category: 'Symbols',
    subgroup: 'religion',
    label: 'place of worship',
    tags: [
      'religion',
      'worship',
      'pray'
    ],
    shortcodes: [
      ':place-of-worship:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 4219,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '⚛️',
    hexcode: '269b',
    category: 'Symbols',
    subgroup: 'religion',
    label: 'atom symbol',
    tags: [
      'atheist',
      'atom'
    ],
    shortcodes: [
      ':atom-symbol:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 4221,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🕉️',
    hexcode: '1f549',
    category: 'Symbols',
    subgroup: 'religion',
    label: 'om',
    tags: [
      'hindu',
      'religion'
    ],
    shortcodes: [
      ':om:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 4223,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '✡️',
    hexcode: '2721',
    category: 'Symbols',
    subgroup: 'religion',
    label: 'star of David',
    tags: [
      'david',
      'jew',
      'jewish',
      'religion',
      'star',
      'star of david'
    ],
    shortcodes: [
      ':star-of-David:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 4225,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '☸️',
    hexcode: '2638',
    category: 'Symbols',
    subgroup: 'religion',
    label: 'wheel of dharma',
    tags: [
      'buddhist',
      'dharma',
      'religion',
      'wheel'
    ],
    shortcodes: [
      ':wheel-of-dharma:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 4227,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '☯️',
    hexcode: '262f',
    category: 'Symbols',
    subgroup: 'religion',
    label: 'yin yang',
    tags: [
      'religion',
      'tao',
      'taoist',
      'yang',
      'yin',
      'balance'
    ],
    shortcodes: [
      ':yin-yang:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 4229,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '✝️',
    hexcode: '271d',
    category: 'Symbols',
    subgroup: 'religion',
    label: 'latin cross',
    tags: [
      'christian',
      'cross',
      'religion'
    ],
    shortcodes: [
      ':latin-cross:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 4231,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '☦️',
    hexcode: '2626',
    category: 'Symbols',
    subgroup: 'religion',
    label: 'orthodox cross',
    tags: [
      'christian',
      'cross',
      'religion'
    ],
    shortcodes: [
      ':orthodox-cross:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 4233,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '☪️',
    hexcode: '262a',
    category: 'Symbols',
    subgroup: 'religion',
    label: 'star and crescent',
    tags: [
      'islam',
      'muslim',
      'religion'
    ],
    shortcodes: [
      ':star-and-crescent:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 4235,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '☮️',
    hexcode: '262e',
    category: 'Symbols',
    subgroup: 'religion',
    label: 'peace symbol',
    tags: [
      'peace'
    ],
    shortcodes: [
      ':peace-symbol:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 4237,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🕎',
    hexcode: '1f54e',
    category: 'Symbols',
    subgroup: 'religion',
    label: 'menorah',
    tags: [
      'candelabrum',
      'candlestick',
      'religion'
    ],
    shortcodes: [
      ':menorah:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 4238,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🔯',
    hexcode: '1f52f',
    category: 'Symbols',
    subgroup: 'religion',
    label: 'dotted six-pointed star',
    tags: [
      'fortune',
      'star'
    ],
    shortcodes: [
      ':star-of-david-with-dot:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4239,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🪯',
    hexcode: '1faaf',
    category: 'Symbols',
    subgroup: 'religion',
    label: 'khanda',
    tags: [
      'religion',
      'sikh'
    ],
    shortcodes: [
      ':khanda:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 15,
    order: 4240,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '♈️',
    hexcode: '2648',
    category: 'Symbols',
    subgroup: 'zodiac',
    label: 'Aries',
    tags: [
      'aries',
      'ram',
      'zodiac'
    ],
    shortcodes: [
      ':Aries:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4241,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '♉️',
    hexcode: '2649',
    category: 'Symbols',
    subgroup: 'zodiac',
    label: 'Taurus',
    tags: [
      'bull',
      'ox',
      'taurus',
      'zodiac'
    ],
    shortcodes: [
      ':Taurus:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4242,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '♊️',
    hexcode: '264a',
    category: 'Symbols',
    subgroup: 'zodiac',
    label: 'Gemini',
    tags: [
      'gemini',
      'twins',
      'zodiac'
    ],
    shortcodes: [
      ':Gemini:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4243,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '♋️',
    hexcode: '264b',
    category: 'Symbols',
    subgroup: 'zodiac',
    label: 'Cancer',
    tags: [
      'cancer',
      'crab',
      'zodiac'
    ],
    shortcodes: [
      ':Cancer:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4244,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '♌️',
    hexcode: '264c',
    category: 'Symbols',
    subgroup: 'zodiac',
    label: 'Leo',
    tags: [
      'leo',
      'lion',
      'zodiac'
    ],
    shortcodes: [
      ':Leo:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4245,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '♍️',
    hexcode: '264d',
    category: 'Symbols',
    subgroup: 'zodiac',
    label: 'Virgo',
    tags: [
      'virgo',
      'zodiac'
    ],
    shortcodes: [
      ':Virgo:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4246,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '♎️',
    hexcode: '264e',
    category: 'Symbols',
    subgroup: 'zodiac',
    label: 'Libra',
    tags: [
      'balance',
      'justice',
      'libra',
      'scales',
      'zodiac'
    ],
    shortcodes: [
      ':Libra:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4247,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '♏️',
    hexcode: '264f',
    category: 'Symbols',
    subgroup: 'zodiac',
    label: 'Scorpio',
    tags: [
      'scorpio',
      'scorpion',
      'scorpius',
      'zodiac'
    ],
    shortcodes: [
      ':Scorpio:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4248,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '♐️',
    hexcode: '2650',
    category: 'Symbols',
    subgroup: 'zodiac',
    label: 'Sagittarius',
    tags: [
      'archer',
      'sagittarius',
      'zodiac'
    ],
    shortcodes: [
      ':Sagittarius:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4249,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '♑️',
    hexcode: '2651',
    category: 'Symbols',
    subgroup: 'zodiac',
    label: 'Capricorn',
    tags: [
      'capricorn',
      'goat',
      'zodiac'
    ],
    shortcodes: [
      ':Capricorn:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4250,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '♒️',
    hexcode: '2652',
    category: 'Symbols',
    subgroup: 'zodiac',
    label: 'Aquarius',
    tags: [
      'aquarius',
      'bearer',
      'water',
      'zodiac'
    ],
    shortcodes: [
      ':Aquarius:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4251,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '♓️',
    hexcode: '2653',
    category: 'Symbols',
    subgroup: 'zodiac',
    label: 'Pisces',
    tags: [
      'fish',
      'pisces',
      'zodiac'
    ],
    shortcodes: [
      ':Pisces:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4252,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '⛎',
    hexcode: '26ce',
    category: 'Symbols',
    subgroup: 'zodiac',
    label: 'Ophiuchus',
    tags: [
      'bearer',
      'ophiuchus',
      'serpent',
      'snake',
      'zodiac'
    ],
    shortcodes: [
      ':Ophiuchus:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4253,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🔀',
    hexcode: '1f500',
    category: 'Symbols',
    subgroup: 'av-symbol',
    label: 'shuffle tracks button',
    tags: [
      'arrow',
      'crossed',
      'random'
    ],
    shortcodes: [
      ':shuffle:',
      ':twisted-rightwards-arrows:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 4254,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🔁',
    hexcode: '1f501',
    category: 'Symbols',
    subgroup: 'av-symbol',
    label: 'repeat button',
    tags: [
      'arrow',
      'clockwise',
      'repeat',
      'cycle'
    ],
    shortcodes: [
      ':repeat:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 4255,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🔂',
    hexcode: '1f502',
    category: 'Symbols',
    subgroup: 'av-symbol',
    label: 'repeat single button',
    tags: [
      'arrow',
      'clockwise',
      'once'
    ],
    shortcodes: [
      ':repeat-one:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 4256,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '▶️',
    hexcode: '25b6',
    category: 'Symbols',
    subgroup: 'av-symbol',
    label: 'play button',
    tags: [
      'arrow',
      'play',
      'right',
      'triangle'
    ],
    shortcodes: [
      ':arrow-forward:',
      ':play-button:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4258,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '⏩️',
    hexcode: '23e9',
    category: 'Symbols',
    subgroup: 'av-symbol',
    label: 'fast-forward button',
    tags: [
      'arrow',
      'double',
      'fast',
      'forward'
    ],
    shortcodes: [
      ':fast-forward:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4259,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '⏭️',
    hexcode: '23ed',
    category: 'Symbols',
    subgroup: 'av-symbol',
    label: 'next track button',
    tags: [
      'arrow',
      'next scene',
      'next track',
      'triangle'
    ],
    shortcodes: [
      ':next-track:',
      ':play-next:',
      ':next:',
      ':right-pointing-double-triangle-with-vertical-bar:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 4261,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '⏯️',
    hexcode: '23ef',
    category: 'Symbols',
    subgroup: 'av-symbol',
    label: 'play or pause button',
    tags: [
      'arrow',
      'pause',
      'play',
      'right',
      'triangle'
    ],
    shortcodes: [
      ':play-or-pause:',
      ':right-pointing-triangle-with-double-vertical-bar:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 4263,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '◀️',
    hexcode: '25c0',
    category: 'Symbols',
    subgroup: 'av-symbol',
    label: 'reverse button',
    tags: [
      'arrow',
      'left',
      'reverse',
      'triangle'
    ],
    shortcodes: [
      ':reverse:',
      ':leftwards-triangle:',
      ':arrow-backward:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4265,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '⏪️',
    hexcode: '23ea',
    category: 'Symbols',
    subgroup: 'av-symbol',
    label: 'fast reverse button',
    tags: [
      'arrow',
      'double',
      'rewind'
    ],
    shortcodes: [
      ':rewind:',
      ':leftwards-double-triangles:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4266,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '⏮️',
    hexcode: '23ee',
    category: 'Symbols',
    subgroup: 'av-symbol',
    label: 'last track button',
    tags: [
      'arrow',
      'previous scene',
      'previous track',
      'triangle'
    ],
    shortcodes: [
      ':previous:',
      ':left-pointing-double-triangle-with-vertical-bar:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 4268,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🔼',
    hexcode: '1f53c',
    category: 'Symbols',
    subgroup: 'av-symbol',
    label: 'upwards button',
    tags: [
      'arrow',
      'button',
      'improve'
    ],
    shortcodes: [
      ':upwards:',
      ':arrow-up:',
      ':triangle-up:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4269,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '⏫',
    hexcode: '23eb',
    category: 'Symbols',
    subgroup: 'av-symbol',
    label: 'fast up button',
    tags: [
      'arrow',
      'double'
    ],
    shortcodes: [
      ':fast-up:',
      ':double-triangle-up:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4270,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🔽',
    hexcode: '1f53d',
    category: 'Symbols',
    subgroup: 'av-symbol',
    label: 'downwards button',
    tags: [
      'arrow',
      'button',
      'down',
      'decline',
      'decrease'
    ],
    shortcodes: [
      ':downwards:',
      ':arrow-down:',
      ':triangle-down:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4271,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '⏬',
    hexcode: '23ec',
    category: 'Symbols',
    subgroup: 'av-symbol',
    label: 'fast down button',
    tags: [
      'arrow',
      'double',
      'down'
    ],
    shortcodes: [
      ':fast-down:',
      ':double-triangle-down:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4272,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '⏸️',
    hexcode: '23f8',
    category: 'Symbols',
    subgroup: 'av-symbol',
    label: 'pause button',
    tags: [
      'bar',
      'double',
      'pause',
      'vertical'
    ],
    shortcodes: [
      ':pause:',
      ':double-vertical-bar:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 4274,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '⏹️',
    hexcode: '23f9',
    category: 'Symbols',
    subgroup: 'av-symbol',
    label: 'stop button',
    tags: [
      'square',
      'stop'
    ],
    shortcodes: [
      ':stop-button:',
      ':square-button:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 4276,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '⏺️',
    hexcode: '23fa',
    category: 'Symbols',
    subgroup: 'av-symbol',
    label: 'record button',
    tags: [
      'circle',
      'record'
    ],
    shortcodes: [
      ':record:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.7,
    order: 4278,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '⏏️',
    hexcode: '23cf',
    category: 'Symbols',
    subgroup: 'av-symbol',
    label: 'eject button',
    tags: [
      'eject'
    ],
    shortcodes: [
      ':eject:',
      ':triangle-up-with-horizontal-bar:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 4280,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🎦',
    hexcode: '1f3a6',
    category: 'Symbols',
    subgroup: 'av-symbol',
    label: 'cinema',
    tags: [
      'camera',
      'film',
      'movie'
    ],
    shortcodes: [
      ':cinema:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4281,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🔅',
    hexcode: '1f505',
    category: 'Symbols',
    subgroup: 'av-symbol',
    label: 'dim button',
    tags: [
      'brightness',
      'dim',
      'low'
    ],
    shortcodes: [
      ':dim:',
      ':dimness:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 4282,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🔆',
    hexcode: '1f506',
    category: 'Symbols',
    subgroup: 'av-symbol',
    label: 'bright button',
    tags: [
      'bright',
      'brightness'
    ],
    shortcodes: [
      ':bright:',
      ':brightness:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 4283,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '📶',
    hexcode: '1f4f6',
    category: 'Symbols',
    subgroup: 'av-symbol',
    label: 'antenna bars',
    tags: [
      'antenna',
      'bar',
      'cell',
      'mobile',
      'phone'
    ],
    shortcodes: [
      ':signal-strength:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4284,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🛜',
    hexcode: '1f6dc',
    category: 'Symbols',
    subgroup: 'av-symbol',
    label: 'wireless',
    tags: [
      'computer',
      'internet',
      'network'
    ],
    shortcodes: [
      ':wireless:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 15,
    order: 4285,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '📳',
    hexcode: '1f4f3',
    category: 'Symbols',
    subgroup: 'av-symbol',
    label: 'vibration mode',
    tags: [
      'cell',
      'mobile',
      'mode',
      'phone',
      'telephone',
      'vibration',
      'silent mode'
    ],
    shortcodes: [
      ':vibration:',
      ':vibration-mode:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4286,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '📴',
    hexcode: '1f4f4',
    category: 'Symbols',
    subgroup: 'av-symbol',
    label: 'mobile phone off',
    tags: [
      'cell',
      'mobile',
      'off',
      'phone',
      'telephone',
      'caos'
    ],
    shortcodes: [
      ':phone-off:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4287,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '♀️',
    hexcode: '2640',
    category: 'Symbols',
    subgroup: 'gender',
    label: 'female sign',
    tags: [
      'woman',
      'sign',
      'gender'
    ],
    shortcodes: [
      ':female-sign:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 4,
    order: 4289,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '♂️',
    hexcode: '2642',
    category: 'Symbols',
    subgroup: 'gender',
    label: 'male sign',
    tags: [
      'man',
      'sign',
      'gender'
    ],
    shortcodes: [
      ':male-sign:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 4,
    order: 4291,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '⚧️',
    hexcode: '26a7',
    category: 'Symbols',
    subgroup: 'gender',
    label: 'transgender symbol',
    tags: [
      'transgender',
      'lgbt',
      'trans',
      'queer',
      'gender'
    ],
    shortcodes: [
      ':trans-sign:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 13,
    order: 4293,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '✖️',
    hexcode: '2716',
    category: 'Symbols',
    subgroup: 'math',
    label: 'multiply',
    tags: [
      'cancel',
      'multiplication',
      'sign',
      'x',
      'wrong'
    ],
    shortcodes: [
      ':multiplication-x:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4295,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '➕',
    hexcode: '2795',
    category: 'Symbols',
    subgroup: 'math',
    label: 'plus',
    tags: [
      '+',
      'math',
      'sign',
      'plus'
    ],
    shortcodes: [
      ':plus-sign:',
      ':+:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4296,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '➖',
    hexcode: '2796',
    category: 'Symbols',
    subgroup: 'math',
    label: 'minus',
    tags: [
      '-',
      'math',
      'sign',
      '−',
      'minus'
    ],
    shortcodes: [
      ':minus-sign:',
      ':-:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4297,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '➗',
    hexcode: '2797',
    category: 'Symbols',
    subgroup: 'math',
    label: 'divide',
    tags: [
      'division',
      'math',
      'sign',
      '÷'
    ],
    shortcodes: [
      ':division-sign:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4298,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🟰',
    hexcode: '1f7f0',
    category: 'Symbols',
    subgroup: 'math',
    label: 'heavy equals sign',
    tags: [
      'equality',
      'math'
    ],
    shortcodes: [
      ':equals-sign:',
      ':=:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 14,
    order: 4299,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '♾️',
    hexcode: '267e',
    category: 'Symbols',
    subgroup: 'math',
    label: 'infinity',
    tags: [
      'forever',
      'unbounded',
      'universal'
    ],
    shortcodes: [
      ':infinity:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 11,
    order: 4301,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '‼️',
    hexcode: '203c',
    category: 'Symbols',
    subgroup: 'punctuation',
    label: 'double exclamation mark',
    tags: [
      '!',
      '!!',
      'bangbang',
      'exclamation',
      'mark'
    ],
    shortcodes: [
      ':exclamation-double:',
      ':!!:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4303,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '⁉️',
    hexcode: '2049',
    category: 'Symbols',
    subgroup: 'punctuation',
    label: 'exclamation question mark',
    tags: [
      '!',
      '?',
      'exclamation',
      'interrobang',
      'mark',
      'punctuation',
      'question'
    ],
    shortcodes: [
      ':exclamation-question-mark:',
      ':!?:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4305,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '❓️',
    hexcode: '2753',
    category: 'Symbols',
    subgroup: 'punctuation',
    label: 'red question mark',
    tags: [
      '?',
      'mark',
      'punctuation',
      'question'
    ],
    shortcodes: [
      ':question:',
      ':question-mark:',
      ':?:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4306,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '❔',
    hexcode: '2754',
    category: 'Symbols',
    subgroup: 'punctuation',
    label: 'white question mark',
    tags: [
      '?',
      'mark',
      'outlined',
      'punctuation',
      'question',
      'white'
    ],
    shortcodes: [
      ':question-mark-white:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4307,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '❕',
    hexcode: '2755',
    category: 'Symbols',
    subgroup: 'punctuation',
    label: 'white exclamation mark',
    tags: [
      '!',
      'exclamation',
      'mark',
      'outlined',
      'punctuation',
      'white'
    ],
    shortcodes: [
      ':exclamation-mark-white:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4308,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '❗️',
    hexcode: '2757',
    category: 'Symbols',
    subgroup: 'punctuation',
    label: 'red exclamation mark',
    tags: [
      '!',
      'exclamation',
      'mark',
      'punctuation'
    ],
    shortcodes: [
      ':exclamation:',
      ':exclamation-mark:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4309,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '〰️',
    hexcode: '3030',
    category: 'Symbols',
    subgroup: 'punctuation',
    label: 'wavy dash',
    tags: [
      'dash',
      'punctuation',
      'wavy'
    ],
    shortcodes: [
      ':wavy-dash:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4311,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '💱',
    hexcode: '1f4b1',
    category: 'Symbols',
    subgroup: 'currency',
    label: 'currency exchange',
    tags: [
      'bank',
      'currency',
      'exchange',
      'money'
    ],
    shortcodes: [
      ':currency-exchange:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4312,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '💲',
    hexcode: '1f4b2',
    category: 'Symbols',
    subgroup: 'currency',
    label: 'heavy dollar sign',
    tags: [
      'currency',
      'dollar',
      'money'
    ],
    shortcodes: [
      ':dollar-sign:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4313,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '⚕️',
    hexcode: '2695',
    category: 'Symbols',
    subgroup: 'other-symbol',
    label: 'medical symbol',
    tags: [
      'aesculapius',
      'medicine',
      'staff',
      'medical'
    ],
    shortcodes: [
      ':medical-symbol:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 4,
    order: 4315,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '♻️',
    hexcode: '267b',
    category: 'Symbols',
    subgroup: 'other-symbol',
    label: 'recycling symbol',
    tags: [
      'recycle',
      'nature'
    ],
    shortcodes: [
      ':recycling-symbol:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4317,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '⚜️',
    hexcode: '269c',
    category: 'Symbols',
    subgroup: 'other-symbol',
    label: 'fleur-de-lis',
    tags: [
      'fleur-de-lis'
    ],
    shortcodes: [
      ':fleur-de-lis:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 4319,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🔱',
    hexcode: '1f531',
    category: 'Symbols',
    subgroup: 'other-symbol',
    label: 'trident emblem',
    tags: [
      'anchor',
      'emblem',
      'ship',
      'tool',
      'trident'
    ],
    shortcodes: [
      ':trident-emblem:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4320,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  // {
  //   type: 'emoji',
  //   symbol: '📛',
  //   hexcode: '1f4db',
  //   category: 'Symbols',
  //   subgroup: 'other-symbol',
  //   label: 'name badge',
  //   tags: [
  //     'badge',
  //     'name'
  //   ],
  //   shortcodes: [
  //     ':name-badge:'
  //   ],
  //   emoticons: [],
  //   directional: false,
  //   variation: false,
  //   variationBase: null,
  //   unicode: 0.6,
  //   order: 4321,
  //   skintone: null,
  //   skintoneCombination: null,
  //   skintoneBase: null
  // },
  // {
  //   type: 'emoji',
  //   symbol: '🔰',
  //   hexcode: '1f530',
  //   category: 'Symbols',
  //   subgroup: 'other-symbol',
  //   label: 'Japanese symbol for beginner',
  //   tags: [
  //     'beginner',
  //     'chevron',
  //     'japanese',
  //     'japanese symbol for beginner',
  //     'leaf'
  //   ],
  //   shortcodes: [
  //     ':Japanese-symbol-for-beginner:',
  //     ':beginner:'
  //   ],
  //   emoticons: [],
  //   directional: false,
  //   variation: false,
  //   variationBase: null,
  //   unicode: 0.6,
  //   order: 4322,
  //   skintone: null,
  //   skintoneCombination: null,
  //   skintoneBase: null
  // },
  {
    type: 'emoji',
    symbol: '⭕️',
    hexcode: '2b55',
    category: 'Symbols',
    subgroup: 'other-symbol',
    label: 'hollow red circle',
    tags: [
      'circle',
      'large',
      'o',
      'red'
    ],
    shortcodes: [
      ':large-circle:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4323,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '✅',
    hexcode: '2705',
    category: 'Symbols',
    subgroup: 'other-symbol',
    label: 'check mark button',
    tags: [
      'button',
      'check',
      'mark',
      '✓',
      'white',
      'right'
    ],
    shortcodes: [
      ':check-mark:',
      ':check-mark-green:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4324,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '☑️',
    hexcode: '2611',
    category: 'Symbols',
    subgroup: 'other-symbol',
    label: 'check box with check',
    tags: [
      'box',
      'check',
      '✓',
      'right'
    ],
    shortcodes: [
      ':check-mark-button:',
      ':vote:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4326,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '✔️',
    hexcode: '2714',
    category: 'Symbols',
    subgroup: 'other-symbol',
    label: 'check mark',
    tags: [
      'check',
      'mark',
      '✓',
      'right',
      'todo'
    ],
    shortcodes: [
      ':check-mark-black:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4328,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '❌',
    hexcode: '274c',
    category: 'Symbols',
    subgroup: 'other-symbol',
    label: 'cross mark',
    tags: [
      'cancel',
      'cross',
      'mark',
      'multiplication',
      'multiply',
      'x',
      '×',
      'wrong'
    ],
    shortcodes: [
      ':x:',
      ':cross-mark:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4329,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '❎',
    hexcode: '274e',
    category: 'Symbols',
    subgroup: 'other-symbol',
    label: 'cross mark button',
    tags: [
      'mark',
      'square',
      'x',
      '×',
      'button'
    ],
    shortcodes: [
      ':x-mark:',
      ':cross mark button:',
      ':no-mark:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4330,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '➰',
    hexcode: '27b0',
    category: 'Symbols',
    subgroup: 'other-symbol',
    label: 'curly loop',
    tags: [
      'curl',
      'loop'
    ],
    shortcodes: [
      ':curly-loop:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4331,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '➿',
    hexcode: '27bf',
    category: 'Symbols',
    subgroup: 'other-symbol',
    label: 'double curly loop',
    tags: [
      'curl',
      'double',
      'loop'
    ],
    shortcodes: [
      ':curly-loop-double:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 1,
    order: 4332,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '〽️',
    hexcode: '303d',
    category: 'Symbols',
    subgroup: 'other-symbol',
    label: 'part alternation mark',
    tags: [
      'mark',
      'part'
    ],
    shortcodes: [
      ':part-alternation-mark:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4334,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '✳️',
    hexcode: '2733',
    category: 'Symbols',
    subgroup: 'other-symbol',
    label: 'eight-spoked asterisk',
    tags: [
      '*',
      'asterisk'
    ],
    shortcodes: [
      ':eight-spoked-asterisk:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4336,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '✴️',
    hexcode: '2734',
    category: 'Symbols',
    subgroup: 'other-symbol',
    label: 'eight-pointed star',
    tags: [
      '*',
      'star'
    ],
    shortcodes: [
      ':eight-pointed-star:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4338,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '❇️',
    hexcode: '2747',
    category: 'Symbols',
    subgroup: 'other-symbol',
    label: 'sparkle',
    tags: [
      '*'
    ],
    shortcodes: [
      ':sparkle:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4340,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '©️',
    hexcode: '00a9',
    category: 'Symbols',
    subgroup: 'other-symbol',
    label: 'copyright',
    tags: [
      'c',
      'copyright',
      'sign'
    ],
    shortcodes: [
      ':copyright:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4342,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '®️',
    hexcode: '00ae',
    category: 'Symbols',
    subgroup: 'other-symbol',
    label: 'registered',
    tags: [
      'r',
      'registered',
      'sign'
    ],
    shortcodes: [
      ':registered:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4344,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '™️',
    hexcode: '2122',
    category: 'Symbols',
    subgroup: 'other-symbol',
    label: 'trade mark',
    tags: [
      'mark',
      'tm',
      'trademark'
    ],
    shortcodes: [
      ':trade-mark:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4346,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '#️⃣',
    hexcode: '0023-fe0f-20e3',
    category: 'Symbols',
    subgroup: 'keycap',
    label: 'keycap: #',
    tags: [
      'keycap'
    ],
    shortcodes: [
      ':#:',
      ':number-sign:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4347,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '*️⃣',
    hexcode: '002a-fe0f-20e3',
    category: 'Symbols',
    subgroup: 'keycap',
    label: 'keycap: *',
    tags: [
      'keycap'
    ],
    shortcodes: [
      ':asterisk:',
      ':keycap-asterisk:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 2,
    order: 4349,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '0️⃣',
    hexcode: '0030-fe0f-20e3',
    category: 'Symbols',
    subgroup: 'keycap',
    label: 'keycap: 0',
    tags: [
      'keycap'
    ],
    shortcodes: [
      ':zero:',
      ':keycap-zero:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4351,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '1️⃣',
    hexcode: '0031-fe0f-20e3',
    category: 'Symbols',
    subgroup: 'keycap',
    label: 'keycap: 1',
    tags: [
      'keycap'
    ],
    shortcodes: [
      ':one:',
      ':keycap-one:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4353,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '2️⃣',
    hexcode: '0032-fe0f-20e3',
    category: 'Symbols',
    subgroup: 'keycap',
    label: 'keycap: 2',
    tags: [
      'keycap'
    ],
    shortcodes: [
      ':two:',
      ':keycap-two:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4355,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '3️⃣',
    hexcode: '0033-fe0f-20e3',
    category: 'Symbols',
    subgroup: 'keycap',
    label: 'keycap: 3',
    tags: [
      'keycap'
    ],
    shortcodes: [
      ':three:',
      ':keycap-three:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4357,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '4️⃣',
    hexcode: '0034-fe0f-20e3',
    category: 'Symbols',
    subgroup: 'keycap',
    label: 'keycap: 4',
    tags: [
      'keycap'
    ],
    shortcodes: [
      ':four:',
      ':keycap-four:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4359,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '5️⃣',
    hexcode: '0035-fe0f-20e3',
    category: 'Symbols',
    subgroup: 'keycap',
    label: 'keycap: 5',
    tags: [
      'keycap'
    ],
    shortcodes: [
      ':five:',
      ':keycap-five:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4361,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '6️⃣',
    hexcode: '0036-fe0f-20e3',
    category: 'Symbols',
    subgroup: 'keycap',
    label: 'keycap: 6',
    tags: [
      'keycap'
    ],
    shortcodes: [
      ':six:',
      ':keycap-six:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4363,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '7️⃣',
    hexcode: '0037-fe0f-20e3',
    category: 'Symbols',
    subgroup: 'keycap',
    label: 'keycap: 7',
    tags: [
      'keycap'
    ],
    shortcodes: [
      ':seven:',
      ':keycap-seven:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4365,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '8️⃣',
    hexcode: '0038-fe0f-20e3',
    category: 'Symbols',
    subgroup: 'keycap',
    label: 'keycap: 8',
    tags: [
      'keycap'
    ],
    shortcodes: [
      ':eight:',
      ':keycap-eight:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4367,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '9️⃣',
    hexcode: '0039-fe0f-20e3',
    category: 'Symbols',
    subgroup: 'keycap',
    label: 'keycap: 9',
    tags: [
      'keycap'
    ],
    shortcodes: [
      ':nine:',
      ':keycap-nine:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4369,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🔟',
    hexcode: '1f51f',
    category: 'Symbols',
    subgroup: 'keycap',
    label: 'keycap: 10',
    tags: [
      'keycap'
    ],
    shortcodes: [
      ':ten:',
      ':keycap-ten:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4371,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🔠',
    hexcode: '1f520',
    category: 'Symbols',
    subgroup: 'alphanum',
    label: 'input latin uppercase',
    tags: [
      'abcd',
      'input',
      'latin',
      'letters',
      'uppercase',
      'alphabet'
    ],
    shortcodes: [
      ':uppercase-letters:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4372,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🔡',
    hexcode: '1f521',
    category: 'Symbols',
    subgroup: 'alphanum',
    label: 'input latin lowercase',
    tags: [
      'abcd',
      'input',
      'latin',
      'letters',
      'lowercase',
      'alphabet'
    ],
    shortcodes: [
      ':lowercase-letters:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4373,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🔢',
    hexcode: '1f522',
    category: 'Symbols',
    subgroup: 'alphanum',
    label: 'input numbers',
    tags: [
      '1234',
      'input',
      'numbers'
    ],
    shortcodes: [
      ':numbers:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4374,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🔣',
    hexcode: '1f523',
    category: 'Symbols',
    subgroup: 'alphanum',
    label: 'input Symbols',
    tags: [
      'input',
      '〒♪&%',
      'ampersand',
      'music',
      'note',
      'percentage'
    ],
    shortcodes: [
      ':Symbols:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4375,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🔤',
    hexcode: '1f524',
    category: 'Symbols',
    subgroup: 'alphanum',
    label: 'input latin letters',
    tags: [
      'abc',
      'alphabet',
      'input',
      'latin',
      'letters'
    ],
    shortcodes: [
      ':letters:',
      ':abc:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4376,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  // {
  //   type: 'emoji',
  //   symbol: '🅰️',
  //   hexcode: '1f170',
  //   category: 'Symbols',
  //   subgroup: 'alphanum',
  //   label: 'A button (blood type)',
  //   tags: [
  //     'a',
  //     'a button (blood type)',
  //     'blood type'
  //   ],
  //   shortcodes: [
  //     ':a-button:',
  //     ':blood-type-a:'
  //   ],
  //   emoticons: [],
  //   directional: false,
  //   variation: false,
  //   variationBase: null,
  //   unicode: 0.6,
  //   order: 4378,
  //   skintone: null,
  //   skintoneCombination: null,
  //   skintoneBase: null
  // },
  // {
  //   type: 'emoji',
  //   symbol: '🆎',
  //   hexcode: '1f18e',
  //   category: 'Symbols',
  //   subgroup: 'alphanum',
  //   label: 'AB button (blood type)',
  //   tags: [
  //     'ab',
  //     'ab button (blood type)',
  //     'blood type'
  //   ],
  //   shortcodes: [
  //     ':ab-button:',
  //     ':blood-type-ab:'
  //   ],
  //   emoticons: [],
  //   directional: false,
  //   variation: false,
  //   variationBase: null,
  //   unicode: 0.6,
  //   order: 4379,
  //   skintone: null,
  //   skintoneCombination: null,
  //   skintoneBase: null
  // },
  // {
  //   type: 'emoji',
  //   symbol: '🅱️',
  //   hexcode: '1f171',
  //   category: 'Symbols',
  //   subgroup: 'alphanum',
  //   label: 'B button (blood type)',
  //   tags: [
  //     'b',
  //     'b button (blood type)',
  //     'blood type'
  //   ],
  //   shortcodes: [
  //     ':b-button:',
  //     ':blood-type-b:'
  //   ],
  //   emoticons: [],
  //   directional: false,
  //   variation: false,
  //   variationBase: null,
  //   unicode: 0.6,
  //   order: 4381,
  //   skintone: null,
  //   skintoneCombination: null,
  //   skintoneBase: null
  // },
  // {
  //   type: 'emoji',
  //   symbol: '🆑',
  //   hexcode: '1f191',
  //   category: 'Symbols',
  //   subgroup: 'alphanum',
  //   label: 'CL button',
  //   tags: [
  //     'cl',
  //     'cl button'
  //   ],
  //   shortcodes: [
  //     ':cl-button:'
  //   ],
  //   emoticons: [],
  //   directional: false,
  //   variation: false,
  //   variationBase: null,
  //   unicode: 0.6,
  //   order: 4382,
  //   skintone: null,
  //   skintoneCombination: null,
  //   skintoneBase: null
  // },
  // {
  //   type: 'emoji',
  //   symbol: '🆒',
  //   hexcode: '1f192',
  //   category: 'Symbols',
  //   subgroup: 'alphanum',
  //   label: 'COOL button',
  //   tags: [
  //     'cool',
  //     'cool button',
  //     'popular',
  //     'nice'
  //   ],
  //   shortcodes: [
  //     ':cool:'
  //   ],
  //   emoticons: [],
  //   directional: false,
  //   variation: false,
  //   variationBase: null,
  //   unicode: 0.6,
  //   order: 4383,
  //   skintone: null,
  //   skintoneCombination: null,
  //   skintoneBase: null
  // },
  // {
  //   type: 'emoji',
  //   symbol: '🆓',
  //   hexcode: '1f193',
  //   category: 'Symbols',
  //   subgroup: 'alphanum',
  //   label: 'FREE button',
  //   tags: [
  //     'free',
  //     'free button'
  //   ],
  //   shortcodes: [
  //     ':free:'
  //   ],
  //   emoticons: [],
  //   directional: false,
  //   variation: false,
  //   variationBase: null,
  //   unicode: 0.6,
  //   order: 4384,
  //   skintone: null,
  //   skintoneCombination: null,
  //   skintoneBase: null
  // },
  // {
  //   type: 'emoji',
  //   symbol: 'ℹ️',
  //   hexcode: '2139',
  //   category: 'Symbols',
  //   subgroup: 'alphanum',
  //   label: 'information',
  //   tags: [
  //     'i',
  //     'advice',
  //     'info'
  //   ],
  //   shortcodes: [
  //     ':information:'
  //   ],
  //   emoticons: [],
  //   directional: false,
  //   variation: false,
  //   variationBase: null,
  //   unicode: 0.6,
  //   order: 4386,
  //   skintone: null,
  //   skintoneCombination: null,
  //   skintoneBase: null
  // },
  // {
  //   type: 'emoji',
  //   symbol: '🆔',
  //   hexcode: '1f194',
  //   category: 'Symbols',
  //   subgroup: 'alphanum',
  //   label: 'ID button',
  //   tags: [
  //     'id',
  //     'id button',
  //     'identity',
  //     'id card'
  //   ],
  //   shortcodes: [
  //     ':id-button:'
  //   ],
  //   emoticons: [],
  //   directional: false,
  //   variation: false,
  //   variationBase: null,
  //   unicode: 0.6,
  //   order: 4387,
  //   skintone: null,
  //   skintoneCombination: null,
  //   skintoneBase: null
  // },
  // {
  //   type: 'emoji',
  //   symbol: 'Ⓜ️',
  //   hexcode: '24c2',
  //   category: 'Symbols',
  //   subgroup: 'alphanum',
  //   label: 'circled M',
  //   tags: [
  //     'circle',
  //     'circled m',
  //     'm'
  //   ],
  //   shortcodes: [
  //     ':metro-sign:',
  //     ':circled-m:'
  //   ],
  //   emoticons: [],
  //   directional: false,
  //   variation: false,
  //   variationBase: null,
  //   unicode: 0.6,
  //   order: 4389,
  //   skintone: null,
  //   skintoneCombination: null,
  //   skintoneBase: null
  // },
  // {
  //   type: 'emoji',
  //   symbol: '🆕',
  //   hexcode: '1f195',
  //   category: 'Symbols',
  //   subgroup: 'alphanum',
  //   label: 'NEW button',
  //   tags: [
  //     'new',
  //     'new button',
  //     'modern',
  //     'recent'
  //   ],
  //   shortcodes: [
  //     ':new:'
  //   ],
  //   emoticons: [],
  //   directional: false,
  //   variation: false,
  //   variationBase: null,
  //   unicode: 0.6,
  //   order: 4390,
  //   skintone: null,
  //   skintoneCombination: null,
  //   skintoneBase: null
  // },
  // {
  //   type: 'emoji',
  //   symbol: '🆖',
  //   hexcode: '1f196',
  //   category: 'Symbols',
  //   subgroup: 'alphanum',
  //   label: 'NG button',
  //   tags: [
  //     'ng',
  //     'ng button'
  //   ],
  //   shortcodes: [
  //     ':ng:'
  //   ],
  //   emoticons: [],
  //   directional: false,
  //   variation: false,
  //   variationBase: null,
  //   unicode: 0.6,
  //   order: 4391,
  //   skintone: null,
  //   skintoneCombination: null,
  //   skintoneBase: null
  // },
  // {
  //   type: 'emoji',
  //   symbol: '🅾️',
  //   hexcode: '1f17e',
  //   category: 'Symbols',
  //   subgroup: 'alphanum',
  //   label: 'O button (blood type)',
  //   tags: [
  //     'blood type',
  //     'o',
  //     'o button (blood type)'
  //   ],
  //   shortcodes: [
  //     ':o-button:',
  //     ':blood-type-o:'
  //   ],
  //   emoticons: [],
  //   directional: false,
  //   variation: false,
  //   variationBase: null,
  //   unicode: 0.6,
  //   order: 4393,
  //   skintone: null,
  //   skintoneCombination: null,
  //   skintoneBase: null
  // },
  // {
  //   type: 'emoji',
  //   symbol: '🆗',
  //   hexcode: '1f197',
  //   category: 'Symbols',
  //   subgroup: 'alphanum',
  //   label: 'OK button',
  //   tags: [
  //     'ok',
  //     'ok button',
  //     'okay'
  //   ],
  //   shortcodes: [
  //     ':ok-button:'
  //   ],
  //   emoticons: [],
  //   directional: false,
  //   variation: false,
  //   variationBase: null,
  //   unicode: 0.6,
  //   order: 4394,
  //   skintone: null,
  //   skintoneCombination: null,
  //   skintoneBase: null
  // },
  // {
  //   type: 'emoji',
  //   symbol: '🅿️',
  //   hexcode: '1f17f',
  //   category: 'Symbols',
  //   subgroup: 'alphanum',
  //   label: 'P button',
  //   tags: [
  //     'p',
  //     'p button',
  //     'parking',
  //     'place',
  //     'drive'
  //   ],
  //   shortcodes: [
  //     ':Parking:'
  //   ],
  //   emoticons: [],
  //   directional: false,
  //   variation: false,
  //   variationBase: null,
  //   unicode: 0.6,
  //   order: 4396,
  //   skintone: null,
  //   skintoneCombination: null,
  //   skintoneBase: null
  // },
  // {
  //   type: 'emoji',
  //   symbol: '🆘',
  //   hexcode: '1f198',
  //   category: 'Symbols',
  //   subgroup: 'alphanum',
  //   label: 'SOS button',
  //   tags: [
  //     'help',
  //     'sos',
  //     'sos button',
  //     'emergency',
  //     'warning'
  //   ],
  //   shortcodes: [
  //     ':sos:'
  //   ],
  //   emoticons: [],
  //   directional: false,
  //   variation: false,
  //   variationBase: null,
  //   unicode: 0.6,
  //   order: 4397,
  //   skintone: null,
  //   skintoneCombination: null,
  //   skintoneBase: null
  // },
  {
    type: 'emoji',
    symbol: '🆙',
    hexcode: '1f199',
    category: 'Symbols',
    subgroup: 'alphanum',
    label: 'UP! button',
    tags: [
      'mark',
      'up',
      'up!',
      'up! button'
    ],
    shortcodes: [
      ':up!:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4398,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🆚',
    hexcode: '1f19a',
    category: 'Symbols',
    subgroup: 'alphanum',
    label: 'VS button',
    tags: [
      'versus',
      'vs',
      'vs button',
      'against'
    ],
    shortcodes: [
      ':vs:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4399,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  // {
  //   type: 'emoji',
  //   symbol: '🈁',
  //   hexcode: '1f201',
  //   category: 'Symbols',
  //   subgroup: 'alphanum',
  //   label: 'Japanese “here” button',
  //   tags: [
  //     'japanese',
  //     'japanese “here” button',
  //     'katakana',
  //     '“here”',
  //     'ココ'
  //   ],
  //   shortcodes: [
  //     ':here:'
  //   ],
  //   emoticons: [],
  //   directional: false,
  //   variation: false,
  //   variationBase: null,
  //   unicode: 0.6,
  //   order: 4400,
  //   skintone: null,
  //   skintoneCombination: null,
  //   skintoneBase: null
  // },
  // {
  //   type: 'emoji',
  //   symbol: '🈂️',
  //   hexcode: '1f202',
  //   category: 'Symbols',
  //   subgroup: 'alphanum',
  //   label: 'Japanese “service charge” button',
  //   tags: [
  //     'japanese',
  //     'japanese “service charge” button',
  //     'katakana',
  //     '“service charge”',
  //     'サ'
  //   ],
  //   shortcodes: [
  //     ':service-charge:'
  //   ],
  //   emoticons: [],
  //   directional: false,
  //   variation: false,
  //   variationBase: null,
  //   unicode: 0.6,
  //   order: 4402,
  //   skintone: null,
  //   skintoneCombination: null,
  //   skintoneBase: null
  // },
  // {
  //   type: 'emoji',
  //   symbol: '🈷️',
  //   hexcode: '1f237',
  //   category: 'Symbols',
  //   subgroup: 'alphanum',
  //   label: 'Japanese “monthly amount” button',
  //   tags: [
  //     'ideograph',
  //     'japanese',
  //     'japanese “monthly amount” button',
  //     '“monthly amount”',
  //     '月'
  //   ],
  //   shortcodes: [
  //     ':monthly-amount:'
  //   ],
  //   emoticons: [],
  //   directional: false,
  //   variation: false,
  //   variationBase: null,
  //   unicode: 0.6,
  //   order: 4404,
  //   skintone: null,
  //   skintoneCombination: null,
  //   skintoneBase: null
  // },
  // {
  //   type: 'emoji',
  //   symbol: '🈶',
  //   hexcode: '1f236',
  //   category: 'Symbols',
  //   subgroup: 'alphanum',
  //   label: 'Japanese “not free of charge” button',
  //   tags: [
  //     'ideograph',
  //     'japanese',
  //     'japanese “not free of charge” button',
  //     '“not free of charge”',
  //     '有'
  //   ],
  //   shortcodes: [
  //     ':not-free-of-charge:'
  //   ],
  //   emoticons: [],
  //   directional: false,
  //   variation: false,
  //   variationBase: null,
  //   unicode: 0.6,
  //   order: 4405,
  //   skintone: null,
  //   skintoneCombination: null,
  //   skintoneBase: null
  // },
  // {
  //   type: 'emoji',
  //   symbol: '🈯️',
  //   hexcode: '1f22f',
  //   category: 'Symbols',
  //   subgroup: 'alphanum',
  //   label: 'Japanese “reserved” button',
  //   tags: [
  //     'ideograph',
  //     'japanese',
  //     'japanese “reserved” button',
  //     '“reserved”',
  //     '指'
  //   ],
  //   shortcodes: [
  //     ':reserved:'
  //   ],
  //   emoticons: [],
  //   directional: false,
  //   variation: false,
  //   variationBase: null,
  //   unicode: 0.6,
  //   order: 4406,
  //   skintone: null,
  //   skintoneCombination: null,
  //   skintoneBase: null
  // },
  // {
  //   type: 'emoji',
  //   symbol: '🉐',
  //   hexcode: '1f250',
  //   category: 'Symbols',
  //   subgroup: 'alphanum',
  //   label: 'Japanese “bargain” button',
  //   tags: [
  //     'ideograph',
  //     'japanese',
  //     'japanese “bargain” button',
  //     '“bargain”',
  //     '得'
  //   ],
  //   shortcodes: [
  //     ':bargain:'
  //   ],
  //   emoticons: [],
  //   directional: false,
  //   variation: false,
  //   variationBase: null,
  //   unicode: 0.6,
  //   order: 4407,
  //   skintone: null,
  //   skintoneCombination: null,
  //   skintoneBase: null
  // },
  // {
  //   type: 'emoji',
  //   symbol: '🈹',
  //   hexcode: '1f239',
  //   category: 'Symbols',
  //   subgroup: 'alphanum',
  //   label: 'Japanese “discount” button',
  //   tags: [
  //     'ideograph',
  //     'japanese',
  //     'japanese “discount” button',
  //     '“discount”',
  //     '割'
  //   ],
  //   shortcodes: [
  //     ':discount:'
  //   ],
  //   emoticons: [],
  //   directional: false,
  //   variation: false,
  //   variationBase: null,
  //   unicode: 0.6,
  //   order: 4408,
  //   skintone: null,
  //   skintoneCombination: null,
  //   skintoneBase: null
  // },
  // {
  //   type: 'emoji',
  //   symbol: '🈚️',
  //   hexcode: '1f21a',
  //   category: 'Symbols',
  //   subgroup: 'alphanum',
  //   label: 'Japanese “free of charge” button',
  //   tags: [
  //     'ideograph',
  //     'japanese',
  //     'japanese “free of charge” button',
  //     '“free of charge”',
  //     '無'
  //   ],
  //   shortcodes: [
  //     ':free-of-charge:'
  //   ],
  //   emoticons: [],
  //   directional: false,
  //   variation: false,
  //   variationBase: null,
  //   unicode: 0.6,
  //   order: 4409,
  //   skintone: null,
  //   skintoneCombination: null,
  //   skintoneBase: null
  // },
  // {
  //   type: 'emoji',
  //   symbol: '🈲',
  //   hexcode: '1f232',
  //   category: 'Symbols',
  //   subgroup: 'alphanum',
  //   label: 'Japanese “prohibited” button',
  //   tags: [
  //     'ideograph',
  //     'japanese',
  //     'japanese “prohibited” button',
  //     '“prohibited”',
  //     '禁'
  //   ],
  //   shortcodes: [
  //     ':prohibited-button:'
  //   ],
  //   emoticons: [],
  //   directional: false,
  //   variation: false,
  //   variationBase: null,
  //   unicode: 0.6,
  //   order: 4410,
  //   skintone: null,
  //   skintoneCombination: null,
  //   skintoneBase: null
  // },
  // {
  //   type: 'emoji',
  //   symbol: '🉑',
  //   hexcode: '1f251',
  //   category: 'Symbols',
  //   subgroup: 'alphanum',
  //   label: 'Japanese “acceptable” button',
  //   tags: [
  //     'ideograph',
  //     'japanese',
  //     'japanese “acceptable” button',
  //     '“acceptable”',
  //     '可'
  //   ],
  //   shortcodes: [
  //     ':accept:'
  //   ],
  //   emoticons: [],
  //   directional: false,
  //   variation: false,
  //   variationBase: null,
  //   unicode: 0.6,
  //   order: 4411,
  //   skintone: null,
  //   skintoneCombination: null,
  //   skintoneBase: null
  // },
  // {
  //   type: 'emoji',
  //   symbol: '🈸',
  //   hexcode: '1f238',
  //   category: 'Symbols',
  //   subgroup: 'alphanum',
  //   label: 'Japanese “application” button',
  //   tags: [
  //     'ideograph',
  //     'japanese',
  //     'japanese “application” button',
  //     '“application”',
  //     '申'
  //   ],
  //   shortcodes: [
  //     ':application:'
  //   ],
  //   emoticons: [],
  //   directional: false,
  //   variation: false,
  //   variationBase: null,
  //   unicode: 0.6,
  //   order: 4412,
  //   skintone: null,
  //   skintoneCombination: null,
  //   skintoneBase: null
  // },
  // {
  //   type: 'emoji',
  //   symbol: '🈴',
  //   hexcode: '1f234',
  //   category: 'Symbols',
  //   subgroup: 'alphanum',
  //   label: 'Japanese “passing grade” button',
  //   tags: [
  //     'ideograph',
  //     'japanese',
  //     'japanese “passing grade” button',
  //     '“passing grade”',
  //     '合'
  //   ],
  //   shortcodes: [
  //     ':passing-grade:'
  //   ],
  //   emoticons: [],
  //   directional: false,
  //   variation: false,
  //   variationBase: null,
  //   unicode: 0.6,
  //   order: 4413,
  //   skintone: null,
  //   skintoneCombination: null,
  //   skintoneBase: null
  // },
  // {
  //   type: 'emoji',
  //   symbol: '🈳',
  //   hexcode: '1f233',
  //   category: 'Symbols',
  //   subgroup: 'alphanum',
  //   label: 'Japanese “vacancy” button',
  //   tags: [
  //     'ideograph',
  //     'japanese',
  //     'japanese “vacancy” button',
  //     '“vacancy”',
  //     '空'
  //   ],
  //   shortcodes: [
  //     ':vacancy:'
  //   ],
  //   emoticons: [],
  //   directional: false,
  //   variation: false,
  //   variationBase: null,
  //   unicode: 0.6,
  //   order: 4414,
  //   skintone: null,
  //   skintoneCombination: null,
  //   skintoneBase: null
  // },
  // {
  //   type: 'emoji',
  //   symbol: '㊗️',
  //   hexcode: '3297',
  //   category: 'Symbols',
  //   subgroup: 'alphanum',
  //   label: 'Japanese “congratulations” button',
  //   tags: [
  //     'ideograph',
  //     'japanese',
  //     'japanese “congratulations” button',
  //     '“congratulations”',
  //     '祝',
  //     'compliments'
  //   ],
  //   shortcodes: [
  //     ':congratulations:'
  //   ],
  //   emoticons: [],
  //   directional: false,
  //   variation: false,
  //   variationBase: null,
  //   unicode: 0.6,
  //   order: 4416,
  //   skintone: null,
  //   skintoneCombination: null,
  //   skintoneBase: null
  // },
  // {
  //   type: 'emoji',
  //   symbol: '㊙️',
  //   hexcode: '3299',
  //   category: 'Symbols',
  //   subgroup: 'alphanum',
  //   label: 'Japanese “secret” button',
  //   tags: [
  //     'ideograph',
  //     'japanese',
  //     'japanese “secret” button',
  //     '“secret”',
  //     '秘',
  //     'mysterious'
  //   ],
  //   shortcodes: [
  //     ':secret:'
  //   ],
  //   emoticons: [],
  //   directional: false,
  //   variation: false,
  //   variationBase: null,
  //   unicode: 0.6,
  //   order: 4418,
  //   skintone: null,
  //   skintoneCombination: null,
  //   skintoneBase: null
  // },
  // {
  //   type: 'emoji',
  //   symbol: '🈺',
  //   hexcode: '1f23a',
  //   category: 'Symbols',
  //   subgroup: 'alphanum',
  //   label: 'Japanese “open for business” button',
  //   tags: [
  //     'ideograph',
  //     'japanese',
  //     'japanese “open for business” button',
  //     '“open for business”',
  //     '営'
  //   ],
  //   shortcodes: [
  //     ':open-for-business:'
  //   ],
  //   emoticons: [],
  //   directional: false,
  //   variation: false,
  //   variationBase: null,
  //   unicode: 0.6,
  //   order: 4419,
  //   skintone: null,
  //   skintoneCombination: null,
  //   skintoneBase: null
  // },
  // {
  //   type: 'emoji',
  //   symbol: '🈵',
  //   hexcode: '1f235',
  //   category: 'Symbols',
  //   subgroup: 'alphanum',
  //   label: 'Japanese “no vacancy” button',
  //   tags: [
  //     'ideograph',
  //     'japanese',
  //     'japanese “no vacancy” button',
  //     '“no vacancy”',
  //     '満'
  //   ],
  //   shortcodes: [
  //     ':no-vacancy:'
  //   ],
  //   emoticons: [],
  //   directional: false,
  //   variation: false,
  //   variationBase: null,
  //   unicode: 0.6,
  //   order: 4420,
  //   skintone: null,
  //   skintoneCombination: null,
  //   skintoneBase: null
  // },
  {
    type: 'emoji',
    symbol: '🔴',
    hexcode: '1f534',
    category: 'Symbols',
    subgroup: 'geometric',
    label: 'red circle',
    tags: [
      'circle',
      'geometric',
      'red'
    ],
    shortcodes: [
      ':red-circle:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4421,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🟠',
    hexcode: '1f7e0',
    category: 'Symbols',
    subgroup: 'geometric',
    label: 'orange circle',
    tags: [
      'circle',
      'orange'
    ],
    shortcodes: [
      ':orange-circle:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12,
    order: 4422,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🟡',
    hexcode: '1f7e1',
    category: 'Symbols',
    subgroup: 'geometric',
    label: 'yellow circle',
    tags: [
      'circle',
      'yellow'
    ],
    shortcodes: [
      ':yellow-circle:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12,
    order: 4423,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🟢',
    hexcode: '1f7e2',
    category: 'Symbols',
    subgroup: 'geometric',
    label: 'green circle',
    tags: [
      'circle',
      'green'
    ],
    shortcodes: [
      ':green-circle:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12,
    order: 4424,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🔵',
    hexcode: '1f535',
    category: 'Symbols',
    subgroup: 'geometric',
    label: 'blue circle',
    tags: [
      'blue',
      'circle',
      'geometric'
    ],
    shortcodes: [
      ':blue-circle:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4425,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🟣',
    hexcode: '1f7e3',
    category: 'Symbols',
    subgroup: 'geometric',
    label: 'purple circle',
    tags: [
      'circle',
      'purple'
    ],
    shortcodes: [
      ':purple-circle:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12,
    order: 4426,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🟤',
    hexcode: '1f7e4',
    category: 'Symbols',
    subgroup: 'geometric',
    label: 'brown circle',
    tags: [
      'brown',
      'circle'
    ],
    shortcodes: [
      ':brown-circle:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12,
    order: 4427,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '⚫️',
    hexcode: '26ab',
    category: 'Symbols',
    subgroup: 'geometric',
    label: 'black circle',
    tags: [
      'circle',
      'geometric'
    ],
    shortcodes: [
      ':black-circle:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4428,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '⚪️',
    hexcode: '26aa',
    category: 'Symbols',
    subgroup: 'geometric',
    label: 'white circle',
    tags: [
      'circle',
      'geometric'
    ],
    shortcodes: [
      ':white-circle:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4429,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🟥',
    hexcode: '1f7e5',
    category: 'Symbols',
    subgroup: 'geometric',
    label: 'red square',
    tags: [
      'red',
      'square'
    ],
    shortcodes: [
      ':red-square:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12,
    order: 4430,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🟧',
    hexcode: '1f7e7',
    category: 'Symbols',
    subgroup: 'geometric',
    label: 'orange square',
    tags: [
      'orange',
      'square'
    ],
    shortcodes: [
      ':orange-square:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12,
    order: 4431,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🟨',
    hexcode: '1f7e8',
    category: 'Symbols',
    subgroup: 'geometric',
    label: 'yellow square',
    tags: [
      'square',
      'yellow'
    ],
    shortcodes: [
      ':yellow-square:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12,
    order: 4432,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🟩',
    hexcode: '1f7e9',
    category: 'Symbols',
    subgroup: 'geometric',
    label: 'green square',
    tags: [
      'green',
      'square'
    ],
    shortcodes: [
      ':green-square:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12,
    order: 4433,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🟦',
    hexcode: '1f7e6',
    category: 'Symbols',
    subgroup: 'geometric',
    label: 'blue square',
    tags: [
      'blue',
      'square'
    ],
    shortcodes: [
      ':blue-square:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12,
    order: 4434,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🟪',
    hexcode: '1f7ea',
    category: 'Symbols',
    subgroup: 'geometric',
    label: 'purple square',
    tags: [
      'purple',
      'square'
    ],
    shortcodes: [
      ':purple-square:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12,
    order: 4435,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🟫',
    hexcode: '1f7eb',
    category: 'Symbols',
    subgroup: 'geometric',
    label: 'brown square',
    tags: [
      'brown',
      'square'
    ],
    shortcodes: [
      ':brown-square:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 12,
    order: 4436,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '⬛️',
    hexcode: '2b1b',
    category: 'Symbols',
    subgroup: 'geometric',
    label: 'black large square',
    tags: [
      'geometric',
      'square'
    ],
    shortcodes: [
      ':black-square:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4437,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '⬜️',
    hexcode: '2b1c',
    category: 'Symbols',
    subgroup: 'geometric',
    label: 'white large square',
    tags: [
      'geometric',
      'square'
    ],
    shortcodes: [
      ':white-square:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4438,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '◼️',
    hexcode: '25fc',
    category: 'Symbols',
    subgroup: 'geometric',
    label: 'black medium square',
    tags: [
      'geometric',
      'square'
    ],
    shortcodes: [
      ':black-square-medium:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4440,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '◻️',
    hexcode: '25fb',
    category: 'Symbols',
    subgroup: 'geometric',
    label: 'white medium square',
    tags: [
      'geometric',
      'square'
    ],
    shortcodes: [
      ':white-square-medium:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4442,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '◾️',
    hexcode: '25fe',
    category: 'Symbols',
    subgroup: 'geometric',
    label: 'black medium-small square',
    tags: [
      'geometric',
      'square'
    ],
    shortcodes: [
      ':black-square-medium-small:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4443,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '◽️',
    hexcode: '25fd',
    category: 'Symbols',
    subgroup: 'geometric',
    label: 'white medium-small square',
    tags: [
      'geometric',
      'square'
    ],
    shortcodes: [
      ':white-square-medium-small:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4444,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '▪️',
    hexcode: '25aa',
    category: 'Symbols',
    subgroup: 'geometric',
    label: 'black small square',
    tags: [
      'geometric',
      'square'
    ],
    shortcodes: [
      ':black-square-small:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4446,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '▫️',
    hexcode: '25ab',
    category: 'Symbols',
    subgroup: 'geometric',
    label: 'white small square',
    tags: [
      'geometric',
      'square'
    ],
    shortcodes: [
      ':white-square-small:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4448,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🔶',
    hexcode: '1f536',
    category: 'Symbols',
    subgroup: 'geometric',
    label: 'large orange diamond',
    tags: [
      'diamond',
      'geometric',
      'orange'
    ],
    shortcodes: [
      ':diamond-orange-large:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4449,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🔷',
    hexcode: '1f537',
    category: 'Symbols',
    subgroup: 'geometric',
    label: 'large blue diamond',
    tags: [
      'blue',
      'diamond',
      'geometric'
    ],
    shortcodes: [
      ':blue-diamond-large:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4450,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🔸',
    hexcode: '1f538',
    category: 'Symbols',
    subgroup: 'geometric',
    label: 'small orange diamond',
    tags: [
      'diamond',
      'geometric',
      'orange'
    ],
    shortcodes: [
      ':diamond-orange-small:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4451,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🔹',
    hexcode: '1f539',
    category: 'Symbols',
    subgroup: 'geometric',
    label: 'small blue diamond',
    tags: [
      'blue',
      'diamond',
      'geometric'
    ],
    shortcodes: [
      ':blue-diamond-small:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4452,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🔺',
    hexcode: '1f53a',
    category: 'Symbols',
    subgroup: 'geometric',
    label: 'red triangle pointed up',
    tags: [
      'geometric',
      'red',
      'arrow'
    ],
    shortcodes: [
      ':triangle-pointed-up:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4453,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🔻',
    hexcode: '1f53b',
    category: 'Symbols',
    subgroup: 'geometric',
    label: 'red triangle pointed down',
    tags: [
      'down',
      'geometric',
      'red',
      'arrow'
    ],
    shortcodes: [
      ':triangle-pointed-down:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4454,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '💠',
    hexcode: '1f4a0',
    category: 'Symbols',
    subgroup: 'geometric',
    label: 'diamond with a dot',
    tags: [
      'comic',
      'diamond',
      'geometric',
      'inside'
    ],
    shortcodes: [
      ':diamond-jewel:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4455,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🔘',
    hexcode: '1f518',
    category: 'Symbols',
    subgroup: 'geometric',
    label: 'radio button',
    tags: [
      'button',
      'geometric',
      'radio'
    ],
    shortcodes: [
      ':radio-button:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4456,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🔳',
    hexcode: '1f533',
    category: 'Symbols',
    subgroup: 'geometric',
    label: 'white square button',
    tags: [
      'button',
      'geometric',
      'outlined',
      'square'
    ],
    shortcodes: [
      ':white-square-button:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4457,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
  },
  {
    type: 'emoji',
    symbol: '🔲',
    hexcode: '1f532',
    category: 'Symbols',
    subgroup: 'geometric',
    label: 'black square button',
    tags: [
      'button',
      'geometric',
      'square'
    ],
    shortcodes: [
      ':button-black-square:'
    ],
    emoticons: [],
    directional: false,
    variation: false,
    variationBase: null,
    unicode: 0.6,
    order: 4458,
    skintone: null,
    skintoneCombination: null,
    skintoneBase: null
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
      
    ]
  },
  {
    symbol: "./images/Proloquo2go/Yes.png",
    type: "image",
    category: "Proloquo2Go",
    label: "Yes",
    tags: [
      
    ]
  },
  {
    symbol: "./images/Proloquo2go/Maybe.png",
    type: "image",
    category: "Proloquo2Go",
    label: "Maybe",
    tags: [
      
    ]
  },
  {
    symbol: "./images/Proloquo2go/No.png",
    type: "image",
    category: "Proloquo2Go",
    label: "No",
    tags: [
      
    ]
  },
  {
    symbol: "./images/Proloquo2go/I-Dont-Know.png",
    type: "image",
    category: "Proloquo2Go",
    label: "I Don't Know",
    tags: [
      
    ]
  },
  {
    symbol: "./images/Proloquo2go/more.png",
    type: "image",
    category: "Proloquo2Go",
    label: "More",
    tags: [
      
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
      
  ];
  
