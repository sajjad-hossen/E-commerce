const baseURL = "https://fakestoreapi.com"; // Define the base URL at the top

export const getAllProducts = async () => {
  try {
    const response = await fetch(`${baseURL}/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
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

export const getProductById = async (id) => {
  try {
    const response = await fetch(`${baseURL}/products/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    throw new Error(`Failed to fetch product: ${error.message}`);
  }
};

export const removeProduct = async (id) => {
  try {
    const response = await fetch(`${baseURL}/products/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    throw new Error(`Failed to remove product: ${error.message}`);
  }
};

export const createProduct = async (formData) => {
  try {
    const response = await fetch(`${baseURL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Ensure FakeStore API expects JSON
      },
      body: JSON.stringify(formData), // Convert formData to JSON format
    });

    if (!response.ok) {
      throw new Error(`Failed to create product: ${response.statusText}`);
    }

    return await response.json(); // Return the created product
  } catch (error) {
    console.error("Error in createProduct:", error.message);
    throw new Error(`Failed to create product: ${error.message}`);
  }
};
