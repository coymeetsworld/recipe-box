export const addRecipe = (recipe) => {
	return {
		type: 'ADD_RECIPE',
		recipe
	};
};

export const deleteRecipe = (recipeID) => {
	return {
		type: 'DELETE_RECIPE',
		recipeID
	};	
};

/* This is to put recipe in edit mode, maybe give different name */
export const editRecipe = (recipeID) => {
	return {
		type: 'EDIT_RECIPE',
		recipeID
	};
};

/* This actually updates recipe in local storage. */
export const updateRecipe = (recipeID, updatedRecipe) => {
	return {
		type: 'UPDATE_RECIPE',
		recipeID,
		updatedRecipe
	};
};

/* Recipes are collapsed, in show mode recipe is completely shown including instructions and ingredients. */
export const showRecipe = (recipeID) => {
	return {
		type: 'SHOW_RECIPE',
		recipeID
	};
};

export const hideRecipe = (recipeID) => {
	return {
		type: 'HIDE_RECIPE',
		recipeID
	};
};

export const showAddRecipePane = () => {
	return {
		type: 'SHOW_ADD_RECIPE'
	};
};
export const hideAddRecipePane = () => {
	return {
		type: 'HIDE_ADD_RECIPE'
	};
};