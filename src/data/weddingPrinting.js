import weddingImg from "../images/wed-invi.png";
import passportImg from "../images/passport-invi.png";
import passportImg2 from "../images/passport-invi2.png";

export const weddingPrinting = [
  {
    id: 8,
    name: "Wedding Invitations",
    image: weddingImg,

    description: `
Your Love Story, Beautifully Told.

Your wedding invitation is the first chapter of your biggest day—make it unforgettable. At Bella Paprint!, we offer premium, fully customizable wedding invitations that reflect your personality, theme, and style.

Choose between two signature designs:

• Bloom Wedding Invitation — Elegant, floral, and timeless. Printed on specialty paper with a classic multi-page format, matching envelopes, and sticker closures. Available in multiple sizes (5"×7", 6"×6", 5"×8") for that perfectly polished presentation.

• Passport Wedding Invitation — For couples who love adventure. A creative passport-style booklet complete with a boarding pass insert, leather-finish cover, and satin ribbon accent. Ideal for destination weddings or couples who like to do things differently.

Both options are fully customizable — include your names, wedding date, venue, and RSVP details. We accommodate up to two revisions to make sure everything is exactly right.

Optional add-ons like wax seal closures are available for an extra touch of elegance.

Orders of 20 pieces and above come in protective boxes. For smaller quantities, secure OPP packaging keeps every invitation in perfect condition until it reaches your guests.

Your love deserves an invitation as beautiful as the day itself.
`,

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

    description: `
Adventure-Inspired Invitations for Modern Couples.

Turn your wedding announcement into a memorable experience with our Passport Wedding Invitations. Designed for couples who love travel, creativity, and unique presentation styles, this invitation transforms your love story into something unforgettable.

Each passport invitation includes:

• Passport-style booklet cover
• Boarding pass inspired insert
• Premium leather-finish texture
• Satin ribbon accent
• Elegant print finishing

Perfect for destination weddings, travel-themed celebrations, or couples who want a modern and creative invitation style.

Customize every detail including names, venue, wedding date, RSVP information, and motif colors. We also offer up to two revisions to ensure your invitations look exactly how you imagined.

Protective packaging is included to keep every invitation safe and beautiful until it reaches your guests.

Make your guests feel like they are about to board a journey filled with love.
`,

    variants: [{ label: "Standard Size", price: 180 }],
  },
];