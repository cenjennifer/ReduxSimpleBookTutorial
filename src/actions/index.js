export function selectBook(book){
	//selectBook is an ActionCreator, it needs to return an action (an object with a type property)
	//action usually have 2 values: type, payload (a piece of data that describes the action that is being undertaken)
	return {
		type: 'BOOK_SELECTED',
		payload: book
	}
}

//need to ensure that if this action creator is wired up to redux