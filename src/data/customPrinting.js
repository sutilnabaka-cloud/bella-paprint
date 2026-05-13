// 👉 Import ALL images per product

// Ref Magnet
import refMagnetImg from "../images/ref-magnet1.png";
import refMagnetImg2 from "../images/ref-magnet2.png";

// Tote Bag
import toteBagImg from "../images/tote-bags1.png";
import toteBagImg2 from "../images/tote-bags2.png";

// Shirt
import shirtImg from "../images/multiple-shirts1.png";
import shirtImg2 from "../images/multiple-shirts2.png";
import shirtImg3 from "../images/single-shirts1.png";
import shirtImg4 from "../images/single-shirts2.png";

// Mug
import mugImg from "../images/mugs-1.png";
import mugImg2 from "../images/mugs-2.png";

/* DESCRIPTION */

const customPrintingDescription = `
Turn Your Ideas Into Something You Can Hold.

Why give generic when you can give personalized?

Our Custom Printing Service lets you put your design, photo, or message on items that people will actually use and remember.

Perfect for gifts, giveaways, souvenirs, or branding—we print on items that speak for you.

Choose from our lineup of customizable products:

• Personalized Ceramic Mugs — Start every morning with something that means something. Heat-resistant, dishwasher-safe, and printed with your design in full, vibrant color.

• Personalized Ref Magnets — Small in size, big on memory. Compact, glossy or matte-finished, and strong enough to stay put — perfect for event giveaways and keepsakes.

• Personalized Shirts — Your design, your style. Available in sizes Small to 2XL, printed with durable DTF technology that resists fading, cracking, and peeling.

• Personalized Tote Bags — Practical, eco-friendly, and uniquely yours. Great for retail giveaways, school events, or everyday use.

Submit your design in JPG or PNG format, get a preview before we print, and receive durable, high-quality products that look exactly the way you imagined, or better.

Because the best gifts are the ones that are made just for them.
`;

export const customPrinting = [

  {
    id: 1,

    name: "Ref Magnet",

    description: customPrintingDescription,

    images: [refMagnetImg, refMagnetImg2],

    variants: [
      { label: "Standard", price: 50 }
    ],
  },

  {
    id: 2,

    name: "Personalized Tote Bag",

    description: customPrintingDescription,

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

    description: customPrintingDescription,

    images: [
      shirtImg,
      shirtImg2,
      shirtImg3,
      shirtImg4
    ],

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

    description: customPrintingDescription,

    images: [mugImg, mugImg2],

    variants: [
      { label: "Standard", price: 120 }
    ],
  },

];