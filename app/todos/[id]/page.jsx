import { getDetailTodo } from "@/service/service.js";

const DetailTodo = async ({ params }) => {
  const { id } = await params;
  const todo = await getDetailTodo(id);

  return (
    <div>
      <p>제목 : {todo.title}</p>
      <p>내용 : {todo.content}</p>
      <p>카테고리 : {todo.category}</p>
      <p>우선순위 : {todo.priority}</p>
      <p>완료여부: {todo.completed ? "완료" : "미완료"}</p>
      <p>생성일 : {todo.createdAt}</p>
    </div>
  );
};

export default DetailTodo;
