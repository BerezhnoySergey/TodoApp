import { IComment } from "../interfaces";

export default function Comment({ text, color }: IComment) {
	return (
		<div className="comment">
			<div className="comment-color" style={{ backgroundColor: color }} />
			<div>{text}</div>
		</div>
	);
}
