import React, { Component } from "react";
import s from "./ItemsList.module.scss";
import getData from "../../utils/getData";
import ItemPreview from "../ItemPreview";

const ProductsEndPoint = "https://614db428e3cf1f001712d286.mockapi.io/products";

class ItemsList extends Component {
	state = {
		itemArray: [],
	};

	componentDidMount() {
		getData(ProductsEndPoint).then((data) => {
			this.setState({ itemArray: data });
		});
	}

	render() {
		const { itemArray } = this.state;

		return (
			<>
				<header className={s.header}>
					<h1>Items List</h1>

					<form action="GET" className={s.sort}>
						<p className={s.sort__sort}>
							Sort by
							<label>
								<input
									type="radio"
									name="sort"
									value="Name"
									className="visually-hidden"
									checked
								/>
								<span>Name</span>
							</label>
							<label>
								<input
									type="radio"
									name="sort"
									className="visually-hidden"
									value="Amount"
								/>
								<span>Amount</span>
							</label>
							<label>
								<input
									type="radio"
									name="sort"
									className="visually-hidden"
									value="Cost"
								/>
								<span>Cost</span>
							</label>
						</p>

						<p className={s.sort__order}>
							<label>
								<input
									type="radio"
									name="order"
									className="visually-hidden"
									value="Ascending"
									checked
								/>
								Ascending
								<svg
									height="15"
									width="15"
									viewBox="0 0 20 20"
									aria-hidden="true"
									fill="currentColor"
								>
									<polygon points="0,20 10,0 20,20" />
								</svg>
							</label>

							<label>
								<input
									type="radio"
									name="order"
									className="visually-hidden"
									value="Descending"
								/>
								Descending
								<svg
									height="15"
									width="15"
									viewBox="0 0 20 20"
									aria-hidden="true"
									fill="currentColor"
								>
									<polygon points="0,0 10,20 20,0" />
								</svg>
							</label>
						</p>
					</form>
					{/* {На загальній сторінці продукти можна сортувати по назві, та по кількості даного продукта в наявності.} */}
					<button type="button" className="button">
						New Product
					</button>
				</header>

				<ul className={s.items}>
					{itemArray.map((item) => (
						<li key={item.id}>
							<ItemPreview item={item} />
						</li>
					))}
				</ul>
			</>
		);
	}
}

export default ItemsList;
