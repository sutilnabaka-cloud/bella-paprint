export const categories = [
  {
    id: "custom",
    name: "Custom Prints",
    products: [
      {
        id: 1,
        name: "Custom T-Shirt",
        basePrice: 300,
        variants: [
          { size: "Small", price: 300 },
          { size: "Medium", price: 350 },
          { size: "Large", price: 400 },
        ],
      },
    ],
  },
  {
    id: "document",
    name: "Document Printing",
    products: [
      {
        id: 2,
        name: "Short Bond Paper",
        basePrice: 5,
        variants: [
          { size: "Black & White", price: 5 },
          { size: "Colored", price: 10 },
        ],
      },
    ],
  },
  {
    id: "wedding",
    name: "Wedding Invitation",
    products: [
      {
        id: 3,
        name: "Classic Invitation",
        basePrice: 50,
        variants: [
          { size: "A5", price: 50 },
          { size: "A4", price: 80 },
        ],
      },
    ],
  },
];