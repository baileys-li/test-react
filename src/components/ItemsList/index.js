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
				<h1>Items List</h1>

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
