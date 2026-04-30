const TodoInteraction = ({
  categories,
  onSelect,
  onClick,
  isCompleted,
  categoryId,
}) => {
  return (
    <div className="text-center">
      {console.log(categoryId)}
      <div>
        <select
          name="category"
          id="category"
          onChange={(e) => onSelect(e)}
          value={categoryId ?? ""}
        >
          <option value="">-----</option>
          {categories.map((c) => (
            <option key={`category-${c.id}`} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <button onClick={() => onClick(!isCompleted)}>
          {isCompleted ? "미완료" : "완료"}
        </button>
      </div>
    </div>
  );
};

export default TodoInteraction;
