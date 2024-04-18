export const categories = ["Plaque", "Digital Print", "Engraving"];

/*images[0] will be the main image */
export const products = [
  {
    id: "PLQ_GLASS",
    name: "Glass Plaque",
    images: ["PLQ_GLASS1.jpg", "PLQ_GLASS2.jpg"],
    url: "/glass-plaque",
    description:
      "Glass plaques are prized for their sleek and modern aesthetic, making them suitable for display in both professional and personal settings. Whether displayed on a desk, shelf, or mounted on a wall, they catch and reflect light, enhancing the visual appeal of any space.",
    category: "Plaque",
    minOrder: 1,
    priceSizeRef: "10 inches",
    priceMatrix: [
      { qty: 1, price: 1200 },
      { qty: 6, price: 1100 },
      { qty: 11, price: 1000 },
    ],
  },
  {
    id: "PLQ_ACR",
    name: "Acrylic Plaque",
    images: ["PLQ_ACR1.jpg", "PLQ_ACR2.jpg"],
    url: "/acrylic-plaque",
    description:
      "Acrylic plaques are prized for their sleek and modern aesthetic, making them suitable for display in both professional and personal settings. Whether displayed on a desk, shelf, or mounted on a wall, they catch and reflect light, enhancing the visual appeal of any space.",
    category: "Plaque",
    minOrder: 1,
    priceSizeRef: "10 inches",
    priceMatrix: [
      { qty: 1, price: 1200 },
      { qty: 6, price: 1100 },
      { qty: 11, price: 1000 },
    ],
  },
  {
    id: "STKR_DGPRT",
    name: "Sticker",
    // images: ["STKR_DGPRT1.jpg"],
    images: [],
    url: "/sticker-print",
    description:
      "Crafted with precision and attention to detail, our stickers boast vibrant colors and crisp graphics that make them stand out in any setting. Made from durable materials, they're built to last, ensuring your message remains intact wherever you choose to display them.",
    category: "Digital Print",
    minOrder: 1,
    priceSizeRef: "1x1 inch",
    priceMatrix: [
      { qty: 50, price: 100 },
      { qty: 100, price: 180 },
      { qty: 1000, price: 600 },
    ],
  },
  {
    id: "CAL_DGPRT",
    name: "Calendar",
    images: ["CAL_DGPRT1.jpg"],
    url: "/calendar",
    description:
      "Stay on top of your schedule effortlessly with our customizable calendar options. Whether you prefer a sleek and professional look for your office or a vibrant and colorful design for your home, we've got you covered. Choose from a variety of layouts, themes, and sizes to suit your preferences and space.",
    category: "Digital Print",
    minOrder: 1,
    priceSizeRef: "2x5 inches",
    priceMatrix: [
      { qty: 50, price: 100 },
      { qty: 100, price: 180 },
      { qty: 1000, price: 600 },
    ],
  },
  {
    id: "LASER_ENGRV",
    name: "Laser Engrave",
    images: ["LASER_ENGRV1.jpg"],
    url: "/laser-engrave",
    description:
      "Stay on top of your schedule effortlessly with our customizable calendar options. Whether you prefer a sleek and professional look for your office or a vibrant and colorful design for your home, we've got you covered. Choose from a variety of layouts, themes, and sizes to suit your preferences and space.",
    category: "Engraving",
    minOrder: 1,
    priceSizeRef: "10x10 inches",
    priceMatrix: [
      { qty: 50, price: 100 },
      { qty: 100, price: 180 },
      { qty: 1000, price: 300 },
    ],
  },
];
