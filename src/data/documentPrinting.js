import docImg from "../images/doc-printing1.png";

const documentDescription = `
Get It Done—Fast, Clear, and Right the First Time.

Deadlines don't wait, and neither do we. Whether it's a school report, a business document, or a legal requirement, Bella Paprint! delivers crisp, professionally printed pages every time — without the hassle of leaving your home.

Choose from a range of paper sizes (Short, A4, Long, and A3) and pick your color mode — black and white for clean, budget-friendly text documents, or full color for presentations and reports that truly stand out.

Our seamless "Print & Pick-Up" system lets you send your file via Messenger, Viber, or email, pay online, and collect your prints when they're ready. No more long lines. No more wasted trips.

Why customers love it:
• Multiple paper size and color options
• Secure online payment via GCash, Maya, or COD
• Door-to-door delivery or in-store pick-up
• Fast turnaround — perfect for urgent requirements

From the first page to the last, we print it right.
`;

export const documentPrinting = [

  {
    id: 5,

    name: "Black & White",

    description: documentDescription,

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

    description: documentDescription,

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

    description: documentDescription,

    image: docImg,

    variants: [
      { label: "Short", price: 15 },
      { label: "A4", price: 18 },
      { label: "Long", price: 20 },
      { label: "A3", price: 25 },
    ],
  },

];