// 👉 Import ALL images per product

// Ref Magnet
import refMagnetImg from "../images/ref-magnet1.png";
import refMagnetImg2 from "../images/ref-magnet2.png"; 

// Tote Bag
import toteBagImg from "../images/tote-bags1.png";;
import toteBagImg2 from "../images/tote-bags2.png";;

// Shirt
import shirtImg from "../images/multiple-shirts1.png";
import shirtImg2 from "../images/multiple-shirts2.png";
import shirtImg3 from "../images/single-shirts1.png";
import shirtImg4 from "../images/single-shirts2.png";

// Mug
import mugImg from "../images/mugs-1.png";
import mugImg2 from "../images/mugs-2.png";

export const customPrinting = [
  {
    id: 1,
    name: "Ref Magnet",
    images: [refMagnetImg, refMagnetImg2],
    variants: [{ label: "Standard", price: 50 }],
  },
  {
    id: 2,
    name: "Personalized Tote Bag",
    images: [toteBagImg, toteBagImg2],
    variants: [
      { label: "Small", price: 90 },
      { label: "Medium", price: 120 },
      { label: "Large", price: 150 },
    ],
  },
  {
    id: 3,
    name: "Personalized Shirt",
    images: [shirtImg, shirtImg2, shirtImg3, shirtImg4],
    variants: [
      { label: "Small", price: 90 },
      { label: "Medium", price: 110 },
      { label: "Large", price: 130 },
      { label: "XL", price: 160 },
      { label: "2XL", price: 190 },
    ],
  },
  {
    id: 4,
    name: "Ceramic Mug",
    images: [mugImg, mugImg2],
    variants: [{ label: "Standard", price: 120 }],
  },
];