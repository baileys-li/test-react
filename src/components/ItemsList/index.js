import React, { Component } from "react";
import s from "./ItemsList.module.scss";
import getData from "../../utils/getData";
import ItemPreview from "../ItemPreview";

const ProductsEndPoint = "https://614db428e3cf1f001712d286.mockapi.io/products";

class ItemsList extends Component {
	state = {
		itemArray: [],
		order: "Ascending",
	};

	componentDidMount() {
		getData(ProductsEndPoint).then((data) => {
			this.setState({ itemArray: data });
		});
	}

	onChangeHandler = (evt) => {
		if (evt.target.name === "sort") {
			this.sortArray(evt.target.value);
		}

		if (evt.target.name === "order") {
			this.setState({ order: "Descending" });
		}

		if (this.state.order === "Descending") {
			const reverseArray = this.state.itemArray.reverse();
			this.setState({ itemArray: reverseArray });
		}
	};

	sortArray(method) {
		let sortedArray = [...this.state.itemArray];

		let sortFunction;

		switch (method) {
			case "Name":
				sortFunction = (first, second) => {
					const firstUpper = first.name.toUpperCase();
					const secondUpper = second.name.toUpperCase();

					let comparison = 0;
					if (firstUpper > secondUpper) {
						comparison = 1;
					} else if (firstUpper < secondUpper) {
						comparison = -1;
					}

					return comparison;
				};
				break;

			case "Amount":
				sortFunction = (first, second) => {
					return first.amount - second.amount;
				};
				break;

			case "Cost":
				sortFunction = (first, second) => {
					return first.price - second.price;
				};
				break;

			default:
				break;
		}
		sortedArray = sortedArray.sort(sortFunction);

		this.setState({ itemArray: sortedArray });
	}

	render() {
		const { itemArray } = this.state;

		const sortOptions = ["Name", "Amount", "Cost"];

		return (
			<>
				<header className={s.header}>
					<h1>Items List</h1>

					<form
						action="GET"
						className={s.sort}
						onChange={this.onChangeHandler}
					>
						<p className={s.sort__sort}>
							Sort by
							{sortOptions.map((option, index) => (
								<label key={index}>
									<input
										type="radio"
										name="sort"
										value={option}
										className="visually-hidden"
									/>
									<span>{option}</span>
								</label>
							))}
						</p>

						<p className={s.sort__order}>
							<label>
								<input
									type="radio"
									name="order"
									className="visually-hidden"
									value="Ascending"
									defaultChecked
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
