import React from 'react';

class AddRecipePane extends React.Component {
	
	constructor(props) {
		super(props);
	}
	
	handleSubmit (e) {

		e.preventDefault();
		let name = this.refs.recipeName.value;
		let ingredients = this.refs.recipeIngredients.value.split(',');
		let directions = this.refs.recipeDirections.value.split(',');
		let reference = this.refs.recipeReference.value;
		
		if (name === '') { 
			this.refs.recipeName.focus(); 
		} else if (ingredients === '') { 
			this.refs.recipeIngredients.focus();
		} else if (directions === '') { 
			this.refs.recipeDirections.focus();
		} else {
			this.refs.recipeName.value = '';
			this.refs.recipeIngredients.value = '';
			this.refs.recipeDirections.value = '';
			this.refs.recipeReference.value = '';
			this.props.onAddRecipe({ name, ingredients, directions, reference });
		}
		
	}

	render () {

		
		return (
			<div className="add-recipe-pane">
				<form onSubmit={this.handleSubmit.bind(this)}>
					<input type="text" ref="recipeName" placeholder="Recipe name"/>
					<textarea ref="recipeIngredients" placeholder="ingredients,in,comma,separated,list"/>
					<textarea ref="recipeDirections" placeholder="directions,in,comma,separated,list"/>
					<input type="text" ref="recipeReference" placeholder="Recipe URL"/>
					<button>Add Recipe</button>
				</form>					
			</div>
		)
		
	}	
	
}

export default AddRecipePane;