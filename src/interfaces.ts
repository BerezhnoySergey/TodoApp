export interface IComment {
	text: string;
	color: string;
}

export interface ITodoItem {
	name: string;
	id: number;
	comments: IComment[];
}
