import React, { Component } from "react";
import s from "./Comment.module.scss";

class Comment extends Component {
	render() {
		const { comment } = this.props;

		return (
			<article className={s.comment}>
				<img src={comment.avatar} alt={`Photo of ${comment.name}`} />

				<p>{comment.name}</p>

				<blockquote>{comment.text}</blockquote>
			</article>
		);
	}
}

export default Comment;
