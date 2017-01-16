import React from 'react';

class AddRecipePane extends React.Component {
	
	constructor(props) {
		super(props);
		this.renderShowAddRecipe = this.renderShowAddRecipe.bind(this);
	}
	
	handleSubmit (e) {

		e.preventDefault();
		let name = this.refs.recipeName.value;
		let ingredients = this.refs.recipeIngredients.value.split('\n');
		let directions = this.refs.recipeDirections.value.split('\n');
		let reference = this.refs.recipeReference.value;
		
		if (name === '') { 
			this.refs.recipeName.focus();
		} else if (ingredients.join() === '') { 
			this.refs.recipeIngredients.focus();
		} else if (directions.join() === '') { 
			this.refs.recipeDirections.focus();
		} else {
			this.refs.recipeName.value = '';
			this.refs.recipeIngredients.value = '';
			this.refs.recipeDirections.value = '';
			this.refs.recipeReference.value = '';
			this.props.onAddRecipe({ name, ingredients, directions, reference });
		}
		
	}

	renderShowAddRecipe() {
		return () => {
			this.props.onShowAddRecipe();
		}
	}
	
	renderHideAddRecipe() {
		return () => {
			this.props.onHideAddRecipe();
		}
	}


	render () {
		
		if (this.props.showAddRecipe) {
			return (
				<div className="add-recipe-pane">
					<form onSubmit={this.handleSubmit.bind(this)}>
						<div className="add-recipe-controls">
							<div className="add-recipe-name">
								<span>New recipe name: </span>
								<input type="text" ref="recipeName" placeholder="Recipe name"/>
							</div>
							<div className="button-section">
								<button className='edit-button' onClick={this.renderHideAddRecipe()}>Hide</button>
								<button className='add-button'>Add Recipe</button>
							</div>
						</div>
						<div className="add-recipe-ingredients">
							<p>Ingredients:</p>		
							<textarea ref="recipeIngredients" rows="5" placeholder="Ingredient1&#10;Ingredient2&#10;Ingredient3"/>
						</div>
						<div className="add-recipe-directions">
							<p>Directions:</p>
							<textarea ref="recipeDirections" rows="5" placeholder="Step1&#10;Step2&#10;Step3"/>
						</div>
						<div className="add-recipe-reference">
							<span>Source: </span>
							<input type="text" ref="recipeReference" placeholder="Recipe URL"/>
						</div>
					</form>					
				</div>
			)
		} else {
			return (
				<div className="show-create-recipe-section">
					<button className="show-create-recipe-button" onClick={this.renderShowAddRecipe()}>Create Recipe</button>
				</div>
			);
		}
		
	}	
	
}

export default AddRecipePane;