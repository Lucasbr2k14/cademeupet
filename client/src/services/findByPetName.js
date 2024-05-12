import axios from "axios";

export async function findByPetName(name) {
  const options = {
    method: "GET",
    url: "http://localhost:3000/posts",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    params: {
      name,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
