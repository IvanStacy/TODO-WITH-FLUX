// import { isHtmlElement } from "react-router-dom";
// import { DataRouterContext } from "react-router";


const getState = ({ getStore, getActions, setStore }) => {
	
	return {
		store: {
			todos: null, apiUrl:"https://playground.4geeks.com/apis/fake/todos/user"
		},
		actions: {
			addTodos: () => {
				fetch(apiUrl)
				.then((resp) => resp.json())
				.then((data) => setStore({todos:data.resoults}))
				.catch((error) => console.log("error has occurd", error))
				
			},

			deleteTodos: (index) => {
				let store = getStore()
				let newTodos = store.todos.filter((item) => item.index !== index)

			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
