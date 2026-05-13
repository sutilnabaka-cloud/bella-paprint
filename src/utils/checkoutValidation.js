export function validateCheckout(cart) {
  // 1. Empty cart check
  if (!Array.isArray(cart) || cart.length === 0) {
    return {
      isValid: false,
      message: "Please add items to your cart before checkout.",
    };
  }

  // 2. Missing design check (strict requirement for checkout)
  const missingDesign = cart.some(
    (item) =>
      !item.design ||
      !item.design.type ||
      !item.design.value
  );

  if (missingDesign) {
    return {
      isValid: false,
      message:
        "Please upload or paste a design for all items before checkout. Gusto na namin maka-graduate! 🙏",
    };
  }

  // 3. Invalid design structure check
  const invalidDesign = cart.some((item) => {
    const design = item.design;

    if (!design) return true;

    if (design.type === "file" && !design.value) return true;

    if (
      design.type === "link" &&
      (!design.value || !design.value.trim())
    ) {
      return true;
    }

    return false;
  });

  if (invalidDesign) {
    return {
      isValid: false,
      message: "One or more designs are incomplete.",
    };
  }

  // 4. Passed all checks
  return {
    isValid: true,
    message: "",
  };
}