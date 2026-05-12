import docImg from "../images/doc-printing1.png";


export const documentPrinting = [
  {
    id: 5,
    name: "Black & White",
    image: docImg,
    variants: [
      { label: "Short", price: 5 },
      { label: "A4", price: 6 },
      { label: "Long", price: 7 },
      { label: "A3", price: 10 },
    ],
  },
  {
    id: 6,
    name: "Partially Colored",
    image: docImg,
    variants: [
      { label: "Short", price: 10 },
      { label: "A4", price: 12 },
      { label: "Long", price: 15 },
      { label: "A3", price: 20 },
    ],
  },
  {
    id: 7,
    name: "Full Colored",
    image: docImg,
    variants: [
      { label: "Short", price: 15 },
      { label: "A4", price: 18 },
      { label: "Long", price: 20 },
      { label: "A3", price: 25 },
    ],
  },
];