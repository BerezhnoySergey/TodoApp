import { useEffect, useState } from "react";
import TodoItem from "./components/TodoItem";
import Comments from "./components/Comments";
import { ITodoItem } from "./interfaces";

import "./App.css";

function App() {
	const [items, setItems] = useState<ITodoItem[]>(
		JSON.parse(localStorage.getItem("items") ?? "[]")
	);
	const [inputValue, setInputValue] = useState<string>(
		localStorage.getItem("inputValue") ?? ""
	);
	const [selectedItem, setSelectedItem] = useState<ITodoItem | null>(
		JSON.parse(localStorage.getItem("selectedItem") ?? "null")
	);

	useEffect(() => {
		localStorage.setItem("items", JSON.stringify(items));
	}, [items]);

	useEffect(() => {
		localStorage.setItem("inputValue", inputValue);
	}, [inputValue]);

	useEffect(() => {
		localStorage.setItem("selectedItem", JSON.stringify(selectedItem));
	}, [selectedItem]);

	const handleAddComment = (updatedSelectedItem: ITodoItem) => {
		if (!updatedSelectedItem) {
			return;
		}

		setSelectedItem(updatedSelectedItem);
		setItems((prevItems) =>
			prevItems.map((item) =>
				item.id === updatedSelectedItem.id ? updatedSelectedItem : item
			)
		);
	};

	const handleAddItem = () => {
		const newItem = {
			id: Date.now(),
			name: inputValue,
			comments: [],
		};

		setItems([...items, newItem]);
	};

	const handleRemoveItem = (itemId: number) =>
		setItems((prevItems) => prevItems.filter(({ id }) => id !== itemId));

	return (
		<div className="app-wrap">
			<div className="todo-wrap">
				<div className="todo-title">Todo List</div>
				<input
					type="text"
					placeholder="Type Name Here..."
					className="input"
					onChange={(e) => setInputValue(e.target.value)}
				/>
				<button className="btn" onClick={handleAddItem}>
					Add New
				</button>
				<div>
					{items.map((item) => (
						<TodoItem
							key={item.id}
							handleSelect={setSelectedItem}
							handleRemove={handleRemoveItem}
							{...item}
						/>
					))}
				</div>
			</div>
			{selectedItem && (
				<Comments {...selectedItem} handleAddComment={handleAddComment} />
			)}
		</div>
	);
}

export default App;
