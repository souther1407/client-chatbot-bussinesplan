const URL = import.meta.env.VITE_SERVER_URL;

export const getPlans = () => {};

export const generatePlan = async (msg) => {
  const response = await fetch(`${URL}/plans/generate`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({ msg }),
  });
  const body = await response.json();
  if (response.status >= 400) throw new Error(body.error);
  return body;
};
