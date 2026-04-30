import Link from "next/link";

const TodosItem = ({ todos }) => {
  return (
    <>
      {todos.map((t) => (
        <li key={`todos-${t.id}`}>
          <Link href={`/todos/${t.id}`}>
            <div className="p-[25px] border rounded-[10px]">
              <div>
                <h3>제목: {t.title}</h3>
              </div>
              <div>카테고리: {t.category}</div>
              <div>완료여부: {t.completed ? "완료" : "미완료"}</div>
            </div>
          </Link>
        </li>
      ))}
    </>
  );
};

export default TodosItem;
