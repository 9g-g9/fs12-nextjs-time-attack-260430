"use client";

import React, { useState, useEffect } from "react";
import TodoInteraction from "@/components/ui/TodoInteraction.jsx";
import { getTodos, getCategories } from "@/service/service.js";
import TodosItem from "@/components/ui/TodosItem.jsx";
import { useSearchParams } from "next/navigation.js";

const TodoList = () => {
  const serchParams = useSearchParams();

  const completed = JSON.parse(serchParams.get("completed"));
  const category = serchParams.get("category");

  const [isCompleted, setIsCompleted] = useState(false);
  const [categoryId, setCategoryId] = useState("");

  const [todos, setTodos] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesData = await getCategories();
        const todosData = await getTodos();

        setCategories(categoriesData);
        setTodos(todosData);

        if (category) {
          const id = categoriesData.find((c) => c.name === category).id;

          setCategoryId(id);
        }

        if (completed) {
          setIsCompleted(completed);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleCategory = (e) => {
    setCategoryId(e.target.value);
  };

  const handleCompleted = (c) => {
    setIsCompleted(c);
  };

  return (
    <>
      <TodoInteraction
        categories={categories}
        onSelect={handleCategory}
        onClick={handleCompleted}
        isCompleted={isCompleted}
        categoryId={categoryId}
      />

      <ul className="grid grid-cols-4 gap-[20px] p-[30px]">
        {todos
          .filter((t) => (categoryId === "" ? t : t.category === categoryId))
          .map((t) =>
            t.completed === isCompleted ? (
              <li key={`todos-${t.id}`}>
                <TodosItem
                  todo={t}
                  category={categories.find((c) => c.id === t.category).name}
                />
              </li>
            ) : (
              ""
            ),
          )}
      </ul>
    </>
  );
};

export default TodoList;
