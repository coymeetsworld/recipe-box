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

	render () {
		var listRecipes = () => {
			return this.state.recipes.map((recipe, recipeIndex) => {
				return (<Recipe key={recipeIndex}
												id={recipeIndex}
												name={recipe.name} 
												ingredients={recipe.ingredients}
												onDeleteRecipe={this.handleDeleteRecipe}/>)
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
