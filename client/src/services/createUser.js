import axios from "axios";

export async function createUser(user) {
  const { email, password, name, phone } = user;

  const options = {
    method: "POST",
    url: `${import.meta.env.VITE_API_URL}/users`,
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      email,
      password,
      name,
      phone,
    },
  };

  try {
    const { data } = await axios.request(options);
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
