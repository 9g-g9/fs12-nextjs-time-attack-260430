import Link from "next/link";

const TodosItem = ({ todo, category }) => {
  return (
    <Link href={`/todos/${todo.id}`}>
      <div className="p-[25px] border rounded-[10px]">
        <div>
          <h3>제목: {todo.title}</h3>
        </div>
        <div>카테고리: {category}</div>
        <div>우선순위: {todo.priority}</div>
        <div>완료여부: {todo.completed ? "완료" : "미완료"}</div>
      </div>
    </Link>
  );
};

export default TodosItem;
