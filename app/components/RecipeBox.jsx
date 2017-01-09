import React from 'react';

import AddRecipePane from 'AddRecipePane';
import Recipe from 'Recipe';

class RecipeBox extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			recipes : props.recipes
		};
		this.handleAddRecipe = this.handleAddRecipe.bind(this);
	}
	
	handleAddRecipe(recipe) {
		this.setState({
			recipes: [...this.state.recipes, recipe]
		});
	}

	render () {
		console.log("Rend called");
		console.log(this.state);
		var listRecipes = () => {
			let id = 1;
			return this.state.recipes.map((recipe) => {
				return <Recipe key={id++} name={recipe.name} ingredients={recipe.ingredients}/>
			});
		}
		
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
