const BASE_API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getTodos = async () => {
  const res = await fetch(`${BASE_API_URL}/todos`);
  const data = await res.json();

  return data;
};

export const getDetailTodo = async (id) => {
  const res = await fetch(`${BASE_API_URL}/todos/${id}`);
  const data = await res.json();

  return data;
};
