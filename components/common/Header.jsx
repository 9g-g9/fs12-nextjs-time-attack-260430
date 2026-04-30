import Link from "next/link";

const Header = () => {
  return (
    <div className="p-[20px] flex items-center justify-between gap-4">
      <h1>
        <Link href="/">Todo App</Link>
      </h1>
      <ul className="flex items-center justify-center gap-4">
        <li>
          <Link href="/todos">todo</Link>
        </li>
        <li>
          <Link href="/todos/new">new</Link>
        </li>
        <li>
          <Link href="/todos/:id">detail</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
