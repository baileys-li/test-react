import React, { Component } from "react";
import s from "./ItemsDetails.module.scss";
import { Link } from "react-router-dom";
import getData from "../../utils/getData";
import Comment from "../Comment";

const ProductsEndPoint =
	"https://614db428e3cf1f001712d286.mockapi.io/products?id=";

class ItemsDetails extends Component {
	state = {
		item: {},
	};
	componentDidMount() {
		const idFromURL = this.props.match.params.id;

		getData(ProductsEndPoint + idFromURL).then((data) => {
			this.setState({ item: data[0] });
		});
	}
	render() {
		const { item } = this.state;

		return (
			<main className={s.detailsPage}>
				<Link to="/" className={s.back}>
					Return to list
				</Link>

				<article className={s.product}>
					<h1>{item.name}</h1>
					<img src={item.imageUrl} alt="Photo of product" />

					<p>{item.description}</p>
					<p>In stock {item.amount} items left</p>

					<table>
						<caption>Specifications</caption>
						<tbody>
							<tr>
								<th>Width</th>
								<td>{item.width}</td>
							</tr>
							<tr>
								<th>Height</th>
								<td>{item.height}</td>
							</tr>
							<tr>
								<th>Weight</th>
								<td>{item.weight}g</td>
							</tr>

							<tr>
								<th>Price</th>
								<td>${item.price}</td>
							</tr>

						</tbody>
					</table>
				</article>

				<section className={s.comments}>
					<h2>Comments</h2>
					{item.comments &&
						item.comments.map((comment) => (
							<Comment comment={comment} />
						))}
				</section>
			</main>
		);
	}
}

export default ItemsDetails;
