// services/product.js
export const getAllProducts = async () => {
  try {
    const response = await fetch("https://fakerapi.it/api/v1/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Include other headers if needed
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data; // Adjust based on API response
  } catch (error) {
    throw new Error(`Failed to fetch products: ${error.message}`);
  }
};