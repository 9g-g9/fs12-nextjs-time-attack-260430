import { getTodos } from "../../service/service.js";
import TodosItem from "@/components/ui/TodosItem.jsx";

const Todos = async () => {
  const todos = await getTodos();

  return (
    <div>
      <h2 className="m-[30px] text-center">할일 목록</h2>
      <ul className="grid grid-rows-3 grid-flow-col gap-[20px] p-[30px]">
        <TodosItem todos={todos} />
      </ul>
    </div>
  );
};

export default Todos;
