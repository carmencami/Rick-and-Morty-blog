import { StrictMode } from "react";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			//creo arrays vacios
			characters: [],
			planets: [],
			result: {},
			favorites: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			liked: (category, element, status) => {
				const store = getStore();
				let categoryStore = category == "people" ? "characters" : category;
				let categoryValues = store[categoryStore];
				setStore({ categoryStore: categoryValues });
			},
			favorites: (category, element) => {
				const store = getStore();
				setStore({ favorites: [...store.favorites, { category: category, element: element }] });
				getActions().liked(category, element, true);
			},
			deleteFavorites: (category, element) => {
				const store = getStore();
				let position;
				store.favorites.forEach((value, index) => {
					if (value.category == category && value.element.id == element.id) {
						position = index;
					}
				});
				store.favorites.splice(position, 1);
				setStore({ favorites: [...store.favorites] });
				getActions().liked(category, element, false);
			},
			// Creo la función que va a traer de la API los datos de people
			loadCharactersData: () => {
				fetch("https://rickandmortyapi.com/api/character")
					.then(response => response.json())
					//almacenará los data.results que son los datos de los personajes en store.characters
					.then(data => setStore({ character: data.results }));
			},
			loadLocationData: () => {
				fetch("https://rickandmortyapi.com/api/location")
					.then(response => response.json())
					.then(data => setStore({ location: data.results }));
			},
			loadInfoData: (category, id) => {
				fetch("https://rickandmortyapi.com/api/" + category + "/" + id)
					.then(response => response.json())
					.then(data => setStore({ result: data }));
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
