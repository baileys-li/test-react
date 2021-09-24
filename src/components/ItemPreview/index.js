import React, { Component } from "react";
import { Link } from "react-router-dom";
import s from "./ItemPreview.module.scss";

class ItemPreview extends Component {
	render() {
		const { item } = this.props;
		return (
			<article className={s.preview}>
				<img src={item.imageUrl} alt={`Photo of ${item.name}`} />

				<div className={s.text}>
					<h2>{item.name}</h2>
					<p className={s.price}>${item.price}</p>
					<p>{item.description}</p>
					<p className={s.amount}>{item.amount} items left</p>
				</div>

				<Link to={`/item/${item.id}`} className="button">
					More
				</Link>
			</article>
		);
	}
}

export default ItemPreview;
