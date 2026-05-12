import weddingImg from "../images/wed-invi.png";
import passportImg from "../images/passport-invi.png";
import passportImg2 from "../images/passport-invi2.png";

export const weddingPrinting = [
  {
    id: 8,
    name: "Wedding Invitations",
    image: weddingImg,
    variants: [
      { label: '5" x 7"', price: 130 },
      { label: '6" x 6"', price: 120 },
      { label: '5" x 8"', price: 160 },
    ],
  },
  {
    id: 9,
    name: "Passport Wedding Invitation",
    images: [passportImg, passportImg2],
    variants: [{ label: "Standard Size", price: 180 }],
  },
];