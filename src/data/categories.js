import { customPrinting } from "./customPrinting";
import { documentPrinting } from "./documentPrinting";
import { weddingPrinting } from "./weddingPrinting";

export const categories = [
  {
    id: "custom",
    name: "Custom Printing",
    products: customPrinting,
  },
  {
    id: "document",
    name: "Document Printing",
    products: documentPrinting,
  },
  {
    id: "wedding",
    name: "Wedding Invitation",
    products: weddingPrinting,
  },
];