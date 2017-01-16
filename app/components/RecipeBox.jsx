import React from 'react';

import AddRecipePane from 'AddRecipePane';
import Recipe from 'Recipe';

class RecipeBox extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			recipes: JSON.parse(props.recipes),
			showAddRecipe: false
		};
		this.handleAddRecipe = this.handleAddRecipe.bind(this);
		this.handleDeleteRecipe = this.handleDeleteRecipe.bind(this);
		this.handleEditRecipe = this.handleEditRecipe.bind(this);
		this.handleUpdateRecipe = this.handleUpdateRecipe.bind(this);
		this.handleShowRecipe = this.handleShowRecipe.bind(this);
		this.handleHideRecipe = this.handleHideRecipe.bind(this);
		this.handleShowAddRecipe = this.handleShowAddRecipe.bind(this);
		this.handleHideAddRecipe = this.handleHideAddRecipe.bind(this);
	}
	
	handleAddRecipe(recipe) {
		let recipes = [recipe, ...this.state.recipes];
		localStorage.setItem('_coymeetsworld_recipes', JSON.stringify(recipes));
		this.setState({
			recipes,
			showAddRecipe: false
		});
	}
	
	handleDeleteRecipe(recipeId) {
		let recipes = [...this.state.recipes.slice(0,recipeId), ...this.state.recipes.slice(recipeId+1)];
		localStorage.setItem('_coymeetsworld_recipes', JSON.stringify(recipes));
		this.setState({
			recipes
		});
	}
	
	handleEditRecipe(recipeId) {			
		let recipe = this.state.recipes[recipeId];
		recipe.inEditMode = true;

		let recipes = [...this.state.recipes.slice(0,recipeId), recipe, ...this.state.recipes.slice(recipeId+1)];
		localStorage.setItem('_coymeetsworld_recipes', JSON.stringify(recipes));
		this.setState({
			recipes
		});
	}
	
	handleShowRecipe(recipeId) {
		let recipe = this.state.recipes[recipeId];
		recipe.inShowMode = true;
		let recipes = [...this.state.recipes.slice(0,recipeId), recipe, ...this.state.recipes.slice(recipeId+1)];
		this.setState({
			recipes
		});
	}

	handleHideRecipe(recipeId) {
		let recipe = this.state.recipes[recipeId];
		recipe.inShowMode = false;
		recipe.inEditMode = false; /* Can't edit it when hidden, also will lose all changes. */
		let recipes = [...this.state.recipes.slice(0,recipeId), recipe, ...this.state.recipes.slice(recipeId+1)];
		this.setState({
			recipes
		});
	}
	
	handleUpdateRecipe(recipeId, updatedRecipe) {
		/* Good form to check if updatedRecipe had any changes? Or does React handle that for us? Is it more efficent if we take care of it before calling setState? */
		let recipes = [...this.state.recipes.slice(0,recipeId), updatedRecipe, ...this.state.recipes.slice(recipeId+1)];
		localStorage.setItem('_coymeetsworld_recipes', JSON.stringify(recipes));
		this.setState({
			recipes
		});
	}
	
	handleShowAddRecipe() {
		this.setState({
			showAddRecipe: true
		});
	}
	
	handleHideAddRecipe() {
		this.setState({
			showAddRecipe: false	
		});
	}

	render () {
		var listRecipes = () => {
			return this.state.recipes.map((recipe, recipeIndex) => {

				return (<Recipe key={recipeIndex}
												id={recipeIndex}
												name={recipe.name}
												ingredients={recipe.ingredients}
												directions={recipe.directions}
												reference={recipe.reference}
												onDeleteRecipe={this.handleDeleteRecipe}
												onEditRecipe={this.handleEditRecipe}
												onShowRecipe={this.handleShowRecipe}
												onHideRecipe={this.handleHideRecipe}
												onUpdateRecipe={this.handleUpdateRecipe}
												inEditMode={recipe.inEditMode}
												inShowMode={recipe.inShowMode}/>)
			});
		};
		
		return (
			<div>
				<div className="title">
					My Recipe Box
				</div>
				<AddRecipePane onShowAddRecipe={this.handleShowAddRecipe} onHideAddRecipe={this.handleHideAddRecipe} showAddRecipe={this.state.showAddRecipe} onAddRecipe={this.handleAddRecipe}/>
				<div className="recipe-list">
					{listRecipes()}	
				</div>
			</div>
		)
	}
}

export default RecipeBox;
