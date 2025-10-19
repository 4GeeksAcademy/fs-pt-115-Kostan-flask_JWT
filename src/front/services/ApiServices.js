export const signup = async (userData) => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.msg || "Signup failed");
  return data;
};

export const login = async (userData) => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.msg || "Login failed");
  localStorage.setItem("token", data.token);
  return data;
};

export const getPrivateData = async () => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("No token found");

  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/private`, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.msg || "Unauthorized");
  return data;
};
