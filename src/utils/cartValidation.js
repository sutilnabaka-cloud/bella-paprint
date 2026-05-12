export function validateCartAccess(cart) {
  if (!cart || cart.length === 0) {
    return {
      isValid: false,
      message: "Please bili na po kayu para sa grades namin. Thank you!",
    };
  }

  return {
    isValid: true,
    message: "",
  };
}