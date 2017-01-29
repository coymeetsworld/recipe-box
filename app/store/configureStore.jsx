import { combineReducers, createStore, compose } from 'redux';
import {recipeReducer, addRecipePaneReducer} from 'reducers';
import { loadState, saveState } from 'localStorage';
import throttle from 'lodash/throttle';

export var configure = () => {

	let recipes = loadState();
	
	let reducer = combineReducers({
		recipes: recipeReducer,
		addRecipePane: addRecipePaneReducer
	});
	let initialState = { recipes: recipes, addRecipePane: undefined };
	
	const store = createStore(reducer, initialState, compose(
		window.devToolsExtension ? window.devToolsExtension() : f => f
	));	
	store.subscribe(throttle(() => { /* throttle makes sure we only write to localStorage once a second at most. */
		saveState(store.getState());
	}), 1000);
	
	return store;
};


