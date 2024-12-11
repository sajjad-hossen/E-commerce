// user.js

const baseURL = "https://fakestoreapi.com/users";

// Fetch all users
export const getAllUsers = async () => {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(baseURL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch users:", error.message);
    throw error;
  }
};

// Update user role
export const updateUserRole = async ({ userId, newRole }) => {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(`${baseURL}/${userId}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ special_user: newRole }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to update user role:", error.message);
    throw error;
  }
};

// Remove a user
export const removeUser = async (userId) => {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(`${baseURL}/${userId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to remove user:", error.message);
    throw error;
  }
};
