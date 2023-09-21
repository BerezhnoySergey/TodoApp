import Comment from "./Comment";
import { ITodoItem } from "../interfaces";
import { useState } from "react";

export default function Comments({
	id,
	name,
	comments,
	handleAddComment,
}: ITodoItem & { handleAddComment: (item: ITodoItem) => void }) {
	const [text, setText] = useState<string>("");
	const [color, setColor] = useState<string>("#000000");

	const addComment = () => {
		const updatedSelectedItem = {
			id,
			name,
			comments: [...comments, { color, text }],
		};

		handleAddComment(updatedSelectedItem);
		setText("");
		setColor("#000000");
	};

	return (
		<div className="comments">
			Comments {name} (#{id})
			{comments.map((comment) => (
				<Comment key={comment.text} {...comment} />
			))}
			<div className="new-comment">
				<input
					type="color"
					className="color"
					onChange={(e) => setColor(e.target.value)}
					value={color}
				/>
				<textarea
					onChange={(e) => setText(e.target.value)}
					value={text}
					className="text-area"
				/>
				<button onClick={addComment} className="btn-comments">
					Add Comment
				</button>
			</div>
		</div>
	);
}
