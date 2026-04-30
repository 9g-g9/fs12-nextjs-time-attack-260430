"use client";

import { createTodo, getCategories } from "@/service/service";
import { useEffect, useState } from "react";

const TodoForm = () => {
  const [categories, setCategories] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("1");
  const [priority, setPriority] = useState("high");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        throw error;
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      title,
      content,
      category,
      priority,
    };

    createTodo(body);
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex justify-items-start flex-col gap-[20px] w-[1200px] m-auto"
    >
      <label htmlFor="title">제목</label>
      <input
        type="text"
        id="title"
        placeholder="제목을 입력해주세요"
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <label htmlFor="content">내용</label>
      <textarea
        name="text"
        id="content"
        placeholder="설명을 입력해주세요"
        required
        onChange={(e) => setContent(e.target.value)}
      />

      <label htmlFor="priority">우선순위</label>
      <select
        name="priority"
        id="priority"
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="high">high</option>
        <option value="medium">medium</option>
        <option value="low">low</option>
      </select>

      <label htmlFor="category">카테고리</label>
      <select
        name="category"
        id="category"
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories.map((c) => (
          <option key={`category-${c.id}`} value={c.id}>
            {c.name}
          </option>
        ))}
      </select>

      <button type="submit" className="cursor-pointer">
        할 일 만들기
      </button>
    </form>
  );
};

export default TodoForm;
