import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
	const {store, actions} = useContext(Context);
	console.log(store);
	return (
		<div>
			<h1> Todos </h1>
			<ul>
				{/* {store.todos.map((todo) => {
					<li key={todo.id}>
						<button>&times;</button>
					</li>
				})} */}
			</ul>
	</div>
	)
	

	// <div className="text-center mt-5">
	// 	<h1>Hello Rigo!</h1>
	// 	<p>
	// 		<img src={rigoImage} />
	// 	</p>
	// 	<a href="#" className="btn btn-success">
	// 		If you see this green button, bootstrap is working
	// 	</a>
	// </div>
};
