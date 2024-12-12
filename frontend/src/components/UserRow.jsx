import { useQueryClient, useMutation } from "@tanstack/react-query";
import { icons } from "../assets";
import { removeUser, updateUserRole } from "../services/user"; // Correct import

const UserRow = ({ item }) => {
  const client = useQueryClient();

  // Ensure item has all required properties before rendering
  if (
    !item ||
    !item.id ||
    !item.username ||
    !item.email ||
    !item.special_user
  ) {
    console.error("User data is missing required fields:", item);
    return null; // Prevent rendering if necessary data is missing
  }

  const removeUserMutation = useMutation((id) => removeUser(id), {
    onSuccess: () => {
      client.invalidateQueries(["users"]);
    },
  });

  const updateUserRoleMutation = useMutation(updateUserRole, {
    onSuccess: () => {
      client.invalidateQueries(["users"]);
    },
  });

  return (
    <tr>
      <td>
        <p>{item.username}</p>
      </td>
      <td>{item.email}</td>
      <td>{item.special_user}</td>
      <td>
        {item.special_user === "user" && (
          <button
            onClick={() =>
              updateUserRoleMutation.mutate({
                userId: item.id,
                newRole: "admin", // Assuming the role upgrade is to "admin"
              })
            }
          >
            Upgrade to Admin
          </button>
        )}
      </td>
      <td>
        {item.special_user === "super-admin" && (
          <img
            src={icons.crossItem}
            alt='Remove'
            className='product-icon'
            onClick={() => removeUserMutation.mutate(item.id)}
          />
        )}
      </td>
    </tr>
  );
};

export default UserRow;
