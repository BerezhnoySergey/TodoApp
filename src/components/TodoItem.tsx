import { ITodoItem } from "../interfaces";

export default function TodoItem({
	id,
	name,
	comments,
	handleSelect,
	handleRemove,
}: ITodoItem & {
	handleSelect: (item: ITodoItem) => void;
	handleRemove: (id: number) => void;
}) {
	return (
		<div
			className="todo-item"
			onClick={() => handleSelect({ id, name, comments })}
		>
			<div className="todo-name">{name}</div>
			<div className="score">{comments.length}</div>
			<button onClick={() => handleRemove(id)} className="remove">
				Remove
			</button>
		</div>
	);
}
