const login = async (email, password) => {
  const data = {
    email,
    password,
  };
  const result = await fetch(`${process.env.API_URL}api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data),
  });
  return await result.json();
};

export default login;
