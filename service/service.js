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

export const createTodo = async (todo) => {
  const id = Date.now();

  const res = await fetch(`${BASE_API_URL}/todos`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      id,
      title: todo.title,
      content: todo.content,
      category: todo.category,
      priority: todo.priority,
      createdAt: new Date(),
      completed: false,
    }),
  });

  const data = res.json();

  return data;
};

export const getCategories = async () => {
  const res = await fetch(`${BASE_API_URL}/categories`);
  const data = await res.json();

  return data;
};
