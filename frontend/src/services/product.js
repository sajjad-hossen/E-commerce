const baseURL = "https://fakestoreapi.com"; // Base URL for the API

// Fetch all products
export const getAllProducts = async () => {
  try {
    const response = await fetch(`${baseURL}/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data; // Return the list of products
  } catch (error) {
    console.error("Error in getAllProducts:", error.message);
    throw new Error(`Failed to fetch products: ${error.message}`);
  }
};

// Fetch a single product by ID
export const getProductById = async (id) => {
  if (!id) {
    throw new Error("Product ID is required");
  }
  try {
    const response = await fetch(`${baseURL}/products/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data; // Return the product details
  } catch (error) {
    console.error("Error in getProductById:", error.message);
    throw new Error(`Failed to fetch product: ${error.message}`);
  }
};

// Delete a product by ID
export const removeProduct = async (id) => {
  if (!id) {
    throw new Error("Product ID is required");
  }
  try {
    const response = await fetch(`${baseURL}/products/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data; // Return confirmation of deletion
  } catch (error) {
    console.error("Error in removeProduct:", error.message);
    throw new Error(`Failed to remove product: ${error.message}`);
  }
};

// Create a new product
export const createProduct = async (formData) => {
  if (!formData || typeof formData !== "object") {
    throw new Error("Form data must be a valid object");
  }
  try {
    const response = await fetch(`${baseURL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Ensure JSON format for API compatibility
      },
      body: JSON.stringify(formData), // Convert form data to JSON format
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data; // Return the created product
  } catch (error) {
    console.error("Error in createProduct:", error.message);
    throw new Error(`Failed to create product: ${error.message}`);
  }
};
