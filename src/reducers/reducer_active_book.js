//state argument is not application state, only the state that this reducer is responsible for
export default function(state = null, action){
	switch (action.type){
		case 'BOOK_SELECTED':
			return action.payload;
			//Note: Do not ever mutate the state to produce a new version of the state => obj that is returned from the reducer must be 100% fresh and clean
			//DO NOT mutate state directly: e.g. state.title = book.title
		
	}
	return state;
}

//when the app first boot up, the state will be undefined. Redux don't allow returning undefined value => Therefore, default state value to null