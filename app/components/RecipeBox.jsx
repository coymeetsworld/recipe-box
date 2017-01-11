import React from 'react';

import AddRecipePane from 'AddRecipePane';
import Recipe from 'Recipe';

class RecipeBox extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			recipes: props.recipes
		};
		this.handleAddRecipe = this.handleAddRecipe.bind(this);
		this.handleDeleteRecipe = this.handleDeleteRecipe.bind(this);
		this.handleEditRecipe = this.handleEditRecipe.bind(this);
		this.handleUpdateRecipe = this.handleUpdateRecipe.bind(this);
	}
	
	handleAddRecipe(recipe) {
		this.setState({
			recipes: [...this.state.recipes, recipe]
		});
	}
	
	handleDeleteRecipe(recipeId) {
		this.setState({
			recipes : [...this.state.recipes.slice(0,recipeId), ...this.state.recipes.slice(recipeId+1)]
		});
	}
	
	handleEditRecipe(recipeId) {			
		let recipe = this.state.recipes[recipeId];
		recipe.inEditMode = true;
		console.log("Handled");
		let recipes = [...this.state.recipes.slice(0,recipeId), recipe, ...this.state.recipes.slice(recipeId+1)];
		console.log(recipes);
		
		this.setState({
			recipes
		});
	}

	handleUpdateRecipe(recipeId, updatedRecipe) {
		/* Good form to check if updatedRecipe had any changes? Or does React handle that for us? Is it more efficent if we take care of it before calling setState? */
		console.log("Updating recipe: ");
		console.log(updatedRecipe);
		
		let recipes = [...this.state.recipes.slice(0,recipeId), updatedRecipe, ...this.state.recipes.slice(recipeId+1)];
		
		this.setState({
			recipes
		});
	}

	render () {
		var listRecipes = () => {
			return this.state.recipes.map((recipe, recipeIndex) => {
				console.log(recipe);
				return (<Recipe key={recipeIndex}
												id={recipeIndex}
												name={recipe.name} 
												ingredients={recipe.ingredients}
												onDeleteRecipe={this.handleDeleteRecipe}
												onEditRecipe={this.handleEditRecipe}
												onUpdateRecipe={this.handleUpdateRecipe}
												inEditMode={recipe.inEditMode}/>)
												
			});
		};
		
		return (
			<div>
				<AddRecipePane onAddRecipe={this.handleAddRecipe}/>
				<div className="recipe-box">
					{listRecipes()}	
				</div>
			</div>
		)

	}
	
}

export default RecipeBox;
