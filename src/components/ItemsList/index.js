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

		// console.log(itemArray);
		return (
			<>
				<h1>Items List</h1>
				{/* На загальній сторінці продукти можна сортувати по назві, та по кількості даного продукта в наявності.  */}

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

{
	/*

акож повинна бути можливість створення нового продукту з загальної сторінки усіх продуктів.
При натисканні на кнопку "New Product" відкривається модальне вікно з формою та кнопками "Add" і "Cancel" .


Product : {
	id: 1,
	imageUrl: 'some url here',
	name: 'Product name',
	count: 4,
	size: {
		width: 200,
		height: 200
	},
	weight: '200g',
	comments: [Comment, Comment]
}


Comment: {
	id: 3,
	productId: 1,
	description: 'some text here',
	date: 14:00 22.08.2021
}

*/
}
