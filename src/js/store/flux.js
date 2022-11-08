const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			baseURL :"https://www.swapi.tech/api/",
			
			people_details:[],
			
			list:[],
			favorite: undefined,
		},
		actions: {
			getItems: async (resource) => {
				const store = getStore();
				const response = await fetch(
					`${store.baseURL}/${resource}`
				);
				const body = await response.json();
					if (!response.ok) return;
					setStore({
						[resource]: body.results,
					})},

			getDetails: async(resource,uid) => {
				const store = getStore();
				const response = await fetch(
					`${store.baseURL}/${resource}/${uid}`
				);
				const body = await response.json();
				if (!response.ok) return;
				setStore({
					currentItem: body.result,
				})},

			AddFavorite: async (resource, uid) => {
				const store = getStore();
				const response = await fetch(
					`${store.baseURL}/${resource}/${uid}`
				)
				const body = await response.json();
				if (!response.ok) return;
				setStore({
					favorite: Object.assign({resource},body.result),
					list: [...store.list, {...body.result, resource}],
			});},

			deleteFavorite: (deleteFavorite) => {
				const store = getStore();
				setStore({
					list: deleteFavorite,
				});
				console.log(store.list);
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
