export const edit = async (id, state) => {
  const result = await fetch(
    `${process.env.API_URL}api/coordinates/${id}/update-data`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ state }),
    }
  );
  return await result.json();
};

export const deleteReport = async (id) => {
  const result = await fetch(
    `${process.env.API_URL}api/coordinates/${id}/delete-data`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({}),
    }
  );
  return await result.json();
};
