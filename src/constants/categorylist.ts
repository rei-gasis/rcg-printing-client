export const categories = [
  {
    id: "PLQ",
    name: "Plaque",
    image: "PLQ_GLASS1.jpg",
    description:
      "Glass plaques are prized for their sleek and modern aesthetic, making them suitable for display in both professional and personal settings. Whether displayed on a desk, shelf, or mounted on a wall, they catch and reflect light, enhancing the visual appeal of any space.",
    url: "/plaque",
    variants: [
      {
        type: "Glass Plaque",
        image: "PLQ_GLASS1.jpg",
      },
      {
        type: "Acrylic Plaque",
        image: "PLQ_ACR1.jpg",
      },
    ],
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
    image: "STKR_DGPRT1.jpg",
    url: "/sticker-print",
    description:
      "Crafted with precision and attention to detail, our stickers boast vibrant colors and crisp graphics that make them stand out in any setting. Made from durable materials, they're built to last, ensuring your message remains intact wherever you choose to display them.",
    variants: [
      {
        type: "Sticker",
        image: "STKR_DGPRT1.jpg",
      },
    ],
    minOrder: 1,
    priceSizeRef: "1x1 inch",
    priceMatrix: [
      { qty: 50, price: 100 },
      { qty: 100, price: 180 },
      { qty: 1000, price: 600 },
    ],
  },
  {
    id: "MUG",
    name: "Mug",
    image: "mug1.jpg",
    description: "",
  },
  {
    id: "INVT",
    name: "Invitation",
    image: "invitation1.jpg",
    description: "",
  },
  {
    id: "PIN",
    name: "Pin",
    image: "pin1.jpg",
    description: "",
  },
];
