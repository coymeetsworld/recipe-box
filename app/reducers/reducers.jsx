export const recipeReducer = (state = {}, action) => {
	switch (action.type) {

		case 'ADD_RECIPE':
			return [
				...state,
				action.recipe
			];
		case 'DELETE_RECIPE':
			return [
				...state.slice(0,action.recipeID),
				...state.slice(action.recipeID+1)
			];
		case 'EDIT_RECIPE':
			return state.map((recipe, index) => {
				if (index === action.recipeID) {
					return {
						...recipe,
						inEditMode : true
					};
				}	
				return recipe;
			});	
		case 'UPDATE_RECIPE':
			return state.map((recipe, index) => {
				if (index === action.recipeID) {
					return {
						...recipe,
						...action.updatedRecipe /* maybe need to fix */
					};
				}	
				return recipe;
			});	
		case 'SHOW_RECIPE':
			return state.map((recipe, index) => {
				if (index === action.recipeID) {
					return {
						...recipe,
						inShowMode : true
					}
				}	
				return recipe;
			});
		case 'HIDE_RECIPE':
			return state.map((recipe, index) => {
				if (index === action.recipeID) {
					return {
						...recipe,
						inShowMode : false,
						inEditMode : false
					}
				}	
				return recipe;
			});
		default:
			return state;
	}	
}

export var addRecipePaneReducer = (state = {}, action) => {
	switch(action.type) {
		case 'SHOW_ADD_RECIPE':
			return {
				visible: true
			}
		case 'HIDE_ADD_RECIPE':
			return {
				visible: false
			}
		default:
			return state;
	}
}